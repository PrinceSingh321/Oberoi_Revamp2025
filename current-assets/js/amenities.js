$(function(){
	var winWidth = $(window).width();
	$(".down-arrow-button").click(function(){

		

		$(this).children(".down-arrow").toggleClass("active");
		
		$(".amenities-content").toggleClass("active");
	});

	$(".down-arrow").click(function(){
		$(this).toggleClass("active");
	});
		
	if(winWidth < 768 ){
		$(".amenities-content-box-heading").click(function(){
	   $(this).toggleClass("active");
		$(this).next(".amenities-content-dtls-box").slideToggle();

		$(this).parent(".amenities-content-box").siblings().find(".amenities-content-box-heading").removeClass("active");
		$(this).parent(".amenities-content-box").siblings().find(".amenities-content-dtls-box").slideUp();
		
	});
	}
	});