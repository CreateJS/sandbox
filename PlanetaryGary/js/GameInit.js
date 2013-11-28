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
	var stage = new c.Stage("gameCanvas");
	var canvasW = stage.canvas.width;
	var canvasH = stage.canvas.height;
	var scale = urlParams.scale?Math.min(1, Math.max(0.35, Number(urlParams.scale))):0.75;
	var debug = urlParams.debug !== undefined;
	var queue, progress, menu, game, gameView, currentView, progressBmp, storage, spriteSheet, music;
	
	function init() { 
		progress = currentView = stage.addChild(new c.Shape());
		progress.x = canvasW/2;
		progress.y = canvasH/2;
		initProgressBmp();
		
		// set up the load queue, and listen for its events:
		queue = new c.LoadQueue(true);
		queue.installPlugin(c.Sound);
		queue.on("progress", handleProgress, this);
		queue.on("fileload", handleFileLoad, this);
		queue.on("complete", handleComplete, this);
		
		// load our assets, starting with everything we need to render the spritesheet:
		queue.loadManifest([
			{src:"libs/tweenjs-NEXT.min.js"},
			{src:"libs/movieclip-NEXT.min.js"},
			{src:"assets/PlanetaryGary_art.js", id: "art"},
			{src:"js/Game.js"},
			{src:"sounds.json", type:c.LoadQueue.MANIFEST}
		]);
	}
	
	function handleProgress(evt) {
		drawProgress(evt.loaded/evt.total);
		stage.update();
	}
	
	function handleFileLoad(evt) {
		console.log(evt);
		var o = evt.item;
		if (o.type == c.LoadQueue.JAVASCRIPT) {
			// add JS to the document as it loads:
			document.body.appendChild(evt.result);
		}
		if (o.id == "art") {
			// we now have everything we need to start building the spritesheet,
			// so we'll kick it off to run in parallel:
			if (!spriteSheet) { generateSpriteSheet(); }
			
			// the order of loading doesn't matter for the rest of the assets,
			// so we'll allow more connections so they load faster:
			queue.maxConnections = 4;
		} else if (o.id == "music") {
			// start the music playing as soon as it's loaded (no need to wait):
			music = c.Sound.play("music", null, 0, 0, -1, 0);
			setMusicVolume(1, 10000);
		}
	}
	
	function drawProgress(value) {
		progress.graphics.clear()
			.beginFill("#EB2").drawRoundRect(-103,-13,206,26,13)
			.beginBitmapFill(progressBmp).drawRoundRect(-100,-10,value*200|0,20,10);
	}
	
	function handleComplete() {
		queue = null;
		
		// instantiate the menu view from the library (published from Flash),
		// and get it set up correctly:
		menu = new lib.Menu();
		menu.stop();
		menu.startBtn.addEventListener("click", startClicked, this);
		
		// this is dispatched from the timeline of the menu view when it hits the end of
		// the start game animation:
		menu.addEventListener("start", function() {
			menu.stop();
			startGame();
		});
		
		// swap out the progress view for the menu view:
		swapView(menu);
		
		// set up the game view, but don't add it to the display list yet:
		gameView = new c.Container();
		
		// instantiate the Game logic (defined in Game.js)
		window.game = game = new Game(gameView, canvasW, canvasH, scale);
		game.addEventListener("end", endGame, this);
		
		// set up our ticker:
		c.Ticker.addEventListener("tick", stage);
		c.Ticker.setFPS(20);
	}
	
	function swapView(view) {
		// this swaps the current view with the specified view, and cross fades them:
		view.alpha = 0;
		c.Tween.get(currentView, {override:true}).to({alpha:0},400).call(stage.removeChild, [currentView], stage);
		c.Tween.get(view, {override:true}).wait(400).to({alpha:1}, 500);
		currentView = stage.addChild(view);
		
		// only the menu view requires mouseovers, so we disable them for other views
		// to save some CPU. In a more robust app, with more views, we might handle this
		// more generically.
		stage.enableMouseOver( view==menu ? 10 : 0 );
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
	}
	
	function generateSpriteSheet() {
		builder = new c.SpriteSheetBuilder();
		builder.addEventListener("complete", handleBuildComplete, this);
		
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
		// using only ~20% of available CPU so our UI remains responsive:
		builder.buildAsync(0.2);
	}
	
	function startGame() {
		if (spriteSheet) {
			// the sprite sheet is done building, so we can swap to the game view:
			game.init(spriteSheet);
			swapView(gameView);
			drawProgress(1);
			// tween the music volume down:
			setMusicVolume(0.3, 2000);
		} else {
			// the sprite sheet build is not complete yet, so show the progress bar:
			swapView(progress);
			var p = builder.progress;
			builder.addEventListener("progress", function(evt) {
				drawProgress((evt.target.progress-p)/(1-p));
			});
			// increase the CPU utilization to ~80% to speed things up:
			builder.timeSlice = 0.8;
			// handleBuildComplete will check this:
			builder.startGame = true;
		}
	}
	
	function handleBuildComplete() {
		spriteSheet = builder.spriteSheet;
		
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
	
	function endGame() {
		// fade up music volume, reset the menu view, and swap it in:
		setMusicVolume(1, 2000);
		menu.mouseEnabled = true;
		menu.gotoAndStop(0);
		swapView(menu);
	}

	function setMusicVolume(volume, time) {
		// we need a property to tween, so we'll add one onto the music object:
		music.__volume = music.getVolume();
		var tween = c.Tween.get(music, {override:true}).to({__volume:volume}, time);
		
		// when the value changes, we'll update the volume using setVolume:
		tween.addEventListener("change", function(evt) { music.setVolume(music.__volume); });
	}
	
	init();
	
})();

// required for the timeline sounds:
window.playSound = function(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}