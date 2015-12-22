$(document).ready(function () {
    var url = 'url(' + $('.carouselle img').first().attr('src') + ')';
    $('.large-photo').css('background-image', url);

    $('.carouselle').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        variableWidth: true,
        centerMode: true,
        arrows: true,
        focusOnSelect: true,
        accessibility: true,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
    });

    $('.carouselle img').click(function () {
        var url = 'url(' + this.src + ')';
        $('.large-photo').css('background-image', url);
    });

    $('.large-photo').click(function () {
        var i, images = [],
            url = $(this).css('background-image').slice(5, -2);
        $('.carouselle img').each(function (index) {
            if (images.indexOf(this.src) == -1) images.push(this.src);
        });
        while (url != images[0]) images.push(images.shift());
        for (i = images.length - 1; i > -1; i--) images[i] = {src: images[i]};
        $.magnificPopup.open({
            items: images,
            gallery: { enabled: true },
            type: 'image'
        });
    });
});
