/*
* BitmapText
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

this.createjs = this.createjs || {};

(function () {

	/**
	 * Uses a SpriteSheet defining characters in an image to display text strings.
	 *
	 * <h4>Example</h4>
	 *      var spriteSheet = new createjs.SpriteSheet(jsonData);
	 *      var text = new createjs.BitmapText("Hello World\nWhat's Happening?", spriteSheet);
	 *      stage.addChild(text);
	 *
	 * Notes:
	 * - Characters are referenced using named animations in the SpriteSheet format.
	 * - Support for any character that has a matching definition.
	 * - Additional support for line break (\n) and space "characters"
	 * - Characters will default to lowercase/uppercase variants
	 * - No support for wrapping
	 * - Requires EaselJS 0.6
	 *
	 * @class BitmapText
	 * @param text
	 * @param spriteSheet
	 * @constructor
	 */
	function BitmapText(text, spriteSheet) {
		this.initialize(text, spriteSheet);
	}

	var p = BitmapText.prototype = new createjs.Container();

	/**
	 * The text to display.
	 * @type {String}
	 */
	p.text = "";
	p.spriteSheet = null;

	p.lineHeight = 50;
	p.letterSpacing = 5;
	p.emSpace = 40;

	p.Container_initialize = p.initialize;

	p.initialize = function (text, spriteSheet) {
		this.Container_initialize();

		this.text = text;
		this.spriteSheet = spriteSheet;
		//TODO: Determine em-space using "m", or first character.
		//TODO: Determine line height using em-space.
		this._updateText()
	}

	p.setText = function (text) {
		this.text = text;
		this._updateText();
	}

	//TODO: Consider auto-caching
	//TODO: Consider using an actual draw instead of a Container, and caching individual letters.
	p._updateText = function () {
		this.children = [];
		var xPos = 0;
		var yPos = 0;
		for(var i = 0, l = this.text.length; i < l; i++) {
			var bmp = new createjs.BitmapAnimation(this.spriteSheet);
			var char = this.text.charAt(i);
			if (char == " ") {
				xPos += this.emSpace;
				continue;
			}
			if (this.isLineBreak(char)) {
				xPos = 0;
				yPos += this.lineHeight;
				continue;
			}

			var anim = this._getCharacter(char);
			if (!anim) {
				continue;
			}
			bmp.gotoAndStop(anim.name);

			bmp.x = xPos;
			bmp.y = yPos;
			this.addChild(bmp);

			var frame = anim.frames[0];
			var w = this.spriteSheet.getFrame(frame).rect.width;
			xPos += w + this.letterSpacing;
		}
	}

	p.isLineBreak = function (char) {
		return (char == "\n" || char == "\r" || char == "\n\r");
	}

	p._getCharacter = function (character) {
		var frame = this.spriteSheet.getAnimation(character);
		if (!frame) {
			frame = this.spriteSheet.getAnimation(character.toLowerCase());
		}
		if (!frame) {
			frame = this.spriteSheet.getAnimation(character.toUpperCase());
		}
		return frame;
	}

	createjs.BitmapText = BitmapText;

}())