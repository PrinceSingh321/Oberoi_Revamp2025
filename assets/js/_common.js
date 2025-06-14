function selectForMobile() {
  $(".ComSlider-tab li").click(function () {
    let itemValue = $(this).text();
    $(this).parents(".ComSlider-tab").siblings(".getDropdownValue").text(itemValue);

    if ($(window).width() > 991) {
      if (!$(this).hasClass("inactive")) {
        //$(this).parents(".destinationMainWrapp").find(".getDropdownValue").text("");
        //$(".dropFilter .js-filter").removeClass('active');
      }
    }
  });

  $(".getDropdownValue").click(function () {
    $(this).next(".ComSlider-tab").toggleClass("openListItem");
    $(this).next(".ComSlider-tab").find(".ComSlider-item").removeClass("openListItem");
  });

  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".desTab, .destFIlterTab, .getDropdownValue").length) {
  //     $(".ComSlider-tab, .destFIlterTab").removeClass("openListItem");
     
  //     $(".ComSlider-item").addClass("inactive");
  //     $('.dropDownFilter_Comp').hide();
     
  //     } 
  // });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".desTab, .destFIlterTab, .getDropdownValue").length) {
        $(".ComSlider-tab, .destFIlterTab").removeClass("openListItem");
        let desactiveItems = $('.destinationMainWrapp .ComSlider-item').not('.inactive');
        $(".destinationMainWrapp .ComSlider-item").addClass("inactive");
        
        var desID = "";
        $('.destinationMainWrapp .dropDownFilter_Comp').each(function() {
          if ($(this).css('display') === 'block') {
              console.log($(this).attr('id')); // Logs the ID of the visible element
              desID = $(this).attr('id');
          }
      });

      $('.destinationMainWrapp .dropDownFilter_Comp').hide();
      if(desID){
        $('#'+desID).show();
        if($('#' + desID + ' .getDropdownValue').text()==''){
          $('#' + desID + ' .getDropdownValue').hide();
        }else{
          desactiveItems.removeClass('inactive');
        }
      }
      
    }
    
});

// Prevent closing when clicking inside the dropdown
$(".dropDownFilter_Comp, .destFIlterTab").on("click", function (event) {
    event.stopPropagation();
});




  $(".ComSlider-item").click(function () {
    $(this).parents(".ComSlider-tab").removeClass("openListItem");
  });
}

function selectForDestFilter() {
  $(".destFIlterTab li").click(function () {
    let itemValue = $(this).text();
    $(this)
      .parents(".destFIlterTab")
      .siblings(".getDropdownValue")
      .text(itemValue);
      $(this).parents(".destinationMainWrapp").find(".right-section-btn .buttonStyle2Rev").show();
  });

  $(".getDropdownValue").click(function () {
    $(this).next(".destFIlterTab").toggleClass("openListItem");
    $(this)
      .next(".destFIlterTab")
      .find(".js-filter")
      .removeClass("openListItem");
  });

  $(".js-filter").click(function () {
    $(this).parents(".destFIlterTab").removeClass("openListItem");
  });
}

//for zoom detection
px_ratio =
  window.devicePixelRatio ||
  window.screen.availWidth / document.documentElement.clientWidth;

function isZooming() {
  if ($(".slick-slider, .swiper-slide").length > 0) {
    var newPx_ratio =
      window.devicePixelRatio ||
      window.screen.availWidth / document.documentElement.clientWidth;
    if (newPx_ratio != px_ratio) {
      px_ratio = newPx_ratio;
      console.log("zooming");
      fnSlickChangeArrowPos();
      return true;
    } else {
      console.log("just resizing");
      return false;
    }
  }
}

function fnSlickChangeArrowPos() {
  $(".slick-slider, .swiper").each(function () {
    try {
      var toppos =
        $(this).find(".slick-active, .swiper-slide-active").find("picture img").height() / 2;
      $(this)
        .find(".slick-prev, .slick-next, .swiper-button-next, .swiper-button-prev")
        .css("top", toppos + "px");
      //console.log('arrowposition');
    } catch (err) {
      console.log(err);
    }
  });
}

function fnSetBannerSectionHeight() {
  $(".banner-and-booking-widget .slick-slider").each(function () {
    if ($(this).find(".slick-active").find("picture img").length > 0) {
      console.log("Banner Height");
      var bannerImageHeight = $(this)
        .find(".slick-active")
        .find("picture img")
        .height();
      $(this).parents(".banner-and-booking-widget").height(bannerImageHeight);
      $(this).parents(".banner-and-booking-widget").css("overflow", "hidden");
    }
  });
}

fnSetBannerSectionHeight();

$(window).resize(function () {
  fnSlickChangeArrowPos();
  isZooming();
  fnSetBannerSectionHeight();
});

function submitFormLoader() {
  $(".submitFormBtn").click(function () {
    $(this).addClass("loading");
    setTimeout(() => {
      $(this).removeClass("loading");
    }, 3500);
  });
}

function fnloginJoinBtn() {
  if ($(".login-popup").length > 0) {
    $(".loginjoinBtn").click(function () {
      $(".login-popup").toggleClass("active");
    });
  }

  // document.addEventListener("DOMContentLoaded", function () {
  //   const listItems = document.querySelectorAll(".login-btns a");

  //   listItems.forEach((item) => {
  //     item.addEventListener("mouseover", function () {
  //       listItems.forEach((a) => a.classList.remove("activeColor"));
  //       item.classList.add("activeColor");
  //     });

  //     item.addEventListener("mouseout", function () {
  //       item.classList.remove("activeColor");
  //     });
  //   });
  // });
}

$("body").click(function (e) {
  if (
    !$(e.target).closest(".login-popup").length &&
    !$(e.target).closest(".loginjoinBtn").length
  ) {
    $(".login-popup").removeClass("active");
    $(".login-bookbtn2").addClass("activeColor");
  }
});

function fnbackTop() {
  if ($(".backto-top").length > 0) {
    var scrollToTopBtn = document.querySelector(".backto-top");
    var rootElement = document.documentElement;
    function handleScroll() {
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.3) {
        // Show button
        scrollToTopBtn.classList.add("active");
      } else {
        // Hide button
        scrollToTopBtn.classList.remove("active");
      }
    }

    function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
  }
}

function openMobileOnlyPop() {
  $(".o-one-login a").click(function () {
    $(".login-popup").toggleClass("active-n");
  });

  // $(document).click(function (event) {
  //   if (
  //     !$(event.target).is(".login-popup") &&
  //     !$(event.target).is(".o-one-login a")
  //   ) {
  //     $(".login-popup").removeClass("active-n");
  //   }
  // });

  $("body").click(function (e) {
    if (
      !$(e.target).closest(".login-popup").length &&
      !$(e.target).closest(".o-one-login a").length
    ) {
      $(".login-popup").removeClass("active-n");
    }
  });

  $(".btnRequestAProposal").click(function () {
    $("#showThanks").show();
    $("#hideThanks").hide();
    $("#formRequestAProposal1 .timelineWrap .filler").css("width", "0");
    $(".timelineWrap ul li").removeClass("completed").removeClass("active");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".login-popup").removeClass("active");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".login-popup").removeClass("active-n");
    }
  });
}

function fngetOSforForm() {
  var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isMac && isSafari) {
    $("body").addClass("mac-safari");
  }
}

function fnsearchForMobile() {
  $(".search-mobile").click(function () {
    $(".mo-menu-conatiner").removeClass("open");
    $(".search-box").show();
    $(".top-nav").hide();
  });
  $(".searchClose").click(function () {
    $(".top-nav").show();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".top-nav").show();
    }
    500;
  });
}

// function fnShareButtonOpen() {
//   $(".share-toggle").click(function () {
//     $(".share-list").toggle();
//   });
// }

function fnCommonFuntion() {
  $(window).on("resize", function () {
    if ($(window).width() > 767) {
    }
  });
}

function fnOverviemapDirection() {
  if ($(window).width() >= 768 && $(window).width() <= 1024) {
    $(".openDirection").click(function () {
      $(".destination-field").toggleClass("openDestMap");
    });
  }
  $(".main-menu .menu-list > li").click(function () {
    $(this).toggleClass("active");
  });
}

function fnPageScrollTo() {
  // Function to get query parameters from URL
  function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Check if the 'scrollTo' parameter exists in the query string
  var scrollToDiv = getQueryParam("scrollTo");
  if (scrollToDiv) {
    // Scroll to the target div based on the query parameter
    $("html, body").animate(
      {
        scrollTop: $("#" + scrollToDiv).offset().top - 150,
      },
      1000
    ); // 1000 milliseconds = 1 second scrolling duration
  }
}
fnPageScrollTo();
// Function to add a class to the body if screen resolution is below 1600px
function updateBodyClass() {
  if (window.innerWidth < 1600) {
    document.body.classList.add("below-1600");
  } else {
    document.body.classList.remove("below-1600");
  }
}
updateBodyClass();
window.addEventListener("resize", updateBodyClass);


function detectPlatform() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Variables to store detected platform
  var isMac = false;
  var isWindows = false;
  var isMobile = false;

  // Detect macOS
  if (/Mac/i.test(userAgent) && !/iPhone|iPad|iPod/i.test(userAgent)) {
      isMac = true;
  }

  // Detect Windows
  if (/Windows/i.test(userAgent)) {
      isWindows = true;
  }

  // Detect mobile devices (iOS, Android)
  if (/iPhone|iPad|iPod|Android/i.test(userAgent)) {
      isMobile = true;
  }

  // Add classes to the body
  if (isMac) {
      document.body.classList.add('mac');
  }
  if (isWindows) {
      document.body.classList.add('windows');
  }
  if (isMobile) {
      document.body.classList.add('mobile');
  }
}

function fnAquicomp(){
  if($(".aqiComponentWrap").length > 0){
  $("#showAqi").on('click',function () {
    $(this).toggleClass("active");
    $(".aqiComponentWrap").slideToggle(300);
    $("#showMap, #showsustain").removeClass("map-opened, pop-active");
    $("#mapArea, #sustain-main").hide();
    $("#showMap").removeClass('map-opened');
    if ($(this).hasClass("active")) {
      $("html,body").animate(
        {
          scrollTop: $(".aqiComponentWrap").offset().top - 160,
        },
        600
      );
    }
  });
}
  $("#showMap, #showsustain").click(function () {
    $(".aqiComponentWrap").hide();
    $("#showAqi").removeClass("active");
  });

}

function fnMouswheel() {
  setTimeout(() => { 
      let scrollTimeout;
      let isMacSafari = $('body').hasClass('mac-safari');

      $('.slick-slider').on('wheel', function (e) {
          if ($('.slick-slider').length > 0) {
              let deltaX = e.originalEvent.deltaX;
              let deltaY = e.originalEvent.deltaY;
              let deltaMode = e.originalEvent.deltaMode;

              if (deltaMode === 1) {
                  deltaX *= 60; // Line scrolling mode
                  deltaY *= 60;
              }
              if (deltaMode === 2) {
                  deltaX *= 600; // Page scrolling mode
                  deltaY *= 600;    
              }

              // Prevent only if horizontal scroll is detected (deltaX > deltaY)
              if (Math.abs(deltaX) > Math.abs(deltaY)) {
                  e.preventDefault(); // Prevent default only for horizontal scroll
                  clearTimeout(scrollTimeout);

                  scrollTimeout = setTimeout(() => {
                      if (deltaX > 0) {
                          $(this).slick('slickNext');
                      } else {
                          $(this).slick('slickPrev');
                      }
                  }, isMacSafari ? 25 : 45); // Reduced timeout for Mac Safari
              }
          }
      });

  }, 1000);
}


function fnLoader() {
  var $loader = $('.loader');

  if ($loader.length) {
    $loader.on('webkitAnimationEnd', function () {
      $('.solar-star-text').addClass('active');
    });

    $(window).on('load', function () {
      setTimeout(function () {
        $loader.addClass('deactive');
      }, 2000);
    });
  }
}



