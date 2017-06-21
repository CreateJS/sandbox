/*
* Kaleidoscope
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2013 gskinner.com, inc.
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

(function() {
	/**
	 * Draws a kaleidoscope based on the specified source DisplayObject. Supports any number
	 * of slices, and different slice sizes within the same kaleidoscope.
	 *
	 * @class Kaleidoscope
	 * @param radius {Number} The radius of the kaleidoscope.
	 * @param source {DisplayObject} The DisplayObject to use as the source.
	 * @param [slices=8] {Number} The number of slices to draw.
	 * @param [pattern] {Array} Pattern of relative ratios for the slice sizes. For example, passing [1,2] would result in every second slice being twice as large as it's neighbors.
	 * @extends DisplayObject
	 * @constructor
	 **/
	function Kaleidoscope(radius, source, slices, pattern) {
		this.DisplayObject_constructor();

		// public properties:
		/**
		 * The DisplayObject that will be drawn into each slice. Any transformations on the
		 * source display object will be applied when the slice is drawn.
		 *
		 * The source will be drawn multiple times (ex. 20 times for a 10 slice kaleidoscope).
		 * If the source is expensive to draw (a complex Shape, or Container with
		 * many children), then you may wish to pre-render the source a single time using
		 * the cache() method.
		 * @property source
		 * @type DisplayObject
		 * @default null
		 **/
		p.source = null;

		/**
		 * The radius of the kaleidoscope in pixels.
		 * @property radius
		 * @type Number
		 * @default 0
		 **/
		p.radius = 0;

		/**
		 * Specifies the amount to overlap each slice with its neighbours to reduce seams
		 * between them. Generally a value of 0.6 works well, but you may wish to adjust this
		 * for sources with transparency.
		 *
		 * You may still see seams if your source draws multiple times into each slice. For
		 * example, a Container with multiple children. Pre-rendering the source by using the
		 * cache() method should resolve this.
		 * @property pad
		 * @type Number
		 * @default 0
		 **/
		p.pad = 0;

		// private properties:
		/**
		 * @property _slices
		 * @type Array
		 * @private
		 **/
		p._slices = null; // size in radians of each slice.

		// constructor:
		var i;
		if (!pattern) { pattern = [1]; }
		if (!slices) { slices = 8; }
		this.radius = radius;
		this.source = source;
		var l = pattern.length;
		if (slices/pattern.length%1 != 0) { throw "slices must be divisible by pattern length"; }
		var ttl = 0;
		for (i=0; i<slices; i++) { ttl += pattern[i%l]; }
		var s = this._slices = [];
		for (i=0; i<slices; i++) { s[i] = pattern[i%l]/ttl*Math.PI; }
	}
	var p = createjs.extend(Kaleidoscope, createjs.DisplayObject);

// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this._slices && this.source);
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

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
		var pad = this.pad/(Math.PI*this.radius*2)*Math.PI*2;
		var s=this._slices, l=s.length;
		var r = -s[0];
		for (var i=0; i<l; i++) {
			var a = s[i];
			this._drawSlice(ctx, r+a, a, true, pad);
			this._drawSlice(ctx, r-a, a, false, pad);
			r += a*2;
		}
		
		return true;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Kaleidoscope]";
	};

// private methods:
	p._drawSlice = function(ctx, r, a, mirror, pad) {
		ctx.save();

		ctx.rotate(r+a);
		if (mirror) { ctx.scale(1,-1); }
		ctx.beginPath();
		ctx.moveTo(-this.pad,-this.pad);
		ctx.arc(0,0,this.radius,0-(mirror?1:0)*pad,a+(mirror?1:0)*pad);
		ctx.lineTo(-this.pad,this.pad);
		ctx.closePath();
		ctx.clip();

		this.source.updateContext(ctx);
		this.source.draw(ctx);

		ctx.restore();
	};

	window.Kaleidoscope = createjs.promote(Kaleidoscope, "DisplayObject");
}());
