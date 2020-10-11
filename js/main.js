$(function(){
	$('#quote-h2').hide();

	$('.tab-link').on('click', function(e){
		e.preventDefault();
		$('.tabs-content__wrap').removeClass('tabs-content__wrap--active');
		$($(this).attr('href')).addClass('tabs-content__wrap--active');
	});

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active')
		$('.header__menu').toggleClass('header__menu--active')
	});
	$('[data-fancybox').fancybox({
		smallBtn : true,
		toolbar  : false,
		btnTpl   : {
			smallBtn : '<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close"></button>'
		}
	});
});
var swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	effect: "fade",
	autoplay: true,
	autoplay: {
		delay: 4000,
	},
	fadeEffect: {
		crossFade: true,
	},
	thumbs: {
		swiper: swiper2,
	},
	breakpoints: {
    // when window width is >= 320px
    990: {
    	allowTouchMove: true,
    },
    1: {
    	allowTouchMove: false,
    },
}
});
var swiper2 = new Swiper('.swiper-container2', {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	autoplay: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		dynamicMainBullets: 5,
	},
	thumbs: {
		swiper: swiper,
	},
	wrapperClass: 'swiper-wrapper2',
	slideClass: 'swiper-slide2',
	centeredSlides: true
});