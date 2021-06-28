$(function(){

 
  $('.rate-star').raty({ path: 'images', readOnly: true, score: 5});
  
  $('.product-slider__inner').slick({ 
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active'); // добавление класса элементу и отмена добавления
  });
  

  var mixer = mixitup('.pruducts__inner-box'); //пишется для mixitup обязательно в конце иначе не работает
});

