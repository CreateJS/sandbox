// simple block of code to grab the query string params:
var urlParams = {};
(function () {
	var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);

	while (match = search.exec(query)) {
		urlParams[decode(match[1])] = decode(match[2]);
	}
})();

// our game init logic:
(function() {
	
	var c = createjs;
	var currentStage, gameStage, uiStage = new c.Stage("uiCanvas");
	var canvasW = uiStage.canvas.width;
	var canvasH = uiStage.canvas.height;
	var scale = urlParams.scale?Math.min(0.7, Math.max(0.3, Number(urlParams.scale))):0.7;
	var debug = urlParams.debug !== undefined;
	var queue, progress, progressBmp, menu, game, gameView, currentView;
	var spriteSheet, fps, builder, currentStageListener, delayNode, music;
	
	function init() { 
		currentStage = uiStage;
		progress = currentView = uiStage.addChild(new c.Shape());
		progress.x = canvasW/2;
		progress.y = canvasH*0.75;
		initProgressBmp();
		
		c.Sound.registerPlugins([c.WebAudioPlugin, c.HTMLAudioPlugin]);
		c.Sound.alternateExtensions = ["mp3", "ogg"];
		
		c.Sound.defaultInterruptBehaviour = c.Sound.INTERRUPT_LATE;
		
		// set up the load queue, and listen for its events:
		queue = new c.LoadQueue();
		queue.installPlugin(c.Sound);
		queue.on("progress", handleProgress, this);
		queue.on("fileload", handleFileLoad, this);
		queue.on("complete", handleLoadComplete, this, true);
		
		// let it handle multiple loads concurrently:
		queue.setMaxConnections(8);
		
		// load our assets, starting with everything we need to render the spritesheet:
		queue.loadManifest([
				{src:"libs/tweenjs-NEXT.combined.js"},
				{src:"libs/movieclip-NEXT.combined.js"},
				{src:"assets/PlanetaryGary_art.js", id: "art"},
				{src:"libs/SpriteContainer.js"},
				{src:"libs/SpriteStage.js"},
				{src:"js/Game.js"},
				
				{src:"sounds.json", type:c.LoadQueue.MANIFEST}
			], true);
	}
	
	function handleFileLoad(evt) {
		var o = evt.item;
		if (o.id == "music" && o.type == c.LoadQueue.SOUND) {
			// start the music playing as soon as it's loaded (no need to wait):
			music = c.Sound.play("music", {loop:-1});
			setMusicVolume(1, 10000);
			setupMusicFX(music);
		} else if (o.id == "art") {
			// we now have everything we need to start building the spritesheet,
			// so we'll kick it off to run in parallel:
			fps = lib.properties.fps;
			generateSpriteSheet();
		}
	}
	
	function setupMusicFX(soundInstance) {
		if (!soundInstance.gainNode) { return; }
		delayNode = c.Sound.activePlugin.context.createDelay();
		delayNode.connect(c.Sound.activePlugin.dynamicsCompressorNode);
		delayNode.delayTime.value = 0;
		soundInstance.gainNode.connect(delayNode);
	}
	
	function playSoundFX() {
		if (!delayNode) { return; }
		createjs.Tween.get(delayNode.delayTime, {override:true})
			.to({value:1}).to({value:0}, 2200, createjs.Ease.bounceInOut);
	}
	
	function handleProgress(evt) {
		drawProgress(evt.loaded/evt.total);
		uiStage.update(evt);
	}
	
	function drawProgress(value) {
		progress.graphics.clear()
			.beginFill("#EB2").drawRoundRect(-103,-13,206,26,13)
			.beginBitmapFill(progressBmp).drawRoundRect(-100,-10,value*200|0,20,10);
	}
	
	function handleLoadComplete() {
		queue = null;
		
		// if the SpriteSheetBuilder isn't done, we'll reduce its timeslice to 10% keep
		// the menu running smoothly:
		if (builder) { builder.timeSlice = 0.1; }
		
		// instantiate the menu view from the library (published from Flash),
		// and get it set up correctly:
		menu = uiStage.addChild(new lib.Menu());
		menu.stop();
		menu.startBtn.on("click", startClicked, this);
		
		// this is dispatched from the timeline of the menu view when it hits the end of
		// the start game animation:
		menu.on("start", function() {
			menu.stop();
			startGame();
		});
		
		// swap out the progress view for the menu view:
		swapView(menu);
		
		// set up the game view:
		gameStage = gameView = new c.SpriteStage("gameCanvas");
		gameStage.snapToPixelEnabled = true; // this prevents seams on abutted background tiles.
		
		// instantiate the Game logic (defined in Game.js)
		window.game = game = new Game(gameView, canvasW, canvasH, scale);
		game.on("end", endGame, this);
		
		// set up our ticker's default FPS:
		c.Ticker.setFPS(fps);
	}
	
	function swapView(view) {
		// this swaps the current view with the specified view:
		currentView.visible = false;
		view.visible = true;
		currentView = view;
		
		// only the menu view requires mouseovers, so we disable them for other views
		// to save some CPU. In a more robust app, with more views, we might handle this
		// more generically.
		uiStage.enableMouseOver( view == menu ? 10 : 0 );
		
		// tween the volume based on state:
		setMusicVolume(view == menu ? 1 : 0.3, 2000);
		
		// hide the UI canvas if we don't need it:
		uiStage.canvas.style.visibility = (view == gameView) ? "hidden" : "visible";
		
		// update the Ticker:
		c.Ticker.off("tick", currentStageListener);
		currentStage = (view == gameView) ? gameStage : uiStage;
		currentStageListener = c.Ticker.on("tick", currentStage);
		
		// the game runs in RAF mode so it's silky smooth
		// the menu runs at its nominal framerate
		c.Ticker.timingMode = (view == gameView) ? c.Ticker.RAF : c.Ticker.TIMEOUT;
	}
	
	function initProgressBmp() {
		// generate the barber pole pattern that we will fill our progress bar with:
		var shape = new c.Shape();
		shape.graphics.beginFill("#333").drawRect(0,0,20,20).beginFill("#EB2")
			.moveTo(0,0).lineTo(10,0).lineTo(0,10).closePath()
			.moveTo(0,20).lineTo(20,0).lineTo(20,10).lineTo(10,20).closePath();
		shape.cache(0,0,20,20);
		progressBmp = shape.cacheCanvas;
	}
	
	function startClicked() {
		menu.mouseEnabled = false;
		menu.play();
		c.Sound.play("PressPlay");
		
		playSoundFX();
	}
	
	function generateSpriteSheet() {
		builder = new c.SpriteSheetBuilder();
		builder.on("complete", handleBuildComplete, this, true);
		
		// this sets the global scale for all the sprites.
		// it is multiplied against the individual scale.
		builder.scale = scale;
		
		// add all of the symbols we want in our spritesheet, and specify scales:
		builder.addMovieClip(new lib.BGBuilding, null, 0.8);
		builder.addMovieClip(new lib.BGCloud);
		builder.addMovieClip(new lib.BGFrontDeco);
		builder.addMovieClip(new lib.BGMid);
		builder.addMovieClip(new lib.BGMidDeco);
		builder.addMovieClip(new lib.EnemyBeaver, null, 0.65);
		builder.addMovieClip(new lib.EnemyMoose, null, 0.65);
		builder.addMovieClip(new lib.Hero, null, 0.8);
		builder.addMovieClip(new lib.HeroBullet);
		builder.addMovieClip(new lib.Trap, null, 0.8);
		
		// generate the sprite sheet asynchronously (in the background),
		// using 95% of available CPU:
		builder.buildAsync(0.95);
	}	
	
	function handleBuildComplete() {
		spriteSheet = builder.spriteSheet;
		spriteSheet.framerate = fps;
		
		// set up "next" properties on some of the sprite sheet animations.
		// for example, so death does not loop, and jump continues into run.
		var o = {death:false, tunneldeath:false, enemy0Death:false, enemy1Death:false, jump:"run", slide:"run", shoot:"run"}
		for (n in o) { spriteSheet.getAnimation(n).next = o[n]; }
		
		// if the user has already hit start, then start the game:
		if (builder.startGame) { startGame(); }
		builder = null;
		
		if (debug) {
			for (var i=0, imgs = spriteSheet._images; i<imgs.length; i++) {
				document.body.appendChild(imgs[i]);
			}
		}
	}
	
	function startGame() {
		if (spriteSheet) {
			// the sprite sheet is done building, so we can swap to the game view:
			game.init(spriteSheet, delayNode);
			swapView(gameView);
		} else {
			// the sprite sheet build is not complete yet, so show the progress bar:
			swapView(progress);
			builder.on("progress", function(evt, data) {
				drawProgress((evt.target.progress-data)/(1-data));
			}, this, false, builder.progress);
			
			// increase the CPU utilization to ~95% to speed things up:
			builder.timeSlice = 0.95;
			
			// handleBuildComplete will check this:
			builder.startGame = true;
		}
	}
	
	function endGame() {
		// fade up music volume, reset the menu view, and swap it in:
		menu.mouseEnabled = true;
		menu.gotoAndStop(0);
		swapView(menu);
	}

	function setMusicVolume(volume, time) {
		c.Tween.get(music, {override:true}).to({volume:volume}, time);
	}
	
	init();
	
})();

// required for the timeline sounds:
window.playSound = function(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}