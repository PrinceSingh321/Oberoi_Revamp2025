function mobileOnlySlider() {
  $(".awardsWrapperRev").slick({
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  $(window).resize(function () {
    let $windowWidth = $(document).width();
    if ($windowWidth < 1024) {
      mobileOnlySlider();
    } else {
      $(".awardsWrapperRev").slick("unslick");
    }
  });
}

function fnGlobalAwards() {
  var glblFlg = true;
  $(".awardsSlides >  li").click(function () {
    $(".awardsSlide").removeClass("active");
    $(".awardsCountrySlide").addClass("activeSlider");
    // $(".two-imageWithHalfSlider-img").slick("setPosition");
    // $(".two-imageWithHalfSlider-img ").slick("refresh");

    setTimeout(function () {
      fnSlickChangeArrowPos();
      $(".awardsCountrySlide.activeSlider").css("opacity", "1");
    }, 100);
  });

  $(".awardsSlides li.country-list").click(function () {
    if (glblFlg) {
      $(".two-imageWithHalfSlider-img").slick("refresh");
      $(".two-imageWithHalfSlider-img").slick("setPosition");
    }
    // if($(this).hasClass("active")){
    //   $(this).find(".country-dropdown li").each(function(){
    //       if(!$(this).hasClass("active")){
    //        //$(this).parents(".country-dropdownColumn").find("li.ComSlider-item:eq(0)").click();
    //       }
    //   });
    // }
    glblFlg = false;
  });

  $(".awards-main-tab .ComSlider-tab li").click(function () {
    $(".awardsSlide, .awards-main-tab .ComSlider-tab li").addClass("active");
    $(".awardsCountrySlide").removeClass("activeSlider");
    $(".awardsCountrySlide").removeClass("active");
    $(".imageWithRightTextWrappRev").show();
    $(".ComSlider-tab.awardsSlides li").removeClass("active");
    $(this)
      .parents(".com_TwoTabHalfColImageComponentRev")
      .find(".getDropdownValue")
      .text("INDIA");
    glblFlg = true;
  });

  $(".awardsSlides li").click(function () {
    $(".awards-main-tab .ComSlider-tab li").removeClass("active");
  });
}
