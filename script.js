/*    $(function () {
        $("img").hover(
            function () {
                $(this).animate({
                    width: "300px",
                    height: "300px"
                });
            },
            function () {
                $(this).animate({
                    width: "256px",
                    height: "188px"
                });
            });
    });
*/
$(document).ready(function () {
    $('.slideshow').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 1000,
        pager: false,
        /*ページャーの非表示*/
        controls: false,
        /*前後のコントロールボタン非表示*/
        //slidewidth:400
    });
});


$(function () {
    $('.nightViewImg').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 4,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});
