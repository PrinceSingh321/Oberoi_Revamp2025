function fnComSlider() {
  $(".two-imageWithHalfSlider-img, .imageTextFormSlide").slick({
    dots: false,
    arrows: true,
    lazyLoad: "ondemand",
    touchMove: true,
    draggable: true, // Allow dragging with mouse/trackpad
    swipe: true ,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".com_TwoImageSlickSlider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    centerPadding: "20px",
    touchMove: true,
    draggable: true, // Allow dragging with mouse/trackpad
    swipe: true ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  

  // Handle tab clicks

  // Handle tab clicks
  $(
    ".com_TwoImageSliderComponentRev .ComSlider-tab li, .two-imageWithHalfSlider .ComSlider-tab li"
  ).on("click", function () {
    var $this = $(this);
    var itemCategory = $this.attr("data-filter");
    var $parentSlider = $this.closest(
      ".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider"
    );

    // Update slider based on attribute
    var itemCtgoryIndex = $parentSlider
      .find(
        ".slider-img-sec:not('.slick-cloned')[data-slide=" +
          itemCategory +
          "], .com_TwoImageSlider-img-sec:not('.slick-cloned')[data-slide=" +
          itemCategory +
          "]"
      )
      .attr("data-slick-index");

    $parentSlider
      .find(".com_TwoImageSlickSlider, .two-imageWithHalfSlider-img")
      .slick("slickGoTo", itemCtgoryIndex);

    // Activate the current tab
    $parentSlider.find(".ComSlider-tab li").removeClass("active");
    $this.addClass("active");

    // Activate dropdown and sub-tabs if clicked tab has dropdown
    if ($this.hasClass("hasdropdown")) {
      var $dropdown = $this.find(".country-dropdown");
      $dropdown.addClass("active");

      $this.addClass("active");

      // Activate country list items in dropdown
      $dropdown.find("li").each(function () {
        var $item = $(this);
        var filterValue = $item.attr("data-filter");
        if (
          $parentSlider
            .find(".com_TwoImageSlider-img-sec[data-slide=" + filterValue + "]")
            .is(":visible")
        ) {
          $item.addClass("active");
        } else {
          $item.removeClass("active");
        }
      });
    }
  });

  // // Add class to active tab on slider change
  $(".com_TwoImageSlickSlider, .two-imageWithHalfSlider-img").on(
    "afterChange",
    function (event, slick, currentSlide) {
      let $slickSlider = $(this);
      let dataSlickItem = $slickSlider
        .find(".slick-slide.slick-active")
        .attr("data-slide");

      // Update active tab
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider")
        .find(".ComSlider-tab li")
        .removeClass("active");
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider")
        .find(".ComSlider-tab li[data-filter=" + dataSlickItem + "]")
        .addClass("active");
        
        $slickSlider
        .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider").find(".ComSlider-tab li.hasdropdown [data-filter=" + dataSlickItem + "]")

        //Add This Block: Handle hasdropdown li activation
    $slickSlider
    .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider")
    .find(".ComSlider-tab li.hasdropdown")
    .each(function () {
      const $li = $(this);
      const $childFilter = $li.find("[data-filter]");
      if ($childFilter.attr("data-filter") === dataSlickItem) {
        $li.addClass("active");
      } else {
        $li.removeClass("active");
        $li.removeClass('hasdrop');
        $li.removeClass('highlight');
      }
    });

  //     // Activate dropdown and sub-tabs if the slider item has dropdown
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider")
        .find(".country-list.hasdropdown")
        .each(function () {
          var $countryList = $(this);
          var countryDropdown = $countryList.find(".country-dropdown");
          var activeDropdownItem = countryDropdown.find(
            "li[data-filter=" + dataSlickItem + "]"
          );

          if (activeDropdownItem.length) {
            $countryList.addClass("active");
            countryDropdown.addClass("active");
            activeDropdownItem.addClass("active");
          } else {
            $countryList.removeClass("active");
            countryDropdown.removeClass("active");
            countryDropdown.find("li").removeClass("active");
          }
        });

   //hide map on slide change  and show image
       if($("#dmap").length > 0){
        $("#dmap").hide();
        $("#map-image").show();
      }

    // Update dropdown value text
      var filterActvTxt = $slickSlider
        .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider")
        .find(".ComSlider-tab li.active")
        .text();
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider")
        .find(".getDropdownValue")
        .text(filterActvTxt);
        
    $(".slidesBtnRev .cta-boxRev .buttonStyle2Rev").removeClass("active");

    $(".viewMapData").hide();
    
    }
    
  );

  
  
//  // Array to store each Swiper instance
// const swipers = [];

// // Initialize Swipers
// $(".two-imageWithHalfSlider-img, .com_TwoImageSlickSlider").each(function () {
//   const $el = $(this);
//   const isTwoImageSlider = $el.hasClass("com_TwoImageSlickSlider");
//   const $container = $el.closest(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider");

//   const swiper = new Swiper(this, {
//     slidesPerView: isTwoImageSlider ? 2 : 1.4,
//     spaceBetween: isTwoImageSlider ? 67 : 0,
//     speed: 600,
//     parallax: true,
//     loop: true,
//     mousewheel: {
//       forceToAxis: true,
//       sensitivity: 0.5,
//       releaseOnEdges: false,
//       thresholdDelta: 20,
//       thresholdTime: 200,
//     },
//     navigation: {
//       nextEl: $container.find(".swiper-button-next")[0],
//       prevEl: $container.find(".swiper-button-prev")[0],
//     },
//     breakpoints: {
//       1025: {
//         slidesPerView: isTwoImageSlider ? 2 : 1.4,
//       },
//       0: {
//         slidesPerView: 1,
//         spaceBetween: isTwoImageSlider ? 0 : 0,
//       },
//     },
//     on: {
//       slideChange: function () {
//         handleSlideChange($el, this);
//       },
//     },
//   });
   
//    // Disable interaction if real slides < 3
//    const realSlidesCount = swiper.slides.filter(slide => !slide.classList.contains("swiper-slide-duplicate")).length;

//    if (realSlidesCount < 3) {
//      swiper.allowTouchMove = false;
//      swiper.mousewheel.disable();
//      $container.find(".swiper-button-next, .swiper-button-prev").hide(); // Optional: hide arrows
//    }

//   swipers.push({ el: this, instance: swiper });
  
// });

// // Handle tab clicks
// $(".com_TwoImageSliderComponentRev .ComSlider-tab li, .two-imageWithHalfSlider .ComSlider-tab li").on("click", function () {
//   const $this = $(this);
//   const itemCategory = $this.attr("data-filter");
//   const $parentSlider = $this.closest(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider");
//   const $swiperEl = $parentSlider.find('.swiper')[0];

//   const swiperData = swipers.find(sw => sw.el === $swiperEl);
//   if (swiperData) {
//     const swiperInstance = swiperData.instance;

//     // Find the REAL (non-duplicate) slide index using originalSlides
//     let realIndex = -1;
//     swiperInstance.slides.forEach((slide, index) => {
//       if (
//         slide.getAttribute('data-slide') === itemCategory &&
//         !slide.classList.contains('swiper-slide-duplicate')
//       ) {
//         realIndex = swiperInstance.realIndex; // fallback
//         const dataset = swiperInstance.slides[index].dataset;
//         realIndex = parseInt(dataset.swiperSlideIndex) || index;
//       }
//     });

//     if (realIndex >= 0) {
//       swiperInstance.slideToLoop(realIndex);
//     }
//   }

//   // Activate the clicked tab
//   $parentSlider.find(".ComSlider-tab li").removeClass("active");
//   $this.addClass("active");

//   // Handle dropdown logic
//   if ($this.hasClass("hasdropdown")) {
//     const $dropdown = $this.find(".country-dropdown");
//     $dropdown.addClass("active");

//     $dropdown.find("li").each(function () {
//       const $item = $(this);
//       const filterValue = $item.attr("data-filter");
//       const isVisible = $parentSlider.find(`.swiper-slide[data-slide="${filterValue}"]`).is(":visible");
//       $item.toggleClass("active", isVisible);
//     });
//   }
// });


// // Handle Swiper slide change
// function handleSlideChange($sliderEl, swiperInstance) {
//   const $parent = $sliderEl.closest(".com_TwoImageSliderComponentRev, .two-imageWithHalfSlider");

//   const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
//   const dataSlide = $(currentSlide).attr("data-slide");

//   // Update tabs
//   $parent.find(".ComSlider-tab li").removeClass("active");
//   $parent.find(`.ComSlider-tab li[data-filter="${dataSlide}"]`).addClass("active");

//   // Handle dropdowns
//   $parent.find(".country-list.hasdropdown").each(function () {
//     const $countryList = $(this);
//     const $dropdown = $countryList.find(".country-dropdown");
//     const $activeItem = $dropdown.find(`li[data-filter="${dataSlide}"]`);

//     if ($activeItem.length) {
//       $countryList.addClass("active");
//       $dropdown.addClass("active");
//       $dropdown.find("li").removeClass("active");
//       $activeItem.addClass("active");
//     } else {
//       $countryList.removeClass("active");
//       $dropdown.removeClass("active");
//       $dropdown.find("li").removeClass("active");
//     }
//   });

//    //hide map on slide change  and show image
//        if($("#dmap").length > 0){
//         $("#dmap").hide();
//         $("#map-image").show();
//       }

//   // Update dropdown visible text
//   const activeTabText = $parent.find(".ComSlider-tab li.active").text();
//   $parent.find(".getDropdownValue").text(activeTabText);

//   // Hide map and reset state
//   $(".slidesBtnRev .cta-boxRev .buttonStyle2Rev").removeClass("active");
//   $(".viewMapData").hide();
// }


   
  
}



function fnComMultislider(
  sliderClass,
  subSliderContainerClass,
  viewAllButtonClass
) {
  $(sliderClass).each(function (index, element) {
    // Initialize the main slider
    $(element).slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      touchMove: true,
      draggable: true, // Allow dragging with mouse/trackpad
      swipe: true ,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    var SliderSlideCount = $(element).slick("getSlick").slideCount;

    if (SliderSlideCount == 1) {
      var parentContainer = $(this).parents(".com_container");
      //var sliderClass1 = parentContainer.find(sliderClass);
      var subSliderContainerClass1 = parentContainer.find(
        subSliderContainerClass
      );
      //alert(SliderSlideCount);
      $(element).slick("unslick");
      $(element)
        .find(".multisider-sub-slider-container:first-child")
        .addClass("fullwidth");
      //   $(subSliderContainerClass1).find(".multislider-sub-slide img").each(function (imgIndex, imgElement) {
      //     var imgBigDataSrc = $(imgElement).attr("src");
      //     var imgLastItem = $(imgElement).attr("src");

      //     if ($(imgElement).attr("src") != undefined) {
      //         var imgDataSrc = $(imgElement).attr("src");
      //         if (imgLastItem == "yes") {
      //             $(imgElement).parents("picture").find("source:nth-child(1), source:nth-child(2), source:nth-child(3)").attr("srcset", imgBigDataSrc);
      //             //console.log(imgBigDataSrc);
      //         }
      //         else {
      //             $(imgElement).parents("picture").find("source:nth-child(1), source:nth-child(2), source:nth-child(3)").attr("srcset", imgDataSrc);
      //         }
      //     }

      // });
    }
  });

  // Initialize the sub-slider outside the loop

  $(subSliderContainerClass).slick({
    dots: true,
    arrows: false,
    autoplay: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    speed: 900,
    pauseOnHover: true,
    lazyLoad: "ondemand",
    touchMove: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: true,
          settings: "refresh",
        },
      },
    ],
  });

  $(subSliderContainerClass).slick("refresh");

  
  

  //$(".view-all-button").hide();

  var SliderSlideCount = $(sliderClass).slick("getSlick").slideCount;
  if (SliderSlideCount > 2) {
    //$(viewAllButtonClass).show();
  } else {
    //$(viewAllButtonClass).hide();
  }

  $(viewAllButtonClass).on("click", function () {
    var parentContainer = $(this).parents(".com_container");
    var sliderClass1 = parentContainer.find(sliderClass);
    var subSliderContainerClass1 = parentContainer.find(
      subSliderContainerClass
    );
    var viewAllButtonClass = parentContainer.find(viewAllButtonClass);

    $(this).hide();
    parentContainer.find(".viewLessBtn").show();

    $(sliderClass1).slick("destroy");
    var subSliderSlideCount = $(this)
      .parents(".com_container")
      .find(".multislider-sub-slide-img")
      .slick("getSlick").slideCount;
    if ($(subSliderSlideCount) % 2 !== 0) {
      // Set data-src for images within odd sub-slider
      // $(subSliderContainerClass1).find(".multislider-sub-slide img").each(function (imgIndex, imgElement) {
      //     //console.log($(imgElement).attr("src"));
      //     var imgBigDataSrc = $(imgElement).attr("src");
      //     var imgLastItem = $(imgElement).attr("src");
      //     //console.log(imgBigDataSrc);
      //     if ($(imgElement).attr("src") != undefined) {
      //         var imgDataSrc = $(imgElement).attr("src");
      //         if (imgLastItem == "yes") {
      //             $(imgElement)
      //                 .parents("picture")
      //                 .find("source:nth-child(1), source:nth-child(2), source:nth-child(3)")
      //                 .attr("srcset", imgBigDataSrc);
      //             //console.log(imgBigDataSrc);
      //         }
      //         else {
      //             $(imgElement)
      //                 .parents("picture")
      //                 .find("source:nth-child(1), source:nth-child(2), source:nth-child(3)")
      //                 .attr("srcset", imgDataSrc);
      //         }
      //     }
      // });
      //$(subSliderContainerClass1).find(".slick-slide:last-child").parents(".slick-slider").parent(".multisider-sub-slider-container:last-child").addClass("fullwidth");
      // $(subSliderContainerClass1).find(".slick-slide:nth-child(even)").parents(".slick-slider").parent(".multisider-sub-slider-container:nth-child(even)").removeClass("fullwidth");
    }
    setTimeout(function () {
      $(subSliderContainerClass).slick("refresh");
    }, 200);
    $(this).hide();

    parentContainer.find(".multiSlider-main-slide").addClass("active");

    fnRequestForm();
    if($(window).width() > 767){
      MouseoverEvent();
      }
    fnPrefieldSelectBoxOnbutttonClick();
    
    fnRequestForm();
    fnPrefieldSelectBoxOnbutttonClick();
  });

  $(window).load(function () {
    if ($(window).width() < 767) {
      $(".multiSlider-main-slide").addClass("active");
      $(viewAllButtonClass).hide();
      $(".multislider-slide").slick("unslick");
    }
  });
}

fnComMultislider(".multislider-slide",".multislider-sub-slide-img",".view-all-button");

if($(window).width() > 767){
function MouseoverEvent() {
  $(".multislider-sub-slide-img").mouseover(function () {
    $(this).slick("play");
  });
  $(".multislider-sub-slide-img").mouseout(function () {
    $(this).slick("pause");
  });
}
MouseoverEvent();
}


$(".viewLessBtn").on("click", function () {
  // Additional actions after reinitialization
  setTimeout(function () {
    fnSlickChangeArrowPos();
    fnRequestForm();
    fnPrefieldSelectBoxOnbutttonClick();
    if($(window).width() > 767){
    MouseoverEvent();
    }
  }, 300);

  var parentContainer = $(this).parents(".com_container");

  // Hide corresponding "View Back" button and show corresponding "View All" button
  $(this).hide();
  $(this).parents(".com_container").find(".view-all-button").show();

  var multiSliderMainSlide = parentContainer.find(".multiSlider-main-slide");
  if (multiSliderMainSlide.length > 0) {
    multiSliderMainSlide.removeClass("active");
  }

  // Reinitialize main slider corresponding to this button
  var slider = parentContainer.find(".multislider-slide");
  slider.slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    touchMove: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          spaceBetween: 0,
        },
      },
    ],
  });

  var Subslider = parentContainer.find(".multislider-sub-slide-img");

  // $(Subslider).slick({
  //   dots: true,
  //   arrows: false,
  //   autoplay: false,
  //   fade: true,
  //   cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  //   speed: 900,
  //   pauseOnHover: true,
  //   lazyLoad: "ondemand",
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //         autoplay: false,
  //         settings: "refresh",
  //       },
  //     },
  //   ],
  // });

  fnRequestForm();
});
