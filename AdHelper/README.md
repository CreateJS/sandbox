AdHelper Class and Sample CreateJS Banner Ad
=======

Interactive HTML5 banner ad demonstrating use of the AdHelper class.

![ScreenShot](https://raw.github.com/CreateJS/sandbox/master/AdHelper/README_1.jpg)

The AdHelper class is only 2kb over the wire, and provides a number of capabilities for HTML5 banner ads built with
CreateJS:
- pausing & muting while in background tabs
- setting sleep schedules (ex. pause after 15s)
- waking on interaction for configurable time
- displaying alternative content on old browsers
- ensure full resolution graphics on high DPI screens
- performance monitoring
- time syncing content

See the documentation in `/docs` and the source of `garyad_deploy.html` for more information.

The interactive sample ad was created entirely as a Flash Pro HTML5 Canvas document, and has a total  "over the wire" 
(gzipped) size of only 66kb (including 25kb of audio), excluding the CDN hosted CreateJS libraries. It uses vector
graphics, to provide high fidelity art on any display.
It was created entirely by a designer / illustrator, including the timeline code for interaction.

Files:
- `AdHelper.js` the unminified AdHelper class
- `AdHelper.min.js` minified AdHelper class
- `docs/` documentation for the AdHelper class
- `garyad_deploy.html` the ad html with AdHelper implemented
- `garyad.fla` the Flash Pro HTML5 Canvas document
- `garyad.html` the html published by Flash Pro
- `garyad.js` the JS library published by Flash Pro
- `index.html` test environment with the ad in an iframe
- `tools` gulp tasks for building the docs and min file

All art is copyright 2013 gskinner.com, inc. and cannot be used without permission.