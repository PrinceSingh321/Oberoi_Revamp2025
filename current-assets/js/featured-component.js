
if ( $(window).width() <= 991 ) {

	setTimeout(function(){
		$(".featured-list").slick({
			arrows: false,
			adaptiveHeight: true
		});
	}, 200);
	

	var liEl = $(".featured-col1 .image-text-block-style1").html();
	$(".featured-list").prepend("<li class='image-text-block-style1'>" + liEl + "</li>");

	
}
if ( $(window).width() <= 768 ) {
	$(".text-block-duration li").on("click", function(e) {
		$(this).children(".pop-out").toggleClass("active");
		 e.stopPropagation();
	});
	 $(document).on("click", function(e) {
		if ($(e.target).is(".pop-out") === false) {
		  $(".pop-out").removeClass("active");
		}
  });
}