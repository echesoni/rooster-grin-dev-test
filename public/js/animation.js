$(document).ready(function(){

  $('.heading-title').delay(800).fadeIn(4000);
  $('.sub-text').delay(800).fadeIn(4000);

  anime({
      targets: '.heading-btn',
      scale: [0, 1],
      delay: 2500
    })

    anime({
        targets: '.icon-med',
        scale: [0, 1],
      })
});
