// JavaScript Document

$(document).ready(function () {
  $(".destination-hotels-list li").click(function () {
    // $(this).addClass("active");
    // $(this).siblings().removeClass("active");
  });

  $(".destination-country-list li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var destinationTab = $(this).data("destinationtab");

    $(
      ".destionation-country-wrap, .destination-hotels-list .omo-destination-map-menu"
    ).css("display", "none");

    $(".destionation-country-wrap").hide();
    $("#" + destinationTab).css("display", "block");

    if (destinationTab == "omo") {
      $(".omo-map-text-Wrap").show();
    } else {
      $(".omo-map-text-Wrap").hide();
    }
  });

  $("#destination-country-dropdown").change(function () {
    var destinationVal = $(this).val();

    $(
      ".destination-hotels-list > ul, .destination-hotels-list .omo-destination-map-menu"
    ).css("display", "none");
    $(".destionation-country-wrap").hide();
    $("#" + destinationVal).css("display", "block");

    if (destinationVal == "omo") {
      $(".omo-map-text-Wrap").show();
    } else {
      $(".omo-map-text-Wrap").hide();
    }
  });

  /*------------mo destination script start here----------------*/

  $(".omo-destination-map-menu .mo-continent-name").click(function () {
    $(this)
      .siblings(".omo-destination-map-menu .mo-continent-name")
      .removeClass("active");
    $(this).toggleClass("active");
    $(this)
      .siblings()
      .next(".omo-destination-map-menu .mo-continent-hotels-list")
      .slideUp();
    $(this)
      .next(".omo-destination-map-menu .mo-continent-hotels-list")
      .slideToggle();
  });

  /*------------mo destination script end here----------------*/

  function addHrefOnWindowWidth() {
    if ($(window).width() <= 800) {
      $(".destination-hotels-list li a.desk").each(function () {
        var dataHref = $(this).data("href");

        $(this).attr("href", dataHref);
      });
    } else {
      $(".destination-hotels-list li a.desk").each(function () {
        $(this).removeAttr("href");
      });
    }
  }

  // addHrefOnWindowWidth();

  $(window).resize(function () {
    // addHrefOnWindowWidth();
  });
});
