Use Flash Professional CC to open and export the PlanetaryGary\_art.fla file as a CreateJS asset library. For Flash Professional CS6 use the Flash Professional Toolkit for CreateJS to export the PlanetaryGary\_art_OLD.fla file instead.

http://www.adobe.com/products/flash/flash-to-html5.html

Note that Flash CC 13.1 has an issue with calculating bounds for frames in tweens. Because these bounds are used for defining the sprite sheet frame rects, you will notice some sprite sheet frames in the game will be improperly cropped if you re-export the animations. The included assets/PlanetaryGary\_art.js file has had the frameBounds values for EnemyBeaver and EnemyMoose fixed to avoid this, and we are hopeful Adobe will release a proper fix shortly.

All art & graphics is copyright 2013 gskinner.com, inc. and cannot be used without permission.