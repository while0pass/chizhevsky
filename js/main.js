$(document).ready(function () {
    var url = $('.carouselle img').first().attr('src'),
        replacePhoto = function (url) {
            var img = $('.large-photo img');
            img.attr('src', url);
            if (img.width() > img.height()) {
                img.css('width', '100%');
                img.css('height', 'auto');
            } else {
                img.css('width', 'auto');
                img.css('height', '100%');
            }
        };
    replacePhoto(url);

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
        replacePhoto(this.src);
    });

    $('.large-photo img').click(function () {
        var i, images = [], url = this.src;
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
