$(".two-image-gallery .slider-div").slick({
	slidesToShow: 2,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
});