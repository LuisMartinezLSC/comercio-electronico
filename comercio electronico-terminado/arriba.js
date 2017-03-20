$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body,php').animate({
			scrollTop:'0px'
		}, 300);
	
	});
		$(window).scroll(function(){
		if($(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
		});
	
});