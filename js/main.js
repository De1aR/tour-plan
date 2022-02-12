const hotelSlider = new Swiper('.hotel-slider', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	/*
		autoplay: {
			delay: 3000,
		},
	*/

	keyboard: {
		enabled: true,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: 'true'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.hotel-slider__button--next',
		prevEl: '.hotel-slider__button--prev',
	},

	effect: 'cube',
	speed: 500,
});

const reviewsSlider = new Swiper('.reviews-slider', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	keyboard: {
		enabled: true,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: 'true'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.reviews-slider__button--next',
		prevEl: '.reviews-slider__button--prev',
	},

	effect: 'slide',
	speed: 500,
});