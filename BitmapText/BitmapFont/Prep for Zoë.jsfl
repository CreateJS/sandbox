var doc = fl.getDocumentDOM();
var timeline, instances, labels, duplicateLabels, dupLabels, originSymbol, originLayerIndex;
var originName = "registrationPoint";
var FILE_SUFFIXES = {"png":1, "jpg":1, "gif":1, "mp3":1, "jpeg":1, "bmp":1, "tiff":1, "tif":1};
run();

function run() {
	fl.outputPanel.clear();
	if (!doc) { return alert("You must have an FLA open"); }
	doc.editScene(0);
	timeline = doc.timelines[0];
	
	originSymbol = null;
	instances = getInstances();
	if (!instances) { return alert("The first layer of the main timeline must be a guide layer containing instances of the symbols you want to prep."); }
	
	clearTimeline();
	
	originLayerIndex = timeline.addNewLayer("origin", "normal", false);
	originLayer = timeline.layers[originLayerIndex];
	if (!originSymbol) {
		if (!doc.library.itemExists(originName)) {
			doc.library.addNewItem("movie clip", originName);
		}
		originSymbol = doc.library.items[doc.library.findItemIndex(originName)];
	}
	
	duplicateLabels = null;
	dupLabels = {};
	labels = {};
	var l = instances.length;
	var f = 0;
	for (var i=0; i<l; i++) {
		f = prepInstance(instances[i], f);
	}
	
	normalizeLayers(f);
	timeline.layers[0].visible = false;
	
	if (duplicateLabels) {
		var arr = [];
		for (var n in dupLabels) { arr.push(n); }
		return alert("Duplicate labels were found: "+arr.join(", ")+".");
	}
	
	document.publish();
}

function getInstances() {
	var symbols = {};
	var layer0 = timeline.layers[0];
	if (layer0.layerType != "guide") { return null; }
	
	var frames = layer0.frames;
	var l = frames.length;
	var instances = [];
	for (var i=0; i<l; i++) {
		var frame = frames[i];
		if (frame.startFrame != i) { continue; }
		var es = frame.elements;
		var jl = es.length;
		var origin = {};
		for (var j=0; j<jl; j++) {
			var e = es[j];
			
			if (e.name == originName || (e.elementType == "instance" && e.instanceType == "symbol" && e.libraryItem.name == originName)) {
				origin.x = e.x;
				origin.y = e.y;
				originSymbol = e.libraryItem;
				continue;
			}
			
			if (e.elementType == "instance" && (e.instanceType == "symbol" || e.instanceType == "bitmap") && !(e instanceof ComponentInstance) && !symbols[e.libraryItem.name]) { 
				instances.push({instance:e, origin:origin, type: e.instanceType});
				symbols[e.libraryItem.name] = true;
			}
		}
	}
	return instances.length ? instances : null;
}

function clearTimeline() {
	while (timeline.layers.length > 1) {
		timeline.deleteLayer(1);
	}
}

function prepInstance(o, frameIndex) {
	var origin = o.origin;
	instance = o.instance;
	if (origin.x == null) { origin = {x:instance.x, y:instance.y}; }
	var symbol = instance.libraryItem;
	var name = stripSuffix( instance.name ? instance.name : getName(symbol.name) );
	var st = symbol.timeline;
	var duration = (st ? st.frameCount : 1)
	
	var labelIndex = timeline.addNewLayer(name+" labels", "normal", false);
	var labelLayer = timeline.layers[labelIndex];
	var instanceIndex = timeline.addNewLayer(name, "normal", false);
	var instanceLayer = timeline.layers[instanceIndex];
	
	// add to origin layer:
	timeline.currentLayer = originLayerIndex;
	timeline.currentFrame = frameIndex;
	if (frameIndex != 0) { timeline.insertBlankKeyframe(frameIndex); }
	doc.addItem(origin, originSymbol);
	timeline.layers[originLayerIndex].frames[frameIndex].elements[0].name = originName;
	
	// set up the label layer
	timeline.currentLayer = labelIndex;
	var hasStartLabel = false;
		
	if (st) {
		var frames = st.layers[0].frames;
		var l = frames.length;
		for (var i=0; i<l; i++) {
			var frame = frames[i];
			if (frame.startFrame != i) { continue; }
			if (frame.labelType == "name") {
				addLabel(timeline, labelLayer, frameIndex+i, frame.name);
				if (i == 0) { hasStartLabel = true; }
			}
		}
	}
	
	if (!hasStartLabel) {
		addLabel(timeline, labelLayer, frameIndex, name);
	}
	
	// set up the instance layer
	timeline.currentLayer = instanceIndex;
	timeline.currentFrame = frameIndex;
	if (frameIndex != 0) { timeline.insertBlankKeyframe(frameIndex); }
	doc.addItem({x:instance.x, y:instance.y}, symbol);
	timeline.insertBlankKeyframe(frameIndex+duration);
	var e = timeline.layers[instanceIndex].frames[frameIndex].elements[0];
	e.symbolType = "graphic"; // ignored by bitmaps
	e.matrix = instance.matrix;
	
	return frameIndex + duration;
}

function addLabel(timeline, layer, frameIndex, name) {
	if (labels[name] != null) { duplicateLabels = true; dupLabels[name] = true; }
	if (frameIndex != 0) { timeline.insertBlankKeyframe(frameIndex); }
	var frame = layer.frames[frameIndex];
	frame.name = name;
	frame.labelType = "name";
	labels[name] = frameIndex;
}

function getName(path) {
	var index = path.lastIndexOf("/");
	if (index != -1) { path = path.substr(index+1); }
	return path;
}

function normalizeLayers(frameCount) {
	var layers = timeline.layers;
	var l = layers.length;
	for (var i=1; i<l; i++) {
		var layer = layers[i];
		timeline.currentLayer = i;
		if (layer.frameCount == frameCount) { continue; }
		else if (layer.frameCount < frameCount) { timeline.insertFrames(1,false,frameCount); }
		if (layer.frameCount > frameCount) { timeline.removeFrames(frameCount, layer.frameCount); }
	}
}

function stripSuffix(name) {
	var index = name.lastIndexOf(".");
	if (index > -1 && FILE_SUFFIXES[name.substr(index+1).toLowerCase()]) { name = name.substr(0,index); }
	return name;
}
