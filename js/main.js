(function($) {


  $('#burger').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('menu-open');
  })

  $('.burger-menu').on('click', function() {
    var el = $(this);
    el.toggleClass('burger-active');
    $('body').toggleClass('menu-open');

    if (!el.hasClass('burger-active')) {
      el.addClass('closing');
    } else {
      el.removeClass('closing');
    }
  });


  var bgLoadDetect = function() {
    var el = $(this),
      src = el.css('background-image').replace(/(^url\()|(\)$|[\"\'])/g, '');
    $('<img/>').one('load', function() {
      console.log('Load Check 1')
    }).attr('src', src);
  }

  $(".js--load-check").each(bgLoadDetect);

  $(".js--load-check").waitForImages(true).done(function() {
    $(this).addClass('loaded');
  });

  $('body').addClass('active');

})(jQuery);
