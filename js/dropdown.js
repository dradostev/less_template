/* Было решено использовать jQuery-плагин Dropit (Автор: gilbitron) */

(function (){
	$('.dropdown__menu--click').dropit({
		action: 'click',
		triggerEl: 'a.dropdown__toggle',
		triggerParentEl: 'li.dropdown'
	});

	$('.dropdown__menu--hover').dropit({
		action: 'mouseenter',
		triggerEl: 'a.dropdown__toggle',
		triggerParentEl: 'li.dropdown'
	});
})();