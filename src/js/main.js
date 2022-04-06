/**
 * main.js
 */

// fancybox
$('[data-fancybox]').fancybox({
	touch: false,
	autoFocus: false,
	backFocus: false,
	closeExisting: true
});

// mask phone
const maskPhone = () => {
	let maskedElements = [],
			el = document.querySelectorAll('.masked');
	if (el.length > 0) {
		const mask = { mask: '+7 (000) 000-00-00' };
		el.forEach(item => {
			maskedElements.push(new IMask(item, mask));
		});
	}
	$('.masked').click(function () {
		if ($(this).val() == '') $(this).val('+7 ');
	});
}

maskPhone();

$('.item-content__list li').click(function(){
	let id = $(this).attr('data-id');

	$('.item-content__list li').removeClass('active');
	$(this).addClass('active');

	$('.item-content').removeClass('active');
	$('.item-content[data-id='+id+']').addClass('active');
});