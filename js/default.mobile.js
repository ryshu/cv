$(function(){
	var slowSlide = "1000" ;

	$.scrollToElement = function(elem){
		$('html, body').animate
		({
			scrollTop: elem.offset().top
		}, slowSlide);
	};

	$("#link-home").click(function(){
		$.scrollToElement($('header'))
	});
	$("#link-pres").click(function(){
		$.scrollToElement($('.section-1'))
	});
	$("#link-exp").click(function(){
		$.scrollToElement($('.section-2'))
	});
	$("#link-skill").click(function(){
		$.scrollToElement($('.section-3'))
	});

	$(window).ready( function(){
		$("#profil-pic").attr('src','img/profil.jpg');
	});
});