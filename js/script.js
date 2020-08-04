$(document).ready(function() {
	$('.popup').magnificPopup({

	});

	$('.burger').click(function(event){
		$('.burger, .top_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.top_menu').click(function(event){
		$('.burger, .top_menu').removeClass('active');
		$('body').removeClass('lock');
	});
});