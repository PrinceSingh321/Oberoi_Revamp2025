// function mobileOnlySlider() {
//   if($(".awardsWrapperRev").length > 0){
//     if ($(window).width() < 1024) {
//       if (!$(".awardsWrapperRev").hasClass("slick-initialized")) {
//         $(".awardsWrapperRev").slick({
//           autoplay: false,
//           speed: 300,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           arrows: false,
//         });
  
//       }
//     } else {
//       if ($(".awardsWrapperRev").hasClass("slick-initialized")) {
//         $(".awardsWrapperRev").slick("unslick");
//       }
//     }
//   }
  
//     // if ($(window).width() < 1024) {
//     //   mobileOnlySlider();
//     // } else {
//     //   $(".awardsWrapperRev").slick("unslick");
//     // }
// }

let awardsSwiper = null;

function mobileOnlySlider() {
  const $slider = document.querySelector(".awardsWrapperRev");
  if (!$slider) return;

  const isMobile = window.innerWidth < 1024;

  if (isMobile && !awardsSwiper) {
    awardsSwiper = new Swiper(".awardsWrapperRev", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: false,
      speed: 600,
      parallax: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.5,
        releaseOnEdges: false,
        thresholdDelta: 20,
        thresholdTime: 200,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      allowTouchMove: true,
    });
  } else if (!isMobile && awardsSwiper) {
    awardsSwiper.destroy(true, true);
    awardsSwiper = null;
  }
}

// Initialize on load
//mobileOnlySlider();

// Reinitialize on resize
window.addEventListener("resize", () => {
  mobileOnlySlider();
});


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
