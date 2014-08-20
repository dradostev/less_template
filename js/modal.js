/* Modal window */

$.fn.extend({
	modal: function () {
		this.css("position", "fixed");
		this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +  $(window).scrollTop()) + "px");
		this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
		return this;
	}
});

(function() {
	var overlay = $('.modal__overlay');
	var time = 250;

	$('.modal--close').on('click', function () {
		$(this).parent('.modal').fadeOut(time);
		overlay.fadeOut(time);
	});

	$('.modal--launch').on('click', function () {
		var target = $('.modal'+$(this).data('target'));
		if (target) {
			overlay.fadeIn(time);
			target.fadeIn(time);
		}		
	});
})();

(function (){
	$('.modal').modal();

	$(document).ready(function () {
		$('.modal__overlay').hide();
		$('.modal').hide();
	});
})();