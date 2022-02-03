const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	autoplay: {
		delay: 3000,
	},

	keyboard: {
		enabled: true,
		// onlyInViewport: false,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: 'true'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button--next',
		prevEl: '.slider-button--prev',
	},

	effect: 'cube',
	// direction: 'vertical',
	speed: 500,

	// And if we need scrollbar
	/*scrollbar: {
			el: '.swiper-scrollbar',
	},*/
});