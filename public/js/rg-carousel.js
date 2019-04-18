$(document).ready(function(){

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  // move next carousel
  $('.moveNextCarousel').click(function(e){
     e.preventDefault();
     e.stopPropagation();
     $('.carousel').carousel('next');
  });

  // move prev carousel
  $('.movePrevCarousel').click(function(e){
     e.preventDefault();
     e.stopPropagation();
     $('.carousel').carousel('prev');
  });

  autoplay();
  function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 5000);
  };
});
