$(function() {
    $('.title-wrap-bottom a').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            var scrollTo = $(this).attr('href');
            var whitespace = scrollTo === '#arrow-to' ? 70 : 30;
            $('html,body').animate({
                scrollTop: $(scrollTo).offset().top - whitespace
            }, 1900);
        });
    });
});

$(function() {
    $('.scroll a').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            var scrollTo = $(this).attr('href');
            var whitespace = scrollTo === '#' ? 70 : 30;
            $('html,body').animate({
                scrollTop: $(scrollTo).offset().top - 220 - whitespace
            }, 1900);
        });
    });
});


