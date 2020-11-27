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
javascript:(function() {postData = async () => {var postResponse = await fetch(document.location.href + '?__a=1');var postJson = await postResponse.json();if (postJson["graphql"]["shortcode_media"]["is_video"] == true) {window.open(postJson["graphql"]["shortcode_media"]["video_url"]);} else if (postJson["graphql"]["shortcode_media"]["edge_sidecar_to_children"] != null) {var mediaList = postJson["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"];mediaList.forEach(mediaFinder);function mediaFinder(item, index) {if (item["node"]["is_video"] == true) {window.open(item["node"]["video_url"]);} else {var qList = item["node"]["display_resources"];window.open(qList[qList.length-1]["src"]);}}} else {var qList = postJson["graphql"]["shortcode_media"]["display_resources"];window.open(qList[qList.length-1]["src"]);}};postData();})();
```
