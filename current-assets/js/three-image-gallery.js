$(".three-image-gallery .slider-div").slick({
	slidesToShow: 3,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
});

$(".three-image-gallery .slider-div-paticipating-htls").slick({
	slidesToShow: 3,
	infinite: false,
	autoplay:false,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
});

$(".threeVideo-image-gallery .slider-div").slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
})