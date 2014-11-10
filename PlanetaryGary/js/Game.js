// NOTE: comments focus mainly on CreateJS logic, not game mechanics.

(function() {
	var c = createjs;
	
	var Game = function(view, width, height, scale) {
		this.view = view; // the SpriteStage instance to draw into
		this.view.mouseChildren = false; // nothing in the game view requires mouse interaction
		this.width = width;
		var h = this.height = height;
		var s = this.scale = scale;
		var b = 170*s;
		
		// define the different layers of terrain, and the sprite labels that can be displayed on them:
		this.terrain = [
			{speed:1, minX:50, maxX:400, minY:0, maxY:h-350*s, bounce:false, labels:["cloud0","cloud1","cloud2"]},
			{speed:2, minX:100, maxX:1000, minY:h-300*s, maxY:h-250*s, bounce:true, labels:["building0","building1","building2"]},
			{speed:3, minX:809-2, maxX:809-2, minY:h-168*s, maxY:h-168*s, bounce:false, labels:["bgMid0","bgMid1","bgMid2"]},
			{speed:3, minX:100, maxX:500, minY:h-290*s, maxY:h-200*s, bounce:true, labels:["midDeco0","midDeco1","midDeco2","midDeco3"]},
			{speed:4, minX:100, maxX:800, minY:h-120*s, maxY:h, bounce:false, labels:["frontDeco0","frontDeco1"]},
			{speed:4, minX:800, maxX:1800, minY:h-30*s, maxY:h-30*s, bounce:false, type:1, x:2000, labels:["trap0", "trap1", "trap2", "enemy0Idle", "enemy1Idle"]},
		];

		this.spriteSheet = null;
		this.sprites = [];
		this.speed = 0;
		this.terrainContainers = [];
		this.shot = null;
		this.hero = null;
		this.spritePool = [];
		this.dead = false;
		this.keyListener = null;
		this.tickListener = null;
		this.shotDelay = null;
		this.stats = null;
		this.kills = null;
		this.distance = null;
		this.hazards = null;
		this.score = 0;

		this._inited = false;
	}

	var p = c.extend(Game, c.EventDispatcher);

	
	p.init = function(spriteSheet) {
		var i,l, s = this.scale;
		
		// the first time a game starts, we need to set up a few things:
		if (!this._inited) {
			this._inited = true;
			
			var bg = new c.Shape();
			bg.graphics
				.beginLinearGradientFill(["#C1F0C7", "#F0F9D1"], [0,1], 0,0, 0,this.height-170*s)
				.drawRect(0,0,this.width,this.height-170*s)
				.beginFill("#f55351").drawRect(0,this.height-170*s,this.width,170*s);
			bg.cache(0,0,this.width,this.height);
			this.view.addChild(new c.Bitmap(bg.cacheCanvas));
			
			var terrain = this.terrain;
			for (i=0,l=terrain.length; i<l; i++) {
				var o = this.view.addChild(new c.SpriteContainer(spriteSheet));
				this.terrainContainers[i] = o;
				terrain[i].x = s*terrain[i].x||0;
			}
			
			// wrap the "gameStats" div in a DOMElement, so we can treat it as a DisplayObject:
			this.stats = this.view.addChild(new c.DOMElement("gameStats"));
		}
		
		// animate in the stats window:
		this.stats.set({alpha:0, x:200, y:40});
		c.Tween.get(this.stats).wait(1000).to({x:40, alpha:1}, 1000, c.Ease.easeOut);
		
		this.spriteSheet = spriteSheet;
		this.dead = false;
		this.score = this.kills = this.distance = this.hazards = 0;
		
		this.hero = this.getSprite("run", 4, false, null, 0);
		this.hero.set({x:-this.hero.getBounds().width, y:this.height-80*s, right:1000})
		c.Tween.get(this.hero).wait(1000).to({x:160*s},3000,c.Ease.get(1));
		
		this.shot = this.getSprite("bulletIdle", 0, false, null, 0).set({visible:false, y:this.hero.y-130*s});
		this.shot.stop();
		
		this.view.addChild(this.shot,this.hero);
		
		// pre-generate a screen of terrain:
		this.speed = 200*s;
		for (i=0; i<this.width*1.1/this.speed; i++) { this.updateTerrain(); }
		this.speed = 5;
		
		// save off our bindings so we can remove listeners later:
		window.document.addEventListener("keydown", this.keyListener = this.handleKeyDown.bind(this));
		this.tickListener = this.view.on("tick", this.tick, this);
	}
	
	p.tick = function(evt) {
		fps = this.spriteSheet.framerate;
		var t =  evt.delta / (1000/fps);
		this.updateShot(t);
		this.updateTerrain(true, t);
		if (!this.dead) {
			this.distance += this.speed*t;
			this.speed = Math.min(12, this.speed+0.005*t); // speed up the game
			this.updateStats();
		}
	}
	
	p.handleKeyDown = function(evt) {
		if (this.dead || this.hero.currentAnimation != "run") { return; }
		if (evt.keyCode == 38) {
			this.hero.gotoAndPlay("jump");
			c.Sound.play("Jump");
		} else if (evt.keyCode == 40) {
			this.hero.gotoAndPlay("slide");
			c.Sound.play("DirtSlide");
		} else if (evt.keyCode == 32 && !this.shot.visible) {
			this.hero.gotoAndPlay("shoot");
			this.shotDelay = 3;
			c.Sound.play("LaserGunShot");
		}
	}
	
	p.updateShot = function(t) {
		if (this.shotDelay && ((this.shotDelay -= t) <= 0)) {
			this.shot.visible = true;
			this.shot.gotoAndPlay("bulletIdle");
			this.shot.x = this.hero.x + 140;
			this.shotDelay = null;
		} else if (!this.shot.visible) { return; }
		
		this.shot.x += t*50*this.scale;
		if (this.shot.x > this.width-this.shot.getBounds().x) {
			// left the screen.
			this.shot.stop();
			this.shot.visible = false;
		}
	}
	
	p.updateTerrain = function(enemies, t) {
		var i,l;
		// move existing terrain elements:
		var speed = this.scale*this.speed*(t||1);
		for (i=this.sprites.length-1; i>=0; i--) {
			var sprite = this.sprites[i];
			if (sprite.type == 0) { continue; }
			sprite.x -= speed*sprite.speed;
			var bounds = sprite.getBounds();
			if (!this.dead && sprite.x < bounds.x-bounds.width) { this.reclaimSprite(sprite, i); }
			else if (sprite.type) { this.processSprite(sprite); }
		}
		
		// generate new terrain:
		var terrain = this.terrain;
		for (i=0,l=terrain.length; i<l; i++) {
			var o = terrain[i];
			if (o.type && !enemies) { continue; }
			o.x -= speed*o.speed;
			if (!o.labels || o.x > 0) { continue; }
			var label = o.labels[Math.random()*o.labels.length|0];
			var sprite = this.getSprite(label, o.speed, o.bounce, i, o.type);
			sprite.y = o.minY+Math.random()*(o.maxY-o.minY)|0;
			sprite.x = this.width-sprite.getBounds().x+o.x;
			if (o.type != null) { this.initSprite(sprite, label); }
			var range = (o.maxX-o.minX) * (o.type ? this.speed/12 : 1);
			o.x += this.scale*(o.minX+Math.random()*range);
		}
	}
	
	p.processSprite = function(sprite) {
		// checks for interactions between sprites.
		if (!sprite.trap && this.shot.visible && !sprite.dead && Math.abs(this.shot.x-sprite.x) < 50*this.scale) {
			// in a more robust game, we'd likely build a simple label matrix instead
			// of using "hacky" string approaches to assemble the label (ex "enemy0Death")
			sprite.gotoAndPlay(sprite.currentAnimation.substr(0,6)+"Death");
			sprite.dead = true;
			this.shot.visible = false;
			c.Sound.play("EnemyHit");
			this.kills++;
		} else if (!this.dead && sprite.trap && Math.abs(this.hero.x-sprite.x) < 80*this.scale) {
			if (sprite.tunnel && this.hero.currentAnimation != "slide") {
				this.die("tunneldeath");
				c.Sound.play("TunnelCollision");
			} else if (!sprite.tunnel && this.hero.currentAnimation != "jump") {
				this.die("death");
				c.Sound.play("HitHard4");
			}
		} else if (!this.dead && !sprite.jumped && sprite.x < this.hero.x-80*this.scale) {
			this.hazards++;
			sprite.jumped = true;
		}
	}
	
	p.initSprite = function(sprite, label) {
		// this uses some fairly specific logic, which could be made more generic for a
		// more robust game, but works for this demo:
		sprite.trap = (label.charAt(0) == "t");
		if (sprite.tunnel = (label == "trap2")) {
			var front = this.getSprite("trap2f", sprite.speed, sprite.bounce);
			this.view.addChild(front).set({x:sprite.x, y:sprite.y});
		}
		sprite.dead = sprite.jumped = false;
		if (!sprite.trap) { sprite.y -= 80*this.scale; }
	}
	
	p.getSprite = function(label, speed, bounce, containerIndex, type) {
		// returns a sprite, either from an object pool or instantiating a new one
		var sprite = this.spritePool.length ? this.spritePool.pop() : new c.Sprite(this.spriteSheet);
		sprite.set({speed:speed, type:type, dead:false});
		sprite.gotoAndPlay(label);
		if (bounce) { c.Tween.get(sprite, {loop:true}).to({scaleY:0.9}, 400).to({scaleY:1}, 400); }
		if (containerIndex != null) { this.terrainContainers[containerIndex].addChild(sprite); }
		this.sprites.push(sprite);
		return sprite;
	}
	
	p.reclaimSprite = function(sprite, index) {
		// deactivates the sprite, and returns it to the object pool for future reuse.
		c.Tween.removeTweens(sprite);
		sprite.stop();
		sprite.scaleY = 1;
		if (sprite.parent) { sprite.parent.removeChild(sprite); }
		if (index == null) { index = this.sprites.indexOf(sprite); }
		if (index != -1) { this.sprites.splice(index, 1); }
		this.spritePool.push(sprite);
	}
	
	p.die = function(label) {
		this.hero.gotoAndPlay(label);
		this.hero.type = null;
		this.dead = true;
		window.document.removeEventListener("keydown", this.keyListener);
		var tween = c.Tween.get(this, {override:true})
			.to({speed:-this.speed*0.5}, 3000, c.Ease.get(-0.6))
			.to({speed:0},4000, c.Ease.get(-0.5)).wait(1000)
			.call(this.endGame, [], this);
		
		var h = this.stats.htmlElement.offsetHeight;
		c.Tween.get(this.stats)
			.to({y:this.hero.y-h-100*this.scale}, 2500, c.Ease.bounceOut)
			.wait(4500).to({alpha:0},1000)
			.on("change", this.alignStats, this);
	}

	p.alignStats = function(evt) {
		this.stats.x += (this.hero.x+250*this.scale-this.stats.x)*0.4;
	}

	p.updateStats = function() {
		// update the gameStats div.
		killsFld.innerText = String(this.kills);
		distanceFld.innerText = String(Math.round(this.distance/10));
		hazardsFld.innerText = String(this.hazards);
		scoreFld.innerText = String(this.kills*100+this.hazards*10000+Math.round(this.distance/10)*100);
	}
	
	p.endGame = function() {
		// clean up listeners, and remove sprites:
		this.view.off("tick", this.tickListener);
		while (this.sprites.length) {
			this.reclaimSprite(this.sprites.pop());
		}
		
		// let GameInit know we are done (all DisplayObjects are event dispatchers):
		this.dispatchEvent("end");
	}
	
	window.Game = createjs.promote(Game, "EventDispatcher");
})();