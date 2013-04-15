LineGraph
=======

A very simple line graph example.

![ScreenShot](https://raw.github.com/CreateJS/sandbox/master/LineGraph/README_1.jpg)

Of note, there is no direct use of the "tick" event in this demo. The stage.update() is coupled to a tween's "change" event instead, which means rendering only happens when the animation is active (saving CPU/GPU).