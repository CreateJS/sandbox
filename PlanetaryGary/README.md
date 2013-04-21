Planetary Gary
=======

Full featured CreateJS game example.
![ScreenShot](https://raw.github.com/CreateJS/sandbox/master/PlanetaryGary/README_1.jpg)

Important notes:
- due to security restrictions on local content, you must run this example from a web server.
- desktop Safari has a known bug which results in small subpixel artifacts in the generated sprite sheet. This should be resolved in a future version of Safari.
- iOS Safari has a major bug which currently results in very poor performance. Apple has been made aware of this issue, and I am attempting to isolate it.


 Demonstrates a variety of advanced concepts including:
- preloading with progress UI
- managing assets as they load
	- ex1. music plays as soon as it finishes loading
	- ex2. sprite sheet builder runs as soon as all dependencies are loaded
- asynchronous run-time sprite sheet generation
	- all art is loaded as vector which allows scaling and keeps file size low
		- to show scaling, load the game with a "scale" querystring param:
			/index.html?scale=0.3
		- over-the-wire (gzipped) art size is only ~125kb vs 3MB for sprite sheets
	- sprite sheet is generated while other assets load
- state changes
- DOMElement for the score board
- tweening music volume

All art & graphics is copyright 2013 gskinner.com, inc. and cannot be used without permission.

I will likely write up more information on how different parts of this example works when time permits. Keep an eye on this repo, and the CreateJS blog for updates (blog.createjs.com).
