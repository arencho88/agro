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

   	// отложенная загрузка карты
	var blog = $('.blog');
	
	
	$(window).on('scroll', function(){

		var winScroll = $(this).scrollTop();
		var winHeght = $(this).height();
		var summ = winScroll + winHeght;
		var blogTop = blog.offset().top;

		if(summ >= blogTop){
			var map = $('#google-map');
			var src = map.data('src');
			map.attr('src', src);
			map.removeAttr('data-src');
			$(window).off('scroll');
		}
	});         
	
});