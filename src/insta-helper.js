javascript:(function() {
    var imgList = document.querySelectorAll("[srcset]");
    imgList.forEach(imgFunction);
    function imgFunction(item, index) {
        imageString = item.getAttribute('srcset');
        if (imageString.includes(' 1080w')) {
            bestImage = imageString.split('750w,')[1];
            bestImage = bestImage.replace(' 1080w','');
            window.open(bestImage);
        }
    }
    var vidList = document.querySelectorAll("video");
    vidList.forEach(vidFunction);
    function vidFunction(item, index) {
        vidString = item.getAttribute('src');
        window.open(vidString);
    }
})();
