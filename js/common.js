$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    $(".bgZoom").css({
        backgroundSize: (100 + scroll/5)  + "%",
        top: -(scroll/10)  + "%",
    });
});