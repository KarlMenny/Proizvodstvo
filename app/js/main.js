'use strict';

// SCROLL-DOWN
$(document).on('click', function(event) {
	var eventTarget = event.target || window.event;
	if(!($(eventTarget).hasClass('header__link') || $(eventTarget).hasClass('burger-menu__link') || $(eventTarget).hasClass('footer__link-menu') || $(eventTarget).hasClass('footer__logo') || $(eventTarget).hasClass('footer__img-arrow-up'))) {
		return;
	} else {
		if ($(eventTarget).hasClass('footer__logo')) {

			scroll(eventTarget.parentNode);
			return;
		}

		if ($(eventTarget).hasClass('footer__img-arrow-up')) {

			scroll(eventTarget.parentNode);
			return;
		}

		scroll(eventTarget);
	}
});

function scroll (eventTarget) {
	$('html, body').animate({
		scrollTop: $($.attr(eventTarget, 'href')).offset().top
	}, 600);
	return false;
}
// SCROLL-DOWN

// BURGER-BUTTON
$('.burger-btn').on('click', function() {
	$('.burger-btn').toggleClass('burger-btn_is-active');
	$('.burger-menu').fadeToggle(100);
	$('.burger-menu').css('display', 'flex');
});
// BURGER-BUTTON

// HEADER-SLIDER
$(".slider").slick({
	arrows: false,
	dots: true,
	appendDots: $('.slider__pages'),
	fade: true,
	speed: 1000,
	cssEase: 'ease',
	autoplay: true,
	autoplaySpeed: 2000,
});
// HEADER-SLIDER

// PRODUCTS-SLIDER
var slideIndexSlider_1 = 1;
var slideIndexSlider_2 = 1;
var slideIndexSlider_3 = 1;
var slideIndexSlider_4 = 1;
var slideIndexSlider_5 = 1;
var slideIndexSlider_6 = 1;
var timerId;

$('.products__dot').on('click', function (event) {

	var thisDot = event.target;
	var slideContainer = $(thisDot).parent().prev();

	if ($(thisDot).hasClass('dot-1')) {
		currentSlide.call(slideContainer, 1);
		return;
	}

	if ($(thisDot).hasClass('dot-2')) {
		currentSlide.call(slideContainer, 2);
		return;
	}

	if ($(thisDot).hasClass('dot-3')) {
		currentSlide.call(slideContainer, 3);
		return;
	}
});

$('.products__slide').on('mouseover', function (event) {

	var thisSlideImg = event.target;
	var slideContainer = $(thisSlideImg).parent().parent();

	timerId = setTimeout(function () {
		plusSlides.call(slideContainer, 1);
	}, 1800);
});

$('.products__slide').on('mouseout', function () {
	clearTimeout(timerId);
});

function plusSlides(n) {
	var slideContainer = this;
	if ($(slideContainer).hasClass('sl-1'))
		showSlides.call(slideContainer, slideIndexSlider_1 += n);

	if ($(slideContainer).hasClass('sl-2'))
		showSlides.call(slideContainer, slideIndexSlider_2 += n);

	if ($(slideContainer).hasClass('sl-3'))
		showSlides.call(slideContainer, slideIndexSlider_3 += n);

	if ($(slideContainer).hasClass('sl-4'))
		showSlides.call(slideContainer, slideIndexSlider_4 += n);

	if ($(slideContainer).hasClass('sl-5'))
		showSlides.call(slideContainer, slideIndexSlider_5 += n);

	if ($(slideContainer).hasClass('sl-6'))
		showSlides.call(slideContainer, slideIndexSlider_6 += n);
}

function currentSlide(n) {
	var slideContainer = this;
	if ($(slideContainer).hasClass('sl-1'))
		showSlides.call(slideContainer, slideIndexSlider_1 = n);

	if ($(slideContainer).hasClass('sl-2'))
		showSlides.call(slideContainer, slideIndexSlider_2 = n);

	if ($(slideContainer).hasClass('sl-3'))
		showSlides.call(slideContainer, slideIndexSlider_3 = n);

	if ($(slideContainer).hasClass('sl-4'))
		showSlides.call(slideContainer, slideIndexSlider_4 = n);

	if ($(slideContainer).hasClass('sl-5'))
		showSlides.call(slideContainer, slideIndexSlider_5 = n);

	if ($(slideContainer).hasClass('sl-6'))
		showSlides.call(slideContainer, slideIndexSlider_6 = n);
}

function showSlides(n) {
	var i;
	var slideContainer = this;
	var slides = $(slideContainer.children('.products__slide'));
	var dots = $(slideContainer).next().children('.products__dot');

	if (n > slides.length) {
		if ($(slideContainer).hasClass('sl-1'))
			slideIndexSlider_1 = 1;

		if ($(slideContainer).hasClass('sl-2'))
			slideIndexSlider_2 = 1;

		if ($(slideContainer).hasClass('sl-3'))
			slideIndexSlider_3 = 1;

		if ($(slideContainer).hasClass('sl-4'))
			slideIndexSlider_4 = 1;

		if ($(slideContainer).hasClass('sl-5'))
			slideIndexSlider_5 = 1;

		if ($(slideContainer).hasClass('sl-6'))
			slideIndexSlider_6 = 1;
	}

	if (n < 1) {
		if ($(slideContainer).hasClass('sl-1'))
			slideIndexSlider_1 = slides.length;

		if ($(slideContainer).hasClass('sl-2'))
			slideIndexSlider_2 = slides.length;

		if ($(slideContainer).hasClass('sl-3'))
			slideIndexSlider_3 = slides.length;

		if ($(slideContainer).hasClass('sl-4'))
			slideIndexSlider_4 = slides.length;

		if ($(slideContainer).hasClass('sl-5'))
			slideIndexSlider_5 = slides.length;

		if ($(slideContainer).hasClass('sl-6'))
			slideIndexSlider_6 = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		$(slides[i]).css('display', 'none');
	}

	for (i = 0; i < dots.length; i++) {
		$(dots[i]).removeClass('products__dot_active');
	}

	if ($(slideContainer).hasClass('sl-1')) {
		$(slides[slideIndexSlider_1 - 1]).css('display', 'block');
		$(dots[slideIndexSlider_1 - 1]).addClass('products__dot_active');
	}

	if ($(slideContainer).hasClass('sl-2')) {
		$(slides[slideIndexSlider_2 - 1]).css('display', 'block');
		$(dots[slideIndexSlider_2 - 1]).addClass('products__dot_active');
	}

	if ($(slideContainer).hasClass('sl-3')) {
		$(slides[slideIndexSlider_3 - 1]).css('display', 'block');
		$(dots[slideIndexSlider_3 - 1]).addClass('products__dot_active');
	}

	if ($(slideContainer).hasClass('sl-4')) {
		$(slides[slideIndexSlider_4 - 1]).css('display', 'block');
		$(dots[slideIndexSlider_4 - 1]).addClass('products__dot_active');
	}

	if ($(slideContainer).hasClass('sl-5')) {
		$(slides[slideIndexSlider_5 - 1]).css('display', 'block');
		$(dots[slideIndexSlider_5 - 1]).addClass('products__dot_active');
	}

	if ($(slideContainer).hasClass('sl-6')) {
		$(slides[slideIndexSlider_6 - 1]).css('display', 'block');
		$(dots[slideIndexSlider_6 - 1]).addClass('products__dot_active');
	}
}
// PRODUCTS-SLIDER

// SHOW-MORE-TEXT-BUTTON
$('.products__show-more').on('click', function (event) {
	var thisBtn = event.target;
	var thisBtnParent = $(thisBtn).parent();
	var blockProduct = $(thisBtn).parent().parent();

	if ($(thisBtnParent).hasClass('products__describe_active')) {

		setTimeout(function () {
			$(thisBtnParent).css('padding-bottom', '20px');
			$(thisBtnParent).removeClass('products__describe_active');
			$(thisBtn).html('Подробнее');
			$(blockProduct).next().css('z-index', '0');
		}, 500);

		$(thisBtn).prev().removeClass('products__wrapper_active');

	} else {
		$(blockProduct).next().css('z-index', '-1');
		$(thisBtnParent).css('padding-bottom', '35px');

		setTimeout(function () {
			$(thisBtn).prev().addClass('products__wrapper_active');
			$(thisBtn).html('Cвернуть');

			$(thisBtnParent).addClass('products__describe_active');
		}, 100);
	}
});
// SHOW-MORE-TEXT-BUTTON

