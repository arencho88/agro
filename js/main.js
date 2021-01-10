$(function(){

	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
	});


	$(window).resize(function(){
		if($(window).width() > 641) {
			$('.menu').removeClass('menu--active');
			$('.burger__btn').removeClass('burger__btn--active');
		}
	});
		

	$('.burger__btn').on('click', function(){
			$(this).toggleClass('burger__btn--active');
			$('.menu').toggleClass('menu--active')
	});
	

	$('a.menu__link').on('click', function(e){
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);

		$('.menu').removeClass('menu--active');
		$('.burger__btn').removeClass('burger__btn--active')
	});


	$('a.footer__menu-link').on('click', function(e){
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
	});

            
	
});