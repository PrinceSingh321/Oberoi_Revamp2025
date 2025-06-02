function commonPopUp() {
  // $(".showMap").click(function () {
  //   $(".viewMapPopUpContainer").show();
  // });
  // $(".viewMapPopUpOverlay, .viewMapPopUpClose").click(function () {
  //   $(".viewMapPopUpContainer").hide();
  // });
  $(".mapsDestBtnRev .showMap").click(function () {
    $(".compMapshare").insertAfter($(this).parents(".imageWithRightTextWrapp"));
    $(this)
      .parents(".imageWithRightTextWrapp")
      .siblings()
      .find(".mapsDestBtnRev .showMap")
      .removeClass("active");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this)
        .parents(".imageWithRightTextWrapp")
        .siblings(".viewMapData, .compMapshare")
        .show();
      setTimeout(function () {
        $("html,body").animate({
          scrollTop: $(".viewMapData, .compMapshare").offset().top - 220,
        });
      }, 50);
      //$('html,body').animate({scrollTop: id.offset().top -120}, 'linear')
      $(".viewMapData, .compMapshare").show();
    } else {
      $(this)
        .parents(".imageWithRightTextWrapp")
        .siblings(".viewMapData, .compMapshare")
        .hide();
    }
  });

  $(".desTab li").click(function () {
    $(".compMapshare").hide();
  });
}
function moPopup() {
  $(".openPopUpMo").click(function () {
    $(".overLayPopMo").show();
    // $("html").animate({ scrollTop: 0 }, "slow");
    $("body").addClass("noScroll");
  });
  $(".closeMoPop, .moPopContent a").click(function () {
    $(".overLayPopMo").hide();
    // $("html").animate({ scrollTop: 10000 }, "slow");
    $("body").removeClass("noScroll");
  });
}

function insertLinkOnClick() {
  $(".openPopUpMo").click(function (e) {
    e.preventDefault();
    var hrefValue = $(this).attr("href");

    $(".moPopContent .style2").attr("href", hrefValue);
  });

  $(".mo-continent-hotels-list li a").on("click", function () {
    var url = $(this).data("mourl");
    $(".mo-Proceed").attr("href", url);
  });
}
