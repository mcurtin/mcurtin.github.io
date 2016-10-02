// Custom JS for MC Site

(function($){
  $(document).ready(function() {

    $('.main-navigation-button .navbar-toggle').click(function() {
      $(this).toggleClass('is-open');
      $('.search-title-bar .button').removeClass('is-open');
    });

    $('.social-navigation-button .navbar-toggle').click(function() {
      $(this).toggleClass('is-open');
      $('.menu-title-bar .button').removeClass('is-open');
    });
  });

})(jQuery);