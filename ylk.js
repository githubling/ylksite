$(function() {
    var $inlineNav = $('.inline-nav');
    $inlineNav.scrollspy({
        min: $inlineNav.offset().top + $inlineNav.height(),
        onEnter: function(element, position) {
            $('.fixed-nav-wrapper').addClass("show")
        },
        onLeave: function(element, position) {
            $('.fixed-nav-wrapper').removeClass("show")  
        }
    });
});