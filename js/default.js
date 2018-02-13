$(function(){
	var patchwork = $('#patchwork');
	var skills = $('#skills')
	var patchwork_btn = $('#patchwork-btn');

	var slowSlide = "1000" ;
	var fastSlide = "100" ;

	resized = false;

	$.setLoader = function(){
		$('.frame').show(slowSlide);
	};

	$.resetLoader = function(){
		$('.frame').hide(slowSlide);
	};

	$.resize_window = function(change){
		var width_window= $('body').width();
		var grande_card = $(".box-heavy");
		var moyen_card = $(".box-medium");

		if ( change == true) {
			$.hideThis(patchwork);
			$.showThis(skills);
			resized = true;
		}else{
			if ((width_window > 1280) && (resized != true)){
				$.showThis(grande_card);
				$.hideThis(moyen_card);
			}
			else if ((800 < width_window) && (width_window<= 1280) ) {
				$.hideThis(grande_card);
				$.showThis(moyen_card);
				resized = false;
			}
			else if ((550 < width_window) && (width_window <= 800) ){
				$.hideThis(grande_card);
				$.showThis(moyen_card);
			}else if(width_window <= 550){
				$.hideThis(grande_card);
				$.showThis(moyen_card);
			}
		}

	};

	$.hideThis = function(elem){
		elem.slideUp(fastSlide).trigger('formVisible');
	};

	$.showThis = function(elem){
		elem.slideDown(fastSlide).trigger('formVisible');
	};

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

	patchwork_btn.click(function(){
		$.scrollToElement($('.section-3'))
	});

	patchwork_btn.click(function(){
		$.resize_window(true);
	})

	$(window).resize( function(){
		$.resize_window(false);
	});

	$(window).ready( function(){
		$("#profil-pic").attr('src','img/profil.jpg');
		$.resize_window(false);
		setTimeout($.resetLoader, 300);
	});

});