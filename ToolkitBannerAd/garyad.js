(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.garyad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{WaitMooseReady:234,WaitBeaverReady:277});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		this.bg.addEventListener("click", function() {
			window.location = "http://createjs.com/";
		});
	}
	this.frame_220 = function() {
		this.tryBtn.addEventListener("click", (function() {
			this.play();
		}).bind(this));
	}
	this.frame_234 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		playSound("LaserGunShot");
	}
	this.frame_245 = function() {
		playSound("EnemyHit");
	}
	this.frame_277 = function() {
		this.stop();
	}
	this.frame_282 = function() {
		playSound("LaserGunShot");
	}
	this.frame_288 = function() {
		playSound("EnemyHit");
	}
	this.frame_316 = function() {
		this.gotoAndStop("WaitMooseReady");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(220).call(this.frame_220).wait(14).call(this.frame_234).wait(5).call(this.frame_239).wait(6).call(this.frame_245).wait(32).call(this.frame_277).wait(5).call(this.frame_282).wait(6).call(this.frame_288).wait(28).call(this.frame_316));

	// herobullet
	this.instance = new lib.HeroBullet("synched",0);
	this.instance.setTransform(177.4,50.4,0.901,0.901,0,0,0,-29.6,0.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({startPosition:0,_off:false},0).to({x:587.4},7).to({_off:true},1).wait(35).to({x:207.4,_off:false},0).to({x:587.4},7).to({_off:true},1).wait(27));

	// PlasmexLogo
	this.instance_1 = new lib.PlasmexPopup();
	this.instance_1.setTransform(320,50.3,0.097,0.097,0,0,0,158.7,49.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.instance_1.cache(-1,-1,321,103);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(166).to({_off:false},0).to({scaleX:0.81,scaleY:0.81,x:320.1,y:46.3,alpha:1},10,cjs.Ease.get(1)).wait(30).to({scaleX:0.54,scaleY:0.54,x:230.3,y:50.5},8,cjs.Ease.get(1)).to({regX:158.8,regY:49.2,scaleX:0.52,scaleY:0.52,x:261.1,y:49.3},5).wait(98));

	// TryIt
	this.tryBtn = new lib.TryIt();
	this.tryBtn.setTransform(458.2,29.5,0.437,0.437,0,0,0,81.2,21.3);
	this.tryBtn._off = true;
	new cjs.ButtonHelper(this.tryBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tryBtn).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,x:458.1,y:49.5},3).wait(97));

	// YOUNEED
	this.text = new cjs.Text("YOU NEED", "bold 64px Verdana", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.setTransform(322.2,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},141).to({state:[]},26).to({state:[]},31).wait(119));

	// BloodthirstyText
	this.instance_2 = new lib.BloodthirstyText();
	this.instance_2.setTransform(431.6,36.3,1,1,0,0,0,179.2,10.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({x:336.6,alpha:1},13,cjs.Ease.get(1)).to({x:316.6},41).to({regX:179.1,regY:10.6,scaleX:0.12,scaleY:0.12,x:254.5,y:42.2,alpha:0},6,cjs.Ease.get(-0.99)).to({_off:true},1).wait(217));

	// NewPlanetText
	this.instance_3 = new lib.NewPlanetText();
	this.instance_3.setTransform(433.6,62.3,1,1,0,0,0,170.9,10.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({x:328.3,alpha:1},15,cjs.Ease.get(1)).to({x:317.6},35).to({regX:171,regY:10.6,scaleX:0.12,scaleY:0.12,x:253,y:56.4,alpha:0},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(177));

	// SpaceHeroText
	this.instance_4 = new lib.SpaceHeroText();
	this.instance_4.setTransform(419.5,132,1.045,1.648,0,0,0,179.2,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.35,scaleY:0.81,y:49.1},4,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.65,y:49},5,cjs.Ease.get(-0.99)).wait(19).to({scaleX:2.69,scaleY:4.25,y:38.9,alpha:0},6,cjs.Ease.get(-0.99)).to({_off:true},1).wait(282));

	// heroshoot
	this.instance_5 = new lib.HeroShoot("synched",0,false);
	this.instance_5.setTransform(70.2,68.5,0.648,0.648,0,0,0,26.2,-137.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(235).to({startPosition:0,_off:false},0).to({_off:true},12).wait(31).to({startPosition:0,_off:false},0).to({_off:true},12).wait(27));

	// hero
	this.instance_6 = new lib.Hero();
	this.instance_6.setTransform(70.4,65.1,0.65,0.65,0,0,0,26.3,-137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},235).wait(12).to({_off:false},0).to({_off:true},31).wait(12).to({_off:false},0).wait(27));

	// EnemyMoose
	this.instance_7 = new lib.EnemyMoose("single",0);
	this.instance_7.setTransform(827.6,59.7,0.885,0.885,0,0,0,-3.8,-105.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({startPosition:0,_off:false},0).to({scaleX:0.97,scaleY:0.97,x:664.6,y:58.8},18,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,x:628.6,y:56.8},150).to({scaleX:0.41,scaleY:0.41,x:639.6,y:51.7,mode:"independent"},9,cjs.Ease.get(0.83)).wait(23).to({mode:"synched",startPosition:16,loop:false},0).wait(19).to({startPosition:35},0).to({alpha:0,startPosition:39},4).to({_off:true},1).wait(42).to({mode:"independent",_off:false},0).to({alpha:1},5).wait(1));

	// EnemyBeaver
	this.instance_8 = new lib.EnemyBeaver();
	this.instance_8.setTransform(638,50.3,0.377,0.377,0,0,0,-5.2,-104.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(272).to({_off:false},0).to({alpha:1},5).wait(11).to({mode:"synched",startPosition:24},0).wait(14).to({mode:"single",startPosition:38},0).to({alpha:0},5).to({_off:true},1).wait(9));

	// bg
	this.instance_9 = new lib.BGMidGround();
	this.instance_9.setTransform(351.5,123.3,1,1,0,0,0,0,-80.6);

	this.bg = new lib.Background();
	this.bg.setTransform(363.5,45,1,1,0,0,0,364.5,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.instance_9}]}).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-15.4,731,189.2);


// symbols:



(lib.TryIt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEC724").s().p("AgWA5QgPgBgLgLQgTgJgEgWQgEgUAPgPQAJgJAKgGQAEgGAGgFQAOgLARAAQAPAAAOALQAVAJARAYQALAPgJAXQgJAXgUADIgkAGQgGACgIAAIgFABIgHgCg");
	this.shape.setTransform(140.7,23.1,0.362,0.362);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEC724").s().p("AhzAyQhPgDg6gNQgUgEAAgWQAAgTAUgFQA7gNBXgCQAxgCBgAAQAZAAAygGQAxgGAZgBQAPAAAVgEQASgBASAKQAOAHgBAOQgBAOgMAGQgtAhhFALQgpAGhTABIg+AAIhLgBg");
	this.shape_1.setTransform(120.8,13.3,0.362,0.362);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEC724").s().p("AAEEHQgShlgWioQgIg7AEg4QACgoAAgJQgBgcgMgRQgVgeAggYQAfgYAWAaQAhAlAABIQgGBTADAkQAMBjAEAzQAGBagMA+QgEASgVAAQgUAAgEgSg");
	this.shape_2.setTransform(120.6,22.2,0.362,0.362);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEC724").s().p("AgaDfQgEgeAAg4QgSiPADjmQABgXAUgLQATgLASAKQASAKAHARQAHASgLAOIACCNQABBNAFA9IAEA5QABAggEAZIgGApQgBAJAAAJQAMAIgFAPQgGAOgOAAIAAAAQgpAAgIg2g");
	this.shape_3.setTransform(106.1,22.7,0.362,0.362);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEC724").s().p("Ag4DQQgFgzAGhnQAFhBALgfQgagIgdgfIgsgzQgggkgMgYQgTgkAKgjQAEgOAQgCQAPgDAHAOQAfA7AoAmIAeAjQAZAcAKgDQATgIAXgaIAigsIAXgeQAcgoAPgeQANgbAfANQAeANgKAcQgPApgfAuQgdAqgjAiIggAeQgTAQgSAHQgHAPAAAKQABAbgBAcQgGBmABATQACBGAaAsQAGALgFAKQgEAKgLAEQgKAEgHAAQgtAAgKhkg");
	this.shape_4.setTransform(75.7,22.4,0.362,0.362);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEC724").s().p("AjlDsQgPgqAChCQABgXAJhYQAEgqgGhDQgJhbAAgUQgBgLAIgKQAIgLALgCQBigTBMAGQBvAKAfBFQAWAwgUAwQgSArgvAgQgVAOgWAKQgRAHggAJIgvAOQA0AWBkA0QBaApBHgEQAigCAAAjQAAAjgiADQhVAIhxg4Qg8gggfgPQg3gbgpgMIgCAlIgBAxQgCAdgHATQgFAQgQAAQgQAAgFgQgAisitIAIBaQAEA1gDAlQAegRA6gRQAsgNAigYQA0gkgUgiQgXgmhDgHQgPgBgSAAQglAAgvAHg");
	this.shape_5.setTransform(57.1,21.5,0.362,0.362);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEC724").s().p("AjYAmQgOgCAAgQQABgPANgDQBHgMCRgSIBwgQQBFgFAmAVQAMAGAAAOQgBAMgLAHQgVAMgfAEIg4ADQglAChKAHQhFAHgmAAIgMAAQg2AAgrgIg");
	this.shape_6.setTransform(35,13.4,0.362,0.362);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEC724").s().p("AgdDUQgGggAAhIQgBhEgIgkQgEgTABgiIACg3QABgnACgUQADggAIgaQAGgSATAAQAQAAAGASQAOAtABBQQACBfAFAdQASB1gMBDQgFAcghAAQgeAAgFgcg");
	this.shape_7.setTransform(34.6,22,0.362,0.362);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEC724").s().p("AgpA3QgLgHgGgKQgNgWANgYQAMgaAWgPQAWgPAbAFQANACAKAMQAJALACAOIABABIAEAJIABAKIgBAKIgEAJQgIAQgQADIgJACQgRASgcADIgDAAQgKAAgKgGg");
	this.shape_8.setTransform(18.2,23.4,0.362,0.362);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BLQgCgSADgmQABgWAEgLQgJgDgKgLIgQgSQgMgOgEgIQgHgNADgNQACgFAGgBQAFgBADAFQALAWAOANIALANQAJAKAEgBQAHgDAJgJIAMgQIAIgLQAJgOAFgLQAFgKALAFQALAEgEAKQgFAPgMARQgKAPgLAMIgLALQgHAGgHADQgCAFAAAEIAAASIgCAsQABAZAJAQQACAEgCAEQgBADgEACIgHABQgQAAgEgkgAD/BUQgBgLAAgUQgHg1ABhRQABgIAHgEQAHgEAHAEQAHADACAGQACAHgEAFIABAzIACAwIACAVQAAAMgBAJIgCAPIgBAGQAFADgCAFQgCAGgFAAQgQAAgDgUgAGbBdQgHgkgIg8QgDgVACgUIAAgSIgBgJIgYAAQgdgBgVgFQgHgBAAgIQAAgIAHgCQAVgFAgAAIAdgBQADgBADABIASAAQAJAAASgCIAbgCIANgCQAGAAAHADQAFADAAAFQgBAFgEADQgQAMgZAEQgOABgZABIABANQgDAeACANIAFA1QADAhgFAWQgBAHgIAAQgHAAgCgHgAkzBNQgFgQAAgYIAEgmQACgQgCgYIgEgoQAAgEADgEQADgDAEgBQAjgHAbACQApAEAMAZQAIARgIARQgGAQgRAMQgIAFgIACIgSAGIgRAFQATAIAkATQAhAOAagBQAMgBAAANQAAAMgMABQgfADgpgUIgigRQgTgJgPgFIgBAOIAAARQgBALgCAHQgCAFgGAAQgGAAgCgFgAkehGIADAhQABATgBAOQALgHAVgGQAQgFANgJQATgNgIgMQgIgOgZgCIgLgBQgOAAgRADgAnLBIQgCgLAAgaQgBgZgCgLQgCgIAAgMIABgUIABgVIABgLIgVACQgWAAgRgDQgFgBAAgGQAAgFAFgBQAZgGA2gGIAogGQAZgCAOAIQAEACAAAFQAAAFgEADQgIAEgLACIgUABIgkADQADAOAAAWQABAiACAKQAGAqgEAYQgCAKgMAAQgLAAgCgKgAp0AeQgEgDgCgEQgEgHAEgKQAEgHAIgGQAIgFALACQAFAAADAFQAEAEAAADIABAAIABAEIABADIgBAEIgBAEQgDAFgGABIgDABQgGAHgLABIgCAAQgDAAgEgCgAJaAcQgFgBgFgEQgGgDgCgIQgBgIAFgEQADgDAEgCIAEgEQAFgEAGAAQAGAAAFAEQAIAEAGAGQAEAGgDAJQgEAIgHABIgNACIgGABIgBAAIgDAAg");
	this.shape_9.setTransform(79.6,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("EggQADOQghAAgXgdQgXgcAAgpIAIk5QAKAZATAPQATAPAXAAMBAiAAAQAVAAATgOQARgNALgXIAKE0QAAApgXAcQgXAdggAAg");
	this.shape_10.setTransform(81.2,30.9,0.362,0.362);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EghkAJOQgpgBgdgiQgcgjAAgxIAauuQgBgxAdgiQAcgjApAAMBCRAAAQAoAAAcAjQAdAiAAAxIAgOuQAAAxgcAjQgdAigpABgEgh6gINQgTAXAAAfIgZOwQgBAfAUAWQATAXAcAAMBDJAAAQAcAAATgXQATgWAAggIgguvQAAgfgSgXQgUgXgbAAMhCRAAAQgcAAgTAXg");
	this.shape_11.setTransform(81.2,21.3,0.362,0.362);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("EghlAI5QghAAgYgcQgYgdAAgpIAZuuQAAgoAYgdQAYgcAiAAMBCRAAAQAhAAAYAcQAYAdAAAoIAgOuQAAApgYAdQgYAcgiAAg");
	this.shape_12.setTransform(81.2,21.3,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.5,42.7);


(lib.SpaceHeroText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("HEY SPACE HERO!", "bold 35px Verdana", "#B64444");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.setTransform(177.2,0);

	this.text_1 = new cjs.Text("HEY SPACE HERO!", "bold 35px Verdana", "#990000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.setTransform(177.2,2.5);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,358.5,48.5);


(lib.PlasmexPopup = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEC724").s().p("AgOA4QgFgBgFgEQgHgDgIgIQgOgNgBgWIABgMQABgOAGgLIAAAAQADgFAFgEIAAgBQAFgFAFgCQALgHAOAAQALAAALAHQAGADADAEIABABIAHAJIAAAAIAFAFQAOASAAAOQAAAPgOATQgKAMgWADQgHADgGAAIgKgBg");
	this.shape.setTransform(125.2,33,0.424,0.424);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYBeQgMgEgHgFQgOgHgKgKQgYgXgDgmQAAgHABgKIABgBQABgWALgTIADgFQAFgIAFgEIACgDQAHgGAKgGQAUgMAZAAQAXAAAUAMIAQAMIACADIAPAQQAWAeAAAbQAAAegWAdQgTAYgiAGQgMAEgMAAQgKAAgKgDg");
	this.shape_1.setTransform(125.2,33,0.424,0.424);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEC724").s().p("AgfCkQgugMgiguQghgtgBgxQgCgzAngcIAAgEQAEhLBTgRQBPgQAwA3QA0A6gPBNQgNBKg+A0QgkAeglAAQgNAAgNgDgAgphAQACAKgFAJQgEAKgLAFQgVAIAAAbQABAZARAaQASAaAXAFQAZAGAYgcQAZgdAIgjQAKgpgagXQgRgOgXAAQgTAAgbANg");
	this.shape_2.setTransform(115.1,31.9,0.424,0.424);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhyCjQgsgpgSg4QgOguAHgmQAIgpAbgbQAIg1ArgiQArggA7gBQAnAAAiAOQAiAPAXAZQA5BAgGBUQgEAtgZAuQgYAvgoAhQgvAng1AAQg6AAgxgrgAgFgkQgIAcgbALQgBANAMASQAKAOAHAAQAEAAAHgJQANgSAHgVQAJgYgKgJQgGgFgHAAIgKACg");
	this.shape_3.setTransform(115.2,31.9,0.424,0.424);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEC724").s().p("AhsCJQgqgjACg0QACgvAUguQAUgwAfgjQAfgkAmgDQApgFAYApQAMAVgRAQQgSAPgVgJQgFgCgGAFIgKAOQgPASgNAcQgOAcgEAOQgJAdALAQQAIAOAcgEQAOgDAYgJQARgFAigOQAegJAXAEQALACAGALQAGALgEAKQgNAog3AbQgwAYgvADIgJABQguAAglgeg");
	this.shape_4.setTransform(102.6,36.2,0.424,0.424);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYDOQgjAAghgNQgggOgXgYQgrgsACg/QADgzAWg2QAWg3AjgpQAXgZAcgNQAcgOAbgBQA8ABAhA3QAKARABASQAAATgJAQQgKARgSAKQgRAKgVAAIgHAAQgMAPgKAVIAAAGQgNAbgCAHQAMgDALgEIAZgKQAYgJANgDQAWgFAUAAQAKAAAOABQAbAFAQAZQAQAbgKAcQgSA2hEAkQg4Acg5ADg");
	this.shape_5.setTransform(102.6,36.2,0.424,0.424);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEC724").s().p("An1G/QgVgDgBgVQgCgpgRgxQgKgcgZg5QgPgfgNguQgwAGghgKQgWgHABgWQAAgVAVgIIA8gUIgBgCIgThXQgLg1gNggIgahDQgOgngFgeQgFgiAagWQAagYAgAUQBKAuBKBPQAjAmBcBvIADADQAlgJAYAcQAXAdgLAhQAdAfAdAZIBZBLQADgUAPgRQAKgMARABQAQAAALALIARAQQAEADAMADQAdAGAvgFQBUgJBLgiQAPgFAIgGQgDACAIgLQAKgMABgDQADgMgCgLQgJgggXggQgXgegdgSQgmgZg+AEQhGAKgiADQg3AGgcABQgyACgggNQgvgSgIgsQgHgpAegpQAmg0A/gnQA5gjBFgVQBLgXA5AYQAQAHAjASQAhAPAVACQA+gjB1gnIBGgXQApgNAcgLQAVgIArgUQAmgQAdgCQAZgBAOAYQAOAZgOAVQgfAwhRAfQgOAGh7AkIgUAGQAWA/A9BuQBBByAVA4QAJAGAEAIIACACQAJAPgCATQgDAUgMALQgQAOgUAFQgXAHgUgMQgTgMgIgXQgYhAg4h8QguhwgKhUQiJAog1ASQgVAHgOgSQgOgSAKgSIgogHQg4gLhRApQhGAigdAcQAlgBA3gFIBagKQCRgOBdB2QA3BEAJBCQALBPg6A6QgbAbgvAUQgfANg1AOQhAAQgnAFQg7AGgsgNIgHgDQgBAkglAMQgjALgagYIhzhnQhDg8gsgwQgeAHhcAPIgDABQAfBaALAuQAUBQgVA6QgGARgRAAIgEAAgAopgIIARBFQAdgIAngNQhFhVgfgjIAPBIg");
	this.shape_6.setTransform(66,34.3,0.424,0.424);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AofHVQgSgSgBgaQgCgjgQgtQgJgcgYg0IAAAAQgLgYgJgdIgGABQgfAAgbgJQgWgGgOgRQgNgSgBgWQAAgXANgTQAMgTAWgJIAbgJIgGgeQgQhIgLgfIgKgXQgQgogGgTQgLghgFgdQgDgVAGgWQAGgXAPgRQAbgfAoAAQAaAAAWANQBKAvBIBLQAsAsBOBfIAHAJQAXABAUAKQAVALAOAUQAWAegCAlQATATAXAVIAyAqQAVgaAjABQAhgBAXAXIALALIAEABQAIACASAAQAUAAAQgCQBPgIBEggIAKgEIAHgIQgHgZgTgaQgSgZgWgOQgYgNgkAAQgUAAgwAFQggAFgTACIgeACQgzAFgUAAQgvAAgkgOQg7gVgRg4QgJgfAHggQAHghAWgeQApg3BAgpQA/gqBQgYQAogNAoABQAqgBAlAPIAiAQQAfARASAFQA9ghBwglIAqgOQBBgVAegLIAigPQAggPATgGQAegLAcgCIAFAAQAWAAATAMQAUAMALAVQALAVAAAXQgBAXgMATQghAyhIAhQgqAUhYAYIgPAEQAVAwAxBXQA7BnAVA3QAFAEAIAMIACACQARAagEAjQgFAjgYAVQgWAUgdAHQgMAEgOAAQgfAAgZgSQgZgTgLgfQgOgkghhNQghhJgPgoQgZhCgLg3IhoAgQAuAdAlAuQBHBaAEBVQADBWhABBQgfAegyAWQglAQg6APQhcAZg8AAQgWgBgYgEQgNAVgWALQgWAMgbAAQgnAAgdgbIg1gvQhxhlgugwIg8AKIAFAPQAZBKAHAqQAKBEgUA5QgHAUgRAMQgRAMgVAAQgaAAgTgSg");
	this.shape_7.setTransform(66,34.4,0.424,0.424);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEC724").s().p("Ag5EqQgVgCgLgOQglgvgOhVQgIgwgNhfIggiGQgRhQAIg6QAEgaAbgFQAbgGAFAcQAKAwAXBJIAnB3QAHAZAHAsQAIAyAFAVQADAJADAXIAHAiQAbgIAhgCQAXgBAigJQApgLAPgDQAagEATARQAUASgIAaQgSBBhQAIQgtADgWACQgmAEgWAOQgMAHgQAAIgHAAg");
	this.shape_8.setTransform(31.7,41.3,0.424,0.424);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah4EzQghgqgQg7QgKgkgIhHQgGg3gHgcIgNgzQgThNgGgnQgLhCAIg1QAEgdAWgTQAWgTAcAAQAZAAASAQQARAOAFAZQALA2AgBfQAUA6AIAeQAIAbAIA0QAHAtAFARIAEAdIAcgDQAVgBAkgLQAfgIAVgDIAPgBQAWAAATAJQAUAJANARQAYAhgLAoQgSA/g2AYQgfAOhBADQgeACgNACQgWADgKAIQgVANgdAAQgsAAgZgfg");
	this.shape_9.setTransform(31.7,41.4,0.424,0.424);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEC724").s().p("AiAFwQgXgbAHgiQg0gzgZhkQgOg5gQhvQgIguABg6QABg2AIgzIAFgWQgEgqACghQAAgVASgHQASgGAOANQASgVAWgLQAngUAuACQAsABAkAUQBZAvgKBfQgGBAglBCIASAAQBAAAApAMQA8ASAUAtQAaA0gjBEQgTAlg4BDQg/BKgoAjQhAA7g9AQQgKADgJAAQgaAAgTgWgAATARQgxAEhAAKQAeCDAOBOQAegTAigkQAUgUAkgnIAigkQATgVAKgRIAMgXIgKgFQgTgFgKgBQgXgCgXAAIgpABgAhUkgQg0AMgLA3IgDATQAOA0AQBJIACAAQAigMAng+QAng9gIgdQgOgxgnAAQgIAAgJACg");
	this.shape_10.setTransform(12.7,42.3,0.424,0.424);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AifGJQgagfAAgpQgsgygYhQQgOgvgPhhQgCgVgGgeQgJgwABg8QAAg7AKg5IADgSQgCguABgbQAAgdAUgUQAUgTAdAAIAMABQAQgMAPgJQAsgWA1AAQAvAAApASQArASAdAgQA0A7gHBRQgFApgQAtQCJAKApBXQAgBEgmBQQgVAtg+BJIgCABQhABMgqAlQhKBChEASQgPAEgNAAQgvAAgeglgAAWA6QgbACgoAFIAWBmQAVgTAYgdIAfghQAQgQAMgNIgTgBIgoACgAhcjvQgNAKgDARIgBAJIANA3QASgWAMgYQANgZAAgNQgGgRgLAAQgKAAgMAKg");
	this.shape_11.setTransform(12.7,42.3,0.424,0.424);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DEC724").s().p("AgOA4QgFgBgFgEQgHgDgIgIQgOgNgBgWIABgMQABgOAGgLIAAAAQADgFAFgEIAAgBQAFgFAFgCQALgHAOAAQALAAALAHQAGADADAEIABABIAHAJIAAAAIAFAFQAOASAAAOQAAAPgOATQgKAMgWADQgHADgGAAIgKgBg");
	this.shape_12.setTransform(125.2,33,0.424,0.424);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEC724").s().p("AgfCkQgugMgiguQghgtgBgxQgCgzAngcIAAgEQAEhLBTgRQBPgQAwA3QA0A6gPBNQgNBKg+A0QgkAeglAAQgNAAgNgDgAgphAQACAKgFAJQgEAKgLAFQgVAIAAAbQABAZARAaQASAaAXAFQAZAGAYgcQAZgdAIgjQAKgpgagXQgRgOgXAAQgTAAgbANg");
	this.shape_13.setTransform(115.1,31.9,0.424,0.424);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEC724").s().p("AhsCJQgqgjACg0QACgvAUguQAUgwAfgjQAfgkAmgDQApgFAYApQAMAVgRAQQgSAPgVgJQgFgCgGAFIgKAOQgPASgNAcQgOAcgEAOQgJAdALAQQAIAOAcgEQAOgDAYgJQARgFAigOQAegJAXAEQALACAGALQAGALgEAKQgNAog3AbQgwAYgvADIgJABQguAAglgeg");
	this.shape_14.setTransform(102.6,36.2,0.424,0.424);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DEC724").s().p("An1G/QgVgDgBgVQgCgpgRgxQgKgcgZg5QgPgfgNguQgwAGghgKQgWgHABgWQAAgVAVgIIA8gUIgBgCIgThXQgLg1gNggIgahDQgOgngFgeQgFgiAagWQAagYAgAUQBKAuBKBPQAjAmBcBvIADADQAlgJAYAcQAXAdgLAhQAdAfAdAZIBZBLQADgUAPgRQAKgMARABQAQAAALALIARAQQAEADAMADQAdAGAvgFQBUgJBLgiQAPgFAIgGQgDACAIgLQAKgMABgDQADgMgCgLQgJgggXggQgXgegdgSQgmgZg+AEQhGAKgiADQg3AGgcABQgyACgggNQgvgSgIgsQgHgpAegpQAmg0A/gnQA5gjBFgVQBLgXA5AYQAQAHAjASQAhAPAVACQA+gjB1gnIBGgXQApgNAcgLQAVgIArgUQAmgQAdgCQAZgBAOAYQAOAZgOAVQgfAwhRAfQgOAGh7AkIgUAGQAWA/A9BuQBBByAVA4QAJAGAEAIIACACQAJAPgCATQgDAUgMALQgQAOgUAFQgXAHgUgMQgTgMgIgXQgYhAg4h8QguhwgKhUQiJAog1ASQgVAHgOgSQgOgSAKgSIgogHQg4gLhRApQhGAigdAcQAlgBA3gFIBagKQCRgOBdB2QA3BEAJBCQALBPg6A6QgbAbgvAUQgfANg1AOQhAAQgnAFQg7AGgsgNIgHgDQgBAkglAMQgjALgagYIhzhnQhDg8gsgwQgeAHhcAPIgDABQAfBaALAuQAUBQgVA6QgGARgRAAIgEAAgAopgIIARBFQAdgIAngNQhFhVgfgjIAPBIg");
	this.shape_15.setTransform(66,34.3,0.424,0.424);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEC724").s().p("Ag5EqQgVgCgLgOQglgvgOhVQgIgwgNhfIggiGQgRhQAIg6QAEgaAbgFQAbgGAFAcQAKAwAXBJIAnB3QAHAZAHAsQAIAyAFAVQADAJADAXIAHAiQAbgIAhgCQAXgBAigJQApgLAPgDQAagEATARQAUASgIAaQgSBBhQAIQgtADgWACQgmAEgWAOQgMAHgQAAIgHAAg");
	this.shape_16.setTransform(31.7,41.3,0.424,0.424);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEC724").s().p("AiAFwQgXgbAHgiQg0gzgZhkQgOg5gQhvQgIguABg6QABg2AIgzIAFgWQgEgqACghQAAgVASgHQASgGAOANQASgVAWgLQAngUAuACQAsABAkAUQBZAvgKBfQgGBAglBCIASAAQBAAAApAMQA8ASAUAtQAaA0gjBEQgTAlg4BDQg/BKgoAjQhAA7g9AQQgKADgJAAQgaAAgTgWgAATARQgxAEhAAKQAeCDAOBOQAegTAigkQAUgUAkgnIAigkQATgVAKgRIAMgXIgKgFQgTgFgKgBQgXgCgXAAIgpABgAhUkgQg0AMgLA3IgDATQAOA0AQBJIACAAQAigMAng+QAng9gIgdQgOgxgnAAQgIAAgJACg");
	this.shape_17.setTransform(12.7,42.3,0.424,0.424);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEC724").s().p("AnpAcQgHgFAAgHQAAgIAHgEQAOgIAZgGQAMgCAfgEQAwgFBDgBQB4gCCCgIQCIgKCEAAQAogBBYgEQBPgBAwAPQAQAFAAAQQAAANgQAFQgcAJgpACIhHAAIiHADIiHAEQhLAEg6AHQgyAGhJAAIh8AAQg7AGghABIgIAAQg0AAgcgUg");
	this.shape_18.setTransform(283.4,46.5,0.424,0.424);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AoAA+QgYgRAAgdQAAgaAYgRQATgNAdgHQARgEAfgDIAFgBQAvgFBIgCQBrAACLgKQCGgJCJgBIA9gCIBPgDQBMAAA0ARQAUAGAMAQQAMAQAAAUQAAASgMARQgMAQgUAGQgoANg/AAIgmgBIgKABIiHACIgaABIh4AEQhCAEg0AGQg2AHhYAAIhtAAIgpACQgjAEgaAAQhAAAgmgag");
	this.shape_19.setTransform(283.4,46.5,0.424,0.424);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DEC724").s().p("AoPAsQgPgEAAgQQAAgQAPgFQArgKBAgIIBsgMQA5gHBOgCICGgDQA9gBDXgHQCtgFBqAAQAfAAAAAhQAAAfgfAAQhqAAitAGQjVAHg/ABIiGACQhPABg4AGQhHAMglAEQgVACgSAAQgmAAgegJg");
	this.shape_20.setTransform(283.3,77.9,0.424,0.424);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AoaBTQgUgGgMgQQgNgQAAgVQAAgVANgOQAMgRAUgFQA6gQB3gNIAtgEQBKgKCWgCIAxgBIDTgFQDhgIB3AAQAfAAAUAVQAVAVAAAfQAAAdgVAVQgUAVgfAAQhyAAjWAIQiSAEhQACIhAABQiHABhCAIIgxAGQhIALghAAQgsAAghgKg");
	this.shape_21.setTransform(283.3,77.9,0.424,0.424);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DEC724").s().p("ABpDmQgQgVgKgiQgdAMghADQgeAEgXgGQgzgLglglQgngngHgzQgJg8AVhDQAWhDAsgvQAtgwA1gGQAngEAUAMQAIAEAQASQAOAQAKADQANAFABAQQABAQgPACQgMACg/gKQgpgIgZAcQgeAhgSArQgUAwAEAmQADAiAUAZQAWAdAgACQATABASgFQAPgEAVgKIAIgEQgBgiACgrQgNACgZAIQgZAIgIACQgTADgLgRQgLgOAPgPQAegeAlgPQAsgQAlAMQANAEAHAKQAIAKABAOQACBdAEAhQACAQAKAoQAIAjABAVQACAdgcAFIgKABQgUAAgNgRg");
	this.shape_22.setTransform(298.4,62.3,0.424,0.424);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABnEWQgSgIgLgPQgMgRgHgOQggAHgbAAQgYAAgRgEQhAgOgugwQgugvgJg+QgKhGAYhLQAYhLAzg2QA5g8BCgHIAYgBQAjAAAZAOQAOAJAQATIALALQATAIAMASQALASgCAVQgCAUgNAOQgNANgUAEIgVABQgVAAgdgHQgUgEgJAAQgLAAgIAJQgUAYgOAeQA4gtBAAAQAYAAAUAHQAZAIAQAUQAPAUABAbIAAATQABBBAFAmQACAMAHAgQALAtABAaQACAggVAWQgVAXgiAAQgUAAgRgJg");
	this.shape_23.setTransform(298.4,62.3,0.424,0.424);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DEC724").s().p("AhmDsQgdgLgIgtQgFgZgCgvQgEgpgShVQgLhOANgyIABACIACgDQgLgIgBgNQgBgOANgHQAIgEAagYQASgSAUgBQAWgCAZAFQAZAEATAJQAuATAVAgQAYAkgRAtQgQAtgsAoIgiAeIgPAOQARAWAfAOQAOAFAxAPQBRAYASAvQADAKgGALQgGAKgLADQgaAJgigKIg6gXIgxgUQgdgNgSgOQAGAgABAQQACAbgJAMQgIALgLAFQgHAEgHAAQgFAAgFgCgAhticIAEAKQAHAYAFAlIAIA+QA3gyAJgKQAcglgWgTQgLgJgZgFIgogGIgEAAQgFAAgJADg");
	this.shape_24.setTransform(282.7,61.3,0.424,0.424);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ah1ERQgngQgQgtQgJgagDg1IgCgVQgDgbgJguQgLg8gDgcQgFgzAIgpQgGgOAAgRQABgQAJgOQAIgNAPgJQADgBAOgNQAQgPALgIQAUgNAYgCIAOgBQAxABAuATQBCAcAaAxQAaAxgVA5QgVA4gzArIgPANQAPAIAiAJQA2APAZAPQArAZAQAsQAJAZgMAZQgNAagcALQgTAFgUABQgWAAgYgIQgQgEgZgMIg2gVQgDAXgMARQgbAjgmAAQgNAAgMgEgAg4hpIAGgGIgHgCg");
	this.shape_25.setTransform(282.7,61.3,0.424,0.424);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEC724").s().p("Ah/DTQgoiFAFjbQABgjAjAAQAkAAAAAjIABAMQAJBqCkB5QgHgzgWhmQgPhbAKg/QAEgYAcAAQAcAAAEAYQAHAkAJBBQAKBHAFAfQASBhAABRQABAUgTALQgTAMgRgMQhzhOhAhKQAKBcgDA7QgBAcgcAEIgGAAQgWAAgHgXg");
	this.shape_26.setTransform(265.7,62.7,0.424,0.424);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AiLEEQgTgOgHgXQgZhTgIhrQgGhJAChmQABgfAWgVQAWgWAgAAQAgAAAVAWQAWAVAAAfIABAKQAGA8BDBFQgMhAgEgpQgFg7AIgxQAEgZAUgQQATgQAcAAQAbAAAUAPQAUAQAFAZQAGAhALBOIANBdQASBhABBYQAAAfgWAWQgXAYggAAQgWAAgRgMQhAgsgugoQABAcgBAXQgCAegVAUQgVAUgeAAQgYAAgSgOg");
	this.shape_27.setTransform(265.7,62.7,0.424,0.424);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5594A3").s().p("AogMWQg2AAglgeQgwgoAQg+QAShBBGgJIAOgEQAKgKgFAIQAWgdARggQAKgSAXgxQATgrAOgYQA5hgBPhyQA1hMBfh9IAhgsQgwhKgcgnQgtg+grgsQgvgwhBgxQgogehUg5QgfgVATgdQARgbAkgEQBTgJBfAsQBJAiBKA9QBcBMBRBkQBOheBsh5IBjhtQA4g+AugsQAoglA6gcQAsgVBHgVQAlgLAYAgQAXAhgfAVQgxAhg0BDQg4BNgbAiQh3CZg+BMQhPBghNBoIClDlIA1BKQAfApAgAcQBNBDAdAcQARALAQARQAMANAGAaQAKAigTAiQgSAfgkATQgkATgngDQgqgDgfgeIiMiHQhLhNgvhFIhoidQgcAogXAjQhMBzgoBBQg8BjglBPQgxBpgvAyQhKBOhpAAg");
	this.shape_28.setTransform(237.9,62.4,0.424,0.424);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AohNVIgBAAQhMAAg1gsQglgfgOguQgOgvANgvQANgsAigfQAigfAvgJQAMgQAKgTQAMgWAPgiQAbg6AOgXQA4hfBOhwQA0hMBliGIAHgJQhJhvg7g9QgtguhAgwQgmgchPg1QgcgTgMgcQgMgdAIgeQAIgjAhgaQAggaAogEIAigCQBbAABjAwQBKAlBKA9QBGA6A+BGQBLhYBBhIIAeghQBxh/A9g7QAwgtBEggQAvgWBLgXQATgFAPAAQAmAAAgAYQAgAXALAkQAKAggLAeQgLAegcATQghAWgjApQgVAYgnA2QgVAegUAaIg+BOIh4CYQg8BKhCBXICKC/IAOAVQAdApAOASQAZAfAYAVIAOAMQBAA4AaAaQAWAOASAVQAWAYAKAoQAKAigHAjQgIAjgXAfQgcAlgrAWQgsAVgvAAQhJAAg1gzIgtgrQhRhNgmgpQg/hDgrg/Ig0hQQhLBwgoBDQg5BdgjBLQgyBug1A5QheBmiHAAg");
	this.shape_29.setTransform(237.9,62.4,0.424,0.424);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5594A3").s().p("AkLE/QgsgDgVgdQgWgdAVgiQAKgQgCgdQgBgLgIgkIgOg6QgIgigBgYQgBgagFgxIgHhOQgBgQgHgvQgHgnABgXQABgYAVgSQAVgUAdACQAlADBnAEQBYAEAzAFQA5AGBMAOICFAcQATAEAAARQAAAQgTAEQhdAUiLgDQibgGhPAAIAOBgIAFBEQBAgPBRgEQA4gDBZABQAiABAUAUQARASAAAYQgBAagSAQQgUASgggDQiAAChMgIQgMgCg9gBQAPA7ADAPQAJAqgBAgQAsgBBAgFIBqgHQA5gEBMgBICFAAQAUAAASAIQAeALAJAdQAFAMgDANIgBAFIAAABQgCALgHAJQgOAUgYAIQgPAFgQAAIiOgBQhRAAg+AEIiOAJIg1ABQgyAAgqgEg");
	this.shape_30.setTransform(206,62.1,0.424,0.424);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AkOFnQgjgCgcgRQgcgRgNgbQgLgWACgYQACgZAOgWQAGgJgLgtIgIgkQgQhAgBggQgBgdgFg0QgFgsgCgbQgBgTgFgeQgJg2ABgaQABgnAggeQAggdAqAAIAIAAQAmADBPADQB3AGAsAEQA6AHBMAOQApAHBcAUIADABQAWAFAOAQQAOARAAAVQAAAWgOARQgOAQgWAFQhYAThzAAQg3AAhLgEIhfgDIAKBMQBRgNB1AAIA3AAQA0ABAfAhQAcAdAAAoQgBApgdAdQgdAcgqAAIg+gBQhdAAg/gHIgRgBQAJAnADAaQAzgCA9gFIA+gEQBFgFCKAAIA+AAQAbAAAaALQAuATAPAuQAHAVgDAVIgBAJIgBABIAAABQgEASgLAQQgWAfgkALQgVAHgWAAIiKgBQhWAAg7AEIghACQh5AIgzAAQgyAAgmgEg");
	this.shape_31.setTransform(206,62.1,0.424,0.424);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5594A3").s().p("AExF5QgrgXgGgzQgjhCgfhiQgRg4ghhuQgJgcgVg3QgGAfgMBPQgLBEgIAmQgHAfgpAOQgoAOgegSQg3ghgvg0QgggkgshAIgpg5QgEAZgDAvIgHBFIgLBQQgHAtgIAhQgMAsgJATQgQAjgbATQgTANgWgIQgWgJAAgSQgBg1AKhRQAGgxAHhhQACgSACg4QACgvAFgdIANhFQAIgpABgcQABgsA1gNQA2gNAaAoQAXAiAzA6QA2A+AVAeIAhAxQAPhbAQg3QAWhPAjg+QASgeAqgCQAmgCAfAUQAgAWAWAqQANAaAPAxQAJAeAVA1QAVA4AJAaQAoCJAZBFQAXBCAQAdQAQAbADAOQATAcgTAlQgHAPgNAIQgXAPgYAEIgNABQgUAAgRgKg");
	this.shape_32.setTransform(168.1,63.9,0.424,0.424);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AEdGcQg5gfgKhBQgcg2gYhEQgPgtgWhOIgFgQQgGAggGAcQgIAmgmAWQgiAWgngBQghAAgagPQg0gfgsguQgigjgmg3IgHA+QgNBdgMAtIAAABQgNAxgLAXQgUApgjAZQgVAPgbAAQgjAAgXgXIgGgGIgNAAIgBgnQgBg5AKhUQAEgdAEg2IAFg+QACgYABgiQAEhCAEgcQAEgYAFgVQAMg9ABgaQAAgsAlgdQAhgaAtAAQAeAAAYANQAYAMAPAXQAUAeA2A/QAjAoARAVQAah5A0hWQANgZAagNQAagOAhAAQAvAAAmAaQAoAbAaAxQAQAdAQA3QAGATAYA/QAUA0AKAfIAYBOQAZBUAPArIAEAKQASAzAPAbIABABQAPAZAFATQAbAtgdA3QgMAYgVANQgoAagrABQgeAAgagPg");
	this.shape_33.setTransform(168.1,63.9,0.424,0.424);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5594A3").s().p("AkQE9QgUgTAAgcQAAgcAUgUQAWgWAmgBQAagBAngJIBAgPQBFgMAjgFIA/gGQgYgXgfghIgyg4QgMgOgZgQIgogYQhHg1gZgQIhVgyQgwgdgagfQgXgZASgfQAQgcAjgKQCKgnCQgHQCSgHCLAbQAYAEAAAWQAAAVgYAFQg3ALiUANQiEALhGASIAoAUQAXAMAOAJIB6BUQAZAQALAMIA3A4QAgAgAYAWQAoAjAIAGQAeAYAZAIQAqANAQAlQAQAnglAaQgxAihOAIQhbACgvAEQgrAEhkAWQhbATg2ACIgFAAQgiAAgVgUg");
	this.shape_34.setTransform(130.2,64.2,0.424,0.424);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AkuFYQgdgegBgqQgBgrAfghQAhgkA4gCQAbgBAtgMQAmgJANgCIBZgOIgxg3QgLgLgggUIgygiQgsghgcgSIgxgdQgqgYgUgOQgigXgXgbQgQgRgEgVQgFgVAGgWQAIgbAXgVQAXgVAegJQCugxCzAAQB3AAByAWQAYAFAQASQAPATAAAXQAAAYgPATQgQASgYAFQg6ALh/ALQhOAGgiAFIBaA/IAeAUQARALALAMIAZAaQA6A6AaAXIALALQAZAWANAKQAWARAQAFQAjALAZAbQAZAaAFAgQAEAagLAYQgLAYgYARQgtAfg+AMQgjAGhLADQgtABgWACQgrADhRATIhRAQQguAHgmABIgFABQg2AAghghg");
	this.shape_35.setTransform(130.2,64.2,0.424,0.424);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5594A3").s().p("AkbFWQgfgSAGgcQACgMgDgVQgDgWACgLQAMg8ACgPQAOhqAHgrQAMg8ALhVIAUiTQAGgvA0gNQA0gOAhAqQCNC3BFBrQA2BRAaAgIAhArQAWAZAQAKQAcARAIAYQAKAZgRAYQgQAWghAIQgiAJgZgQQhBgng6hPQgMAAgLgCQgigHg7ACQhQADgUgBQgGAigLAdQgQAqgIAUQgQAjgWAXQgOAOgRAAQgNAAgOgIgAh8AjQA7gJAxAAQgpg9gsg/QgLBIgMA9g");
	this.shape_36.setTransform(103,63.6,0.424,0.424);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AkpF8QgTgJgOgRQgZgfAIgjQAAgEgCgPQgEgbAEgTIAEgUQAHghACgTQAMhkAKgzQAMg/AUiZIAKhLQAGgqAigcQAigcAtAAQAcAAAZAMQAZANARAWQCMC1BJBwIADAFQAvBHAbAiIAMAPQAiAsAPAKQAwAdAJAsQAHAngYAiQgPAXgdAOQgdANgfAAQggAAgZgPQg/gng8hLIgKgBQgWgFghAAIgyABQgXACgZAAQgFATgHASIgJAYQgNAkgKATQgPAfgYAXQgZAagjAAQgVAAgTgKg");
	this.shape_37.setTransform(103,63.6,0.424,0.424);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5594A3").s().p("AkPEOQgUguAmgeQAFgjABhRQABhMAIgnQAGgjAMhdQAKhSALguQAEgTAaAAQAZAAAFATIATBGQALApAEAdQADAbgBAnIgBBBIAABfIABBhQA3gHBrgQQBfgMBEAJQA7AIgCA3QgBA2g4ALQgoAHhDAGQhUAHgXADQiAAQhJABIgLABQgxAAgSgrg");
	this.shape_38.setTransform(73.7,64.6,0.424,0.424);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjKFgQgmAAgegTQgegVgLgiQgKgbAGgcQAFgbATgVQADgiAAg4QABhTAJguQAGgiAJhKQANhlALgxQAGgWATgOQATgNAZAAQAZAAAUANQATAOAFAVIAKAjQAVBKAEAkQAEAkgCBEIgBAhIABBgIAAAyIAfgGIBcgNQA2gGAqAAQAnAAAgAFQAoAFAaAbQAZAbABAmQACAogaAeQgZAfgoAIQgrAJhcAHQg0AEgdADQiHARhFABg");
	this.shape_39.setTransform(73.7,64.6,0.424,0.424);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5594A3").s().p("AkDFPQgcgTAAghIABitQADhiAIhJIASiRIACgnQAAgaADgOQgFgJADgKQADgKAIgIQAighBLAEQA0ACBDATQAiAKBJAaQBCAWAuAEQA2AFAWAnQAWAognAiIgwAmQggAZgPANQgQAOgbAdQgaAegQALIhSBJQgwAsgmAaQgMANgRAHQACA9AAAxQAAAhgbATQgZASgjAAQgkAAgYgSgAh1hkQgCAeAAA8QAvgnArgvQAegiAtgnIhbglQgwgTgcgJQAIA3gEBPg");
	this.shape_40.setTransform(46.4,65.2,0.424,0.424);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AkiFpQgkgeAAgwIAAgWQgBhpACg7QADhbAIhHIASiSQABgNAAgRQAAgbACgOQgEgRAGgTQAGgSAPgPQAqgpBRAAQA9AABSAYQAbAHAsARQBcAgAxAFQApAEAgAWQAfAXALAhQAJAcgJAcQgJAcgZAWIgzApIgsAjQgNALgaAdQgaAcgTAQIg1AuQhLBFgpAcIgOAMIACBXQgBAwgkAeQgkAgg3AAQg3AAgkgggAhNhnIATgUIAfggIgxgUQABAVgCAzg");
	this.shape_41.setTransform(46.4,65.1,0.424,0.424);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("Egy5AD9Qg0AAgjgjQglgjAAgyIANmBQAPAeAeATQAeASAkAAMBlzAAAQAjAAAdgRQAcgQAQgcIAQF7QAAAyglAjQgjAjg0AAg");
	this.shape_42.setTransform(166.9,70.3,0.424,0.424);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Eg09AJsQhAAAgtglQgugkABgzIAnvfQABgzAsgkQAugkA/AAMBojAAAQA/AAAtAkQAtAkABAzIAxPfQABAzguAkQgtAlhAAAgEg1fgIoQgfAYABAiIgpPeQABAiAeAXQAeAYAsAAMBp7AAAQArAAAegYQAfgXABgiIgzveQABgigfgYQgfgXgqAAMhojAAAQgqAAgfAXg");
	this.shape_43.setTransform(166.9,62.2,0.424,0.424);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4C4C4C").s().p("Eg09AJWQg2AAgmgeQgmgeAAgrIApveQAAgqAlgeQAmgeA1AAMBojAAAQA1AAAmAeQAlAeAAAqIAzPeQAAArgmAeQgmAeg2AAg");
	this.shape_44.setTransform(166.9,62.2,0.424,0.424);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AtiM9QlOghg1geQgug6AYkoQAIhjAOhoQAMhYAEgNQgQgBghgzQgng6AEg6QAHhWBhhLQA+gxAygRQAHgMAOgTIAWgfIgCgBQgjABhhAKQhWAJgwgBQgHgCg2hXQg3hXACgHQAFgPIaiiQIXiiAHAFQAaAPBDBlQAoA8AfA1IDLgIQCigHAEgBQAHgCAVgmIAXgqQAdgFGhgOQGlgOAdAFQADACAmBTIAsBhQAEgBBbgHQBigIAWACQAPAZAHCdQAHCfgPAWQgTABiTABIiPABQgaBdgHgBQgDACnCAHQnVAHg1ADIgHAAQAnAsABAxIAAAHQgDBuiCAyQhSAgiQAGIg2ADQADAEgDASQgEAXgNAXQgmBFheAeQAMASACAlQABAkgLAXQgUAug+AmQAeBJAWBAQAuCAgPAMQgrAHhGAAQiAAAjbgVgAyaA1QggBsgTDWQgVD3AfBuQA7AcErAcQEpAcBlgNQAAgYgkhZQgjhZAAgLIAAgBQhfAsinARQjFAVg8g8QgqgpATg8QARgzAwgkQALgIAUgLQgpgMgegUQhDguAZhJQAXhDBHgeQAngQBdgcQBXgbARgCQgCg4Byg3QBjgyCfgmQCWgkCCgJQCFgKAnAZQAFABHvgNQHvgOAQADQgBgHAUhOQAShNgCAAQgqACnzAEQn6AEgFgCQgJgXANgxQAGgWASgvQgYAEg9AGQhLAGgdgCQAXArgEANQgeADm4AQQmsAQgBABQgCAKgKAOQgKAPgCAHQBEgOChABQDMAAA8AqQBFAvgjBEQgcA1hHAtQhmA/jWAZQjEAYgwgZgAveHVQhIAxAkArQAiApBRABQAXABBpgMQB+gPBZgnQCLg9gYhhQhGARhcALQhAAHhiAGQg+AEgugEQguAGg7AqgAtzCiQhPAZguAiQhIA0A7AuQAtAjBLAKQCFATDOgoQCngYA1g3QARgSAEgUQACgKgBgLQiCAJhMgGQhzgJhCgrQgagRgOgRQhcAagsAOgAg9hwQhVABhmAOQkNAnigBhQhBAoBVAsQBEAjA2AFQBBAGBsgHQA6gDBOgHQCKgKAkgIQBngYAihGQAQgigPgsQgPgugigSQgUgKhIAAIgGAAgAtzkVQjgAPhbBTQgkAggSAaQgbAmADAjQAFAtATAhQAVAoAQgbQAOgZAegZQAPgNANgJQBzAdC7goQCTggBbguQBCgiAEgsQADgvhKgUQhDgShpAAQgxAAg6AEgARyj+QAMgBD7AAQAMhMgJhlQgHhZgGgBQhFABhbALQAQAkASA7QARA7gCARQAAADgzAFQg0AEgcgCIgLBLgAKkqwQmdAJgLAFQgPAIhECOQhFCQAQAIQAOAHBpgCICngDQCFACE+gCQFtgCACgHQADgIg8iYQg9iYgHgDQgCgBgfAAQhWAAksAHgAurpsImwCJQAJAMAbArQAaAoAKAEQBNgOGIgZQgHgOgXg/QgYg/ACgBQAqgeG6h7QAIACA3BvQA5ByAMApQAiABA3AAQACAAhkipQhkiqgFgFQhsAdnDCPgAtLomIAuB8IBPgFIg6iNgArzpBIBCCQIBOgGIg9ikgAqCphIBACoIB2gGIhKjGgAn2qMIBQDMIB3gBIhujqgAgSpCQhxAEgiAAQArBMAEAKQAfABBKgEQBUgEAbgHQAJgTANgXIAYgqQgiAEiAAEg");
	this.shape_45.setTransform(192.4,36,0.424,0.424);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D1BBA1").s().p("AhjAUQALgzAAg1IBLgMQBXgRBKgTQAyBvhaA9QhFAwjMAuQAugPAUhjg");
	this.shape_46.setTransform(167.2,56,0.424,0.424);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDDAC0").s().p("AkgAAQApgsBIggICjgRQC6gXCAgaQBKCykfBHQhZAWhyAJIhhAEQifg5BShVg");
	this.shape_47.setTransform(161,56.4,0.424,0.424);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D1BBA1").s().p("AAegIQA/hKAYhHQA2AAAhANQBPAgAFBiQAFBniaAhQhkAVlGAGQDBgQB8iRg");
	this.shape_48.setTransform(185.5,36.3,0.424,0.424);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D1BBA1").s().p("AhAgFQAmgyAQgwIBQAAQBfABBFAHQAwBdiGAvQh0AqkWARQBqgLBMhig");
	this.shape_49.setTransform(169.4,47.8,0.424,0.424);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDDAC0").s().p("AkWCPQiCgYgXg7IASgbQAeghA6gdQC6hhGMgeQBkADAwA9QAwA9gkBNQgRAmh/AfQh5AfiYAJQgzACguAAQhmAAhPgOg");
	this.shape_50.setTransform(179.5,36.5,0.424,0.424);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AB9727").s().p("Ao8ANQARhHAPgFIQngUIBACiIyVAFg");
	this.shape_51.setTransform(220.7,17.4,0.424,0.424);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDDAC0").s().p("AmGBAQgvhJC5hLQBdglBmgXQAHAmC9AbQCVAWA6gBQAKAAAQALQASANAHARQAUAwhVAxQgxAchtASQhrASh0ABIgRAAQkRAAgzhRg");
	this.shape_52.setTransform(163.4,46,0.424,0.424);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DEC724").s().p("ApNCWICek+INqgXICTFrQktAOkoAFIinABQmqAAALgqg");
	this.shape_53.setTransform(220.5,13.3,0.424,0.424);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D1BBA1").s().p("AhPBmQgbgjgGgmQgQhjCIhLQgDAwALAzQAYBjBLALQg9AEggAPQgmAUgJAsQgdgQgZgdg");
	this.shape_54.setTransform(142.2,32.6,0.424,0.424);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AnaC0QhOABgcgXQgTgQAEgiQAEgmBWjeQgBgIIKgRQEKgHEpgHQAhgBgcDAIgjDBQuMgQhzADg");
	this.shape_55.setTransform(216.1,16.7,0.424,0.424);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgpGuQjwgYg5gmQglgnAPj/QAQkHA6h6QB3ALDlhGQB0giBcglIBfAmQgkAPgnEjQgmEdAUBKQAQA+gXAxQgPAfgiAdQgLAJg6AAQhCAAh6gMg");
	this.shape_56.setTransform(158.1,49.4,0.424,0.424);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AB9727").s().p("ApUCVQgOgcgBgKIIBhCIgZhJIHGiRIBYCuICCgaIA+CEIypBDg");
	this.shape_57.setTransform(161,13,0.424,0.424);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDDAC0").s().p("AlSCrQgggdgOghQgshrCahzIBagZQBtgcBegNQEzgrA6BxQAhBAhJA0Qg+Auh/AhQhuAdh1ALQhyAKgvgMQgZgMgcAnIgWApQgOgHgQgOg");
	this.shape_58.setTransform(154.2,30.6,0.424,0.424);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AmQglIF0gWQF5gUAlAHIAoAuQAkArgTABQgeAAteA5g");
	this.shape_59.setTransform(166.3,21.3,0.424,0.424);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DEC724").s().p("ApWCwQgthCADgLIQAlSIEBGbIyqBDQgXgegWghg");
	this.shape_60.setTransform(159.7,10.2,0.424,0.424);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4C4C4C").s().p("ArFLdQj8gOjghNIgNhaQgMh2ANiIQAnmyEEnHQEVhKMAgqQGCgVFKgGIA2ACQBCAEA2AIQCtAbgFA+QgFA/gnCiIgmCVI1jA2QgdgDgmAKQhNAUgvBDQiWDUDQJXQhFAhiaAAQgtAAg0gCg");
	this.shape_61.setTransform(190.5,40,0.424,0.424);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DBDBDB").s().p("AhggyIC5gHIAJBpIjDAKIABhsg");
	this.shape_62.setTransform(249,18.7,0.424,0.424);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B8B8B8").s().p("AhCCkIhdgBQAZkQADgXIB9gYQB/gSATAbQAUAcAACBQgBB2gKAgQhdAEhhAAIgZAAg");
	this.shape_63.setTransform(246.1,19.4,0.424,0.424);

	this.addChild(this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,317.3,98.7);


(lib.NewPlanetText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Feeling insecure on a strange new planet? ", "bold 15px Verdana", "#333333");
	this.text.lineHeight = 7;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,365.5,22);


(lib.BloodthirstyText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Surrounded by bloodthirsty space monsters?", "bold 15px Verdana", "#333333");
	this.text.lineHeight = 7;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,382.2,22);


(lib.BGMidGround = function() {
	this.initialize();

	// midground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9C9B").s().p("Eg5GAD7IAAlkQC+ABEaAqQCNARByAHQCIAJB3gEQDsg+F/gCQG3gDEhBaQB4AlC0AFQCoAFB9gbQBcgTHriBQEphOCygVQDwgeDhAmQD5AqEoCGQC+BVEJgEQC0gCCJgiQEShVJ6AwQCyAOE1AfICXAQIAADrg");
	this.shape.setTransform(12,-131.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC7A7A").s().p("AwBCbQi0gFh4goQkhhZm3ACQl/ADjsA9Qh3AEiIgIQhygIiNgRQkagpi+gCIAAgYQC+ABEaAoQCLARB0AHQCHAIB4gDQDsg9F/gBQG3gDEhBYQB3AnC1AFQCoAEB9gaQBbgVHsh/QEphOCygWQDwgdDhAmQD5AqEoCEQC+BWEJgDQC0gDCJgjQEShVJ6AwQCyANE1AhICXAQIAAAbIiXgQQk1ghiygNQp6gwkSBVQiJAji0ADQkJADi+hWQkoiEj5gqQjhgmjwAdQiyAWkpBOQnrB+hcAWQhrAWiKAAIgwAAg");
	this.shape_1.setTransform(12,-144.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-353.4,-159.8,731,53);


(lib.Background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7F0C1").s().p("Eg47AHLIAAuVMBx4AAAIAAOVg");
	this.shape.setTransform(364.5,46);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,729,92);


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,31,32,0.2)").s().p("AolB8QhggWgngOQheglAAgzQAAgyBeglQAngOBggWQDkgzFBAAQFCAADlAzQBfAWAnAOQBeAlAAAyQAAAzheAlQgnAOhfAWQjlAzlCAAQlBAAjkgzg");
	this.shape.setTransform(78,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155.9,35.1);


(lib.PinkChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AhNDSQgdgbgUgeQgYgkgKgpQgLgpAFgoQAFguAVgrQAWgsAhggQASgRAmgUQAngVAMgKQAPgNBBB9QA8B1AFAbIAAABQAKBFhCBBQgxAwhLAlQgFACgGAAQgVAAgggegAgMDSQgBgCAZgQIACgBQBmhOAJhkQggglgehJQgag/gOg7QgKAJgsAgQgiAYgSAYQgyBEgBBNQAABGArA3QAIALAiAYQAfAWAGANIAAAAg");
	this.shape.setTransform(0,-24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AhDC/Qg5hFgRhEQgThHAohEQAbgwBGg+QBAg6AjBGQALAVAOAvQAOAwAHAQQBMCaiPBcQgpAagWABIgDAAQgeAAgagfg");
	this.shape_1.setTransform(-1,-23.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-48.1,33.8,48.2);


(lib.PinkChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AgtCVQgZgIgegOQgpgTgBgMQgGg9Aag+QAag/AvgoQA4gxA1AZQAaAMAVATQAcAZgDAXQAWAvgUBQQgVBWgvATQgPAGgUAAQgfAAgtgOgAgxhQQgeAqgQAkQgUArAAAyQAPAEAhAMQAfALASAEQA7AMAfgeQAbgaALhBIAAgDQAIgwgbguQgegxg0gDIgBAAQgTAAgmA4g");
	this.shape.setTransform(0,-16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AgHCXQg4gCgmglQglglAPg/QAOg2AugyQAugyAsgHQA0gIAYA2IABABQAZA6AAA1QgBBEgoAmQglAkg1AAIgFAAg");
	this.shape_1.setTransform(0.1,-16.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-32.7,28.9,32.8);


(lib.PinkChunk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AAmBnQg6gKgRgPQglANgPgrQgNglAKgeQANguAXgYQAdggAcAfQBHBIAYBkIABAHQAEARgeAAQgNAAgUgDgAhDgcQgRAnAYAYQAXAXAPAGQAMAEAiADIAmgBQgghTg4hHQgbAVgOAjg");
	this.shape.setTransform(0,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AAcBcQg1gCgXgQQghgYABgrQAAgkAXgkQAlg7AvBGQAlA1AQA7IABAEQAGAfgyAAIgJgBg");
	this.shape_1.setTransform(-0.1,-11.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-21.3,19.6,21.4);


(lib.MooseToothShine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAAQAAgbAbAAQAcAAAAAbQAAAcgcAAQgbAAAAgcg");
	this.shape.setTransform(7.2,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQglgSgOgPQgMgMAVgCQAVgBAhAMQApARAcAUQAAASgLABIgHAAQgZAAgmgUg");
	this.shape_1.setTransform(-3.9,-4.1,0.866,1,0,0,0,0,-0.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-6.8,20.1,6.9);


(lib.MooseEye = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AmqFnQhdgNg1hOQgwhGAAhjQAAhVAchPQAfhcA5gyQApgjBHAIQBHAIAZAqQAphfBTgrQBug4BtAeQBzAfA1BtQAihCBKgLQBLgLBKA2IgIgGIAaAVIgJgHQB6BnAQCIQARCciNBcQg+AohIgCQhbgCgzhPQhHCCibAKQhDAFg9gXQg+gWgmgsQABAcglAdQgwAkhVAAIgWAAgAnfilQguAsgZBJQgWA+gCBIQgCBGAWA2QAbBCA6AWQCXA5BCh4QgYgfgQgmQgbhCgHhNQgHhQAThIQgZg/g8gBIgFAAQguAAgdAcgAg1k+QiKAHhCB8QgiBHgCBUQgDBOAaBNQAZBJA7AxQA4AuBGAMQBGANA/gcQBDgdAphDQguBOAxhUIADgEQAlhEAChXQAChQgehSQgghXgxgvQgXgWgtgOQgrgOgqAAIgRABgAFCj5Qg9AIgfA+QAbA0AIBkQAIBugbBJQAgBGA9APQA2AMA9giQA6ggAjg7QAmg/gIhAQgIhDgzhCQgtg8hBgoQgfgSgkAAIgTABg");
	this.shape.setTransform(0.8,-35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#382F22").s().p("Ai7AkQgOgNBlgeQBdgeAVgBQAogCBDATQBBATAEAMQACAKhTgIIhngLIhfAZQg3AOgZAAQgNAAgFgEg");
	this.shape_1.setTransform(-48.5,-65.3,0.802,0.875,0,-3.9,176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#382F22").s().p("Ai7AkQgOgNBlgeQBdgeAVgBQAogCBDATQBBATAEAMQACAKhTgIIhngLIhfAZQg3AOgZAAQgNAAgFgEg");
	this.shape_2.setTransform(44.8,-71.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAsQgOgSAAgaQAAgZAOgTQAPgSATgBQAUABAOASQAPATABAZQgBAagPASQgOAUgUAAQgTAAgPgUg");
	this.shape_3.setTransform(-39.6,-13.9,0.741,1.012,-15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgig");
	this.shape_4.setTransform(51.9,-41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwAOQgPgVAKgTQAJgQAYgGQAXgFAVAKQAXALAHAaQAPA2gvACIgGABQgnAAgZglg");
	this.shape_5.setTransform(41.4,-49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#382F22").s().p("AkEBxQgwgOBNhdQBGhSAhgQQA+ggBkATQBQAPApAbQA2AjAXAXQAyAsgCAqQgBATg/g3QhDg7gIgFQg6gmg9gLQhCgNg8AWQgYAJhCBUQg9BPgFAAIAAAAg");
	this.shape_6.setTransform(-5.2,-87.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiAsQgOgSAAgaQAAgZAOgTQAPgSATgBQAUABAOASQAPATABAZQgBAagPASQgOAUgUAAQgTAAgPgUg");
	this.shape_7.setTransform(-8.1,-20.8,1,1.098,-3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpAqQgOgSAAgYQAAgYAOgRQAQgTAZgBQAaABAQATQAOARAAAYQAAAYgOASQgQAUgagBQgZABgQgUg");
	this.shape_8.setTransform(-40.1,-47.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA8QgkgRgFgbQgEgVAUgYQATgXAegLQAfgMAdAIIACABIACAAQAiALAIAcQAIAbgRAbQgSAcgfALQgPAFgNAAQgWAAgWgLg");
	this.shape_9.setTransform(1.8,-54.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiAsQgOgSAAgaQAAgZAOgTQAPgSATgBQAUABAOASQAPATABAZQgBAagPASQgOAUgUAAQgTAAgPgUg");
	this.shape_10.setTransform(47.7,-37.5,0.83,1.059,-10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EADFC3").s().p("AnFFHQhEgXgmhCQgrhKANhmQAUkACEgVQAugHAzAXQApATARAWQAUheBNguQBEgpBdAEQBVAEBCApQBGAqAJA8IAAgBQBJhXBSAAQCKABBbETQAKA9ggA/QgeA/g4AlQg8AnhAgIQhKgJg/hGQgdA8hBApQg+AnhIAIQhLAIg9gcQhCgfgfhEQgXBRhAAhQgiARgkAAQgbAAgdgJgAB4hiQgKALAAAQQAAAQAKAMQALALAPAAQAPAAALgLQALgMAAgQQAAgQgLgLQgLgMgPAAQgPAAgLAMg");
	this.shape_11.setTransform(0.8,-35.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAbQgLgMAAgPQAAgPALgLQALgMANAAQAOAAALAMQALALAAAPQAAAPgLAMQgLALgOAAQgNAAgLgLg");
	this.shape_12.setTransform(15.5,-43);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.7,-99,127.6,99.1);


(lib.MooseDeathTop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("AozAUIgIgDIhIgDIgIgCIgIgCIgHgDIgDgEIgCgDIAAgCIABgDIADgFIADgCIAFgBIALAAIAGACIBKACIAGADIAuAAIAIgDIAbgCIAIgCIAggDIAHgCIABgBIFyAAIAGADIFlADIAGACIE3AAIAIgCIAjAAIAGACIAEAEIACAEIAAADIgBACIgCAEIgEADIgFABIgdACIgGACIlAAAIgIgCIljgCIgIgDIluAAIgGADIgiACIgGACIgdADIgGADIgyAAg");
	this.shape.setTransform(-0.2,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("ApDBaQBKiHCKhNQDpiAEKAxQEWAzCQDXQAsBEAiBOQp4ACp3ADQAVhGAfg4g");
	this.shape_1.setTransform(0.3,-22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AqJDpIgXAAQAuiYBdhgQBThZB3g3QBxgzCAgPQEwglDgCvQCaB4BRDCIgNAAIgLAAIgPAAQgihOgthDQiQjXkWg0QkJgxjqCBQiJBMhLCIQgfA3gVBHIgTAAg");
	this.shape_2.setTransform(0.2,-24.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-47.7,135.1,47.8);


(lib.MooseChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("AiZCSIAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQgEg7AMgzQAOg8AhglQAggiAzgfIBag0QALgHAKAJQAKAIgDALQAeATARBJQAIAjAFAxIAIBXQABALgJADQgJAEgIgFQgsAvhxAQQgcAEgXAAQhHAAgMgmgAgGhgQgvAdgaAfQgWAbgOAzQgQBBgJARIABABQARAZAwgBQAXgBAxgLQAzgNAbgNQAJgFAQgLQAPgMAJgEIADgBIgFg/QgDgigFgaQgGgcgEgOQgHgXgLgPIgMgRIhRAug");
	this.shape.setTransform(0,-18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("AhIClQgSAAgVgBQgPgCgLgJQgMgKACgPQAHg1AKghQAOgtAYghQArg4BZg+IACgCIAMgLQALgKANADQAMAEAFANQAeBLAMAtQAUBLgOAwQgKAngqAXQghATgvAGQgOADgPAAQgeAAgYgLg");
	this.shape_1.setTransform(0,-18.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.2,-36.9,32.7,37);


(lib.MooseBlood = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("AFiB+Qg8gGhXgmQg4gYhIAKQhRATgtAIQifAaifgoQiDghhPg6QgjgbgPgcQgVgnAogOQAugQCAAMIDFARQAtABBQgFQBYgFAjAAQA6gBCtACQBQABChgCQAvAAAXAEQAnAGAYAUQAnAgg9BGQgxA5gtAXQg4Aeg+AAQgPAAgPgCgACIArQAeAEAhAMIA8AbQBTAjBTgQQBVgRA4hEQBLhLg1gbQgbgOg8AAQh4AEg8gBIjBgDQhzgDhMAEIhfAGQg5ADgngDIhVgIIhWgJQhDgJg5ADQgkACgLAEQggANAhAmQAVAXAeATQBcA9CtAYQCkAXBjgbQA3gQATgDQAggHAaAAIAUABg");
	this.shape.setTransform(0.6,-14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("ADBA/Qg0gMhAAJQgjAEhOAUQhWAWiGgOQjNgViKhuQgQgOgHgWQgEgOAKgLQAJgLAOgBQAOgFAqAAQBVgBCaAZQAtAABigGQBdgGAzACQBKADDRAAQC0AABqAHQArABARAZQAeAshwBYQhIAsgoAHQgSACgTAAQhTAAhvg3g");
	this.shape_1.setTransform(0.4,-14.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.7,-27,126.8,25.8);


(lib.MooseAntler = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#382F22").s().p("Aj+E4QgEgDgEggQAvgHBxACQBzADA2gHQDCgXAMirQAGhZgHg9QgKhYgmg3Qgpg8gtAOQgtANgJBHQgGAwALBzQACBkgwAuQg1A0gig1QgbgogBhAQAAgWgOgjQgPgngUgcQg2hKgpBMQgMAXAGAqQADAZAMAwQAJArgIAUQgJAbgoADQgmAagPgZQgFgKADgJQAEgKAMAAQAIgFAjACQATAAgGgeIgLg4QgHgfgCgWQgGhDAtgpQAxgrA6AsQAsAhAQA4QAJAeAFBMQAEA9AjgHQAkgHAMg2QAJgogHhCQgHhPACgcQAFhGAjgqQAqgzBAAhQBoA1AODMQAJCFgaBMQgkBthvAYQgwALhGAAIh1gBQhLAAgxADIgdACQgKAAgCgCg");
	this.shape.setTransform(0,-31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B604A").s().p("AAABLIiUgKQhVgEgKgCQhEgMA4glQAbgQAxgCIBRADIBhADQA2AAAogGQAigFAugXQA6gdATgGQAngNgJAtQgJAngTASQgkAihFANQgyAKhCAAIgfAAg");
	this.shape_1.setTransform(0.6,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F7152").s().p("AkXEoQgkgsABhJQAAgkAIgcQBGAAAegMQASgIgLg1QgGgdgQg9QgIgpAUgeQAUgeAmgEQAigDAhA1QAcAtAHAtQALBJAFAMQAQAyAkgCQAmgBAUhBQAKggACgeQgckEBbgZQAvgNAzBEQA5BNAHB+QAHB5gdBEQgTAtg2AxQgkAhjpALQhdAEhYAAIgwAAg");
	this.shape_2.setTransform(-1.7,-31.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.3,-62.8,64.7,62.9);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("AAIAdQgigDgTgTQgDgDAEgEQAEgBAGABQAIAAAOAFIAVAGQAYAEAWgEQgJgZgtgBQgpgBgdAQQgDACgDgCQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAhgfA1AFQA4AFAMAlQACAGgHACQgXAIgZAAIgRgBg");
	this.shape.setTransform(-12.9,0.7,1,0.805);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("AiPBPQg6gbAWgtQABgCAEAAQAEAAABADQAFA0BFASQA8APBRgOQBPgNAugdQAygggbgdQgZgeg9gNQg0gLg4ADQiJAIhJBQQgGAHgMgEQgMgDAEgHQAfg2BUgeQBPgcBaAGQBIAGA2AVQBFAbgFArQgHAxhLAdQhDAbhZAAIgHAAQhVAAgzgXg");
	this.shape_1.setTransform(0,0,1,0.805);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40FBFF").s().p("AhEBVIgQgDIgNAAQgTgBgFgNQgKAAgFgHIgBAAQgWgDgRgEQgKgCABgGIAAgNQAAgGAJgCIAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQADgCADAAQANACAVALQALAEAMACQAIgMAWgCIAQgCQABgVgcgKIgEABQgSgLgeAGIgFgFIgGAAQgVAKgJAAQgHgBgDgEQgDgEACgEQABgDADgCQAAgEAFgBIAHgDIAGgDIAZgMQACgCAGgDQABgIAMgEQAfgJAcABQAHgHANABIAqACIAHAAQAGgDAMAAQAvgBAlANQAigJAdAUQANgBAJAFQALAGAAAJQgCAQgDAMQALARgWAOIgKAGQgTATguAOQhMAdhRAAIgSAAg");
	this.shape_2.setTransform(0.8,0.5,1,0.805);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.8,-8.2,47.7,16.6);


(lib.ShotSparks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AIQgDgBAAgEQAAgDADAAQATgLAdgGIAxgIQAdgEADAbQAEAagdACIgYAAQgxAAgfgSg");
	this.shape.setTransform(0,-2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-5.3,13.5,5.4);


(lib.ShotSpark2 = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA4QgIgXABghQgBggAIgXQAHgYAIAAQAKAAAGAYQAIAXgBAgQABAhgIAXQgGAYgKAAQgIAAgHgYg");
	this.shape.setTransform(0,-8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-16,4.8,16.1);


(lib.Head = function() {
	this.initialize();

	// headgraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AszYRQgRgWihj2QiKjRgkghQgyAYgpgQQgigOgjguQg6hKiDjGQiRjbgBgZQgBgRANhJQANhFgEgQQhFivgHl4QgDjRAQjhQADgkALgzQAOg8AQgfQAagPA4gVQBvgrCZghQgKACgng5Qgng5ADgGQAIgSBBA/QAhAgAfAjQgIggAPiWQARibASAAQAJAAgBCIIgCCiQBFhdDYjbQDdjgBUg7QGEgBHVAUQOtAnGZBnIBLAQQA8AOAFAIQANACggASIglATIjrCOIkXClQA1AcBeBUQBlBYgYAHQmbBwiJAuQgLA+h4EEQg8CCg6B1QAMA6AICHIAKDEQgBAUgXAeQgkAsgcAmIgDPBQgkAdhgAwQiMBIibAuQj1BLjsAAQjaAAjQg/gAxBOSQgSA0gPAPIFUH2IBgAeQB8AgCMAFQG+APG7kEIADnHQADnOAEgcQACgUAngwQAmgugBgWQgBiJgulcQgnkngShSQhhAmiDAQQlJhAmigmIlggYQgDB7gUD5QgUD3gDB8QgULRgXAAQgWAAAbrMQAcrGAWhZQDNAED1ASQHnAkDGBEQAQAFBlgcQByghAVgCQALAqAfDCQAgDCACAqQAuhXA1huQBrjcAoh1ID3hLQD4hKAFAHQgegng2glQgfgUhEgmQgYgNgUgSQgegcAigDIIPkwQoIhkt/gmQm9gTlYABQgEACkuE1QksE0gMACQjLAjh4AzQg8AZgUASQgbCEgMDDQgYGGBLE8QAah/AuiQQA5i1AggHQAsgLCGAyQCPA2ANAyQAgAkAfGSQAeGOgJABQgOACgolUQgvmIgVhVQgOghhbgjQhXghhOgHQhGCug0C4QgwCrgNBuQAYBFCHDAQCODKBDAxQAkAeA0hKQAvhRAFAAQAdABgUA7g");
	this.shape.setTransform(-1.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAED6QA9hFAhgSQgJhBgiinQgji1gRg3QgXgBgzBBQgyA+gCgBQgNgFAeg5QAagwAOgRQAXgYAXgLQAlgSAOAoQAXBHAoDSQApDTgIAOIiYCjQgngSBEhRg");
	this.shape_1.setTransform(-135.6,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A322B").s().p("ABiLTIhms/QgKgJghgSQhCgkhygsQAIgXDfj2QBxh7Bvh2QACAfghLIIghLEg");
	this.shape_2.setTransform(-114.4,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("Ah2iNQgEgeA0guQAvgrAhgLQA2BPAiDTQAQBqAGBaIhGA5g");
	this.shape_3.setTransform(-136.1,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/QgOgbAAgkQAAgkAOgaQAPgbASAAQAUAAAOAbQAOAaAAAkQAAAkgOAbQgPAagTAAQgSAAgPgag");
	this.shape_4.setTransform(35.7,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBBQgQgbAAgmQAAglAQgcQARgbAWAAQAXAAARAbQAQAcAAAlQAAAmgQAbQgRAcgXAAQgWAAgRgcg");
	this.shape_5.setTransform(-38.1,52.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai8AHQgQhQAagdQDJg3CggLQAXBsgXBBQgLAigQAMQg9AVhMAmIhuA7QhNhAgUhigAADhqQhTAPhBAbIgDAMQgCAQACAUQAJA8A2BKQCThFBVgfQAWgTgBhAIgHg8QhcAHhCAMg");
	this.shape_6.setTransform(38.3,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#564A3D").s().p("AiMBFQgehJgDhEQC6g5CcgNQADAJABBBQABBFgFAZQglAOhLAiIiZBFQgQgHgchDg");
	this.shape_7.setTransform(39.1,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACuBkQhagshLgUQjTg5ivBoQgGADgJgBQgKgCgHgGQgFgcAVg1QAVg4AZgUQAJgLAWgPQAtgeBFgQQDbgzF7BnQAaAcgRBRQgTBihNA/QhUgtgzgZgAEuB3QA3hJAIg9QADgTgDgQIgDgMQmtiAjCBfQhbAtgYBaIAwgWQA/gXBKgHQAegDAfAAQDPAADhCGg");
	this.shape_8.setTransform(-47.9,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#564A3D").s().p("ABDAjQhbgjhAAAQhPAAhnAUQhrAYgPAYIAuhsQAJgNAYgRQAugiBFgTQDcg8FzBxQgCBDgfBKQgbBDgRAGQi8hVg9gYg");
	this.shape_9.setTransform(-48.9,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3BDA3").s().p("AgGAtQjZApgXgHQgPgEgzgnIgwgkQgHgeBZgcQBMgZCEgTQBigPCxBbQBYArBFAwIhGApg");
	this.shape_10.setTransform(-52.5,32.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A322B").s().p("AAwBqIi7A4QiMgmjSgkQmhhHlSAPQEiiEHHiVQONkrNChOQifBRjVCDIi3BxIBwBOQBuBWADAmQn8B0gHAjQg3CHjXG4g");
	this.shape_11.setTransform(39.9,-76.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADAhQhIgDhCgTQhCgQgigcQCBASBwAFQCsAIA6gdQg0BBiWAAIgfgBg");
	this.shape_12.setTransform(7.2,98.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAVQhDg1AKgVQAFgPAFAAQAJACA3A4QA1A2AUADQADABAAAJQAAAJgDABIgIACQgaAAg4gwg");
	this.shape_13.setTransform(-48.4,127.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxA1Ih7hNQhCgqgXgFIg0gGQgXgEgTgIQgEgCAAgEQAAgEAEgCQBEgdBXAmQA8AaBIA/QAeAXBRAmQBcArAWgPQADgDADAEQACADgCADQgRAWgjAAQg4AAhog+g");
	this.shape_14.setTransform(-38.3,116.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A322B").s().p("AhBARIAAgBIAIgBQA1gOBGgYQgoAXgaAKQgbAOgSAAQgMAAgIgHg");
	this.shape_15.setTransform(-86.9,-72.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3BDA3").s().p("AiOJ5QjfAAh4gxIlZoSQArhkAOgdQAIgTAlhAIAig9II0DVIFLAWIA1AKQBAAMA7AFQC8ATBCguQANhHgXkDIgaj1QBlhZBOATQAmAJATAcIgKDnQgLE+gDGzQn5Dxm5AAIgDAAg");
	this.shape_16.setTransform(-33.4,94.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDDAC0").s().p("AkNRVQhBiDiTjUIiFi7IiHAFIloomIDZqWIHeCkIA8qyQCRgCDSAOQGmAbFLBRQB9gjB3gkIBwOlIhRCKIgFPIQi/BVkBBBQkeBHjlAAQi2AAiUgug");
	this.shape_17.setTransform(-55,42.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#564A3D").s().p("A54KHQgol+A4mqQBfhAB9gsQCOgxA6AbQB3iTCLibQEVk2BkgmQE9gDHbASQFNAMDVANQDOANEPAnQFxA1BKA3QjRBujCB2IiYBhIt3CqQt7CqgZAAIi+AAIgKCoIl3GLIiZgnIjAHuQgfhpgUi+g");
	this.shape_18.setTransform(-2.9,-65.3);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-173.6,-161.5,344.6,323.2);


(lib.GunHand = function() {
	this.initialize();

	// gun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACEVtQhdgnhcgtQhRgmgKgJQgGAQg7APQhFATg2gWQhPghgqhzQgahIgCg3QgKgKgOgTIgWgeIgBABQgJAggVBgQgTBVgPAuQgEAGhkAYQhkAZgFgEQgNgJALoxQAHloAFiDIADgxQABgXABgBQAXgUB1ghQBMgVA1gLIA3jDQAsidAAgEQAAgHgegfIgggkQADgdB0mRQB0mUAOgaQACgCDFgWQAAgHAVhXQAVhgAJgUQAcgHCYAqQCaArAPAVIhcEmQBQA1gDAHQABAEiEGuQiKHCgNAxIgCAHQA1gXAuANIAFABIACABIAGACIACAAQBjAnAICFQAEBZgmCMIgOA0QAEgCARAJQAUALATATQA2A6gBBiQAUgHAkALQAiALATAQQAnAiAQBGICTgHQCHgEAIASQgUB3iIE6QiFE0gtApQgNAFgTAAQhXAAjghdgAixHLQAUAUAPAdQAQAgALAqQAdB0gpDUQgaCLgbA7QgLAXgLALIAYAsQBcBADEBTQDkBgBzAEQAtgvB2kTQB2kTAShjQgXgIhfAGQg5AEgbABQgSAAgEgCIgBAAQANBogjCkQgoDChMAnQg0AcgzglQgsgggTg5QgFgQgDgTQgZAjgcAXQhAAxg+guQg3grgGhNQgEgpAChiQAChZACgTQg1gPgUh+QgMhTAEhyQABgkADgnQAMiaAfh+QAhiCAigdQACgECLnbQCMnbAIgPQgGgBhGgqIgGgEQg8glgBABIifIFQiYHigDAEQgZACgrgcQgTgNgngeQgCAVgPA+IgBACQgQBIgLAaIACAAIAZgEQAZgCAHAFQgDAOgaBdIhiFaQh1GcABAAQAJAGALANIAQAUQAIhHAyiZQAuiMAsg+QAQgXAQgMQAggYAdAAQAfAAAcAcgAkxIeQg3BWgsCvQguC/AgBuQAFAPAGAOQAtBmA3ALQAsAKApgHIACgBQAbgFAAgLQABgGgIgIQgTgVgQglIgNgiQAQgYANgeQAphcANiPQAPiXgQhkQgMhJgpgRQgKgEgJAAQgiAAghAygAnXBpIhFAQQi/ArgIACIABABQgGBvgDHZIgCHEQANgEAugLIAFgBQAtgNAHgIQALhOBgl9QgOADg8ADIgIAAQhEAEAAgDQgOguAQmfIABglIAAgJQAEgHB7gSIBEgKQBHgJAeABIAchVIAAAAQgFAAh1AagAFKL4IgPBEIgWBZQgPA9gSAqQgIAuAUBFQAaBUAzgVQAygUAahNQAHgVAVhoIAKg2QANhcgHhLQgPiXhkgHQgFBIgTBbgACoJmIgQAiQgnBRgzApQgXATgWAIQgDBgAAAvQAABSASA2QAbBUA9gqQAvgfAihEQAihGAVhbIACgFQAQhGALheQAcimgjhDQgOgagkgNQgfB9gdBIgAAtgSQgQARgYBHIgBADQgXBQgSBmQguELAtC3QASBKBDhDQA1g1AWgzQAag7AbhqIAVhWIAKguQAhiFAEglQAJhsg3g0QgcgagwABIgBAAQgwAAgbAagAqLJjIABBGICEgGIAShMgAqJH2IAABXICdgSIAShNgAqFFmIAAByICzgJIAfhzgAqFDnIACBeIDagNIAkhxgAmWipIgRA7IgqCKQANgBAqgJQAjgHAGAAQAKgaAUhJIAGgYQARg/ACgYQgQgOgSgUIghgkQgEAZgVBLgAgFzHIgRABQikAKgFAGQgFAGh3GLQh2GLACAMQADAQByBtIAQAPQBlBeALgMQALgLAehlIAxifQAsiBBdksQBulcgGgEQgCgBgSAAQgkAAheAGgAB80BQAtACAVADIAMADQADACgMAxQgMAzgKAaIBEAiIBQj7QgqgVg2gRQgigLgmgJIgfgHQg4gMgCAFQgTBAgTBcQAXgDAfAAIAJAAIAlAAg");
	this.shape.setTransform(0.4,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AlNKDQg3gLgthmQgHgOgEgQIACABQAjAKAhADQBcAIAlg2QgNAegQAZIANAiQAQAlATAVQAHAIAAAGQgMAJgPAHIgCABQgSADgRAAQgZAAgZgGgAFoEAIhHgfIAPhEQAThbAFhGQBkAFAPCXQAHBLgOBcQgUgfg4gggACxBpQgYgjgbgZIAQgiQAdhGAfh9QAkANAOAaQAjBDgcCkQgLBegRBGQgEhKgyhHgAA/mrQgohAgqgpQAWhIAQgRQAcgbAwABQAwgBAcAaQA3A2gJBsQgEAlghCFIgKAtQgVBMgdBfQAsi9hlikg");
	this.shape_1.setTransform(3,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD9927").s().p("AlHLeQA8gDAOgDQhgF9gLBOQgHAIgtANIgFABgAl6J4ICXgMIgSBMIiEAGgAl4ILICvgIIgSBNIidASgAl0F7IDSgKIgfBzIizAJgAl0D8IEAggIgkBxIjaANgAmRDtIABAAIgCAlgAjGB+QB6gbAAABIgcBVQgegBhHAJgAgZjtIEivFQCSgJAHAEQAGAEhuFcQhfEsgsCBIgxCfQgeBlgLALQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgTAAhXhUg");
	this.shape_2.setTransform(-26.8,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDDAC0").s().p("AEBHzQgUhFAIguQASgqAPg9IAWhZIBHAfQA4AgAUAfIgJA2QgVBogHAVQgaBNgyAUQgLAEgJAAQgkAAgVhDgAARG4QgRg2AAhSQAAgvAChgQAWgIAXgTQAzgqAnhQQAbAZAYAjQAyBHAEBKIgBAFQgVBbgiBGQgiBEgvAfQgUAOgRAAQghAAgSg4gAlrHhQghgDgjgKIgCgBQghhuAvi+QAsitA3hWQArhBArATQApARAMBJQAQBigPCXQgOCPgoBbQggAvhKAAIgXgBgAg1BFQgti1AukLQAShmAZhQIABgEQAqApAoBAQBlCkgsC9QAdhfAVhMIgVBXQgbBqgaA7QgWAxg1A1QggAfgUAAQgXAAgKgmg");
	this.shape_3.setTransform(1.9,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABESDQjehXhlhVQAbg7AaiLQApjUgdh0QgLgqgQggIAmguQgEByANBTQATB+A2APQgDATgBBZQgCBiADApQAHBNA5ArQA7AuBAgxQAdgXAYgjQAEATAEAQQATA5AtAgQAyAlA0gcQBMgnApjCQAiikgMhoIAAAAQAEACASAAQAqAJAdAbQAYAXARApQANAehfDYQhhDdg1ArQgKAFgRAAQhGAAi+hLgAo4MDQgLgNgIgFQgBAAB1mdIBhlYIASgHQA3gVgGATQgGARhbFqQgsA9guCMQgxCZgIBHIgRgUgAkciUQgSgHhKg5QAPg+ADgVQAmAfAUAMQAqAcAZgCQADgECYniICgoFQAAgBA8AlQkfNMghBsQgWBLgfATQgKAHgNAAQgOAAgQgIgAnhkmQAVhKAFgaIAhAkQASAUAPAOQgCAYgQA/IhKg5g");
	this.shape_4.setTransform(7.8,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AlbL5QADnYAGhwIgBAAQAIgDC/grIBFgPIgHBCIhEAKQh7ATgEAGIAAAJIgBABIgBAkQgPGfAOAvQAAACBEgDIAIAAIhaHaQguALgNAFIACnFgAmHCkIACgBIgCAygABUkHQhwhsgDgQQgCgMB0mMQB3mKAFgHQAFgFCkgLIAQgBIkkPGIgQgQg");
	this.shape_5.setTransform(-39.5,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AgfR/QjHhThchAIgXgsQALgLAKgXQBmBUDeBYQDtBdAxgXQA1grBijdQBejYgNgeQgQgpgZgXQgdgbgpgKQAaAAA6gEQBfgGAXAIQgTBjh1ETQh2ETgtAvQhzgEjihggAlAEVQg2g3hDAzQgPAMgRAXQBcloAFgSQAGgTg3AVIgRAHQAahdACgOQgGgFgZACIgZAEIgCAAQALgcAQhIIABgCQBKA5ARAHQAgAPAWgOQAegTAXhLQAhhtEftLIAGAEQBFAqAHABQgIAPiNHbQiIHbgCAEQgkAdghCEQgfB8gMCaQgDAngBAkIgnAtQgPgcgTgUgAo3kkIARg7IBKA5IgGAYQgUBJgLAcQgFAAgjAHQgqAJgNABIApiMg");
	this.shape_6.setTransform(14.7,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDDDD").s().p("AgZBGIgugBIApiPIAeAHQAmAJAiALIghB6QgVgEgrgBg");
	this.shape_7.setTransform(15.5,-133.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AAACAQAKgaALgzQAMgxgDgCIgMgBIAhh8QA2ARAqAVIhQD5gAhrifQABgFA4AMIgpCRQggABgXADQAThcAUhAg");
	this.shape_8.setTransform(17.6,-125.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.5,-146.3,161.9,296.4);


(lib.DeadBlood = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("Aj0DcQhNgLgLAAQhVAFhUgBQikgDg4gfQg/gLgpgsQgsgqAbhEQAYg6AjgKQArgUA/gVQB8gqB3gMICrgRQCPgOApgGQErghCsgDQFPgIBKBOQAmAdAKAoQALAngUAqQgWAuhMAlQg/AkitAdQiPAZgVgDQh7AtiPAIIiGgCQgyAFgxAAQgsAAgrgEgACDC+QAqgFA1gRQAogLArgKQBKgQAoABIB3gWQCAgcA7gcQBjg4gOhGQgIgjgbgYQgegmhMgPQg2gLhXAAQh0gHiyANQiXALiiAWQgpAFiQAPIiqARQg8ADgxAKQhYARh6A4IgBABQgyADgPA5QgPA4AbAUQAOAQAqARQAVAJASAFQAgAYBZAIQBiAJCdgNQBPAOBmgBQA0AAApgDQBtALBQgKg");
	this.shape.setTransform(-2,-19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("AhWDNQhoAIhTgNQglgHg1ADQg8AEgeAAQgyABhggMQhlgNgSgLQh+glAJhUQADgeAUgZQARgYAOgEQB2gtAwgQQAwgPHAgvQHKgwCCABQCFABAjAEQBvANApAzQAhAXAKAiQALAjgTApQgVAphFAiQg5AbjBAlIjBAhQhKAXg8AKQhDAMhNAAQguAAg1gFg");
	this.shape_1.setTransform(-1.8,-19.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.4,-41.6,170.7,44.9);


(lib.Body = function() {
	this.initialize();

	// bodygraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA+CDQkRg2iMg2QgMgjAChPQABhIAHgNQgBACFCBCQFXBHAoAKQANAXgCBNQgBA4gFAwQhDgDjjgrgAlOhFIACBKQB7AhCUAgQDRAuCuAVIAEhEQABgqgGgbQgagMkuhAIlChDQgGANABA9gAlhiwIAAAAIAAAAg");
	this.shape.setTransform(-16.4,68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgF9QjIgTikhuQgggUAAkKQAAj6AThkQCiAiDsAdQDLAZA8AAQAJATAZEqQAaEzgSABQhqA4iPAAQglAAgogEgAksDqQBZBACJAgQCMAhB5gVQAbgEAsgOQAzgRAUgEQgMhFgOj7QgNjoACgLQhZACjOgbQjTgchmgbQgXFpAnDVg");
	this.shape_1.setTransform(-16.1,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBxIgIgBQgugGAtAFQg3gIgZgqQgWglAJgvQAIgvAegaQAggcAnATQAxgJAhAkQAeAgAAAwQABAygeAgQgdAdgvAAIgOAAgAgbhNIgCABQgaAKgNAWQgPAZAGAcQAHAeAXATQAaAUAjgDQAkgEATgYQAUgagLggQgKgegigNQgngPgKgMQACACgOACg");
	this.shape_2.setTransform(-11.3,-46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBlIgIgDQgXgJAPAGQgngUgPgpQgRgsAYgqQAXgpA1gKQArgKAxAPQACABARAXQARAWAEAJQAUAmgLAkQgOAwg1AUQgZAJgWAAQgUAAgUgHgAg7g3QgxAvAoAuQAoAuA5gPQAfgJAOgaQAPgbgNgbQgHgOgcgSQgcgRgDgKQgyAFgTATg");
	this.shape_3.setTransform(-42,-51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AH8TSQkxgRlxhmQmIhskZicQgcheA+q4QAjmJAJh3QASkDgIhZQhxAnhMgGQhrgIgVhkQgPhIBBg1QBAg1CcguQFeiSHWAJQDtAEC5AjQATABA9AAQA3AAAeAEQBgANAYBFQAeBbhCAxQgWAQgkANIguAPQCwGvCmKWQBFEUAnDRQAnDUgHA9QgIAwiABxQh6Bsg7AWQgyAThHABIh9gDgADor0QAIAegHAFQB/FSCRKMQCQKQABDtQApAAABgBQADjuiIqIQh/peiEmqIgUgRQgJgKgCgNQgKAEgPABQgQAAgKgDQAIAUAGATgAhQytQmDAGjJBbQBUA5gFBQQgFBQhYA1QAUCRg7LNQgeFogICEQgODqAOA6QD8CRG2BmQF+BZEqAJQg8msicq3QiLpqgziKQg4AZhngOIifggQmth1AaguQgFAJCqA6QCiA3AhAGIC0AoQB6AUA4gfQgGg+gXgZQgXAIhJgBQhXgChdgUQkNg4iZilIADgKQAIgMAXgJQAbgKBQgPQBpgSBvgHQFGgUDrBXQASANgCAWQAAALgEAIQgFATgoBDQgoBEgTAVQgJAVALAaQAKAYANADQAcAGAhgvQAtg+AkiIQgHgTgKgnIgPg6QhGgfiPgRQh9gPiPAAIgjAAgAJGCfQCkLHgKEMQA1geBahHQBohRAcgtQgEhCg2j4Qg5kBhOkoQjKsAiJkMQg1EDhZgRQBsE/CJJOgADKtLQAEAKAFAPQAcAHAdgNIAAgSQAAgNAEgKIA7hbQAmg5AMgjQgGgJgbgHQgdgHgGgDQgRBXhxAeQhhAaiIgUQh/gShZgtQhcguASgrQgtAGgXAEQgqAIgfAOIAqAlQA5AsBGAkQDeBwENgSIABgBQAOAAAIASgArOwpQg5ANg9AVQh6ArgcApQgeArAwAmQAsAiAkgGQBdgSAQgFQA+gRAlgfQAxgogNgzQgNgzg9gRgAINwrIAkBLIBRgVQAngUgQguQgPgpg4gKQhFgGgegFQAFAXAZAzgAk6xSQgMAjBfAhQBZAeB9AKQCCALBRgUQBdgXgPg7QiFgkidgBIgGAAQhxAAixAUg");
	this.shape_4.setTransform(-1.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AhGBAQgegaAAgmQAAgkAegbQAdgbApAAQAqAAAeAbQAdAbAAAkQAAAmgdAaQgeAbgqAAQgpAAgdgbg");
	this.shape_5.setTransform(-11,-46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AhFBCQgdgbgBgnQABgmAdgcQAdgcAoAAQApAAAdAcQAeAcAAAmQAAAngeAbQgdAcgpAAQgoAAgdgcg");
	this.shape_6.setTransform(-41.8,-52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AlQgYIgDgsQgBgrAEgCICuAyQDjA5ETAeIAABag");
	this.shape_7.setTransform(-17.2,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AABDiIgYgIQgBhcgEhkQgJjGgTgmIAZAJQAcAEASgdQATBMAPCbQARCxgSAkQgNAJgTAAIgPgBg");
	this.shape_8.setTransform(63.9,95.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ai7AdQBHgOBTgVQCkgvA4gtQAGA+gaAsQgcAwg4APQhkAbg4ABIgDAAQhiAAgNhGg");
	this.shape_9.setTransform(-83.1,-90.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAjBXQingShNgaQhogkAAhAIBDgMQBSgMBRgFQEAgQCLBBQALA1hJAoQg+AihcAAQgdAAgggDg");
	this.shape_10.setTransform(-2.7,-105.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ahkg9QAUAHCkgTQAyBIhdAsQgdAPgmAKIgiAHQgKgygehWg");
	this.shape_11.setTransform(58.6,-101.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AhPCUQh4gGgPiYQA9glBHgjQCNhHA0AGQBEAcAZAzQAlBIheBXQiTA5hGAAIgJAAg");
	this.shape_12.setTransform(-83.9,-95.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAqC7QiSgIjjh7QgLhgABhPQAEg7gCgJIBBAXQBQAaBRATQECA9CngkQAMA8ASCtQh9AeghAGQg/ANg2AAIgZgBg");
	this.shape_13.setTransform(-15.7,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AhfFVQhggZiJhRQgVgyAGkWIAKkOQAlATEuAkQCYASCQAPQAUEsAXElQiJAuiAAAQhYAAhXgXg");
	this.shape_14.setTransform(-16,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AggBfIk3hOIgBisIKnCRIAIAtQAFA6gLA7QgKAEgTAAQhTAAkBg9g");
	this.shape_15.setTransform(-16.4,67.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C4C4C").s().p("AIbSOQgBgFgKiBQgLiZgciWQgjjCisqlQisqsgbgyQi3gDi8gvQkIhBg5h2QB4gpCsgTQFXgmELBzQgOAsg0BVQgsBHADANQBXEmBXE5QCuJvAZC5QAcDMAPDcQANDIgJAGQgOAJgTAEIgLABQgSAAgFgOg");
	this.shape_16.setTransform(8.8,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#44757A").s().p("AgOE7QoQhhlwjZQgYlWAYgfICpBMQDUBWDZAxQK1CgHfkFQAeAsATCrQAKBTAEBNQhCBBhSBAQiiCChLABIgeAAQjRAAk5g6g");
	this.shape_17.setTransform(10.6,83.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44757A").s().p("Aj1C9Qi+hMiOhTQgGgQgLhCQgNhKgRg7QD9iLGSAQQEfAMDfBHQBaCagHCHQgLDIj2AnQguAHg1AAQjTAAkuh5g");
	this.shape_18.setTransform(-8.9,-92);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("Ah0hSQAAgaBBgIQA9gIAgAQQAdAOAZA9QAZA3gFAcQgFAUhOAbIhLAXg");
	this.shape_19.setTransform(56.8,-106);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5596A5").s().p("AksQlQjJg+jGhNQijhAgwgaQgHgLgGhQQgHhcABh0QAClBA5kLQA2kCgRlTQgIipgTh1QgNh9CMhGQB4g7DdgOQC7gMDdAWQDGATCJAkQByCaDZMrQDGLeAzFgQgZBki7BrQhdA2hYAhQguAHg4AAQkGAAnaiWg");
	this.shape_20.setTransform(10.6,0.2);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.5,-123.7,214.6,247.5);


(lib.ArmShoot = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArYC7QhJgTguggIgegbQFNBjHLgOQDmgHC7gfQgngpgEheQgBg6ARgfQhzAahmAPQkOAmiIAFQk7AKjdhWQgFgCgEgNQgDgOALABICzAmQCLAZCggCQHQgDLijVQAXgHAPAZQAPAagNADQgzAOjOAvIkHA6QghAkALBUQAKBYArATQGhhlAwgcQARgJAOAQQANARgQAMQgcAXgxAOIhUAVQhCAWhHAUQiKAniVAWQi/AcjLAAQknAAlDg7g");
	this.shape.setTransform(8.4,-47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AjOAbQgHg8AMg7IB8gZQCSgdBygTQAyB7guBNQgPAZgWARIgUANQhkAkiDAoQhcgOgNh9g");
	this.shape_1.setTransform(83.3,-53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#44757A").s().p("AgFBsQjDgggsgeQhIgvgVg0QgehKBxgWQB4AsCBAbQC1AmB9gPQgHAHgIAMQgQAXgGAXQgSBPBiA9Qi1gOiogcg");
	this.shape_2.setTransform(-54.7,-41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5596A5").s().p("ApHAqQhyhMAZhCQALgbAegKQAggKAmANQBQAdAiAJQBiAaB1AKQFVAcIGhtQgRAbgCAuQgGBaBMBiQlNAWj5AAQoSAAiVhkg");
	this.shape_3.setTransform(-21.3,-41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AkqB5QgthkAyhNIJIiUQAYA2AEA8QAKB3heAjQheAkjIA4Ii4AxQghgjgWgxg");
	this.shape_4.setTransform(70.9,-50.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.2,-72.6,193.6,49.3);


(lib.ArmFront = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApVN5Qglg4AUhKQAAiDAnibQAchvA7ilQBnkYCMi6QBKhjBwh5QA/hGCFiKQBnhrA8gtQBkhMBggLIABgBIADAAIABAAQBcgLAXBCQAWA+g3BEQgqAzhQBGQhqBcgXAXQk1ExhxEAQg5CBgxDdQg9EYgXBMQgXBIgyAzQg4A4hHAIIgVACQg+AAgigzgAoIHzQg6DgAWB4QAMAiAtAAQAmABAfgTQBBgmAfheQAKghALgyIAQhRIACgHIAmiqQAYhpAUhHQgjgmg6gEQhGACgkgEQhFC0gnCZgAknB9QA6AHAmAhQBLjtC8jvQCFinDTjAIApgkQA+g4ASgUQA5hAgagYQg5g2iSBtQhOA7hhBlQjnDzhjB+QipDVhUDSQAngOAoAAIAbACg");
	this.shape.setTransform(-0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44757A").s().p("AkNEXIhzAKQAEgvDOjMQCuiqCLh1QBmhUBCABQA5ABAUA+QAPAsjXDZIi4C0QhpBqgxA4QAAg1hzgCg");
	this.shape_1.setTransform(19.2,-57.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5596A5").s().p("AmSHsQg9AAg0AQQAQhQBeiXQBXiNCCiiQCAikB7iBQCFiJBXg2QCkhnA0A4QAVAWgFAsQgFApgbAtQlpEziJDEQhEBig3B4QgnBYg/CuQgphVh5gBg");
	this.shape_2.setTransform(6.4,-34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhWBDQgtAJgZAaIA8jQQBug1BTAcQAqAPASAZIgPA5QgSBMgWBkQhkhbhYAQg");
	this.shape_3.setTransform(-35.5,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AjCE+QASiaAbijQA1lEAvgvQBQgaBOAQQBZARgEA/QgFBXgtDVQgzDqgiAiQgMAMghAnQgfAlgbAQQgZAPgZAAQg0AAgwhFg");
	this.shape_4.setTransform(-40.2,53.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.8,-93.9,124.6,188.1);


(lib.ArmBack = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApcDjIhth8QhBhNgeg3Qg1hoABgDQgDgVAVASQALAJALAMQAfA4BGBTQAbAgBMBWQBNBYBHA4QBXBDBcAiQC9BFDYg1QDLgwCkiIQhMgKg5g7Qg4g7gHhNQiSC0jpAPQjtAQimiiQiIiCh3jjQhUirAiABQAOABAkBFIArBWQCJDmB3BkQCsCVDTgXQBqgMBYg5QBQg0BFhcQA0hHCFjeQAfhdBqgUQBdgSBNAuIAJAGIAJAGQA+AtAMBTQAKBLggBUIABACQiBELjmCqQj2C1kZAHIgUAAQk1AAjjj9gAIgl0QgQARhaCPQhgCagiAtQABBWBfBAQAlAZAlAKQAlAKAQgKQBLhHBBhbQA+hUAuheQAWgsgOg8QgNg6gmgqQgogugwgDIgJgBQgyAAgtAyg");
	this.shape.setTransform(0.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AiZCUQgagrgRg5IgLgwQAohLBhiMQBdg2BYA0QBGAqAUBCQAQA2gYBFQgbBShYCCQgtARglAAQhbAAg6hfg");
	this.shape_1.setTransform(62.7,-19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDDAC0").s().p("AkIBgQA/hiBBhkQCCjJAKgCQBVgPA7ANQB/AcgLCMQgLCUhzCgQgsA9guAqQgrAngTACIgWABQi2AAgujag");
	this.shape_2.setTransform(55.7,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44757A").s().p("AgTFQQjqiDixlNQgZiyACg6QACh4BHAxIBMCfQA3BrA9BPQCsDfEBA8IgGAaQgDAhALAgQAlBoCvA+QkrgPivhjg");
	this.shape_3.setTransform(-40.9,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5596A5").s().p("AqwiDQgKgSgLg+QgMhFAAg8QAAioBfA6QAbBCAzBZQBmCxB3BzQCnCgCwAOQDeASDjjUIANBCQALAoAUAdQA3BMCeAeIhxBJQhLAwg7AeQisBZiaAHIgZAAQmiAAmKpUg");
	this.shape_4.setTransform(-16.3,-0.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.6,-48.1,175.7,96.2);


(lib.GreenChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AglCRQgxgWgmgzQgog2ASg4QAQg1A5gqQAageAbAHQANAEAmAbQAKAHAsATQAjAPANASIACAEQAfAugYBAQgXA/gzAfQgaAQgcAAQgYAAgbgNgAgph1QgZABgiA2QgeAuAUAvQASAsAvAZQAtAZAqgOQAugPATg4IAEgOIABgEQAIgngWgXQgEgDg/goQg0gigTAAIgBAAg");
	this.shape.setTransform(0,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AgsB0Qg3gTgVg9QgMgkASguQASguAhgWQAfgWA3AgQAtAZAeAkIACADQAmAsgSAtQgQAqgzAVQgcAMgaAAQgWAAgVgIg");
	this.shape_1.setTransform(0.1,-16.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,-31.7,30.7,31.8);


(lib.GreenChunk2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgfEYQgigLgogrQgsgwgXgfQgng2gBgmQgCgXAjgqQATgXAhgkQAqg0ATgeQAegxAHguQAOhUBeBqQBMBUAgBDQAdA/gDAtQgDAzgoA1QgjAugTAVQggAlgfAVQgeAUgcAAQgNAAgNgEgAguiGQgdAwgtA3QgZAfgMASQgWAjAJAUQAIAUARAXIAfAnQAtA7AWAQQAsAfAqghQAbgUAbggQAQgTAXggIAHgJQAmg3gFg0QgEgrgnhAQgfgygZggQglgvghgWQgPA5giA6g");
	this.shape.setTransform(0,-28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AgPgLQgBgEAYAUIAIAIIgfgYg");
	this.shape_1.setTransform(10.6,-45.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E9140").s().p("AgqD8QglgUglguQghgqgTgsQgIgUACgZQACgbAOgNQAMggAggrIA/hNQAEgFAdhFQAUgyAbgBQASAAAXAgQAVAdACAUQBZBFgHB+QgGB2hKBGIgJALQgdAfgeAMQgRAHgNAAQgUAAgTgLg");
	this.shape_2.setTransform(-0.3,-28.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-56.9,42.8,57);


(lib.GreenChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AhpDZQgIgCgUhAQgXhLgDgFQgeg7gJgfQgPg0ANguQANgtApgjQAugoAqAPQAQAGAaASQAaAUAMAGQALAFAeAKQAaAJANAHQAgASATA6QAdBWACADQAwBbgyA4QgtAxhnAGIgdABQgyAAg8gKgAh1iuQgdASgRAmQgNAfAJAqQAEAVATAwQAfA8AHARQAUAsADAmQAyAHAhAAQAtAAAlgLQAlgLARgIQAfgQAHgYQAIgYgVgoQgagrgHgPQgLgrgHgVQgNgmgdgKQhHgagwghQgRgLgQAAQgQAAgRAKg");
	this.shape.setTransform(0,-22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AhsCjQgPgvgJgRQgohNgGhPQgIhsBKgbQAPgFARADQASACAMAKQAOAMANACQAXAEAGACQAgAJAdAZQAbAWASAeIAGAKQAQAcALAjQAaAOAEA1IABABQAFARgCARQgDASgJANIgGALQgTAkgsAPQgIADgHgEIgEABQgYAFgrgBQgwgCgTACIgHABQgeAAgQgig");
	this.shape_1.setTransform(0.8,-22.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-45.4,41.5,45.5);


(lib.EnemyBeaverFace = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBHQgRgdAAgqQAAgoARgeQASgeAXAAQAYAAASAeQARAeAAAoQAAAqgRAdQgSAegYAAQgXAAgSgeg");
	this.shape.setTransform(-8.8,-131.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBLQhLgFg0gVQg4gYARgbQAwhWCbAPQAhAEAoARQAzAXgCAZIABACQATArg1AVQgkAOg6AAIgggBg");
	this.shape_1.setTransform(-3.3,-90.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("Ai9F/QhqgUhPgxQi/h2A1jTQApiiCFhqQCHhrCygFQC0gFCkBPQDGBgAHCpQAHCvi1CHQidB0i8AWQggAEgkAAQg+AAhAgNgAgNlnQi8ACiBB0Qh1BngaCNQgdCeBxBmQB6BvDJgIQC0gGCPheIAFgDQBLgxA1hFQA2hHAPhKQAliqiwhlQidhYimAAIgKAAg");
	this.shape_2.setTransform(0,-76.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AhDEMQhagDgohGQggg3gEhUQgCg1ALhbQAEgjANAIIAHAHQADAEAAgEIADBbQACBBADAZQAFAtAFAUQAJAlAUAWQAqAtBdgRQBNgPA4goQA4goANhKQALg5gQhNQgMg4gdhNQgKgcARgUQARgUAMAgIAEAJIAFAPQCEFtjnBdQhSAhhAAAIgIAAg");
	this.shape_3.setTransform(17.5,-26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AhjCjQhMgngDheQgBg8AghmQAVhAAOAEQANADgMA0QgQBJgEAYQgLA+AHAiQARBeBwAFQAkACCGgYQAlAJg5AaQg2AYgVABIgSAAQhdAAg5geg");
	this.shape_4.setTransform(-18.3,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("ADdFcQgFgDALgeQAUg1AIgpQAVhtgJhnQgSh3gRgrQgkhZhEgnQhMgthdAWQhZAUg9BFQhEBOgOB5QgMBiAbB3QAKAuAWBJQgWAGgKgMQgBgCgQgkQgihPgEhpQgChZAchbQAfhhA3hEQCGimC/BZQCiBKAYDwQAKBhgRBqQgQBjgjBNQgbgMgEgDg");
	this.shape_5.setTransform(5.2,-143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAOQgkgKAIgOQAIgRAkAGIAvADQAdACARAFIABAAIAAAAIABABQAfAKhFAXIgLABQgbAAgjgKg");
	this.shape_6.setTransform(-17,-12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAAQAAgWAWAAQAWAAAAAWQAAAXgWABQgWgBAAgXg");
	this.shape_7.setTransform(-27.9,-17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAWQgLgEAAgSQAAgPAQgFQAOgGAMAJQALAIgFAKQgEALgMAHQgIAEgGAAIgHgBg");
	this.shape_8.setTransform(3.5,-13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQAzQgPgEgOgMQgSgQAIgNQAGgIAfAAIArAAIBKgiQAwgWAYAKIABAAIAAAAIADACQApAYhlApQhOAhgmAAQgIAAgHgBg");
	this.shape_9.setTransform(19,-11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EADFC3").s().p("ABsDjQhigCgehMQgyBDhxgIQhvgIgqhEQgXgkALhKQADgWAXhYQANg0AHgFQAPgKBGAUQBUAZBfgGQBXgFBYgfQAFgCAqgYQAsgZAcgLQBdgmgIBRIAAACIAAADQgDAjAHA6QAIBKAAAXQACBxhZAyQhLAohMAAIgHAAg");
	this.shape_10.setTransform(1.4,-26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FA355").s().p("AhWC9QiTgBh2g7Qhvg3gOhEIgVg8QgNgtAIggQAjAAA3AeIBJApQA+AdBLAOQA8ALBQAFQCRAGCHg8ICbhSQCWhLgTAjQhrDCirBeQiNBOijAAIgIAAg");
	this.shape_11.setTransform(0.3,-58.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0BA5F").s().p("Al3EvQh5hOABiTQACitCIiJQCPiRDLAAQDRAACVBqQCVBqAACVQAACVilB6QimB7jPAAQjXAAh2hLg");
	this.shape_12.setTransform(0.3,-76.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguAAQABgSAMgOQANgPAUAAQAVAAANAPQANAOAAASQAAAwgvAAQgtAAgBgwg");
	this.shape_13.setTransform(20.3,-153);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtAxQgagSgBgbQgCgVASgWQASgVAagHQAagHAYAOQAfASAEAfQACAagTAZQgTAZgbAEIgKABQgXAAgWgVg");
	this.shape_14.setTransform(9,-163.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EADFC3").s().p("AjQEpQhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7QhXB8h6AAQh5AAhXh8g");
	this.shape_15.setTransform(5,-135.1);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.4,-179.3,105,179.4);


(lib.EnemyBeaverBody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AhaAIQgogNAPgKQAOgKAiAIQAtAKAugDQAigCAugLIALgCQAPgEgiAZQgiAWgNADQgYAFgZAAQgrAAgvgSg");
	this.shape.setTransform(-20.8,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("AAMAFQgMgKgdAJQgcALgEgEQgHgIANgJQANgLAWgFQA3gNAWAkIABACQAMAXgMAAQgLAAgjgVg");
	this.shape_1.setTransform(-64.7,-190.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("Ag+AiQgKgOAPgUQANgRAagOQAagOAXACQAZACAKAWIAAABQAGAPgdgCQghgFgEABQgWAIgVAfQgHAMgEACIgCAAQgFAAgHgKg");
	this.shape_2.setTransform(33.9,-192.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("AhxIGQgNgQAIgPQAPgdAYgfQBChZAbg7QBOiZAWioQAdjVhBhzQgTghgcgYQgegagfgJQgTgFgyAIQgsAIgWgOQgigUBGgWQA9gTAbABQAhAAAiATQAhASAYAbQBUBfAJCuIAAAOQAHC2g+C+QhIDhiFBmQgHAFgGAAQgJAAgHgIg");
	this.shape_3.setTransform(68.3,-78.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AigREQhzgKhigjQgYgIgtAaQguAbgggLQi2g+ggk5QgLhsAGiVIAMjVQAOkkAsjfQAZiAAihrQg+gkgWhSQgVhRAQhgQAPhaAqhOQAzhdBPgHQBAgFBmA2QAiASA8geQBXgqAPgEQBmgWBnAbQAKADBRAoQBCAhATgHQAcgMA4gZQAygWAlgIQBUgSBIA3QBBAxAmBcQAlBZgDBcQgEBhgwA7QggAog0ATQAYBCAQAzQAkB0AZB8QAVBmARCEIAXDSIACAYIAAAEIAEAjIABANQAKBnACA5QAGCJgUBmQgaCDhEBXQhLBdhLgGQgogDgcgeQgUgUgLABIgmANQi6A8jGAAQg8AAg9gFgAlbP1IBFAYQBRAPBigBQBOAABkgLQDPgVCOhKQAkgWAcgQQA3gdgGAWQgSA/hZApQBVBTBWiPQAfgzAYhGQAVg6AFglIABgMIABgHIABgFQAOiEgQixQgFg3gmkVQgrlBhlkCQhqkQisiXQjfjFjvCDQhyA+hVCNQg/Bpg0CgQhbEagdFaQgOCzgDCDQgECqANCLQAIBZAQA6QAWBTAqAyQAeAkAvARQA6AVAXgsQiDhZAjgUQABgBA4ApQA7ArAIAEIAEgBQANAAAsAQgAFjwCIgEABIg0AYQggANgXABQBkBOBPB7QBCBnA3CLQBRgfAUhbQARhLgahbQghh2hBg1Qgvgmg7AAQgkAAgpAPgAphu/IgEAIQg0BegIBuQgJCMBVA2QAviJA3hiQBFh7BYhNQgfgGgxgSQgygSgTgEQgJgBgJAAQg8AAgsBMg");
	this.shape_4.setTransform(-11.7,-109.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FA355").s().p("AAcBRQgXgBgXgYQgWgGggg9QgfhAAZAJQAlANAtAAQA9AAAZgcIghB7QgBAogaAAIgCgBg");
	this.shape_5.setTransform(-72.5,-172.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9FA355").s().p("AhCAGIgwhvQBKA8A9AAQAxABAtgkIgWBUQggBYgvANIgFABQgaAAgxhkg");
	this.shape_6.setTransform(44.2,-174.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0BA5F").s().p("ABPEQQgdgMgXhRQgbhqgDgEQgWgrgfgoQgRgYgug3Qg1ghgagYQgxgtBVgRICIg+QCpAjA3CnQAVBBgCBFQgCA/gSAsQgPAkghAjQggAjgZAAQgHAAgGgDg");
	this.shape_7.setTransform(33.5,-189.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0BA5F").s().p("AiADqQgQghgLgLQgxgwAaiOQAVh7AqhFQBSiDDdCCQg6AchzDVQg4BsguBmIgGABQgVgBgOgYg");
	this.shape_8.setTransform(-62.3,-189);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727D3D").s().p("AhVFTQiKgFhkgXQgngUgWgGQgmgMgPAZQgjA7hWgyQhJgqgbg0QgTg3gQhQQghidAJh9QCRBxDFArQC4AoDMgZQDGgZC4hQQC4hQCGh5QAcEzhKCzQglBbgrAdQgPAigxAJQgwAJgfgUQgTgMgIgfQgDgNglARQipBQjuAAIg3gBg");
	this.shape_9.setTransform(-11.2,-36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E9140").s().p("Am5PiQiLhJg+iXQg2iEgBjTQgBidAfkQQA3nqCHkGQChk7EYAAQB0AAB2BWQBxBTBiCXQDPE/AtG0QAiFMADBOQAHDRgxB9Qg7CXiaBNQirBVkyAGIgbABQjtAAiPhMg");
	this.shape_10.setTransform(-12.2,-109.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B4F29").s().p("AijFJQhCiJAAjAQAAi/BCiIQBBiJBdAAQByAABABfQBUB6gpD3QgkDbgtBsQg5CKhTAAQhdAAhBiIg");
	this.shape_11.setTransform(59.5,-81.7);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86,-219.4,172.1,219.5);


(lib.EarChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AAJChQgOgKgcgYQg0gugOgmQgRgtAdg2QAfg4AmghQA2gwAqAjQARANACAhQABAKgCApQgBAYAFAlQAGAtABAPQABArgGAXQgJAogfAHIgMABQgTAAgWgNgAgJhpQgRASghAuQgdApAfA2QAaAvAvAgIABAAIACACQAlAWAOggQALgYgDgtQgBg8gCgpQgEhNgRgOQgGgFgHAAQgUAAgeAkg");
	this.shape.setTransform(0,-17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0BA5F").s().p("AAACLQgpgcgcgsQgkg2AWglQASgfAngmIA/g8QAcgaAaDFIAAAEIABANQAEB6gxAAQgUAAgbgSg");
	this.shape_1.setTransform(-0.1,-17.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-34.8,21.4,34.9);


(lib.BloodSplat1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E54A4A").s().p("AgoAbQgSgLABgQQgJgcArgEQAXgCAiAEQAaABgBAYQAAAWgZADQgCgIgSAHQgSAJgFABQgGAEgHAAQgIAAgKgGg");
	this.shape.setTransform(-10.5,-28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54A4A").s().p("AhRBCIg7gIQgngGgOgOQgnglBMgiQAxgXA4gKQA+gMA7AHQA9AHAwAaIADACIADABIAAAAIABABQA1AehUAmQg/AdgwAHQgcAEgYAAQgmAAgjgIg");
	this.shape_1.setTransform(-38.7,-19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A82222").s().p("AiPDBQiIgDhrgPQhwgOhMgZQiDgsgHhEQgYgyB/g4QBEgeBkgaQDPg4D5ACQC+ACD9AkIAFABIANACQBOALAsAPQBHAYAeArQAtA9hDBEQg1A2hLAXQheAdiBAJQgtADi2ADIirABIhHAAgAhaiQQjlAIi5A8QhNAZgQAIQg9AagQAeQgKAVA1AeQAkAVAhALQBmAhCAANQBhAKCJAAID0ABQCOgCBmgNQBugOAygRQBdgfAdhCIABgBQAihQihgjQg7gNiggLQjrgPiBAAIg1ABg");
	this.shape_2.setTransform(0,-19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D32424").s().p("Ak9CdQh2gSg9gNQhsgXg9goQhNgzBphBQBKgvBcgYQDIg1C3gEQBYgCByAJIDMATQCTAOAqAIQBmASBFAoIAIAFQAZAPgcA3QgRAggeAnQgWAcg6ANQhEAKgaAFQjKAmjKABQg6AQhQAAQhlAAiIgZg");
	this.shape_3.setTransform(0.1,-19.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.7,-38.6,143.6,38.7);


(lib.BloodDrop1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D32424").s().p("AACAwQgrgDg0gfQgPgGgLgJQgBgGAxgIQAmgFASgBQBZgGAcAzQguAZgrAAIgLgBgAATAEQgHAMALAGQAQAKAHgUQAIgSgTAAQgKAAgGAKgAgmgSQgcAFAJARQAIAVAhgKQAfgJgQgRIAAgBQgIgHgQAAIgNABgAAvgwQA7AKAOAjQgZgggwgNg");
	this.shape.setTransform(0.7,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54A4A").s().p("AAdAUQgLgGAHgNQAGgKAKAAQATAAgIASQgFAOgJAAQgEAAgFgDgAgzACQgJgSAcgFQAZgEAKALIAAAAQASARgfAKQgKADgJAAQgRAAgFgOg");
	this.shape_1.setTransform(0.1,-8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A82222").s().p("AgpAwQgxgSgcgUQgyggAtgWQBHgjBPAKQAOACANADQAxANAZAgQAKAOAGAOIABACQAFAPgcAPQgZAPgmAIQgjAIgXAAQgnAAgDgYgAgHglQgTABglAGQgxAHAAAHQALALAPAFQA1AeAqADQAxADAzgbQgZguhMAAIgPAAg");
	this.shape_2.setTransform(0,-7.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.4,29.2,14.5);


(lib.BeaverTooth2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AiGDFQhMgngChfQgCg9AhhkQARg2ANgGQAPgcBbgdQAugOBFAFQBCAGAzAVQALgBAGAJQAIAFgDAKQAFAXAAAjQAAATgDAlQgCBEgIAxIgLA8QgIAngQAPQgNAOgiAMQgVAKgdAKQgcAJgHAAIgSAAQhdAAg5gdgAgci6QgqALgRAFQgiALgUARQABAPgFAXIgVBhQgLA+AHAiQAQBZBjAKQA1AFBtgWIALgHQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQARgNADgMQAUg7AGg8QAGg6gBg0QgCguABgWQgXAAhMgUQgngKgeAAQgPAAgOADg");
	this.shape.setTransform(0,-22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAOQgkgKAIgOQAIgRAjAGQAKABAmACQAeACARAFIABABQAfAKhFAYIgLAAQgbAAgjgKg");
	this.shape_1.setTransform(-1.1,-9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAAQAAgWAWAAQAXAAAAAWQAAAXgXAAQgWAAAAgXg");
	this.shape_2.setTransform(-12,-14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EADFC3").s().p("AhYC7QhagigHhbQgCgJAGgKQAAhMACgZQAHg6AYgkQALgRATgCIABgBQAOgNAUgHQAWgIASAFQAigHA2AFIBUAJQAaABANATQAMARgEAWQAVAngVBFQgEA3gTA1QgUA2gZAXQgQAOgTAAQgsAWgtAAQgkAAgkgNg");
	this.shape_3.setTransform(0.6,-22);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-45.3,42.8,45.4);


(lib.BeaverTooth1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AhDENQhagDgohFQggg4gEhUQgCg1ALhaQAEghALAEQAcg0B0g4QB7g8BgAVQAOgIAJAYIADAHIgCgEQCTGAjuBfQhRAhg/AAIgKAAgAhIixQgxAagpAfQgaAWgIAEQADCIAEAgQAFAsAFAVQAJAlAUAWQAqAtBegRQBMgOA4gpQA4goAOhJQALg6gRhMQgLg1gehRIgDgNQgUgEgWAAQhMAAhcAyg");
	this.shape.setTransform(0,-26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAWQgLgEAAgSQAAgPAQgFQAOgGAMAJQALAIgFAKQgEAKgMAHQgIAFgGAAIgHgBg");
	this.shape_1.setTransform(-13.9,-13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQAzQgPgFgOgMQgSgPAIgNQAFgIAgAAIAqAAQAUgFA2geQA1gXAYAOQAoAYhkAoQhPAigmAAQgIAAgGgBg");
	this.shape_2.setTransform(1.5,-11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EADFC3").s().p("AgqDuQhigCgghMIgHAIIgNhdQgIg2AAglQgBgiAGg3IAEAAQAEgVAlgXIAzgbQBEglA4gOQBFgRBBALQATAEAAAVQAPANgDAjIgBAHQgCAiAGA5QAJBKAAAXQABBxhZAyQhKAohLAAIgHAAg");
	this.shape_3.setTransform(-0.8,-27.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-53.7,47,53.8);


(lib.BeaverNose = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADBLQhLgEg0gWQg4gYARgbQAwhWCbAPQAiAEAnASQAzAWgCAZQAAgBABAAQAAAAAAAAQAAAAABABQAAABABACQABADgDgEQATArg1AVQgkAOg6AAIgggBg");
	this.shape.setTransform(-3.3,-53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("Ai9F/QhqgUhPgxQi/h2A1jTQApijCFhpQCIhrCxgFQC1gFCjBPQDGBgAHCoQAHCwi1CHQicB0i9AWQggAEgjAAQg+AAhBgNgAgNloQi7ADiCBzQh1BogaCNQgdCeBxBmQB6BvDJgIQC0gGCQheIAEgDQBMgyA0hFQA2hGAPhKQAliriwhkQichZinAAIgKAAg");
	this.shape_1.setTransform(0,-39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FA355").s().p("AhWC9QiTgBh2g7Qhvg3gOhEIgVg8QgNgtAIggQAjAAA3AeIBJApQA+AdBLAOQA8ALBQAFQCRAFCHg7ICbhSQCWhLgTAjQhrDCirBeQiNBOijAAIgIAAg");
	this.shape_2.setTransform(0.3,-21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0BA5F").s().p("Al3EvQh5hOABiTQACitCIiJQCPiRDLAAQDRAACVBpQCVBqAACWQAACVilB6QimB7jPAAQjXAAh2hLg");
	this.shape_3.setTransform(0.3,-39.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.4,-79.2,105,79.3);


(lib.BeaverEyePop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBHQgSgeAAgpQAAgpASgdQASgeAXAAQAZAAARAeQARAdAAApQAAApgRAeQgRAegZAAQgXAAgSgeg");
	this.shape.setTransform(-14,-39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AhOGoQhYglhChdQglgzgFglIgCgFQgihPgDhpQgDhXAdhdQAehhA3hEQCGimDABZQCeBJAbDoQAXDGhLCwIgFALIgBADQgQAgglAeQgeAagkASQhRArg+AAQgkAAgfgNgAgql7QhZAUg8BFQhFBOgOB5QgMBiAbB3QAJAqAPAyQAVAtAaAfQAlArAWATQAlAhAkAHQBQARBog8QA3ghAYgnIAMgTIAHgWQAVg7AHgjQAVhtgIhlQgTjfh5hFQgzgeg8AAQgbAAgfAHg");
	this.shape_1.setTransform(0,-43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAAQAAgSANgOQANgPAUAAQAVAAANAPQAMAOABASQgBAwguAAQguAAAAgwg");
	this.shape_2.setTransform(15.1,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAxQgbgSgBgbQgBgVASgWQARgVAagHQAbgHAYAOIAEACQAbASADAdQADAagUAZQgTAZgbAEIgKABQgXAAgVgVg");
	this.shape_3.setTransform(3.7,-72);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AjQEpQhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7QhXB8h6AAQh5AAhXh8g");
	this.shape_4.setTransform(-0.1,-43.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,-87.4,63,87.5);


(lib.BeaverEye = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBHQgSgeAAgpQAAgpASgdQASgeAXAAQAZAAARAeQARAdAAApQAAApgRAeQgRAegZAAQgXAAgSgeg");
	this.shape.setTransform(-14,-39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AhOGoQhYglhChdQglgzgFglIgCgFQgihPgDhpQgDhXAdhdQAehhA3hEQCGimDABZQCeBJAbDoQAXDGhLCwIgFALIgBADQgQAgglAeQgeAagkASQhRArg+AAQgkAAgfgNgAgql7QhZAUg8BFQhFBOgOB5QgMBiAbB3QAJAqAPAyQAVAtAaAfQAlArAWATQAlAhAkAHQBQARBog8QA3ghAYgnIAMgTIAHgWQAVg7AHgjQAVhtgIhlQgTjfh5hFQgzgeg8AAQgbAAgfAHg");
	this.shape_1.setTransform(0,-43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAAQAAgSANgOQANgPAUAAQAVAAANAPQAMAOABASQgBAwguAAQguAAAAgwg");
	this.shape_2.setTransform(15.1,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAxQgbgSgBgbQgBgVASgWQARgVAagHQAbgHAYAOIAEACQAbASADAdQADAagUAZQgTAZgbAEIgKABQgXAAgVgVg");
	this.shape_3.setTransform(3.7,-72);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AjQEpQhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7QhXB8h6AAQh5AAhXh8g");
	this.shape_4.setTransform(-0.1,-43.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,-87.4,63,87.5);


(lib.BeaverBody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgOIPQiUgnhrhrQhyhygUiRQgNheAXhsQANiGBFiBQAwhaBFgyQBNg5BeACQCYACBzCKQBgB0AqCpQAdB0gCBsQgDB8grBjQgyB1hmA1QhCAjhJAAQgrAAgrgMgAh4nYQhCAag2BJQgqA6gfBSQg6CXAECQQAAAGgGACQADBCAUA5QAvCDCLBeQCRBiCEgYQB0gUBBhuQA3hdAGiBQAGh8gchyQgeh7hAhiQhBhihagtQg6gcg3AAQguAAgtASg");
	this.shape.setTransform(-21,-146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#752C44").s().p("ABqIBQg9gpgrg/Qgig2gdhQQg7ilgMibQgMikAnh5QA2imCJgUQAHgBADAHQADAHgHAEQh6A2gsCOQgjBtAOCgQAhGDC8CAQAPAKgKAQQgFAKgIAAQgFAAgHgEg");
	this.shape_1.setTransform(-20.6,-145.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E54875").s().p("ADMIMQglgKgkgXQiPgHhsiTQhfiAgVidQgLhQAXhgQAVhXAthRQAwhXA7g5QBKhJBQgJIADgBQALgIANAEQAMAEAHAMIANgBQAOgBACAPQACAPgOAEIgRAHQgHALgLACIgCABQgeAagUA6QgJAbgOBDQgTBXABB3QACClAUBhQAfCbBUBNQAJAIACANQATAPAVAMQAWAMgKAYQgIASgQAAIgKgCg");
	this.shape_2.setTransform(-35.6,-145.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("AhZAIQgogNAOgKQAOgJAiAHQAtAKAugDQAjgCAugLIALgCQAOgEgiAZQgiAXgMACQgZAGgZAAQgrAAgugTg");
	this.shape_3.setTransform(-20.8,-14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AAuAYQgWgIgLgKQgNgKgcAJQgdALgDgEQgIgJANgJQANgKAWgGQA4gNAWAmIAAABQAMAWgNAAQgEAAgHgCg");
	this.shape_4.setTransform(-64.7,-190.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3526").s().p("Ag+AiQgKgOAOgUQAOgRAagOQAagOAWACQAaACAKAWIAAABQAGAPgdgCQghgEgEABQgWAHgVAgQgHAMgEABIgCAAQgFAAgHgKgABCgTIAAAAgAA/gaIADAHIgDgHg");
	this.shape_5.setTransform(33.9,-192.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3526").s().p("AhxIFQgNgPAIgPQARggAWgcQBChZAcg7QBNiaAXinQAcjWhBhyQgTghgbgYQgfgbgfgIQgTgFgyAIQgsAHgWgNQgigUBHgWQA8gTAbABQAhAAAiATQAhASAYAbQBQBbAMCgIAAAOIABAEIABAWQAECyg8C6QhIDhiFBmQgHAFgGAAQgIAAgIgJg");
	this.shape_6.setTransform(68.3,-78.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3526").s().p("AigREQhzgJhigkQgXgIguAaQguAbgggLQi1g+ggk5QgLhrAFiWIAMjUQAPkmArjeQAZiBAihpQg+gkgVhTQgVhQAQhgQAPhaAqhPQAzhdBPgHQBAgFBlA2QAiASA9gdQBXgrAOgDQBmgXBoAbQAJADBSAoQBCAiASgIQAdgLA3gaQAygVAlgIQBVgSBIA2QBAAxAnBcQAkBagDBcQgDBhgwA7QggAng0ATQAYBCAPAzQAlB3AZB5QAVBmAQCEIAZDuIACASQAMB2AEBJQAFCIgUBnQgaCDhEBWQhKBdhLgFQgngDgegeQgUgVgLABQgSAHgUAGQi5A8jKAAQg6AAg8gFgAlbP2QA/AWAGABQBRAPBjgBQBNAABkgLQDNgUCRhKQAkgXAcgPQA3gegHAXQgRA+haApQBVBTBWiOQAfgzAYhGQAVg7AFglIABgMQARiIgRi5QgFg2glkWQgtlEhjj/QhrkQisiXQjejFjvCDQhyA/hVCMQg/Bpg0CgQhcEagcFaQgPCzgDCDQgECqANCMQAJBZAPA5QAXBTApAyQAeAkAwARQA6AVAWgrQiChaAigUQACgBA4ApQA7ArAIAEIADgBQAMAAAtARgAErvpQggAOgXAAQBkBOBPB7QBCBmA3CMQBRgfAUhbQARhKgahbQghh3hBg1QhJg7hlAhIgBAAIgFACIgKAEIAEgCQgEACgDAAQgCABAAABQgBAAABgBQACAAADgBIgxAWgAphu+IgEAHQg0BfgHBtQgKCMBWA2QAuiIA4hjQBEh7BZhNQgggFgxgSQgygTgTgDQgJgCgJAAQg8AAgsBNg");
	this.shape_7.setTransform(-11.7,-109.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9FA355").s().p("AAcBRQgXgBgXgYQgWgFggg+QgfhAAZAKQAlANAtAAQA9AAAZgcIghB6QgBAngaAAIgCAAg");
	this.shape_8.setTransform(-72.4,-172.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9FA355").s().p("AhCAGIgwhvQBKA7A9ABQAwABAugjIgXBTQgfBYgvANIgFABQgaAAgxhkg");
	this.shape_9.setTransform(44.3,-174.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B0BA5F").s().p("ABPEQQgdgNgXhQQgbhpgDgFQgWgsgfgoQgRgWgug4Qg1ghgagYQgxgtBVgSICIg9QCpAjA3CnQAVBAgCBGQgCA/gSAsQgPAjghAkQggAjgZAAQgGAAgHgDg");
	this.shape_10.setTransform(33.6,-189.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0BA5F").s().p("AiADrQgQgigLgKQgxgxAaiOQAVh7AqhEQBSiEDdCDQg6AchzDVQg4BrguBmIgGABQgVAAgOgYg");
	this.shape_11.setTransform(-62.2,-189);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727D3D").s().p("AhVFTQiKgFhkgXQgngUgWgGQgmgMgPAaQgjA6hWgxQhJgrgbg0QgTg3gQhPQghieAIh9QCSBxDFArQC4AoDMgZQDGgZC3hQQC5hQCGh5QAcEzhLC0QglBagqAeQgPAhgyAKQgwAJgegVQgTgMgIgeQgDgOglARQipBQjuAAIg3gBg");
	this.shape_12.setTransform(-11.2,-36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E9140").s().p("Am5PiQiLhJg+iXQg2iDgBjUQgBicAfkRQA3npCHkHQChk7EYAAQB0AAB2BWQBxBUBiCWQDPE/AtG0QAiFMADBOQAHDRgxB9Qg7CYiaBMQirBWkyAFIgeABQjrAAiOhMgAghBxQA+AtBKgWQBFgUAwhBQBVhzAIjTQADhbgUhNQgYhYg0g+QgxiLiDh0QgUgSgYAFIgNgDQgZgFgcAGQgMgLgPgCQgQgBgPAKQhVA+gYCSQgNBRAFCjQAGCyATBbQAiCcBXBMQAWASAagFIASAOg");
	this.shape_13.setTransform(-12.1,-109.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4B4F29").s().p("AijFIQhBiIAAjAQAAi/BBiJQBCiIBcAAQByAABABfQBUB6gpD3QgjDagtBtQg6CKhTAAQhcAAhCiJg");
	this.shape_14.setTransform(59.5,-81.7);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86,-219.4,172.2,219.5);


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0});

	// head
	this.instance = new lib.Head("synched",0);
	this.instance.setTransform(13.3,-144.8,0.373,0.373,0,0,0,-40.2,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-40,rotation:-1,y:-146.9},9).to({regX:-40.1,rotation:0,y:-144.7},9).wait(1));

	// body
	this.instance_1 = new lib.Body("synched",0);
	this.instance_1.setTransform(24.5,-66.5,0.373,0.373,0,0,0,28.2,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.39,x:26.4,y:-68.6},9).to({scaleX:0.37,x:24.5,y:-66.4},9).wait(1));

	// armfront
	this.instance_2 = new lib.ArmFront("synched",0);
	this.instance_2.setTransform(-8.4,-137,0.373,0.373,0,0,0,50.9,-81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-139.1},9).to({y:-136.9},9).wait(1));

	// gunhand
	this.instance_3 = new lib.GunHand("synched",0);
	this.instance_3.setTransform(82.5,-134.1,0.373,0.373,0,0,0,4,127.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-136.2},9).to({y:-134},9).wait(1));

	// armback
	this.instance_4 = new lib.ArmBack("synched",0);
	this.instance_4.setTransform(26.5,-135.7,0.373,0.373,0,0,0,-81.6,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-137.8},9).to({y:-135.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-261.7,162.4,203.3);


(lib.EnemyBeaver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"idle":0,death:24});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(16));

	// beavernose
	this.instance = new lib.BeaverNose();
	this.instance.setTransform(-23.6,-75.9,1,1,0,0,0,0,-15.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regY:-15.4,rotation:21,x:-19.8,y:-88.9},2).to({regX:0,rotation:137.2,x:75.7,y:-50},5).to({rotation:148.2,x:96.7,y:-46.1},4).wait(5));

	// tooth1
	this.instance_1 = new lib.BeaverTooth1();
	this.instance_1.setTransform(-8.4,-69,1,1,0,0,0,-1.9,-45.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({rotation:18.9,x:-7.4,y:-79},2).to({rotation:74.4,x:58.3,y:8.8},5).to({rotation:78.4,x:73.2,y:9.8},4).wait(5));

	// tooth2
	this.instance_2 = new lib.BeaverTooth2();
	this.instance_2.setTransform(-39.1,-64.8,1,1,0,0,0,-0.9,-37.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regY:-37.4,rotation:14,x:-39.6,y:-85.5},2).to({regY:-37.5,rotation:84.6,x:11,y:-2.5},5).to({regY:-37.6,rotation:91.6,x:22.1,y:-1.5},4).wait(5));

	// beavereye
	this.instance_3 = new lib.BeaverEyePop();
	this.instance_3.setTransform(-18.7,-159.7,1,1,0,0,0,0,-43.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({regY:-43.5,rotation:8.5,x:-6.6,y:-156.5},0).to({_off:true},1).wait(14));

	// beaverbody
	this.instance_4 = new lib.BeaverBody();
	this.instance_4.setTransform(38.5,-6.8,1,1,0,0,0,37,-5.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({regX:36.9,regY:-5.6,scaleY:1.05,skewX:14.7,skewY:8.7,x:42.4,y:-10.8},3).to({regX:37.7,regY:-5.5,scaleY:0.94,skewX:-3.8,skewY:0,x:39.2,y:-6.7},4).to({regX:37,scaleY:0.94,skewX:0,x:38.5},4).to({scaleX:1.02,scaleY:0.93,skewX:0.3},2).wait(3));

	// beavereye
	this.instance_5 = new lib.BeaverEye();
	this.instance_5.setTransform(5.8,-145.5,1,1,25.6,0,0,0.1,-21.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({regX:0,regY:-21.5,rotation:90.1,x:132.6,y:-15.4},5).to({rotation:92.4,x:149.6},4).wait(5));

	// blooddrop1 copy
	this.instance_6 = new lib.BloodDrop1();
	this.instance_6.setTransform(43.5,-141.8,1.274,1.801,0,0,0,0,-7.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:146.5,y:-118.7},5).to({_off:true},1).wait(10));

	// blooddrop1 copy 2
	this.instance_7 = new lib.BloodDrop1();
	this.instance_7.setTransform(43.5,-165.9,1,1.414,0,0,0,0,-7.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({x:117.5,y:-154.8},5).to({_off:true},1).wait(10));

	// blooddrop1
	this.instance_8 = new lib.BloodDrop1();
	this.instance_8.setTransform(53.5,-185.9,1,1.414,0,0,0,0,-7.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regX:0.1,rotation:-28.3,x:136.7,y:-207.8},5).to({_off:true},1).wait(10));

	// greenchunk3
	this.instance_9 = new lib.GreenChunk3();
	this.instance_9.setTransform(18.9,-143.5,1,1,21,0,0,0,-15.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({regY:-15.8,rotation:24,x:151.3,y:-127.2},5).to({regX:0.1,rotation:-12,x:235.4,y:-7.2},3).to({rotation:-12,x:249.4,y:-6.2},3).wait(5));

	// greenchunk2
	this.instance_10 = new lib.GreenChunk2();
	this.instance_10.setTransform(6.8,-186.4,1,1,-38.4,0,0,0,-28.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({regY:-28.5,rotation:24,x:157.6,y:-212.7},5).to({regY:-28.4,rotation:63,x:271.5,y:-27.7},3).to({rotation:73.9,x:282.5},3).wait(5));

	// greenchunk1
	this.instance_11 = new lib.GreenChunk1();
	this.instance_11.setTransform(-35.4,-141.7,1,1,-132.5,0,0,0,-22.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({rotation:24,x:217.8,y:-128.7},5).to({regX:0.1,rotation:99.4,x:342.8,y:-5.7},3).to({x:355.8,y:-2.7},3).wait(5));

	// earchunk
	this.instance_12 = new lib.EarChunk1();
	this.instance_12.setTransform(-44.7,-149.7,1,1,21,0,0,0,-17.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({rotation:24,x:208.3,y:-196.5},5).to({rotation:104,x:372.3,y:-27.5},3).to({x:387.3},3).wait(5));

	// pinkchunk3
	this.instance_13 = new lib.PinkChunk3();
	this.instance_13.setTransform(-30,-196.3,1,1,21,0,0,0,-24);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({regX:0.1,regY:-24,rotation:24,x:103.4,y:-184.6},5).to({rotation:77,x:211.3,y:-27.6},3).to({x:238.3},3).wait(5));

	// pinkchunk2
	this.instance_14 = new lib.PinkChunk();
	this.instance_14.setTransform(17.9,-157.7,1,1,21,0,0,0,-10.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({rotation:24,x:142.5,y:-75.6},5).to({x:180.5,y:-19.6},3).to({x:191.5},3).wait(5));

	// pinkchunk1
	this.instance_15 = new lib.PinkChunk1();
	this.instance_15.setTransform(-22,-168.7,1,1,21,0,0,0,-16.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({_off:false},0).to({rotation:24,x:192.7,y:-171.1},5).to({rotation:59.9,x:309.5,y:-16.1},3).to({x:320.5},3).wait(5));

	// bloodsplat1
	this.instance_16 = new lib.BloodSplat1();
	this.instance_16.setTransform(52.8,-176.5,0.213,0.483,0,0,0,0,-19.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({scaleX:1.19,scaleY:1.16,x:146.7,y:-160.4},2).to({scaleX:1.75,scaleY:1.26,x:257.7,y:-25.3},3).to({scaleX:1.81,scaleY:1.41,y:-23.3},1).to({regY:-19.1,scaleX:1.98,scaleY:1.84,x:257.6,y:-17.2},3).to({regY:-19.2,scaleX:2.1,scaleY:2.14,x:257.7,y:-13.3},2).wait(5));

	// EnemyBeaverFace
	this.instance_17 = new lib.EnemyBeaverFace();
	this.instance_17.setTransform(-27.4,-98.2,1,1,0,0,0,-3.9,-76.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1.21,scaleY:0.82,x:-31,y:-90.2},4).to({regY:-75.9,scaleX:1.06,scaleY:0.96,rotation:-7.5,x:-44.5,y:-102.9},4).to({regY:-76,scaleX:1.21,scaleY:0.82,rotation:0,x:-32,y:-88.2},4).to({regX:-3.7,scaleX:1.04,scaleY:1.05,rotation:4.2,x:-9.8,y:-115.3},4).to({regX:-3.8,scaleX:1.21,scaleY:0.82,rotation:0,x:-32,y:-85.2},4).to({scaleX:1,scaleY:1,x:-27.3,y:-98.1},3).to({_off:true},1).wait(16));

	// EnemyBeaverBody
	this.instance_18 = new lib.EnemyBeaverBody();
	this.instance_18.setTransform(-13.8,-3.6,1,1,0,0,0,-13.9,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.17,scaleY:0.86,x:-16,y:-3},4).to({regY:-3.5,scaleX:1.02,scaleY:1,skewX:-5.2,skewY:-7.5,x:-14.5,y:-8.5},4).to({regY:-3.6,scaleX:1.17,scaleY:0.86,skewX:0,skewY:0,x:-16,y:-3},4).to({scaleX:1.01,scaleY:1.1,skewX:5.5,skewY:7.2,x:-15.7,y:-6.6},4).to({scaleX:1.17,scaleY:0.86,skewX:0,skewY:0,x:-16,y:-3},4).to({scaleX:1,scaleY:1,x:-13.7,y:-3.5},3).to({_off:true},1).wait(16));

	// Shadow
	this.instance_19 = new lib.Shadow();
	this.instance_19.setTransform(-11.3,-6.9,1.09,1,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({scaleX:0.93,x:1.1},3).to({scaleX:1.09,x:-11.2},4).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.4,-219.4,182.5,230);


(lib.MooseTween = function() {
	this.initialize();

	// Moose
	this.instance = new lib.MooseToothShine("synched",0);
	this.instance.setTransform(30.9,24.9,1,1,0,0,0,0,-3.4);

	this.instance_1 = new lib.MooseToothShine("synched",0);
	this.instance_1.setTransform(-7,23.8,1,1,0,0,0,0,-3.4);

	this.instance_2 = new lib.MooseToothShine("synched",0);
	this.instance_2.setTransform(-41,22.5,1,1,0,0,0,0,-3.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AGECCQgvAAg7gdQhAgggbgtIgIAWQgIASgQANQgxAoh5gFQhDgEgugnQgdgZgJgXQgVAigtAYQgrAWgqACQgzACgpgQQgwgSgaglQgFgIgMgmQgMgtgBgWQhMgIAAgHQABgND4AKIEdAKQBLgDDlgWQCigQBsgCIANAAIASAAIAGAAQAIACAKAqQAMAygHApQgTB+idAAIgTgBgAGnhYQiNAEhOAOQACBdBTAtQA+AiA+gGQBngLAhhAQAagvgVhCIiDAEgAiWgbQAGAbALARQAjA8BiAHQBuAGAohBQAPgZAKhFQhQAHhKAEQh3AGg5gHQACAHADAZgAnZgkQAHAgAOATQAsBBB8gKQAngHAcgUQAigYACghQgDgZAAgVQi6gHhvgKQADAJAFAgg");
	this.shape.setTransform(-6.7,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("AguAMQhpgTACgPQAAACCOACQCMACAKgCIABAAQAWgFg/AnQgTAHggAAQgoAAg6gLg");
	this.shape_1.setTransform(-2.7,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AHxPEQhYgKgmh8QgTg/gKiIQhjAYjogTQj0gTh9AVIAFBXQADBMgHAaQgPA9g4AbQg1Aag8gTQh2glg3iLQgphogCiTQgEjXACh5QACi3ANiWQAQjCAehvQAuikBihpQBUhYB3g3QBwg0CBgPQEwgkDfCvQCEBYBhDlQAwBxAQBKQAwDgADEIQACEDgoEJQgSBvgvBHQg4BWhWAAIgTgBgAI5IkQADAMg0ASIhFAUQguAIgMAGQgSAIAEAoQAJBXAHAgQAOBHAcAoQArA7BGgcQA8gYAjg9QAmhCAWkXQAXkigQkMQgZlfiYjnQiQjZkWgzQkKgxjpCAQiKBNhKCJQg/B0gaCxQg4GFAXF4IAICBQAGBOAOA0QAmCRB4AtQCAAdAViBQAHgrgHgzQgFgqgGgGQhJAEhCgNQBXgOBygLQDkgWCWATQCZASDMgqIB4gbQAegHALAAQAGAAABACg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AGDCfQgHghgFhOQgFhJgHgjQiMAckRgNQkUgOgxAJQAJCJgNA5QgZBvhogRQjvglATm5QCwAhEPAMQIbAYHYhoIgUDpQgLBugQA9QgUBJgkAjQgnAmhBABIgDAAQhtAAgYh1g");
	this.shape_3.setTransform(0,67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("ACHBpQhkgYgnhbQgOAvgrAhQg5AuhNgRQhegUgdgbQgjgggXhlILYgfQAgArgIA6QgLBaiKAgQgPACgQAAQgdAAgggIg");
	this.shape_4.setTransform(13.1,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABeQh0gDghhVQgRgqAEg6IFDAQQAJBDgSAlQghBFhvAAIgIgBg");
	this.shape_5.setTransform(-40.2,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("ADwA7QhCgXgXghQg+BIh1ACQh3ABg+hJQgXAagwAPQgvAOgxgDQh5gIgShbQABACA2gJQBUgOBagHQFJgaHUA4QARA7gsAgQgnAchJABIgDAAQhCAAg/gVg");
	this.shape_6.setTransform(-1.1,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AHcOpQg3gagZh2QgSiFgIgqQhjAQkjgRQkQgPhXAYQAAAOAHA5QAFA7gGAoQgTB+iCgNQhugegzh9QgmhbgEiJQgKkSACimQAEl5AwiQQAtjuCtiIQCYh2DZgSQDGgRCvBHQCzBJA9CBQCyC9AfGsQAVEog0H1QgVBkgwBAQgtA9g3AAQgZAAgbgNg");
	this.shape_7.setTransform(-0.3,0);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.1,-96.6,152.3,193.1);


(lib.MooseEyes = function() {
	this.initialize();

	// MooseEyes
	this.instance = new lib.MooseEye("synched",0);
	this.instance.setTransform(0.4,-59.3,1,1,0,0,0,0,-49.5);

	// MooseEyeShadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B84E").s().p("AjEA3QkcCFhDjNQDdhjHFACQClABCFAOQB7AOAAANQAAAngDAPQgGAcgXAQQgwAgg/AJQhdANg/g7QgPAgg7AZQg4AYhKAJQglAEgeAAQh6AAg0g8g");
	this.shape.setTransform(-0.4,-16.4);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.4,-108.9,127.6,104);


(lib.MooseDeathEyes = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MooseEye("synched",0);
	this.instance.setTransform(0.8,-59,1,1,0,0,0,0,-49.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-108.6,127.6,99.1);


(lib.MooseDeathEyeBlood = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DeadBlood();
	this.instance.setTransform(-0.5,-20.8,0.909,1.024,-176,0,0,-1.8,-18.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.2,-48.7,157.9,56.5);


(lib.MooseBottomDeath = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MooseToothShine("synched",0);
	this.instance.setTransform(30.8,-70.8,1,1,0,0,0,0,-3.4);

	this.instance_1 = new lib.MooseToothShine("synched",0);
	this.instance_1.setTransform(-7.1,-72,1,1,0,0,0,0,-3.4);

	this.instance_2 = new lib.MooseToothShine("synched",0);
	this.instance_2.setTransform(-41.1,-73.2,1,1,0,0,0,0,-3.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AGECCQgvAAg7gdQhAgggbgtIgIAWQgIASgQANQgxAoh5gFQhDgEgugnQgdgZgJgXQgVAigtAYQgrAWgqACQgzACgpgQQgwgSgaglQgFgIgMgmQgMgtgBgWQhMgIAAgHQABgND4AKIEdAKQBLgDDlgWQCigQBsgCIANAAIASAAIAGAAQAIACAKAqQAMAygHApQgTB+idAAIgTgBgAGnhYQiNAEhOAOQACBdBTAtQA+AiA+gGQBngLAhhAQAagvgVhCIiDAEgAiWgbQAGAbALARQAjA8BiAHQBuAGAohBQAPgZAKhFQhQAHhKAEQh3AGg5gHQACAHADAZgAnZgkQAHAgAOATQAsBBB8gKQAngHAcgUQAigYACghQgDgZAAgVQi6gHhvgKQADAJAFAgg");
	this.shape.setTransform(-6.8,-74.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("AguAMQhpgTACgPQAAACCOACQCMACAKgCIABAAQAWgFg/AnQgTAHggAAQgoAAg6gLg");
	this.shape_1.setTransform(-2.8,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AHxI1QhYgKgmh8QgTg/gKiIQhjAYjogTQj0gTh9AVIAFBXQADBMgHAaQgPA9g4AbQg1Aag8gTQh2glg3iLQgphogCiTQgEjVACh5QABhpAPjaQFXgDFlgBQLHgCBBAJIADADIACACQAVDeACBrQACEBgoEJQgSBvgvBHQg4BWhWAAIgTgBgAI5CVQADAMg0ASIhFAUQguAIgMAGQgSAIAEAoQAJBXAHAgQAOBHAcAoQArA7BGgcQA8gYAjg9QAmhCAWkXQAXkggQkOIgGhBIqoAAQpXABiKAFQgaEdARETIAICBQAGBOAOA0QAmCRB4AtQCAAdAViBQAHgrgHgzQgFgqgGgGQhJAEhCgNQBXgOBygLQDkgWCWATQCZASDMgqIB4gbQAegHALAAQAGAAABACg");
	this.shape_2.setTransform(0,-56);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AGDCfQgHghgFhOQgFhJgHgjQiMAckRgNQkUgOgxAJQAJCJgNA5QgZBvhogRQjvglATm5QCwAhEPAMQIbAYHYhoIgUDpQgLBugQA9QgUBJgkAjQgnAmhBABIgDAAQhtAAgYh1g");
	this.shape_3.setTransform(-0.1,-28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("ACHBpQhkgYgnhbQgOAvgrAhQg5AuhNgRQhegUgdgbQgjgggXhlILYgfQAgArgIA6QgLBaiKAgQgPACgQAAQgdAAgggIg");
	this.shape_4.setTransform(13,-74.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABeQh0gDghhVQgRgqAEg6IFDAQQAJBDgSAlQghBFhvAAIgIgBg");
	this.shape_5.setTransform(-40.3,-74.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("ADwA7QhCgXgXghQg+BIh1ACQh3ABg+hJQgXAagwAPQgvAOgxgDQh5gIgShbQABACA2gJQBUgOBagHQFJgaHUA4QARA7gsAgQgnAchJABIgDAAQhCAAg/gVg");
	this.shape_6.setTransform(-1.2,-65.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AHcIdQg3gagZh2QgSiGgIgpQhjAQkjgRQkQgQhXAYQAAAOAHA5QAFA7gGApQgTB+iCgOQhugegzh8QgmhbgEiKQgKkQACilQACiKAHhrIWkABQAFApADArQAVEqg0HzQgVBjgwBAQgtA+g3AAQgZAAgbgNg");
	this.shape_7.setTransform(-0.4,-56.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.2,-112.7,152.3,113.3);


(lib.HeroBulletAnim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAcIgEgEIgEgCIgBgBIgJgDIgDgDIgCgEIgCgDIgEgEIAAgDIAAgCIAAgEIABgDIADgEIAFgDIAJgHIAIgGIAFgBIABAAIAXAAIAEAAIAdAAIAHACIAEACIAHADIAEADIADAEIAAADIAAAEIAAADIAAAEIAAACIgCADIgCAEIgCADIgCAEIgFADIgJAEIgEACIgHADIgEACIgGABIghAAIgIgCg");
	this.shape.setTransform(16.4,-8.4);

	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-8.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.8,-16.5,47.7,16.6);


(lib.GunShoot = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GunHand("synched",0);
	this.instance.setTransform(11.6,45.8,0.373,0.373,67.4,0,0,4.2,127.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-22.7,125.5,98.4);


(lib.HeroShoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shoot:0});

	// head
	this.instance = new lib.Head("synched",0);
	this.instance.setTransform(12.3,-151.5,0.373,0.377,-1.3,0,0,-40,151.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},2).to({regX:-39.7,regY:151.5,rotation:2.1,x:9.8,y:-151.3},2).to({regX:-39.9,regY:151.6,rotation:-1.2,x:12.3,y:-151.4},7).wait(1));

	// body
	this.instance_1 = new lib.Body("synched",0);
	this.instance_1.setTransform(24.4,-69.5,0.361,0.391,-1.3,0,0,27.9,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},2).to({regX:28,rotation:-1.8,x:21.5},2).to({regX:27.9,rotation:-1.2,x:24.4},7).wait(1));

	// armfront
	this.instance_2 = new lib.ArmFront("synched",0);
	this.instance_2.setTransform(-9.3,-137.7,0.373,0.373,0.3,0,0,51,-81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:50.9,regY:-81.8,rotation:5.8,x:-9.5,y:-137.7},2).to({regX:50.6,regY:-81.6,rotation:1.4,x:-13.5,y:-137.8},2).to({regX:51,regY:-81.7,rotation:5.8,x:-9.5},7).wait(1));

	// gunhand
	this.instance_3 = new lib.GunHand("synched",0);
	this.instance_3.setTransform(83.5,-132.7,0.373,0.373,9.5,0,0,4,127.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:3.9,regY:127.1,rotation:17.9,x:86.1,y:-132.1},0).to({_off:true},1).wait(10));

	// gunhandshoot
	this.instance_4 = new lib.GunShoot();
	this.instance_4.setTransform(131.2,-148.3,1,1,4.5,0,0,54.2,33.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(2).to({regX:54.1,rotation:3.7,x:121.5},0).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:-59.7,skewY:-61.9,x:78.8,y:-217.5},3).wait(1).to({skewX:-67.4,skewY:-69.6},0).to({skewX:-59.7,skewY:-61.9,x:96.3,y:-176},3).wait(1));

	// armback
	this.instance_5 = new lib.ArmBack("synched",0);
	this.instance_5.setTransform(28.2,-142.1,0.373,0.373,8,0,0,-81.6,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:-33.3,scaleX:0.42,rotation:6,x:26.4,y:-143.5},0).to({_off:true},1).wait(6).to({regY:-33.2,rotation:-42,_off:false},0).to({regY:-33.3,rotation:6},3).wait(1));

	// armbackshoot
	this.armshoot = new lib.ArmShoot();
	this.armshoot.setTransform(64.1,-140.9,0.377,0.455,0,0,0,11,-51.3);
	this.armshoot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.armshoot).wait(2).to({_off:false},0).wait(2).to({x:54.4},0).to({regY:-51.3,scaleX:0.35,rotation:-43.5,x:47.6,y:-160.1},3).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-271.6,181.2,211.9);


(lib.HeroBullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.ShotSpark2();
	this.instance.setTransform(-1.6,0.2,0.667,0.667,0,0,0,0,-7.9);

	this.instance_1 = new lib.ShotSparks();
	this.instance_1.setTransform(-1,15.4,0.603,0.513,0,101.5,95.2,0,-2.7);

	this.instance_2 = new lib.ShotSparks();
	this.instance_2.setTransform(-9.8,10.4,0.307,0.539,0,147.9,141.6,0,-2.7);

	this.instance_3 = new lib.ShotSparks();
	this.instance_3.setTransform(-9.8,-2.2,0.307,0.541,0,-155,-146.8,-0.1,-2.5);

	this.instance_4 = new lib.ShotSparks();
	this.instance_4.setTransform(-16.1,-17.2,0.701,1,0,-147.3,-142.8,0.1,-2.6);

	this.instance_5 = new lib.ShotSparks();
	this.instance_5.setTransform(-1.1,-18.6,1,1,-89.9,0,0,0,-2.6);

	this.instance_6 = new lib.ShotSpark2();
	this.instance_6.setTransform(-5.5,4.3,0.246,0.072,0,0,0,0,-7.5);

	this.instance_7 = new lib.ShotSpark2();
	this.instance_7.setTransform(-3.8,2.8,0.246,0.072,0,0,0,0,-7.5);

	this.instance_8 = new lib.ShotSpark2();
	this.instance_8.setTransform(-1.2,-2.1,0.246,0.072,0,0,0,0,-7.5);

	this.instance_9 = new lib.ShotSpark2();
	this.instance_9.setTransform(0.2,-4.1,0.327,0.103,51.2,0,0,0.1,-7.9);

	this.instance_10 = new lib.ShotSpark2();
	this.instance_10.setTransform(-5.8,-5.8,0.35,0.103,0,0,0,0,-7.7);

	this.instance_11 = new lib.ShotSpark2();
	this.instance_11.setTransform(-19.7,18.9,0.492,0.12,-156.9,0,0,0,-8);

	this.instance_12 = new lib.ShotSpark2();
	this.instance_12.setTransform(-25.7,13.4,0.492,0.249,154.5,0,0,0.1,-7.8);

	this.instance_13 = new lib.ShotSpark2();
	this.instance_13.setTransform(-23.4,1.7,0.492,0.156,-144.9,0,0,0.1,-7.9);

	this.instance_14 = new lib.ShotSpark2();
	this.instance_14.setTransform(-19.7,-5.9,0.492,0.156,0,0,0,0,-7.9);

	this.instance_15 = new lib.ShotSpark2();
	this.instance_15.setTransform(-25.9,-16.5,0.553,0.175,0,0,0,0,-7.9);

	this.instance_16 = new lib.ShotSpark2();
	this.instance_16.setTransform(-21.8,-20.3,0.778,0.3,0,0,0,0,-7.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTARIgDgCIgCgCIgBgBIAAgCIAAgCIAAgCIAAgDIAAgCIACgBIACgBIABgBIABgBIADAAIAHAAIADABIADABIACABIAAABIABACIAAACIAAACIAAABIgBADIgBACIgCABIgBABIgBABIgDABIgKAAgAAQgCIgCgCIgBgCIAAgCIAAgCIAAgCIABgBIACgCIABAAIACgBIADABIACACIABACIABABIgBACIAAADIgBABIgBACIgBAAIgDABIgDgBg");
	this.shape.setTransform(-10.4,29.7);

	this.instance_17 = new lib.ShotSpark2();
	this.instance_17.setTransform(-27.2,-27.5,0.261,0.078,-99.7,0,0,0,-7.8);

	this.instance_18 = new lib.ShotSpark2();
	this.instance_18.setTransform(-3.2,-35.3,0.353,0.112,-99.7,0,0,0,-8.1);

	this.instance_19 = new lib.ShotSpark2();
	this.instance_19.setTransform(-0.9,-39.5,0.353,0.112,0,0,0,0,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.667,scaleY:0.667,x:-1.6,y:0.2,regY:-7.9,regX:0,rotation:0}}]},7).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{regY:-2.7,scaleX:0.307,scaleY:0.539,rotation:0,skewX:147.9,skewY:141.6,x:-9.8,y:10.4}},{t:this.instance_1,p:{regY:-2.7,scaleX:0.603,scaleY:0.513,skewX:101.5,skewY:95.2,x:-1,y:15.4}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-1.2,y:-0.4,regY:-7.9,regX:0,rotation:0}}]},1).to({state:[{t:this.shape},{t:this.instance_2,p:{regY:-2.6,scaleX:0.481,scaleY:0.481,rotation:-89.9,skewX:0,skewY:0,x:-2.6,y:-26.4}},{t:this.instance_16,p:{regY:-7.9,scaleX:0.778,scaleY:0.3,rotation:0,x:-21.8,y:-20.3}},{t:this.instance_15,p:{regX:0,regY:-7.9,scaleX:0.553,scaleY:0.175,rotation:0,x:-25.9,y:-16.5}},{t:this.instance_14,p:{regX:0,regY:-7.9,scaleX:0.492,scaleY:0.156,rotation:0,x:-19.7,y:-5.9}},{t:this.instance_13,p:{regX:0.1,regY:-7.9,scaleX:0.492,scaleY:0.156,rotation:-144.9,x:-23.4}},{t:this.instance_12,p:{regX:0.1,regY:-7.8,scaleX:0.492,scaleY:0.249,rotation:154.5,x:-25.7,y:13.4}},{t:this.instance_11,p:{regX:0,regY:-8,scaleX:0.492,scaleY:0.12,rotation:-156.9,x:-19.7,y:18.9}},{t:this.instance_10,p:{regX:0,regY:-7.7,scaleX:0.35,scaleY:0.103,rotation:0,x:-5.8,y:-5.8}},{t:this.instance_9,p:{regX:0.1,regY:-7.9,scaleX:0.327,scaleY:0.103,rotation:51.2,x:0.2,y:-4.1}},{t:this.instance_8,p:{regX:0,regY:-7.5,scaleX:0.246,rotation:0,x:-1.2,y:-2.1}},{t:this.instance_7,p:{regX:0,regY:-7.5,scaleX:0.246,scaleY:0.072,rotation:0,x:-3.8,y:2.8}},{t:this.instance_6,p:{regX:0,regY:-7.5,scaleX:0.246,scaleY:0.072,rotation:0,x:-5.5,y:4.3}},{t:this.instance,p:{scaleX:0.246,scaleY:0.072,x:-1.5,y:6,regY:-7.5,regX:0,rotation:0}},{t:this.instance_1,p:{regY:-2.6,scaleX:0.585,scaleY:0.481,skewX:-89.9,skewY:90,x:-1.6,y:29.1}}]},1).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16,p:{regY:-7.8,scaleX:0.261,scaleY:0.078,rotation:-99.7,x:-31.2,y:-26.4}},{t:this.instance_15,p:{regX:0.1,regY:-8,scaleX:0.261,scaleY:0.078,rotation:-31.2,x:-30.2,y:-16.3}},{t:this.instance_14,p:{regX:0.1,regY:-8,scaleX:0.261,scaleY:0.078,rotation:-31.2,x:-37.2,y:-13.8}},{t:this.instance_13,p:{regX:0.2,regY:-8.2,scaleX:0.331,scaleY:0.078,rotation:-7.4,x:-32.2}},{t:this.instance_12,p:{regX:0.4,regY:-8.1,scaleX:0.331,scaleY:0.078,rotation:-33.1,x:-32,y:4}},{t:this.instance_11,p:{regX:0.2,regY:-8.9,scaleX:0.331,scaleY:0.1,rotation:-5.2,x:-31.4,y:14.4}},{t:this.instance_10,p:{regX:0.1,regY:-8.3,scaleX:0.331,scaleY:0.072,rotation:-14.1,x:-31.9,y:18}},{t:this.instance_9,p:{regX:0.2,regY:-8.9,scaleX:0.331,scaleY:0.1,rotation:-5.2,x:-25.9,y:22.8}},{t:this.instance_8,p:{regX:0.3,regY:-8.3,scaleX:0.331,rotation:-44.2,x:-16.5,y:34.5}},{t:this.instance_7,p:{regX:0.1,regY:-9.8,scaleX:0.331,scaleY:0.071,rotation:40.7,x:-18.6,y:39.6}},{t:this.instance_6,p:{regX:0.2,regY:-8.8,scaleX:0.258,scaleY:0.078,rotation:-5.2,x:-7,y:42}},{t:this.instance,p:{scaleX:0.258,scaleY:0.092,x:-4.2,y:41.9,regY:-8.6,regX:0.1,rotation:-85.9}}]},1).wait(1));

	// bulletanim
	this.instance_20 = new lib.HeroBulletAnim();
	this.instance_20.setTransform(-2.1,0.7,1.277,0.608,0,0,0,21.5,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:21.6,scaleX:0.87,scaleY:1.06,x:-1.9},2).to({scaleX:0.64,scaleY:1.87,x:-1.4,y:0.8},2).to({regX:21.5,scaleX:1.16,scaleY:0.61,x:-2,y:0.7},2).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-4.6,60.9,10.1);


(lib.EnemyMoose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"idle":0,"death":16});

	// timeline functions:
	this.frame_15 = function() {
		this.gotoAndPlay("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(24));

	// MooseDeathEyes
	this.instance = new lib.MooseDeathEyes();
	this.instance.setTransform(-8.1,-156.8,1,1,0,0,0,0,-54.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({regX:0.1,regY:-54.5,rotation:6.2,x:-4,y:-170.3},4).to({regX:0,rotation:5,x:-0.6,y:-174.3},2).to({regX:0.1,regY:-54.4,rotation:1.5,x:12.3,y:-26.7},5).to({regX:0,scaleX:1.25,scaleY:0.58,rotation:1.7,x:11.6,y:-11.6},2).to({regX:0.1,scaleX:1.06,scaleY:0.89,rotation:1.5,x:12.2,y:-24.2},3).wait(8));

	// MooseEyes
	this.instance_1 = new lib.MooseEyes();
	this.instance_1.setTransform(-8.1,-156.8,1,1,0,0,0,0,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:0.93,y:-147.2},2).to({scaleX:0.91,scaleY:1.13,y:-205.7},3).to({scaleY:1.09,y:-212.2},2).to({scaleX:1.08,scaleY:0.93,y:-147.2},3).to({regY:-54.5,scaleX:1.12,scaleY:0.88,y:-140.6},2).to({regY:-54.4,scaleX:1,scaleY:1,y:-156.7},3).to({_off:true},2).wait(23));

	// MooseDeathTop
	this.instance_2 = new lib.MooseDeathTop();
	this.instance_2.setTransform(-4.6,-157,1,1,0,0,0,1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({rotation:-3,x:4.3,y:-212.9},5).to({rotation:-0.1,x:11.3,y:-119.4},6).to({scaleX:1.1,scaleY:0.83,rotation:-0.1,y:-118.4},3).to({scaleX:1.04,scaleY:0.89,y:-119.4},2).wait(8));

	// mooseDeathBlood
	this.instance_3 = new lib.MooseBlood();
	this.instance_3.setTransform(8.8,-124.7,0.951,0.284,0,0,0,0.6,-26.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regX:0.5,scaleX:0.97,scaleY:0.64},3).to({scaleX:0.98,scaleY:1},3).wait(7));

	// mooseBottomDeath
	this.instance_4 = new lib.MooseBottomDeath();
	this.instance_4.setTransform(48.5,-13.1,1,1,0,0,0,52,-1.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({regX:51.9,regY:-1.3,rotation:7.7,y:-13.1},3).to({regX:52,regY:-1.2,rotation:0,y:-13},4).wait(4).to({regY:-1.3,scaleX:1.02,scaleY:0.98,x:48.9},3).to({regY:-1.2,scaleX:1,scaleY:1,x:48.5},2).wait(8));

	// MooseBody
	this.instance_5 = new lib.MooseTween("synched",0);
	this.instance_5.setTransform(-3.6,-18.4,1,1,0,0,0,-0.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.03,scaleY:0.95},2).to({scaleX:0.89,scaleY:1.14,y:-41.8},3).to({regX:-0.4,scaleY:1.07,x:-3.6,y:-58.8},2).to({regX:-0.3,scaleX:1.03,scaleY:0.95,x:-3.5,y:-18.3},3).to({regX:-0.4,regY:90.1,scaleX:1.08,scaleY:0.9,x:-3.7,y:-18.2},2).to({regX:-0.3,regY:90,scaleX:1,scaleY:1,x:-3.5,y:-18.3},3).to({_off:true},2).wait(23));

	// mooseChunk2
	this.instance_6 = new lib.MooseChunk1();
	this.instance_6.setTransform(50.5,-155.9,0.817,0.817,-63.8,0,0,0.1,-18.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({regY:-18.2,scaleX:0.75,scaleY:0.75,rotation:-52.4,x:222.6,y:-106.7},5).to({_off:true},1).wait(18));

	// flash0.ai
	this.instance_7 = new lib.MooseChunk1();
	this.instance_7.setTransform(70.5,-145.8,1,1,0,0,0,0,-18.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({regY:-18.2,rotation:77,x:200.4,y:-69.8},5).to({_off:true},1).wait(18));

	// pinkchunk
	this.instance_8 = new lib.PinkChunk1();
	this.instance_8.setTransform(58,-131.5,1,1,0,0,0,0,-16.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:54.7,x:127.9,y:-118.5},3).to({scaleX:1,scaleY:1,rotation:91,x:177.9,y:-111.5},2).to({_off:true},1).wait(18));

	// blooddrop3
	this.instance_9 = new lib.BloodDrop1();
	this.instance_9.setTransform(63.1,-127.2,1.153,1.153,11.7,0,0,0.1,-7.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({rotation:32.7,x:124.1,y:-86.1},3).to({_off:true},1).wait(20));

	// blooddrop2
	this.instance_10 = new lib.BloodDrop1();
	this.instance_10.setTransform(62.3,-149.2,1.153,1.153,-28.7,0,0,0.1,-7.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,rotation:-21.1,x:119.5,y:-177.6},3).to({_off:true},1).wait(20));

	// blooddrop1
	this.instance_11 = new lib.BloodDrop1();
	this.instance_11.setTransform(58.8,-137.6,1.153,1.153,-4.4,0,0,0,-7.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,rotation:-2,x:147.4,y:-137.6},3).to({_off:true},1).wait(20));

	// MooseAntler
	this.instance_12 = new lib.MooseAntler();
	this.instance_12.setTransform(-99.5,-163.6,1,1,0,0,180,0,-31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:6.7,skewY:186.8,x:-99.9,y:-157},2).to({regX:0.1,skewX:-4,skewY:175.8,x:-93.4,y:-202.5},3).to({skewX:2,skewY:182.1,x:-93.5,y:-211},2).to({regX:0,skewX:6.7,skewY:186.8,x:-99.9,y:-157},3).to({regX:0.1,skewX:5.5,skewY:185.6,x:-105.5,y:-149},2).to({regX:0,skewX:0,skewY:180,x:-99.4,y:-163.5},3).wait(1).to({skewX:-60.4,skewY:119.4,x:-95.1,y:-72},5).to({skewX:-5.4,skewY:174.4,x:-83.3,y:-69.4},5).to({skewX:-7.9,skewY:171.9,x:-85.3},6).wait(8));

	// MooseAntler
	this.instance_13 = new lib.MooseAntler();
	this.instance_13.setTransform(92,-163.6,1,1,0,0,0,0,-31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-6.5,x:89.5,y:-160},2).to({rotation:7.7,x:85,y:-204.5},3).to({regY:-31.3,rotation:-4.1,x:84.5,y:-213},2).to({regY:-31.2,rotation:-6.5,x:89.5,y:-160},3).to({rotation:-4.8,x:97,y:-150},2).to({rotation:0,x:92,y:-163.5},3).wait(1).to({regX:0.1,regY:-31.3,rotation:-30.8,x:98.5,y:-66.5},5).to({rotation:20.7,x:109,y:-61.4},5).to({regX:0,rotation:6.5,x:108.4},6).wait(8));

	// MooseShadow
	this.instance_14 = new lib.Shadow();
	this.instance_14.setTransform(-4,-17.6,1,1,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1.05,scaleY:1.05},2).to({scaleX:0.86,scaleY:0.86},3).wait(2).to({scaleX:1.05,scaleY:1.05},3).wait(2).to({scaleX:1,scaleY:1},3).wait(25));

	// MooseDeathEyeSplat
	this.instance_15 = new lib.MooseDeathEyeBlood();
	this.instance_15.setTransform(9.5,13.5,0.665,0.522,0,0,0,0,-20.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(27).to({_off:false},0).to({regY:-20.8,scaleX:1.23,scaleY:0.72,y:12.4},3).to({scaleX:1.26,scaleY:0.84,y:12.5},4).to({regY:-20.7,scaleX:1.27,scaleY:0.91,y:12.6},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.8,-211.3,254.2,211.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;