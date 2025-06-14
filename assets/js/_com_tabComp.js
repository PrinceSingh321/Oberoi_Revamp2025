

function fnSetElementXPosition(){
  $(".ComSlider-tab li").each(function () {
              var liPosition = $(this).offset();
              var dataTab = $(this).attr("data-id"); // Assuming each <li> has a unique ID

  
              if ($(".filterWrapp").hasClass("fixed")) {
                  $("#" + dataTab)
                      .find(".destFIlterTab")
                      .css({
                          left: liPosition.left - 1, // Adjust positioning
                      });
              } else {
                if ($(window).width() > 991) {
                  $("#" + dataTab)
                      .find(".destFIlterTab")
                      .css({
                          left: liPosition.left - 65, // Adjust positioning
                      })
                    }
                    if ($(window).width() < 991) {
                      $("#" + dataTab)
                          .find(".destFIlterTab")
                          .css({
                              left: liPosition.left - 10, // Adjust positioning
                          })
                        }
              }
          });
  
      }
  

function tabComponent() {
  //$(".ComSlider-tab li:not(:first)").addClass("inactive");
  //$(".imageWithRightTextWrappRev").hide();
  $(".imageWithRightTextWrappRev:first").show();
  $(".imageWithRightTextWrappRev .dropDownFilter_Comp").hide();
  $(".ComSlider-tab li").addClass("inactive");
  $(".imageWithRightTextWrappRev").show();

  
  $(".ComSlider-tab li").click(function () {
    $(this).parents(".destinationMainWrapp").find(".getDropdownValue").addClass("active");
    // $(this).parents(".destinationMainWrapp").find(".right-section-btn .buttonStyle2Rev").show();  // to show view btn
    $(this).parents(".experiencePageContent").find(".right-section-btn .buttonStyle2Rev").show();   // to show view btn

    var dataTab = $(this).attr("data-id");
    var categoryDtls = $(this).attr("data-category");

    fnSetElementXPosition(); 
    
    if ($(this).hasClass("inactive")) {
      console.log("hasActiveClassOnItem");
      $(".ComSlider-tab li").addClass("inactive");
      $(this).removeClass("inactive");

      //alzoha filter code start here
      if ($(".destinationOption2").length > 0) {
        $(".dropDownFilter_Comp").show();
        $(".imageWithRightTextWrappRev").fadeIn();
        $(".imageWithRightTextWrapp").fadeOut();
        $(".imageWithRightTextWrapp[data-id=" + categoryDtls + "]").fadeIn();
      }
      
      //alzoha filter code end here
      else {
        $(".imageWithRightTextWrappRev").hide();
        $("#" + dataTab).fadeIn("slow");
        $(".imageWithRightTextWrappRev.imageTextFormSlide").show();
      }
    }

    //   if($(this).parents(".desTab").length > 0){
    //     $("#" + dataTab).find(".dropDownFilter_Comp").insertAfter($(this));

    //  }

   
     
    

    else {
           
      if ($(".destinationOption2").length > 0) {
        if (
          $(this).parents(".ComSlider-tab").hasClass("desTab") &&
          $(this)
            .parents(".com_container")
            .find(".destFIlterTab")
            .is(":visible") &&
          $(this)
            .parents(".com_container")
            .find(".getDropdownValue")
            .hasClass("active")
        ) {
          setTimeout(function () {
            //$(".dropDownFilter_Comp").hide();
            //$(".ComSlider-tab li").addClass("inactive");
             
            if ($(".js-filter").hasClass("active")) {
              // alert(123);
              $(".dropDownFilter_Comp .destFIlterTab").removeClass(
                "openListItem"
              );
            } else {
              $(".dropDownFilter_Comp .destFIlterTab").removeClass(
                "openListItem"
              );
              $(".shoAllExp").click();
            }
            //$(".shoAllExp").click();
          }, 100);
        }
      } else {
        if (
          $(this).parents(".ComSlider-tab").hasClass("desTab") &&
          $(this).parents(".com_container").find(".destFIlterTab").is(":visible") &&
          $(this).parents(".com_container").find(".getDropdownValue").hasClass("active")) {
          setTimeout(function () {
            //$(".dropDownFilter_Comp").hide();
            //$(".ComSlider-tab li").addClass("inactive");

            if ($(".js-filter").hasClass("active")) {
              // alert(123);
              $(".dropDownFilter_Comp .destFIlterTab").removeClass(
                "openListItem"
              );
            } else {
              $(".dropDownFilter_Comp .destFIlterTab").removeClass(
                "openListItem"
              );
              $(".shoAllExp").click();
            }
            //$(".shoAllExp").click();
          }, 100);
        }
      }
    }

    $(".shoAllExp").click(function () {
      $(".imageWithRightTextWrappRev").fadeIn("slow");
      if($('.imageWithRightTextWrappRev') == 'display:','block'){
        $(this).hide();
      }
      $(this).parents(".filterWrapp").find(".getDropdownValue").text("Select Experience");
      $(this).parents(".filterWrapp").find(".ComSlider-item").addClass("inactive");
      if ($(window).width() > 991) {
        if ($(".getDropdownValue").hasClass("active")) {
          $(this)
            .parents(".destinationMainWrapp")
            .find(".getDropdownValue")
            .text("");
        }
      }
    });

    // $(".imageWithRightTextWrappRev .dropDownFilter_Comp").show();
    // $(this).parents('.destinationMainWrapp').find(".dropFilter").addClass('openListItem');

    if ($(".destinationOption2").length > 0) {
      $(".imageWithRightTextWrappRev .dropDownFilter_Comp").hide();
      $("#" + dataTab).show();

      $(".dropDownFilter_Comp .getDropdownValue").hide();
      $(".dropDownFilter_Comp .dropFilter").removeClass("openListItem");

      $("#" + dataTab)
        .find(".getDropdownValue")
        .show();
      $("#" + dataTab)
        .find(".dropFilter")
        .addClass("openListItem");
    } else {
      $(".dropDownFilter_Comp .getDropdownValue").show();
      $(".imageWithRightTextWrappRev .dropDownFilter_Comp").show();
      $(this)
        .parents(".destinationMainWrapp")
        .find(".dropFilter")
        .addClass("openListItem");
    }
  });
  $(".shoAllExp").click(function () {
    $(
      ".destinationOption2 .destination-container .destListWrapp .imageWithRightTextWrapp"
    ).show();
  });

  $(".desTab .ComSlider-item").click(function () {
    $(".viewMapData").hide();
  });
}

function fnDestinationTabScroll() {
  if ($("#DestscrollFixed").length > 0) {
    var Destoffset = $("#DestscrollFixed").offset().top;
    var Destfooter = $("footer");

    $(window).scroll(function () {
      if ($(this).scrollTop() > Destoffset) {
        $("#DestscrollFixed").addClass("fixedtab");
        $(".destination-container .filterWrapp").addClass("fixed");
      } else {
        $("#DestscrollFixed").removeClass("fixedtab");
        $(".destination-container .filterWrapp").removeClass("fixed");
      }

      // Check if the footer is in the viewport
      var DestfooterTop = Destfooter.offset().top;
      var DestfooterHeight = Destfooter.height();
      var DestfooterBottom = DestfooterTop + DestfooterHeight;
      var DestwindowHeight = $(window).height() - 300;
      var DestwindowBottom = $(window).scrollTop() + DestwindowHeight;

      if (
        DestfooterTop < DestwindowBottom &&
        DestfooterBottom > $(window).scrollTop()
      ) {
        $("#DestscrollFixed").hide();
        $(".destination-container .filterWrapp").hide();
        Destfooter.css("padding-bottom", "50px");
      } else {
        $("#DestscrollFixed").show();
        $(".destination-container .filterWrapp").show();
      }
    });
  }
}

function fnFilterTabScroll() {
  if ($(".experiencePageContent .filterWrapp").length > 0) {
    var FilterTaboffset = $(".experiencePageContent .filterWrapp").offset().top;
    var FilterTabfooter = $("footer");

    $(window).scroll(function () {
      if ($(this).scrollTop() > FilterTaboffset) {
        $(".experiencePageContent .filterWrapp").addClass("fixedFilterTab");
      } else {
        $(".experiencePageContent .filterWrapp").removeClass("fixedFilterTab");
      }

      // Check if the footer is in the viewport
      var FilterTabfooterTop = FilterTabfooter.offset().top;
      var FilterTabfooterHeight = FilterTabfooter.height();
      var FilterTabfooterBottom = FilterTabfooterTop + FilterTabfooterHeight;
      var FilterTabwindowHeight = $(window).height() - 300;
      var FilterTabwindowBottom = $(window).scrollTop() + FilterTabwindowHeight;

      if (
        FilterTabfooterTop < FilterTabwindowBottom &&
        FilterTabfooterBottom > $(window).scrollTop()
      ) {
        $(".experiencePageContent .filterWrapp").hide();
      } else {
        $(".experiencePageContent .filterWrapp").show();
      }
    });
  }
}

function fnTabScroll() {
  console.log(1);
  if ($("#scrollFixed").length > 0) {
    var headerOffset = $("#scrollFixed");
    var menuItems = $("#tabBar li, #wellScroll li");
    var sections = $(".multiSlider-container");
    var footer = $("footer");

    $(window).scroll(function (e) {
      var filterTop = headerOffset.offset().top;
      var filterPos = filterTop - $(window).scrollTop();

      var containerTop = sections.offset().top;
      var containerPos = containerTop - $(window).scrollTop();

      if (filterPos <= 40) {
        headerOffset.addClass("fixedtab");
      }

      if (containerPos > 80 && headerOffset.hasClass("fixedtab")) {
        headerOffset.removeClass("fixedtab");
      }

      var scrollPosition = $(window).scrollTop();
      sections.each(function () {
        var currentSection = $(this);
        var sectionTop = currentSection.offset().top - 300;
        var sectionBottom = sectionTop + currentSection.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          var targetDataId = currentSection.attr("id");
          var targetMenuItem = menuItems.filter(
            '[data-id="' + targetDataId + '"]'
          );
          menuItems.removeClass("active");
          targetMenuItem.addClass("active");
        }
      });

      // Check if the footer is in the viewport
      var footerTop = footer.offset().top;
      var footerHeight = footer.height();
      var footerBottom = footerTop + footerHeight;
      var windowHeight = $(window).height() - 300;
      var windowBottom = $(window).scrollTop() + windowHeight;

      if (footerTop < windowBottom && footerBottom > $(window).scrollTop()) {
        $("#scrollFixed").hide();
        //footer.css('padding-bottom','50px');
      } else {
        $("#scrollFixed").show();
      }
    });

    $("#tabBar li").click(function () {
      $("#tabBar li").removeClass("active");
      $(this).addClass("active");
      var dataId = $(this).attr("data-id");
      var topheader_height = $(".top-nav").height();
      var header_height = $("#header").height();

      $("#scrollFixed").addClass("fixedtab");

      if ($(window).width() > 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              150,
          },
          100
        );
      }

      if ($(window).width() < 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              85,
          },
          100
        );
      }
    });

    $("#tabBar li:first-child").click(function () {
      $("#tabBar li").removeClass("active");
      $(this).addClass("active");
      var dataId = $(this).attr("data-id");
      var topheader_height = $(".top-nav").height();
      var header_height = $("#header").height();

      $("#scrollFixed").addClass("fixedtab");

      if ($(window).width() > 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              103,
          },
          100
        );
      }

      if ($(window).width() < 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              50,
          },
          100
        );
      }
    });

    $("#wellScroll li").click(function () {
      $("#wellScroll li").removeClass("active");
      $(this).addClass("active");
      var dataId = $(this).attr("data-id");
      var topheader_height = $(".top-nav").height();
      var header_height = $("#header").height();

      $("#scrollFixed").addClass("fixedtab");

      if ($(window).width() > 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              90,
          },
          100
        );
      }

      if ($(window).width() < 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              40,
          },
          100
        );
      }
    });
    $("#wellScroll li:first-child").click(function () {
      $("#wellScroll li").removeClass("active");
      $(this).addClass("active");
      var dataId = $(this).attr("data-id");
      var topheader_height = $(".top-nav").height();
      var header_height = $("#header").height();

      $("#scrollFixed").addClass("fixedtab");

      if ($(window).width() > 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              -140,
          },
          90
        );
      }

      if ($(window).width() < 992) {
        $("html,body").animate(
          {
            scrollTop:
              $("#" + dataId).offset().top -
              topheader_height -
              header_height -
              10,
          },
          100
        );
      }
    });
  }
}

function fnTabFilter() {
  $(".js-filter").on("click", function () {
    var category = $(this).attr("data-category");
    $(".js-filter").removeClass("active");
    $(this).addClass("active");

    if (category == "all") {
      $(this).parents(".destination-container").find(".imageWithRightTextWrapp").removeClass("is-hidden");
    } else {
      $(this).parents(".destination-container").find(".imageWithRightTextWrapp").addClass("is-hidden");
      $(".imageWithRightTextWrapp[data-category-detail=" + category + "]").removeClass("is-hidden");
    }
     // Scroll to .DestscrollFixed (from bottom to top view)
      var $scrollTarget = $(".destinationMainWrapp");
      if ($scrollTarget.length) {
        $("html, body").animate({
          scrollTop: $scrollTarget.offset().top - 161
        }, 600); 
      }
      
  });
  $(".ComSlider-item").click(function () {
    //$(".imageWithRightTextWrapp").removeClass("is-hidden");
  });
  $(".shoAllExp").click(function () {
    $(".imageWithRightTextWrappRev").fadeIn("slow");
    //$(".getDropdownValue").hide();
    //$(this).parents(".filterWrapp").find(".getDropdownValue").text("Select Experience");
    //$(this).parents(".destinationMainWrapp").find("#tab1").find(".getDropdownValue").text("Select Things to explore");
    //$("#tab2 .filterWrapp").addClass('hidetab');
    //$("#tab3 .filterWrapp").addClass('hidetab');
    $(this)
      .parents(".destinationMainWrapp")
      .find(".dropDownFilter_Comp")
      .hide();
    $(".imageWithRightTextWrapp").removeClass("is-hidden");
    $(".js-filter").removeClass("active");
    $(this)
      .parents(".filterWrapp")
      .find(".ComSlider-item")
      .addClass("inactive");
  });
}

function fnReservationFormFuntion() {
  $("#Req-close-btn").click(function () {
    $(".requestReservationForm-container, .openDiningForm").removeClass(
      "active"
    );
  });
  $("#Req-close-btn-new").click(function () {
    $(".openweddingForm").removeClass("active");
    $(this).parents(".requestReservationForm-container").hide();
  });

  $(".openweddingForm").click(function () {
    $(".requestReservationForm-container, .openDiningForm").removeClass(
      "active"
    );
    $(".request-a-proposal-form").hide();

    if (
      $(".weddingForm-writeus").is(":visible") &&
      $(this).hasClass("active")
    ) {
      $("#reservation-queries").hide();
      $(".openweddingForm").removeClass("active");
      $(this).removeClass("active");
      $(".weddingForm-writeus").removeClass("active");
    } else {
      $("#reservation-queries").show();
      $(".openweddingForm").removeClass("active");
      $(this).addClass("active");
      $(".weddingForm-writeus").addClass("active");
    }

    var requestHotelName = $(this).attr("data-hotelname");
    $("#spa_formInner .hasSubHotel li").each(function () {
      if (
        $(this).find("span").text().trim().toLowerCase() ==
        requestHotelName.toLowerCase()
      ) {
        $(this).find("span").click();
      }
    });

    if (
      $(".requestReservationForm-container").is(":visible") &&
      !$(".openweddingForm").not(this).hasClass("active")
    ) {
      $(this).addClass("active");
    } else {
      $(".openweddingForm").removeClass("active");
      $(this).addClass("active");
    }

    setTimeout(function () {
      //$(".request-a-proposal-form").show();
      $("html,body").animate(
        {
          scrollTop: $(".weddingForm-writeus").offset().top - 160,
        },
        600
      );
    }, 0);
  });
  $(".openDiningForm").click(function () {
    // $(this).addClass("active");
    setTimeout(function () {
      $(".request-a-proposal-form").show();
      $("html,body").animate(
        {
          scrollTop: $(".request-a-proposal-form-wrap").offset().top - 160,
        },
        600
      );
    }, 0);
    $(".weddingForm-writeus").removeClass("active");
    $(".openweddingForm").removeClass("active");
  });
}

function fnTabComponentFunction() {
  $(".tab-switcher").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".imageWithTextWrappRev").slick("refresh");
  });
  var previousActiveTabIndex = 0;
  $(".tab-switcher").on("click keypress", function (event) {
    if (
      (event.type === "keypress" && event.which === 13) ||
      event.type === "click"
    ) {
      var tabClicked = $(this).data("tab-index");
      if (tabClicked != previousActiveTabIndex) {
        $("#allTabsContainer .storyContent").each(function () {
          if ($(this).data("tab-index") == tabClicked) {
            $(".storyContent").hide();
            $(this).show();
            previousActiveTabIndex = $(this).data("tab-index");
            return;
          }
        });
      }
    }
  });
  if ($(window).width() < 991) {
    // $(".contact-us-tab li").click(function () {
    //   var selectedVal = $(".tab-switcher.active").text();
    //   $(this).parents(".filterWrapp").find(".getDropdownValue").text(selectedVal);
    //   $(".contact-us-tab").removeClass("openListItem");
      
    // });

    $(".contact-us-tab li").click(function () {
      var selectedVal = $(this).find("a").text().trim(); // Get text inside <a> of clicked li
      $(this).closest(".com_container").find(".getDropdownValue").text(selectedVal);
      $(".contact-us-tab").removeClass("openListItem");
  });
    
  }

  $(".write-to-us-tab > ul > li").click(function () {
    var dataFormId = $(this).attr("data-tab-content");
    $("#" + dataFormId + " form")[0].reset();
    $(this).parents(".write-to-us-tab").find(".selectCountryCodeValDisplay").text("");
    $("select, input").removeClass("has-value");
  });

  $(".awardsSlides li").each(function () {
    const $countryDiv = $(this).find(".country-dropdown");

    if ($countryDiv.is(":visible")) {
      $(".awardsSlides").addClass("has-block-div");
    } else {
      $(".awardsSlides").removeClass("has-block-div");
    }
  });
}


$(window).on("scroll resize", function () {
  fnSetElementXPosition();
});

