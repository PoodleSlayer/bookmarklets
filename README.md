# Helpful Bookmarklets

This repo serves as a collection of random helpful javascript bookmarklets I've made over time. Nothing crazy, just some stuff you could do with a developer console and inspecting HTML a bit.

## How to use

Javascript bookmarklets are added like regular bookmarks, only instead of a URL for the "Page" you paste in some javascript code formatted a special way. The javascript code must be wrapped in 
```
javascript:(function() { ... })();
```
and all linebreaks must be removed. For convenience I will try to update this readme with the one-line versions of all the code, but otherwise just go grab the bookmarklet code you want and manually take out the linebreaks yourself. I have included the necessary wrapping for each script :)

## Insta-Helper

This bookmarklet opens full-size Instagram posts for better sharing. Go to a post page and hit the bookmarklet and the image will be opened in a new tab. If the post is an album containing multiple images, each image will open in a new tab. If any videos are included, the mp4s will also be opened in a new tab. 

**Note:** your browser may disable popups by default, so the first time you run this you might get a warning that popups were blocked. Just allow them for Instagram

```
javascript:(function() {var imgList = document.querySelectorAll("[srcset]");imgList.forEach(imgFunction);function imgFunction(item, index) {imageString = item.getAttribute('srcset');if (imageString.includes(' 1080w')) {bestImage = imageString.split('750w,')[1];bestImage = bestImage.replace(' 1080w','');window.open(bestImage);}}var vidList = document.querySelectorAll("video");vidList.forEach(vidFunction);function vidFunction(item, index) {vidString = item.getAttribute('src');window.open(vidString);}})();
```
