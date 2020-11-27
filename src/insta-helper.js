javascript:(function() {
    postData = async () => {
        var postResponse = await fetch(document.location.href + '?__a=1');
        var postJson = await postResponse.json();
        if (postJson["graphql"]["shortcode_media"]["is_video"] == true) {
            window.open(postJson["graphql"]["shortcode_media"]["video_url"]);
        } else if (postJson["graphql"]["shortcode_media"]["edge_sidecar_to_children"] != null) {
            var mediaList = postJson["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"];
            mediaList.forEach(mediaFinder);
            function mediaFinder(item, index) {
                if (item["node"]["is_video"] == true) {
                    window.open(item["node"]["video_url"]);
                } else {
                    var qList = item["node"]["display_resources"];
                    window.open(qList[qList.length-1]["src"]);
                }
            }
        } else {
            var qList = postJson["graphql"]["shortcode_media"]["display_resources"];
            window.open(qList[qList.length-1]["src"]);
        }
    };
    postData();
})();
