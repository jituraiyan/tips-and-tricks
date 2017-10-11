(function(){

'use strict';

$(document).ready(function(){
	$('.back-to-top').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		});
	});

});

$(window).on('load scroll', function(){
	if( $(window).scrollTop() > $(window).height()/2 ) {
		$('.back-to-top').fadeIn();
	}else{
		$('.back-to-top').fadeOut();
	}
});

}());

