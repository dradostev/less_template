(function() {
	var time = 250;
	$('.util--close').on('click', function () {
		$(this).parents('.modal').parents('.modal__overlay').fadeOut(time);
	});
})();