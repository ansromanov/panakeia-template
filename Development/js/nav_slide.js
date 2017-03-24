$(document).ready(function () {
  $(".site-nav a, .site-nav__logo").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var navbarHeight = 100-1;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navbarHeight
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });  
});