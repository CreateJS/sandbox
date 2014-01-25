(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 20,
	color: "#C7F0C1",
	manifest: [
		{src:"sounds/BodySlam.mp3", id:"BodySlam"},
		{src:"sounds/DirtSlide.mp3", id:"DirtSlide"},
		{src:"sounds/EnemyHit.mp3", id:"EnemyHit"},
		{src:"sounds/garywalk_chill.mp3", id:"garywalk_chill"},
		{src:"sounds/HitHard4.mp3", id:"HitHard4"},
		{src:"sounds/jump4.mp3", id:"jump4"},
		{src:"sounds/LaserGunShot.mp3", id:"LaserGunShot"},
		{src:"sounds/PressPlay.mp3", id:"PressPlay"},
		{src:"sounds/TunnelCollision.mp3", id:"TunnelCollision"}
	]
};

// stage content:
(lib.PlanetaryGary_art_CC = function() {
	this.initialize();

	// HeroBullet
	this.instance = new lib.HeroBullet("synched",0);
	this.instance.setTransform(273.5,355.2,1,1,0,0,0,0,-8.3);

	// Hero
	this.instance_1 = new lib.Hero();
	this.instance_1.setTransform(97.2,377.8,1,1,0,0,0,21.2,-125.9);

	// EnemyBeaver
	this.instance_2 = new lib.EnemyBeaver("single",0);
	this.instance_2.setTransform(726.5,380.1,1,1,0,0,0,0,-109.8);

	// EnemyMoose
	this.instance_3 = new lib.EnemyMoose("single",0);
	this.instance_3.setTransform(381.5,394.5,1,1,0,0,0,0,-105.8);

	// Obstacle
	this.instance_4 = new lib.Trap("single",0);
	this.instance_4.setTransform(229.9,501.9,1,1,0,0,0,0,-90.4);

	// bgGroundDeco1
	this.instance_5 = new lib.BGFrontDeco("synched",0);
	this.instance_5.setTransform(368.5,561.1,1.166,1.166,0,0,0,0,-17.4);

	// bgGround
	this.bgGround = new lib.BGFront();
	this.bgGround.setTransform(399.8,514.4,1,1,0,0,0,0,-86.4);

	// bgMidGroundDeco4
	this.instance_6 = new lib.BGMidDeco("synched",0);
	this.instance_6.setTransform(504.4,338.6,1,1,0,0,0,0,-18.4);

	// bgMidGround
	this.instance_7 = new lib.BGMid("synched",0);
	this.instance_7.setTransform(-0.4,351.1,1,1,0,0,0,0,-80.7);

	// bgBuilding1
	this.instance_8 = new lib.BGBuilding("synched",0);
	this.instance_8.setTransform(131.6,214.1,1,1,0,0,0,0,-129.4);

	// bgCloud1
	this.instance_9 = new lib.BGCloud("synched",0);
	this.instance_9.setTransform(151.6,186.1,1,1,0,0,0,0,-38.2);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.bgGround,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(399.5,388.1,813.1,525.8);
p.frameBounds = [rect];


// symbols:



(lib.StartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0C924").s().p("AAAA9IgHAAQgKgBgJgEQgWgHgGgVQgDgLADgLQADgKAHgHQAEgKAIgIQACgOAJgJQAJgJAMAAQARAAAJANQARAFAGAOQAHAMABAOQAAAOgHALQgFAHgEAEQgFANgLAHQgLAJgNAAIgBgBg");
	this.shape.setTransform(86.1,0.1,0.366,0.366);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C924").s().p("AgaAxQgNgHgGgLIgBgCQgHgKAAgOQAAgJAFgKQAGgMAIgGIAGgDQAWgTAOABQAUABAMAMQAHAHAFANIAAACQACAEAAAGQAAAHgCACIAAABIAAABIAAACQAAAZgYAQQgJAGgUACIgDAAQgLAAgLgFg");
	this.shape_1.setTransform(-101.2,-0.1,0.366,0.366);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AisAlQgVgDAAgYQAAgWAVgEQAfgFAuAAIBOABQBegDBOgYQAZgIALAaQAKAagXAJQhIAkhlAGQgVACgXAAQhCAAhDgNg");
	this.shape_2.setTransform(70.9,5.6,0.366,0.366);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0C924").s().p("AhFAUQgKgYAWgLQAbgOAbgFQAggHAYAJQAUAHAAAUQAAASgUAHQgJADgOABIgXABQgYADgSAIQgHACgFAAQgOAAgIgSg");
	this.shape_3.setTransform(67,1.9,0.366,0.366);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AAFAjIhcgKQgfgDAAgcQAAgdAfgCQApgCAzAGQAhAEA8ALQAUAEABAWQAAAYgVADQgTADgXAAQgYAAgbgDg");
	this.shape_4.setTransform(68.1,-3.1,0.366,0.366);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AgBCAIgKhAQgFgpgGgXIgFg1QgEghgNgRQgOgTAVgRQAWgQAPASQAQAWAHAeIAIA6QADAYALAwQAIAugDAeQgDAVgWAFIgHABQgRAAgCgUg");
	this.shape_5.setTransform(64,1.6,0.366,0.366);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AjnCNQgEhdAHgwQAOhnA0gIQAtgGAlAuQASAWAkBCQAJgQAHghIAKgqQAIgnAHgPQAOgeAXgJQAxgRAsBgQAMAaAZBSQAUBEAZAmQAOAWgUAOQgUAOgSgPQglgdgUg8QgShIgKgfQgNgsgPgUIgBADQgKAegUBOQgXBDgrANQgKADgKgEQgJgEgGgJIgthJQglg6ACgCQgYAbgDBAQgCAkABBBQgBAdgdAAQgeAAgBgdg");
	this.shape_6.setTransform(51.9,0.8,0.366,0.366);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0C924").s().p("AAzAjQgWgOgjAAQgqACgTgBQgcgBABgZQAAgaAbgCIBQgIQAyAAAYAeQAQARgPAVQgJANgLAAQgIAAgJgGg");
	this.shape_7.setTransform(31.7,2.4,0.366,0.366);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0C924").s().p("AB2C7Qgrglgch0QgahxgtgkQgmgfgVAhQgOAUgIA0QgJA0gCBtQAAAbgbAAQgbAAgBgbQgCiAANhCQAciJBXAUQBYAUAtB9QANAiAVBFQAVA9AXAgQAPAWgWAPQgLAIgKAAQgKAAgKgIg");
	this.shape_8.setTransform(33.4,1.6,0.366,0.366);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0C924").s().p("ABCBeQgdgOgGgpQgDgYAEgwQhAABgqAKQgbAHgHgaQgHgbAagJQAhgNAtgEQAVgCA4AAQANAAAKAJQAJAJAAANIgCAlQgBAYAAAKQABANAEAPIAKAbQAFATgQALQgJAGgJAAQgHAAgIgDg");
	this.shape_9.setTransform(18,3.5,0.366,0.366);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0C924").s().p("AhRCGQgrgggVgoQgZgvAMgtQAMgtAnglQAlgkAwgOQAwgPAqAOQAvAQAaAxQAMAXgWANQgWANgOgWQgSgcgigGQgegFggANQgiANgVAZQgXAcABAeQABAdAVAZQASAXAeAOQAlASAmgFQAYgEA0gUQAYgJALAaQAKAagWANQg7Ajg5ABIgFAAQg5AAgzglg");
	this.shape_10.setTransform(15,0.4,0.366,0.366);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0C924").s().p("ABJAkQg4gPgYAAQgVAAg2AGQgwAFgbgBQgdgBAAgcQAAgZAdgDIBTgOQAygJAfADQAdAEAyAMQA5AOAVAEQAcAFgGAZQgFAbgZADIgKAAQgdAAgsgMg");
	this.shape_11.setTransform(-17.6,-5.6,0.366,0.366);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0C924").s().p("AAACkQgng3gKhhQgGg5AGhnQACgdAcAAQAaAAACAdIADBLQACAsAEAdQADAfALApIAUBGQAGAZgXAIQgHADgGAAQgOAAgIgOg");
	this.shape_12.setTransform(-16.1,0,0.366,0.366);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0C924").s().p("ACICyQgpgmgYgPQgdgRhFggQhBgdghgXQgVgOAGgWQAGgYAagBQBUgBAtgQIAXgIQAHgFgJgJQgrgugtgJQghgHgZACQgkAFgMAYQgQAgABAzQABBZAaA4QANAHACARIABAPQABAXgWAFQgVAEgNgRQgkgwgMhPQgLhGANhBQAPhMA0gXQAjgQArAAQArgBAjAPQA6AYAlAtQAwA6gwAtQgbAXg1AMQAsATAUALIApAYQAYAPAOAPIAZAZQAPANAQAGQATAHACAWQACAXgXADIgMABQggAAgggZg");
	this.shape_13.setTransform(-32,-0.4,0.366,0.366);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0C924").s().p("AhtAdQgRgWASgOQAhgfBDgDQA0gDA2APQAUAGAAAWQAAAUgUAFQgSAEgbAAIgsgCQgagBgQAAQgbABgNAKQgIAHgHAAQgLAAgKgOg");
	this.shape_14.setTransform(-50.9,0.1,0.366,0.366);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0C924").s().p("ABWCjQgQhJgRgzQgWhBgdgyQgRgfgEgFQgRgSgOAWQg0BUAXB+QAEAagZAIQgaAHgHgaQgThFAHhCQAHhLAmg2QAWgfAggGQAhgGAaAZQAeAaAYAvQAPAcAUA5QAiBZAMBAQAFAegeAIQgHACgGAAQgTAAgFgXg");
	this.shape_15.setTransform(-50.7,0.4,0.366,0.366);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0C924").s().p("AihAoQgXgJAJgWQANgiAzgLQAagGA6AAQBSAABmARQAaAEgGAXQgFAagXACQgdAEgrgCIhJgFQgngDgdgBQg4gCgFAJQgIANgNAAQgHAAgIgDg");
	this.shape_16.setTransform(-67.8,-5.5,0.366,0.366);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0C924").s().p("AARCTQgVAAgEgUQgUhTgIgsQgNhKAKg0QAFgXAbADQAYAEgCAYQgFApAUBRQATBQgGArQgDAUgWAAIgBAAg");
	this.shape_17.setTransform(-68.4,0,0.366,0.366);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0C924").s().p("AiGCIQgUgNAJgYQAKgZAXAJIBAAbQAmAQAagCQAVgBAcgRQAggUgUgRQgWgSg1gVQgzgVgWgPQgugigNgsQgRg2A0gdQAugbA7AMQA6AMAoAnQAUATgTASQgTATgVgRQgagUgqgJQgwgMgTAVQgQASAfAaQAUAQAeAOQAVAKA1AVQAtAUASAcQAXAigUApQgSAlgnASQgiAQgmAAQhBAAhPgzg");
	this.shape_18.setTransform(-83.1,-0.8,0.366,0.366);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5E5E5E").s().p("EgzjAA8QgZAAgRgSQgRgRgBgZQABgYARgRQARgRAZgBMBnGAAAQAZABASARQARASAAAXQAAAZgRARQgSASgZAAg");
	this.shape_19.setTransform(-7.2,-23.3,0.366,0.366);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Egy5AD9QgzAAgkgjQglgjAAgyIANmBQAPAeAeATQAeASAkAAMBlzAAAQAiAAAdgRQAdgQAQgcIAQF7QAAAyglAjQgkAjgzAAg");
	this.shape_20.setTransform(-6.9,9.9,0.366,0.366);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Eg0+ALUQhAAAgtgqQgsgrgBg7IAoyHQAAg8AtgqQAugqA/gBMBoiAAAQBAABAtAqQAtAqAAA8IAzSHQAAA7guArQgtAqg/AAgEg1fgKFQgeAbgBAnIgoSHQAAAnAfAcQAeAcArAAMBp9AAAQArAAAegcQAegcAAgnIgxyHQAAgngfgbQgegcgsAAMhoiAAAQgrAAgeAcg");
	this.shape_21.setTransform(-6.7,-1.9,0.366,0.366);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C4C4C").s().p("Eg0+AK7Qg1AAgmgjQglgiAAgyIAnyHQAAgxAmgjQAmgjA1AAMBoiAAAQA2AAAlAjQAmAjAAAxIAzSHQAAAygmAiQgmAjg1AAg");
	this.shape_22.setTransform(-6.7,-1.9,0.366,0.366);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFCC").s().p("AAAA9IgHAAQgKgBgJgEQgWgHgGgVQgDgLADgLQADgKAHgHQAEgKAIgIQACgOAJgJQAJgJAMAAQARAAAJANQARAFAGAOQAHAMABAOQAAAOgHALQgFAHgEAEQgFANgLAHQgLAJgNAAIgBgBg");
	this.shape_23.setTransform(95.5,0.3,0.402,0.402);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFCC").s().p("AgaAxQgNgHgGgLIgBgCQgHgKAAgOQAAgJAFgKQAGgMAIgGIAGgDQAWgTAOABQAUABAMAMQAHAHAFANIAAACQACAEAAAGQAAAHgCACIAAABIAAABIAAACQAAAZgYAQQgJAGgUACIgDAAQgLAAgLgFg");
	this.shape_24.setTransform(-110.5,0.1,0.402,0.402);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFCC").s().p("AisAlQgVgDAAgYQAAgWAVgEQAfgFAuAAIBOABQBegDBOgYQAZgIALAaQAKAagXAJQhIAkhlAGQgVACgXAAQhCAAhDgNg");
	this.shape_25.setTransform(78.9,6.4,0.402,0.402);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFCC").s().p("AhFAUQgKgYAWgLQAbgOAbgFQAggHAYAJQAUAHAAAUQAAASgUAHQgJADgOABIgXABQgYADgSAIQgHACgFAAQgOAAgIgSg");
	this.shape_26.setTransform(74.6,2.2,0.402,0.402);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFCC").s().p("AAFAjIhcgKQgfgDAAgcQAAgdAfgCQApgCAzAGQAhAEA8ALQAUAEABAWQAAAYgVADQgTADgXAAQgYAAgbgDg");
	this.shape_27.setTransform(75.8,-3.2,0.402,0.402);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFCC").s().p("AgBCAIgKhAQgFgpgGgXIgFg1QgEghgNgRQgOgTAVgRQAWgQAPASQAQAWAHAeIAIA6QADAYALAwQAIAugDAeQgDAVgWAFIgHABQgRAAgCgUg");
	this.shape_28.setTransform(71.3,1.9,0.402,0.402);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFCC").s().p("AjnCNQgEhdAHgwQAOhnA0gIQAtgGAlAuQASAWAkBCQAJgQAHghIAKgqQAIgnAHgPQAOgeAXgJQAxgRAsBgQAMAaAZBSQAUBEAZAmQAOAWgUAOQgUAOgSgPQglgdgUg8QgShIgKgfQgNgsgPgUIgBADQgKAegUBOQgXBDgrANQgKADgKgEQgJgEgGgJIgthJQglg6ACgCQgYAbgDBAQgCAkABBBQgBAdgdAAQgeAAgBgdg");
	this.shape_29.setTransform(58,1.1,0.402,0.402);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFCC").s().p("AAzAjQgWgOgjAAQgqACgTgBQgcgBABgZQAAgaAbgCIBQgIQAyAAAYAeQAQARgPAVQgJANgLAAQgIAAgJgGg");
	this.shape_30.setTransform(35.7,2.8,0.402,0.402);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFCC").s().p("AB2C7Qgrglgch0QgahxgtgkQgmgfgVAhQgOAUgIA0QgJA0gCBtQAAAbgbAAQgbAAgBgbQgCiAANhCQAciJBXAUQBYAUAtB9QANAiAVBFQAVA9AXAgQAPAWgWAPQgLAIgKAAQgKAAgKgIg");
	this.shape_31.setTransform(37.6,1.9,0.402,0.402);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFCC").s().p("ABCBeQgdgOgGgpQgDgYAEgwQhAABgqAKQgbAHgHgaQgHgbAagJQAhgNAtgEQAVgCA4AAQANAAAKAJQAJAJAAANIgCAlQgBAYAAAKQABANAEAPIAKAbQAFATgQALQgJAGgJAAQgHAAgIgDg");
	this.shape_32.setTransform(20.7,4,0.402,0.402);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFCC").s().p("AhRCGQgrgggVgoQgZgvAMgtQAMgtAnglQAlgkAwgOQAwgPAqAOQAvAQAaAxQAMAXgWANQgWANgOgWQgSgcgigGQgegFggANQgiANgVAZQgXAcABAeQABAdAVAZQASAXAeAOQAlASAmgFQAYgEA0gUQAYgJALAaQAKAagWANQg7Ajg5ABIgFAAQg5AAgzglg");
	this.shape_33.setTransform(17.4,0.6,0.402,0.402);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFCC").s().p("ABJAkQg4gPgYAAQgVAAg2AGQgwAFgbgBQgdgBAAgcQAAgZAdgDIBTgOQAygJAfADQAdAEAyAMQA5AOAVAEQAcAFgGAZQgFAbgZADIgKAAQgdAAgsgMg");
	this.shape_34.setTransform(-18.5,-6,0.402,0.402);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFCC").s().p("AAACkQgng3gKhhQgGg5AGhnQACgdAcAAQAaAAACAdIADBLQACAsAEAdQADAfALApIAUBGQAGAZgXAIQgHADgGAAQgOAAgIgOg");
	this.shape_35.setTransform(-16.8,0.1,0.402,0.402);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFCC").s().p("ACICyQgpgmgYgPQgdgRhFggQhBgdghgXQgVgOAGgWQAGgYAagBQBUgBAtgQIAXgIQAHgFgJgJQgrgugtgJQghgHgZACQgkAFgMAYQgQAgABAzQABBZAaA4QANAHACARIABAPQABAXgWAFQgVAEgNgRQgkgwgMhPQgLhGANhBQAPhMA0gXQAjgQArAAQArgBAjAPQA6AYAlAtQAwA6gwAtQgbAXg1AMQAsATAUALIApAYQAYAPAOAPIAZAZQAPANAQAGQATAHACAWQACAXgXADIgMABQggAAgggZg");
	this.shape_36.setTransform(-34.4,-0.3,0.402,0.402);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFCC").s().p("AhtAdQgRgWASgOQAhgfBDgDQA0gDA2APQAUAGAAAWQAAAUgUAFQgSAEgbAAIgsgCQgagBgQAAQgbABgNAKQgIAHgHAAQgLAAgKgOg");
	this.shape_37.setTransform(-55.1,0.3,0.402,0.402);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFCC").s().p("ABWCjQgQhJgRgzQgWhBgdgyQgRgfgEgFQgRgSgOAWQg0BUAXB+QAEAagZAIQgaAHgHgaQgThFAHhCQAHhLAmg2QAWgfAggGQAhgGAaAZQAeAaAYAvQAPAcAUA5QAiBZAMBAQAFAegeAIQgHACgGAAQgTAAgFgXg");
	this.shape_38.setTransform(-55,0.6,0.402,0.402);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFCC").s().p("AihAoQgXgJAJgWQANgiAzgLQAagGA6AAQBSAABmARQAaAEgGAXQgFAagXACQgdAEgrgCIhJgFQgngDgdgBQg4gCgFAJQgIANgNAAQgHAAgIgDg");
	this.shape_39.setTransform(-73.8,-5.9,0.402,0.402);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFCC").s().p("AARCTQgVAAgEgUQgUhTgIgsQgNhKAKg0QAFgXAbADQAYAEgCAYQgFApAUBRQATBQgGArQgDAUgWAAIgBAAg");
	this.shape_40.setTransform(-74.5,0.1,0.402,0.402);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFCC").s().p("AiGCIQgUgNAJgYQAKgZAXAJIBAAbQAmAQAagCQAVgBAcgRQAggUgUgRQgWgSg1gVQgzgVgWgPQgugigNgsQgRg2A0gdQAugbA7AMQA6AMAoAnQAUATgTASQgTATgVgRQgagUgqgJQgwgMgTAVQgQASAfAaQAUAQAeAOQAVAKA1AVQAtAUASAcQAXAigUApQgSAlgnASQgiAQgmAAQhBAAhPgzg");
	this.shape_41.setTransform(-90.6,-0.7,0.402,0.402);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9900").s().p("AAAA9IgHAAQgKgBgJgEQgWgHgGgVQgDgLADgLQADgKAHgHQAEgKAIgIQACgOAJgJQAJgJAMAAQARAAAJANQARAFAGAOQAHAMABAOQAAAOgHALQgFAHgEAEQgFANgLAHQgLAJgNAAIgBgBg");
	this.shape_42.setTransform(81.8,0,0.349,0.349);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("AgaAxQgNgHgGgLIgBgCQgHgKAAgOQAAgJAFgKQAGgMAIgGIAGgDQAWgTAOABQAUABAMAMQAHAHAFANIAAACQACAEAAAGQAAAHgCACIAAABIAAABIAAACQAAAZgYAQQgJAGgUACIgDAAQgLAAgLgFg");
	this.shape_43.setTransform(-96.8,-0.2,0.349,0.349);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9900").s().p("AisAlQgVgDAAgYQAAgWAVgEQAfgFAuAAIBOABQBegDBOgYQAZgIALAaQAKAagXAJQhIAkhlAGQgVACgXAAQhCAAhDgNg");
	this.shape_44.setTransform(67.3,5.3,0.349,0.349);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("AhFAUQgKgYAWgLQAbgOAbgFQAggHAYAJQAUAHAAAUQAAASgUAHQgJADgOABIgXABQgYADgSAIQgHACgFAAQgOAAgIgSg");
	this.shape_45.setTransform(63.6,1.7,0.349,0.349);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9900").s().p("AAFAjIhcgKQgfgDAAgcQAAgdAfgCQApgCAzAGQAhAEA8ALQAUAEABAWQAAAYgVADQgTADgXAAQgYAAgbgDg");
	this.shape_46.setTransform(64.6,-3,0.349,0.349);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9900").s().p("AgBCAIgKhAQgFgpgGgXIgFg1QgEghgNgRQgOgTAVgRQAWgQAPASQAQAWAHAeIAIA6QADAYALAwQAIAugDAeQgDAVgWAFIgHABQgRAAgCgUg");
	this.shape_47.setTransform(60.7,1.4,0.349,0.349);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF9900").s().p("AjnCNQgEhdAHgwQAOhnA0gIQAtgGAlAuQASAWAkBCQAJgQAHghIAKgqQAIgnAHgPQAOgeAXgJQAxgRAsBgQAMAaAZBSQAUBEAZAmQAOAWgUAOQgUAOgSgPQglgdgUg8QgShIgKgfQgNgsgPgUIgBADQgKAegUBOQgXBDgrANQgKADgKgEQgJgEgGgJIgthJQglg6ACgCQgYAbgDBAQgCAkABBBQgBAdgdAAQgeAAgBgdg");
	this.shape_48.setTransform(49.2,0.7,0.349,0.349);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9900").s().p("AAzAjQgWgOgjAAQgqACgTgBQgcgBABgZQAAgaAbgCIBQgIQAyAAAYAeQAQARgPAVQgJANgLAAQgIAAgJgGg");
	this.shape_49.setTransform(30,2.2,0.349,0.349);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9900").s().p("AB2C7Qgrglgch0QgahxgtgkQgmgfgVAhQgOAUgIA0QgJA0gCBtQAAAbgbAAQgbAAgBgbQgCiAANhCQAciJBXAUQBYAUAtB9QANAiAVBFQAVA9AXAgQAPAWgWAPQgLAIgKAAQgKAAgKgIg");
	this.shape_50.setTransform(31.6,1.4,0.349,0.349);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF9900").s().p("ABCBeQgdgOgGgpQgDgYAEgwQhAABgqAKQgbAHgHgaQgHgbAagJQAhgNAtgEQAVgCA4AAQANAAAKAJQAJAJAAANIgCAlQgBAYAAAKQABANAEAPIAKAbQAFATgQALQgJAGgJAAQgHAAgIgDg");
	this.shape_51.setTransform(16.9,3.2,0.349,0.349);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9900").s().p("AhRCGQgrgggVgoQgZgvAMgtQAMgtAnglQAlgkAwgOQAwgPAqAOQAvAQAaAxQAMAXgWANQgWANgOgWQgSgcgigGQgegFggANQgiANgVAZQgXAcABAeQABAdAVAZQASAXAeAOQAlASAmgFQAYgEA0gUQAYgJALAaQAKAagWANQg7Ajg5ABIgFAAQg5AAgzglg");
	this.shape_52.setTransform(14,0.2,0.349,0.349);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9900").s().p("ABJAkQg4gPgYAAQgVAAg2AGQgwAFgbgBQgdgBAAgcQAAgZAdgDIBTgOQAygJAfADQAdAEAyAMQA5AOAVAEQAcAFgGAZQgFAbgZADIgKAAQgdAAgsgMg");
	this.shape_53.setTransform(-17.1,-5.4,0.349,0.349);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF9900").s().p("AAACkQgng3gKhhQgGg5AGhnQACgdAcAAQAaAAACAdIADBLQACAsAEAdQADAfALApIAUBGQAGAZgXAIQgHADgGAAQgOAAgIgOg");
	this.shape_54.setTransform(-15.6,-0.1,0.349,0.349);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9900").s().p("ACICyQgpgmgYgPQgdgRhFggQhBgdghgXQgVgOAGgWQAGgYAagBQBUgBAtgQIAXgIQAHgFgJgJQgrgugtgJQghgHgZACQgkAFgMAYQgQAgABAzQABBZAaA4QANAHACARIABAPQABAXgWAFQgVAEgNgRQgkgwgMhPQgLhGANhBQAPhMA0gXQAjgQArAAQArgBAjAPQA6AYAlAtQAwA6gwAtQgbAXg1AMQAsATAUALIApAYQAYAPAOAPIAZAZQAPANAQAGQATAHACAWQACAXgXADIgMABQggAAgggZg");
	this.shape_55.setTransform(-30.8,-0.5,0.349,0.349);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF9900").s().p("AhtAdQgRgWASgOQAhgfBDgDQA0gDA2APQAUAGAAAWQAAAUgUAFQgSAEgbAAIgsgCQgagBgQAAQgbABgNAKQgIAHgHAAQgLAAgKgOg");
	this.shape_56.setTransform(-48.8,0,0.349,0.349);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF9900").s().p("ABWCjQgQhJgRgzQgWhBgdgyQgRgfgEgFQgRgSgOAWQg0BUAXB+QAEAagZAIQgaAHgHgaQgThFAHhCQAHhLAmg2QAWgfAggGQAhgGAaAZQAeAaAYAvQAPAcAUA5QAiBZAMBAQAFAegeAIQgHACgGAAQgTAAgFgXg");
	this.shape_57.setTransform(-48.7,0.2,0.349,0.349);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF9900").s().p("AihAoQgXgJAJgWQANgiAzgLQAagGA6AAQBSAABmARQAaAEgGAXQgFAagXACQgdAEgrgCIhJgFQgngDgdgBQg4gCgFAJQgIANgNAAQgHAAgIgDg");
	this.shape_58.setTransform(-65,-5.4,0.349,0.349);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9900").s().p("AARCTQgVAAgEgUQgUhTgIgsQgNhKAKg0QAFgXAbADQAYAEgCAYQgFApAUBRQATBQgGArQgDAUgWAAIgBAAg");
	this.shape_59.setTransform(-65.6,-0.1,0.349,0.349);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF9900").s().p("AiGCIQgUgNAJgYQAKgZAXAJIBAAbQAmAQAagCQAVgBAcgRQAggUgUgRQgWgSg1gVQgzgVgWgPQgugigNgsQgRg2A0gdQAugbA7AMQA6AMAoAnQAUATgTASQgTATgVgRQgagUgqgJQgwgMgTAVQgQASAfAaQAUAQAeAOQAVAKA1AVQAtAUASAcQAXAigUApQgSAlgnASQgiAQgmAAQhBAAhPgzg");
	this.shape_60.setTransform(-79.6,-0.9,0.349,0.349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{scaleX:0.366,scaleY:0.366,x:-6.7}},{t:this.shape_21,p:{scaleX:0.366,scaleY:0.366,x:-6.7}},{t:this.shape_20,p:{scaleX:0.366,scaleY:0.366,y:9.9}},{t:this.shape_19,p:{scaleX:0.366,scaleY:0.366,x:-7.2,y:-23.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22,p:{scaleX:0.402,scaleY:0.402,x:-6.6}},{t:this.shape_21,p:{scaleX:0.402,scaleY:0.402,x:-6.6}},{t:this.shape_20,p:{scaleX:0.402,scaleY:0.402,y:11.1}},{t:this.shape_19,p:{scaleX:0.402,scaleY:0.402,x:-7.3,y:-25.4}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{scaleX:0.349,scaleY:0.349,x:-6.7}},{t:this.shape_21,p:{scaleX:0.349,scaleY:0.349,x:-6.7}},{t:this.shape_20,p:{scaleX:0.349,scaleY:0.349,y:9.3}},{t:this.shape_19,p:{scaleX:0.349,scaleY:0.349,x:-7.2,y:-22.3}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_22,p:{scaleX:0.349,scaleY:0.349,x:-6.7}},{t:this.shape_21,p:{scaleX:0.349,scaleY:0.349,x:-6.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.3,-28.4,259.2,53);
p.frameBounds = [rect, new cjs.Rectangle(-149.1,-31.1,285.2,58.3), rect=new cjs.Rectangle(-130.3,-27.2,247.2,50.6), rect];


(lib.logowords = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EEBB").s().p("ACFAuIhegOQhFADgvgBQhbAAgMgdQgKgYAugOQApgMBGAAQBBABA6AMQA8AMASAUIAAAAIABAAQAnAuhEAAIgHAAg");
	this.shape.setTransform(259.6,-130.8,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9EEBB").s().p("AgoAWQgLgUAJgQQAIgQATgIQASgIARAFQATAGAGAVQAKAjgmARQgNAGgJAAQgVAAgOgWg");
	this.shape_1.setTransform(250,-129.3,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EEBB").s().p("AitAhQgUgDAAgYQAAgVAUgEQA6gKA/gEIBvgHQA7gCAtAHIAIACQAXAEAAAbQAAAYgXAFQg/ALg7AAQhJADglAAIgHAAQg8AAgtgIg");
	this.shape_2.setTransform(230.2,-130.6,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9EEBB").s().p("AgeAZQgegcAkgXQAjgXAXAcIACACIABABQAVAZggAVQgQAJgMAAQgQAAgMgMg");
	this.shape_3.setTransform(219.2,-129.5,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9EEBB").s().p("AH2A9QhZgOhZgIQiEgMijAAQiuAOiBADQj5AGgVgyQgRgoBjgEQAzgDBOADQA5gJBTAAICMAAQBWgBDSgHQCyAEBlA1IAHADQAbANgNAbQgMAXgVAAIgIgBg");
	this.shape_4.setTransform(175.4,-131,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9EEBB").s().p("AgoAgQgQgSAQgdQAIgfAgABQAeACAMAcQAPAZgQATQgOAQgbABIgCAAQgaAAgMgOg");
	this.shape_5.setTransform(151.1,-129.7,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9EEBB").s().p("AnhBLQgHgaAWgKQA0gXA2gQQB8gmCbgQQBRgIC3gbQCcgRBlARIAIABQBfASiaBAQg5AGhXAGIiRAMQhWAIi8AiQizAghhAHIgDAAQgVAAgHgYg");
	this.shape_6.setTransform(109.7,-130.9,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9EEBB").s().p("AgaA0QgTgJgDgYQgCgUANgXQANgXATgGQAUgHAUAVQAcAcgdAmQgWAdgUAAQgJAAgJgEg");
	this.shape_7.setTransform(88.1,-125.8,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9EEBB").s().p("An1AvQg2gLBCghQA6gbAcgDQA4gGBSgEICLgHQDXgMBegCQCZgEB7AJIAkADQAUABAIATQAJASgOAOQgoAYgwgIQhEAEheACIiiADQgVABkbAZQhTAHhDAAQhaAAg/gNg");
	this.shape_8.setTransform(44,-129.2,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9EEBB").s().p("AghAZQgNgUAOgcQAIgSAYAAQAZAAAIASIABAEIABABQALAagMARQgLARgXAAQgVgBgMgQg");
	this.shape_9.setTransform(20.7,-127.7,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA/EuQgbgcglAHQgbAFgxAcQhCAmgRAHQgwAWgmgEQhDgHAQhUQAfhhgFgcQgHgjhAgmQhRgvgLgMQhJhRB+gnQBSgZBmACQAxABAdghQAVgYATg2QAZhLAGgNQAWgvAggSQAugYAfAaQAXATATA3QALAfASA/QARAyAVALQAUAKAuAEIBVAGQBpAKAMA6QAKAugrAoQgWAVg7AkQgmAXgGAwQgCAQAFBIQAJCOhWAEIgGAAQhKAAhVhYgABYEDQBPBJAeALQA7AXAAhmQABhoARgoQAUgxBJg3IAFgEQAxgigRgWQgOgRg6gNIhsgSQg7gMgPgOQgKgLgXg6QgchJgLgXQg2hsgmB4QgiBpgfAmQguA6hWADQhLADgeAEQhQAKgMAZQgIARA3AiQAdATAqAXQAxAhAMAnQANAlgTA4QgQAxABATQABAjAsgKQAhgIAtgaQAwggAXgNQAlgUAeAAQAqAAAjAgg");
	this.shape_10.setTransform(190.2,-41.1,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA+EuQgagcglAHQgcAFgwAcQhCAmgRAHQgwAWgmgEQhDgHAQhUQAehhgFgcQgGgjhBgmQhQgugLgNQhJhRB+gnQBSgZBmACQAxABAdghQAVgYASg2QAahLAGgNQAWgvAggSQAugYAeAaQAYATATA3QAKAfATA/QARAyAUALQAUAKAvAEIBUAGQBqAKAMA6QAKAugrAoQgWAVg7AkQgmAXgGAwQgCAOAFBKQAJCOhWAEIgGAAQhKAAhWhYgABYEDQBPBJAeALQA7AXAAhmQABhnARgpQAVgyBNg6QAwgigRgWQgNgRg7gNIhrgSQg8gMgOgOQgKgLgXg6QgchJgLgXQg2hsgmB4QgjBpgeAmQguA6hWADQhMADgdAEQhQAKgMAZQgIARA3AiQAcATAqAXQAyAhAMAnQAMAlgSA4QgQAyABASQABAjAsgKQAhgIAsgaQAxggAXgNQAlgUAeAAQAqAAAjAgg");
	this.shape_11.setTransform(98.7,-41.1,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AC0H5QgEgChdhhQglgngzAJQgmAGhBAmQhgA4gPAIQhCAfgzgDQhPgFgBhYQgBg1AehZQAYhJg/gzQgUgRgqgXQgvgbgQgLQiKhfBbhJQBHg3CQgOQAIgBBQABQA3AAAfgMQAQgGAOgVQAPgYALgGIA4iUQAlhdAsgoQA8g4AvAdQAkAWAhBPQATAtAfBfQAbBLAYAMQAeAQA8AFQAiADBKADQCIAJAgBGQAZA3gwA6QghApg/AnQhNAvgMBGQgEAaABAtIACBUQAABHgXAwQgdA8g+AJIgTACQg0AAg1gtgABRE8QAaATA0A2QBbBfA0gSQA1gSgFiBQgFg+AAgfQABg1AOgmQARgrAwggQA0gcAbgUIACgBIAEgDQBCgvgYgeQgSgYhRgRIiTgaQhSgQgUgVQgbgcgihVQgvh1gGgMQgdg7gcALQghAOgnB1QgYBHgbAzQgqBPgqARQglAOhFAEIhtAGQhrAMgXAIQhFAXBBA2QAYAVA5AiQA4AhAZAWQAlAiACBBQAAAdgNBWQgKBAAMAWQAQAfBAgQQA1gNBFg2QBNg8AngPQAMgEAKAAQAhAAApAeg");
	this.shape_12.setTransform(143.7,-33,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxD0QgcglgLhDIgMhwQgNhiAUh0QAbidBQBpQAuA6AVBpQAKAuAOCCIAAACIAAACQACAbgLAmQgNAqgVAeQgcAngdAAQgaAAgcglgAg/hLQAGA8ASBhQAFA1AUAxQAcBIAehDIAAgCQAUgvgQhoQgXhzgHgnQgBgGgag0Igcg0QgkAqAKBvg");
	this.shape_13.setTransform(111.8,-102.4,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AD9927").s().p("ADSCkQgigZgzgvQg1gxgIgGQgsghgpAIQggAGgqAjQgYAUgwAuQgtAlgkAMQhFAVgmg3QgkgzARhBQAWhagCgeQgDg8g7gpINBAAQgrApAACGIgBBnQgDA5gOAgQgQAogkAAQglAAg5gog");
	this.shape_14.setTransform(143.9,-21.2,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AD9927").s().p("ACMB+QhfhVgVgNQgbgRgfAPQgVALgkAiQgoAogSALQgjAYgfgGQgzgJgHgzQgDgfAPg4QAOg0gTgjQgSgdgygdIAwgLIJtAAQg2AugEBhIgDBOQgDAvgQAiQgLAZgZAAQgdAAgygmg");
	this.shape_15.setTransform(190.5,-33.3,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AD9927").s().p("ACMB+QhfhVgVgNQgagRggAPQgVALgkAiQgoAogSALQgjAYgfgGQgzgJgHgzQgDgfAPg4QAOg0gTgjQgRgdgzgdIAwgLIJtAAQg2AugDBhIgEBOQgDAvgQAiQgLAZgZAAQgdAAgygmg");
	this.shape_16.setTransform(99,-33.3,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0C924").s().p("ACxFlQgZgQgxgrQgwgqgSgLQgcgRgqAcQgKAGhGA4QgxAogdAEQgoAGgag1QgOgeAVhJQAUhEgbghQgWgag5gdQg7gfgVgWQgugwCggfQBSgQBxgMIA1iSQAnhbAvgdQAtgaAoB8IAeBeQAQAvAPAGQAWAJCMAWQB4AegtA4QgIAIg6AsQguAkgHAZQgIAhAABAQgBBHgEAcQgMBKgrAAQgWAAgdgSg");
	this.shape_17.setTransform(190,-41.5,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0C924").s().p("ACxFlQgZgQgxgrQgwgqgSgLQgcgRgqAcQgKAGhGA4QgxAogdAEQgoAGgag1QgOgeAVhJQAUhEgbghQgWgag5gdQg7gfgVgWQgugwCggfQBSgQBxgMIA1iSQAnhbAvgdQAtgaAoB8IAeBeQAQAvAPAGQAWAJCMAWQB4AegtA4QgIAIg6AsQguAkgHAZQgIAhAABAQgBBHgEAcQgMBKgrAAQgWAAgdgSg");
	this.shape_18.setTransform(98.5,-41.5,0.378,0.378);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0C924").s().p("AEJH1QgjgSg7gyIhchNQgyglg9AdQghAQhPBAQhFA4glAJQg5ANgrg/QgUgdADgoQACgXAPgxQAPgwACgYQADgngUgdQgcgrhQgoQhagtgbgcQhEhCDegrQBzgXCdgSQA6ijANgdQAzhzA9gyQAmgeAhApQAaAfAcBQIArCFQAYBCATAIQAOAGBJAMQBYAOAqAKQCmAnguBEQgPAVhQA6QhFAzgJAlQgLAsAABRQgBBdgEAhQgQB3hAAAQgVAAgbgNg");
	this.shape_19.setTransform(143.3,-33.3,0.378,0.378);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ap5PcQhTgpgah9QgIgmgGhFQgHhMgEgZQgYhsgGhEQgKh+A0giQBLgyC9AJQAjACB0AKQBWAIAogCQBDgDAbgGQBIgOghgjQgngqhqgBIieAJQh5AGg2gHQhngMg2g5QhFhJAFi0QABg7ALhaIAOh+QAIh0AChDQAChlgKhRQgOhvA2guQA+g0CVAEQBSACCNARQCbAJA7AeQBYAuAJCBQAGBLgBCgQAGCMApBVQgMgbAHg0QALhHgBgMQgGiDgMhKQgQhuAHg4QAMhgBIglQBkg0C6ADQDFADBTBEQBVBGABC6QABBngWC2QgNCyAKEaQALFCACBqIAAgiIABAQIACBxQgBBzgRBLQgvDRjFASQlLAdjygHQg2gChbAIIiaANQglACghAAQiKAAhSgogArYIZQAIBnAqDDQATBeBuAZQBEAPB7gLQBugKEAgIQDugHCCgQQAPgBBxADQBOADAtgaQA4ggAYhQQAOgxAFhcQANjbgGkgIgLmbQgIj8ABihQAAiUg+g3Qg5gxiYgDIhwgBQhAABgnAMQhoAggBCAQAAALAJBjQAJByAABQQABEEhXg4Qhcg+ACjHQABgiAIh/QAHhdgGgrQgLhSh9gXQg7gKiEACQhxgJhMABQiRAAgKAvQACBQgCBtIgDC9QgBBTgWDGQgOCxAlBcQAfBPCKANQA6AGCVgKQB9gIBjAYQCXAmhaBpQhHBQjfgQQg7gFh1gQQhpgPglgBIgCAAQheAAARDmg");
	this.shape_20.setTransform(241.9,-98,0.378,0.378);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBlIhegFQg5gDgegLQhWgdAohqQgWgpCDgGQBDgEBgAEQBVgEAdAEQBHAKAQAvIABABQAdBVhsAmQg+AWhGAAQgTAAgRgCgAirAhQAMADAkAAQAlABAUADQCuAhA9g1QA5gvhNgNQgqgHhKAEQhwAGh4gEQgQBAAsAKg");
	this.shape_21.setTransform(177.5,-111.2,0.378,0.378);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD9927").s().p("An1FrQhegEgNgEQgwgNgPg6QgZhigSh6QgNhVgOiIIgKhBQgEgpAGgYQAJgmB1AFQA9ACBTALQBcAHB7gLQA1gECigWQErArBrAEQEBAICHhVQAABfAFDJQgDCtgoBzQgfBahPAZQgiAKiFAGQlaAOh4ADQhvADhkAAQiLAAh3gFg");
	this.shape_22.setTransform(242.1,-74.8,0.378,0.378);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0C924").s().p("AoCPXQhlgbgigmQgggkgOhiIgUi8QgNhzgbhEQgthuCZgYQA6gJCdAJQARABBNAKQBHAJAtACQCQAEAmhEQA1hlibgEQgwgBhMAIIhSAJQiLADhPgSQiNgggHhgQgFhCAAhbIADigQAFkgAQlZQAbg3CaAGIDJAYIBoALQBBAIAqAPQBzApAABuQAACnABAaQAEBvAVBRQAaBoAnggQAkgeAChXQABhRgJhkQgGhFgPhuQgSh4CSgkQA/gPCmAAIBigBQA2ACAhAKQBWAbACBwQABBfAFC9IAKHTQAFEHACDJIAACqQgEBpgSBHQgxDCiwATQiiARjfAJIl/ANQhYAGgtACIgYAAQg/AAgtgMg");
	this.shape_23.setTransform(241.6,-97.9,0.378,0.378);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AItPyQiBgPgRgDQhVgSgsgpQgfgdguhRQgqhMgngfQAaBwgVA3QgaBGhsAIQlZAaiPAOQh+ANhFgVQhngfgIhrQgIhbAFiXQAFi+gBg1QgIl6ghl9QgVi3gGhfQgLioAahuQAThKDFADQA2AABkAJQBZAHAXgBQDVgIFwAEIEBADQCfAKBVAyQBxBCASDCQAGBFgFBfQgDA1gIBcQgEA/gBCCQgFBzgWBKQgcBdhWAdQgVAIg8ANQg3AMghAMQA/BuCFDcQBmC1AsCSIABAEQAiCChxAkQgsAOhGAAQgxAAg/gHgACMKEQAyAdAzBgQA0BjAsAcQBHAuByALQBMAIBngIQBrgMgDhNQgCg3hChsQgog/grhTIhMiWQgFgKg7hiQgphEgLgtQgOg4BVgSQAVgFAygGQAqgFANgFQBcggAViQQAHgzAAhIIgDhqQAAgoAHigQAGh6gIhNQgMhxhLgzQg8gniBgOQjkgYl2ALQnLANiRgFQhogEgBCUQgBBRAYCTIATFjIATFhQAFBxgCDdQgCDgAFBtQAFBsBrATQAnAHA8gEQAigBBBgGIBzgEQBpgCBIgHQDogUgCg9QgVhUgFg3QgFhHAkAAQARAAAZAPg");
	this.shape_24.setTransform(177.9,-98.5,0.378,0.378);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD9927").s().p("AJKFdQhLgBhqgWQhSgQgpgoIhVhsQg6hIg+g7QAVB2gLA3QgRBYhcAKQjPAYhMAHQigAOh8AAQhSAAgmgPQg4gWgShAQggh0AJi0QASjOAHhdQEFAmEfAOQD0AMDBgOQBugHBegRQBVgQAUAKQAVAJAsBNQAOAYA8BcQA+BiAkBFQBwDghjAyQhFAkhkAAIgIgBg");
	this.shape_25.setTransform(179,-74.3,0.378,0.378);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0C924").s().p("AJrPlQhigEhCgLQhfgQg8gjQgWgNgXgpIgohRQg1hsgxgDQgFgBAAAqIABAtQgFByhRAiQgeAOg2AGIhmAKIjmAXQiGAJhhgNQh8gQgSiBQgHgsAEhMIAFh4IADiMQAChXgBg1QgGitgMjeIgYmNQgSiFgKhnQgSjHAhgRQAygZBZgHQAzgEBegCQCsgID5gBQApAACZgGQCBgEBQACQD3AGCQBGQBXAqAZBnQAJAoAGCZQAJDrgRDyQgIB2g3A1Qg0Azh3ANQhiALBHCSQAlBOBQB0IBoDDQA5B0AQBaQAOBThRAXQghAKhGAAIgvgBgAhRmkQiKAGgVAdQgjAvAZAqQAYAnAwADICbALQBcAEA8gSQAugNATgbQARgZgJgdQgKgbgdgTQgggVgpgBQhCgCguAAIg7ABg");
	this.shape_26.setTransform(177.8,-98.6,0.378,0.378);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ar9P/QgTgDgChdIAChxIgXpSQgMkaAAgkQgFi3AJiKQADgngIhDQgKhUgBgYQgFh9BRg/QBYhFCIggQA9gOC4gVIEPgjQCggVBtgIQCVgKBaARQCHAZBEBYQA2BHAVBzQALA/AHCLQAGCIgCGjQgBE6ARDIIABAFQAGAzANBfQAJBjgUA/QgfBhh9AfQhNATiJgFQh6AGhJgBQiIgBgsguQgNgNgXiBQgUhygRAMQgbARgDAqQgBARAHBCQAFA2gIAcQgMAogrAPQgmANg9gFQhEgKgggCQhbgHirAMIhvAPQgrAFgfAAQgVAAgQgCgAD2vQQhSAHh2AXQh7Aag1AJQgzAJhUAHQhqAKgeAEQigAVhjA4QhPAtgPBUQgFAiAHCFQASEiABGHQABDlgFHHQAABTBHAJQArAFBugNQA/gCB7ADQB+ADA8gCQBGgCgLhdIgNhOQgGgtAIgVQAmhiA/AjQA5AfAZBTQAIAbALA2QAIArAJASQAYAyBkgJQAtgEBGAFIB4AJQCJAGBRgqIgDACIgFADIAXgNIgLAGIgEACQA7goAHhZQAFgygShyQgTh4gIiWQgFhegDiyQgBg/AQirQAQi4ABhgQAElZiVh2QhkhQi1AAQgnAAgqAEg");
	this.shape_27.setTransform(112.6,-100.1,0.378,0.378);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AD9927").s().p("Aq/ExQhTgMgFkJQgChQAGh7IAHiOQGFBIF5ADQGUADFmhOQABAdAQBhQASBsAFA6QAUDThQAzQhQAyiTASQhDAHisAFQhrADgsg0Qgdgjgih6QgehqgegNQgngUgnB2QANBGgBA3QgCBfgvABIiUADQiOAEhIAAQh8AAhagNg");
	this.shape_28.setTransform(113.5,-74.7,0.378,0.378);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0C924").s().p("AFnPnQh5gBhpgUQgngIgNgpQgIgaABg+QAChFgFgZQgJgwghgRQg9ghgPCMQgKBZAKBZIgDABIqCAJQgtAEgJgDQgMgEAAglIgd4zQgDihC2g9QBAgWBjgNQA3gHBigKQAcgEDCggQCYgaBmgIQE2gYCOByQB1BeAND+QAEBOgGCEQgGCQABApQADB9AED4QAEDdALCaQAHBoAAAkQAABJgPAvQgkBziYAVQhuAQhtAAIgHAAgAhgjkQgHAbgGBCQgHBRAEBDQAJDHBWgPQBBgLANh/QAKhmgWhJQgWhIgpg5QgaghgTAAQgYAAgNAyg");
	this.shape_29.setTransform(112.6,-100.3,0.378,0.378);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AiyO7QjSgVgygKQiXgdhahDQiih5gxkEQggioAOkZQACglgCixQgBidAIhjQAak5CLhcQBqhFCugRQArgFD+gEQCKgBDaADIFmAEQCZABBNBBQBSBEAJCXQATEejUATQhdAIi5gVQjhgZhNgBQingEhuAsQiHA2hGCHQgaAwgOBHQgQBKAEBGQAJCwB5AhQA2APAxgDQBDgEATgpQANgbg+gUIhQgTQhlgZANieQAFg8AWhAQAVg8AZgjQA3hKB7gZQA/gNCSgGQDTgGCMARQDrAdBQBdQA7BGAMCGQACAdADBVQACA9AEAkIABAGIABAFIADAWIAAADIABAGIABAHQAUCNAEA/QAKCSgXBwQgaCBhnAuQgoAShAALIh5ASQiwAZjEAAQioAAi1gSgAjNuZQjIADiPAfQiDAdg8BRQg1BIgQCOQghEbgJCrQgNEBAYDDQAiEVCMCDQBaBVChAhQBNAQDMAOQElAVFOgSQB+gGBHgZQBqgmAXhTIABgIIgBAHIACgGIACgMIgDALQAWh2gIiZQgFhtgYiyQgEgdgBhNQgBhOgFgmQgRiLhegZQhqgdiDgSQh+gShygCQhvgGg5ACQhgADhBAdQghAPglAzQgmAzgWA8Qg5CWBTArQARAKAeAGIAyALQA7APAUArQAWAzguAqQglAjg3ALQiXAehZhhQhRhYgDicQgDiVA/h0QBDh8CDg9QCBg8CtgLQCXgJCiAbIC/AiQB4ANBEgjQBOgpgPiaQgGg/gWg5QgWg5gdgaQhShIjTgEQg8gBhuAFQhrAFgmgBQj2gGhOAAIgTAAg");
	this.shape_30.setTransform(44.4,-97.8,0.378,0.378);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AD9927").s().p("AA9E/QjRgIhygOQi3gXiFg0QiBgzhVigQhOiRAAiWQP2CTLAi/QAfDrgLBnQgWDOiVA8Qh5AwjCAEIgKABQhAAAj3gKg");
	this.shape_31.setTransform(44.6,-74,0.378,0.378);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0C924").s().p("AEEO0QiMgGg3gBQjUgBgqgCQiUgGhngaQkPhEhdjwQg8iZgJjIQgGhzANj2QAPkJAcjKQAJhWAIgtQAOhOAbgtQAfgyCCgYQAegGCZgRQC3gTEIAHQEpAJEmAjQBMguBFBJQA/BBATB1QAVB5guBSQg2Bfh+gGQgogCjqgYQi+gUh2ADQltALhsDpQgvBjgEB2QgGCFA3BTQAvBHBMAYQBPAaBLgmQBDghgFgoQgFgnhHgQQg8gNgmgvQgjgsgJg/QgKg7ASg9QATg/AqgrQAzg0BEgZQA8gVBPgEQBsgECAANQBjAKCGAXQAiAGBrANQBfATAdAmQA4BMARCbQAKBXAFCgQAFBKASCoQAICUgtBXQhOCXkRAaQg/AGhSAAIhSgBg");
	this.shape_32.setTransform(44.7,-98,0.378,0.378);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AikOcQmkhLn9jEQlIh+oxkEQomkAmUjyQjgiIifh5Qg/gvgRimQgJi3gGg3MBqsAAAIgRDTQgOB+gdBSQgQAthjA/QhwBAggAUQmtEYoMD8QnFDaooDTQjKBQhrApQi8BHiMAoQkHBLjXAAQhhAAhZgQg");
	this.shape_33.setTransform(141.7,-44.2,0.378,0.378);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQBqIgDhoQgngGgmgpQghgjgOglQgPgmASAAQAVAAA3A4QA5A6AqggQAOgLAdggQAdgiAUgSIACgCIACgCQA0guhSCbQgiAmgLAQQgQAXAFAoIALBKQACA3gjABIgBAAQgeAAgIhOg");
	this.shape_34.setTransform(254.3,-147.8,0.378,0.378);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhzCFQgXgkgHhhQgJhsAqADQhCgIAugVQAtgVAnAAQAdAAA8gDQA2AAAjAJQBGATigAcIhJAAQguAAgegDQAYAEAKBcQANBsAEAJQAhgNBMgEQBcgGgaAlQgWAehfAGIgbABQhHAAgRgag");
	this.shape_35.setTransform(138.1,-149,0.378,0.378);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AiHCcQgHgMgHggQgbiBABgoQADhuBigCQAfgBAcAYQAYAXANAiQANAjgJAbQgKAdgiAKQARASAdAPIA2AWQA7AYAYAYQAUAUgOALQgPALglgGQgpgHgxgaQgzgdgQgLQgngbgPggIgHgSIAPBQQAKBJgUALQgKAFgJAAQgNAAgJgOgAhmgRQABgOANgDQAIgCAUgCQASgCAJgIQACgCgOgPQgPgRgOgGQgHgEgFAAQgZAAAJBLg");
	this.shape_36.setTransform(224.8,-148.6,0.378,0.378);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AApBnQgJg2gFgMQhNgLgIACQgfAHgHA+QgEAggPgeQgOgdAAgPQAAhHAJgqQAQhLAtgLQA9gQA1BhQAiA/ARBLQgEgVAHANQAHAPgJgBQAkAGgTAdQgSAcgbADIgDAAQgYAAgLgsgAg8g1QgLAdgDAOQAggPAlgBIAEAAQATACgdgkIgjgkQgDAOgLAdg");
	this.shape_37.setTransform(195.6,-146.9,0.378,0.378);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvAuQgBhkAdgTQgQgBgvAOQgqANgNgEQgVgFgGgQQgHgRAdgJQAdgyBrgBQBcgBA3AdIACABQA4AghRAMQhAAJgqgEQAaAWgBBhQgBBmgoAAQgqAAgBhog");
	this.shape_38.setTransform(167.2,-148.4,0.378,0.378);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhLAFQAEgJALgJQALgJADADQgFgFAQgBQAOgBgVAFQAsgLAjADQAfADAIAOQAHAMgXALQgaAOgzAFIgUABQgvAAAJgag");
	this.shape_39.setTransform(138.3,-148.7,0.378,0.378);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ACNCNQhAgWhEhGQhWhYgdgUQgEAXAABSQgDBLgeALQgjAMgEhLQgDgwAHgrQAOhWAjgNQAdgLAwAnQAXASA/BDQA5A4AcARQgCgbgVg2QgVg1AAgeQgBg6AhASQAeARAJAjIABACQAfB3ACAOQAPBggnAAQgHAAgIgDg");
	this.shape_40.setTransform(106.2,-148.2,0.378,0.378);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABrCYQgbgDgUgsIgYhBQgOALgqgFQg2gFgKABQgHAJAFAfQAEAagMAFQgRAGgRgkQgQgkgDgvQgHiCBWgTQBHgQA2BbQAaAsAgBPIgCgEQgSgfAeA7IgKgYQAQAagGgCQAdAMgHAjQgHAggaAAIgHAAgAhjgIQAAgJANgCQAMgCgYAMQA1gaA3AQQgdg7glgCIgCAAQgmAAgDBIg");
	this.shape_41.setTransform(76,-147.8,0.378,0.378);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AALCEQhfgLgTgdQguhLAXiGQACgQAVAAQAVAAACAQQADAOADBXQAIBQAcAFQAGABBlgFQBcAEgkAxQgNAQgzAAQgWAAgcgCg");
	this.shape_42.setTransform(49.3,-147.3,0.378,0.378);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhHCCIgRg9QgWhNAGg2QAJhLBAgZIADgBQA5gWAnAYQAkAWACAtQADAughAlQgmAohDAJQAFAWAYA+QAPAzgxABIAAAAQgVAAgQgsgAgmgQQgCgMATAEQAPADgVAEQA/gLAOgbQAMgYgdgTQgdgTgWARQgdAUAJBAIAAAAg");
	this.shape_43.setTransform(24.8,-148.2,0.378,0.378);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5E5E5E").s().p("Eg54ABHQgFgLABglQAChfAUAAIBvAAQFogCFnAAQXEgCThADQH2ABOKgBQPagCGnABIPbACQATAAAKAUQAJATgCAZQgHA+g3AAIvBgCUgMPgABgjEAAAUgmyAABgNgAACQgIAWgFAAQgCAAgCgFg");
	this.shape_44.setTransform(142.5,-160.9,0.378,0.378);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("EgINAhDQirgxlAh9IiZg6Qo7jWnpjoQnrjomskDQgkgVg+giQinhbhIg7Qh8hlgWh0QgXh+gQihQgJhcgOjBIgEg0Qg/t2ABsSIgBgJQgBj4AJhaQAGg2ANgNQAJgJAOAAIGlgCQMIgBMHAAIO/AAIdPABIPMgBQNZABMbACIAVAAIAHAUQAHAVACApIABALQAND9gLFBQgGDDgYF5IgPD7QgcHmgfFNIgIBgQgKCHgJBBQgOBxgZBUQgPAxhFA1QgpAghaAzIg5AiQi0B3jhCAQnDD+ogD1IgfAOQoqD4kkBtQnyC6mOA6QhKAMhUAAQjfAAkdhUgEgzZghYImRABQgLBOABETIABAKQgBMPA/N1IAEAzQANC7AJBgQAQCfAXB7QASBjBzBaQBCA1CbBVQBFAkAgAUQGpEAHpDoQHnDmI4DVICaA8QE7B6CnAxQEYBSDXAAQBNAABIgKQGLg6Hii0QEghsIxj9IAfgNQIgj0G+j8QDdh9C1h3IA8gkQBMgsAlgbQBAguAKgiQAYhRAOhsQAIhBAKiDIAIhhQAflQAcnhQAFhgAKiaQAYl9AHi9QAKk/gNj7IgDgkQsQgCtLAAIvMAAI9QAAIu+gBQsHAAsIACg");
	this.shape_45.setTransform(142.3,-83.2,0.378,0.378);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C4C4C").s().p("EgINAglQiKgpi9hHQjShShhgkQxnmntPn/Qi8hjhdhAQikhxgYh/QgZiGgQiwQgIhQgQjmQg/t4AAsNQgBhvAChfQAEi8AOAAIGlgBQU7gDSTACQJYABZvgBQWHgBNBADQAFANABATIACAhQAQEngSGSQgKDpgfHPQgcHjgeFPIgVD2QgPCPgeBiQgPA0hiBAQhvBBgjAXQi2B3jdB+QnCD+ofDzQpBEEkeBrQnzC8mTA7QhIALhOAAQjhAAkehUg");
	this.shape_46.setTransform(142.3,-83.2,0.378,0.378);

	this.addChild(this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-166.4,284.7,166.4);
p.frameBounds = [rect];


(lib.logohead = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmBNQgQgDADgSQACgRAQABQAzAEAxgoQAFgEBKhJQAMgMAOALQAOALgJAOQgjA8g3AlQgwAggwAAQgOAAgPgDg");
	this.shape.setTransform(101.8,-12.3,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkeCKQgSgCAAgRQAAgRASgCIClgMQBggKBCgSQBfgZAzgkQAdgXARghQAHgNAVg3QAFgOARgBQARgBADAQQAPBThOBCQg+A1hbAaQiBAmiUAAQgvAAgxgDg");
	this.shape_1.setTransform(94.8,-19.7,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABpBvQhbgGhqghQhkgdgngVQhMgpgLhEQgDgTARgFQASgEAHASQAXA9BVAiQAgAKByAbQBLASBWADQBGADBdgJQASgCACATQACATgQAFQhKAWhRAAQgXAAgWgCg");
	this.shape_2.setTransform(73.1,-29.8,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOB4QgMgBgGgIQgfgiAAgvQgEgsAagsQAagtAngOQAOgFAMAKQALAJABAOIACA9QAAAigFAZQABAHgDAGQgOAxgoAXQgFAEgIAAIgEAAg");
	this.shape_3.setTransform(61.4,-48.4,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGB6IgKgEQgXgCgSgXQgSgXgDgcQgEghAMggQAMghAXgZQAEgFAEgCQAPgTAMgKQAMgKATAJQAVADALAXQANAZAAAiQAJAmgOAiIgSAoQgLAWgQAKQgLAMgNAAQgDAAgFgBg");
	this.shape_4.setTransform(103.7,-41.3,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmuCqQguhCgGhZQgGhYAmhHQAFgJArgQQAigOAXgGQA7gQBSgDQC2gICVAMQDFAPBbBnQArAyASA4QAXBLgrAoQgdAbg6gVQgugRg5gGQgsgDg+ACQisAGgVACQhuAKhOAlQhIAiglAFIgTACQg0AAgdgrgAj6iQIhBAHQgqAHgUANQgGAEgTAfQgSAegFAAQgFAvAIAmQAVB2AwAEQAVABAbgKIAsgUIA2gZQAegMAagGQBEgQBdgFIClgHQBKgEBFAOQBiAXgCADQAag7g6hAQgug0hCgdQg8gahUgIQgpgEhsgBIgsgBQhrAAhMAJg");
	this.shape_5.setTransform(103.3,-55.1,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYDJQgqg1gRgTQgbgfg0gZQg7gZgdgRQgNgIABgQQABgNALgHIAAgLQgDAFgDgUQgEgdACgRQAGgxAGgYQAKgjAUgSQAVgTAjgBQBqgDBjBAQAsAcAaAZQAkAjALAmQAJAigGAtQgFAfgPAwQgQAygNAUQgVAigkAMQgJADgKAAQgfAAghgggAhwioQgWACgQAXQgOAUgEAYQgEAdAAAyQBCAXA1AiQBCAqAiAwQArBAATgmQAQgfAGgZQAMglAFgVQAJgmgGgTQgThChaguQhIgnhBAAIgRABg");
	this.shape_6.setTransform(62.1,-60.9,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CEBCA7").s().p("AkIBfQi1gUBWhLIBGgaQBZgeBagTQEig8DPBNQANBJh3AvQhnAoiFAAQj2AAg/gHg");
	this.shape_7.setTransform(103.6,-48.5,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AbePlQgIgJAAgOQAAgMAGgJQAHgKALgCQAEgIAKgKIARgUQAlgvAfg6QAZgwAfhGIAzh3QAag+AchaQAEgPASgtQAOglAGgXIAKgvQAHgdALgPIAHgLIgHgMQhXiNiviCIhKg2QgugggbgXQgmgggWgRQghgYgfgQQgNAPgWgGQgWgGAAgXQAAhtgViVQgEgXgVg5QgUgzAAgeQgMgKgogMIgxgOQlwiKn7gcQj+gOqAARQkOAIjFATQj8AZjSAyQhLASiCAmQiQArg8APQinAqhWAiQEHAAEBA9QCZAkB6BNQBbA5BqBbQAGgGAOAiQAPAjgIABQh1ASg8ALQhiAThMAYQhlAghFApQgnAZgXATQAgAJA5AGQBDAHAVAFQCQAdBJAWQC/A/BvB9QAKgGAcANQAKACAGAJQAHAJAAALQAACtAkCgIAYBiQALA2ACAvQALADgNAjQgOAjgDgPQgJgygfhaQghhegJgtQgbiBgHh+QgHgEgFgHIgHgJQgEgCgCgGQh3iWjmhAQh7gihMgOQhKgNg3gOQhWgYAKgLQAIgJAOgKQAPgMAGgGQAfgfAhgXQBHgwBfghQBxgoCtgeQhhhRhPgtQgcgQhmgmQhmglgngJQi3griEgKQgygEhOgDIh/gGQgDABgYgCIgbgCQgRgCAbgUQAbgUAOgBQBBgsBfghQA2gUB1ggQA7gQCPgsQCBgnBKgTQDTgzDsgcQDKgXD9gJQCdgGEsgEQD+gDDCAJQDyALDNAhQD0AmDFBBQBOAZA6AYQAeAMAOAKQAXAQAFAWIARBPQAQBMAFAkQAKA9AFA4QAugxBDgcQBFgcA1ALQAQADgBARQAAAQgPAEQiUAmg4BIQAggIAxACQAyACAcAGQArAKAbAXQALAKgJAPQgIAPgPgFQgdgLhJgGQg5gEgTABQAXANAqAhQA6AsB4BWQBlBNBCBCQBUBTAxBZQAHALgDAMQgDAMgJAHIgIAPQgIAPgFAcIgJAsIglB+QgXBJgWAzQgfBHg9CUQg7B+hFBIIAAABQgBALgYAMQgUAKgIAAIgCAAQgOAAgIgKg");
	this.shape_8.setTransform(82.5,-94,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhvE7QhPgtAVh1QAHgkA3iPQAbhNAPgnQAahEAcgrQASggAFgGQARgXAQgEQAUgGAyATQAvASABAHQANAFgCAPQgBAPgQAAQgEAAgGABQgFACgogNQglgNgDAEQgcAigUArQgPAigTA1IggBZIg3CPQgaBnA0AeQAZAOgPAZQgKAQgNAAQgIAAgJgFg");
	this.shape_9.setTransform(139.8,-46.6,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AkJS3QiIgEiBgcQkug+jhiPQhQgzgngcQhDgxgqgtIg7g6QgqgqAAgKQgBg7AIhHQAFgyANhQIATh6QAMhIAMgyQAKgrAShdQAShXALguQAXhQAJgpQAShIgGgzQgLhoAviHQALghBTjCIAvhxQAdhCAdgoQARgZAmgxQAhgsAQgiQARgnARAAQAkAAAoAVQAbANApAeIA1AlQAhAXARAUQACgBA7AEQA+AEAjAEIC9ATICuARQBlAKBHALQCYAWDIAvQB1AaDoA5QASAEAEARQAEAPgKANQAFBqgUChIggEJIgNCJIAhhCQATgnALgbQAwh4Abg7QAthhAyhHQALgQAagBQAPgBAeACQAigBAiAIIBFAOQApAJAbAKQAlAOAUANQAdASAMAbQAVAsgFBWIgGBNQgEAtACAgIAFBqQACA9gHAsQgNBagnBOQgmBKhCBHQgqAuhEBEIhxBwQg9A+glAbQhBAug4gCQgTgBgTgGQgXgGgPgLIgVArQghBFg1BYIhCBtQgnA+gkApQADAHgKARQgJANgKAJQgfAcgrANIhVARQhxAWiDAKIiRAQQhJAHg1AAIgWAAgAs8x+QgKAjghAtQgnAxgQAZQgdAqgdBDQgRAmgeBMQgqBngxCGIgWA/QgMAlgBAcQgBATAEAiQADAmAAAOQABAwgSBGIgfB0QgKAqgQBTQgRBUgKAqQg4DzgNDnQADADADAGIAFAOIAAAEIAZAcQAlArArAjQBtBaB0BCQDVB4D9AzQCWAdB1AAQA0AABNgJICAgNQCKgLBfgTIBAgMQAngIAZgMQAAgHAggmIApg0QAwhLAshMQA1heAdg7IAbhDQATgxAHgCQgOgiAAgfQABgWAYgEQAYgEADAXQADAPARAuQARAsAAAHQABAJAbAAQAXAAALgEQAogOAqgjQAbgWAqgtQA0g2ByhrQBihiAshSQAhg9AKhMQAJg+gFhUQgDgxACg/IAFhwIADg1QgBghgLgSQgKgRhtgbQhpgag4gCQgsA9gqBbQgPAfg3CBQgpBjgdA0QgOAZgkBSQgfBIgEABQgRBOgdAyQgJAQgRgIQgQgIADgRQAGgoAUhQQAThPAGgnQAPhjANigQAHhSATijQASiiAHhSQjig4hygaQjFguiSgVQhKgLhsgLIi5gTQgtgFiXgNQh6gLgCgCIhuhKQhphHgGAAIAAABg");
	this.shape_10.setTransform(98.9,-45.7,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEBCA7").s().p("AiCEdQgLgegGgtQgLhaAchLQAhhXA/h8QA8h6AMAAQAaAAAaAFQArAKANAVQARAagoBfQgqBhgrAaQgmAUg1CKQgbBGgUBBQAAACgEACIgFAAQgHAAgOgEg");
	this.shape_11.setTransform(140.2,-46.3,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#564A3D").s().p("AnBgrQAHgkASgeQAJgPAHgIQAHgUBigSQBkgSB+gCQFJgGBsBlQBrBigOBTQgFAegUAMQgUALgQgRQkHhLjiAwQhNAQhVAhQhUAkghAMQhfh8AWhvg");
	this.shape_12.setTransform(103.4,-55,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3BDA3").s().p("AiDIjQg5gIiLgzQiYg3iShFQmHi6gWh/IBhpaIBkCIQBvCGA1gLQBdBYCGAwQDIBIDAhFQA/gNDCgJQDygMBggJQGkgpAAiaQATgNAKgVQADgFABAAIAFAMQAkBuAHBjQAIB3gkBPQgxBqhuCtQhwCwgnAbQgoAblYAgQjrAWh5AAQg6AAghgFg");
	this.shape_13.setTransform(86.7,-22,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#564A3D").s().p("AB4DEQgZgDgmgfQgvgpgZgWQhqhYhUAMQAKhcAVhDQAUhBAPAGIA0AAQA+ACAyANQCpAoAMB9QgNBKgMBbQgMAugoAAIgJAAg");
	this.shape_14.setTransform(61.5,-60.8,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CEBCA7").s().p("Ag0BOIhRhPIAAiIQAKghBxBMQBkBEAjAoQAWAcgcAvQgaArgjAPIgHABQgdAAhKhGg");
	this.shape_15.setTransform(59.5,-54.5,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A322B").s().p("AXdI6QASmTgNgiIqThuQplhkhlAMIjhiSQhWCghVCkQirFMABAdQg5ijgXi2IgMiTQh7h7jRhfQjYhjjhgeQBLhYDNhGQCdg2B7gOQgyg6hrhCQhyhIiMg2QlPiBkoAgIBEgJQB2gMCHgEQGvgOG3BMQJlBrIhEOQKpFRITI9QhzChhpDhQg0BxgdBRQALjDAKjJg");
	this.shape_16.setTransform(70.5,-82.1,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDDAC0").s().p("AjsSSQp6gknonGIC7uxIgGisICsnhICnj9IDjCSIDLAUQD3AYDPAaQKfBRA/A/QgNEDgiIuIESpIIA0gBQA+ABA0AHQCnAWAABHQAAA5AQDqQALDVgUAoQgNAbhOBeQhRBjhaBiQjzEIgxgWQgugUgmgMIgdgIQgyB6g/B9Qh9D6g+ARQh/AhhPAOQiaAZiZAAQgzAAg0gCg");
	this.shape_17.setTransform(98.8,-45.8,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#564A3D").s().p("ASSIPQAikbgVgNQlrhLokhBInagzQgmgqgxgrQhghWgyAEQhWCGhwEiQhmEKgDA9QgshSgnhuQhNjeAeiSQigiukxhkQihg1iUgRQBihiDNhCQBMgYC1gnQhuiVkehYQkHhSl2gVQFbjAJehWQIFhJLTACQJGABGtBcQCjAjBoAoQBcAlAIAYQAUA8AiFUIBAAjQBPAuBOA3QD4CvCJDEQgxDEgcBUQhBDGhfCdQkMG+oQCxQBDnxAUiug");
	this.shape_18.setTransform(83.5,-85.3,0.378,0.378);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-132.1,165,132.1);
p.frameBounds = [rect];


(lib.logohand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrA7QgLgQAOgMQAQgNAPggQANglALgNQALgNAOALQAOALgIAPQgGAKgNAnQgMAggOAQQgDAMgOACIgFABQgOAAgIgNg");
	this.shape.setTransform(24.4,-62.2,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj0A6QgLgMAMgKQAugkBGgXQA0gTBLgNQCMgaBfApQAYALgOAYQgOAVgYgKQgugShDABQg3ABg6ALQhWAUgRAFQg6AQgqAWQgEACgFAAQgHAAgGgIg");
	this.shape_1.setTransform(25.5,-69.8,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARDsQhugThNgnQhfgxgxhSQgggzgLg2QgOhCAYgvQATgmAYgRQAggWAbAeQAIAJgHAKQgGAKgMgBQgMgBgMAaQgKAUgDAPQgGAyASAtQAkBZA4AlQA0AjBCAVQA/AVBAAGQBRAHA4gPQBNgWAUhAQAVhDgZhKQgahPg8gjQgbgQANgfQANgeAcAQQBWAxAlBrQAnBqgpBbQgnBUhkAcQgvAOg4AAQgnAAgsgHg");
	this.shape_2.setTransform(18.3,-19.5,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABZFaQh1gEhwg6Qhyg6hGhZQhPhkgEh1QgCg5AWg3QAVg0AogrIAtgwQAcgVAeATQAMAGgBAUQgBAIgEALQgEALgLADQgKADgKgFQgGAGgKAPQgnAtgNAeQgSAqgDArQgDAtAOApQAcBRA9A/QA7A9BTAkQBXAnBPAJQBeAJBNggQAogRAVgZQAXgaAHgpQAJghACgUQAFgkgPgLQgKgGgDgMQgDgMAFgLIAGgKQAKgTAVAEQAWACAFAUIAAAAQAWAWADAlQADAbgIAqQgMA9gNAeQgUAtgoAZQhbA6h3AAIgTgBg");
	this.shape_3.setTransform(15.5,-38.5,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACDGZQhqgOhmg4IhSguQgugcgegbQhZhSg1h3Qg1h3AGhqQAIiFBpg3QBdgyCdASQBcAMA0AZQAeAQARAPIALAMIAAABIACADIgBgDIAGAEQANAFgCAPQgCAPgOABQgSACgPgIQgRgMgNgGQgtgVg4gIQhVgMgzACQhRACgwAhQgwAggQA4QgOAxAKA+QAbCaBwB1QBqBvCbA0QBYAeBVgFQB0gHAQhSQALg4gXg4QgRgpgsg2QhehxhRg+QgygmgggNQg2gXggAhQgRATgTgPQgSgOANgWQBRh/C5CYQBEA3BFBRQA5BAAdAwQAjA6AGBEQAGBNgkAzQgpA4hOAVQgoAKguAAQgcAAgegEg");
	this.shape_4.setTransform(19.5,-53.1,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABmIqQgHgGgCgMQgVijAmicQAmiYBciIQBGhoAOgdQArhWgUhAQgTg/g/glQg6gjhGABQiPACh1BjQhqBbg4CRQgzCEgHCRIgDBXIgBApQAAAdAGAGQATATgQAVQgRAUgXgLQglgTgEhHQAAgGAGhlQAEhZANhDQAPhTAdhHQBBihBthjQB6hwCdgPQBIgGBCAUQBJAWAtAxQA2A8AHBMQAHBHgjBMQgZA0hEBnQhBBhgZA6QgjBQgOBzQgHBDgLCGQALAFgBAPQgBAPgNACIgPADIgFAAQgIAAgGgEg");
	this.shape_5.setTransform(48.9,-78.1,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACaCjQhDgIhGggQjUhjhbibQgJgQAOgLQAPgLANAMQBIBJA1ArQBHA4BFAjQArAVAcAKQAqAPAiACQAcACAYgGQAVgFAYgNQAIAiAaAYQgmAfg/AAQgRAAgSgCg");
	this.shape_6.setTransform(43.7,-62.6,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlULIQiFgkABhKQAAgRASgCQARgDAEARQAGAgBBAUQA7ASAlgHQBxgWBuhsQDBjCB1lCQAPgoAUhIQAXhVAKgfQAghiAPg7QAZhpgBg2QgChihIgaQgfgLAIgdQAJgeAfAGQBkASATB2QAOBSgaB0QgJAtgRA5IggBlQgPAxgcBhQgaBWgZA5QhOC3hTB6QhsCfiCBVQhiA/hXAAQgfAAgdgIg");
	this.shape_7.setTransform(39.9,-33.5,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkaIoQhbgigvhTQgJgRAQgJQARgKAMAQQByCZDWhDQBWgbBSg9QBOg6AvhGQA8haAfhsQAfhqgChtQgChbgvhiQgfhBhHhpQAOgmAMgvQBnCaAjBMQA+CFgIB/QgJCBgoBwQgtB7hQBaQhHBRhXAxQhaA0hlAOQggAFgdAAQhBAAg5gVg");
	this.shape_8.setTransform(45.3,-21.7,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3BDA3").s().p("AhCJtIiNgPQBLgbgZh2QgUhchQiPQBsAOADiRQAEiEhLh9QC8ANAAjrQAAhKgThZIgThLQGqFQiFCDQgjAihXAYQgjALgGADQgMAGARAHQBKAggTBcQgTBghnBCQAtAAAqAqQA/A/AACHQAACLhpAXQgZAFgjAAQgXAAgdgCg");
	this.shape_9.setTransform(24.6,-35.6,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDDAC0").s().p("Ai0KJQibiSAUhlQAQhWB5gQQjqimgSixQgJhQAphCQAohCBRgoQhdhpAViLQAHgrARgqIAQghQB8iBDHA3QBlAbBMA1IgKAjIgXBHQEZEUgHCIQgCA0gtAjQgcAVg8AYQA+BSh6DMQBFBgAcBDQAhBPgMA/QgHAjg1ApQg5AshKAWQg5ARg1AAQiBAAhphkg");
	this.shape_10.setTransform(17.7,-39.3,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3BDA3").s().p("AhDDAQhJgphQg6IhDgzQAAgiADg2QAGhwAShqQAZDOEHhNQCFgnB/hQQgkBcgRCCQgUCPAQBwQgdAqg8AAQhOAAiDhJg");
	this.shape_11.setTransform(45.5,-66.9,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ACvLbQhIgEg/gjQg9gigkg2Qi/BZhlgnQg4gVgmhMQihkMAokHQAfjQCfjFQBxiMCmh4QBSg8A6ggIAlAQQAuATAtANQCSArBZggQBPgIgIBwQgHBThJEBQC+DSgRDnQgMCih9DUQhWCRibAAIgTgBg");
	this.shape_12.setTransform(38.8,-33,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDDAC0").s().p("AhkH7Qiqg0hwikQgHi0A0i9QBpl/Eqg4QCoggBRA3QBFAvAABoQAABXgwBqQgrBgg5A3QhXBXgUDhQgKBxAHBfQgrAJgrAAQhEAAhIgXg");
	this.shape_13.setTransform(48.6,-78.2,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AgqOJQhtg1gdhrQhtAPg5g9QgSgTgLgZIgHgUQj4h5AFqcQABjhAejtQAajHAQgcQAUgkBvgZQBUgUBzgJQBQgHELCFQDpBzBsBOQBPA4gKCRQgKCGhPCcQBAAqAYAsQANAYA7CeQBIE6i1DkQh8Cei7BGQg1AUg0AAQg/AAg8geg");
	this.shape_14.setTransform(36.5,-36,0.378,0.378);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-99.2,64.9,99.3);
p.frameBounds = [rect];


(lib.logobody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiOFcQhIgrAJiAQADgrANg+IAShWQAPhNAQgrQAIgVAUgjQAVgmAHgRQAVgxAUgaQAdgmAkgKQATgFAIASQAHASgQAKQghAUgVAtQgYA2gNAaQgpBNgRBqQgDAQgMA3QgMA6gDAnQgKB6BCALQAkAGAigKQAogMAGghQAPhfAGhLIAIhlQAGg7AMgqQAJgjARg1IAbhYQADgJAIgHQAJgIAKABIAPACQAZADAEAWQADAWgUAKQgLAqgaBTQgVBKgFA2QgQC0gKBDQgHArgOAWQgQAbgkARQgoATgtABQgwAAglgWg");
	this.shape.setTransform(25.3,-33.6,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACIDcQiCgKhLgRQjPgqhGhUQgHgEgHgGQg8grAWhHQATg/A7gsQBIg2BogEQBZgEBgAgQBbAdBAAfQBWApA0AyQAxAsAQA8QATBIgvAsQgoAlhHAIQgRACgYAAQgiAAgxgEgAjciPQgcAKgZARQgaASgQAWIABAFQgBASgNAKQgBAbALAVQAJALALAKQAIAIABAKQAkAhBGAYQAoANBIAPQDIApB+gPQBFgHAIggQAIgZgJgbQgIgYgTgVQglgjg3ggQgmgVhDgcQiKg9hkAAQgyAAgnAPg");
	this.shape_1.setTransform(77.1,-49.7,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("ABOC+QlLgyhdhhQgdgegCgdIAEgZQBFi0C5AVQBAAIBWAgQAwATBPAhQA4AVBCA7QBGA+AVA4QAZBCg8AcQgoAThJAAQg8AAhVgNg");
	this.shape_2.setTransform(77.7,-49.7,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC2JdQAAkeg1lpQgWiSgjiYQgUhWgTgoQghhGg5gaQgjgPgfAIQgiAJgQAgQgQAdACApQABAPAJA6QAQBoAsDWQApDKAPBrQAYCtgICMQgBATgUAAQgVAAgBgTQgLimgpjfIhNmBQgVhqgLhHQgHgwAAgZQAAgoANghQAVgzA1gbQA4gdA4ATQBAAWAvA0QApAvAXBDQAYBFATBZQANA8AQBkQBDGRAAFIQAAAhgmAAQglAAAAghg");
	this.shape_3.setTransform(81.9,-24.2,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5596A5").s().p("AA3JiQg3gOgsgTQgtgUgDgLQgEiNgUjCQgnmBhKkJQAHhhAlgxQAhgrAyACQAuABAuAoQAsAoAaA/QA0B/BFHKQBEHKgaAtQgMAVguAAQgpAAhFgRg");
	this.shape_4.setTransform(82,-23.8,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjPEYQhogEgjgEQhNgIg5gaQiAg6g3haQg8hgAshyQATg0AjgiQAqgoAwACQARABADASQADASgRAEQgwAKghA5QggA1ADA0QAEBVBXBFQBTBCB7ASQBGAKCdgDQCbgEB+gYQCVgeB4g9QA3gcAggWQAwghAZgiQAzhMgXheQgKgEgHgIQgGgJAAgKQACgTAFgSQAFgUAVAAQAWAAAFAUIABAHQAOAGAFAPQAVA/gDA5QgDBBgjAwQg8BYiDBBQkAB/llAAIg/gBg");
	this.shape_5.setTransform(46.7,-53,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AMML8QgPgMADgXIAFgdQACgLAKgFQAKgGALADQAWgeARgpQALgcAPgyQAMgoAahKQAchMALglQBBjagWjHQgNhzgdhbQgmh0g/hDQg4g9hYgpQhCgghngcQhwgfh1gEQhrgDh8ATQh6AUhXAWQhxAchZAqQisBRiQC0QhxCPhbDNQgoBdguCBQgHAUgmBKQgdA4gFAqQgDAUgUABQgTAAgBgVQgDhCAdg7QAdg7AahLQAyiRAxhoQByj0CiihQAvguAegaQAsglApgWQBYgyBYgeQCug9DsgeQDWgaDVA+QBiAcA+AcQBVAnA5A0QB1BtAzDaQAuDHgcDGQgMBNgjBtIg7C2QghB2gKAYQgjBXg2AZQgJAEgIAAQgLAAgJgHg");
	this.shape_6.setTransform(40.3,-39.5,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("AhJFWQgqgUgehCQg3h1Bjj+QAehRArhUIAihFIA0AWQA+AaAuAZQgQAVgdCkQgeClgFBmQgDA0gYAuQgYAtgjATQgUAMgUAAQgRAAgQgIg");
	this.shape_7.setTransform(25.2,-33.5,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44757A").s().p("AnRIYQBrgyEHoHQCCkFBuj7IEWB+IgJAyQgCBKAfB7QAtDKguCMQgRA2gkA7IhBBnQhCBljdAmQh3AVibAAQhqAAh6gKg");
	this.shape_8.setTransform(58.4,-26.5,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("Ap6CMQglg9ABhLIAIg9IBlhJQCDhSCTgvQHViYHPD/QAdAxgJBEQgKBPhABEQisC5nfAWQgsACgpAAQmBAAhsixg");
	this.shape_9.setTransform(46,-55.4,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5596A5").s().p("AkgKzQlGg/jVhiQjlhpANhhQAajDC1lUQCvlLBthUQA6gsCFgiQCXgnC8gIQHmgXH1C3QCeGMiZHIQhMDlhsCVQiLBjk+AIIg0ABQkGAAkvg8g");
	this.shape_10.setTransform(39.8,-33.3,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiaC1QgsgJgdgUQgmgYgKgkQgOgtAVgzQATgwAmgkQApgnA/gYQAwgSBHgMQA/gJAKAAQA1gCALAaQAnAEAiAYQAjAYAOAjQAWA1gYA3QgVA0gyAkQhEAxhmARQgsAIgsAAQgxAAgtgKgAgOh1QhCAUgWAKQgvAVgbAiQgXAcgLAaQgPAmARAYQAUAaA7AJQA6AJBAgIQA8gIA4gWQAkgOAagWQAggaAIgeQAQg5gugaQgsgZgyAcQgWANgPgUQgOgUAPgTIAHgHQgjAGglAMg");
	this.shape_11.setTransform(17.4,-57.4,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AhYChQhDgPgmgiQgkghgBgqQgDheCThKQB7g+BuA0QA3AZAeAnQgeBOhGBKQhWBbhbAAQgWAAgVgFg");
	this.shape_12.setTransform(16.9,-57.4,0.378,0.378);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-68.7,92.4,68.7);
p.frameBounds = [rect];


(lib.logoarm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhyCyQhZAAgKhBQgCgRARgJQARgIAIARQAQAoBPgTQA8gOArgcQA2gjAig7QAhg8AChDQABgfAiAAQAhAAgCAfQgFBig1BMQg0BNhYAsQg5AdhFAAIgEAAg");
	this.shape.setTransform(31.9,-20.7,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACEN+QlAhJlzj0QlKjZiwj0QhmiLgwiUQg1imASidQALhiAVhDQAchZAyg7QA5hDBJgfQBRgkBOAUQCRAjBXC0QAfBAAeBgQARA2AdBkQCBGhD5DuQCcCXDQBMQDZBRDRgaQBNgJBcgdQBCgVBhgmQBtgtAZgOQBTgtANg3QAEgTASAFQASAGgDASQgGAmghAkQgYAZgqAdQhJAxh0AsQhvAqg3ARQhdAchQAGQjSAOjMhMQjQhNiKh6QiLh6hmiiQhiiZhAixQgTg0gihxQgghtgWg5Qgnhmgpg6Qg+hXhPgOQhdgRhSBCQhNA9gbBeQgxCqAXCnQAXCmBeCVQCmENFMDfQCzB4CaBMQC9BeCrAnQEOA9C4glQApgIA7gWIBjgjQA9gTAagLQAvgTAhgZQARgNANASQANASgNAPQgfAigtAZQghASg4ATIhpApQg+AXguAIQhVAPhcAAQiNAAicgjg");
	this.shape_1.setTransform(47.5,-35.2,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3BDA3").s().p("AkNCWQCOggCjjIQAzhAAwhIIAlg8IAYAwQAfBDApBbQARCqjIBsQhiA2hnATg");
	this.shape_2.setTransform(23,-30.5,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5596A5").s().p("AliEQQjjhWlHi6QCgglBLhXQBGhRAQiaQA6BdCZBqQDRCQD3AsQDtAsE2iDQCbhCBshLQAlBFghA4QgKAPggAnQghAmgTAdQg3BWjcBnQjpBsjAAPQgYACgYAAQiuAAjohYg");
	this.shape_3.setTransform(60.9,-14.2,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("ADMLNQhOghjAiQQl6k6gllkQgMh8AciJIAxi7QAThHBHgqQBGgpBVAIQBdAJBGBEQBPBPAfCMQA5D6CoErQBUCWBIBlQAUDCiBBhQhAAwhEAJQAAAGgHAAQgKAAgVgJg");
	this.shape_4.setTransform(20.3,-41.9,0.378,0.378);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-70.3,95.4,70.3);
p.frameBounds = [rect];


(lib.BGMidDeco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{midDeco0:0,midDeco1:1,midDeco2:2,midDeco3:3});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC7A7A").s().p("AkRCLQgTgCgJgJQgJgIABgMQgZgSACgeQABgcAYgYQAcgZAlgJQAjgJAnAIQAPgzAqggQAvgiBCABQBIACAyAmQAuAiAOA3QA5gCAqAeQAnAfALAvQAEATgNAOQgOAPgaABQhQADh1AAQiVAAjTgFg");
	this.shape.setTransform(0.4,-14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC7A7A").s().p("AAVGhQgqhdgHimQgBgoAEiRQgdANgjgIQg5gLgpg9QglhQAogzQAUgbAggNQgHgNgCgaQgDgfAJgbQAXhLBcgDQBbACAbBBQARAqgLAuQAkAJAfAeQA1A1gcBRQgVBAhDAOQgzALgcgQIACDAQAKCpAsBOQAMAdggAKQgIACgGAAQgWAAgIgYg");
	this.shape_1.setTransform(-5.5,-46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC7A7A").s().p("AAOKmQgXgzgHk7QgIk6AXhqQgXAfgzADQgwACgxgXQg0gagWgpQgagvAWg1QgngWgNg2QgMg0ARg5QASg8ArgkQAwgoBEAEQARg4AtgcQAngZAxACQAwACAkAZQAnAaAGAnQBygFAcBlQAMArgLAtQgMAvgiAhQAlAxACA0QADA0geAmQgeAng2ALQg8ALhLgcQgPBqACEtQACDzAHB+QABAMgNAEIgGABQgIAAgFgJg");
	this.shape_2.setTransform(-1.5,-70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC7A7A").s().p("ABBHsQgnhtgMipIgHi8QgfAdgrAFQguAGgogaQgugdgOgyQgLgsANg5QgfgUgQg5QgShHAng6QAWgfAwgOQAqgMAkAIQALgkAbgcQAzg4BNAaQA3AWAOBJQAKA3gMAmQAuAQAlAtQA8BIgkBcQgeBMhPAQQg7AMglgTIAGCvQALDCAVBvQACAIgJABIgCAAQgIAAgCgGg");
	this.shape_3.setTransform(-8.5,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-28.9,66.8,28.9);
p.frameBounds = [rect, new cjs.Rectangle(-26.1,-90.1,41.3,88.3), new cjs.Rectangle(-32.3,-138.8,61.6,137.5), new cjs.Rectangle(-35,-98.9,53.1,99.8)];


(lib.BGMid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bgMid0:0,bgMid1:1,bgMid2:2});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64444").s().p("Eg/PAAPIAAgdMB+fAAAIAAAdg");
	this.shape.setTransform(404.8,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB9C9B").s().p("Eg/MAMgIAA0kIFdAAQBRgBB7glQBIgXCYg2QCJguBfgNQCBgRBnAfQBSAYByALQBAAHCJALQCHAPC0gjQBogTDMg0QFthRDygDQE/gEERB4IDeBhQB+A1BhAbQD6BGDag8QBVgXBzgwIDFhTQDyhiCqAAQCSAABpAcQCFAkBVBTQBOBOB1gHQA8gDCbguQCXgsCNgWQClgaCGAHQBMAEBgAXQAiAICHAmQDnBADuASQBeAHCSgGQDHgJApAAICTAAIAAUkg");
	this.shape_1.setTransform(404.5,-80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B64444").s().p("Eg/RAAOIAAgbMB+jAAAIAAAbg");
	this.shape_2.setTransform(405,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB9C9B").s().p("Eg/RAMkIAA0jIB5gEQBEgFAjgMQDOhGBSgPQC+giD8AmQCGAQCgAIQCoAJB9gEQA1gED1gVQDHgRCBgFQGOgNEOBTQB4AoC3AFQCqAEB9gaQBggWHviCQEthPC1gWQDzgdDjAmQD9ArErCHQDBBYENgEQCzgCCNgkQDchFHjArIGRAoQDrAYCIAEQAvABB8AAQBoAAAnADIAAUkg");
	this.shape_3.setTransform(405,-80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B64444").s().p("Eg/RAAPIAAgdMB+jAAAIAAAdg");
	this.shape_4.setTransform(405,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB9C9B").s().p("Eg/RANEIAA0aIESAAQCwgjDSgjQGmhHCsAAQCPAAFuAfQFqAeBuAAQBIgBDxgyQCQgeFehOQK6iVDWAbQDWAbEMCIQBFAiB3A/QBfAwA4ANQBlAXJEhCQL+hXC2gLQFMgVI9BjQEeAyDbA1IEdAAIAAUag");
	this.shape_5.setTransform(405,-83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-160,809.7,160);
p.frameBounds = [rect, new cjs.Rectangle(0,-161,810,161), new cjs.Rectangle(0,-167.3,810,167.4)];


(lib.BGFrontDeco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{frontDeco0:0,frontDeco1:1});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64444").s().p("AgKCXQhGgagUgxQAugqBPgNQAtgHBcAAQBbAAAEABIAAACIhBAIQBaAIAAAuQAAAngwAbQgxAdhJAAQhDAAg3gXgAA5ApQhvAPgcAWIgCACQAaAlBAAXQA5AUAzAAQBVAAApgjQAcgWAAgZQAAgWgigMQgogKgMgEIgBgDIABgBIh9APgAm9AwQhfgWAAgkQAAgqB4gqQBvgnBVgBQB9ABBfArQBLAkAAAYQAAAsiXAcQhzAWhhAAQhQAAhJgQgAmjhPQhlAnAAAeQAAAkB8ARIB9AJQCrAABPgeQAigOAoglQgdglgwgMQgIgChTgIIgBgDQABgCAagBQAdgCAbACQgXgHiDgVQh5AAhvArgAE+hmQgmgMAAgSQAAgRAmgMQAmgMA2ABQA2gBAnAMQAmAMAAARQAAASgmAMQgnAMg2gBQg2ABgmgMgAFOiUIgkATIgCABQAOAFAWALQAXAJAhAAQArAAAqgOQAjgLAKgLQgPgOgYgDQghgGgsAMQAAgCAUgIIAQgEIgmgCQgagBgoATgABqhyIAAgpIBsAAIAAApgACJiNQgRADgIALIgBABIAIACIAPABQAJAAAUgDQAYgDAQgFIgHgFIgrgDIgEAAIgMABg");
	this.shape.setTransform(0,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64444").s().p("AiRCQQgIgIgKgQQASgNAVAAIAnADIABABQgBADgxAEIgBACQgDACgHACQAIAPAdAKQAGAAACgJQADgNAIgIIACgBQAGACAAANQAAAdgaAAQgUAAgSgSgAmrCDQgugMgKgHQAHgVA8gTQA7gTA6AAQASAAAhAHQAqAJAMAMIgBADIg9gOIASAHQAIAFAAAJQAAAUgxARQgrAPgeAAQgaAAgxgMgAmKBQQgOAFg1AZIA1ANQAcAGASAAQAhAAAkgOQAhgNAJgNQgOgNgFgIIgmgBQgxAAglANgAhLA1QhlggAAgbQAAhACmgxQCPgqCJAAQBrAAAqAFQA9AIAEAYQgeAAg6gNQg7gNglAAQi5AAiDAzQhlAnghAwQAVAfBAAWQBLAbBzAAQBxAABNgXQBXgbAjg0QgggXgzgXIhNgiIAAgEIgBgDQABgBAGAAQAuANAsARQBZAjAAAXQAAAzh0AnQhhAghUAAQiDAAhtgjg");
	this.shape_1.setTransform(0,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.1,-34.7,108.3,34.8);
p.frameBounds = [rect, new cjs.Rectangle(-48.4,-32.5,97,32.6)];


(lib.BGFront = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F25555").s().p("Eg+eANSIAA6iMB89AAAIAAaig");
	this.shape.setTransform(0,-85,1.001,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-400.3,-170,800.6,170);
p.frameBounds = [rect];


(lib.BGCloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cloud0:0,cloud1:1,cloud2:2});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDF4D9").s().p("AjnF7QhJgCkTgmIklgoQgugEhXgQQh0gVhZgdQkHhUBQhrQBVhlDLhTQChhCBsgMQCWgRDnguQE8g/BAgLQDNgkDOAfQAvAHCJAeQBzAaBHAGQEeAADZBLQBuAmA1AnQA3A5gUBeQgZB2iIBeQiIBBjOAhQhSAOkRAbQi3ASjPAFQhNAChUAAQhrAAh6gDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDF4D9").s().p("ANGHmQg8gChPgIIiLgSQiHgRieAGQh1AEiuATQiqAShzgDQibgGh8grQglgNi2hbQilhSgigFQiegFhOgNQiJgVhIhOQhThbBVhpQA5hHB5hDQDVh7HNAAQCUAACoANQBWAHBTAIQAyAHAgABQA6ADAngVQF5jiG/BBQCQAVCKAyQAtAQBVAmQDBCZgDCoQgDCIiJCGQhyBuinBKQiGA7hNAAIgXgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDF4D9").s().p("AqGCKQgfABgVgWQgTgUgEgeQgEgdANgXQAOgWAfgFIBqgOQAthFB8geQBLgTB+gFQBFgEBWAGQAqADBvALQDiAUCKAbQFdA8iZB6QisAnlVAMQiFAEiPAAQj5AAkdgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.3,-38.2,282.6,76.5);
p.frameBounds = [rect, new cjs.Rectangle(-149.3,-48.8,298.7,97.6), new cjs.Rectangle(-72.3,-15.2,144.8,30.4)];


(lib.BGBuilding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{building0:0,building1:1,building2:2});

	// building1anim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFE0B8").s().p("AAdTiQghgDgXgFQgUiJgUq5IgUrdQBJALA+gLQAEDLAzKPQAaFLAcFDQAEAtAGANQgjAHgvAAQgaAAgegCgAiVmBQg9gagSgzQBsAdBvgGQBegGB6gjQgbAzhCAfQg9AdhIAEIgUAAQg+AAgwgUgAhjnvQibgBhng5Qh1hBgbh+QDnA+D0AHQD0AHDogwQgYAmghAdIgDADQhMBDiHAqQiGAqiHAAIgJAAgAiiroQjcgYh1hBQAPhGAJgfQAShDARgeQANgWAZgcIAqguQAxAWCuAEQDWAFDfgmQBZBPA4BNQBVB0gqA1Qj6BJjuAAQhRAAhRgIgAAiunQgPAhADAXQAEAgAQAIQANAGAPgOQAPgOADgXQAEgagPgYQgNgVgLAAQgLAAgIAUgAh3unQgPAhADAXQAEAgAQAIQANAGAPgOQAPgOADgXQAEgagPgYQgNgVgLAAQgLAAgIAUgAkPu5QgPAhADAWQAEAhAQAHQAOAHAOgOQAPgOAEgXQAEgbgPgXQgNgVgMAAQgKAAgJAUgAC7u9QgPAiADAWQAEAhAQAHQAOAHAOgOQAPgOAEgYQAEgagPgYQgNgVgMAAQgKAAgJAUgAFMvXQgPAhADAWQAEAhAQAHQAOAHAOgOQAPgOAEgXQAEgbgPgXQgNgVgMAAQgKAAgJAUgAmYvhQgOAhADAWQAEAhAPAHQAOAHAPgOQAOgOAEgXQAEgbgPgXQgNgVgLAAQgLAAgJAUgAkxybQBShFChgDQCbgCBkA8QiHAhhxAFIgrABQhsAAhjgZg");
	this.shape.setTransform(-5.3,-124.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ABD3A5").s().p("ACzT2IgCgDQgGgNgEguQgclDgalLQgzqOgEjLQg+AKhJgKIAULdQAUK5AUCJIAAABQgnACgeAGQgbjcgMq7QgLqFgHgRQgZgJg0gsQg3gwgPggIg0gcQgtgZgkgcQhthWgqiCQg1gSgcghQgkgqAvgkQAcgVBLgMQAqiXBghMQgfgSgBgUQgBgRAVgNQATgMAbgDQAdgDAVAJQByhdDIALQC8AKBZBVQApgDASALQAQAKAMAgQA0AnBCBUQBHBYAKAuQBAAZArA1IAAABIACACQATAcg5AcQgPAHhEAWQgRAuhLBIQhTBQhRAlQgIArg1A4Qg4A7g0AJQAVFIAZFiQAxLCAcDZQg5gLgIgIgAiLlsQA4AYBKgEQBIgDA9gdQBCggAbgyQh6AihfAGQhuAHhsgeQASAzA9AagAlboUQBnA5CbACQCLABCLgrQCHgrBMhCIADgEQAhgdAYgmQjoAxj0gIQj0gHjng9QAbB9B1BBgAmIwjQgZAcgNAVQgRAegSBDQgJAggPBFQB1BCDcAXQE6AiFQhjQAqg0hVh0Qg4hNhZhQQjfAmjWgFQiugDgxgWIgqAugAg0zNQihADhSBEQB2AfCEgGQBxgFCHghQhgg7iTAAIgMABgAA0syQgQgHgEghQgDgWAPgiQARgoAaAqQAPAXgEAbQgDAXgPAOQgKAJgKAAQgEAAgEgCgAhlsyQgQgHgEghQgDgWAPgiQARgoAaAqQAPAXgEAbQgDAXgPAOQgKAJgKAAQgEAAgEgCgAj9tEQgQgIgEggQgDgWAPgiQARgoAbApQAPAYgEAaQgEAXgPAOQgKAKgJAAQgFAAgEgCgADNtHQgQgIgEggQgDgXAPghQARgoAbApQAPAXgEAbQgEAXgPAOQgKAKgJAAQgFAAgEgCgAFetiQgQgIgEggQgDgWAPgiQARgoAbApQAPAYgEAaQgEAXgPAOQgKAKgJAAQgFAAgEgCgAmGtsQgPgIgEggQgDgWAOgiQASgoAaApQAPAYgEAaQgEAXgOAOQgLAKgJAAQgFAAgEgCg");
	this.shape_1.setTransform(-6.3,-126.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFE0B8").s().p("Ag1aJQAJwzgei5QCOASCQgaQgIBcAFJ5QACGGADCZgAAUFYQhugGhXglQhagngTg2QCWAmC2gDQCsgEChgmQgqBQhpAlQhNAbheAAIgpgBgAmEBZQhXgogggsQgjgtAlgpQAKgJAPgJIAkgQQA2BxCXAzQCFAuCqgLQCigJB4g3QB9g3ALhOQAPAAAOAIIAcAQQA6AlgTAwQgSAqhPAqQiuBcj/ADIgNAAQjvAAi8hWgAACAKQihgDhxhUQh+hgAAieQCtBADiABQDcABC4g3QAAChh+BcQhsBNibAAIgOAAgAmQm7QgCisAFirQBhA+EhgJQESgJBwg0IAPCsQANCugJAJQgmAkhnAVQhiATh+ABIgEAAQkdAAiMhRgAA8pQQgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAiWpQQgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAlOp7QgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAD3p/QgQAWAAAfQAAAfAQAWQAQAWAXAAQAWAAARgWQAQgWAAgfQAAgfgQgWQgRgWgWAAQgXAAgQAWgAjUtDQh9gTg3gyIAMj2QB1AeDpgCQDogCCkghQAFAZAHBjQAHBbAAAYQgSAghmAaQhkAaiBAIQguADgsAAQhVAAhJgMgAA8v3QgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAiWv3QgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAlOwhQgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgXAAgeQAAgfgQgWQgQgWgXAAQgXAAgQAWgAD3wlQgQAWAAAfQAAAfAQAWQAQAWAXAAQAWAAARgWQAQgWAAgfQAAgfgQgWQgRgWgWAAQgXAAgQAWgAox0KQgPgIgEgUQgFgVALgXQAcg9BjgbQgFAMgbAvQgUArARAGQCDBAFggGQCYgCBygSQB6gTAggeQgBgggIgWQgHgRgBgHQBAAeAZAtQAfA4hLAiQgrAThxAVQiEAZiKAHQg4ADg2AAQkvAAirhjgAmh1fIAZgyQAPgdAMgTQBzg/I2A7QAWASAHAaQAFAQAKAmQiCAqkBAEIgqAAQjsAAhwgqgAgg4jQijgChhATQAvg5BOggQBLgeBWABQBVABBJAhQBPAjAvBCQiAgfi2gDg");
	this.shape_2.setTransform(-6.9,-165.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABD3A5").s().p("ADdapIAAgPQgDiZgDmGQgEp5AIhcQiRAaiNgSQAeC5gKQzIAAAPIhGAAQgGihgEnNQgGqUgHgSQgjgKhHg0QhghHgFg+IhOgrQg5gfgagWQgrgkgSgoQgXguATguQAPgjAjgdQAkgeAogKIgGhYIgIhhQg3gkgFgbQgGgfA2gZIADijQADhygBgwQgrghgTgVQgagdAEgYQADgXApgaQAdgSAcgLQAHhtABg+QgfgEg6gbQhOglghgrQhiiFFniLQAwhaBvgvQBngtB6AEQB9AEBhAyQBqA3AnBcQEABfgfB3QgMAtg0AmQgtAig1AOQACAbANBFQALA+ABAZQAAAFANAGIAeAOQArAXABAlQABAbgkAeQgcAXgaAKIAGCkQAHCZAIAdQAzAYACAnQADAmgvAYQAABLAFBZQC1AygIBvQgDAngdArQgYAjgdAVQhEAxg1AUQgOBLg7A6QggAgg3AoIABIaQAAH3ACEAgAirE+QBXAlBvAGQB3AHBcghQBqglAphQQihAmisAEQi1ADiWgmQASA2BaAngAnZhSQgQAJgKAJQglApAjAtQAhAsBXAoQDBBYD3gCQD+gDCvhcQBOgqASgsQATgug6glIgbgQQgPgIgOAAQgLBOh+A3Qh3A3ijAJQipALiGguQiXg1g1hvIgkAQgAkKg8QByBUChADQCkAEBwhRQB+hcAAihQi3A3jcgBQjjgBithAQAACeB+BggAmKmqQCOBREfAAQB+gBBigTQBngVAmgkQAJgJgNiuIgOisQhwA0kSAJQkiAJhhg+QgECrABCsgAmBt3QA2AyB+ATQBuASCJgJQCBgIBkgaQBngaARggQAAgYgGhbQgHhjgFgZQilAhjnACQjqACh1gegAo31BQgLAXAEAVQAEAUAQAIQDJB1F+gVQCLgHCEgZQBxgVArgTQBKgigfg4QgYgthBgeQABAHAIARQAHAWABAgQggAeh6ATQhxASiZACQlgAGiDhAQgRgGAVgrQAagvAFgMQhjAbgbA9gAlm2wQgNATgPAdIgZAyQB6AuENgEQEAgECCgqQgJgmgFgQQgIgagWgSQkRgcimAAQi2AAg7AggAga4SQC3ADB/AfQguhChPgjQhKghhVgBQhVgBhLAeQhPAgguA5QBXgRCNAAIAfAAgABDnVQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAiQnVQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAlHoAQgQgWAAgfQAAgfAQgWQAQgWAXAAQAWAAARAWQAQAWAAAfQAAAfgQAWQgRAWgWAAQgXAAgQgWgAD9oEQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgABDt8QgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAiQt8QgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAlHumQgQgWAAgfQAAgfAQgWQAQgWAXAAQAWAAARAWQAQAWAAAfQAAAegQAXQgRAWgWAAQgXAAgQgWgAD9uqQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWg");
	this.shape_3.setTransform(-7.5,-167.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFE0B8").s().p("AlyU9IAIgBQgQh4gCmPQgClbAIibQADhFAEjpQADi8AJhoQAVAJAZACIAvgBQg5FVALETQAfKtABBZQABBeAFAkQAHAzARAYIAAAPgAFaUiQgJiMABl3QAClpAGh5QAIiKgGimQgFiZgQiTQAzAFAsgPQgMA6gBMBQgCLRADA0QAAALAEAHgAj6AAIAGg8QgFCVgBD2QgJi+AJiRgAk3lAQgtgIgggdQgggdgOgrQB0AjCDAPQgNAngkAPQgUAJgYAAQgOAAgRgEgADnmAQCVgVB5gqQglBRhRAWQgVAGgUAAQg6AAg1gugAoFomQgZhGgNhqQBEAjCeAUQCZAUCxgCQC8gBCTgYQCkgbBJgwQACBZgKBFIgCAKQieB9k/ANIg/ACQkgAAj8hpgAovshQgUg8AJhiQAIhUATglQD6gyFrgCQGIgCBYBDQAQAwADBdQACAwgBAxQjGBcl3AGIg0AAQlHAAixhGgAg5t3QgfAUARAgQAKATAUACQASACAQgLQAPgLADgRQADgSgPgQQgNgMgPAAQgOAAgOAKgAClt2QgPAnApALQAmAKAPglQAPgkgogNQgJgDgJAAQgYAAgMAdgAkMuOQgPAGgIAPQgJAPAFAOQAEAOATAFIACAAIAAAAIABAAQAgAQAQggQARgggegSQgKgGgKAAQgHAAgHADgAGVukQgfAeAWAhQAJANAOACQAQACAOgPQAcgegUghQgKgRgOAAQgMAAgQAPgAnZuJQAAAmAlAAQAlAAAAgmQAAgmglAAQglAAAAAmgAk80WQCRgwCtAHQCoAGCTA1QCXA3BRBWQkZg2kTgCQkpgCkFA7QBZhsCgg0g");
	this.shape_4.setTransform(-0.4,-127.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ABD3A5").s().p("Aj8VHQgRgYgHgzQgFgkgBhdQgBhagfqtQgLkTA5lVIgvABQgZgCgVgJQgJBogDC9QgEDogDBFQgICbACFbQACGQAQB4IgIABQggACgLgBQgTgDgCgfIgGitQgFiaAAgzQgCkuAEizQAGkDAFhrQAIjMASidQADgZghgpQgkgsgCgeQgCgYgNgHQgWgGgRgHQhBgbgwgZQhagxALgYQAJgVAogPQAkgOAVACIgBhJQgBgqgYgOQgvgbgGgFQgNgMgGgiQgDgRAigXQAQgKAigQQABgtAJhpQgwAHgOABQgwAEgHgNQgHgOATgTQAEgFAZgTQAMgKAngMQAfgKAKgSQBviIDAg4QCqgyDJAVQC9ASCfBIQCeBHBABfQAdAIAZAPQAlAWgKAUQgKAUgqABQgbABgegFQAMA+AIBIQBYAtgSAlQgGANgUANIgfARQACARABAtQABAygCAZQAmAEAlAWQAjAVgEAOQgKAohHAkIhmAqQABApgYAnQgVAigkAaQgUBAACBSQACBggCE5QgCEZgDB5IgHFkQgCDPARCTQgiAAgLgCQgKgCgFgIQgEgIAAgLQgDg0ACrRQABsAAMg7QgsAPgzgFQAQCTAFCZQAGCmgICKQgGB5gCFpQgBF3AJCMIAAALQgsAAgIgKQgFgIgFgxQgBgLgEjsIgElJQABlTgBjeQgCmigSgIQgYgMgMgJQgagSgWgfQgHgKh5AHQiRAIgSgCQgUAvgZAYQgVAUggAMIgQCAIgKBRIgGA8QgJCRAJC+IABAbQAGB5ASDxQAIB7ABC+IADE7QgUgCgNgUgAmKlPQAgAdAtAHQArAJAggNQAkgPANgoQiDgOh0gjQAOArAgAdgADhlrQBHA+BRgVQBRgWAlhRQh5ApiVAVgAoLoQQEXBzFEgMQE/gNCeh+IACgKQAKhFgChZQhJAwikAbQiTAZi6AAQizACiZgUQiegThEgkQANBqAZBHgABAxWQlrABj6AzQgTAlgIBTQgJBiAUA8QC/BMFtgGQF3gGDGhbQABgygCgvQgDhegQgwQhVhBl1AAIgWABgAlC0BQigA0hZBtQEFg7EpACQETABEZA3QhRhXiXg2QiTg2imgGIgqgBQiXAAh/AqgAgvsZQgUgCgKgTQgRggAfgUQAegVAaAXQAPAQgDASQgDARgPALQgOAKgPAAIgFgBgAC5svQgpgLAPgnQAPgnAnANQAoANgPAlQgMAcgaAAQgHAAgIgCgAkTs0IgBAAIAAAAIgCAAQgTgFgEgOQgFgNAJgQQAIgPAPgGQARgGARAJQAeASgRAgQgLAWgSAAQgJAAgKgGgAGdtBQgOgBgJgOQgWghAfgeQAggeAUAgQAUAhgcAeQgNANgNAAIgEAAgAnft0QAAgmAlAAQAlAAAAAmQAAAmglAAQglAAAAgmg");
	this.shape_5.setTransform(0.2,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-255.4,134.4,257.8);
p.frameBounds = [rect, new cjs.Rectangle(-74,-338.1,133.1,341.1), new cjs.Rectangle(-74.5,-267.3,149.5,274.6)];


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,31,32,0.2)").s().p("AolB8QhggWgngOQheglAAgzQAAgyBeglQAngOBggWQDkgzFBAAQFCAADlAzQBfAWAnAOQBeAlAAAyQAAAzheAlQgnAOhfAWQjlAzlCAAQlBAAjkgzg");
	this.shape.setTransform(78,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,155.9,35.1);
p.frameBounds = [rect];


(lib.PinkChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AhNDSQgdgbgUgeQgYgkgKgpQgLgpAFgoQAFguAVgrQAWgsAhggQASgRAmgUQAngVAMgKQAPgNBBB9QA8B1AFAbIAAABQAKBFhCBBQgxAwhLAlQgFACgGAAQgVAAgggegAgMDSQgBgCAZgQIACgBQBmhOAJhkQggglgehJQgag/gOg7QgKAJgsAgQgiAYgSAYQgyBEgBBNQAABGArA3QAIALAiAYQAfAWAGANIAAAAg");
	this.shape.setTransform(0,-24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AhDC/Qg5hFgRhEQgThHAohEQAbgwBGg+QBAg6AjBGQALAVAOAvQAOAwAHAQQBMCaiPBcQgpAagWABIgDAAQgeAAgagfg");
	this.shape_1.setTransform(-1.1,-23.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-16.8,-48.1,33.8,48.2);
p.frameBounds = [rect];


(lib.PinkChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AgtCVQgZgIgegOQgpgTgBgMQgGg9Aag+QAag/AvgoQA4gxA1AZQAaAMAVATQAcAZgDAXQAWAvgUBQQgVBWgvATQgPAGgUAAQgfAAgtgOgAgxhQQgeAqgQAkQgUArAAAyQAPAEAhAMQAfALASAEQA7AMAfgeQAbgaALhBIAAgDQAIgwgbguQgegxg0gDIgBAAQgTAAgmA4g");
	this.shape.setTransform(0,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AgHCXQg4gCgmglQglglAPg/QAOg2AugyQAugyAsgHQA0gIAYA2IABABQAZA6AAA1QgBBEgoAmQglAkg1AAIgFAAg");
	this.shape_1.setTransform(0.1,-16.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-14.4,-32.7,28.9,32.8);
p.frameBounds = [rect];


(lib.PinkChunk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AAmBnQg6gKgRgPQglANgPgrQgNglAKgeQANguAXgYQAdggAcAfQBHBIAYBkIABAHQAEARgeAAQgNAAgUgDgAhDgcQgRAnAYAYQAXAXAPAGQAMAEAiADIAmgBQgghTg4hHQgbAVgOAjg");
	this.shape.setTransform(0,-10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AAcBcQg1gCgXgQQghgYABgrQAAgkAXgkQAlg7AvBGQAlA1AQA7IABAEQAGAfgyAAIgJgBg");
	this.shape_1.setTransform(-0.2,-11.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,-21.4,19.6,21.4);
p.frameBounds = [rect];


(lib.TunnelFrontAnim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA4646").s().p("AgTApQgXgHgIgaQgEgOAqgVQAmgUAKAIIACACQAGAIgGgIQASAVgHAVQgHATgVALQgOAHgMAAQgHAAgHgBg");
	this.shape.setTransform(8.5,-361.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA4646").s().p("Ah4B3QgpgZABgiQAAgPAIgRIAPgcQAYg2AJgQQAYgtAYgOQAggTAhAMQAYAIAkAdQAVASAYAYQAGAGAGAMQAGAOAEAFIACAGQAZAYgCAhQgBAhgaAZQgTARgfAJQgNAEgrAHQgcAEgZAAQg6AAglgXg");
	this.shape_1.setTransform(21.6,-433.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#702F2F").s().p("AAAGCQgqgwgNgqQgLgoAOhbQAUhjADgjQAEgxAGhoQAFhoAEg0IgDhdQgChOAGgGQASgRAGBfQAGBQgEAdQgRCCADByQACAzgGBOQgJBagBAcQgDCBBGBjIAFAHQgpgtgUgbg");
	this.shape_2.setTransform(87.4,-204.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#702F2F").s().p("AADD3QgSgKAAiAQADiFgDgVQgFgiADhOQAEhlAaANQgCgBgBBIIAABSIAGBmQADA2AAArIAAAIIgCBIQgEA8gIAAIgCAAgAANj1IAAAAIAAAAg");
	this.shape_3.setTransform(83.6,-144.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#702F2F").s().p("AgHFWQgag0AAgUQABgZgHhNQgIhNABgkQACiYAli3QAGgcAOgnQAWg1AMAeQADAHgOAuIgUBAQgRBhgHBtQgGBXABB3QAAAgARBPQARBKgDAjIAAgBQgBABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgFAAgSgog");
	this.shape_4.setTransform(80.8,-83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#702F2F").s().p("AhoDNQgQhIADgPQAHgfASgCQAVgBALgdQA8igAHgVQBAiWAiAGQAMACABANQACAMgJAGQhjCig+C1QgJAZgQgIQgOgGgDAaQAAAHAKA8QAJA2gGAGIgCABQgIAAgPhCg");
	this.shape_5.setTransform(68.2,-27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA4646").s().p("AgJH2QgUg6ASh4QAQh7gSg8IgxibQgQhSAjhNQAmhTARhYQAHgcAAg2QABg3AFgaQACgHAIAjIAIAiQADARgEAhQgEAhACAQQAGAtgKA2QgGAigTA+QgUBMAiBsIAdBaQANAwABApIAAAHQAAA6gCAeQgEAwgLAnQgLAlgQAjQgTArgIAAQgEAAgCgHg");
	this.shape_6.setTransform(88.7,-265.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA4646").s().p("AC9FEIgagsQgNgTgXgTQgbgXhahBQhIg2gmglQhDg/gagiQgxhBABg5QABglAdhEQAVgwAHgcIgDAoQgCApABAcQABBFAcAjQASAWA7A1QAaAcA4AeIBpA4QB9BJAKBcIAAAEIAAABQAEAYgQAvQgKAggNAAQgIAAgJgOg");
	this.shape_7.setTransform(60,-321.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA4646").s().p("AHNHKQgggOgTgRQgigfhAhCQhvhzhEg4QgLgKgXgaQgVgZgNgKQghgagOgWQgMgTgUgKQgIACgJgBQhbgMgzg7QgLgNgbgRQghgVgJgIIgdgdQgSgSgOgFIgigNQgTgGgRgBQgIAAgMgDQgOgEgGAAQgJgBgLADQgOADgGAAQgcABggAaQgjAcgSAEQgNADgJgHQgKgHgBgNQgCgUAKgdIASgvIAQguQAKgcAJgRQA6h1BHgRQAUgFAQAMQARANAAAVIAAACQAiAKADgDQAXAEAPARQANAQAFAYIB8BFIAyAeQAdAUAKAXQAGAPACAHQAAACAPAKQBKA0AnAfQBAAzAmAvQAGAIA4A4QAnAqAPAdQAUApAmAwQAkAuAkAgQAcAaA9AhQA/AiAaAVIAKAJQgtAvgzATIg2gXg");
	this.shape_8.setTransform(95.2,-374.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#702F2F").s().p("AhNDFQgNgNAZgtQAegwAFgKQALgagBgqQgBgQgHg0QgDgdAwhCQAzhDANAWQAGAKgbAsIgiA2QgKAVgDAYQgCAMgCAgQgpDHgiAAQgGAAgFgEg");
	this.shape_9.setTransform(176.3,-269.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#702F2F").s().p("AgVgQQAVgHAtgBQATABAJARQgFgGhCAMQhDANgHAMQAPgeAkgLg");
	this.shape_10.setTransform(70.2,-422.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#702F2F").s().p("AiFAiQArg4AcgaQAogiA2gUQAygQA1gCIAFAAQAUACAOAQQgGgGhVAcQhSAagSALQgTAJhFBKQhGBMAIAEQgWgMA4hKg");
	this.shape_11.setTransform(52.1,-419.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#702F2F").s().p("AgJAAQACgOAGgJQAEgJAFAJQADAIABAPQAAARgFAFQgHAHgEAAQgKAAAFgdg");
	this.shape_12.setTransform(122.8,-123.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#702F2F").s().p("AiuBnIAAAAIAAAAgAiIAUQAZgXAyglQAughBEgSQBMgUAsASIADABQANAGhdAgQhjAigJAEQgLAGhMA3QhLA4AAACQgOgfA0g0g");
	this.shape_13.setTransform(143,-138);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#702F2F").s().p("AgKAAQAAgMAJABQAGABAFAIQAFAHgOAGIgDABQgIAAAAgMg");
	this.shape_14.setTransform(90.9,-334.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#702F2F").s().p("AgOAAQgEgcAVAAQAHAAAEAcQAEAcgIABIgBAAQgUAAgDgdg");
	this.shape_15.setTransform(89.7,-327.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#702F2F").s().p("ACfFZQg3hEhviBIAAABQgNgQjgjgQgfgfgfhRQgfhPgZgbQAcAdA7BNQA2BGAlAiIgOh/QgJhSgEguQgFg3AVhIQAZhLALgrQgbBuAOCcIAjEVQAdAaCyDKQCsDEAaAiQgZhlAChAQAChJAnhYQAnhWARg8QAYhYgLg9QATBhgbBzQgRBEgvCOQgOAwATBUIAfCDQAWAggEAsIgHA6QgdhQiOivg");
	this.shape_16.setTransform(54.8,-297.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C3232").s().p("AgjAOQgHgOAmgWQAkgSAAgCIAAABQAOAngeAfQgMAOgJAAQgRAAgNgdgAAggqIAAAAg");
	this.shape_17.setTransform(72.6,-340.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C3232").s().p("AgiBDQg2gWAyhfQALgLAPgJQAYgRARADIABABIABAAIACAAIACABQAUALAGBEQAGBHgTANQgFAEgLAAQgWAAgsgSg");
	this.shape_18.setTransform(63,-356);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C3232").s().p("AgIA1QgVgHgFg9QgEgMAFgMQAGgMANgCQAogEAJAfQAHAagRAdQgOAZgNAAIgGgBg");
	this.shape_19.setTransform(133.4,-178.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C3232").s().p("AgwAZQgHgqACgSQADgpAgAAQAcAAARAhQAKATAPAkIAAACQAGAKgMATQgMASgUAJQgNAHgJAAQgeAAgKg0g");
	this.shape_20.setTransform(119.2,-193.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C3232").s().p("AgmCmQgzgxgNg4QgLg0AShHQAMgtA6gpQA6gpAuAHQAaAFACBHQACBCgUBNQgUBVggAmQgUAYgTAAQgSAAgSgSg");
	this.shape_21.setTransform(137.9,-213.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#702F2F").s().p("AgEAXQgegDALgbQAFgNANgEQAMgEAIANIABABQAIASACAWIgegDg");
	this.shape_22.setTransform(162.1,-125.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#702F2F").s().p("AjZFoQAvh5AagWQAfgbA4glQBBguAVgQQBrhQAri6QADgQALiLQAIhdAhgzIABgDQAMgRgCAkQgBASgEAVQgIAwgJBhQgIBggRBCQgUBSgoBEQgcAxhDAuQgmAZhLAwQhAAtgrBeIgYBLQgUA/gJAAIgBAAQghAAAvh7g");
	this.shape_23.setTransform(131.5,-67.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AA4646").s().p("AgDAsQghgTAEgpQAEgsAjASQAiARgJAqQgEARgKAIQgGAGgGAAQgGAAgDgEg");
	this.shape_24.setTransform(101.7,-134.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA4646").s().p("AgWBGQgVgIgHgeQgFgVAJgZQAJgaARgRQASgRAQADQARAEAMAaIAEAKIACAEQAIAbgIAZQgJAZgWAOQgOAIgMAAQgHAAgHgCg");
	this.shape_25.setTransform(111.2,-120.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AA4646").s().p("AiLD/QgPiDAIhXQAKh0AzhaQAfg2AjgYQATgNALgdQAOggAPgNQAcgZAhAcQAeAaACAhIAAAEIABAFIAAAHIAKBwQAHBLgCAwQgECGhKBhQhHBggvAcQgVANgQAAQgsAAgLhcg");
	this.shape_26.setTransform(92.1,-90.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AA4646").s().p("AghAiQgRgSAKgfQAJggAfgBQAegBAEAkIAAABIABABQARAYgMATQgKAQgZABIgDAAQgVAAgOgPg");
	this.shape_27.setTransform(148.6,-306.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA4646").s().p("AgvBFQgIgPgJgtQgGgbADgQQAEgXAVgMQAkgVATgCQAhgDALAlQARA6gIAiQgMAug2AMIgKABQgYAAgNgYg");
	this.shape_28.setTransform(164.8,-291.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AA4646").s().p("AgLB4QgfgpgTgtQg4iCBqggQALgZAZABQAaABAPAeIABACIABACQAWAwgOBaQgQBggoAjIgCABQgHAAgWghg");
	this.shape_29.setTransform(112.5,-261.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#933A3A").s().p("AhpGiQgyg9ApipQAMg2AahPIAhhlIAkiFQAShMANg7QAKguASgpQAehCAXAuIADAIQArBfgdCiQgKA5gXBSIgiB6IgRBTQgQBQgRA2QgjB3goAAQgRAAgSgXg");
	this.shape_30.setTransform(168.3,-224.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#933A3A").s().p("ABQKMQg3ghgQhtQgJh7gCgrQgUjMgkjnQgRiEgLhCQgShygehPQgbgxgQgfQgcg4ANgbQAMgZAgAEQAZAEAVASQAxArAoBYQANAcArB4QA+CkAlDUQAUB1AeEQQALBjgOBPQgQBZgwAAQgUAAgZgPg");
	this.shape_31.setTransform(91.7,-249.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C3232").s().p("AoITfQhAgVASg+QADgJAuhTQg6g5ADgoQABgZAvhPQAjg7BghFQBqhKAigtQA8hOAdh4IAojXQAOhNAnhGQAZguA8hSQAVgdAIg+QAFhHAFgcQAaijAIhfQAGhIgEiQQgFiRAGhHQAKhoALhBQAZiTAiABQgGAAAPEQIASE1QADA7gBBOIgDCKQgBAagFAcIgLA2QgBAMAKAXQAKAZAAAMQgBCoAsC8QAgCOBIDMQA/C2A4CzIAxCiQADALAZARQAYASADAQIABAGQAIAtgIAaQgHAYgiAuQgWAegoAKQgaAHgwAAQiFgBkKABQjoABhOgBIhmACQg/AAgmgNgACqzrIAAAAIAAAAg");
	this.shape_32.setTransform(165.7,-126.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C3232").s().p("AD2EZQhthqgqguQjWjshqh3QgygkgogoQhOhOADhHQAqADBOASQBYAVAYARQFFDrDgDeQgjAuAFCwQACBXAKBOQgghIhfhjg");
	this.shape_33.setTransform(46.5,-294.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#933A3A").s().p("EgF2AibQgLAAgJgTQgKgVAAghQgRg/Aig2IAigxQAWgfAMgdQAchOASgoQAehGAjgkQghhDARi2QANh5AeitQARhnACh+QABg7gEisIgBhSQACgqAQgjQAEgKgEg3QgGg+ABgKQARkAAglKQhkigiUixQhxiHioivQhnhqhshHQgJgGgWgtQgZg1gXhDQhAi9gCiuQgCjqBzidQCPjCE6g9QBbBRB3BwIDPDEQA3A2AZASQAmAcA4AVQBDAZAlAkQAlAlAYA/QAKAaAsAYQAyAbANASIAxBMQAeAtAWAcQApA0BrBUQBqBUAqA2QAkAtAPBMQAOBGgJA9QAcB6gZCDQgNBFg6CtQgGATgPAeQgLAaADAZQAGApgBA1QAAAdgFAwQgGA2gBAVQgCAiAGBiQAHCHAfGAQAhGXAhFRQAiFdAtGJg");
	this.shape_34.setTransform(99,-221.1);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-447.4,223.1,447.4);
p.frameBounds = [rect];


(lib.TunnelBackAnim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA4646").s().p("AgGArQgQgFgHgUIgHgPQgFgJAKgQQALgRATgEQAEgBAHABIAAAAQAMAAAIAIQAIAIAAAMIAAAZQgCAQgJAIQgNALgMAAQgDAAgFgCg");
	this.shape.setTransform(67.2,-280.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA4646").s().p("AgnAJQgFgmAagCQAJgLAKgDQALgEAIAHIACADIAEADQAYAegPAZQgPAZgkAEIgBAAQgSAAgEgng");
	this.shape_1.setTransform(58.7,-179.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA4646").s().p("AAjB6Qg6gDgegUQgkgZACg3QABgWAQgnQAUgqAHgSQAQgqAvA0QAZAaAcAqQAWAbgKA7QgKA8gmAAIgCAAg");
	this.shape_2.setTransform(54.5,-202.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C3232").s().p("AgXAAQgBgeAYAAQAYAAAAAeQgBAfgXAAQgWAAgBgfg");
	this.shape_3.setTransform(42,-240);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C3232").s().p("AgvBKQgjAAAJgvQANhFAQgQQAVgYA5AOIAGACQArAMgJAjQgIAegqAgQgnAfgfAAIgBAAg");
	this.shape_4.setTransform(50.2,-253.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA4646").s().p("AhBA/IgCgKIAAABQgGgWAHggQAIgfASgaQApg/AxAlIACABIACACQAXAUgKArQgJAkgdAkQgdAlgZAFIgIABQgXAAgJgjg");
	this.shape_5.setTransform(38.3,-274.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA4646").s().p("AgoAYQgHgSACgTQAEgVALgIQANgJARAEQASADANAMQAiAfgoAfQgXATgOAAQgTAAgJgZg");
	this.shape_6.setTransform(41.2,-34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA4646").s().p("AjMBvQgEgcABgdQACgoAMgOQAEgfA/glQA4giBPgaQBPgZA4gEQA+gEACAZQADA3gXAYQgMAMg/AgQgkAQgzAoQhCA2gPAKQg5AngdAIQgMAEgKAAQgjAAgGgvg");
	this.shape_7.setTransform(25.3,-40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#702F2F").s().p("AgHAsQgbg0gBhGQgBgiARAgQAIAQAIAWQADAaAOAmIAUA+IABAEQACAIgCAAQgGAAgkg0g");
	this.shape_8.setTransform(35.9,-249.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#702F2F").s().p("ABKGTQgigjgYhYQgWhpgOgvQgXhTgkgbQgHAfgIBEQgIBBgIAhQgHAbgsBDQgjA0ADAuQgFgzAIgnQAGgiAWg2QARgrAOhHQAShgAFgTQgbgOgRgZQAFAFAXgFQAagGAEACQAihbASh4IAUhaQAMg5gEggQAOBpgPBlQgMBagmBuQA7AoAfB9QAJAiAOBDQAOA5AOAfQAJAVArAoQAwAsAUgFQgaAHgWAAQgsAAgegfg");
	this.shape_9.setTransform(76.5,-92.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA4646").s().p("AgZCtQgCigAGhJQAGhXAFh9QABgQAPgzQAQg0ABAQIABAJQAGBkgHEtQgIFZgQAAQgXAAgBjPg");
	this.shape_10.setTransform(32.9,-217.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA4646").s().p("AgoBBQggguAXg3QAYg8A6AQQAaAGABAkQABAggRAjQgSAlgXANQgHAFgIAAQgPAAgNgTg");
	this.shape_11.setTransform(31.7,-111.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA4646").s().p("AhZDoQg5gZAGhXQAFhLAvheQAthbA1g3QA6g7AfAWIABABQArAhgBBWQAABQgkBZQgkBcg0AyQgmAognAAQgPAAgPgHg");
	this.shape_12.setTransform(35.4,-148.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C3232").s().p("ADPMxQiUgIgdAAQh+AEhVgBQglADgYABQgrABgOgLQgJAEgngqQgmgpgDgNQgOg0AIg3QAEgZAVhPQAOg0ADgrQACgmgFg7QgEg5AdhAQAshhAGgTQAchhAYiOIAlj0IASh2QALhCASgyQAWgxAQgmQAchHgKgPQA3BKB2CfICACsIAiAnQAbAhgCAJQgIAgATBRQAYBlACATQAHBRADBrIgHB4QgEBTAOAhQAQAmAiA/QAbA3gBA3QgBAegHBTQgEAtgHAbQgJAhgFAoQgSAVhsAAIggAAg");
	this.shape_13.setTransform(92.2,-81.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#933A3A").s().p("AoLXXQgpgGgUgqQgQgggBgqQgBhYAYhbQAbhlAwg9QAXgeASg8QARhFAJgdQAshyATg7QAihmgDhMQgGiIAPijQAKhpAbi+QAViLgGjVQgNhMAHhhQgHivAFhyQAHilAMhJQAWiMA5hTQAWghA4gkQA+gpAvgCQBVgjB3ApIAegMQARgEAMADQAMADAPAMIAXATIANAJQACAEgHAFQAHgFALgFIATgJQAngSAnAMQAcAJAfAqQAWAdATAnIAhA/QATAmAKAaIAIAHQiwBdiECoQA6CZA8CyIA+C7QAfBlAIBMIABANIABAGQALDGmRX+Qg2AKkOACIhQABQjMAAgogKg");
	this.shape_14.setTransform(60.2,-151.2);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-301.7,132.1,301.7);
p.frameBounds = [rect];


(lib.SpikeAnim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DE49").s().p("AgrDpQgKgSgPg3QgKghgCjWQgCjYANAmQAHATA9DDQA1CsASAqIACAEIABADIABABQARAhgUAhQgUAhgmACIgEAAQggAAgUgng");
	this.shape.setTransform(0,-27.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,-54.5,16.5,54.5);
p.frameBounds = [rect];


(lib.Spike3Anim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DE49").s().p("Ag0FpQgkgFgTgaQgVgeALgsQAIglArg/QAuhGAMgeQAlhkARh0QAUiZATguQAJgTANBiQALBUABAfIABAXQADCbgDA3QgJCFgqBeQgQAlglATQgXAMgaAAQgJAAgKgCg");
	this.shape.setTransform(0,-36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-12.2,-72.7,24.4,72.7);
p.frameBounds = [rect];


(lib.Spike2Anim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DE49").s().p("AAaCvQgkgKgTgkQgZgtgUhdQgZh3AbgwQABgCAuBOIAzBZIABABIAAABQAjAvALAWQAVAtgMAlQgLAjgdAAQgHAAgJgCg");
	this.shape.setTransform(0,-17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-35.6,17.5,35.6);
p.frameBounds = [rect];


(lib.LogAnimation = function() {
	this.initialize();

	// Log
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFD659").s().p("AhyFmQjUgkhlhsQhxh5AbjLQAOg+AqgvIAAAAQACAAABgEQAugyBMgjIACgBIAmgPQCbg5CiARQDQAWCKBaQAnAZAcAcQACAJACACQADADADgEQBdBkgcCKIgCAJQgoCyjOBTQh9AyiEAAQg7AAg/gLgAj8hqQhVA+gPA/QgOA7ArAzQAoAwBKAbQBJAcBOgEQCjgJBThCQA+gxgShCQgThAhPgLQhBgJhGANQhTAPgrAlQg0AtALAZQAIAUAtACQAoABAigMQAkgOgNgPQgKgLgjAPQgnAQgNgGQgTgaArgWQAngTBBgIQBEgHAzALQA6AMAGAfQAYBajDAdQhGALhNgCQhJgDgbgLQhQghgJgzQgHgsAsgxQAmgtBBglQA8gjAxgKQBFgODOA/IB4AmQAsANgPgMQgXgShCgcQhQghhTgTQhZgVhHAAQh7AAhPA6g");
	this.shape.setTransform(-1,-44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64444").s().p("AHCJKQgCgCgCgJQgKgugMjlQgOkTAMAnQALAiAHA9QAEAsABAoQAABHAKCOQAEApAAAlQAAAqgEAJQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCgBgAnBIrIgBAAQgJgEABg3QABgvAGgtQAFgmAMhLQANhMAFgmIANieQAKhpAQgdQATghgoFgQgjE4gNAjQgCAEgBAAIAAAAgAlFHSQgHgBAOhUQAPhYgDgTQAHAkgIBPQgHBEgJAIIgCABgAD8h6QAHjGANjhQALBPgDB1IgGDEIAKDbQAKDBgHABIgCAAQguAAANl+gAgom2QAMiAANgTQAKgPgGDBQgGC+gPAAQgVhLANiSgAiemmQgHgLADgxQACgtAJgfIABgDIAAgCIABgBIAAgBQAHgZgFBaQgEBPgGAAIgBgBg");
	this.shape_1.setTransform(-1.7,-121.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#843A3A").s().p("AghOHQingHiQg3QiMg2hHhmQhJhnAAiVQABlEBGnQQAejEAnhUQA8h+COhHQB4g7CPgKQCIgJCEAnQC4A3BFCiQAbBCARBgQAHAxAPCGIAqFmQAWDTABCVIAAALQgBCohhBzQhZBrieA0Qh/AqiUAAIgqgBgAl7mkQgQAcgKBsIgNCdQgGAmgMBMQgNBKgEAmQgGAtgBAuQgBA4AJADQgpAwgOA9QgcDOBxB4QBlBsDUAlQDDAiC4hKQDOhSApiyIABgJQAciMhdhlQAEgJAAgpQgBglgDgpQgKiOAAhGQgBgngFgtQgGg9gLgiQgMgnAOETQAMDkAKAuQgdgdgngZQiKhZjQgWQihgSicA5IgmAQQAJgIAHhEQAIhQgHgiQADATgPBXQgOBTAHACIAAAAQhMAigtAyQANgjAjk2QAllDgNAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAABgAD6mrQgNGGAwgGQAHgBgKjBIgKjdIAGjFQADh1gMhPQgMDigHDGgAgSt7QgNAUgLCAQgNCRAUBMQAQAAAGi/QAFizgIAAIgCABgAiYtnIAAACIAAABIgBABIgBADQgIAfgCAuQgDAxAHAKQAHAKAEhYQAEhGgEAAQgBAAgCAFgAjMKjQhKgcgngvQgrg0ANg6QAPhCBVg+QB/hcDrA3QBTATBQAiQBDAbAWASQAPAMgsgNIh4glQjOg/hFAOQgwAJg9AkQhBAlgmAsQgsA0AHArQAKAzBPAhQAbAMBJACQBNACBHgKQDCgdgXhbQgHgfg6gMQgzgKhEAHQhBAHgmAUQgsAWATAaQANAFAogQQAjgOAJALQANAPgkANQghANgpgCQgtgCgIgUQgLgYA0guQArgmBRgPQBIgOBCAJQBOAMATBBQASBCg9AyQhUBCijAIIgTABQhEAAhAgYg");
	this.shape_2.setTransform(-1.5,-91);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-181.4,125.9,180.8);
p.frameBounds = [rect];


(lib.MooseToothShine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAAQAAgbAbAAQAcAAAAAbQAAAcgcAAQgbAAAAgcg");
	this.shape.setTransform(7.2,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQglgSgOgPQgMgMAVgCQAVgBAhAMQApARAcAUQAAASgLABIgHAAQgZAAgmgUg");
	this.shape_1.setTransform(-4,-4.3,0.866,1,0,0,0,0,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-10,-6.9,20.1,6.9);
p.frameBounds = [rect];


(lib.MooseEye = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AmqFnQhdgNg1hOQgwhGAAhjQAAhVAchPQAfhcA5gyQApgjBHAIQBHAIAZAqQAphfBTgrQBug4BtAeQBzAfA1BtQAihCBKgLQBLgLBKA2IgIgGIAaAVIgJgHQB6BnAQCIQARCciNBcQg+AohIgCQhbgCgzhPQhHCCibAKQhDAFg9gXQg+gWgmgsQABAcglAdQgwAkhVAAIgWAAgAnfilQguAsgZBJQgWA+gCBIQgCBGAWA2QAbBCA6AWQCXA5BCh4QgYgfgQgmQgbhCgHhNQgHhQAThIQgZg/g8gBIgFAAQguAAgdAcgAg1k+QiKAHhCB8QgiBHgCBUQgDBOAaBNQAZBJA7AxQA4AuBGAMQBGANA/gcQBDgdAphDQguBOAxhUIADgEQAlhEAChXQAChQgehSQgghXgxgvQgXgWgtgOQgrgOgqAAIgRABgAFCj5Qg9AIgfA+QAbA0AIBkQAIBugbBJQAgBGA9APQA2AMA9giQA6ggAjg7QAmg/gIhAQgIhDgzhCQgtg8hBgoQgfgSgkAAIgTABg");
	this.shape.setTransform(0.8,-36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#382F22").s().p("Ai7AkQgOgNBlgeQBdgeAVgBQAogCBDATQBBATAEAMQACAKhTgIIhngLIhfAZQg3AOgZAAQgNAAgFgEg");
	this.shape_1.setTransform(-48.6,-65.4,0.802,0.875,0,-4,176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#382F22").s().p("Ai7AkQgOgNBlgeQBdgeAVgBQAogCBDATQBBATAEAMQACAKhTgIIhngLIhfAZQg3AOgZAAQgNAAgFgEg");
	this.shape_2.setTransform(44.8,-71.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAsQgOgSAAgaQAAgZAOgTQAPgSATgBQAUABAOASQAPATABAZQgBAagPASQgOAUgUAAQgTAAgPgUg");
	this.shape_3.setTransform(-39.7,-14,0.741,1.012,-15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgig");
	this.shape_4.setTransform(51.9,-41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwAOQgPgVAKgTQAJgQAYgGQAXgFAVAKQAXALAHAaQAPA2gvACIgGABQgnAAgZglg");
	this.shape_5.setTransform(41.4,-49.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#382F22").s().p("AkEBxQgwgOBNhdQBGhSAhgQQA+ggBkATQBQAPApAbQA2AjAXAXQAyAsgCAqQgBATg/g3QhDg7gIgFQg6gmg9gLQhCgNg8AWQgYAJhCBUQg9BPgFAAIAAAAg");
	this.shape_6.setTransform(-5.3,-87.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiAsQgOgSAAgaQAAgZAOgTQAPgSATgBQAUABAOASQAPATABAZQgBAagPASQgOAUgUAAQgTAAgPgUg");
	this.shape_7.setTransform(-8.2,-20.9,1,1.098,-3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpAqQgOgSAAgYQAAgYAOgRQAQgTAZgBQAaABAQATQAOARAAAYQAAAYgOASQgQAUgagBQgZABgQgUg");
	this.shape_8.setTransform(-40.2,-47.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA8QgkgRgFgbQgEgVAUgYQATgXAegLQAfgMAdAIIACABIACAAQAiALAIAcQAIAbgRAbQgSAcgfALQgPAFgNAAQgWAAgWgLg");
	this.shape_9.setTransform(1.8,-54.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiAsQgOgSAAgaQAAgZAOgTQAPgSATgBQAUABAOASQAPATABAZQgBAagPASQgOAUgUAAQgTAAgPgUg");
	this.shape_10.setTransform(47.7,-37.6,0.83,1.059,-10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EADFC3").s().p("AnFFHQhEgXgmhCQgrhKANhmQAUkACEgVQAugHAzAXQApATARAWQAUheBNguQBEgpBdAEQBVAEBCApQBGAqAJA8IAAgBQBJhXBSAAQCKABBbETQAKA9ggA/QgeA/g4AlQg8AnhAgIQhKgJg/hGQgdA8hBApQg+AnhIAIQhLAIg9gcQhCgfgfhEQgXBRhAAhQgiARgkAAQgbAAgdgJgAB4hiQgKALAAAQQAAAQAKAMQALALAPAAQAPAAALgLQALgMAAgQQAAgQgLgLQgLgMgPAAQgPAAgLAMg");
	this.shape_11.setTransform(0.8,-35.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAbQgLgMAAgPQAAgPALgLQALgMANAAQAOAAALAMQALALAAAPQAAAPgLAMQgLALgOAAQgNAAgLgLg");
	this.shape_12.setTransform(15.5,-43);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-63.8,-99,127.6,99.1);
p.frameBounds = [rect];


(lib.MooseDeathTop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("AozAUIgIgDIhIgDIgIgCIgIgCIgHgDIgDgEIgCgDIAAgCIABgDIADgFIADgCIAFgBIALAAIAGACIBKACIAGADIAuAAIAIgDIAbgCIAIgCIAggDIAHgCIABgBIFyAAIAGADIFlADIAGACIE3AAIAIgCIAjAAIAGACIAEAEIACAEIAAADIgBACIgCAEIgEADIgFABIgdACIgGACIlAAAIgIgCIljgCIgIgDIluAAIgGADIgiACIgGACIgdADIgGADIgyAAg");
	this.shape.setTransform(-0.3,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("ApDBaQBKiHCKhNQDpiAEKAxQEWAzCQDXQAsBEAiBOQp4ACp3ADQAVhGAfg4g");
	this.shape_1.setTransform(0.3,-22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AqJDpIgXAAQAuiYBdhgQBThZB3g3QBxgzCAgPQEwglDgCvQCaB4BRDCIgNAAIgLAAIgPAAQgihOgthDQiQjXkWg0QkJgxjqCBQiJBMhLCIQgfA3gVBHIgTAAg");
	this.shape_2.setTransform(0.2,-24.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-47.8,135.1,47.8);
p.frameBounds = [rect];


(lib.MooseChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("AiZCSIAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQgEg7AMgzQAOg8AhglQAggiAzgfIBag0QALgHAKAJQAKAIgDALQAeATARBJQAIAjAFAxIAIBXQABALgJADQgJAEgIgFQgsAvhxAQQgcAEgXAAQhHAAgMgmgAgGhgQgvAdgaAfQgWAbgOAzQgQBBgJARIABABQARAZAwgBQAXgBAxgLQAzgNAbgNQAJgFAQgLQAPgMAJgEIADgBIgFg/QgDgigFgaQgGgcgEgOQgHgXgLgPIgMgRIhRAug");
	this.shape.setTransform(0,-18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("AhIClQgSAAgVgBQgPgCgLgJQgMgKACgPQAHg1AKghQAOgtAYghQArg4BZg+IACgCIAMgLQALgKANADQAMAEAFANQAeBLAMAtQAUBLgOAwQgKAngqAXQghATgvAGQgOADgPAAQgeAAgYgLg");
	this.shape_1.setTransform(0,-18.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-16.3,-36.9,32.7,37);
p.frameBounds = [rect];


(lib.MooseBlood = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("AFiB+Qg8gGhXgmQg4gYhIAKQhRATgtAIQifAaifgoQiDghhPg6QgjgbgPgcQgVgnAogOQAugQCAAMIDFARQAtABBQgFQBYgFAjAAQA6gBCtACQBQABChgCQAvAAAXAEQAnAGAYAUQAnAgg9BGQgxA5gtAXQg4Aeg+AAQgPAAgPgCgACIArQAeAEAhAMIA8AbQBTAjBTgQQBVgRA4hEQBLhLg1gbQgbgOg8AAQh4AEg8gBIjBgDQhzgDhMAEIhfAGQg5ADgngDIhVgIIhWgJQhDgJg5ADQgkACgLAEQggANAhAmQAVAXAeATQBcA9CtAYQCkAXBjgbQA3gQATgDQAggHAaAAIAUABg");
	this.shape.setTransform(0.6,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("ADBA/Qg0gMhAAJQgjAEhOAUQhWAWiGgOQjNgViKhuQgQgOgHgWQgEgOAKgLQAJgLAOgBQAOgFAqAAQBVgBCaAZQAtAABigGQBdgGAzACQBKADDRAAQC0AABqAHQArABARAZQAeAshwBYQhIAsgoAHQgSACgTAAQhTAAhvg3g");
	this.shape_1.setTransform(0.4,-14.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-62.7,-27.1,126.8,25.8);
p.frameBounds = [rect];


(lib.MooseAntler = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#382F22").s().p("Aj+E4QgEgDgEggQAvgHBxACQBzADA2gHQDCgXAMirQAGhZgHg9QgKhYgmg3Qgpg8gtAOQgtANgJBHQgGAwALBzQACBkgwAuQg1A0gig1QgbgogBhAQAAgWgOgjQgPgngUgcQg2hKgpBMQgMAXAGAqQADAZAMAwQAJArgIAUQgJAbgoADQgmAagPgZQgFgKADgJQAEgKAMAAQAIgFAjACQATAAgGgeIgLg4QgHgfgCgWQgGhDAtgpQAxgrA6AsQAsAhAQA4QAJAeAFBMQAEA9AjgHQAkgHAMg2QAJgogHhCQgHhPACgcQAFhGAjgqQAqgzBAAhQBoA1AODMQAJCFgaBMQgkBthvAYQgwALhGAAIh1gBQhLAAgxADIgdACQgKAAgCgCg");
	this.shape.setTransform(0,-31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B604A").s().p("AAABLIiUgKQhVgEgKgCQhEgMA4glQAbgQAxgCIBRADIBhADQA2AAAogGQAigFAugXQA6gdATgGQAngNgJAtQgJAngTASQgkAihFANQgyAKhCAAIgfAAg");
	this.shape_1.setTransform(0.6,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F7152").s().p("AkXEoQgkgsABhJQAAgkAIgcQBGAAAegMQASgIgLg1QgGgdgQg9QgIgpAUgeQAUgeAmgEQAigDAhA1QAcAtAHAtQALBJAFAMQAQAyAkgCQAmgBAUhBQAKggACgeQgckEBbgZQAvgNAzBEQA5BNAHB+QAHB5gdBEQgTAtg2AxQgkAhjpALQhdAEhYAAIgwAAg");
	this.shape_2.setTransform(-1.8,-31.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-33.3,-62.8,64.7,62.9);
p.frameBounds = [rect];


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("AAIAdQgigDgTgTQgDgDAEgEQAEgBAGABQAIAAAOAFIAVAGQAYAEAWgEQgJgZgtgBQgpgBgdAQQgDACgDgCQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAhgfA1AFQA4AFAMAlQACAGgHACQgXAIgZAAIgRgBg");
	this.shape.setTransform(-13,0.7,1,0.805);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("AiPBPQg6gbAWgtQABgCAEAAQAEAAABADQAFA0BFASQA8APBRgOQBPgNAugdQAygggbgdQgZgeg9gNQg0gLg4ADQiJAIhJBQQgGAHgMgEQgMgDAEgHQAfg2BUgeQBPgcBaAGQBIAGA2AVQBFAbgFArQgHAxhLAdQhDAbhZAAIgHAAQhVAAgzgXg");
	this.shape_1.setTransform(0,0,1,0.805);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40FBFF").s().p("AhEBVIgQgDIgNAAQgTgBgFgNQgKAAgFgHIgBAAQgWgDgRgEQgKgCABgGIAAgNQAAgGAJgCIAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQADgCADAAQANACAVALQALAEAMACQAIgMAWgCIAQgCQABgVgcgKIgEABQgSgLgeAGIgFgFIgGAAQgVAKgJAAQgHgBgDgEQgDgEACgEQABgDADgCQAAgEAFgBIAHgDIAGgDIAZgMQACgCAGgDQABgIAMgEQAfgJAcABQAHgHANABIAqACIAHAAQAGgDAMAAQAvgBAlANQAigJAdAUQANgBAJAFQALAGAAAJQgCAQgDAMQALARgWAOIgKAGQgTATguAOQhMAdhRAAIgSAAg");
	this.shape_2.setTransform(0.8,0.5,1,0.805);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-23.8,-8.3,47.7,16.6);
p.frameBounds = [rect];


(lib.SlideLegs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3GLHQhRgigdhCQgMgdABgfQAAgiARgYQAbgmAngDQAXgCA3AIQA0AEAzgMQA1gMArgZQBng9AOh6QANh8hZhVQgxgihMg+Qg+gzgMgLQgtgpgki4QgbiFgDhDQEuiVF4gMQEXgJDnA+QBnAbDhBNQD1BTAMAQQAGAIAFAWIAJAtQARA+AqAWQA1AdGhENQGtESBBAxQArAhBpBKQBbBFAnA4QAiAwgvA4QgwA5hQgIQgmgEgpgVQgQgIg4giQhUg1htg5Qg6gfiMhHQhVgqlAiAQlniOhEgGQgwAdiVAYQhyAShmAHQgzAChigHQiJgKg5gYQAIBdgcBcQgcBXg6BMQhCBmivBJQiSA+iZAAQhJAAhKgOgA3/H+QgSAPgFAYQgEAaANAZQAiBAB2ARQEnAGC2iFQChh2AUiwQA3k9kOiHQhQgohrgWQhUgNAEgDQDLgYCaBuQCQBmAcChQCKBHEBgVQDygUByhKQAqgUA1gpQA1gqAOgHQAIgEAFAGQAGAFgEAHQgOAdguAjQgiAbgrAYQBqAZEqB0QEYBtBoA0IDFBjQBxA6BRAwQAbAQA7AoQA2AgAqgCQA1ADAWgfQAagigsg2Qg1hCn8lKQnLkniFhJQg6gfgjgwQgmg0gFg+Qh6gyiag2Qk3hsi2gVQiggXj4AZQkvAgjQBdQgDAWAiCOQAlCZAbAfQAVAkBqBNQBrBNANATQAyBKgHBlQgGBig3BPQhYB7iVAGQgVABhPgFIgTAAQggAAgLAIg");
	this.shape.setTransform(0,-72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiZIYQhpgGgzhTQgLgTAUgMQAUgLALATQAPAWAbAUQAeAVAZAEQAvAHBagRQBvgVAvgwQDGi+g+i2QgWg/gUgmQgdg4glggQgRgPg+gsQgygkgXgcQgdgigehiQgfhmARgaQADgEAFACQAEABgBAFQgIAeAkBcQAiBWAVAZQAYAbBCAsQA+AqAaAfQBCBQAfBhQAjBwgeBYQghBihEBOQhNBYhaAUQhyAag7AAIgMAAg");
	this.shape_1.setTransform(-127.7,-63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ACpCzQhPgOiIheQiahohmgiIAtgCQA1gFAtgJQCQgeADhFQBaA0BuBaQBrBVAEAVQAJAxgOAcQgUAog8AAQgUAAgZgEg");
	this.shape_2.setTransform(125.8,-23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AlEB4Qg7gdAGhUQADggAPgVQARgWAZAFQBKAQBxgSQCIgWAXg/IAXAbQAeAgAlAWQB3BFCNgwQgyAkhTA+QhHAzg9AWQhMAchoAAQhwAAiSgfg");
	this.shape_3.setTransform(-120.2,-18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("A2WKtQhFgQgqgsQgmgpACgtQACgvAugZQCIASB6gnQCsg2AAiWQAAiVg/hFQgXgYg6gsQhOg7gmghQgvh0gfimQgQhTgGg8QArgXBSgaQCig1C+gUQJeg9KDEtQAECIDkB5QCtBbGnEiQHQFAAUBDQgeBIgqAPQg2AShog3Qjoicmli9QmujAjKghQjJA6jKASQj5AWh+g6QAQDMhUB8Qh7C2ldBGQg0AMgvAAQgoAAglgJg");
	this.shape_4.setTransform(-0.5,-71.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-160,-145,320.2,145.1);
p.frameBounds = [rect];


(lib.ShotSparks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AIQgDgBAAgEQAAgDADAAQATgLAdgGIAxgIQAdgEADAbQAEAagdACIgYAAQgxAAgfgSg");
	this.shape.setTransform(0,-2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.7,-5.4,13.5,5.4);
p.frameBounds = [rect];


(lib.ShotSpark2 = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA4QgIgXABghQgBggAIgXQAHgYAIAAQAKAAAGAYQAIAXgBAgQABAhgIAXQgGAYgKAAQgIAAgHgYg");
	this.shape.setTransform(0,-8.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-2.4,-16.1,4.8,16.1);
p.frameBounds = [rect];


(lib.Head = function() {
	this.initialize();

	// headgraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AszYRQgRgWihj2QiKjRgkghQgyAYgpgQQgigOgjguQg6hKiDjGQiRjbgBgZQgBgRANhJQANhFgEgQQhFivgHl4QgDjRAQjhQADgkALgzQAOg8AQgfQAagPA4gVQBvgrCZghQgKACgng5Qgng5ADgGQAIgSBBA/QAhAgAfAjQgIggAPiWQARibASAAQAJAAgBCIIgCCiQBFhdDYjbQDdjgBUg7QGEgBHVAUQOtAnGZBnIBLAQQA8AOAFAIQANACggASIglATIjrCOIkXClQA1AcBeBUQBlBYgYAHQmbBwiJAuQgLA+h4EEQg8CCg6B1QAMA6AICHIAKDEQgBAUgXAeQgkAsgcAmIgDPBQgkAdhgAwQiMBIibAuQj1BLjsAAQjaAAjQg/gAxBOSQgSA0gPAPIFUH2IBgAeQB8AgCMAFQG+APG7kEIADnHQADnOAEgcQACgUAngwQAmgugBgWQgBiJgulcQgnkngShSQhhAmiDAQQlJhAmigmIlggYQgDB7gUD5QgUD3gDB8QgULRgXAAQgWAAAbrMQAcrGAWhZQDNAED1ASQHnAkDGBEQAQAFBlgcQByghAVgCQALAqAfDCQAgDCACAqQAuhXA1huQBrjcAoh1ID3hLQD4hKAFAHQgegng2glQgfgUhEgmQgYgNgUgSQgegcAigDIIPkwQoIhkt/gmQm9gTlYABQgEACkuE1QksE0gMACQjLAjh4AzQg8AZgUASQgbCEgMDDQgYGGBLE8QAah/AuiQQA5i1AggHQAsgLCGAyQCPA2ANAyQAgAkAfGSQAeGOgJABQgOACgolUQgvmIgVhVQgOghhbgjQhXghhOgHQhGCug0C4QgwCrgNBuQAYBFCHDAQCODKBDAxQAkAeA0hKQAvhRAFAAQAdABgUA7g");
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAED6QA9hFAhgSQgJhBgiinQgji1gRg3QgXgBgzBBQgyA+gCgBQgNgFAeg5QAagwAOgRQAXgYAXgLQAlgSAOAoQAXBHAoDSQApDTgIAOIiYCjQgngSBEhRg");
	this.shape_1.setTransform(-135.7,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A322B").s().p("ABiLTIhms/QgKgJghgSQhCgkhygsQAIgXDfj2QBxh7Bvh2QACAfghLIIghLEg");
	this.shape_2.setTransform(-114.5,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("Ah2iNQgEgeA0guQAvgrAhgLQA2BPAiDTQAQBqAGBaIhGA5g");
	this.shape_3.setTransform(-136.2,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/QgOgbAAgkQAAgkAOgaQAPgbASAAQAUAAAOAbQAOAaAAAkQAAAkgOAbQgPAagTAAQgSAAgPgag");
	this.shape_4.setTransform(35.7,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBBQgQgbAAgmQAAglAQgcQARgbAWAAQAXAAARAbQAQAcAAAlQAAAmgQAbQgRAcgXAAQgWAAgRgcg");
	this.shape_5.setTransform(-38.2,52.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai8AHQgQhQAagdQDJg3CggLQAXBsgXBBQgLAigQAMQg9AVhMAmIhuA7QhNhAgUhigAADhqQhTAPhBAbIgDAMQgCAQACAUQAJA8A2BKQCThFBVgfQAWgTgBhAIgHg8QhcAHhCAMg");
	this.shape_6.setTransform(38.3,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#564A3D").s().p("AiMBFQgehJgDhEQC6g5CcgNQADAJABBBQABBFgFAZQglAOhLAiIiZBFQgQgHgchDg");
	this.shape_7.setTransform(39.1,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACuBkQhagshLgUQjTg5ivBoQgGADgJgBQgKgCgHgGQgFgcAVg1QAVg4AZgUQAJgLAWgPQAtgeBFgQQDbgzF7BnQAaAcgRBRQgTBihNA/QhUgtgzgZgAEuB3QA3hJAIg9QADgTgDgQIgDgMQmtiAjCBfQhbAtgYBaIAwgWQA/gXBKgHQAegDAfAAQDPAADhCGg");
	this.shape_8.setTransform(-48,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#564A3D").s().p("ABDAjQhbgjhAAAQhPAAhnAUQhrAYgPAYIAuhsQAJgNAYgRQAugiBFgTQDcg8FzBxQgCBDgfBKQgbBDgRAGQi8hVg9gYg");
	this.shape_9.setTransform(-49,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3BDA3").s().p("AgGAtQjZApgXgHQgPgEgzgnIgwgkQgHgeBZgcQBMgZCEgTQBigPCxBbQBYArBFAwIhGApg");
	this.shape_10.setTransform(-52.6,32.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A322B").s().p("AAwBqIi7A4QiMgmjSgkQmhhHlSAPQEiiEHHiVQONkrNChOQifBRjVCDIi3BxIBwBOQBuBWADAmQn8B0gHAjQg3CHjXG4g");
	this.shape_11.setTransform(39.9,-76.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADAhQhIgDhCgTQhCgQgigcQCBASBwAFQCsAIA6gdQg0BBiWAAIgfgBg");
	this.shape_12.setTransform(7.2,98.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAVQhDg1AKgVQAFgPAFAAQAJACA3A4QA1A2AUADQADABAAAJQAAAJgDABIgIACQgaAAg4gwg");
	this.shape_13.setTransform(-48.5,127.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxA1Ih7hNQhCgqgXgFIg0gGQgXgEgTgIQgEgCAAgEQAAgEAEgCQBEgdBXAmQA8AaBIA/QAeAXBRAmQBcArAWgPQADgDADAEQACADgCADQgRAWgjAAQg4AAhog+g");
	this.shape_14.setTransform(-38.4,116.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A322B").s().p("AhBARIAAgBIAIgBQA1gOBGgYQgoAXgaAKQgbAOgSAAQgMAAgIgHg");
	this.shape_15.setTransform(-87,-72.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3BDA3").s().p("AiOJ5QjfAAh4gxIlZoSQArhkAOgdQAIgTAlhAIAig9II0DVIFLAWIA1AKQBAAMA7AFQC8ATBCguQANhHgXkDIgaj1QBlhZBOATQAmAJATAcIgKDnQgLE+gDGzQn5Dxm5AAIgDAAg");
	this.shape_16.setTransform(-33.5,94.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDDAC0").s().p("AkNRVQhBiDiTjUIiFi7IiHAFIloomIDZqWIHeCkIA8qyQCRgCDSAOQGmAbFLBRQB9gjB3gkIBwOlIhRCKIgFPIQi/BVkBBBQkeBHjlAAQi2AAiUgug");
	this.shape_17.setTransform(-55.1,42.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#564A3D").s().p("A54KHQgol+A4mqQBfhAB9gsQCOgxA6AbQB3iTCLibQEVk2BkgmQE9gDHbASQFNAMDVANQDOANEPAnQFxA1BKA3QjRBujCB2IiYBhIt3CqQt7CqgZAAIi+AAIgKCoIl3GLIiZgnIjAHuQgfhpgUi+g");
	this.shape_18.setTransform(-3,-65.4);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-173.6,-161.6,344.6,323.2);
p.frameBounds = [rect];


(lib.HandFront = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsE2QgfgBg6g5QgfgehChMQgcgzAUjHQAUjCANAFQBSAHDrgXQAoB4A0B6QAoBaACAUQAMAtiCBxQh+BtgtAAIgBAAgAjLhVQgSCIAGAjQAFAcBPBOIBWBVQBthEAkgcQBVhCAYhDQglg4gghkQghhwgSg1QgZAMhkAEQhiADgrgHIgaCwg");
	this.shape.setTransform(-13.8,-24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADtN5QgigigohKQiBAChNgYQhzgjgphbQgDAng8gWQgogPgjgZQhFgyguhOQgnhDAHhvIAHhbQAEg1gGgmQg6hfAgk2QALhuAUhtQAShfAKgZQgrhKgchYQgtiJBDgCQAhgLD6ANQEGANASgCQAYgCAiAHQAvAJgTAWQAkAxgWBHQgGATgwBhQBFBBA5B4QAhBEA7CJQAqAMArBSQAOAbAnBbIABAEQANAgAoBUQAbBOgiAqQgoAxhXgLQhBgIhCgjQAjBUBOCxQA+CdAHB0QAEBAgTAvQgWA4g0AWQgRAHgSAAQgoAAgogogAgtEQQAtBgBrDDQBwDMAfAqQAoA3AlgBQAqgCAPhJQANhAgchWIgyiEIgEgMQglhtgVg3Qgkhhgng8QhbBBiIAigACGLTQhKiDgyhcQhciuACguQhWARhIgLQAEAPAgCdQAVBqAjA8IACACQAlA9BVAVQAqALByAEIAAAAgAjSJgQgbhLgThPQgZhlADg6QgzgRgmgbQgmgagfgoQgCByABAbQAFBSAaA3QAhBFBTAsQArAWAlAKIAAAAgAnElgQgYCHgEBjQgFB7ArBWQAzBlB4A4QAGACBKgEQBPgFAagIQCNgqBuhJQgGgfgDgcQgFg3APgBQAGAAAHAPIAIAUQARgbAohkIAwh+Qg2iEgehBQg1hyg5hJQgGAQgRgEQgSgFABgRQABgdAWgsQAbg1AJgeQAPgzgOgmQg4APhZAAIiUgEQhkAAg3gDQhhgGg1gYQgFAMAXBPQAcBmAzBMQARAVgHAIQgIAJgagPIgtDogAELgTQgeA7geAzQAEACA+AwQBJAwA7gDQBCgBADgnQACgXgchJQgVg0gjhHIg+h5QgCA1g9B6g");
	this.shape_1.setTransform(0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3BDA3").s().p("Ag4BGQhSgxAQgfQAMgbAngxIAjgsIAsByQA5B2A9AdQhkgMhSgxg");
	this.shape_2.setTransform(31.7,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD9927").s().p("AirAtQg1g3gFhXQAgAWBKAJQCQAQDQhKQhEBnhLA9Qg5AuhNAmQhSgigpgtg");
	this.shape_3.setTransform(-13.7,-7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AiKD4QgvgegVgsQg5h3BKlHQAtAQA5AFQBxAKA/g2QAdBeA8CQQAeBGAYA1QghAyg0A1QhoBrhgAUQg6gegbgSg");
	this.shape_4.setTransform(-13.3,-24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Al2C4QANhoAYh7QAYh9AEgfQAIhFgIgxQgLg3glg+QA1AUBnAMQDMAYD7gnQgUAlgMAnQgGATgCAMQCZEKAIAeQgdBCgwBPQhSCKhWBNQhlBZheAAQihAAiUj7g");
	this.shape_5.setTransform(-11.8,-32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AjiIzQiQg9gYkAQgXj2Bfk+Qg/h+gOgkQgdhMAWgdIJ4AbQATAGAFAiQAKBChHCGQA0A6BUCgQBMCNAPA0QgdBtgiBQQgoBhglAbQAHAKASASQAMAPgRALQhRAyh1AnQhuAlhZAAQhGAAg3gXg");
	this.shape_6.setTransform(-9.3,-31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDAC0").s().p("AAPDcQgygSg0glQgzgigXghQAMioAghaQAnhwA5A7IAdAlQAlAuAeAuQBgCTgKBiQgIBJhDAAQgdAAgqgOg");
	this.shape_7.setTransform(34.5,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3BDA3").s().p("AhhDzQhggQg/hEQh3iAAmkRQBeBkCHASQCxAWDaiCIAdAnQAdAqACATQhBAVg9AiQh6BGASBCQhBg7hdAAQgmAAgXALQgYAMAFAUIAhB6QARBOgYAAIgCAAg");
	this.shape_8.setTransform(-10.5,37.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDDAC0").s().p("AFaGAQgogPgyg2QgqgsgTgjQh/AKhagfQhRgbgug3Qjsgngpj0QgMhNAIhYIALhJQCHC6DHgiQBGgMBdgrQA0gYBfguQAiAUBWDwQAsB2AkB0QAgEAhUAAQgMAAgPgFg");
	this.shape_9.setTransform(-2.3,50.8);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-92.9,107.4,186);
p.frameBounds = [rect];


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
	this.shape_2.setTransform(-26.9,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDDAC0").s().p("AEBHzQgUhFAIguQASgqAPg9IAWhZIBHAfQA4AgAUAfIgJA2QgVBogHAVQgaBNgyAUQgLAEgJAAQgkAAgVhDgAARG4QgRg2AAhSQAAgvAChgQAWgIAXgTQAzgqAnhQQAbAZAYAjQAyBHAEBKIgBAFQgVBbgiBGQgiBEgvAfQgUAOgRAAQghAAgSg4gAlrHhQghgDgjgKIgCgBQghhuAvi+QAsitA3hWQArhBArATQApARAMBJQAQBigPCXQgOCPgoBbQggAvhKAAIgXgBgAg1BFQgti1AukLQAShmAZhQIABgEQAqApAoBAQBlCkgsC9QAdhfAVhMIgVBXQgbBqgaA7QgWAxg1A1QggAfgUAAQgXAAgKgmg");
	this.shape_3.setTransform(1.9,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABESDQjehXhlhVQAbg7AaiLQApjUgdh0QgLgqgQggIAmguQgEByANBTQATB+A2APQgDATgBBZQgCBiADApQAHBNA5ArQA7AuBAgxQAdgXAYgjQAEATAEAQQATA5AtAgQAyAlA0gcQBMgnApjCQAiikgMhoIAAAAQAEACASAAQAqAJAdAbQAYAXARApQANAehfDYQhhDdg1ArQgKAFgRAAQhGAAi+hLgAo4MDQgLgNgIgFQgBAAB1mdIBhlYIASgHQA3gVgGATQgGARhbFqQgsA9guCMQgxCZgIBHIgRgUgAkciUQgSgHhKg5QAPg+ADgVQAmAfAUAMQAqAcAZgCQADgECYniICgoFQAAgBA8AlQkfNMghBsQgWBLgfATQgKAHgNAAQgOAAgQgIgAnhkmQAVhKAFgaIAhAkQASAUAPAOQgCAYgQA/IhKg5g");
	this.shape_4.setTransform(7.8,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AlbL5QADnYAGhwIgBAAQAIgDC/grIBFgPIgHBCIhEAKQh7ATgEAGIAAAJIgBABIgBAkQgPGfAOAvQAAACBEgDIAIAAIhaHaQguALgNAFIACnFgAmHCkIACgBIgCAygABUkHQhwhsgDgQQgCgMB0mMQB3mKAFgHQAFgFCkgLIAQgBIkkPGIgQgQg");
	this.shape_5.setTransform(-39.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AgfR/QjHhThchAIgXgsQALgLAKgXQBmBUDeBYQDtBdAxgXQA1grBijdQBejYgNgeQgQgpgZgXQgdgbgpgKQAaAAA6gEQBfgGAXAIQgTBjh1ETQh2ETgtAvQhzgEjihggAlAEVQg2g3hDAzQgPAMgRAXQBcloAFgSQAGgTg3AVIgRAHQAahdACgOQgGgFgZACIgZAEIgCAAQALgcAQhIIABgCQBKA5ARAHQAgAPAWgOQAegTAXhLQAhhtEftLIAGAEQBFAqAHABQgIAPiNHbQiIHbgCAEQgkAdghCEQgfB8gMCaQgDAngBAkIgnAtQgPgcgTgUgAo3kkIARg7IBKA5IgGAYQgUBJgLAcQgFAAgjAHQgqAJgNABIApiMg");
	this.shape_6.setTransform(14.7,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDDDD").s().p("AgZBGIgugBIApiPIAeAHQAmAJAiALIghB6QgVgEgrgBg");
	this.shape_7.setTransform(15.5,-133.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AAACAQAKgaALgzQAMgxgDgCIgMgBIAhh8QA2ARAqAVIhQD5gAhrifQABgFA4AMIgpCRQggABgXADQAThcAUhAg");
	this.shape_8.setTransform(17.6,-125.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-80.6,-146.4,161.9,296.4);
p.frameBounds = [rect];


(lib.Foot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjJChQgggQgSgeQgIgNgHg6QgHg8AOAIQATAIAIAtQAJAwARAPQAkAeA9gQQBmgaB9hfQAngbAUgTQAogngCgYQgBgOgxABQgRABgrAEQg3AGgyAKQhVAQgDAOQgGAagVgMQgWgMAIgYQAIgYAsgRQAggMAqgIIA9gJIANgBIARgCQA7gHARAAQA7gBAcAaQArAng6BGQggAmhAAtQigB4hzAIIgKAAQgeAAgagMg");
	this.shape.setTransform(-0.4,-5.3,0.433,0.433,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD9927").s().p("Ah+CEQgjgCgqgmQgsgpALghQATAJAXgCIAQgCQBzgMBcgdQB/gqBKhHQAtA8i6BrQhBAmhGAfQg/AbgQAAIgBAAg");
	this.shape_1.setTransform(-1.3,-4.9,0.433,0.433,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AiuCNQgqgtgQghQgQggAEgfQAeguBNgoQCYhRDnAhQgFAdgrA0QgsA1g+AtQh/BkhjAAQgVAAgTgEg");
	this.shape_2.setTransform(-1.1,-5.2,0.433,0.433,38);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-12.1,-12.7,24.4,12.8);
p.frameBounds = [rect];


(lib.DeadEyes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNA4QgLgKACgXQABgJAGgZIAEgSQADgKADgGQADgGAFgDIAAgBQAEgDAGABQAHABAAAGIADAJQABAEgBAEIgIAfIgFAeQgFAUgHAIQgDACgDAAQgCAAgDgCg");
	this.shape.setTransform(-1.4,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AACBUQgOghgDgxQgCgqAJgoQABgGAHAAQAFAAABAGQAEAQABAWIABAnIADAoQACAZgCASQAAAFgFACIgDAAQgDAAgCgDg");
	this.shape_1.setTransform(4.8,-10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAiBfQgWgEgQgaQgMgQgMgfQgTgqgDg9QAAgIAIgBQAIgBADAHIAQAzQAKAdAJASQAEAIAVAaQAQAUAFAPQACAHgFAFQgFAEgFAAIgDAAg");
	this.shape_2.setTransform(9.9,-9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhYBAQgLgJgEgNQgZgaAIgmQAGgbAbgOQAXgNAdAEQAXADAiAHIA6ALQAXAEAMAXQAMAWgGAUQgJAfggAJIAAABQgnAFgUAAQgSANgTgIQgHgDgQAEQgSAEgGAAQgOgBgLgJg");
	this.shape_3.setTransform(1.1,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAkB1Qg1gfgWhGQgTg8ANhEQACgHAHABQAIACAAAHQgBBCASAvQAQA0AsAtQAFAHgFAHQgDAEgEAAIgGgCg");
	this.shape_4.setTransform(-7.5,-88.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAwDLQgvhegbhmQgehngGhmQgBgIAIgBQAIgBADAHQAdBOAcB5IAyDHQABAHgGADIgEABQgEAAgCgFg");
	this.shape_5.setTransform(0.1,-90.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgBEaQgHgegEguIgFhMQgKh5gBgYQgEheADgnQAFhOAYgzQAFgLANAEQAOAEgBAMQgBAZgIAvQgJAwgBAYQgFBJADBHQACAqAHBaQAEBPgMAzQgCAFgFAAQgEAAgBgFg");
	this.shape_6.setTransform(6.2,-95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDAC0").s().p("AgPCBIgPgCIgHAAQgaAAgWgNQgXgNgNgWQgWgmARguIAAgJQgDgYALgaQAEgOAHgLQAZgrA0gBQAyAAAaAsIANAbQAJAFAFAJQAOAIAUAQQAXATAEAhQADAhgPAaQgaArg3AEIgLAAQgVAAgYgFg");
	this.shape_7.setTransform(-1.5,-83.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-14.9,-123.9,29.9,124);
p.frameBounds = [rect];


(lib.DeadBlood = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("Aj0DcQhNgLgLAAQhVAFhUgBQikgDg4gfQg/gLgpgsQgsgqAbhEQAYg6AjgKQArgUA/gVQB8gqB3gMICrgRQCPgOApgGQErghCsgDQFPgIBKBOQAmAdAKAoQALAngUAqQgWAuhMAlQg/AkitAdQiPAZgVgDQh7AtiPAIIiGgCQgyAFgxAAQgsAAgrgEgACDC+QAqgFA1gRQAogLArgKQBKgQAoABIB3gWQCAgcA7gcQBjg4gOhGQgIgjgbgYQgegmhMgPQg2gLhXAAQh0gHiyANQiXALiiAWQgpAFiQAPIiqARQg8ADgxAKQhYARh6A4IgBABQgyADgPA5QgPA4AbAUQAOAQAqARQAVAJASAFQAgAYBZAIQBiAJCdgNQBPAOBmgBQA0AAApgDQBtALBQgKg");
	this.shape.setTransform(-2.1,-19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("AhWDNQhoAIhTgNQglgHg1ADQg8AEgeAAQgyABhggMQhlgNgSgLQh+glAJhUQADgeAUgZQARgYAOgEQB2gtAwgQQAwgPHAgvQHKgwCCABQCFABAjAEQBvANApAzQAhAXAKAiQALAjgTApQgVAphFAiQg5AbjBAlIjBAhQhKAXg8AKQhDAMhNAAQguAAg1gFg");
	this.shape_1.setTransform(-1.9,-19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-41.6,170.7,44.9);
p.frameBounds = [rect];


(lib.Body = function() {
	this.initialize();

	// bodygraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA+CDQkRg2iMg2QgMgjAChPQABhIAHgNQgBACFCBCQFXBHAoAKQANAXgCBNQgBA4gFAwQhDgDjjgrgAlOhFIACBKQB7AhCUAgQDRAuCuAVIAEhEQABgqgGgbQgagMkuhAIlChDQgGANABA9gAlhiwIAAAAIAAAAg");
	this.shape.setTransform(-16.5,68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgF9QjIgTikhuQgggUAAkKQAAj6AThkQCiAiDsAdQDLAZA8AAQAJATAZEqQAaEzgSABQhqA4iPAAQglAAgogEgAksDqQBZBACJAgQCMAhB5gVQAbgEAsgOQAzgRAUgEQgMhFgOj7QgNjoACgLQhZACjOgbQjTgchmgbQgXFpAnDVg");
	this.shape_1.setTransform(-16.2,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBxIgIgBQgugGAtAFQg3gIgZgqQgWglAJgvQAIgvAegaQAggcAnATQAxgJAhAkQAeAgAAAwQABAygeAgQgdAdgvAAIgOAAgAgbhNIgCABQgaAKgNAWQgPAZAGAcQAHAeAXATQAaAUAjgDQAkgEATgYQAUgagLggQgKgegigNQgngPgKgMQACACgOACg");
	this.shape_2.setTransform(-11.4,-46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBlIgIgDQgXgJAPAGQgngUgPgpQgRgsAYgqQAXgpA1gKQArgKAxAPQACABARAXQARAWAEAJQAUAmgLAkQgOAwg1AUQgZAJgWAAQgUAAgUgHgAg7g3QgxAvAoAuQAoAuA5gPQAfgJAOgaQAPgbgNgbQgHgOgcgSQgcgRgDgKQgyAFgTATg");
	this.shape_3.setTransform(-42.1,-52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AH8TSQkxgRlxhmQmIhskZicQgcheA+q4QAjmJAJh3QASkDgIhZQhxAnhMgGQhrgIgVhkQgPhIBBg1QBAg1CcguQFeiSHWAJQDtAEC5AjQATABA9AAQA3AAAeAEQBgANAYBFQAeBbhCAxQgWAQgkANIguAPQCwGvCmKWQBFEUAnDRQAnDUgHA9QgIAwiABxQh6Bsg7AWQgyAThHABIh9gDgADor0QAIAegHAFQB/FSCRKMQCQKQABDtQApAAABgBQADjuiIqIQh/peiEmqIgUgRQgJgKgCgNQgKAEgPABQgQAAgKgDQAIAUAGATgAhQytQmDAGjJBbQBUA5gFBQQgFBQhYA1QAUCRg7LNQgeFogICEQgODqAOA6QD8CRG2BmQF+BZEqAJQg8msicq3QiLpqgziKQg4AZhngOIifggQmth1AaguQgFAJCqA6QCiA3AhAGIC0AoQB6AUA4gfQgGg+gXgZQgXAIhJgBQhXgChdgUQkNg4iZilIADgKQAIgMAXgJQAbgKBQgPQBpgSBvgHQFGgUDrBXQASANgCAWQAAALgEAIQgFATgoBDQgoBEgTAVQgJAVALAaQAKAYANADQAcAGAhgvQAtg+AkiIQgHgTgKgnIgPg6QhGgfiPgRQh9gPiPAAIgjAAgAJGCfQCkLHgKEMQA1geBahHQBohRAcgtQgEhCg2j4Qg5kBhOkoQjKsAiJkMQg1EDhZgRQBsE/CJJOgADKtLQAEAKAFAPQAcAHAdgNIAAgSQAAgNAEgKIA7hbQAmg5AMgjQgGgJgbgHQgdgHgGgDQgRBXhxAeQhhAaiIgUQh/gShZgtQhcguASgrQgtAGgXAEQgqAIgfAOIAqAlQA5AsBGAkQDeBwENgSIABgBQAOAAAIASgArOwpQg5ANg9AVQh6ArgcApQgeArAwAmQAsAiAkgGQBdgSAQgFQA+gRAlgfQAxgogNgzQgNgzg9gRgAINwrIAkBLIBRgVQAngUgQguQgPgpg4gKQhFgGgegFQAFAXAZAzgAk6xSQgMAjBfAhQBZAeB9AKQCCALBRgUQBdgXgPg7QiFgkidgBIgGAAQhxAAixAUg");
	this.shape_4.setTransform(-1.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AhGBAQgegaAAgmQAAgkAegbQAdgbApAAQAqAAAeAbQAdAbAAAkQAAAmgdAaQgeAbgqAAQgpAAgdgbg");
	this.shape_5.setTransform(-11.1,-46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AhFBCQgdgbgBgnQABgmAdgcQAdgcAoAAQApAAAdAcQAeAcAAAmQAAAngeAbQgdAcgpAAQgoAAgdgcg");
	this.shape_6.setTransform(-41.9,-52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AlQgYIgDgsQgBgrAEgCICuAyQDjA5ETAeIAABag");
	this.shape_7.setTransform(-17.3,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AABDiIgYgIQgBhcgEhkQgJjGgTgmIAZAJQAcAEASgdQATBMAPCbQARCxgSAkQgNAJgTAAIgPgBg");
	this.shape_8.setTransform(63.9,95.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ai7AdQBHgOBTgVQCkgvA4gtQAGA+gaAsQgcAwg4APQhkAbg4ABIgDAAQhiAAgNhGg");
	this.shape_9.setTransform(-83.2,-90.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAjBXQingShNgaQhogkAAhAIBDgMQBSgMBRgFQEAgQCLBBQALA1hJAoQg+AihcAAQgdAAgggDg");
	this.shape_10.setTransform(-2.8,-105.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ahkg9QAUAHCkgTQAyBIhdAsQgdAPgmAKIgiAHQgKgygehWg");
	this.shape_11.setTransform(58.6,-101.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AhPCUQh4gGgPiYQA9glBHgjQCNhHA0AGQBEAcAZAzQAlBIheBXQiTA5hGAAIgJAAg");
	this.shape_12.setTransform(-84,-95.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAqC7QiSgIjjh7QgLhgABhPQAEg7gCgJIBBAXQBQAaBRATQECA9CngkQAMA8ASCtQh9AeghAGQg/ANg2AAIgZgBg");
	this.shape_13.setTransform(-15.8,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AhfFVQhggZiJhRQgVgyAGkWIAKkOQAlATEuAkQCYASCQAPQAUEsAXElQiJAuiAAAQhYAAhXgXg");
	this.shape_14.setTransform(-16.1,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AggBfIk3hOIgBisIKnCRIAIAtQAFA6gLA7QgKAEgTAAQhTAAkBg9g");
	this.shape_15.setTransform(-16.5,67.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C4C4C").s().p("AIbSOQgBgFgKiBQgLiZgciWQgjjCisqlQisqsgbgyQi3gDi8gvQkIhBg5h2QB4gpCsgTQFXgmELBzQgOAsg0BVQgsBHADANQBXEmBXE5QCuJvAZC5QAcDMAPDcQANDIgJAGQgOAJgTAEIgLABQgSAAgFgOg");
	this.shape_16.setTransform(8.8,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#44757A").s().p("AgOE7QoQhhlwjZQgYlWAYgfICpBMQDUBWDZAxQK1CgHfkFQAeAsATCrQAKBTAEBNQhCBBhSBAQiiCChLABIgeAAQjRAAk5g6g");
	this.shape_17.setTransform(10.6,83.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44757A").s().p("Aj1C9Qi+hMiOhTQgGgQgLhCQgNhKgRg7QD9iLGSAQQEfAMDfBHQBaCagHCHQgLDIj2AnQguAHg1AAQjTAAkuh5g");
	this.shape_18.setTransform(-9,-92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("Ah0hSQAAgaBBgIQA9gIAgAQQAdAOAZA9QAZA3gFAcQgFAUhOAbIhLAXg");
	this.shape_19.setTransform(56.8,-106.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5596A5").s().p("AksQlQjJg+jGhNQijhAgwgaQgHgLgGhQQgHhcABh0QAClBA5kLQA2kCgRlTQgIipgTh1QgNh9CMhGQB4g7DdgOQC7gMDdAWQDGATCJAkQByCaDZMrQDGLeAzFgQgZBki7BrQhdA2hYAhQguAHg4AAQkGAAnaiWg");
	this.shape_20.setTransform(10.6,0.2);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-123.8,214.6,247.5);
p.frameBounds = [rect];


(lib.ArmShoot = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArYC7QhJgTguggIgegbQFNBjHLgOQDmgHC7gfQgngpgEheQgBg6ARgfQhzAahmAPQkOAmiIAFQk7AKjdhWQgFgCgEgNQgDgOALABICzAmQCLAZCggCQHQgDLijVQAXgHAPAZQAPAagNADQgzAOjOAvIkHA6QghAkALBUQAKBYArATQGhhlAwgcQARgJAOAQQANARgQAMQgcAXgxAOIhUAVQhCAWhHAUQiKAniVAWQi/AcjLAAQknAAlDg7g");
	this.shape.setTransform(8.4,-48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AjOAbQgHg8AMg7IB8gZQCSgdBygTQAyB7guBNQgPAZgWARIgUANQhkAkiDAoQhcgOgNh9g");
	this.shape_1.setTransform(83.3,-53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#44757A").s().p("AgFBsQjDgggsgeQhIgvgVg0QgehKBxgWQB4AsCBAbQC1AmB9gPQgHAHgIAMQgQAXgGAXQgSBPBiA9Qi1gOiogcg");
	this.shape_2.setTransform(-54.8,-41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5596A5").s().p("ApHAqQhyhMAZhCQALgbAegKQAggKAmANQBQAdAiAJQBiAaB1AKQFVAcIGhtQgRAbgCAuQgGBaBMBiQlNAWj5AAQoSAAiVhkg");
	this.shape_3.setTransform(-21.4,-42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AkqB5QgthkAyhNIJIiUQAYA2AEA8QAKB3heAjQheAkjIA4Ii4AxQghgjgWgxg");
	this.shape_4.setTransform(70.9,-50.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-89.3,-72.6,193.6,49.3);
p.frameBounds = [rect];


(lib.ArmFront = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApVN5Qglg4AUhKQAAiDAnibQAchvA7ilQBnkYCMi6QBKhjBwh5QA/hGCFiKQBnhrA8gtQBkhMBggLIABgBIADAAIABAAQBcgLAXBCQAWA+g3BEQgqAzhQBGQhqBcgXAXQk1ExhxEAQg5CBgxDdQg9EYgXBMQgXBIgyAzQg4A4hHAIIgVACQg+AAgigzgAoIHzQg6DgAWB4QAMAiAtAAQAmABAfgTQBBgmAfheQAKghALgyIAQhRIACgHIAmiqQAYhpAUhHQgjgmg6gEQhGACgkgEQhFC0gnCZgAknB9QA6AHAmAhQBLjtC8jvQCFinDTjAIApgkQA+g4ASgUQA5hAgagYQg5g2iSBtQhOA7hhBlQjnDzhjB+QipDVhUDSQAngOAoAAIAbACg");
	this.shape.setTransform(-0.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44757A").s().p("AkNEXIhzAKQAEgvDOjMQCuiqCLh1QBmhUBCABQA5ABAUA+QAPAsjXDZIi4C0QhpBqgxA4QAAg1hzgCg");
	this.shape_1.setTransform(19.2,-57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5596A5").s().p("AmSHsQg9AAg0AQQAQhQBeiXQBXiNCCiiQCAikB7iBQCFiJBXg2QCkhnA0A4QAVAWgFAsQgFApgbAtQlpEziJDEQhEBig3B4QgnBYg/CuQgphVh5gBg");
	this.shape_2.setTransform(6.4,-34.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhWBDQgtAJgZAaIA8jQQBug1BTAcQAqAPASAZIgPA5QgSBMgWBkQhkhbhYAQg");
	this.shape_3.setTransform(-35.5,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AjCE+QASiaAbijQA1lEAvgvQBQgaBOAQQBZARgEA/QgFBXgtDVQgzDqgiAiQgMAMghAnQgfAlgbAQQgZAPgZAAQg0AAgwhFg");
	this.shape_4.setTransform(-40.3,53.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-62.9,-94,124.6,188.1);
p.frameBounds = [rect];


(lib.ArmBack = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApcDjIhth8QhBhNgeg3Qg1hoABgDQgDgVAVASQALAJALAMQAfA4BGBTQAbAgBMBWQBNBYBHA4QBXBDBcAiQC9BFDYg1QDLgwCkiIQhMgKg5g7Qg4g7gHhNQiSC0jpAPQjtAQimiiQiIiCh3jjQhUirAiABQAOABAkBFIArBWQCJDmB3BkQCsCVDTgXQBqgMBYg5QBQg0BFhcQA0hHCFjeQAfhdBqgUQBdgSBNAuIAJAGIAJAGQA+AtAMBTQAKBLggBUIABACQiBELjmCqQj2C1kZAHIgUAAQk1AAjjj9gAIgl0QgQARhaCPQhgCagiAtQABBWBfBAQAlAZAlAKQAlAKAQgKQBLhHBBhbQA+hUAuheQAWgsgOg8QgNg6gmgqQgogugwgDIgJgBQgyAAgtAyg");
	this.shape.setTransform(0.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AiZCUQgagrgRg5IgLgwQAohLBhiMQBdg2BYA0QBGAqAUBCQAQA2gYBFQgbBShYCCQgtARglAAQhbAAg6hfg");
	this.shape_1.setTransform(62.7,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDDAC0").s().p("AkIBgQA/hiBBhkQCCjJAKgCQBVgPA7ANQB/AcgLCMQgLCUhzCgQgsA9guAqQgrAngTACIgWABQi2AAgujag");
	this.shape_2.setTransform(55.7,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44757A").s().p("AgTFQQjqiDixlNQgZiyACg6QACh4BHAxIBMCfQA3BrA9BPQCsDfEBA8IgGAaQgDAhALAgQAlBoCvA+QkrgPivhjg");
	this.shape_3.setTransform(-41,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5596A5").s().p("AqwiDQgKgSgLg+QgMhFAAg8QAAioBfA6QAbBCAzBZQBmCxB3BzQCnCgCwAOQDeASDjjUIANBCQALAoAUAdQA3BMCeAeIhxBJQhLAwg7AeQisBZiaAHIgZAAQmiAAmKpUg");
	this.shape_4.setTransform(-16.4,-0.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-88.6,-48.1,175.7,96.2);
p.frameBounds = [rect];


(lib.GreenChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AglCRQgxgWgmgzQgog2ASg4QAQg1A5gqQAageAbAHQANAEAmAbQAKAHAsATQAjAPANASIACAEQAfAugYBAQgXA/gzAfQgaAQgcAAQgYAAgbgNgAgph1QgZABgiA2QgeAuAUAvQASAsAvAZQAtAZAqgOQAugPATg4IAEgOIABgEQAIgngWgXQgEgDg/goQg0gigTAAIgBAAg");
	this.shape.setTransform(0,-15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AgsB0Qg3gTgVg9QgMgkASguQASguAhgWQAfgWA3AgQAtAZAeAkIACADQAmAsgSAtQgQAqgzAVQgcAMgaAAQgWAAgVgIg");
	this.shape_1.setTransform(0.1,-16.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-15.3,-31.7,30.7,31.8);
p.frameBounds = [rect];


(lib.GreenChunk2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgfEYQgigLgogrQgsgwgXgfQgng2gBgmQgCgXAjgqQATgXAhgkQAqg0ATgeQAegxAHguQAOhUBeBqQBMBUAgBDQAdA/gDAtQgDAzgoA1QgjAugTAVQggAlgfAVQgeAUgcAAQgNAAgNgEgAguiGQgdAwgtA3QgZAfgMASQgWAjAJAUQAIAUARAXIAfAnQAtA7AWAQQAsAfAqghQAbgUAbggQAQgTAXggIAHgJQAmg3gFg0QgEgrgnhAQgfgygZggQglgvghgWQgPA5giA6g");
	this.shape.setTransform(0,-28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AgPgLQgBgEAYAUIAIAIIgfgYg");
	this.shape_1.setTransform(10.6,-45.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E9140").s().p("AgqD8QglgUglguQghgqgTgsQgIgUACgZQACgbAOgNQAMggAggrIA/hNQAEgFAdhFQAUgyAbgBQASAAAXAgQAVAdACAUQBZBFgHB+QgGB2hKBGIgJALQgdAfgeAMQgRAHgNAAQgUAAgTgLg");
	this.shape_2.setTransform(-0.4,-28.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-21.4,-56.9,42.8,57);
p.frameBounds = [rect];


(lib.GreenChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AhpDZQgIgCgUhAQgXhLgDgFQgeg7gJgfQgPg0ANguQANgtApgjQAugoAqAPQAQAGAaASQAaAUAMAGQALAFAeAKQAaAJANAHQAgASATA6QAdBWACADQAwBbgyA4QgtAxhnAGIgdABQgyAAg8gKgAh1iuQgdASgRAmQgNAfAJAqQAEAVATAwQAfA8AHARQAUAsADAmQAyAHAhAAQAtAAAlgLQAlgLARgIQAfgQAHgYQAIgYgVgoQgagrgHgPQgLgrgHgVQgNgmgdgKQhHgagwghQgRgLgQAAQgQAAgRAKg");
	this.shape.setTransform(0,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AhsCjQgPgvgJgRQgohNgGhPQgIhsBKgbQAPgFARADQASACAMAKQAOAMANACQAXAEAGACQAgAJAdAZQAbAWASAeIAGAKQAQAcALAjQAaAOAEA1IABABQAFARgCARQgDASgJANIgGALQgTAkgsAPQgIADgHgEIgEABQgYAFgrgBQgwgCgTACIgHABQgeAAgQgig");
	this.shape_1.setTransform(0.8,-22.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-20.7,-45.4,41.5,45.5);
p.frameBounds = [rect];


(lib.EnemyBeaverFace = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBHQgRgdAAgqQAAgoARgeQASgeAXAAQAYAAASAeQARAeAAAoQAAAqgRAdQgSAegYAAQgXAAgSgeg");
	this.shape.setTransform(-8.8,-131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBLQhLgFg0gVQg4gYARgbQAwhWCbAPQAhAEAoARQAzAXgCAZIABACQATArg1AVQgkAOg6AAIgggBg");
	this.shape_1.setTransform(-3.4,-90.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("Ai9F/QhqgUhPgxQi/h2A1jTQApiiCFhqQCHhrCygFQC0gFCkBPQDGBgAHCpQAHCvi1CHQidB0i8AWQggAEgkAAQg+AAhAgNgAgNlnQi8ACiBB0Qh1BngaCNQgdCeBxBmQB6BvDJgIQC0gGCPheIAFgDQBLgxA1hFQA2hHAPhKQAliqiwhlQidhYimAAIgKAAg");
	this.shape_2.setTransform(0,-76.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AhDEMQhagDgohGQggg3gEhUQgCg1ALhbQAEgjANAIIAHAHQADAEAAgEIADBbQACBBADAZQAFAtAFAUQAJAlAUAWQAqAtBdgRQBNgPA4goQA4goANhKQALg5gQhNQgMg4gdhNQgKgcARgUQARgUAMAgIAEAJIAFAPQCEFtjnBdQhSAhhAAAIgIAAg");
	this.shape_3.setTransform(17.5,-26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AhjCjQhMgngDheQgBg8AghmQAVhAAOAEQANADgMA0QgQBJgEAYQgLA+AHAiQARBeBwAFQAkACCGgYQAlAJg5AaQg2AYgVABIgSAAQhdAAg5geg");
	this.shape_4.setTransform(-18.4,-23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("ADdFcQgFgDALgeQAUg1AIgpQAVhtgJhnQgSh3gRgrQgkhZhEgnQhMgthdAWQhZAUg9BFQhEBOgOB5QgMBiAbB3QAKAuAWBJQgWAGgKgMQgBgCgQgkQgihPgEhpQgChZAchbQAfhhA3hEQCGimC/BZQCiBKAYDwQAKBhgRBqQgQBjgjBNQgbgMgEgDg");
	this.shape_5.setTransform(5.2,-143.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAOQgkgKAIgOQAIgRAkAGIAvADQAdACARAFIABAAIAAAAIABABQAfAKhFAXIgLABQgbAAgjgKg");
	this.shape_6.setTransform(-17.1,-12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAAQAAgWAWAAQAWAAAAAWQAAAXgWABQgWgBAAgXg");
	this.shape_7.setTransform(-28,-17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAWQgLgEAAgSQAAgPAQgFQAOgGAMAJQALAIgFAKQgEALgMAHQgIAEgGAAIgHgBg");
	this.shape_8.setTransform(3.5,-13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQAzQgPgEgOgMQgSgQAIgNQAGgIAfAAIArAAIBKgiQAwgWAYAKIABAAIAAAAIADACQApAYhlApQhOAhgmAAQgIAAgHgBg");
	this.shape_9.setTransform(19,-12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EADFC3").s().p("ABsDjQhigCgehMQgyBDhxgIQhvgIgqhEQgXgkALhKQADgWAXhYQANg0AHgFQAPgKBGAUQBUAZBfgGQBXgFBYgfQAFgCAqgYQAsgZAcgLQBdgmgIBRIAAACIAAADQgDAjAHA6QAIBKAAAXQACBxhZAyQhLAohMAAIgHAAg");
	this.shape_10.setTransform(1.4,-26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FA355").s().p("AhWC9QiTgBh2g7Qhvg3gOhEIgVg8QgNgtAIggQAjAAA3AeIBJApQA+AdBLAOQA8ALBQAFQCRAGCHg8ICbhSQCWhLgTAjQhrDCirBeQiNBOijAAIgIAAg");
	this.shape_11.setTransform(0.3,-58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0BA5F").s().p("Al3EvQh5hOABiTQACitCIiJQCPiRDLAAQDRAACVBqQCVBqAACVQAACVilB6QimB7jPAAQjXAAh2hLg");
	this.shape_12.setTransform(0.3,-76.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguAAQABgSAMgOQANgPAUAAQAVAAANAPQANAOAAASQAAAwgvAAQgtAAgBgwg");
	this.shape_13.setTransform(20.3,-153);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtAxQgagSgBgbQgCgVASgWQASgVAagHQAagHAYAOQAfASAEAfQACAagTAZQgTAZgbAEIgKABQgXAAgWgVg");
	this.shape_14.setTransform(9,-164);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EADFC3").s().p("AjQEpQhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7QhXB8h6AAQh5AAhXh8g");
	this.shape_15.setTransform(5,-135.2);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-179.4,105,179.4);
p.frameBounds = [rect];


(lib.EnemyBeaverBody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AhaAIQgogNAPgKQAOgKAiAIQAtAKAugDQAigCAugLIALgCQAPgEgiAZQgiAWgNADQgYAFgZAAQgrAAgvgSg");
	this.shape.setTransform(-20.9,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("AAMAFQgMgKgdAJQgcALgEgEQgHgIANgJQANgLAWgFQA3gNAWAkIABACQAMAXgMAAQgLAAgjgVg");
	this.shape_1.setTransform(-64.8,-190.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("Ag+AiQgKgOAPgUQANgRAagOQAagOAXACQAZACAKAWIAAABQAGAPgdgCQghgFgEABQgWAIgVAfQgHAMgEACIgCAAQgFAAgHgKg");
	this.shape_2.setTransform(33.9,-192.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("AhxIGQgNgQAIgPQAPgdAYgfQBChZAbg7QBOiZAWioQAdjVhBhzQgTghgcgYQgegagfgJQgTgFgyAIQgsAIgWgOQgigUBGgWQA9gTAbABQAhAAAiATQAhASAYAbQBUBfAJCuIAAAOQAHC2g+C+QhIDhiFBmQgHAFgGAAQgJAAgHgIg");
	this.shape_3.setTransform(68.3,-79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AigREQhzgKhigjQgYgIgtAaQguAbgggLQi2g+ggk5QgLhsAGiVIAMjVQAOkkAsjfQAZiAAihrQg+gkgWhSQgVhRAQhgQAPhaAqhOQAzhdBPgHQBAgFBmA2QAiASA8geQBXgqAPgEQBmgWBnAbQAKADBRAoQBCAhATgHQAcgMA4gZQAygWAlgIQBUgSBIA3QBBAxAmBcQAlBZgDBcQgEBhgwA7QggAog0ATQAYBCAQAzQAkB0AZB8QAVBmARCEIAXDSIACAYIAAAEIAEAjIABANQAKBnACA5QAGCJgUBmQgaCDhEBXQhLBdhLgGQgogDgcgeQgUgUgLABIgmANQi6A8jGAAQg8AAg9gFgAlbP1IBFAYQBRAPBigBQBOAABkgLQDPgVCOhKQAkgWAcgQQA3gdgGAWQgSA/hZApQBVBTBWiPQAfgzAYhGQAVg6AFglIABgMIABgHIABgFQAOiEgQixQgFg3gmkVQgrlBhlkCQhqkQisiXQjfjFjvCDQhyA+hVCNQg/Bpg0CgQhbEagdFaQgOCzgDCDQgECqANCLQAIBZAQA6QAWBTAqAyQAeAkAvARQA6AVAXgsQiDhZAjgUQABgBA4ApQA7ArAIAEIAEgBQANAAAsAQgAFjwCIgEABIg0AYQggANgXABQBkBOBPB7QBCBnA3CLQBRgfAUhbQARhLgahbQghh2hBg1Qgvgmg7AAQgkAAgpAPgAphu/IgEAIQg0BegIBuQgJCMBVA2QAviJA3hiQBFh7BYhNQgfgGgxgSQgygSgTgEQgJgBgJAAQg8AAgsBMg");
	this.shape_4.setTransform(-11.8,-109.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FA355").s().p("AAcBRQgXgBgXgYQgWgGggg9QgfhAAZAJQAlANAtAAQA9AAAZgcIghB7QgBAogaAAIgCgBg");
	this.shape_5.setTransform(-72.6,-172.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9FA355").s().p("AhCAGIgwhvQBKA8A9AAQAxABAtgkIgWBUQggBYgvANIgFABQgaAAgxhkg");
	this.shape_6.setTransform(44.2,-174.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0BA5F").s().p("ABPEQQgdgMgXhRQgbhqgDgEQgWgrgfgoQgRgYgug3Qg1ghgagYQgxgtBVgRICIg+QCpAjA3CnQAVBBgCBFQgCA/gSAsQgPAkghAjQggAjgZAAQgHAAgGgDg");
	this.shape_7.setTransform(33.5,-189.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0BA5F").s().p("AiADqQgQghgLgLQgxgwAaiOQAVh7AqhFQBSiDDdCCQg6AchzDVQg4BsguBmIgGABQgVgBgOgYg");
	this.shape_8.setTransform(-62.4,-189.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727D3D").s().p("AhVFTQiKgFhkgXQgngUgWgGQgmgMgPAZQgjA7hWgyQhJgqgbg0QgTg3gQhQQghidAJh9QCRBxDFArQC4AoDMgZQDGgZC4hQQC4hQCGh5QAcEzhKCzQglBbgrAdQgPAigxAJQgwAJgfgUQgTgMgIgfQgDgNglARQipBQjuAAIg3gBg");
	this.shape_9.setTransform(-11.3,-36.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E9140").s().p("Am5PiQiLhJg+iXQg2iEgBjTQgBidAfkQQA3nqCHkGQChk7EYAAQB0AAB2BWQBxBTBiCXQDPE/AtG0QAiFMADBOQAHDRgxB9Qg7CXiaBNQirBVkyAGIgbABQjtAAiPhMg");
	this.shape_10.setTransform(-12.3,-109.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B4F29").s().p("AijFJQhCiJAAjAQAAi/BCiIQBBiJBdAAQByAABABfQBUB6gpD3QgkDbgtBsQg5CKhTAAQhdAAhBiIg");
	this.shape_11.setTransform(59.5,-81.8);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-86,-219.5,172.1,219.5);
p.frameBounds = [rect];


(lib.EarChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AAJChQgOgKgcgYQg0gugOgmQgRgtAdg2QAfg4AmghQA2gwAqAjQARANACAhQABAKgCApQgBAYAFAlQAGAtABAPQABArgGAXQgJAogfAHIgMABQgTAAgWgNgAgJhpQgRASghAuQgdApAfA2QAaAvAvAgIABAAIACACQAlAWAOggQALgYgDgtQgBg8gCgpQgEhNgRgOQgGgFgHAAQgUAAgeAkg");
	this.shape.setTransform(0,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0BA5F").s().p("AAACLQgpgcgcgsQgkg2AWglQASgfAngmIA/g8QAcgaAaDFIAAAEIABANQAEB6gxAAQgUAAgbgSg");
	this.shape_1.setTransform(-0.2,-17.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-10.7,-34.9,21.4,34.9);
p.frameBounds = [rect];


(lib.BloodSplat1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E54A4A").s().p("AgoAbQgSgLABgQQgJgcArgEQAXgCAiAEQAaABgBAYQAAAWgZADQgCgIgSAHQgSAJgFABQgGAEgHAAQgIAAgKgGg");
	this.shape.setTransform(-10.6,-28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54A4A").s().p("AhRBCIg7gIQgngGgOgOQgnglBMgiQAxgXA4gKQA+gMA7AHQA9AHAwAaIADACIADABIAAAAIABABQA1AehUAmQg/AdgwAHQgcAEgYAAQgmAAgjgIg");
	this.shape_1.setTransform(-38.8,-19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A82222").s().p("AiPDBQiIgDhrgPQhwgOhMgZQiDgsgHhEQgYgyB/g4QBEgeBkgaQDPg4D5ACQC+ACD9AkIAFABIANACQBOALAsAPQBHAYAeArQAtA9hDBEQg1A2hLAXQheAdiBAJQgtADi2ADIirABIhHAAgAhaiQQjlAIi5A8QhNAZgQAIQg9AagQAeQgKAVA1AeQAkAVAhALQBmAhCAANQBhAKCJAAID0ABQCOgCBmgNQBugOAygRQBdgfAdhCIABgBQAihQihgjQg7gNiggLQjrgPiBAAIg1ABg");
	this.shape_2.setTransform(0,-19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D32424").s().p("Ak9CdQh2gSg9gNQhsgXg9goQhNgzBphBQBKgvBcgYQDIg1C3gEQBYgCByAJIDMATQCTAOAqAIQBmASBFAoIAIAFQAZAPgcA3QgRAggeAnQgWAcg6ANQhEAKgaAFQjKAmjKABQg6AQhQAAQhlAAiIgZg");
	this.shape_3.setTransform(0.1,-19.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-71.7,-38.7,143.6,38.7);
p.frameBounds = [rect];


(lib.BloodDrop1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D32424").s().p("AACAwQgrgDg0gfQgPgGgLgJQgBgGAxgIQAmgFASgBQBZgGAcAzQguAZgrAAIgLgBgAATAEQgHAMALAGQAQAKAHgUQAIgSgTAAQgKAAgGAKgAgmgSQgcAFAJARQAIAVAhgKQAfgJgQgRIAAgBQgIgHgQAAIgNABgAAvgwQA7AKAOAjQgZgggwgNg");
	this.shape.setTransform(0.7,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54A4A").s().p("AAdAUQgLgGAHgNQAGgKAKAAQATAAgIASQgFAOgJAAQgEAAgFgDgAgzACQgJgSAcgFQAZgEAKALIAAAAQASARgfAKQgKADgJAAQgRAAgFgOg");
	this.shape_1.setTransform(0.1,-8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A82222").s().p("AgpAwQgxgSgcgUQgyggAtgWQBHgjBPAKQAOACANADQAxANAZAgQAKAOAGAOIABACQAFAPgcAPQgZAPgmAIQgjAIgXAAQgnAAgDgYgAgHglQgTABglAGQgxAHAAAHQALALAPAFQA1AeAqADQAxADAzgbQgZguhMAAIgPAAg");
	this.shape_2.setTransform(0,-7.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-14.6,-14.5,29.2,14.5);
p.frameBounds = [rect];


(lib.BeaverTooth2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AiGDFQhMgngChfQgCg9AhhkQARg2ANgGQAPgcBbgdQAugOBFAFQBCAGAzAVQALgBAGAJQAIAFgDAKQAFAXAAAjQAAATgDAlQgCBEgIAxIgLA8QgIAngQAPQgNAOgiAMQgVAKgdAKQgcAJgHAAIgSAAQhdAAg5gdgAgci6QgqALgRAFQgiALgUARQABAPgFAXIgVBhQgLA+AHAiQAQBZBjAKQA1AFBtgWIALgHQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQARgNADgMQAUg7AGg8QAGg6gBg0QgCguABgWQgXAAhMgUQgngKgeAAQgPAAgOADg");
	this.shape.setTransform(0,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAOQgkgKAIgOQAIgRAjAGQAKABAmACQAeACARAFIABABQAfAKhFAYIgLAAQgbAAgjgKg");
	this.shape_1.setTransform(-1.2,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAAQAAgWAWAAQAXAAAAAWQAAAXgXAAQgWAAAAgXg");
	this.shape_2.setTransform(-12.1,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EADFC3").s().p("AhYC7QhagigHhbQgCgJAGgKQAAhMACgZQAHg6AYgkQALgRATgCIABgBQAOgNAUgHQAWgIASAFQAigHA2AFIBUAJQAaABANATQAMARgEAWQAVAngVBFQgEA3gTA1QgUA2gZAXQgQAOgTAAQgsAWgtAAQgkAAgkgNg");
	this.shape_3.setTransform(0.6,-22.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-21.4,-45.4,42.8,45.4);
p.frameBounds = [rect];


(lib.BeaverTooth1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AhDENQhagDgohFQggg4gEhUQgCg1ALhaQAEghALAEQAcg0B0g4QB7g8BgAVQAOgIAJAYIADAHIgCgEQCTGAjuBfQhRAhg/AAIgKAAgAhIixQgxAagpAfQgaAWgIAEQADCIAEAgQAFAsAFAVQAJAlAUAWQAqAtBegRQBMgOA4gpQA4goAOhJQALg6gRhMQgLg1gehRIgDgNQgUgEgWAAQhMAAhcAyg");
	this.shape.setTransform(0,-26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAWQgLgEAAgSQAAgPAQgFQAOgGAMAJQALAIgFAKQgEAKgMAHQgIAFgGAAIgHgBg");
	this.shape_1.setTransform(-14,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQAzQgPgFgOgMQgSgPAIgNQAFgIAgAAIAqAAQAUgFA2geQA1gXAYAOQAoAYhkAoQhPAigmAAQgIAAgGgBg");
	this.shape_2.setTransform(1.5,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EADFC3").s().p("AgqDuQhigCgghMIgHAIIgNhdQgIg2AAglQgBgiAGg3IAEAAQAEgVAlgXIAzgbQBEglA4gOQBFgRBBALQATAEAAAVQAPANgDAjIgBAHQgCAiAGA5QAJBKAAAXQABBxhZAyQhKAohLAAIgHAAg");
	this.shape_3.setTransform(-0.9,-27.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-53.8,47,53.8);
p.frameBounds = [rect];


(lib.BeaverNose = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADBLQhLgEg0gWQg4gYARgbQAwhWCbAPQAiAEAnASQAzAWgCAZQAAgBABAAQAAAAAAAAQAAAAABABQAAABABACQABADgDgEQATArg1AVQgkAOg6AAIgggBg");
	this.shape.setTransform(-3.4,-53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("Ai9F/QhqgUhPgxQi/h2A1jTQApijCFhpQCIhrCxgFQC1gFCjBPQDGBgAHCoQAHCwi1CHQicB0i9AWQggAEgjAAQg+AAhBgNgAgNloQi7ADiCBzQh1BogaCNQgdCeBxBmQB6BvDJgIQC0gGCQheIAEgDQBMgyA0hFQA2hGAPhKQAliriwhkQichZinAAIgKAAg");
	this.shape_1.setTransform(0,-39.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FA355").s().p("AhWC9QiTgBh2g7Qhvg3gOhEIgVg8QgNgtAIggQAjAAA3AeIBJApQA+AdBLAOQA8ALBQAFQCRAFCHg7ICbhSQCWhLgTAjQhrDCirBeQiNBOijAAIgIAAg");
	this.shape_2.setTransform(0.3,-21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0BA5F").s().p("Al3EvQh5hOABiTQACitCIiJQCPiRDLAAQDRAACVBpQCVBqAACWQAACVilB6QimB7jPAAQjXAAh2hLg");
	this.shape_3.setTransform(0.3,-39.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-79.3,105,79.3);
p.frameBounds = [rect];


(lib.BeaverEyePop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBHQgSgeAAgpQAAgpASgdQASgeAXAAQAZAAARAeQARAdAAApQAAApgRAeQgRAegZAAQgXAAgSgeg");
	this.shape.setTransform(-14.1,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AhOGoQhYglhChdQglgzgFglIgCgFQgihPgDhpQgDhXAdhdQAehhA3hEQCGimDABZQCeBJAbDoQAXDGhLCwIgFALIgBADQgQAgglAeQgeAagkASQhRArg+AAQgkAAgfgNgAgql7QhZAUg8BFQhFBOgOB5QgMBiAbB3QAJAqAPAyQAVAtAaAfQAlArAWATQAlAhAkAHQBQARBog8QA3ghAYgnIAMgTIAHgWQAVg7AHgjQAVhtgIhlQgTjfh5hFQgzgeg8AAQgbAAgfAHg");
	this.shape_1.setTransform(0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAAQAAgSANgOQANgPAUAAQAVAAANAPQAMAOABASQgBAwguAAQguAAAAgwg");
	this.shape_2.setTransform(15.1,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAxQgbgSgBgbQgBgVASgWQARgVAagHQAbgHAYAOIAEACQAbASADAdQADAagUAZQgTAZgbAEIgKABQgXAAgVgVg");
	this.shape_3.setTransform(3.7,-72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AjQEpQhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7QhXB8h6AAQh5AAhXh8g");
	this.shape_4.setTransform(-0.2,-43.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-87.5,63,87.5);
p.frameBounds = [rect];


(lib.BeaverEye = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBHQgSgeAAgpQAAgpASgdQASgeAXAAQAZAAARAeQARAdAAApQAAApgRAeQgRAegZAAQgXAAgSgeg");
	this.shape.setTransform(-14.1,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AhOGoQhYglhChdQglgzgFglIgCgFQgihPgDhpQgDhXAdhdQAehhA3hEQCGimDABZQCeBJAbDoQAXDGhLCwIgFALIgBADQgQAgglAeQgeAagkASQhRArg+AAQgkAAgfgNgAgql7QhZAUg8BFQhFBOgOB5QgMBiAbB3QAJAqAPAyQAVAtAaAfQAlArAWATQAlAhAkAHQBQARBog8QA3ghAYgnIAMgTIAHgWQAVg7AHgjQAVhtgIhlQgTjfh5hFQgzgeg8AAQgbAAgfAHg");
	this.shape_1.setTransform(0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAAQAAgSANgOQANgPAUAAQAVAAANAPQAMAOABASQgBAwguAAQguAAAAgwg");
	this.shape_2.setTransform(15.1,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAxQgbgSgBgbQgBgVASgWQARgVAagHQAbgHAYAOIAEACQAbASADAdQADAagUAZQgTAZgbAEIgKABQgXAAgVgVg");
	this.shape_3.setTransform(3.7,-72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AjQEpQhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7QhXB8h6AAQh5AAhXh8g");
	this.shape_4.setTransform(-0.2,-43.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-87.5,63,87.5);
p.frameBounds = [rect];


(lib.BeaverBody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgOIPQiUgnhrhrQhyhygUiRQgNheAXhsQANiGBFiBQAwhaBFgyQBNg5BeACQCYACBzCKQBgB0AqCpQAdB0gCBsQgDB8grBjQgyB1hmA1QhCAjhJAAQgrAAgrgMgAh4nYQhCAag2BJQgqA6gfBSQg6CXAECQQAAAGgGACQADBCAUA5QAvCDCLBeQCRBiCEgYQB0gUBBhuQA3hdAGiBQAGh8gchyQgeh7hAhiQhBhihagtQg6gcg3AAQguAAgtASg");
	this.shape.setTransform(-21.1,-147);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#752C44").s().p("ABqIBQg9gpgrg/Qgig2gdhQQg7ilgMibQgMikAnh5QA2imCJgUQAHgBADAHQADAHgHAEQh6A2gsCOQgjBtAOCgQAhGDC8CAQAPAKgKAQQgFAKgIAAQgFAAgHgEg");
	this.shape_1.setTransform(-20.7,-145.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E54875").s().p("ADMIMQglgKgkgXQiPgHhsiTQhfiAgVidQgLhQAXhgQAVhXAthRQAwhXA7g5QBKhJBQgJIADgBQALgIANAEQAMAEAHAMIANgBQAOgBACAPQACAPgOAEIgRAHQgHALgLACIgCABQgeAagUA6QgJAbgOBDQgTBXABB3QACClAUBhQAfCbBUBNQAJAIACANQATAPAVAMQAWAMgKAYQgIASgQAAIgKgCg");
	this.shape_2.setTransform(-35.7,-146);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("AhZAIQgogNAOgKQAOgJAiAHQAtAKAugDQAjgCAugLIALgCQAOgEgiAZQgiAXgMACQgZAGgZAAQgrAAgugTg");
	this.shape_3.setTransform(-20.9,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AAuAYQgWgIgLgKQgNgKgcAJQgdALgDgEQgIgJANgJQANgKAWgGQA4gNAWAmIAAABQAMAWgNAAQgEAAgHgCg");
	this.shape_4.setTransform(-64.8,-190.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3526").s().p("Ag+AiQgKgOAOgUQAOgRAagOQAagOAWACQAaACAKAWIAAABQAGAPgdgCQghgEgEABQgWAHgVAgQgHAMgEABIgCAAQgFAAgHgKgABCgTIAAAAgAA/gaIADAHIgDgHg");
	this.shape_5.setTransform(33.9,-192.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3526").s().p("AhxIFQgNgPAIgPQARggAWgcQBChZAcg7QBNiaAXinQAcjWhBhyQgTghgbgYQgfgbgfgIQgTgFgyAIQgsAHgWgNQgigUBHgWQA8gTAbABQAhAAAiATQAhASAYAbQBQBbAMCgIAAAOIABAEIABAWQAECyg8C6QhIDhiFBmQgHAFgGAAQgIAAgIgJg");
	this.shape_6.setTransform(68.3,-78.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3526").s().p("AigREQhzgJhigkQgXgIguAaQguAbgggLQi1g+ggk5QgLhrAFiWIAMjUQAPkmArjeQAZiBAihpQg+gkgVhTQgVhQAQhgQAPhaAqhPQAzhdBPgHQBAgFBlA2QAiASA9gdQBXgrAOgDQBmgXBoAbQAJADBSAoQBCAiASgIQAdgLA3gaQAygVAlgIQBVgSBIA2QBAAxAnBcQAkBagDBcQgDBhgwA7QggAng0ATQAYBCAPAzQAlB3AZB5QAVBmAQCEIAZDuIACASQAMB2AEBJQAFCIgUBnQgaCDhEBWQhKBdhLgFQgngDgegeQgUgVgLABQgSAHgUAGQi5A8jKAAQg6AAg8gFgAlbP2QA/AWAGABQBRAPBjgBQBNAABkgLQDNgUCRhKQAkgXAcgPQA3gegHAXQgRA+haApQBVBTBWiOQAfgzAYhGQAVg7AFglIABgMQARiIgRi5QgFg2glkWQgtlEhjj/QhrkQisiXQjejFjvCDQhyA/hVCMQg/Bpg0CgQhcEagcFaQgPCzgDCDQgECqANCMQAJBZAPA5QAXBTApAyQAeAkAwARQA6AVAWgrQiChaAigUQACgBA4ApQA7ArAIAEIADgBQAMAAAtARgAErvpQggAOgXAAQBkBOBPB7QBCBmA3CMQBRgfAUhbQARhKgahbQghh3hBg1QhJg7hlAhIgBAAIgFACIgKAEIAEgCQgEACgDAAQgCABAAABQgBAAABgBQACAAADgBIgxAWgAphu+IgEAHQg0BfgHBtQgKCMBWA2QAuiIA4hjQBEh7BZhNQgggFgxgSQgygTgTgDQgJgCgJAAQg8AAgsBNgAFcv/IAAAAg");
	this.shape_7.setTransform(-11.8,-109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9FA355").s().p("AAcBRQgXgBgXgYQgWgFggg+QgfhAAZAKQAlANAtAAQA9AAAZgcIghB6QgBAngaAAIgCAAg");
	this.shape_8.setTransform(-72.5,-172.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9FA355").s().p("AhCAGIgwhvQBKA7A9ABQAwABAugjIgXBTQgfBYgvANIgFABQgaAAgxhkg");
	this.shape_9.setTransform(44.3,-174.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B0BA5F").s().p("ABPEQQgdgNgXhQQgbhpgDgFQgWgsgfgoQgRgWgug4Qg1ghgagYQgxgtBVgSICIg9QCpAjA3CnQAVBAgCBGQgCA/gSAsQgPAjghAkQggAjgZAAQgGAAgHgDg");
	this.shape_10.setTransform(33.6,-189.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0BA5F").s().p("AiADrQgQgigLgKQgxgxAaiOQAVh7AqhEQBSiEDdCDQg6AchzDVQg4BrguBmIgGABQgVAAgOgYg");
	this.shape_11.setTransform(-62.3,-189.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727D3D").s().p("AhVFTQiKgFhkgXQgngUgWgGQgmgMgPAaQgjA6hWgxQhJgrgbg0QgTg3gQhPQghieAIh9QCSBxDFArQC4AoDMgZQDGgZC3hQQC5hQCGh5QAcEzhLC0QglBagqAeQgPAhgyAKQgwAJgegVQgTgMgIgeQgDgOglARQipBQjuAAIg3gBg");
	this.shape_12.setTransform(-11.3,-36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E9140").s().p("Am5PiQiLhJg+iXQg2iDgBjUQgBicAfkRQA3npCHkHQChk7EYAAQB0AAB2BWQBxBUBiCWQDPE/AtG0QAiFMADBOQAHDRgxB9Qg7CYiaBMQirBWkyAFIgeABQjrAAiOhMgAghBxQA+AtBKgWQBFgUAwhBQBVhzAIjTQADhbgUhNQgYhYg0g+QgxiLiDh0QgUgSgYAFIgNgDQgZgFgcAGQgMgLgPgCQgQgBgPAKQhVA+gYCSQgNBRAFCjQAGCyATBbQAiCcBXBMQAWASAagFIASAOg");
	this.shape_13.setTransform(-12.2,-109.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4B4F29").s().p("AijFIQhBiIAAjAQAAi/BBiJQBCiIBcAAQByAABABfQBUB6gpD3QgjDagtBtQg6CKhTAAQhcAAhCiJg");
	this.shape_14.setTransform(59.5,-81.7);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-86,-219.5,172.1,219.5);
p.frameBounds = [rect];


(lib.MenuBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.BGMidDeco("single",3);
	this.instance.setTransform(22.9,270.4,1,1,0,0,0,0,-18.4);

	this.instance_1 = new lib.BGFrontDeco("single",1);
	this.instance_1.setTransform(696.8,514.9,1.166,1.166,0,0,0,0,-17.4);

	this.instance_2 = new lib.BGCloud("single",2);
	this.instance_2.setTransform(475.9,8.9,1,1,0,0,0,0,-38.2);

	this.instance_3 = new lib.BGMidDeco("single",1);
	this.instance_3.setTransform(754.8,262.4,1,1,0,0,0,0,-18.4);

	this.instance_4 = new lib.BGMidDeco("single",2);
	this.instance_4.setTransform(191.9,250.4,1,1,0,0,0,0,-18.4);

	this.instance_5 = new lib.BGFrontDeco("single",0);
	this.instance_5.setTransform(305.9,473.9,1.166,1.166,0,0,0,0,-17.4);

	this.instance_6 = new lib.BGMidDeco("single",0);
	this.instance_6.setTransform(529.8,319.4,1,1,0,0,0,0,-18.4);

	this.instance_7 = new lib.BGMid("single",0);
	this.instance_7.setTransform(0,303.9,1,1,0,0,0,0,-80.7);

	this.instance_8 = new lib.BGBuilding("single",2);
	this.instance_8.setTransform(670.4,140.8,1,1,0,0,0,-6.3,-126.5);

	this.instance_9 = new lib.BGCloud("single",1);
	this.instance_9.setTransform(642.9,151.9,1,1,0,0,0,0,-38.2);

	this.bgGround = new lib.BGFront();
	this.bgGround.setTransform(403.2,466.2,1,1,0,0,0,0,-86.4);

	this.instance_10 = new lib.BGCloud("single",0);
	this.instance_10.setTransform(155,127.9,1,1,0,0,0,0,-38.2);

	this.addChild(this.instance_10,this.bgGround,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-12.1,0,821.8,552.6);
p.frameBounds = [rect];


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		///* js
		//this.stop();
		//var bounds = this.frameBounds[this.currentFrame];
		//this.cache(bounds.x, bounds.y, bounds.width, bounds.height);
		//*/
		this.stop();
		var bounds = this.frameBounds[this.currentFrame];
		this.cache(bounds.x, bounds.y, bounds.width, bounds.height);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// logowords
	this.instance = new lib.logowords();
	this.instance.setTransform(141.9,298.9,0.072,0.072,0,0,0,142.3,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-83.2,scaleX:1,scaleY:1,x:142.9,y:231.9},9,cjs.Ease.get(1)).wait(21));

	// logohand
	this.instance_1 = new lib.logohand();
	this.instance_1.setTransform(117.5,214,1,1,-84.2,0,0,49.5,-10.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(6).to({regX:49.4,rotation:0,x:72.6,y:120.5},14,cjs.Ease.get(1)).wait(1));

	// logohead
	this.instance_2 = new lib.logohead();
	this.instance_2.setTransform(180.4,230.3,1,1,-52.7,0,0,87.5,-6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({rotation:0,x:183.5,y:126.3},15,cjs.Ease.get(1)).wait(6));

	// logobody
	this.instance_3 = new lib.logobody();
	this.instance_3.setTransform(163.5,214.2,1,1,-49.2,0,0,46.1,-34.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:46.2,regY:-34.4,rotation:0,x:181.5,y:147.1},15,cjs.Ease.get(1)).wait(6));

	// logoarm
	this.instance_4 = new lib.logoarm();
	this.instance_4.setTransform(144.8,144.4,1,1,-84.2,0,0,92.6,-15.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(6).to({regX:92.7,regY:-15.2,rotation:0,x:144.7,y:140.7},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(131.6,292.9,20.6,12);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0.6,92.2,284.7,222.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0.6,0.2,284.7,314.9), rect, rect, rect, rect, rect];


(lib.EnemyBeaver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enemy0Idle:0,enemy0Death:24});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("enemy0Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(15));

	// beavernose
	this.instance = new lib.BeaverNose();
	this.instance.setTransform(-23.8,-76.1,1,1,0,0,0,-0.1,-15.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regY:-15.6,rotation:21,x:-20,y:-89.3},2).to({regX:-0.2,rotation:137.2,x:75.9,y:-50.3},5).to({rotation:148.2,x:96.8,y:-46.2},4).wait(3));

	// tooth1
	this.instance_1 = new lib.BeaverTooth1();
	this.instance_1.setTransform(-8.6,-69.2,1,1,0,0,0,-2,-45.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({rotation:18.9,x:-7.7,y:-79.3},2).to({rotation:74.4,x:58.3,y:8.7},5).to({rotation:78.4,x:73.3,y:9.7},4).wait(3));

	// tooth2
	this.instance_2 = new lib.BeaverTooth2();
	this.instance_2.setTransform(-39.3,-65,1,1,0,0,0,-1,-37.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regY:-37.6,rotation:14,x:-39.9,y:-85.8},2).to({regY:-37.7,rotation:84.6,x:11.1,y:-2.8},5).to({regY:-37.8,rotation:91.6,x:22.2,y:-1.8},4).wait(3));

	// beavereye
	this.instance_3 = new lib.BeaverEyePop();
	this.instance_3.setTransform(-18.8,-159.9,1,1,0,0,0,0,-43.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({regX:-0.1,regY:-43.7,rotation:8.5,x:-6.8,y:-156.8},0).to({_off:true},1).wait(12));

	// beaverbody
	this.instance_4 = new lib.BeaverBody();
	this.instance_4.setTransform(38.5,-7,1,1,0,0,0,37,-5.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({regX:36.9,regY:-5.8,scaleY:1.05,skewX:14.7,skewY:8.7,x:42.4,y:-11.1},3).to({regX:37.9,regY:-5.7,scaleY:0.94,skewX:-4,skewY:0,x:39.4,y:-7},4).to({regX:37,scaleY:0.94,skewX:0,x:38.5},4).to({scaleX:1.02,scaleY:0.93,skewX:0.3,y:-6.9},2).wait(1));

	// beavereye
	this.instance_5 = new lib.BeaverEye();
	this.instance_5.setTransform(5.8,-145.7,1,1,25.6,0,0,0.1,-21.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({regX:0,regY:-21.7,rotation:90.1,x:132.7,y:-15.6},5).to({rotation:92.4,x:149.7},4).wait(3));

	// blooddrop1 copy
	this.instance_6 = new lib.BloodDrop1();
	this.instance_6.setTransform(43.5,-142,1.274,1.801,0,0,0,0,-7.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:146.5,y:-119},5).to({_off:true},1).wait(8));

	// blooddrop1 copy 2
	this.instance_7 = new lib.BloodDrop1();
	this.instance_7.setTransform(43.5,-166.1,1,1.414,0,0,0,0,-7.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({x:117.5,y:-155.2},5).to({_off:true},1).wait(8));

	// blooddrop1
	this.instance_8 = new lib.BloodDrop1();
	this.instance_8.setTransform(53.5,-186.1,1,1.414,0,0,0,0,-7.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regX:0.1,rotation:-28.5,x:136.6,y:-208.2},5).to({_off:true},1).wait(8));

	// greenchunk3
	this.instance_9 = new lib.GreenChunk3();
	this.instance_9.setTransform(19,-143.7,1,1,21,0,0,0,-15.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({regY:-16,rotation:24,x:151.3,y:-127.5},5).to({regX:0.1,rotation:-12.2,x:235.4,y:-7.5},3).to({rotation:-12.2,x:249.4,y:-6.5},3).wait(3));

	// greenchunk2
	this.instance_10 = new lib.GreenChunk2();
	this.instance_10.setTransform(6.8,-186.6,1,1,-38.5,0,0,0,-28.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({regY:-28.7,rotation:24,x:157.6,y:-212.9},5).to({regY:-28.6,rotation:63,x:271.6,y:-27.9},3).to({rotation:73.9,x:282.6},3).wait(3));

	// greenchunk1
	this.instance_11 = new lib.GreenChunk1();
	this.instance_11.setTransform(-35.5,-141.8,1,1,-132.6,0,0,0,-22.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({rotation:24,x:217.9,y:-129},5).to({regX:0.1,rotation:99.4,x:342.9,y:-5.9},3).to({x:355.9,y:-2.9},3).wait(3));

	// earchunk
	this.instance_12 = new lib.EarChunk1();
	this.instance_12.setTransform(-44.8,-149.9,1,1,21,0,0,0,-17.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({rotation:24,x:208.3,y:-196.8},5).to({regX:-0.1,rotation:104,x:372.4,y:-27.8},3).to({x:387.4},3).wait(3));

	// pinkchunk3
	this.instance_13 = new lib.PinkChunk3();
	this.instance_13.setTransform(-30,-196.5,1,1,21,0,0,0,-24.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({regX:0.1,regY:-24.2,rotation:24,x:103.4,y:-184.9},5).to({rotation:77,x:211.4,y:-27.8},3).to({x:238.4},3).wait(3));

	// pinkchunk2
	this.instance_14 = new lib.PinkChunk();
	this.instance_14.setTransform(17.9,-157.9,1,1,21,0,0,0,-10.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({regX:-0.1,rotation:24,x:142.4,y:-75.9},5).to({x:180.4,y:-19.9},3).to({x:191.4},3).wait(3));

	// pinkchunk1
	this.instance_15 = new lib.PinkChunk1();
	this.instance_15.setTransform(-22.1,-168.9,1,1,21,0,0,0,-16.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({_off:false},0).to({regX:-0.1,rotation:24,x:192.6,y:-171.5},5).to({rotation:59.9,x:309.6,y:-16.5},3).to({x:320.6},3).wait(3));

	// bloodsplat1
	this.instance_16 = new lib.BloodSplat1();
	this.instance_16.setTransform(52.8,-176.6,0.213,0.483,0,0,0,0,-19.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({scaleX:1.19,scaleY:1.16,x:146.7,y:-160.7},2).to({scaleX:1.75,scaleY:1.26,x:257.7,y:-25.6},3).to({scaleX:1.81,scaleY:1.41,y:-23.6},1).to({regY:-19.3,scaleX:1.98,scaleY:1.84,x:257.6,y:-17.6},3).to({regY:-19.4,scaleX:2.1,scaleY:2.14,x:257.7,y:-13.7},2).wait(3));

	// EnemyBeaverFace
	this.instance_17 = new lib.EnemyBeaverFace();
	this.instance_17.setTransform(-27.6,-98.4,1,1,0,0,0,-4,-76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1.21,scaleY:0.82,x:-31.3,y:-90.5},4).to({regY:-76.1,scaleX:1.06,scaleY:0.96,rotation:-7.7,x:-44.8,y:-103.2},4).to({regY:-76.2,scaleX:1.21,scaleY:0.82,rotation:0,x:-32.3,y:-88.5},4).to({regX:-3.9,scaleX:1.04,scaleY:1.05,rotation:4.2,x:-10.1,y:-115.6},4).to({regX:-4,scaleX:1.21,scaleY:0.82,rotation:0,x:-32.3,y:-85.5},4).to({scaleX:1,scaleY:1,x:-27.6,y:-98.4},3).to({_off:true},1).wait(14));

	// EnemyBeaverBody
	this.instance_18 = new lib.EnemyBeaverBody();
	this.instance_18.setTransform(-14,-3.8,1,1,0,0,0,-14,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.17,scaleY:0.86,x:-16.3,y:-3.2},4).to({regY:-3.7,scaleX:1.02,scaleY:1,skewX:-5.4,skewY:-7.7,x:-14.8,y:-8.8},4).to({regY:-3.8,scaleX:1.17,scaleY:0.86,skewX:0,skewY:0,x:-16.3,y:-3.2},4).to({scaleX:1.01,scaleY:1.1,skewX:5.5,skewY:7.2,x:-16,y:-6.9},4).to({scaleX:1.17,scaleY:0.86,skewX:0,skewY:0,x:-16.3,y:-3.2},4).to({scaleX:1,scaleY:1,x:-14,y:-3.8},3).to({_off:true},1).wait(14));

	// Shadow
	this.instance_19 = new lib.Shadow();
	this.instance_19.setTransform(-11.4,-7,1.09,1,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({scaleX:0.93,x:1.1},3).to({scaleX:1.09,x:-11.4},4).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-219.5,182.5,230);
p.frameBounds = [rect,new cjs.Rectangle(-96.4,-211.7,186.2,222.2),new cjs.Rectangle(-96.4,-203.9,189.8,214.4),new cjs.Rectangle(-96.9,-196.2,193.8,206.7),new cjs.Rectangle(-100.5,-188.4,201.1,198.9),new cjs.Rectangle(-101.6,-201,198.9,211.5),new cjs.Rectangle(-103,-213.5,196.7,224),new cjs.Rectangle(-105.4,-225.7,195.4,236.2),new cjs.Rectangle(-108.8,-237.4,195.2,247.9),new cjs.Rectangle(-112,-227,205.9,237.5),new cjs.Rectangle(-116.1,-220,220,231.9),new cjs.Rectangle(-120.2,-213,232.9,228.8),new cjs.Rectangle(-100.5,-188.4,201.1,198.9),new cjs.Rectangle(-97.5,-204.5,198.5,215),new cjs.Rectangle(-96.4,-220.4,198.3,230.9),new cjs.Rectangle(-96.4,-235.9,200.4,246.4),new cjs.Rectangle(-96.4,-251.3,202.8,261.8),new cjs.Rectangle(-99.3,-239.6,201.4,250.1),new cjs.Rectangle(-109.7,-227.8,216.6,238.3),new cjs.Rectangle(-118.7,-216,230.3,228.5),new cjs.Rectangle(-100.5,-188.4,201.1,198.9),new cjs.Rectangle(-96.4,-198.8,192.2,209.3),new cjs.Rectangle(-96.4,-209.1,187.4,219.6),new cjs.Rectangle(-96.4,-219.5,182.5,230),new cjs.Rectangle(-96.4,-225,184,235.5),new cjs.Rectangle(-88.1,-234,238.2,244.5),new cjs.Rectangle(-82.2,-243.8,314.2,254.3),new cjs.Rectangle(-80.6,-251.5,363,262),new cjs.Rectangle(-101.1,-256.7,433.8,270.6),new cjs.Rectangle(-119.4,-247.5,502.5,278.8),new cjs.Rectangle(-137.5,-234.1,524.7,280.7),new cjs.Rectangle(-98.6,-206.8,490,252.5),new cjs.Rectangle(-98.9,-207.4,494.4,253.5),new cjs.Rectangle(-99.2,-207.9,499,254.5),new cjs.Rectangle(-99.5,-208.4,503.6,255.4),new cjs.Rectangle(-96.4,-208.8,504.7,252.7),new cjs.Rectangle(-96.4,-206.8,504.7,250.7),new cjs.Rectangle(-96.4,-204.7,504.7,248.6)
];


(lib.Spike3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Spike3Anim();
	this.instance.setTransform(-6.5,-1.9,1,1,0,0,0,-6.5,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.91,rotation:2,y:-1.8},4).to({scaleY:1,rotation:0,y:-1.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.2,-72.7,24.4,72.7);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-12.2,-66.3,26.7,66.8), rect, rect, rect, rect, new cjs.Rectangle(-12.2,-72.7,24.4,72.7)];


(lib.Spike2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Spike2Anim();
	this.instance.setTransform(5.5,-0.8,1,1,4,0,0,5.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.88,rotation:-2.2},5).to({scaleX:1,scaleY:1,rotation:4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.8,-36.5,19.9,36.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-8.4,-31.5,16.8,31.9), rect, rect, rect, rect, rect, new cjs.Rectangle(-8.8,-36.5,19.9,36.7)];


(lib.Spike1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SpikeAnim();
	this.instance.setTransform(3.5,-0.8,1,1,0,0,0,3.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.89,rotation:-2.5},4).to({scaleX:1,scaleY:1,rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,-54.5,16.5,54.5);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-9.8,-48.6,17.9,49.1), rect, rect, rect, new cjs.Rectangle(-8.2,-54.5,16.5,54.5)];


(lib.MooseTween = function() {
	this.initialize();

	// Moose
	this.instance = new lib.MooseToothShine("synched",0);
	this.instance.setTransform(30.9,24.8,1,1,0,0,0,0,-3.5);

	this.instance_1 = new lib.MooseToothShine("synched",0);
	this.instance_1.setTransform(-7.1,23.7,1,1,0,0,0,0,-3.5);

	this.instance_2 = new lib.MooseToothShine("synched",0);
	this.instance_2.setTransform(-41.1,22.4,1,1,0,0,0,0,-3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AGECCQgvAAg7gdQhAgggbgtIgIAWQgIASgQANQgxAoh5gFQhDgEgugnQgdgZgJgXQgVAigtAYQgrAWgqACQgzACgpgQQgwgSgaglQgFgIgMgmQgMgtgBgWQhMgIAAgHQABgND4AKIEdAKQBLgDDlgWQCigQBsgCIANAAIASAAIAGAAQAIACAKAqQAMAygHApQgTB+idAAIgTgBgAGnhYQiNAEhOAOQACBdBTAtQA+AiA+gGQBngLAhhAQAagvgVhCIiDAEgAiWgbQAGAbALARQAjA8BiAHQBuAGAohBQAPgZAKhFQhQAHhKAEQh3AGg5gHQACAHADAZgAnZgkQAHAgAOATQAsBBB8gKQAngHAcgUQAigYACghQgDgZAAgVQi6gHhvgKQADAJAFAgg");
	this.shape.setTransform(-6.8,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("AguAMQhpgTACgPQAAACCOACQCMACAKgCIABAAQAWgFg/AnQgTAHggAAQgoAAg6gLg");
	this.shape_1.setTransform(-2.8,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AHxPEQhYgKgmh8QgTg/gKiIQhjAYjogTQj0gTh9AVIAFBXQADBMgHAaQgPA9g4AbQg1Aag8gTQh2glg3iLQgphogCiTQgEjXACh5QACi3ANiWQAQjCAehvQAuikBihpQBUhYB3g3QBwg0CBgPQEwgkDfCvQCEBYBhDlQAwBxAQBKQAwDgADEIQACEDgoEJQgSBvgvBHQg4BWhWAAIgTgBgAI5IkQADAMg0ASIhFAUQguAIgMAGQgSAIAEAoQAJBXAHAgQAOBHAcAoQArA7BGgcQA8gYAjg9QAmhCAWkXQAXkigQkMQgZlfiYjnQiQjZkWgzQkKgxjpCAQiKBNhKCJQg/B0gaCxQg4GFAXF4IAICBQAGBOAOA0QAmCRB4AtQCAAdAViBQAHgrgHgzQgFgqgGgGQhJAEhCgNQBXgOBygLQDkgWCWATQCZASDMgqIB4gbQAegHALAAQAGAAABACg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AGDCfQgHghgFhOQgFhJgHgjQiMAckRgNQkUgOgxAJQAJCJgNA5QgZBvhogRQjvglATm5QCwAhEPAMQIbAYHYhoIgUDpQgLBugQA9QgUBJgkAjQgnAmhBABIgDAAQhtAAgYh1g");
	this.shape_3.setTransform(-0.1,67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("ACHBpQhkgYgnhbQgOAvgrAhQg5AuhNgRQhegUgdgbQgjgggXhlILYgfQAgArgIA6QgLBaiKAgQgPACgQAAQgdAAgggIg");
	this.shape_4.setTransform(13.1,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABeQh0gDghhVQgRgqAEg6IFDAQQAJBDgSAlQghBFhvAAIgIgBg");
	this.shape_5.setTransform(-40.3,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("ADwA7QhCgXgXghQg+BIh1ACQh3ABg+hJQgXAagwAPQgvAOgxgDQh5gIgShbQABACA2gJQBUgOBagHQFJgaHUA4QARA7gsAgQgnAchJABIgDAAQhCAAg/gVg");
	this.shape_6.setTransform(-1.2,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AHcOpQg3gagZh2QgSiFgIgqQhjAQkjgRQkQgPhXAYQAAAOAHA5QAFA7gGAoQgTB+iCgNQhugegzh9QgmhbgEiJQgKkSACimQAEl5AwiQQAtjuCtiIQCYh2DZgSQDGgRCvBHQCzBJA9CBQCyC9AfGsQAVEog0H1QgVBkgwBAQgtA9g3AAQgZAAgbgNg");
	this.shape_7.setTransform(-0.4,0);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-96.7,152.3,193.1);
p.frameBounds = [rect];


(lib.MooseEyes = function() {
	this.initialize();

	// MooseEyes
	this.instance = new lib.MooseEye("synched",0);
	this.instance.setTransform(0.4,-59.5,1,1,0,0,0,0,-49.6);

	// MooseEyeShadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B84E").s().p("AjEA3QkcCFhDjNQDdhjHFACQClABCFAOQB7AOAAANQAAAngDAPQgGAcgXAQQgwAgg/AJQhdANg/g7QgPAgg7AZQg4AYhKAJQglAEgeAAQh6AAg0g8g");
	this.shape.setTransform(-0.5,-16.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-63.4,-108.9,127.6,104);
p.frameBounds = [rect];


(lib.MooseDeathEyes = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MooseEye("synched",0);
	this.instance.setTransform(0.8,-59.2,1,1,0,0,0,0,-49.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-63,-108.7,127.6,99.1);
p.frameBounds = [rect];


(lib.MooseDeathEyeBlood = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DeadBlood();
	this.instance.setTransform(-0.5,-20.8,0.909,1.024,-176.1,0,0,-1.9,-19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-48.7,157.9,56.5);
p.frameBounds = [rect];


(lib.MooseBottomDeath = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MooseToothShine("synched",0);
	this.instance.setTransform(30.8,-71,1,1,0,0,0,0,-3.5);

	this.instance_1 = new lib.MooseToothShine("synched",0);
	this.instance_1.setTransform(-7.2,-72.2,1,1,0,0,0,0,-3.5);

	this.instance_2 = new lib.MooseToothShine("synched",0);
	this.instance_2.setTransform(-41.2,-73.4,1,1,0,0,0,0,-3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AGECCQgvAAg7gdQhAgggbgtIgIAWQgIASgQANQgxAoh5gFQhDgEgugnQgdgZgJgXQgVAigtAYQgrAWgqACQgzACgpgQQgwgSgaglQgFgIgMgmQgMgtgBgWQhMgIAAgHQABgND4AKIEdAKQBLgDDlgWQCigQBsgCIANAAIASAAIAGAAQAIACAKAqQAMAygHApQgTB+idAAIgTgBgAGnhYQiNAEhOAOQACBdBTAtQA+AiA+gGQBngLAhhAQAagvgVhCIiDAEgAiWgbQAGAbALARQAjA8BiAHQBuAGAohBQAPgZAKhFQhQAHhKAEQh3AGg5gHQACAHADAZgAnZgkQAHAgAOATQAsBBB8gKQAngHAcgUQAigYACghQgDgZAAgVQi6gHhvgKQADAJAFAgg");
	this.shape.setTransform(-6.9,-74.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("AguAMQhpgTACgPQAAACCOACQCMACAKgCIABAAQAWgFg/AnQgTAHggAAQgoAAg6gLg");
	this.shape_1.setTransform(-2.9,-50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AHxI1QhYgKgmh8QgTg/gKiIQhjAYjogTQj0gTh9AVIAFBXQADBMgHAaQgPA9g4AbQg1Aag8gTQh2glg3iLQgphogCiTQgEjVACh5QABhpAPjaQFXgDFlgBQLHgCBBAJIADADIACACQAVDeACBrQACEBgoEJQgSBvgvBHQg4BWhWAAIgTgBgAI5CVQADAMg0ASIhFAUQguAIgMAGQgSAIAEAoQAJBXAHAgQAOBHAcAoQArA7BGgcQA8gYAjg9QAmhCAWkXQAXkggQkOIgGhBIqoAAQpXABiKAFQgaEdARETIAICBQAGBOAOA0QAmCRB4AtQCAAdAViBQAHgrgHgzQgFgqgGgGQhJAEhCgNQBXgOBygLQDkgWCWATQCZASDMgqIB4gbQAegHALAAQAGAAABACg");
	this.shape_2.setTransform(-0.1,-56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AGDCfQgHghgFhOQgFhJgHgjQiMAckRgNQkUgOgxAJQAJCJgNA5QgZBvhogRQjvglATm5QCwAhEPAMQIbAYHYhoIgUDpQgLBugQA9QgUBJgkAjQgnAmhBABIgDAAQhtAAgYh1g");
	this.shape_3.setTransform(-0.2,-28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("ACHBpQhkgYgnhbQgOAvgrAhQg5AuhNgRQhegUgdgbQgjgggXhlILYgfQAgArgIA6QgLBaiKAgQgPACgQAAQgdAAgggIg");
	this.shape_4.setTransform(13,-74.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABeQh0gDghhVQgRgqAEg6IFDAQQAJBDgSAlQghBFhvAAIgIgBg");
	this.shape_5.setTransform(-40.4,-74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("ADwA7QhCgXgXghQg+BIh1ACQh3ABg+hJQgXAagwAPQgvAOgxgDQh5gIgShbQABACA2gJQBUgOBagHQFJgaHUA4QARA7gsAgQgnAchJABIgDAAQhCAAg/gVg");
	this.shape_6.setTransform(-1.3,-65.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AHcIdQg3gagZh2QgSiGgIgpQhjAQkjgRQkQgQhXAYQAAAOAHA5QAFA7gGApQgTB+iCgOQhugegzh8QgmhbgEiKQgKkQACilQACiKAHhrIWkABQAFApADArQAVEqg0HzQgVBjgwBAQgtA+g3AAQgZAAgbgNg");
	this.shape_7.setTransform(-0.5,-56.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-112.7,152.3,113.3);
p.frameBounds = [rect];


(lib.LegsJump = function() {
	this.initialize();

	// jumplegs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIHLJQgTg2Agg+QAcg4BRhwQBNhqAdhAIAXgyQAOghgBgUQgCgig6gzQhLhCh0geQgRARguAYQhIAphcAdQkdBZl3g5IADAkQAAAngJApQgdCDh0B2QhIBEhSAyQhZA1hYAYQhWAXhNACQhjACg+ghQg7gggHhNQgHhOA5gmQAOgKAcACIArAEQA7AEBAgNQBogWAsg+QAhgmANgmQAPgvgTgnQgPgegageQgQgUghghQhuhehakDQg+iwgPhpQgVgiBYgfQAOgFBjgZQAdgIB3gnQBageA8gKQCngcDDARQCsAPC3AxQDKA2CVAxIBnAkQBAAXAoAMQANgCALAJIAJACIgCAHIABACIAFAGQAQAgAIBJQABADC8BtQDPB/BSBVQAiAfATAbQAYAiAEAlQAIBHg4BZQhgCbibCoQiTChinArQgRAEgPAAQguAAgRgugAJcjbQAKAFABALQADA9gqA/IBjAwQBnA2AiAxQAZAiAFAgQAGAhgOAmQgPAmhOB9QhABmgoA5QgnA4gJARQgaAxAKAiQAIAdCvhZQCKhnCEi1QBtiVARg+QANgxgYgsQgMgYgugzQhHhRjOh7QiuhogegIQgJgCAAgJQAAgJAIgDIgFglQgEgXgEgPIgBgBQgTgNh3gsQiZg4iigrQnpiClEA4QhhARjDBCQACAEAAAEQgBCUA5CsQArB+AgAtQAaAiA9AsQBDAuAYAbQAyA6AABbQgBBghCBaQg9BThdAwQhSAkiCADQhiACgXgJQgBAlAVATQATATAoAGQBYAPBRgOQBZgQBXgrQBUgpBGg+QBMhCArhKQAyhXgBhaQgBhYg2hHQgrg6hWg6QgKgHADgNQADgOANACQAsAGAcAUQB8BZAgBpQK3B1DKkpQAIgLARgpQAPgiAPgPQAFgFAGAAQADAAADABgAxqHsQgcAFgEASQAMADAYADQAaAEALADQAuACBhgUQBwgWAkgbQBjhLAqhpQAyh+hRhVQgXgXg3gkQg3ghgWgYQgcgdg2h/Qg2iAgIg1QgSh5AChTQhOAcgBAEQAHA1AOA6QAPA9ARAuQA0CNAaA4QBACJA9AjQA6A4AYAhQApA6gCA2QgBBDgsA9QgnA3g+AlQhTAmh+gBQg4AAgOACg");
	this.shape.setTransform(132.9,75.8,1.002,1.002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAAEEQpbg/jFh+QhQgzAEgyQADgwBFgkQC/hjCWgkQD5g7ESA5QBpAWDPAoQCuAlBjAfQEIBUgjB8QABAQgMAYQgYAvhDAjQiLBHkfAAQiYAAjCgUg");
	this.shape_1.setTransform(107.9,30.4,1.002,1.002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AkaBtQg0gjgGglQgFggAegZQAdgZAwgMQAxgMAvAHQBRANBAgnQAdgRAsgsIAXAfQAdAjAgAYQBiBIBUg4QioB6inAwQhOAXhBAAQhXAAg7gpg");
	this.shape_2.setTransform(43.6,128.4,1.002,1.002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjnDGQgngaA6h1QA3hsB4iYIATAWQAWAZAfAQQBgA0B1g3QiiC3iNBjQhkBFgxAAQgQAAgLgIg");
	this.shape_3.setTransform(212.8,128,1.002,1.002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AIZLKQgdgZBHhpQBniWA6hqQBUiXgSgoQgYg2huhBQh4hFg4AiQiUBWi1AvQk1BRkFhgQgDDNhlCKQilDfmRAPQg8gEgiggQgdgcgCgoQgBglAVgcQAYgdAkAAQCBAABcgnQCUg9AEiTQAChHgpgqQg+gwgoglQikiag+mxQBSgfCWhHQCLg5CQgLQGKghMiEVQAHA8ANBCIBcAyQBtA9BbA7QEjC8gDBkQgFB1jHDhQhWBhhUBEQhYBJg3AOQhGATgmAAQgaAAgLgJg");
	this.shape_4.setTransform(133.4,74.2,1.002,1.002);

	// jumpfeet
	this.instance = new lib.Foot();
	this.instance.setTransform(193.2,139.6,2.224,2.654,22.3,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.setTransform(14.3,129.7,2.654,2.654,49.7,0,0,-6,-11.5);

	this.addChild(this.instance_1,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-0.4,275.6,186.7);
p.frameBounds = [rect];


(lib.HeroLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsOPRQgRABgBhjQgBg/AHi0QARmlgSiYQgIhmg1lgIhBmpQgVgiBZgfQANgFBjgYQAdgIB3goQBageA8gKQCogbDCARQCrAPC5AxQDJA1CWAyIB2ApQBHAZAwANQAtALAIBGQAFAngCBKQAGB5gBC7IABAdQAEC4gFCIQgIC8gaChQgIAygNBpQgOBegUA7IgpB/QgmBggfggQggAagrAFQgtAGgjgWQgjAegOgxQgKggABgsQADg9APhkQATh6AEgnQAMiAgBjUQAAj/AEhTQiCAilvgEQl+gFhcgxQgDBhgRDaQgRDQgCBvQgECfgnCIIgYBcQgUA5gfARQgwA+g6ATQgVAHgSAAQgsAAghgngArQr+QAdAJALBBQAGAjADA9IAQBvQAIA/ABAwQAFCXAbE8QAFAygMC0IgPDfQgEA/gFCTQgJCCghBJQB0gvAli6QAMhAAGheIAIiLQAPi8AHilQAEhuABhQQgEgsABgcQACg1AXgJQC1A6DlAPQCsAKD2gOQBbgFBcgkQApgQB6g8QA5gdAQgEQAngLguA0QgnAthaAlQACClgIDTQgRGsg6EDQAFBAA6gHQA2gGAcgvQAyhUAWiLQAWiFAcloQAcligDhnQgBhLgMiXQgLiGgCgMQnrj1ocgHQjjgCivArQiqAphHBIQAXBQANCKQASCxAHArQAPBcAMCFIATDgQAKBlgCCIQgBBPgGCfQAAAYgTCyQgKCmAjAHQARglAPifQALhuAFhjIAPjlQAKizgFgtQgTizgQkkQgFhngZiVQgPgxgGgjQgLg6AYAAIAIACg");
	this.shape.setTransform(72.8,37.3,0.359,0.359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag4EKQgdAAgbgPQgWgMgFgLQgHgQAFiNQAEhfANjxQBFBaBqgaQA1gNAogfIgLCLQgUCegsBqQgsBshPAAIgCAAg");
	this.shape_1.setTransform(50.2,62.9,0.359,0.359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag4D2QhDgKgSgkQgPgeAOhCIAliTQAahtAGhfIARAPQAXAQAZAIQBQAcBOg5QgdDMgtB9Qg3CbhCABIgLgCg");
	this.shape_2.setTransform(98.2,62.2,0.359,0.359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("ArtPYQgkgEgRgKQBIjOhKsqQgkmWg0ltQD0hzDfgjQDIggDXAdQCoAXD0BIQCQAqFABlQA1D6g1JxQgTDqgdDQQgaDBgQAwQgbBShhAYQgmAJgfgGQgfgGgGgSQgFgSAWlWQAamogDk/QjnBamigrQiDgOiHgaIhsgWQgQDOgVDlQgpHPgWB9QgWCBhtAfQgeAJgfAAIgUgBg");
	this.shape_3.setTransform(73.1,37.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).wait(10));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AT2MKQg1gIgbgqQgbgoANgxQgDgFgBgHQgCgPALgWIAQgkQAQg0ALhEQATh2hAikQgohqiOguQgvgPg0gGQgngFgMACIgFABQh7A7jPArQmcBVmrhUQgkBJh8CNQhnB1gpAiQjgC7jQBHQh9ArhrgEQiIgFhKhSQg8hJA4g4QAUgUAcgLQAZgKAIADQAKAFBBgSQBHgTBPgfQDahVBMhdQBihwARjSQAGhDgEhFIgFg8QgHgygXhpQgVhmgIgzQgVgiBZgfQAOgFBigZQAegIB2gnQBageA8gKQCogcDCARQCrAPC5AxQDJA1CWAyIB2AqQBHAZAwAMQAWAGANATQAHAEAQAMQARANAdAQIAwAbQBeA7BDA2QCnCJBRCzQBGCZgfD1QgOBugcBWQgUA9gUAbQgNAgglAdQgaAVghAJQgXAGgVAAQgMAAgLgBgAPBhJQBUAWBYBBQBuBVAVBjQAdCmggCZQgUBcgWAjQAGAwAHANQAPAcAsgCQAggCAngaQAbgTAHgJQA7iVAKikQADg/gMhoQgPh/geg8QghhhiIiFQhHhFhTg/QgrgUhFgpQgQgJhOglQhOglgcgMQgwgUg+gTQgjgLhNgVQiQgshHgVQh+gkhegOQkggrjbAmQhLANhtArIizBFIgDAEIgDADIgPAYQASA/AXDWQAXDVgFA2QhFFGlbCPQhuAth9AVQhcAOgRgEQgEABgJASQgKATAEAFQAwBGBPAVQCrAtEfikQCbheCQiLQAcgaAigmIA7hDQA0g3AjhNQARgnAJgaQDEA9DHAMQDCALDRgkQB6gWD/heQAFgCBEgDIAvgBQAeAAAKADg");
	this.shape_4.setTransform(70.6,28.8,0.359,0.359);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AEAEGQnfgzlPhsQiyg4g9g3QhEg+BYg4QBbg5C0goQDBgrDagFQIigLFtDiIALA7QAFBIghA3QhUCOkjAAQhNAAhbgKg");
	this.shape_5.setTransform(70,11.9,0.359,0.359);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AnEI3QgHgBAAgJQgBgIAIgBQAPgCAaABIApABQAagCBGgKQBegMBJgkQB1g6CHhmQBFg1AuguQA7g7Ajg8QAfg1AOhDQAJgnAJhZIgEgCIgDgsQgFhkgZiZQgPgwgGgjQgMhDAhAKQAeAJAKBBQAGAjAEA9IAPBvQAIA/ABAxIABAFQAGAegBAnQgBAXgEAtQgDAWgEAOQgMBMgoBBQhNB4iMBnQhXA+g0AiQhOAyhEAdQhRAihZAJQgeADgeAAQg7AAg5gMg");
	this.shape_6.setTransform(33.3,30.5,0.359,0.359);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhjDiQgXgYgQgtIgLgpQANgjANg/QAYh9AAiMQAQAsB1AgQA7AQA4AIIgGBPQgLBggUBgQhfB8hAAAQgdAAgXgWg");
	this.shape_7.setTransform(118.9,46.9,0.359,0.359);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AlvgDQgNgxAxgJQAKgCBeAAQAtAABtgfQBRgYAmgPIAiAQQAqATApAOQCFAqBLgfQkICuiiAcQgiAFgfAAQiaAAhdiJg");
	this.shape_8.setTransform(29.1,49.9,0.359,0.359);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("AUCLwQgugHgVgoQgXgtAUhKQA/jxgliMQg8jkk3gnQlSB/jPAYQkoAilvhmQhGCgiNCWQiCCKihBlQidBjiNAiQiSAlhUgsQichRAKg9QADgYAegOQAdgMAnACQBEADBvggQCgguB0hiQFbkoixqEIAcgQQAlgTAtgSQCTg6C2gWQJChGLCE5QCZBdBOA8QCNBsBUB3QDkFEipHBQgaAygwAbQglAVgkAAIgSgCg");
	this.shape_9.setTransform(70.2,29.2,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},2).wait(8));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwJqQgwgDgkgYQgfgWgVgZQgZgggDgfQgBgMANgCQANgBADALQAlBzCFgPQBLgJBegwQBagtAohhQAlhZgNhsQgLheguh3Qg5iKgchFQgZhBgjh9QgoiRADgmQABgEAEgBQAEAAABAEQAQBDAqCFQA8C7A5B6QA4CGASBcQAZCBgdBtQgNAxgaApQgdAsgnAaQgoAagvAXQgxAXgqAOQgnAMglAAIgMAAg");
	this.shape_10.setTransform(44.9,31.3,0.359,0.359);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("APZOgQABlti9m0Qg7iGhHh/Ig9hlQjMBemHgCQh5gBiAgKQhXgIgWgEQAXBogLBdQgQCMhdCFQhcCDh+BDQh3BAiEACQiZADhUhaQgmgqgFgwQgGgzAgguQALgQAjgJQAggIAGAFQAzAmBMgUQBAgQAzgvQBBg8AThIQARhGgYhWQgGgYh4lZQhokugOhcQgWgkDShFQCxg7BxgSQHOghHUCDQDsBCCPBIIANBJQANBKACAXQBeB6BbCoQCOEFAMCwQAXCFAKBPQAPB0AABhIABB3QABBHgCAwQgEBzgjA0QgqA+g7AHIgGAAQgxAAgOhcgAKxlIQAHAHgFAIQgSAcgcAXQAYAYCHEYQCMEkAaBZQAYBUAQB0QAHA1AQCWIALBeQAEAgAQACQAQACASgXQAZggAHg5IAFhhQAIiYgRjCQgYkQhCi4Qgjh8g5h0QhMiahth/QgNgbgGgtQgJg6gEgPIgBgBQgSgMghgKIgzgRQgwgUg+gTQgjgLhNgVQiQgshHgVQh+gkhcgOQkigrjbAmQhTAPilA/QiYA7gEAJIAZBhQAQA/AMAmQAVA5ApBhQAwBvAQApQBECvAHAXQAjB2gVBYQgUBUhGBGQhFBGhUAYQhRAYhAgaQghgOgMgRIgOASQgHALgBAEQgIAaADAMQAJAhAdAZQAfAaAoAPQAnAPApACQDhAICoi2QBShZAohjQAthugNhtQgLhlgphUQgrhZhIhBQgLgJAIgOQAIgPAOAGQBCAaAwA+QAsA3AbBOQD+A1FRghQB3gMBpgVQBXgRAWgKQARgJAngYQAjgVAVgKIAGgBQAFAAAFAEg");
	this.shape_11.setTransform(76,37.9,0.359,0.359);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ak7DYQlBg6jTheQgTglgGghQgGgpAHhDQHEjrKkCSQDUAtDQBPQBpAnA+AeIAOA3QAPBCADAmQlSBvl0AAQjpAAj4gsg");
	this.shape_12.setTransform(72.8,11.5,0.359,0.359);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AizCKQhKgUgrgnQhGg+Ang2QAOgUAYgNQAVgLAMACQArAJBBgIQBqgOBrg8QAbBRCAgBQA/AAA7gRQiCDVjdAaQgcADgbAAQg6AAg5gPg");
	this.shape_13.setTransform(46.1,51.6,0.359,0.359);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhIA9Qgbj9gPhGQA9BLBOghQApgRAcggQAmDoghCaQgdCLhCANIgEABQgrAAgdjRg");
	this.shape_14.setTransform(114.3,63.4,0.359,0.359);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AP0MfQgFhJgJhMQgQiTgfiNQhkm4julZQiCAug6ATQhgAehZALQjRAZmug8QAvFAhuC6QhbCai1AwQiWAoiTgqQg/gSgmgcQgmgdABgeQgCgwAigkIAigaQDjA3Bch4QCgjRlCrAQD/BELOARQEXAGDegFQDdgFAegOQCyEPBXDxQCkHKgxIWQgdBFg3AdQgSAKgOAAQgaAAgFgpg");
	this.shape_15.setTransform(76.1,43.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).to({state:[]},2).wait(6));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiwIEQgJgSASgKQASgLAJASQAMAWA5gNQASgEA4gUQBFgXBPgvQB7hKAPhbQAJg9gdhEQgchAgygqQg1grh6hBQh5hBg1gsQhOhCgrhVQguhbAChhQAAgFAFAAQAFAAABAFQAGBDAqBPQAnBLAzAxQAqAoA5AmQAoAaBCAmQCFBKA4AyQBeBUAJBtQAJBrhRBWQg6A+h1A9QhCAihAANQgbAGgWAAQg3AAgSgkg");
	this.shape_16.setTransform(57.2,30.8,0.359,0.359);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhKPZQgkgBgdgOQgcgNgIgRQgXgtAvhvQAXg1A0hdQAohFCtkWQCfkKAWhiQiYALgdAAQAdBHg2BhQhwDRi/B0QjTCAjagyQg5gfAQg9QAMgxAwgsQAcgaA9gRQBGgSAXgPQA1giAlgqQAsgzAJg0QAJgyg5g5QhChDhugWQiTgmhWhTQgqgpgxhVQgSgfgjihQgeiLgLhPQgHgLAegXQAggaA7gbQCZhGDXgcQEXgkEyAyQF8A9GIC8QgKA/gUBfQgoC+g1CkQhbDvikDwIhJBuQgrA/giArQhXBxhNBqQhhCHgvA7QhBBHhVAAIgJAAgALQk6QADAEgBAEQgPAzg1AyQgtAqg4AbQhsA0hRADQgDA5gbBFQgOAmgpBSQhKCYhrCkQhjCbhVCoQgVApgEANQgOAnANARQASAiAwgUQAngQAXgcQAWgaC1j5QApg3BjiLQBsiWAfgvQCSjXBcjpQAUgyAzi0QAuikAGgaQhOgyiyhBQjchQjhgqQp7h4lvDtQABBiApCOQApCMAnApQAsA1AlAeQAzAqAzAMQDZAyBLBhQA2BEgTBVQgRBLhEBCQgoAnglAXQgqAbgwAMIg4AQQghALgRATQgaAcgFAoQCuBHDLh5QC2hrBki7QAdg2AChPQAAgghShDQhbhFgXgUQgYgVh5hQQh3hOgSgRQgDgDADgEQACgFAFABQBYAbC8B+QCiBtAkAmIBCAGQBTAEBQgJQEBgfCGieIACAAQADAAADACg");
	this.shape_17.setTransform(73,35.5,0.359,0.359);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AjPCnQgFg2A0h2QAvhrA9hbQgeBJCNASQBIAJBNgGQkqE5hUAAQgdAAgEglg");
	this.shape_18.setTransform(75.2,62.8,0.359,0.359);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Aj6CpQhDg9Aog7QAigxA/gJQA3gJBJgtQBPgyAfg4IATAZQAZAeAbAWQBWBGBOglQiwCNhdArQhhAth+AAQgZAAgagBg");
	this.shape_19.setTransform(60.6,47,0.359,0.359);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AnXCyQiMgsiGg3IhqguQgDgNgFgXQgJgygDg+QEKidFLgUQENgREiBLQDiA6DBBhQCkBRADAeQAKBMhYA+QiKBhlcAaQgzADg1AAQkoAAl6h2g");
	this.shape_20.setTransform(73.2,11.3,0.359,0.359);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C4C4C").s().p("Ah8OyQg9gUAqhVQAOgcBciYQBti2A+hsQDimMgfhXIijAPQgzAEgfAGQATArgXBcQgbBuhEBeQjBEImJgfQhSgwBLhBQAtgnBZglQChhDA1hgQBdipmSiSQhJgLhLhUQiWingGlrIAdgQQAngUAwgSQCag6C6gVQJShCK5FOQgnEsizFyQjfHKmLHWQhJAagxAAQgXAAgRgGg");
	this.shape_21.setTransform(73,35.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},6).to({state:[]},2).wait(4));

	// Layer 7
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AKvLEQgWgkgihUQgghRgagnQhbiKhkhaIhoheQg+g1gyggQgugdhDgjIhwg+QgugahQglQhegrghgRQhog2hshSQhhhKgyhgQg1hlAFh1QAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABQABABAAABQAIBMAfBKQAhBOAyA1QAlAnAzAmQAmAcA7AmQAvAdA/AhIBwA4QBOAnCXBXQD5CLCiCpQBtBwAwBYQASAhAhBQQAeBLAXAmQAJAPgQAJQgGADgFAAQgIAAgFgJg");
	this.shape_22.setTransform(71.2,33.7,0.359,0.359);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AJnNCQgOgCh1i2Qh4i7gpgRQgWAHgoAWQgpAXgVAHQgwAShVAQQiUAdh2gWQiegfhfg+Ig2gkQgggXgRgUQgagXABgjQABgbAKgMQA4g6BqAiQCqAxCUggQBagUAigeQh6hLiSg+Qicg+hLghQiAg8hUhIQgjgeg+hPQg2hEgHgNQhMjhAIhXQHRkVKiCCQDUAoDgBRQBxAoBfAnQAPAEAKAKIgGAsIAAACQgwFEh1DdQgoBNg2BKIhOBmQBRByAsBqQAkBVALAxQATBSgSBKQgQAggiARQgYAMgaAAQgKAAgKgCgAs+p4QgWCuBrCZQBaCBCQBFQBJAiCeBDQCGA2BOAoQDnB4CfCWQBoBkA0BWIBFB3QA1BaANANQALAOASABQATACAQgNQApgfgQhOQggifhfiZQinkMlPjaQgwgZgYgOQgogZgNggQgEgKAKgHQAJgGAJAFIBzA8QBuBCB7BvQBIAAAygFQBCgHA0gTQAFgCAEAFQAEAFgEAEQgWAghVATQg5APgkACIBEBNQBGBRAfAoQACgFAzhEQA8hUAvhUQCYkYgFkBQhHgpijg4QjUhJjYgmQjIgjixAAQl1AAkHCcgAn8EdQgTAHgLAKQgNAMABAPQAvA9BYAvQBcAwBuASQEGAqDfiUIhMhCQhCg2gmgUQgtAhhaATQihAijKgwIg0gMQgNgCgKAAQgPAAgMAEg");
	this.shape_23.setTransform(71.9,30.5,0.359,0.359);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABZDpQgJgCheiSQhyishKhSQBuAoBYgwQAqgXAVggQAcA3AkBTQA8CGAQBFQARBHg1AhQggAUgfAAIgLAAg");
	this.shape_24.setTransform(90.6,50.8,0.359,0.359);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AiLCHQhegbhYg4QgbgRhGg0QgxglAxgkQAUgOAagFQAcgEATAKQEbBFCZg4QBOgcAVgqQAWgCBEA+QAoAlBnBoQjOB4jFAAQhaAAhZgag");
	this.shape_25.setTransform(67.2,43.9,0.359,0.359);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("ABfEbQlggMlPizQhpg4hag/IhFg3QFykZJ5BuQFfA9FECWQA2AagcA2QgcA6hfA4QhrA/iWAjQiUAiinAAIg6gBg");
	this.shape_26.setTransform(71.9,11.3,0.359,0.359);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4C").s().p("AI+MFIh+jaQhcicgggGQhuBQipAfQlOA+kkj2QAFgrAegSQAhgTA0ARQBxAjCYAEQDYAEA2hkQhQg5jFhRQjghahagzQiphghSh9QhlibALjcIAcgOQAkgSAtgQQCRg1C0gUQI+hALGEdQg1FRg/CvQhPDZiHBnQBcClAcA4QBOCegHAyQgJBDgvAmQgWARgTAAQgbAAgXgjg");
	this.shape_27.setTransform(72.1,30.9,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},8).to({state:[]},2).wait(2));

	// Layer 11
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AB5QSQgWgDgRgRQgMgNgOgcQgPgdgfiJIgliyQgoi1h1jBQh4jGiViIQh9hphmhbQjFiygkhPIgiinQgVhoAIgwQGOkwLoCeQF3BPEsCVQAZAqAmC4QAjCoAGBPQAUECiKC2QiGC0jBBUQgsAUh0ARQhsAPghgDQAiDZALBsQAQCmgXAhQgoA3hEAAQgLAAgNgCgAt3szQADBIAKBIQAKBSARA8QAUBDC9CaQBiBQB+BgQCnCaBpCzQBsC7AsC4IArDTQAhCiAJAQQAGAJAhALQAiAKAJgFQAqgaADg7QABgxgojPQgpjWgfhYQgminh7i8QhjiZhPhDQgJgIAHgLQAHgLALADQA8ARA2A3QGVATDniCQBOgsA5g+QATgWArg7QAHgKANAEQANAFgFANQgiBihaBKQAVAnACBaQADBvglBbQhqEMl0geQAoBlANAwIB0gIQB/gOA+glQDCh0BgiSQA9hcAThrQAQhegMh8QgHhIg0kbQkMiElYhSQkVhCjqAAQlWABj1CMgAAuAqQBCB+AVA0IACAAQBfAVBjggQBhgfBHhHQBKhJAahdQAbhngmhqQhEAqhwAnQjfBMjlgOQAaAlBCCCg");
	this.shape_28.setTransform(73.8,36.9,0.359,0.359);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AG5N1QgDg9gQhSIgeiOIgbiFQgQhMgPg4Qhbk9imitQhEhIh8hzIhghUQg5gzgkgkQhDhFg9h7QgYgzgLgoQgOg0AGgtQABgHAIgCQAIgBABAIQAtDrDVC0QB3BkBQBOQBpBnBJBeQBDBWAxB5IAyB/QAaBIAPA6QANA1AQBQIAcCFQASBYAHApQALBJAAA6QAAASgSAAQgSAAgBgSg");
	this.shape_29.setTransform(62.4,40.9,0.359,0.359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgQEmQgWgEgpjPQgwkDgZhsQA+AnBSgWQAngLAcgUQANAUAkDZQAYCLAUCOQAJA8hLAPQgXAEgYAAQgbAAgcgFg");
	this.shape_30.setTransform(77.5,62.5,0.359,0.359);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AkLBzQgQgqgTg+IgPg0IApACQAzACAzgGQCjgSBghQIAWARQAbATAdAOQBaAsBBgbQihCEiOA0QhUAghJAAQhDAAg6gbg");
	this.shape_31.setTransform(89.4,47.2,0.359,0.359);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C4C4C").s().p("ABjPkQgXgJAAgSQAAglgbh/Qgjitg2ihQitntkei1QkbizhmjsQgghKgJhHIgEg4QFTjoIHA/QFQApJCDQQDaKJlHExQh2BviwAzQiKAoh3gIQATAuAYDTQAYDbgMA1QgNA2hLAJIgRABQgUAAgOgGgAgWg8QBECOBJCPQFlAdB0jpQArhVABhuQABhdgchIQjlCDj9AdQhPAJhGgCIg5gEg");
	this.shape_32.setTransform(73.7,37.5,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},10).wait(2));

	// feet
	this.instance = new lib.Foot();
	this.instance.setTransform(94.2,70.2,0.945,0.956,0,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.setTransform(48.2,72.7,1,1,0,0,0,-6,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:48.2,y:72.7,regY:-11.5}},{t:this.instance,p:{rotation:0,x:94.2,y:70.2,regY:-11.5}}]}).to({state:[{t:this.instance_1,p:{rotation:91.5,x:17.8,y:49.7,regY:-11.5}},{t:this.instance,p:{rotation:-22.2,x:115.2,y:54.7,regY:-11.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:138,x:36.8,y:48.8,regY:-11.5}},{t:this.instance,p:{rotation:-34.9,x:114.2,y:73.7,regY:-11.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:114.3,x:52.3,y:48.8,regY:-11.5}},{t:this.instance,p:{rotation:-1.5,x:69.2,y:69.7,regY:-11.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:-54.2,x:96.1,y:58.7,regY:-11.5}},{t:this.instance,p:{rotation:65.6,x:53.7,y:41.2,regY:-11.6}}]},2).to({state:[{t:this.instance_1,p:{rotation:-8.3,x:78.2,y:72.3,regY:-11.4}},{t:this.instance,p:{rotation:125.8,x:70.2,y:47.8,regY:-11.6}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(39.5,0.8,71.9,83.4);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(5.8,0.8,129.6,67.2), rect, rect=new cjs.Rectangle(15.6,1.2,119.1,84.8), rect, rect=new cjs.Rectangle(34.3,0.1,71.8,80.8), rect, rect=new cjs.Rectangle(39.4,0.5,76.7,70), rect, rect=new cjs.Rectangle(39.2,-0.6,69.3,85.1), rect];


(lib.HeroBulletAnim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAcIgEgEIgEgCIgBgBIgJgDIgDgDIgCgEIgCgDIgEgEIAAgDIAAgCIAAgEIABgDIADgEIAFgDIAJgHIAIgGIAFgBIABAAIAXAAIAEAAIAdAAIAHACIAEACIAHADIAEADIADAEIAAADIAAAEIAAADIAAAEIAAACIgCADIgCAEIgCADIgCAEIgFADIgJAEIgEACIgHADIgEACIgGABIghAAIgIgCg");
	this.shape.setTransform(16.4,-8.5);

	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-8.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-23.8,-16.5,47.7,16.6);
p.frameBounds = [rect];


(lib.GunShoot = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GunHand("synched",0);
	this.instance.setTransform(11.6,45.8,0.373,0.373,67.4,0,0,4.2,127.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-0.7,0.5,108.2,64.6);
p.frameBounds = [rect];


(lib.DeadLegs = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ak/FTQhrgVg5hRQhfiIgRhcQggikB/i+QATgCAHANQAEAGAAAHQgOATgRAbQghA1gNAlQgWBDAMBiQAQCCBRBhQBXBnBrgHQBEgEAzgqQAsgkA+gjQBVgwA9gFQBagGCmAPQDAARAtAfQAKARgMAGQgLAFgegIQhSgUhhgNQimgXhmATQhhAShOA8QhIA+gcAOQglATgzAAQgeAAgigHg");
	this.shape.setTransform(42.6,-167.5,0.949,0.949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("ABiEgQighyhDgdQgSDqhJBaQgzA/hpAJQgqAEgUgSQgUgRgFgsQgFgnAPjsQANi8AkhYQAhhUBfhiQAZiJAnhJQASghAtgyQAYgaAlAIQAgAIADARQABAFgnBfQguBugQBJQAuhFAfgVQAUgNAhAAQAXAAgIApQgEASgiBXQCYBUCvCjQBYBSA4BCQgBAFAAAYQgCAWgKAGQhniNkTi9QgTAYgjAlQgtAsgNABQhyANgfgdQgbgbhMhlQg+B1gVD3QgNCeADAlQAFBGAtACQAxACAwgtQAwgsALg4IAWiLQAUh6AMgkQANgpAQAgQAOAegDAdQAlgSD/DDQCABiB5BmIAXAqQAWAugCASQiqiajFiLgAk0isIA6BIQAyA8AKADQARAFAiACQAnACAKgHQAPgKBPhRIgUgPQg3AkhGgCQhegCg2hWQgKAJgJAOgAhClHQgfAYhFCPIgDAGQAaAIAbABIAXgwQAvhtgCgYQgBgHgFAAQgEAAgIAGgAhPiSQAWgBAXgHIgggWgAiBoVQgiAMgkBgQgiBegNBsQgKADgLAHQAXAYAjATQARhzAwhzQAxhlAGgQQAIgUgXAAg");
	this.shape_1.setTransform(-44.5,-85.7,0.949,0.949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2DDC0").s().p("AgqBtQgjgDABgRQANgvAVgvQAphhAigFQAdgEAIACQALAEgHASIhSDEIgRABIgRgBg");
	this.shape_2.setTransform(-53.7,-109.3,0.949,0.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2DDC0").s().p("Ag6CrQgogEAAgaQAQhKAZhKQAziWAugIQAlgJAMAEQAQAGgMAbQgXA3hYD8QgMACgMAAIgQgBg");
	this.shape_3.setTransform(-60.5,-122.9,0.949,0.949);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ah7DGQgih1AylKIAZAbQAeAfAfAWQBgBIA/gqQgQC/gXBAQgxCKiCgFIgGABQgXAAgOg0g");
	this.shape_4.setTransform(-73.2,-59.9,0.949,0.949);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AkIP0QhfhEg5hnQhBh1gKicQgIiUBFjIQA4ijBDhhQjHhPhniZQhXiBgNiqQgLiMAniJQAhh4AvgtQBKhHBQA7QAfAWASAhQARAfgGATQgYAwgMAnQgUBGAMBxQAOB+ByAZQBmAWBkhCQBRg2BwgTQBGgLC5gGQB9gEB6AXQA9AMAkAMQAnAsgiAIQgKACgRgCIgPgCQj2g2jpAeQi9AYhDA2QhIA6hlADQiBAEhAhzQg+hvAQh5QAHgwAkheQAHgTgJgVQgJgTgTgLQgvgcgoAtQgoAtgPA3QgKApgWCpQgTCYBzCxQBuCrB/AlQBoAdBngtQAigPAlgZIAsgfQAbgRAGAOQADAGgDAKQgyBNh5AwQglAPgpAKIggAHIgMAOQgPAVgRAkQg5B0g/DWQhADcBXDEQAzBwBaBWQAzAwAGASQABAFgEAAQgMAAg7gpg");
	this.shape_5.setTransform(39.7,-106,0.949,0.949);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDDAC0").s().p("AggBiQg/gXhTiIIArgoIAPAVQAWAYAcAPQBVAwBzg3QARAHARAXQAKALAFAJIg6AsQg+AsgVADIgcAIQgJABgGAAQgOAAgNgEg");
	this.shape_6.setTransform(-58.2,-96.1,0.949,0.949);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0351").s().p("AgEAoQg4gIgkgSQglgPADgRQACgRAogGQAogGA1AJQA3AIAlARQAlAPgCARQgDARgpAGQgRACgUAAQgaAAgdgEg");
	this.shape_7.setTransform(-58.7,-104,0.949,0.949);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ah2A2QAXiNAjhyQAahUBSAdQAeALAbAWQAaAUAEAMQADAJgUBzQgYCGAEByQgZgfhlA2IhjA8QgSguAbikg");
	this.shape_8.setTransform(-12.5,-178,0.949,0.949);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("ACEQQQgtgLhYhxQhbhxgThEQlhkZirhfQg2gegdgHIgSgCIgLBdQgPBtgTBOQgKAtgnAdQgkAagsAEQgtAEgegVQgigWgCgtQgEhrAaiqQAejAAwhvQAvhoB6ASQBWANB4BJQBLAvCoCmQBUBUBEBJQB9ljA6iFQllirgklMQgNh3Afh8QAYhgAmg/QA2hXBCAwQAZASAMAeQANAfgKAUQgkBPgCBdQgDCRBgBTQBcBRCLgwQAngOBOgmQBNgmAmgNQBegfETAZQCKANB2ASQgEASiDD/QiKENiZEcQmjMOgsAAIgBAAg");
	this.shape_9.setTransform(10.3,-104.9,0.949,0.949);

	this.instance = new lib.Foot();
	this.instance.setTransform(-76.2,-40.9,2.394,2.422,163.5,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.setTransform(-2.5,-204.2,2.533,2.533,-5.5,0,0,-6,-11.5);

	this.addChild(this.instance_1,this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-125.8,-211.7,233.3,205.8);
p.frameBounds = [rect];


(lib.Trap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{trap0:0,trap1:1,trap2:2,trap2f:3});

	// LogAnim
	this.instance = new lib.LogAnimation();
	this.instance.setTransform(-0.5,9.6,1,1,0,0,0,-0.5,-0.4);

	this.instance_1 = new lib.Shadow();
	this.instance_1.setTransform(1.5,-18.7,0.782,2.286,0,0,0,78,17.5);

	this.instance_2 = new lib.Spike2();
	this.instance_2.setTransform(44.4,-0.4,1.102,0.991,0,19.5,-160.5,6,-0.8);

	this.instance_3 = new lib.Spike2();
	this.instance_3.setTransform(49,-109.5,1.102,1.392,0,13.2,-166.8,6,-0.8);

	this.instance_4 = new lib.Spike3();
	this.instance_4.setTransform(5.1,-127.1,0.877,1,-3,0,0,0,-36.4);

	this.instance_5 = new lib.Spike3();
	this.instance_5.setTransform(12.1,-19.6,1,1,7,0,0,-5.5,-2.4);

	this.instance_6 = new lib.Spike1();
	this.instance_6.setTransform(54.4,-50.4,1,0.823,0,9.7,-170.3,3,-0.8);

	this.instance_7 = new lib.Spike1();
	this.instance_7.setTransform(-35.1,-8.9,1.163,1,-22.7,0,0,3,-0.8);

	this.instance_8 = new lib.Spike2();
	this.instance_8.setTransform(-41.9,-121,1,1,0,0,0,6,-0.8);

	this.instance_9 = new lib.Spike1();
	this.instance_9.setTransform(-24.5,-51.4,1,1,0,0,0,3,-0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#933A3A").s().p("AsJMpQgMg+ANiTQARiVABgfQAChrgOlPQgMkVAQioQAEhvALhAQAVh3BDgOQBTgSBlgHQBFgEB3gCQDhgDEJACQBNABCgAAQCMADBgAUQA+ANAYBUQAHAXAPB1QAJBMgMCKQgOCgACA5QAEB5ADEbQACEGAGCQQABAHgEArQgEAxgFAPg");
	this.shape.setTransform(1.5,-73);

	this.instance_10 = new lib.TunnelBackAnim();
	this.instance_10.setTransform(3.5,-256,1,1,0,0,0,66,-150.8);

	this.instance_11 = new lib.TunnelFrontAnim();
	this.instance_11.setTransform(81.5,-215.1,1,1,0,0,0,111.5,-223.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-171.4,126.9,192.9);
p.frameBounds = [rect, new cjs.Rectangle(-76.9,-163.9,156.9,171.9), new cjs.Rectangle(-62.5,-406.9,132.1,301.7), new cjs.Rectangle(-30,-438.8,223.1,447.4)];


(lib.HeroBullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bulletIdle:0,bulletHit:7});

	// timeline functions:
	this.frame_6 = function() {
		this.gotoAndStop("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(5));

	// flash0.ai
	this.instance = new lib.ShotSpark2();
	this.instance.setTransform(-1.7,0.1,0.667,0.667,0,0,0,0,-8);

	this.instance_1 = new lib.ShotSparks();
	this.instance_1.setTransform(-1.1,15.4,0.603,0.513,0,101.5,95.2,-0.1,-2.8);

	this.instance_2 = new lib.ShotSparks();
	this.instance_2.setTransform(-9.8,10.4,0.307,0.539,0,147.9,141.6,-0.1,-2.8);

	this.instance_3 = new lib.ShotSparks();
	this.instance_3.setTransform(-9.9,-2.2,0.307,0.541,0,-155.1,-146.9,-0.2,-2.6);

	this.instance_4 = new lib.ShotSparks();
	this.instance_4.setTransform(-16.2,-17.2,0.7,1,0,-147.4,-142.9,0.1,-2.7);

	this.instance_5 = new lib.ShotSparks();
	this.instance_5.setTransform(-1.3,-18.7,1,1,-90,0,0,0,-2.7);

	this.instance_6 = new lib.ShotSpark2();
	this.instance_6.setTransform(-5.6,4.3,0.246,0.072,0,0,0,0,-7.6);

	this.instance_7 = new lib.ShotSpark2();
	this.instance_7.setTransform(-3.9,2.8,0.246,0.072,0,0,0,0,-7.6);

	this.instance_8 = new lib.ShotSpark2();
	this.instance_8.setTransform(-1.3,-2.2,0.246,0.072,0,0,0,0,-7.6);

	this.instance_9 = new lib.ShotSpark2();
	this.instance_9.setTransform(0.2,-4.2,0.327,0.103,51.2,0,0,0.1,-8);

	this.instance_10 = new lib.ShotSpark2();
	this.instance_10.setTransform(-5.9,-5.9,0.35,0.103,0,0,0,0,-7.8);

	this.instance_11 = new lib.ShotSpark2();
	this.instance_11.setTransform(-19.8,18.9,0.492,0.12,-157,0,0,-0.1,-8.1);

	this.instance_12 = new lib.ShotSpark2();
	this.instance_12.setTransform(-25.8,13.4,0.492,0.249,154.5,0,0,0.1,-7.9);

	this.instance_13 = new lib.ShotSpark2();
	this.instance_13.setTransform(-23.5,1.7,0.492,0.156,-145,0,0,0.1,-8);

	this.instance_14 = new lib.ShotSpark2();
	this.instance_14.setTransform(-19.8,-6,0.492,0.156,0,0,0,0,-8);

	this.instance_15 = new lib.ShotSpark2();
	this.instance_15.setTransform(-26,-16.6,0.553,0.175,0,0,0,0,-8);

	this.instance_16 = new lib.ShotSpark2();
	this.instance_16.setTransform(-21.9,-20.5,0.778,0.3,0,0,0,0,-8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTARIgDgCIgCgCIgBgBIAAgCIAAgCIAAgCIAAgDIAAgCIACgBIACgBIABgBIABgBIADAAIAHAAIADABIADABIACABIAAABIABACIAAACIAAACIAAABIgBADIgBACIgCABIgBABIgBABIgDABIgKAAgAAQgCIgCgCIgBgCIAAgCIAAgCIAAgCIABgBIACgCIABAAIACgBIADABIACACIABACIABABIgBACIAAADIgBABIgBACIgBAAIgDABIgDgBg");
	this.shape.setTransform(-10.5,29.7);

	this.instance_17 = new lib.ShotSpark2();
	this.instance_17.setTransform(-27.3,-27.6,0.261,0.078,-99.8,0,0,0,-7.9);

	this.instance_18 = new lib.ShotSpark2();
	this.instance_18.setTransform(-3.3,-35.4,0.353,0.112,-99.8,0,0,0,-8.2);

	this.instance_19 = new lib.ShotSpark2();
	this.instance_19.setTransform(-1,-39.6,0.353,0.112,0,0,0,0,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.667,scaleY:0.667,x:-1.7,y:0.1,regY:-8,regX:0,rotation:0}}]},7).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{regX:-0.1,regY:-2.8,scaleX:0.307,scaleY:0.539,rotation:0,skewX:147.9,skewY:141.6,x:-9.8,y:10.4}},{t:this.instance_1,p:{regX:-0.1,regY:-2.8,scaleX:0.603,scaleY:0.513,skewX:101.5,skewY:95.2,x:-1.1,y:15.4}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-1.3,y:-0.6,regY:-8,regX:0,rotation:0}}]},1).to({state:[{t:this.shape},{t:this.instance_2,p:{regX:0,regY:-2.7,scaleX:0.481,scaleY:0.481,rotation:-90,skewX:0,skewY:0,x:-2.7,y:-26.5}},{t:this.instance_16,p:{regY:-8,scaleX:0.778,scaleY:0.3,rotation:0,x:-21.9,y:-20.5}},{t:this.instance_15,p:{regX:0,regY:-8,scaleX:0.553,scaleY:0.175,rotation:0,x:-26,y:-16.6}},{t:this.instance_14,p:{regX:0,regY:-8,scaleX:0.492,scaleY:0.156,rotation:0,x:-19.8,y:-6}},{t:this.instance_13,p:{regX:0.1,regY:-8,scaleX:0.492,scaleY:0.156,rotation:-145,x:-23.5}},{t:this.instance_12,p:{regX:0.1,regY:-7.9,scaleX:0.492,scaleY:0.249,rotation:154.5,x:-25.8,y:13.4}},{t:this.instance_11,p:{regX:-0.1,regY:-8.1,scaleX:0.492,scaleY:0.12,rotation:-157,x:-19.8,y:18.9}},{t:this.instance_10,p:{regX:0,regY:-7.8,scaleX:0.35,scaleY:0.103,rotation:0,x:-5.9,y:-5.9}},{t:this.instance_9,p:{regX:0.1,regY:-8,scaleX:0.327,scaleY:0.103,rotation:51.2,x:0.2,y:-4.2}},{t:this.instance_8,p:{regX:0,regY:-7.6,scaleX:0.246,rotation:0,x:-1.3,y:-2.2}},{t:this.instance_7,p:{regX:0,regY:-7.6,scaleX:0.246,scaleY:0.072,rotation:0,x:-3.9,y:2.8}},{t:this.instance_6,p:{regX:0,regY:-7.6,scaleX:0.246,scaleY:0.072,rotation:0,x:-5.6,y:4.3}},{t:this.instance,p:{scaleX:0.246,scaleY:0.072,x:-1.6,y:6,regY:-7.6,regX:0,rotation:0}},{t:this.instance_1,p:{regX:0,regY:-2.7,scaleX:0.585,scaleY:0.481,skewX:-90,skewY:90,x:-1.7,y:29.1}}]},1).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16,p:{regY:-7.9,scaleX:0.261,scaleY:0.078,rotation:-99.8,x:-31.3,y:-26.5}},{t:this.instance_15,p:{regX:0.1,regY:-8.1,scaleX:0.261,scaleY:0.078,rotation:-31.3,x:-30.3,y:-16.4}},{t:this.instance_14,p:{regX:0.1,regY:-8.1,scaleX:0.261,scaleY:0.078,rotation:-31.3,x:-37.4,y:-13.9}},{t:this.instance_13,p:{regX:0.2,regY:-8.3,scaleX:0.331,scaleY:0.078,rotation:-7.5,x:-32.3}},{t:this.instance_12,p:{regX:0.4,regY:-8.2,scaleX:0.331,scaleY:0.078,rotation:-33.2,x:-32.1,y:4}},{t:this.instance_11,p:{regX:0.2,regY:-9,scaleX:0.331,scaleY:0.1,rotation:-5.3,x:-31.5,y:14.4}},{t:this.instance_10,p:{regX:0.1,regY:-8.4,scaleX:0.331,scaleY:0.072,rotation:-14.2,x:-32,y:18}},{t:this.instance_9,p:{regX:0.2,regY:-9,scaleX:0.331,scaleY:0.1,rotation:-5.3,x:-26,y:22.8}},{t:this.instance_8,p:{regX:0.3,regY:-8.4,scaleX:0.331,rotation:-44.3,x:-16.6,y:34.5}},{t:this.instance_7,p:{regX:0.1,regY:-9.9,scaleX:0.331,scaleY:0.071,rotation:40.7,x:-18.7,y:39.6}},{t:this.instance_6,p:{regX:0.2,regY:-8.9,scaleX:0.258,scaleY:0.078,rotation:-5.3,x:-7.1,y:42}},{t:this.instance,p:{scaleX:0.258,scaleY:0.092,x:-4.3,y:41.9,regY:-8.7,regX:0.1,rotation:-86}}]},1).wait(1));

	// bulletanim
	this.instance_20 = new lib.HeroBulletAnim();
	this.instance_20.setTransform(-2.2,0.6,1.277,0.608,0,0,0,21.5,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:21.6,scaleX:0.87,scaleY:1.06,x:-2.1},2).to({scaleX:0.64,scaleY:1.87,x:-1.6},2).to({regX:21.5,scaleX:1.16,scaleY:0.61,x:-2.2},2).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.1,-4.6,60.9,10.1);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-41.6,-8.5,41.4,17.5), rect, rect=new cjs.Rectangle(-30.6,-15.6,30.4,31), rect, new cjs.Rectangle(-54.7,-4.6,55.2,10.1), new cjs.Rectangle(-3.3,-5.3,3.2,10.7), new cjs.Rectangle(-21.4,-25.4,22.8,45.2), new cjs.Rectangle(-27.6,-29.8,29,62.8), new cjs.Rectangle(-38.2,-40.5,38.1,83.2)];


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,run:1,shoot:13,jump:25,death:39,slide:61,tunneldeath:77});

	// eyesdead
	this.instance = new lib.DeadEyes();
	this.instance.setTransform(400.8,-6.1,0.382,0.382,-5.2,0,0,-0.1,-62);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(1).to({regX:0,x:436.2,y:-5.9},0).wait(1).to({x:465.1,y:-5.7},0).wait(1).to({x:487.6,y:-5.6},0).wait(1).to({x:503.7,y:-5.5},0).wait(1).to({x:513.3,y:-5.4},0).wait(1).to({regX:-0.1,x:516.5},0).to({_off:true},7).wait(26).to({_off:false,regY:-61.9,rotation:-168.7,x:-3.3,y:-53.5},0).to({regY:-62,rotation:-161.2,x:-2.4,y:-51.5},3).wait(1));

	// head
	this.instance_1 = new lib.Head("synched",0);
	this.instance_1.setTransform(13.3,-144.9,0.373,0.373,0,0,0,-40.3,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({regX:-40.1,regY:151.6,scaleY:0.38,rotation:-1.4,x:12.3,y:-151.6},5).to({regX:-40.3,regY:151.5,scaleY:0.37,rotation:0,x:13.3,y:-144.9},6).to({regX:-40.1,regY:151.6,scaleY:0.38,rotation:-1.4,x:12.3,y:-151.6},1).to({startPosition:0},2).to({regX:-39.9,regY:151.5,rotation:2.1,x:9.7,y:-151.5},2).to({regX:-40.1,regY:151.6,rotation:-1.4,x:12.3,y:-151.6},7).to({regX:-40.3,regY:151.5,scaleY:0.37,rotation:0,x:13.3,y:-145.9},1).to({regY:151.6,rotation:0.7,x:9.7,y:-256.4},2).to({regX:-40,regY:151.4,rotation:-69,x:1.4,y:-277.5},2).to({regY:151.5,rotation:-149.9,x:4.7,y:-298.1},2).to({regY:151.3,rotation:-219.8,x:5.2,y:-286.2},2).to({regY:151.2,rotation:-284.8,x:25.2,y:-258.1},2).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},3).to({startPosition:0},1).to({regY:151.6,rotation:-277,x:363.7,y:-9.6},9).wait(1).to({regX:-1.4,regY:0,rotation:-276.7,x:457.1,y:-1.5},0).wait(1).to({rotation:-276.5,x:486.1,y:-1},0).wait(1).to({rotation:-276.3,x:508.6,y:-0.6},0).wait(1).to({rotation:-276.2,x:524.7,y:-0.4},0).wait(1).to({rotation:-276.1,x:534.4,y:-0.3},0).wait(1).to({regX:-40.5,regY:151.7,x:479.8,y:-8.7},0).to({startPosition:0},6).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},1).to({regX:-40.4,regY:151.4,rotation:-403.4,x:-10.8,y:-76.9},5).to({startPosition:0},1).to({regX:-40.6,regY:151.5,rotation:-409.9,x:-13.8,y:-73.9},3).to({regX:-40.4,regY:151.4,rotation:-403.4,x:-10.8,y:-76.9},3).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},3).to({startPosition:0},1).to({regX:-40.4,regY:151.2,rotation:-445.9,x:29.4,y:-133.7},4).to({regY:151.3,rotation:-442.2,y:-41.7},5).to({regX:-40.3,rotation:-436.9,x:29.3,y:-36.8},2).to({regY:151.2,rotation:-431.5,y:-31.8},2).wait(1));

	// body
	this.instance_2 = new lib.Body("synched",0);
	this.instance_2.setTransform(24.5,-66.6,0.373,0.373,0,0,0,28.2,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).to({regX:27.9,scaleX:0.36,scaleY:0.39,rotation:-1.4,x:24.4,y:-69.6},5).to({regX:28.2,scaleX:0.37,scaleY:0.37,rotation:0,x:24.5,y:-66.6},6).to({regX:27.9,scaleX:0.36,scaleY:0.39,rotation:-1.4,x:24.4,y:-69.6},1).to({startPosition:0},2).to({regX:28,rotation:-2,x:21.5},2).to({regX:27.9,rotation:-1.4,x:24.4},7).to({regX:28.2,scaleX:0.37,scaleY:0.37,rotation:0,x:24.5,y:-67.6},1).to({regX:28.1,regY:102,rotation:-7.2,x:29.5,y:-190.1},2).to({regY:101.9,rotation:-65.5,x:72.5,y:-256.8},2).to({rotation:-129,x:54.9,y:-352.4},2).to({regY:101.8,rotation:-193.7,x:-22.4,y:-354.8},2).to({regX:27.9,regY:101.9,rotation:-258.7,x:-48.8,y:-262.2},2).to({regX:28.2,regY:101.8,rotation:-360,x:24.5,y:-66.6},3).to({startPosition:0},1).to({regX:28,regY:101.9,rotation:-265.6,x:284.8,y:-4.6},9).wait(1).to({regX:-1.3,regY:-0.1,rotation:-263.5,x:359.3,y:-11.2},0).wait(1).to({rotation:-261.9,x:388.5,y:-10},0).wait(1).to({rotation:-260.6,x:411.2,y:-9.1},0).wait(1).to({rotation:-259.6,x:427.4,y:-8.5},0).wait(1).to({rotation:-259.1,x:437.1,y:-8.1},0).wait(1).to({regX:28.1,regY:101.8,rotation:-258.9,x:400.9,y:-4.6},0).to({startPosition:0},6).to({regX:28.2,rotation:-360,x:24.5,y:-66.6},1).to({regX:27.9,regY:101.9,rotation:-398.4,x:52.5,y:-34.7},5).to({startPosition:0},1).to({regX:28.2,regY:101.6,rotation:-401.9},3).to({regX:27.9,regY:101.9,rotation:-398.4},3).to({regX:28.2,regY:101.8,rotation:-360,x:24.5,y:-66.6},3).to({startPosition:0},1).to({regX:28.1,regY:101.7,rotation:-408,x:92,y:-86.7},4).to({regX:28.2,regY:101.8,rotation:-475.4,x:92.8,y:-85.7},5).to({regX:27.9,regY:101.9,rotation:-459,x:101.1,y:-63.5},2).to({regX:28.2,rotation:-442.7,x:109.4,y:-41.3},2).wait(1));

	// handfront
	this.instance_3 = new lib.HandFront("synched",0);
	this.instance_3.setTransform(-45.9,-79.3,0.373,0.373,0,0,0,-18.8,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({regY:-81.8,scaleY:0.35,rotation:14,x:-52.8,y:-84.1},5).to({regY:-81.7,scaleY:0.37,rotation:0,x:-45.9,y:-79.3},6).to({regX:-18.9,regY:-81.8,scaleY:0.35,rotation:8.5,x:-47.3,y:-80.1},1).to({regX:-18.8,rotation:14,x:-52.8,y:-84.2},2).to({regX:-18.9,regY:-81.7,rotation:8.3,x:-52.5,y:-81},2).to({regX:-18.8,regY:-81.8,rotation:14,x:-52.8,y:-84.1},7).to({regY:-81.7,scaleY:0.37,rotation:0,x:-45.9,y:-80.3},1).to({regX:-18.7,regY:-81.8,rotation:-18.9,x:-28.6,y:-189.3},2).to({regX:-18.5,regY:-81.7,rotation:-64.5,x:33,y:-198.6},2).to({regX:-18.6,rotation:-128.2,x:88.4,y:-289.5},2).to({regX:-18.5,rotation:-211.6,x:27.9,y:-363.3},2).to({regY:-81.6,rotation:-252.9,x:-17.9,y:-331.5},2).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},3).to({startPosition:0},1).to({regX:-18.7,regY:-81.4,rotation:-255.6,x:292.6,y:-55.5},9).wait(1).to({regX:0.7,regY:0,rotation:-258.4,x:296.1,y:-51.2},0).wait(1).to({rotation:-260.7,x:324.7,y:-47.2},0).wait(1).to({rotation:-262.5,x:346.9,y:-44.2},0).wait(1).to({rotation:-263.8,x:362.8,y:-42},0).wait(1).to({rotation:-264.5,x:372.4,y:-40.6},0).wait(1).to({regX:-18.9,regY:-81.8,rotation:-264.8,x:406.5,y:-44.7},0).to({regY:-81.4,rotation:-263.3},6).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},1).to({regX:-18.9,regY:-81.8,rotation:-297.5,x:-60.4,y:-10.9},5).to({startPosition:0},1).to({regX:-19,regY:-82,rotation:-292.4,x:-62.8,y:-13},3).to({regX:-18.9,regY:-81.8,rotation:-297.5,x:-60.4,y:-10.9},3).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},3).to({startPosition:0},1).to({regX:-18.9,rotation:-421.9,x:49.5,y:-48.9},4).to({regX:-18.7,regY:-81.8,rotation:-496.4,x:109.5,y:-39},5).to({regY:-81.9,rotation:-451.9,x:93.5,y:18.6},4).wait(1));

	// armfront
	this.instance_4 = new lib.ArmFront("synched",0);
	this.instance_4.setTransform(-8.5,-137.1,0.373,0.373,0,0,0,50.9,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({regX:51,regY:-81.9,rotation:5.8,x:-9.7,y:-138},5).to({regX:50.9,regY:-81.7,rotation:0,x:-8.5,y:-137.1},6).to({regX:51,regY:-81.9,rotation:0.3,x:-9.4,y:-137.8},1).to({regX:50.9,regY:-82,rotation:5.8,x:-9.7,y:-138},2).to({regX:50.6,regY:-81.8,rotation:1.4,x:-13.7},2).to({regX:51,regY:-81.9,rotation:5.8,x:-9.7},7).to({regX:50.9,regY:-81.7,rotation:0,x:-8.5,y:-138.1},1).to({regX:50.8,rotation:-18.9,x:-12,y:-256.1},2).to({regX:51,rotation:-64.5,x:-3.2,y:-257.3},2).to({regX:51.1,rotation:-128.2,x:19.8,y:-283.1},2).to({regY:-81.8,rotation:-211.6,x:26.4,y:-294.4},2).to({regX:51.2,regY:-81.9,rotation:-252.9,x:26.6,y:-278.7},2).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},3).to({startPosition:0},1).to({regX:51.1,regY:-81.8,rotation:-283.8,x:357.6,y:-32.8},9).wait(1).to({regX:-0.6,regY:0,rotation:-287,x:358.2,y:-42.1},0).wait(1).to({rotation:-289.7,x:386.8,y:-40.4},0).wait(1).to({rotation:-291.7,x:409.1,y:-39.1},0).wait(1).to({rotation:-293.2,x:425.1,y:-38.1},0).wait(1).to({rotation:-294,x:434.6,y:-37.5},0).wait(1).to({regX:51,regY:-81.8,rotation:-294.3,x:473.6,y:-32.4},0).to({startPosition:0},6).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},1).to({regX:51.1,regY:-81.9,rotation:-353.3,x:-16.5,y:-63.9},5).to({startPosition:0},1).to({regX:50.9,regY:-81.8,rotation:-350.3,x:-16.3,y:-63.7},3).to({regX:51.1,regY:-81.9,rotation:-353.3,x:-16.5,y:-63.9},3).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},3).to({startPosition:0},1).to({regX:51,rotation:-421.9,x:16.1,y:-109.2},4).to({regX:51.1,rotation:-496.4,x:42.4,y:-22.9},5).to({regX:50.9,rotation:-451.9,x:34.3,y:-16.9},4).wait(1));

	// gunhand
	this.instance_5 = new lib.GunHand("synched",0);
	this.instance_5.setTransform(82.5,-134.2,0.373,0.373,0,0,0,4,127.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).to({regY:127.2,rotation:9.5,x:83.5,y:-132.8},5).to({regY:127.4,rotation:0,x:82.5,y:-134.2},6).to({regY:127.2,rotation:9.5,x:83.5,y:-132.8},1).wait(1).to({regX:3.9,regY:127.1,rotation:17.9,x:86.1,y:-132.3},0).to({_off:true},1).wait(10).to({_off:false,regX:4,regY:127.4,rotation:0,x:82.5,y:-135.2},0).to({regX:4.1,regY:127.5,rotation:30,x:70,y:-230.8},2).to({regX:4.2,regY:127.6,rotation:-28.3,x:59.3,y:-312.6},2).to({regY:127.8,rotation:-91.8,x:-0.9,y:-365.4},2).to({regY:127.7,rotation:-180.7,x:-61,y:-286.9},2).to({regY:127.8,rotation:-245.7,x:-3.4,y:-198.4},2).to({regX:4,regY:127.4,rotation:-360,x:82.5,y:-134.2},3).to({startPosition:0},1).to({regY:127.3,rotation:-294.3,x:396.7,y:32.4},9).wait(1).to({regX:0.4,regY:1.8,rotation:-298.7,x:474.5,y:5.7},0).wait(1).to({rotation:-302.3,x:503.6,y:0.8},0).wait(1).to({rotation:-305.1,x:526,y:-3},0).wait(1).to({rotation:-307.1,x:542,y:-5.7},0).wait(1).to({rotation:-308.3,x:551.6,y:-7.3},0).wait(1).to({regX:3.9,regY:127.2,rotation:-308.7,x:519.1,y:22.5},0).to({startPosition:0},6).to({regX:4,regY:127.4,rotation:-360,x:82.5,y:-134.2},1).to({regY:127.3,rotation:-419.9,x:34.4,y:-135.2},5).to({startPosition:0},1).to({regX:4.2,regY:127.2,rotation:-426.4,x:27.9,y:-137.4},3).to({regX:4,regY:127.3,rotation:-419.9,x:34.4,y:-135.2},3).to({regY:127.4,rotation:-360,x:82.5,y:-134.2},3).to({startPosition:0},1).to({regX:4.2,rotation:-439.2,x:52.6,y:-168.2},4).to({regY:127.6,rotation:-472,x:15.2,y:-105.4},5).to({regY:127.5,rotation:-490.3,x:-2.9,y:-81.1},4).wait(1));

	// gunhandshoot
	this.instance_6 = new lib.GunShoot();
	this.instance_6.setTransform(131.2,-148.4,1,1,4.5,0,0,54.2,33.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(2).to({regX:54.1,rotation:3.7,x:121.5},0).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:-59.9,skewY:-62.1,x:78.8,y:-217.7},3).wait(1).to({skewX:-67.6,skewY:-69.8},0).to({skewX:-59.9,skewY:-62.1,x:96.3,y:-176.2},3).to({_off:true},1).wait(66));

	// armback
	this.instance_7 = new lib.ArmBack("synched",0);
	this.instance_7.setTransform(26.4,-135.8,0.373,0.373,0,0,0,-81.7,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).to({regY:-33.6,rotation:8,x:28.1,y:-142.3},5).to({regY:-33.5,rotation:0,x:26.4,y:-135.8},6).to({regY:-33.6,rotation:8,x:28.1,y:-142.3},1).wait(1).to({regY:-33.5,scaleX:0.42,rotation:6,x:26.4,y:-143.8},0).to({_off:true},1).wait(6).to({_off:false,regY:-33.4,rotation:-42.2},0).to({regY:-33.5,rotation:6},3).wait(1).to({scaleX:0.37,rotation:0,y:-136.8},0).to({regX:-81.5,regY:-33.4,rotation:30,x:22.3,y:-260.2},2).to({rotation:-28.3,x:9.1,y:-287.5},2).to({rotation:-91.8,x:-0.9,y:-309.4},2).to({regX:-81.4,regY:-33.2,rotation:-180.7,x:-4.8,y:-285.9},2).to({rotation:-245.7,x:21.2,y:-248.9},2).to({regX:-81.7,regY:-33.5,rotation:-360,x:26.4,y:-135.8},3).to({startPosition:0},1).to({regX:-82,regY:-33.2,rotation:-294.3,x:374.9,y:-19.3},9).wait(1).to({regX:-0.8,regY:-0.1,rotation:-298.7,x:412.3,y:12.3},0).wait(1).to({rotation:-302.3,x:441.9,y:11.3},0).wait(1).to({rotation:-305.1,x:464.9,y:10.4},0).wait(1).to({rotation:-307.1,x:481.3,y:9.7},0).wait(1).to({rotation:-308.3,x:491.2,y:9.3},0).wait(1).to({regX:-82,regY:-33.2,rotation:-308.7,x:485.1,y:-22.2},0).to({startPosition:0},6).to({regX:-81.7,regY:-33.5,rotation:-360,x:26.4,y:-135.8},1).to({regX:-81.9,rotation:-419.9,x:4.8,y:-87.4},5).to({startPosition:0},1).to({regX:-81.5,regY:-33.3,rotation:-426.4,x:4,y:-86.5},3).to({regX:-81.9,regY:-33.5,rotation:-419.9,x:4.8,y:-87.4},3).to({regX:-81.7,rotation:-360,x:26.4,y:-135.8},4).to({regX:-81.6,rotation:-439.2,x:40.4,y:-113.4},4).to({regX:-81.5,rotation:-472,x:34.6,y:-52.7},5).to({regX:-81.7,rotation:-490.3,x:32,y:-37.1},4).wait(1));

	// armbackshoot
	this.armshoot = new lib.ArmShoot();
	this.armshoot.setTransform(64.1,-141.1,0.377,0.455,0,0,0,11,-51.4);
	this.armshoot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.armshoot).wait(15).to({_off:false},0).wait(2).to({x:54.4},0).to({regY:-51.5,scaleX:0.35,rotation:-43.7,x:47.5,y:-160.3},3).to({_off:true},1).wait(70));

	// legsbroken
	this.instance_8 = new lib.DeadLegs();
	this.instance_8.setTransform(16.1,-43.7,0.4,0.4,-114.3,0,0,0,-114.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({regX:-0.1,regY:-114.9,rotation:-19.8,x:262.2,y:-14.8},9).wait(1).to({regX:-13.3,regY:-116.2,rotation:-18.6,x:292.4,y:-13.9},0).wait(1).to({rotation:-17.6,x:321.4,y:-14.2},0).wait(1).to({rotation:-16.8,x:344,y:-14.5},0).wait(1).to({rotation:-16.3,x:360.1,y:-14.7},0).wait(1).to({rotation:-15.9,x:369.8,y:-14.8},0).wait(1).to({regX:-0.2,regY:-114.8,rotation:-15.8,x:378.2,y:-15.8},0).to({_off:true},7).wait(28).to({_off:false,regX:-0.4,rotation:150.2,x:133.2,y:-45.7},0).wait(1).to({regX:-0.3,rotation:156.7,y:-33.7},0).wait(1));

	// legsjump
	this.instance_9 = new lib.LegsJump();
	this.instance_9.setTransform(26.9,-68.3,0.382,0.382,0,0,0,130.8,25.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).to({regX:130.9,regY:25.7,rotation:-19.7,x:32.3,y:-197},2).to({regX:131.1,regY:25.8,rotation:-77.9,x:68.2,y:-262.9},2).to({regX:130.9,rotation:-127.9,x:47.5,y:-351.2},2).to({regX:131,regY:25.7,rotation:-188.6,x:-24.5,y:-347.7},2).to({regX:130.9,regY:25.8,rotation:-266.4,x:-42.1,y:-256.1},2).to({regX:130.8,regY:25.9,rotation:-360,x:26.9,y:-67.3},3).to({_off:true},1).wait(52));

	// legslide
	this.instance_10 = new lib.SlideLegs("synched",0);
	this.instance_10.setTransform(35,-49.5,0.325,0.689,0,0,0,0,-72.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(62).to({_off:false},0).to({scaleX:0.4,scaleY:0.42,x:64.5,y:-30},4).wait(1).to({startPosition:0},0).to({scaleX:0.41,scaleY:0.41,x:67,y:-29},3).to({scaleX:0.4,scaleY:0.42,x:64.5,y:-30},3).to({scaleX:0.33,scaleY:0.69,x:35,y:-49.5},3).to({_off:true},1).wait(14));

	// Foot
	this.instance_11 = new lib.Foot();
	this.instance_11.setTransform(83,-5.9,0.945,0.956,-16.7,0,0,-6,-11.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(62).to({_off:false},0).to({rotation:-12.2,x:123,y:-6.4},4).wait(1).to({x:126},3).to({x:123},3).to({rotation:-16.7,x:83,y:-5.9},3).to({_off:true},1).wait(14));

	// Foot2
	this.instance_12 = new lib.Foot();
	this.instance_12.setTransform(-16.9,-9.4,1,1,8.7,0,0,-6,-11.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(62).to({_off:false},0).to({rotation:114.5,x:3},4).wait(1).to({rotation:117.5,x:3.9,y:-9.3},3).to({rotation:114.5,x:3,y:-9.4},3).to({rotation:8.7,x:-16.9},3).to({_off:true},1).wait(14));

	// legs
	this.instance_13 = new lib.HeroLegs("single",0);
	this.instance_13.setTransform(17.1,-37.8,1,1,0,0,0,70.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:10},0).to({_off:true},2).wait(36).to({_off:false,startPosition:0},0).to({_off:true},1).wait(15).to({_off:false},0).to({rotation:-41.2,x:104.1,y:-58.8},4).to({rotation:-126.5,x:127.1,y:-100.7},4).to({regY:42.8,rotation:-98.6,x:131.1,y:-59.8},3).to({_off:true},1).wait(2));

	// shadow
	this.instance_14 = new lib.Shadow();
	this.instance_14.setTransform(23.5,-0.1,0.601,0.601,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({regX:77.9,scaleX:0.35,scaleY:0.35},7).wait(2).to({regX:78,scaleX:0.6,scaleY:0.6},4).wait(1).to({regX:77.9,scaleX:1.83,scaleY:0.72,x:364,y:23.9},9).to({x:468},6,cjs.Ease.get(1)).wait(7).to({regX:78,scaleX:0.6,scaleY:0.6,x:23.5,y:-0.1},0).to({scaleX:1.08,x:61},5).wait(11).to({scaleX:0.6,x:23.5},0).to({regX:77.9,scaleX:1.2,x:46.4},6).wait(8));

	// deadblood
	this.instance_15 = new lib.DeadBlood();
	this.instance_15.setTransform(320.6,25,1,1,0,0,0,0,-19.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({scaleX:2.13,x:414.1},6).to({scaleX:2.24,scaleY:1.22,x:422.5,y:27.7},6).to({_off:true},1).wait(28).to({_off:false,scaleX:1,scaleY:1,rotation:-0.5,x:49.5,y:-3},0).wait(1).to({scaleX:1.09},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.7,-261.7,170.1,272.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-70.2,-268,184.9,278.4), rect, rect, rect, rect, rect=new cjs.Rectangle(-73.6,-269.7,189,280.1), rect, rect, rect, rect, rect, new cjs.Rectangle(-58.7,-261.7,170.1,272.2), new cjs.Rectangle(-68.8,-269.7,184.3,280.1), new cjs.Rectangle(-68.8,-269.7,197,280.1), rect=new cjs.Rectangle(-73.6,-269.7,267.6,280.2), rect, rect=new cjs.Rectangle(-72.8,-269.8,257.2,280.3), rect, rect, new cjs.Rectangle(-72.8,-278.9,178.8,289.3), rect=new cjs.Rectangle(-72.8,-274.1,177.5,284.5), rect, rect, new cjs.Rectangle(-73.6,-269.7,197.1,280.1), rect=new cjs.Rectangle(-58.7,-318,172.1,328.4), rect, rect=new cjs.Rectangle(-83.6,-401.6,213.5,412), rect, rect=new cjs.Rectangle(-126.2,-405.3,260.3,415.8), rect, new cjs.Rectangle(-118.3,-418.6,252,429), new cjs.Rectangle(-118.3,-418.6,252,424.6), rect=new cjs.Rectangle(-89.5,-414.5,218.8,420.6), rect, rect=new cjs.Rectangle(-104.3,-355.2,259.7,361.3), rect, rect, new cjs.Rectangle(-58.7,-261.7,170.1,272.2), rect=new cjs.Rectangle(-58.7,-261.7,510.8,294.1), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(217.5,-77.2,383,135.4), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(227.4,-66.3,383.1,124.7), rect, rect, rect, rect, rect, new cjs.Rectangle(226.9,-66.3,383.6,124.6), new cjs.Rectangle(-101.7,-261.7,213.1,295.1), rect=new cjs.Rectangle(-101.7,-261.7,220.3,295.1), rect, rect, rect, new cjs.Rectangle(-110.3,-210.5,255.6,248.9), rect=new cjs.Rectangle(-113.9,-210.5,259.3,248.9), rect, rect, rect=new cjs.Rectangle(-116.1,-208.6,261.5,244.9), rect, rect, rect=new cjs.Rectangle(-110.3,-247.8,255.6,286.3), rect, rect, new cjs.Rectangle(-58.7,-261.7,204,272.2), rect=new cjs.Rectangle(-83.8,-272.9,219.6,283.3), rect, rect, rect, rect=new cjs.Rectangle(-87.7,-220.2,253.7,230.6), rect, rect, rect, new cjs.Rectangle(-87.7,-220.2,262.5,230.6), rect=new cjs.Rectangle(-87.5,-155.1,262.3,172.3), rect, new cjs.Rectangle(-86.4,-139.7,260.7,156.9), new cjs.Rectangle(-86.4,-139.7,267.3,159.6), new cjs.Rectangle(-86.1,-141.2,265.1,172.6)];


(lib.EnemyMoose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enemy1Idle:0,enemy1Death:16});

	// MooseDeathEyes
	this.instance = new lib.MooseDeathEyes();
	this.instance.setTransform(-8.2,-157,1,1,0,0,0,0,-54.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({regX:0.1,regY:-54.7,rotation:6.2,x:-4.2,y:-170.6},4).to({regX:0,rotation:5,x:-0.7,y:-174.6},2).to({regX:0.1,regY:-54.6,rotation:1.5,x:12.3,y:-27},5).to({regX:0,scaleX:1.25,scaleY:0.58,rotation:1.7,x:11.6,y:-11.8},2).to({regX:0.1,scaleX:1.06,scaleY:0.89,rotation:1.5,x:12.2,y:-24.5},3).wait(5));

	// MooseEyes
	this.instance_1 = new lib.MooseEyes();
	this.instance_1.setTransform(-8.2,-157,1,1,0,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:0.93,y:-147.5},2).to({scaleX:0.91,scaleY:1.13,y:-206},3).to({scaleY:1.09,y:-212.5},2).to({scaleX:1.08,scaleY:0.93,y:-147.5},3).to({regY:-54.7,scaleX:1.12,scaleY:0.88,y:-140.9},2).to({regY:-54.6,scaleX:1,scaleY:1,y:-157},3).to({_off:true},1).wait(21));

	// MooseDeathTop
	this.instance_2 = new lib.MooseDeathTop();
	this.instance_2.setTransform(-4.7,-157.1,1,1,0,0,0,1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({rotation:-3.2,x:4.3,y:-213.1},5).to({rotation:-0.3,x:11.3,y:-119.6},6).to({scaleX:1.1,scaleY:0.83,rotation:-0.3,y:-118.6},3).to({scaleX:1.04,scaleY:0.89,y:-119.6},2).wait(5));

	// mooseDeathBlood
	this.instance_3 = new lib.MooseBlood();
	this.instance_3.setTransform(8.8,-124.8,0.951,0.284,0,0,0,0.6,-26.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regX:0.5,scaleX:0.97,scaleY:0.64,y:-124.9},3).to({scaleX:0.98,scaleY:1},3).wait(4));

	// mooseBottomDeath
	this.instance_4 = new lib.MooseBottomDeath();
	this.instance_4.setTransform(48.5,-13.3,1,1,0,0,0,52,-1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({regX:51.9,regY:-1.5,rotation:7.7,y:-13.4},3).to({regX:52,regY:-1.4,rotation:0,y:-13.3},4).wait(4).to({regY:-1.5,scaleX:1.02,scaleY:0.98,x:48.9},3).to({regY:-1.4,scaleX:1,scaleY:1,x:48.5},2).wait(5));

	// MooseBody
	this.instance_5 = new lib.MooseTween("synched",0);
	this.instance_5.setTransform(-3.8,-18.5,1,1,0,0,0,-0.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.03,scaleY:0.95},2).to({scaleX:0.89,scaleY:1.14,y:-42},3).to({regX:-0.6,scaleY:1.07,x:-3.9,y:-59},2).to({regX:-0.5,scaleX:1.03,scaleY:0.95,x:-3.8,y:-18.5},3).to({regX:-0.6,regY:90.1,scaleX:1.08,scaleY:0.9,x:-4,y:-18.4},2).to({regX:-0.5,regY:90,scaleX:1,scaleY:1,x:-3.8,y:-18.5},3).to({_off:true},1).wait(21));

	// mooseChunk2
	this.instance_6 = new lib.MooseChunk1();
	this.instance_6.setTransform(50.5,-156,0.817,0.817,-63.9,0,0,0.1,-18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({regY:-18.4,scaleX:0.75,scaleY:0.75,rotation:-52.6,x:222.5,y:-107},5).to({_off:true},1).wait(15));

	// flash0.ai
	this.instance_7 = new lib.MooseChunk1();
	this.instance_7.setTransform(70.5,-146,1,1,0,0,0,0,-18.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({regY:-18.4,rotation:77,x:200.5,y:-70},5).to({_off:true},1).wait(15));

	// pinkchunk
	this.instance_8 = new lib.PinkChunk1();
	this.instance_8.setTransform(58,-131.7,1,1,0,0,0,0,-16.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:54.7,x:128,y:-118.7},3).to({scaleX:1,scaleY:1,rotation:91,x:178,y:-111.7},2).to({_off:true},1).wait(15));

	// blooddrop3
	this.instance_9 = new lib.BloodDrop1();
	this.instance_9.setTransform(63.2,-127.4,1.153,1.153,11.7,0,0,0.1,-7.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({rotation:32.7,x:124.2,y:-86.4},3).to({_off:true},1).wait(17));

	// blooddrop2
	this.instance_10 = new lib.BloodDrop1();
	this.instance_10.setTransform(62.2,-149.4,1.153,1.153,-28.8,0,0,0.1,-7.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,rotation:-21.3,x:119.4,y:-177.9},3).to({_off:true},1).wait(17));

	// blooddrop1
	this.instance_11 = new lib.BloodDrop1();
	this.instance_11.setTransform(58.8,-137.8,1.153,1.153,-4.5,0,0,0,-7.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({regX:-0.1,scaleX:1.41,scaleY:1.41,rotation:-2.2,x:147.2,y:-138},3).to({_off:true},1).wait(17));

	// MooseAntler
	this.instance_12 = new lib.MooseAntler();
	this.instance_12.setTransform(-99.6,-163.8,1,1,0,0,180,0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:6.7,skewY:186.7,x:-100.1,y:-157.3},2).to({regX:0.1,skewX:-4.2,skewY:175.8,x:-93.6,y:-202.8},3).to({skewX:2,skewY:182,x:-93.7,y:-211.3},2).to({regX:0,skewX:6.7,skewY:186.7,x:-100.1,y:-157.3},3).to({regX:0.1,skewX:5.5,skewY:185.5,x:-105.6,y:-149.3},2).to({regX:0,skewX:0,skewY:180,x:-99.6,y:-163.8},3).wait(1).to({regX:-0.1,skewX:-60.6,skewY:119.4,x:-95.4,y:-72.4},5).to({skewX:-5.6,skewY:174.4,x:-83.4,y:-69.7},5).to({skewX:-8.1,skewY:171.9,x:-85.4},6).wait(5));

	// MooseAntler
	this.instance_13 = new lib.MooseAntler();
	this.instance_13.setTransform(92,-163.8,1,1,0,0,0,0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-6.7,x:89.5,y:-160.3},2).to({rotation:7.7,x:85,y:-204.8},3).to({regY:-31.5,rotation:-4.3,x:84.5,y:-213.3},2).to({regY:-31.4,rotation:-6.7,x:89.5,y:-160.3},3).to({rotation:-5,x:97,y:-150.3},2).to({rotation:0,x:92,y:-163.8},3).wait(1).to({regX:0.1,regY:-31.5,rotation:-31,x:98.5,y:-66.8},5).to({rotation:20.7,x:109,y:-61.7},5).to({regX:0,rotation:6.5,x:108.4},6).wait(5));

	// MooseShadow
	this.instance_14 = new lib.Shadow();
	this.instance_14.setTransform(-4.1,-17.7,1,1,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1.05,scaleY:1.05},2).to({scaleX:0.86,scaleY:0.86},3).wait(2).to({scaleX:1.05,scaleY:1.05},3).wait(2).to({scaleX:1,scaleY:1},3).wait(22));

	// MooseDeathEyeSplat
	this.instance_15 = new lib.MooseDeathEyeBlood();
	this.instance_15.setTransform(9.5,13.5,0.665,0.522,0,0,0,0,-20.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(27).to({_off:false},0).to({regY:-21,scaleX:1.23,scaleY:0.72,y:12.4},3).to({scaleX:1.26,scaleY:0.84},4).to({regY:-20.9,scaleX:1.27,scaleY:0.91,y:12.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.9,-211.3,254.2,211.1);
p.frameBounds = [rect,new cjs.Rectangle(-132.9,-204.6,256.7,204.8),new cjs.Rectangle(-134.9,-197.9,259.1,198.5),new cjs.Rectangle(-134.9,-221,260.5,220.5),new cjs.Rectangle(-134.6,-244.2,261.2,242.7),new cjs.Rectangle(-127.1,-267.3,247.3,264.6),new cjs.Rectangle(-128.9,-269.5,252.4,266.8),new cjs.Rectangle(-125.9,-271.8,244,269.1),new cjs.Rectangle(-128.9,-247.2,249.1,245.6),new cjs.Rectangle(-131.9,-222.5,254.2,222),new cjs.Rectangle(-134.9,-197.9,259.1,198.5),new cjs.Rectangle(-138.1,-193.4,266.6,194),new cjs.Rectangle(-139.7,-188.9,270.7,189.5),new cjs.Rectangle(-138.9,-196.4,269.1,196.7),new cjs.Rectangle(-137.9,-203.8,267.5,203.9),new cjs.Rectangle(-130.9,-211.3,254.2,211.1),new cjs.Rectangle(-130.9,-211.1,254.2,210.9),new cjs.Rectangle(-135.9,-216.9,263.6,216.7),new cjs.Rectangle(-139.3,-228.9,285.3,228.7),new cjs.Rectangle(-140.8,-240.7,314.9,240.5),new cjs.Rectangle(-140.5,-252.7,349.2,252.5),new cjs.Rectangle(-138.2,-264.7,379.2,265.2),new cjs.Rectangle(-143,-249.9,293.6,254.8),new cjs.Rectangle(-146.2,-234.9,304.2,234.7),new cjs.Rectangle(-147.3,-220,311,219.8),new cjs.Rectangle(-146.2,-204.7,313.7,204.5),new cjs.Rectangle(-117.7,-189.9,267,189.7),new cjs.Rectangle(-118.3,-167.8,269,196.2),new cjs.Rectangle(-118.8,-164.8,271.2,194.7),new cjs.Rectangle(-119.4,-161.9,273.2,193.3),new cjs.Rectangle(-120,-158.9,275.1,191.8),new cjs.Rectangle(-120.5,-160.7,276.9,194.5),new cjs.Rectangle(-121,-162.3,264.1,197.2),new cjs.Rectangle(-121,-162.3,264.1,198.1),new cjs.Rectangle(-121,-162.3,264.1,199),new cjs.Rectangle(-121,-162.3,264.1,200),new cjs.Rectangle(-121,-162.3,264.1,200.8)];


(lib.Menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_4 = function() {
		playSound("LaserGunShot");
	}
	this.frame_10 = function() {
		playSound("EnemyHit");
	}
	this.frame_43 = function() {
		this.dispatchEvent("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(6).call(this.frame_10).wait(33).call(this.frame_43).wait(1));

	// hero
	this.instance = new lib.Hero("single",0);
	this.instance.setTransform(118.2,406.8,0.8,0.8,0,0,0,21.2,-125.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"synched",startPosition:12,loop:false},0).to({x:348,startPosition:1},12).to({x:588},12).to({x:838,startPosition:13},12).to({_off:true},1).wait(6));

	// shot
	this.instance_1 = new lib.HeroBullet();
	this.instance_1.setTransform(344.5,366.2,1,1,0,0,0,0,-8.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:611.4,mode:"synched",startPosition:7,loop:false},5).to({_off:true},4).wait(30));

	// beaver
	this.enemyBeaver = new lib.EnemyBeaver();
	this.enemyBeaver.setTransform(664.5,409.1,0.64,0.64,0,0,0,0,-109.7);

	this.timeline.addTween(cjs.Tween.get(this.enemyBeaver).wait(10).to({regY:-109.6,y:410.2,mode:"synched",startPosition:24,loop:false},0).to({_off:true},33).wait(1));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(250.3,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44));

	// bg
	this.startBtn = new lib.StartBtn();
	this.startBtn.setTransform(396.1,447.1);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.instance_3 = new lib.MenuBG();
	this.instance_3.setTransform(420.4,334.4,1,1,0,0,0,423.8,276.2);
	this.instance_3.cache(-14,-2,826,557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.startBtn}]}).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,58.2,821.8,552.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-15.5,58.2,941.3,552.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-15.5,58.2,821.8,552.6)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;