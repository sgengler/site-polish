(function($) {

//setting up menu on/off class

  $('#burger').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('menu-open');
  })

  //for animated burger
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


//Old school way of detecting load

  var bgLoadDetect = function() {
    var el = $(this),
      src = el.css('background-image').replace(/(^url\()|(\)$|[\"\'])/g, '');
    $('<img/>').one('load', function() {
      // Image has loaded;
    }).attr('src', src);
  }
  $(".js--load-check").each(bgLoadDetect);


//Plugins make it easer :)

  $(".js--load-check").waitForImages(true).done(function() {
    $(this).addClass('loaded');
  });


})(jQuery);
