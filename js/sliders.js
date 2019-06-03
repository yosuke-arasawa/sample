jQuery(window).on('load', my_parts);

function my_parts() {

    slideWidth = jQuery('.sliders').width();
    slideHeight = jQuery('.sliders-item').height();
    imgSize = getImageSize(jQuery('.sliders-item > img').attr('src'));
    slideAspect = imgSize[1] / imgSize[0] * 100;

    slideNum = jQuery('.sliders-item').length;
    slideSetWidth = slideWidth * slideNum;
    slideSetHeight = slideHeight;

    arrow = slideWidth / 30;

    jQuery('.sliders').css('padding-top', slideAspect + '%');
    jQuery('.sliders-items').css('width', slideSetWidth);
    jQuery('.sliders-item').css('width', slideWidth);
    jQuery('.sliders-next').css('width', arrow).css('height', arrow).css('font-size', arrow);
    jQuery('.sliders-prev').css('width', arrow).css('height', arrow).css('font-size', arrow);

    var slideCurrent = 0;
    var sliding = function () {

        if (slideCurrent < 0) {
            slideCurrent = slideNum - 1;
        } else if (slideCurrent > slideNum - 1) {
            slideCurrent = 0;
        }
        jQuery('.sliders-items').stop().animate({
            left: slideCurrent * -slideWidth
        });
    }

    jQuery('.sliders-prev').click(function () {
        slideCurrent--;
        sliding();
    });
    jQuery('.sliders-next').click(function () {
        slideCurrent++;
        sliding();
    });

    jQuery(window).on('resize', function () {
        slideWidth = jQuery('.sliders').width();
        slideSetWidth = slideWidth * slideNum;
        jQuery('.sliders-items').css('width', slideSetWidth);
        jQuery('.sliders-item').css('width', slideWidth);

        arrow = slideWidth / 30;
        jQuery('.sliders-next').css('width', arrow).css('height', arrow).css('font-size', arrow);
        jQuery('.sliders-prev').css('width', arrow).css('height', arrow).css('font-size', arrow);
    });

}

function getImageSize(src) {
    var img = new Image();
    img.src = src;
    return [img.width, img.height];
}
