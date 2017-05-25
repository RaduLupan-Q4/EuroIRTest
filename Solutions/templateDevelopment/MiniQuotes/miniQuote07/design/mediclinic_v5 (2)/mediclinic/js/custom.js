jQuery(document).ready(function ($) {
	$('.mobile_icon').click( function () {
		$('#dnngo_megamenu').toggleClass('active');
	});

	$('.submenuitem').click(function() { 
		var target = $(this.hash);
		var width = $(window).width();
		topOffset = 200;
		if (width <= 768) {
			topOffset = 0;
		};
		$('html,body').animate({
			scrollTop: target.offset().top - topOffset
		}, 1000);
		return false;
	});

	$('#to_top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		},
		800);
	});



	$(window).scroll(function() {
		if ($(this).scrollTop() > 450){
			$('#header').addClass("animated fadeInDown");
		}
		else{
			$('#header').removeClass("animated fadeInDown");
		}

		if ($(this).scrollTop() > 250){
			$('#to_top').fadeIn("slow");
		}
		else{
			$('#to_top').fadeOut("slow");
		}
	});




});