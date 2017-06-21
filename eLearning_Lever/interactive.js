(function() {
	
	var stage, w, h, beamW, beamH, effortH, beam, fulcrum, effort;
	var c = createjs; // shortcut
	var leverPosition = 0.5;
	
	initInteractive();
	function initInteractive() {
		// define the stage, and enable interaction for touch devices:
		stage = new c.Stage("interactive");
		c.Touch.enable(stage);
		// let the user drag outside the canvas:
		stage.mouseMoveOutside = true;
		// we need this to show the hand cursor on the fulcrum:
		stage.enableMouseOver();
		
		// we'll use these for some calculations:
		w = stage.canvas.width;
		h = stage.canvas.height;
		beamW = w-50;
		beamH = 20;
		
		// create the beam, and the attached mass:
		beam = stage.addChild(new c.Shape());
		beam.y = h-60;
		beam.x = w/2;
		beam.graphics.beginStroke("#000").setStrokeStyle(3)
			.drawRect(-beamW/2,0,beamW,-beamH)
			.beginFill("#0F0").drawCircle(-beamW/2+10, -25-beamH-2, 25);
		
		// create the effort arrow, the actual drawing happens in drawLever:
		effort = stage.addChild(new c.Shape());
		effortH = (beam.y-beamH-10)/0.8;
		
		// draw the fulcrum:
		fulcrum = stage.addChild(new c.Shape());
		fulcrum.y = beam.y;
		fulcrum.graphics.beginFill("#00F").beginStroke("#000")
			.setStrokeStyle(3).drawPolyStar(0,30,30,3,0,-90);
			
		if (c.Touch.isSupported()) {
			// if we're using touch, then we can add a larger hit area to the fulcrum
			// to make it easier to hit.
			fulcrum.hitArea = new c.Shape();
			fulcrum.hitArea.graphics.beginFill("#000").drawRect(-40,0,80,60);
		}
			
		// set up the fulcrum for interaction:
		fulcrum.cursor = "pointer";
		fulcrum.addEventListener("pressmove", handleFulcrumMove);
		
		// draw the default lever diagram:
		drawLever();
	}
	
	function drawLever() {
		// move the regX around, so the beam rotates around the fulcrum:
		beam.regX = (leverPosition-0.5)*beamW;
		beam.x = w/2+beam.regX;
		// this isn't physically correct, it just looks nice:
		beam.rotation = -(leverPosition-0.5)*15;
		
		// position the fulcrum:
		// uses the same calculation as the beam regX, so we can reuse that value.
		fulcrum.x = w/2+beam.regX;
		
		// draw the effort arrow:
		
		// localToGlobal provides the current stage position for a point near the right
		// end of the beam, accounting for the beam rotation and position:
		var pt = beam.localToGlobal(beamW/2-10, -beamH);
		effort.setTransform(pt.x,pt.y);
		// calculate the arrow width & height
		var ew = leverPosition*effortH*0.2;
		var eh = (1-leverPosition)*effortH;
		// draw the arrow, making sure to clear the old one first:
		effort.graphics.clear()
				.beginFill("#F00")
				.drawPolyStar(0,-ew,ew,3,0,90)
				.beginFill("#F00")
				.drawRect(-ew/2,-ew,ew,-eh);
		
		// redraw the stage
		stage.update();
	}
	
	function handleFulcrumMove(evt) {
		// calculate the new lever position from the current mouse location:
		leverPosition = Math.max(0.2, Math.min(0.8,(evt.stageX-(w-beamW)/2)/beamW));
		// redraw the lever:
		drawLever();
	}
	
})();