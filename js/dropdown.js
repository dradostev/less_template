var toggle = false;
var dropdowns = $('.dropdown__menu');
dropdowns.hide();

var delay = 150;
var speed = 250;

$('.dropdown__toggle--click').on('click', function (e) {
	var dropdown = $(e.target).siblings('.dropdown__menu');
	dropdown.stop().slideToggle(speed);
});

/* TODO: Реализовать нормальное ховер меню */

// $('.dropdown__toggle--hover').parent().on('mouseover', function (e) {
// 	var dropdown = $(e.target).siblings('.dropdown__menu');
// 	dropdown.stop().delay(delay).slideDown(speed);
// }).on('mouseout', function (e) {
// 	var dropdown = $(e.target).siblings('.dropdown__menu');
// 	$(this).find('.dropdown__menu').on('mouseover', function () {
// 		dropdown.stop().delay(delay).slideDown(speed);
// 	}).on('mouseout', function () {
// 		dropdown.stop().delay(delay).slideUp(speed);
// 	});
// 	dropdown.stop().slideUp();
// });