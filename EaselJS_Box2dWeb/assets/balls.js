(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib.balls = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Balls();
	this.instance.setTransform(267.6,204.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(148.6,122.6,240,165.1);
p.frameBounds = [rect];


// symbols:
(lib.Circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCFFFF").ss(10.1,1,1).de(-60.9,-60.9,122,122);
	this.shape.setTransform(0,0,0.82,0.82);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-49.9,100,100);
p.frameBounds = [rect];


(lib.PinkChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AAXjbQAOA7AaA/QAeBJAgAlQgJBkhmBOQgBAAgBABQgZAQABACQgGgNgfgWQgigYgIgLQgrg3AAhGQABhNAyhEQASgYAigYQAsggAKgJgAhViqQghAggWAsQgVArgFAuQgFAoALApQAKApAYAkQAUAeAdAbQApAnAXgLQBLglAxgwQBChBgKhFQAAAAAAgBQgFgbg8h1QhBh9gPANQgMAKgnAVQgmAUgSARg").cp();
	this.shape.setTransform(0,0,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AgXjDQhGA+gbAwQgoBEATBHQARBEA5BFQAbAhAggCQAWgBApgaQCPhchMiaQgHgQgOgwQgOgvgLgVQgjhGhAA6g").cp();
	this.shape_1.setTransform(-0.8,0.5,0.8,0.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-19.2,27.1,38.6);
p.frameBounds = [rect];


(lib.PinkChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("ABuANQgLBBgbAaQgfAeg7gMQgSgEgfgLQghgMgPgEQAAgyAUgrQAQgkAegqQAng6ATACQA0ADAeAxQAbAugIAwQAAABAAACgACEhLQADgXgcgZQgVgTgagMQg1gZg4AxQgvAogaA/QgaA+AGA9QABAMApATQAeAOAZAIQBJAYAmgQQAvgTAVhWQAUhQgWgvg").cp();
	this.shape.setTransform(0,0,1.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("ABohmIgBgBQgYg2g0AIQgsAHguAyQguAygOA2QgPA/AlAlQAmAlA4ACQA4ABAnglQAogmABhEQAAg1gZg6g").cp();
	this.shape_1.setTransform(0.1,-0.4,1.1,1.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-15.8,-18,31.8,36.1);
p.frameBounds = [rect];


(lib.MooseToothShine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcAAQAAgbgcAAQgbAAAAAbQAAAdAbAAQAcAAAAgdg").cp();
	this.shape.setTransform(7.2,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6AiQALgBAAgSQgcgUgpgRQghgMgVABQgVACAMAMQAOAPAlASQAsAXAagDg").cp();
	this.shape_1.setTransform(-3.9,-4.1,0.866,1,0,0,0,0,-0.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-10,-6.8,20.1,6.9);
p.frameBounds = [rect];


(lib.MooseEye = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AHQj4IAaAVQgFgEgEgDQB6BnAQCIQARCciNBcQg+AohIgCQhbgCgzhPQhHCCibAKQhDAFg9gXQg+gWgmgsQABAcglAdQg2AphlgFQhdgNg1hOQgwhGAAhjQAAhVAchPQAfhcA5gyQApgjBHAIQBHAIAZAqQAphfBTgrQBug4BtAeQBzAfA1BtQAihCBKgLQBLgLBKA2QgHgFgBgBgAk6iBQgZg/g8gBQgygCgeAeQguAsgZBJQgWA+gCBIQgCBGAWA2QAbBCA6AWQCXA5BCh4QgYgfgQgmQgbhCgHhNQgHhQAThIgADiAbQAChQgehSQgghXgxgvQgXgWgtgOQgxgQg1ADQiKAHhCB8QgiBHgCBUQgDBOAaBNQAZBJA7AxQA4AuBGAMQBGANA/gcQBDgdAphDQguBOAxhUIADgEQAlhEAChXgAIGiEQgtg8hBgoQgngXgvAGQg9AIgfA+QAbA0AIBkQAIBugbBJQAgBGA9APQA2AMA9giQA6ggAjg7QAmg/gIhAQgIhDgzhCg").cp();
	this.shape.setTransform(0.8,-35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#382F22").s().p("AB5gVQhDgTgoACQgVABhdAeQhlAeAOANQAOALBUgVQArgLA0gOQAAAABnALQBTAIgCgKQgEgMhBgTg").cp();
	this.shape_1.setTransform(-48.5,-65.3,0.802,0.875,0,-3.9,176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#382F22").s().p("AB5gVQhDgTgoACQgVABhdAeQhlAeAOANQAOALBUgVQArgLA0gOQAAAABnALQBTAIgCgKQgEgMhBgTg").cp();
	this.shape_2.setTransform(44.8,-71.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjAtQgPATgUAAQgTAAgPgTQgPgTAAgaQAAgZAPgTQAPgSATAAQAUAAAPASQAPATAAAZQAAAagPATg").cp();
	this.shape_3.setTransform(-39.6,-13.9,0.741,1.012,-15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfAAQAAghgfAAQgeAAAAAhQAAAiAeAAQAfAAAAgig").cp();
	this.shape_4.setTransform(51.9,-41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYgrQgVgKgXAFQgYAGgJAQQgKATAPAVQAaAnAsgDQAvgCgPg2QgHgagXgLg").cp();
	this.shape_5.setTransform(41.4,-49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#382F22").s().p("ADogFQgXgXg2gjQgpgbhQgPQhkgTg+AgQghAQhGBSQhNBdAwAOQAEACA+hRQBChUAYgJQA8gWBCANQA9ALA6AmQAIAFBDA7QA/A3ABgTQACgqgygsg").cp();
	this.shape_6.setTransform(-5.2,-87.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAjAtQgPATgUAAQgTAAgPgTQgPgTAAgaQAAgZAPgTQAPgSATAAQAUAAAPASQAPATAAAZQAAAagPATg").cp();
	this.shape_7.setTransform(-8.1,-20.8,1,1.098,-3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpgpQgOARAAAYQAAAZAOARQAQAUAZAAQAaAAAQgUQAOgRAAgZQAAgYgOgRQgQgUgaAAQgZAAgQAUg").cp();
	this.shape_8.setTransform(-40.1,-47.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABVgbQgIgcgigLIgCAAQgBgBgBAAQgdgIgfAMQgeALgTAXQgUAYAEAVQAFAbAkARQAmATAigNQAfgLASgcQARgbgIgbg").cp();
	this.shape_9.setTransform(1.8,-54.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjAtQgPATgUAAQgTAAgPgTQgPgTAAgaQAAgZAPgTQAPgSATAAQAUAAAPASQAPATAAAZQAAAagPATg").cp();
	this.shape_10.setTransform(47.7,-37.5,0.83,1.059,-10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EADFC3").s().p("AB/kiQhCgphVgEQhdgEhEApQhNAugUBeQgRgWgpgTQgzgXguAHQiEAVgUEAQgNBmArBKQAmBCBEAXQBDAWA7geQBAghAXhRQAfBEBCAfQA9AcBLgIQBIgIA+gnQBBgpAdg8QA/BGBKAJQBAAIA8gnQA4glAeg/QAgg/gKg9QhbkTiKgBQhSAAhJBXIAAABQgJg8hGgqgAB4hiQALgMAPAAQAPAAALAMQALALAAAQQAAAQgLAMQgLALgPAAQgPAAgLgLQgKgMAAgQQAAgQAKgLg").cp();
	this.shape_11.setTransform(0.8,-35.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAmQgOAAgLgLQgKgMAAgPQAAgPAKgLQALgMAOAAQAOAAALAMQALALAAAPQAAAPgLAMQgLALgOAAg").cp();
	this.shape_12.setTransform(15.5,-43);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-99,127.6,99.1);
p.frameBounds = [rect];


(lib.MooseChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("Ahqg/QghAlgOA8QgMAzAEA7QABADADABQACABACgDIAAAAQAQAyB2gQQBxgQAsgvQAIAFAJgEQAJgDgBgLQgFg6gDgdQgFgxgIgjQgRhJgegTQADgLgKgIQgKgJgLAHQhTAvgHAFQgzAfggAigAiMB8QAJgRAQhBQAOgzAWgbQAagfAvgdQAFgDBMgrIAMARQALAPAHAXQAEAOAGAcQAFAaADAiQACAVADAqIgDABQgJAEgPAMQgQALgJAFQgbANgzANQgxALgXABQgwABgRgZg").cp();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("ABfidQgFgNgMgEQgNgDgLAKIgMALIgCACQhZA+grA4QgYAhgOAtQgKAhgHA1QgCAPAMAKQALAJAPACQAVABASAAQAjAQAwgIQAvgGAhgTQAqgXAKgnQAOgwgUhLQgMgtgehLg").cp();
	this.shape_1.setTransform(0,-0.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-18.4,32.7,37);
p.frameBounds = [rect];


(lib.MooseAntler = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#382F22").s().p("AEQhMQAHA9gGBZQgMCrjCAXQg2AHhzgDQhxgCgvAHQAEAgAEADQAEADAlgDQAxgDBLAAQAnAABOABQBGAAAwgLQBvgYAkhtQAahMgJiFQgOjMhog1QhAghgqAzQgjAqgFBGQgCAcAHBPQAHBCgJAoQgMA2gkAHQgjAHgEg9QgFhMgJgeQgQg4gsghQg6gsgxArQgtApAGBDQACAWAHAfQAEATAHAlQAGAegTAAQgjgCgIAFQgMAAgEAKQgDAJAFAKQAPAZAmgaQAogDAJgbQAIgUgJgrQgMgwgDgZQgGgqAMgXQAphMA2BKQAUAcAPAnQAOAjAAAWQABBAAbAoQAiA1A1g0QAwgugChkQgLhzAGgwQAJhHAtgNQAtgOApA8QAmA3AKBYg").cp();
	this.shape.setTransform(0,-31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B604A").s().p("AiUBBQAxADBjAHQBVADA+gNQBFgNAkgiQATgSAJgnQAJgtgnANQgTAGg6AdQguAXgiAFQgoAGg2AAQhBgCgggBQhNgDgEAAQgxACgbAQQg4AlBEAMQAKACBVAEg").cp();
	this.shape_1.setTransform(0.6,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F7152").s().p("ACYklQhbAZAcEEQgCAegKAgQgUBBgmABQgkACgQgyQgFgMgLhJQgHgtgcgtQghg1giADQgmAEgUAeQgUAeAIApQAQA9AGAdQALA1gSAIQgeAMhGAAQgIAcAAAkQgBBJAkAsQBvABB2gFQDpgLAkghQA2gxATgtQAdhEgHh5QgHh+g5hNQgzhEgvANg").cp();
	this.shape_2.setTransform(-1.7,-31.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-33.3,-62.8,64.7,62.9);
p.frameBounds = [rect];


(lib.GreenChunk2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("ACBhiQAnBAAEArQAFA0gmA3QgEAFgDAFQgXAfgQATQgbAggbAUQgqAhgsgfQgWgQgtg7QgVgagKgNQgRgXgIgUQgJgUAWgjQAMgSAZgfQAtg3AdgwQAig6APg5QAhAWAlAvQAZAgAfAygAB0DOQATgVAjguQAog1ADgzQADgtgdg/QgghDhMhUQhehqgOBUQgHAugeAxQgTAegqA0QghAkgTAXQgjAqACAXQABAmAnA2QAXAfAsAwQAoArAiALQAoAOAsgeQAfgVAgglg").cp();
	this.shape.setTransform(0,0,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("AgPgLQAwAlgZgVQgYgUABAEg").cp();
	this.shape_1.setTransform(8.5,-13.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFD659").s().p("Ahyg8QggArgMAgQgOANgCAbQgCAZAIAUQATAsAhAqQAlAuAlAUQAhATAkgPQAegMAdgfIAJgLQBKhGAGh2QAHh+hZhFQgCgUgVgdQgXgggSAAQgbABgUAyQgdBFgEAFQg7BHgEAGg").cp();
	this.shape_2.setTransform(-0.2,0,0.8,0.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-17,-22.7,34.2,45.6);
p.frameBounds = [rect];


(lib.GreenChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgzitQAwAhBHAaQAdAKANAmQAHAVALArQAHAPAaArQAVAogIAYQgHAYgfAQQgRAIglALQglALgtAAQghAAgygHQgDgmgUgsQgHgRgfg8QgTgwgEgVQgJgqANgfQARgmAdgSQAigVAgAWgAjGgTQAJAfAeA7QADAFAXBLQAUBAAIACQBNAMA+gDQBngGAtgxQAyg4gwhbQgCgDgdhWQgTg6gggSQgNgHgagJQgegKgLgFQgMgGgagUQgagSgQgGQgqgPguAoQgpAjgNAtQgNAuAPA0g").cp();
	this.shape.setTransform(0,0,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("Aiyg5QAGBPAoBNQAJARAPAvQASAmAjgFQATgCAwACQArABAYgFIAEgBQAHAEAIgDQAsgPATgkIAGgLQAJgNADgSQACgRgFgRIgBgBQgEg1gagOQgLgkgQgbIgGgKQgSgegbgWQgdgZgggJQgGgCgXgEQgNgCgOgMQgMgKgSgCQgRgDgPAFQhKAbAIBsg").cp();
	this.shape_1.setTransform(0.6,0.5,0.8,0.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-18.1,33.3,36.4);
p.frameBounds = [rect];


(lib.EnemyBeaverFace = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA8AAQAAAqgSAdQgRAegZAAQgYAAgRgeQgSgdAAgqQAAgoASgeQARgeAYAAQAZAAARAeQASAeAAAog").cp();
	this.shape.setTransform(-8.8,-131.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAohJQibgPgwBWQgRAbA4AYQA0AVBLAFQBQAFAugSQA1gVgTgrIgBgCQACgZgzgXQgogRghgEg").cp();
	this.shape_1.setTransform(-3.3,-90.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("AlSkbQiFBqgpCiQg1DTC/B2QBPAxBqAUQBkAUBegLQC8gWCdh0QC1iHgHivQgHipjGhgQikhPi0AFQiyAFiHBrgAgNlnQCsgDChBbQCwBlglCqQgPBKg2BHQg1BFhLAxQgCACgDABQiPBei0AGQjJAIh6hvQhxhmAdieQAaiNB1hnQCBh0C8gCg").cp();
	this.shape_2.setTransform(0,-76.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AjFhsQAAAEgDgEQgGgGgBgBQgNgIgEAjQgLBbACA1QAEBUAgA3QAoBGBaADQBDACBXgjQDnhdiEltQgDgIgCgHQgCgFgCgEQgMgggRAUQgRAUAKAcQAdBNAMA4QAQBNgLA5QgNBKg4AoQg4AohNAPQhdARgqgtQgUgWgJglQgFgUgFgtQgDgZgChBQgChHgBgUg").cp();
	this.shape_3.setTransform(17.5,-26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AhjCjQA/AhBpgDQAVgBA2gYQA5gaglgJQiGAYgkgCQhwgFgRheQgHgiALg+QAEgYAQhJQAMg0gNgDQgOgEgVBAQggBmABA8QADBeBMAng").cp();
	this.shape_4.setTransform(-18.3,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AELAJQgSh3gRgrQgkhZhEgnQhMgthdAWQhZAUg9BFQhEBOgOB5QgMBiAbB3QAKAuAWBJQgWAGgKgMQgBgCgQgkQgihPgEhpQgChZAchbQAfhhA3hEQCGimC/BZQCiBKAYDwQAKBhgRBqQgQBjgjBNQgbgMgEgDQgFgDALgeQAUg1AIgpQAVhtgJhng").cp();
	this.shape_5.setTransform(5.2,-143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABBgLQgBAAAAAAQgRgFgdgCQgogCgHgBQgkgGgIARQgIAOAkAKQArAMAegDQBFgXgfgKQAAAAgBgBg").cp();
	this.shape_6.setTransform(-17,-12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAgXQgWAAAAAXQAAAYAWAAQAWAAAAgYQAAgXgWAAg").cp();
	this.shape_7.setTransform(-27.9,-17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASgRQgMgJgOAGQgQAFAAAPQAAASALAEQAKAEALgHQAMgHAEgLQAFgKgLgIg").cp();
	this.shape_8.setTransform(3.5,-13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQAzQAjAJBggpQBlgpgpgYIgDgCQAAAAAAAAQgBAAAAAAQgYgKgwAWIhKAiQgCABgpgBQgfAAgGAIQgIANASAQQAOAMAPAEg").cp();
	this.shape_9.setTransform(19,-11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EADFC3").s().p("AlQCEQAqBEBvAIQBxAIAyhDQAeBMBiACQBQACBOgqQBZgygChxQAAgXgIhKQgHg6ADgjQAAgBAAgCQAAgBAAgBQAIhRhdAmQgcALgsAZQgqAYgFACQhYAfhXAFQhfAGhUgZQhGgUgPAKQgHAFgNA0QgXBYgDAWQgLBKAXAkg").cp();
	this.shape_10.setTransform(1.4,-26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FA355").s().p("Ag+gBQCRAGCHg8ICbhSQCWhLgTAjQhrDCirBeQiQBQiogCQiTgBh2g7Qhvg3gOhEQgNgkgIgYQgNgtAIggQAjAAA3AeQAdAQAsAZQA+AdBLAOQA8ALBQAFg").cp();
	this.shape_11.setTransform(0.3,-58.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0BA5F").s().p("AgLl5QDRAACVBqQCVBqAACVQAACVilB6QimB7jPAAQjXAAh2hLQh5hOABiTQACitCIiJQCPiRDLAAg").cp();
	this.shape_12.setTransform(0.3,-76.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAgvQgVAAgNAPQgMAOAAASQAAAwAuAAQAvAAAAgwQAAgSgMgOQgNgPgWAAg").cp();
	this.shape_13.setTransform(20.3,-153);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmg8QgYgOgaAHQgaAHgSAVQgSAWACAVQABAbAaASQAaAZAdgFQAbgEATgZQATgZgCgaQgEgfgfgSg").cp();
	this.shape_14.setTransform(9,-163.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EADFC3").s().p("ADREpQhXB8h6AAQh5AAhXh8QhXh7AAiuQAAitBXh7QBXh8B5AAQB+AABTBwQBXB1AAC/QAACuhXB7g").cp();
	this.shape_15.setTransform(5,-135.1);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-179.3,105,179.4);
p.frameBounds = [rect];


(lib.EnemyBeaverBody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AAYgKQguADgtgKQgigIgOAKQgPAKAoANQBJAcBCgPQANgDAigWQAigZgPAEQgFABgGABQguALgiACg").cp();
	this.shape.setTransform(-20.8,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("AgUgWQgWAFgNALQgNAJAHAIQAEAEAcgLQAdgJAMAKQBGAsgYguIgBgCQgWgkg3ANg").cp();
	this.shape_1.setTransform(-64.7,-190.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("ABCgTQgKgWgZgCQgXgCgaAOQgaAOgNARQgPAUAKAOQAIAMAGgCQAEgCAHgMQAVgfAWgIQAEgBAhAFQAdACgGgPQAAAAAAgBg").cp();
	this.shape_2.setTransform(33.9,-192.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("ACwjAQgJiuhUhfQgYgbghgSQgigTgiAAQgagBg9ATQhGAWAiAUQAWAOAsgIQAygIATAFQAfAJAeAaQAcAYATAhQBBBzgdDVQgXCohNCZQgbA7hDBZQgXAfgPAdQgIAPANAQQANAPAQgMQCEhmBJjhQA+i+gHi2QAAgHAAgHg").cp();
	this.shape_3.setTransform(68.3,-78.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AKFqaQgUBbhRAfQg3iLhChnQhPh7hkhOQAXgBAggNQARgIAjgQIAEgBQBrgmBMA9QBBA1AhB2QAaBbgRBLgAIuwSQhIg3hUASQglAIgyAWQg4AZgcAMQgTAHhCghQhRgogKgDQhngbhmAWQgPAEhXAqQg8AegigSQhmg2hAAFQhPAHgzBdQgqBOgPBaQgQBgAVBRQAWBSA+AkQgiBrgZCAQgsDfgOEkQgCA4gKCdQgGCVALBsQAgE5C2A+QAgALAugbQAtgaAYAIQBiAjBzAKQEIAXDxhOQAUgGASgHQALgBAUAUQAcAeAoADQBLAGBLhdQBEhXAaiDQAUhmgGiJQgCg5gKhnQAAgGgBgHQgCgRgCgSQAAgCAAgCIgCgYQgSiogFgqQgRiEgVhmQgZh8gkh0QgQgzgYhCQA0gTAggoQAwg7AEhhQADhcglhZQgmhchBgxgAH0oEQBlECArFBQAmEVAFA3QAQCxgOCEQAAADgBACQAAAEgBADIgBAMQgFAlgVA6QgYBGgfAzQhWCPhVhTQBZgpASg/QAGgWg3AdQgcAQgkAWQiOBKjPAVQhkALhOAAQhiABhRgPQgFgBhAgXQg3gUgGAFQgIgEg7grQg4gpgBABQgjAUCDBZQgXAsg6gVQgvgRgegkQgqgygWhTQgQg6gIhZQgNiLAEiqQADiDAOizQAdlaBbkaQA0igA/hpQBViNByg+QDviDDfDFQCsCXBqEQgAmiv0QAxASAfAGQhYBNhFB7Qg3BigvCJQhVg2AJiMQAIhuA0heIAEgIQAyhYBIANQATAEAyASg").cp();
	this.shape_4.setTransform(-11.7,-109.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FA355").s().p("ABahRIghB7QgBApgcgCQgXgBgXgYQgWgGggg9QgfhAAZAJQAlANAtAAQA9AAAZgcg").cp();
	this.shape_5.setTransform(-72.5,-172.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9FA355").s().p("ABdAEQggBYgvANQgaALg2huIgwhvQBKA8A9AAQAxABAtgkg").cp();
	this.shape_6.setTransform(44.2,-174.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0BA5F").s().p("ADGhIQg3inipgjIiIA+QhVARAxAtQAaAYA1AhQAuA3ARAYQAfAoAWArQADAEAbBqQAXBRAdAMQAdAMApgsQAhgjAPgkQASgsACg/QAChFgVhBg").cp();
	this.shape_7.setTransform(33.5,-189.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0BA5F").s().p("AibC+QALALAQAhQARAcAYgEQAuhmA4hsQBzjVA6gcQjdiChSCDQgqBFgVB7QgaCOAxAwg").cp();
	this.shape_8.setTransform(-62.3,-189);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727D3D").s().p("Aq1BOQAQBQATA3QAbA0BJAqQBWAyAjg7QAPgZAmAMQAWAGAnAUQBkAXCKAFQESAKC8hZQAlgRADANQAIAfATAMQAfAUAwgJQAxgJAPgiQArgdAlhbQBKizgckzQiGB5i4BQQi4BQjGAZQjMAZi4goQjFgriRhxQgJB9AhCdg").cp();
	this.shape_9.setTransform(-11.2,-36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E9140").s().p("AKVAGQAiFMADBOQAHDRgxB9Qg7CXiaBNQirBVkyAGQj/AFiYhQQiLhJg+iXQg2iEgBjTQgBidAfkQQA3nqCHkGQChk7EYAAQB0AAB2BWQBxBTBiCXQDPE/AtG0g").cp();
	this.shape_10.setTransform(-12.2,-109.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B4F29").s().p("ADYAAQgkDbgtBsQg5CKhTAAQhdAAhBiIQhCiJAAjAQAAi/BCiIQBBiIBdAAQByAABABeQBUB6gpD3g").cp();
	this.shape_11.setTransform(59.5,-81.7);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-86,-219.4,172.1,219.5);
p.frameBounds = [rect];


(lib.EarChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("ABkAAQgFglABgYQACgpgBgKQgCghgRgNQgqgjg2AwQgmAhgfA4QgdA2ARAtQAOAmA0AuQAcAYAOAKQAeARAXgFQAfgHAJgoQAGgXgBgrQgBgPgGgtgAA2iIQARAOAEBNQACApABA8QADAtgLAYQgOAgglgWIgCgCQgBAAAAAAQgvgggagvQgfg2AdgpQAhguARgSQAqgwAVARg").cp();
	this.shape.setTransform(0,0,1.32,1.32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0BA5F").s().p("ABbAWQAAgCAAgCQgajFgcAaQgpAngWAVQgnAmgSAfQgWAlAkA2QAcAsApAcQBiBCgGiqQAAgHgBgGg").cp();
	this.shape_1.setTransform(-0.2,-0.3,1.32,1.32);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-23,28.3,46.1);
p.frameBounds = [rect];


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
	this.shape.graphics.f("#49473C").s().p("AJChWQgKgqgIgCIgGAAQgJAAgJAAIgNAAQhsACiiAQQjlAWhLADQiegGh/gEQj4gKgBANQAAAHBMAIQABAWAMAtQAMAmAFAIQAaAlAwASQApAQAzgCQAqgCArgWQAtgYAVgiQAJAXAdAZQAuAnBDAEQB5AFAxgoQAQgNAIgSQAGgSACgEQAbAtBAAgQA7AdAvAAQCvAIAUiFQAHgpgMgygAIlAVQghBAhnALQg+AGg+giQhTgtgChdQBOgOCNgEQBHgCA8gCQAVBCgaAvgACvhFQgKBFgPAZQgoBBhugGQhigHgjg8QgLgRgGgbQgDgZgCgHQA5AHB3gGQBKgEBQgHgAi1gOQgCAhgiAYQgcAUgnAHQh8AKgshBQgOgTgHggQgFgggDgJQBvAKC6AHQAAAVADAZg").cp();
	this.shape.setTransform(-6.7,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("ACPgSQgKACiMgCQiOgCAAgCQgCAPBpATQBrAVAqgRQA/gngWAFg").cp();
	this.shape_1.setTransform(-2.7,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AGhszQjfivkwAkQiBAPhwA0Qh3A3hUBYQhiBpguCkQgeBvgQDCQgNCWgCC3QgCB5AEDXQACCTApBoQA3CLB2AlQA8ATA1gaQA4gbAPg9QAHgagDhMQgEhNgBgKQB9gVD0ATQDoATBjgYQAKCIATA/QAmB8BYAKQBjAKA+hfQAvhHAShvQAokJgCkDQgDkIgwjgQgQhKgwhxQhhjliEhYgAIXqJQCYDnAZFfQAQEMgXEiQgWEXgmBCQgjA9g8AYQhGAcgrg7QgcgogOhHQgHgggJhXQgEgoASgIQAMgGAugIQALgDA6gRQA0gSgDgMQgCgGguALQhnAYgRADQjMAqiZgSQiWgTjkAWQhyALhXAOQBCANBJgEQAGAGAFAqQAHAzgHArQgVCBiAgdQh4gtgmiRQgOg0gGhOQgFhYgDgpQgXl4A4mFQAaixA/h0QBKiJCKhNQDpiAEKAxQEWAzCQDZg").cp();

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AFrg8QiMAckRgNQkUgOgxAJQAJCJgNA5QgZBvhogRQjvglATm5QCwAhEPAMQIbAYHYhoQgHBXgNCSQgLBugQA9QgUBJgkAjQgnAmhBABQhwABgYh2QgHghgFhOQgFhJgHgjg").cp();
	this.shape_3.setTransform(0,67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AF4gLQgLBaiKAgQgqAGgygMQhkgYgnhbQgOAvgrAhQg5AuhNgRQhegUgdgbQgjgggXhlILYgfQAgArgIA6g").cp();
	this.shape_4.setTransform(13.1,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABeQh0gDghhVQgRgqAEg6IFDAQQAJBDgSAlQgiBHh2gDg").cp();
	this.shape_5.setTransform(-40.2,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("AH/goQnUg4lJAaQhaAHhUAOQg2AJgBgCQASBbB5AIQAxADAvgOQAwgPAXgaQA+BJB3gBQB1gCA+hIQAXAhBCAXQBAAVBEAAQBJgBAngcQAsgggRg7g").cp();
	this.shape_6.setTransform(-1.1,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AIHqxQg9iBizhJQivhHjGARQjZASiYB2QitCIgtDuQgwCQgEF5QgCCmAKESQAECJAmBbQAzB9BuAeQCCANATh+QAGgogFg7QgHg5AAgOQBXgYEQAPQEjARBjgQQAIAqASCFQAZB2A3AaQBXApBBhZQAwhAAVhkQA0n1gVkoQgfmsiyi9g").cp();
	this.shape_7.setTransform(-0.3,0);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-96.6,152.3,193.1);
p.frameBounds = [rect];


(lib.MooseEyes = function() {
	this.initialize();

	// MooseEyes
	this.instance = new lib.MooseEye("synched",0);
	this.instance.setTransform(0.4,-59.3,1,1,0,0,0,0,-49.5);

	// MooseEyeShadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B84E").s().p("ACvBOQg4AYhKAJQiwAUhBhMQkcCFhDjNQDdhjHFACQClABCFAOQB7AOAAANQAAAngDAPQgGAcgXAQQgwAgg/AJQhdANg/g7QgPAgg7AZg").cp();
	this.shape.setTransform(-0.4,-16.4);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-63.4,-108.9,127.6,104);
p.frameBounds = [rect];


(lib.Balls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// moose
	this.instance = new lib.MooseEyes();
	this.instance.setTransform(-3.1,-36.3,0.944,0.828,0,0,0,0,-54.5);

	this.instance_1 = new lib.MooseTween("synched",0);
	this.instance_1.setTransform(1.1,78.2,0.944,0.828,0,0,0,-0.4,89.9);

	this.instance_2 = new lib.MooseAntler();
	this.instance_2.setTransform(-89.3,-41.9,0.944,0.828,0,0,180,0,-31.3);

	this.instance_3 = new lib.MooseAntler();
	this.instance_3.setTransform(91.4,-41.9,0.944,0.828,0,0,0,0,-31.3);

	this.instance_4 = new lib.EnemyBeaverFace();
	this.instance_4.setTransform(-13,5.3,0.689,0.513,0,0,0,-4.1,-76.1);

	this.instance_5 = new lib.EnemyBeaverBody();
	this.instance_5.setTransform(-3.6,53.9,0.689,0.513,0,0,0,-14,-3.7);

	this.instance_6 = new lib.MooseChunk1();
	this.instance_6.setTransform(0,0.1);

	this.instance_7 = new lib.GreenChunk2();

	this.instance_8 = new lib.GreenChunk1();
	this.instance_8.setTransform(0,0.1);

	this.instance_9 = new lib.EarChunk1();

	this.instance_10 = new lib.PinkChunk3();
	this.instance_10.setTransform(0,0.1);

	this.instance_11 = new lib.PinkChunk1();
	this.instance_11.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// Layer 2
	this.circle = new lib.Circle();
	this.circle.setTransform(0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.circle).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-81.4,240,165.1);
p.frameBounds = [rect, new cjs.Rectangle(-53.3,-56.8,118.6,112.7), new cjs.Rectangle(-16.3,-18.4,32.7,37), new cjs.Rectangle(-17,-22.7,34.2,45.6), new cjs.Rectangle(-16.5,-18.1,33.3,36.4), new cjs.Rectangle(-14.9,-23,30,46.1), new cjs.Rectangle(-14.9,-19.2,30,38.6), new cjs.Rectangle(-15.8,-18,31.8,36.1)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;