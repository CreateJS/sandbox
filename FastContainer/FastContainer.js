/*
* FastContainer
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

/**
 * <strong>Name still TBD.</strong><br/>
 * Provides a fast method of rendering Bitmap or BitmapAnimation instances for uses such as particle and game engines.
 * Supports a limited subset of display list functionality, including: x/y, scaleX/Y, regX/Y, and alpha.
 * Unsupported features on children of this container include rotation, skewX/Y, mask, and shadows.
 * 
 * For best results, use only a single image source with FastContainer. That is, if using Bitmap instances, they should
 * all share the same image property. If using BitmapAnimation instances, they should share the same SpriteSheet.
 * 
 * The performance gains provided by FastContainer vary widely by browser and device. Testing has shown performance
 * gains between 0-50%.
 *
 * By default, this display object has mouseEnabled set to false in order to reduce the cost of mouse interactions.
 * @class FastContainer
 * @extends Container
 * @constructor
 **/
var FastContainer = function() {
  this.initialize();
}
var p = FastContainer.prototype = new createjs.Container();

// static properties:

// events:

// public properties:
	/**
	 * Indicates whether to apply the alpha property of child elements. Setting this to false can result in a small
	 * performance increase.
	 * @property enableAlpha
	 * @type Boolean
	 * @default true
	 **/
	p.enableAlpha = true;

// private properties:

// constructor:
	/**
	 * @property DisplayObject_initialize
	 * @type Function
	 * @private
	 **/
	p.Container_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function() {
		this.Container_initialize();
		this.mouseEnabled = false;
	};

// public methods:
	/**
	 * Draws the display object into the specified context ignoring it's visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		var a=ctx.globalAlpha, sx=1.0, sy=1.0, ss, rect, o, img, w, h;
		// this ensures we don't have issues with display list changes that occur during a draw:
		var list = this.children.slice(0);
		ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
		var enableAlpha = this.enableAlpha, enableRotation = this.enableRotation;
		var x=0, y=0, rotation=0;
		for (var i=0,l=list.length; i<l; i++) {
			var child = list[i];
			if (!child.isVisible()) { continue; }
			
			if (enableAlpha) { ctx.globalAlpha = a*child.alpha; }
			if (ss=child.spriteSheet) {
				if (!(o=ss.getFrame(child.currentFrame))) { continue; }
				ctx.drawImage(o.image, (rect = o.rect).x, rect.y, w=rect.width, h=rect.height, -x+child.x-(o.regX+child.regX)*(sx=child.scaleX), -y+child.y-(o.regY+child.regY)*(sy=child.scaleY), w*sx, h*sy);
			} else if (img=child.image) {
				if (rect = child.sourceRect) {
					ctx.drawImage(img, rect.x, rect.y, w=rect.width, h=rect.height, -x+child.x-child.regX*(sx=child.scaleX), -y+child.y-child.regY*(sy=child.scaleY), w*sx, h*sy);
				} else {
					ctx.drawImage(img, -x+child.x-child.regX*(sx=child.scaleX), -y+child.y-child.regY*(sy=child.scaleY), img.width*sx, img.height*sy);
				}
			} // else not a supported type.
		}
		return true;
	};

// private methods:

createjs.FastContainer = FastContainer;
}());