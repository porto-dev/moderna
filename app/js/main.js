$(function(){

 
  $('.rate-star').raty({ path: 'images', readOnly: true, score: 5});
  var mixer = mixitup('.pruducts__inner-box');
  $('.product-slider__inner').slick({ 
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
});

