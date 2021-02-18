$(function(){
    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('is-active');
    });
  });
  $('.menu__item a[href]').on('click', function(event) {
    $('.menu-btn').trigger('click');
});
// ふわっと
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});