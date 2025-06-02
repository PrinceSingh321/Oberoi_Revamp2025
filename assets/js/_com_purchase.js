function fnPurchaseSlider() {
  $(".com_PurchaseSlider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".sendRequestForm").click(function () {
    $(".sendrequestFields").show();
    $(".buyonlineFileds").hide();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".buyOnlineForm").click(function () {
    $(".sendrequestFields").hide();
    $(".buyonlineFileds").show();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
}
