function fnInputFocus() {
  $(".inputbox input, .select-box-wrap select").val("");
  $(".inputbox input, .select-box-wrap select").focusout(function () {
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }

    setTimeout(function () {
      if (text_val == "Select Therapy") {
        $("#spa_therapies").removeClass("has-value");
        //alert('removeClass');
      }
    }, 100);
  });
}

$(".contact-us-tab li").on("click", function () {
  $(".select-box-wrap.rev_global_contact_country_dropdown .country_code").val("").trigger("change"); // Reset dropdown value
  $(".rev_global_contact_country_dropdown .selectCountryCodeValDisplay").text("").trigger("change"); // Reset text
});

var rajMahalSelection = false;

// function fnDatepicker() {
//   if ($(".requestFormWrapper").length > 0) {
//     var currentDate = new Date();
//     var maxDate = new Date(currentDate.getFullYear() + 1, 2, 31);
//     var startOfRange = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth()
//     );
//     var endOfRange = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth()
//     );
//     $("#Revdatepicker").datepicker({
//       dateFormat: "dd/mm/yy",
//       autoclose: true,
//       minDate: new Date(),
//       maxDate: maxDate,
//       beforeShowDay: function (date) {
//         if (rajMahalSelection) {
//           if (date >= startOfRange && date <= endOfRange) {
//             return [false, "", "Unavailable"];
//           }
//         }
//         return [true, "", ""];
//       },
//     });

//     $(".hasDatepicker").change(function () {
//       if ($(this).val() !== "") {
//         $(this).addClass("has-value");
//       } else {
//         $(this).removeClass("has-value");
//       }
//     });
//   }
// }

function fnDatepicker() {
  if ($(".requestFormWrapper").length > 0) {
    var currentDate = new Date();
    var maxDate = new Date(currentDate.getFullYear() + 1, 2, 31);
    var startOfRange = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    var endOfRange = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );

    $("#Revdatepicker").datepicker({
      dateFormat: "dd/mm/yy",
      autoclose: true,
      minDate: 1, // Disables today
      maxDate: maxDate,
      defaultDate: "+1d", // Sets tomorrow as default
      beforeShowDay: function (date) {
        if (rajMahalSelection) {
          if (date >= startOfRange && date <= endOfRange) {
            return [false, "", "Unavailable"];
          }
        }
        return [true, "", ""];
      },
    })
    

    $(".hasDatepicker").change(function () {
      if ($(this).val() !== "") {
        $(this).addClass("has-value");
      } else {
        $(this).removeClass("has-value");
      }
    });
  }
}


function fnCountrySelection() {
  $(".country_code").change(function () {
    let Countrydata = "";

    if ($(this).attr("id") == "ddl_oth_category") {
      Countrydata = $(this).find("option:selected").text();
    } else {
      Countrydata = $(this).find("option:selected").val();
    }

    $(this)
      .parents(".mob-country-codewrap")
      .find(".selectCountryCodeValDisplay")
      .text(Countrydata);

    if (
      $(this)
        .parents(".mob-country-codewrap")
        .find(".country_code option:selected")
        .eq(0)
        .val() === ""
    ) {
      $(this)
        .parents(".mob-country-codewrap")
        .find(".selectCountryCodeValDisplay")
        .text("");
    }
  });
}


function fnRequestForm() {
  $("#RequestFromThanks-box").hide();
  $(".RequestFormBtn").on("click", function () {
    
    $("#RequestFromThanks-box").hide();

    $(".requestReservationForm-container").removeClass("active");
    if (
      $(".requestReservationForm-container").is(":visible") ||
      $(this).hasClass("active")
    ) {
      $(this).removeClass("active");
      $("#requestForm-box").hide();
      $(".requestReservationForm-container").removeClass("active");
    } else {
      $(".RequestFormBtn").removeClass("active");
      $(this).addClass("active");
      $("#requestForm-box").show();
      $(".requestReservationForm-container").addClass("active");
    }

    if ($(this).parents(".com_TwoImageTabSlider").length > 0) {
      $(".requestReservationForm-container").insertAfter(
        $(this).parents(".com_TwoImageSlickSlider")
      );
    }

    if ($(this).parents(".two-imageWithHalfSlider").length > 0) {
      $(".requestReservationForm-container").insertAfter(
        $(this)
          .parents(".com_TwoTabHalfColImageComponentRev")
          .find(".towHalfformContainer")
      );
    }
    // $("html,body").animate(
    //   {
    //     scrollTop: $(".requestReservationForm-container").offset().top - 150,
    //   },
    //   100
    // );

      var $target = $(".requestReservationForm-container");
      var fixedOffset = 0;

      if ($("header").length) {
        fixedOffset += $("header").outerHeight() || 0;
      }
      if ($(".top-nav").length) {
        fixedOffset += $(".top-nav").outerHeight() || 0;
      }
      if ($(".filterWrapp").hasClass("fixedtab")) {
        fixedOffset += $(".filterWrapp").outerHeight() || 0;
      }

      fixedOffset += 86; // Additional buffer or fixed UI offset

      var scrollTo = $target.offset().top - fixedOffset;

      $("html, body").stop().animate(
        {
          scrollTop: scrollTo,
        },
        300 // smoother animation
      );
    

    var dataSelName = $(this).data("selname");

    if (dataSelName == "Raj Mahal") {
      rajMahalSelection = true;
    } else {
      rajMahalSelection = false;
    }

    $("#Revdatepicker").datepicker("refresh");

    if ($(this).attr("data-id") == undefined) {
      $(".selectCountryCodeValDisplay").html("");
      // setTimeout(function(){
      //   if($(".selectCountryCodeValDisplay").text() !=""){

      //     $(".country_code").addClass("has-value");

      //   }
      // },50);
    }
  });

  $("#Revthank-close-btn, .Revthank-close-btn").click(function () {
    $("#requestForm-box").hide();
    $(
      "#RequestFromThanks-box, #reservation-thanks, .RequestFromThanks-box"
    ).hide();
    $(".RequestFormBtn, .openDiningForm").removeClass("active");
    $(".requestReservationForm-container").removeClass("active");
    $("#requestForm-box").removeAttr("style");

    let dataIdSec = $(this)
      .parents(".requestReservationForm-container")
      .attr("id");
    $(".com_writetousComponent .write-to-us-tab ul li[data-tab-content = " +dataIdSec +"]").click();
    // $(this).parents(".requestReservationForm-container").addClass("active");
    // $(this).parents(".requestReservationForm-container").find(".requestForm-box").show();

    $(".requestForm-box").find("input").val("");
    $(".requestForm-box").find("select").prop("selectedIndex", 0);
    $("html,body").animate(
      {
        scrollTop: $(".requestReservationForm-container").offset().top - 250,
      },
      100
    );
  });
  $(".btnRequestAProposal").on("click", function () {
    const parentElement = $(".statusWrap").parent();

    if (parentElement.css("display") === "block") {
      parentElement.css("display", "none");
      $(".request-a-proposal-form").children().eq(1).css("display", "block");
    }
  });

  $("#Req-close-btn").click(function () {
    $(".requestReservationForm-container").removeClass("active");
    $(".RequestFormBtn").removeClass("active");
    $("html,body").animate(
      {
        scrollTop: $(".requestReservationForm-container").offset().top - 150,
      },
      100
    );
  });

  if (window.location.href.includes("/contact-us")) {
    $("body").addClass("rev_global_contact-page");
}
  $(".two-imageWithHalfSlider .slick-arrow, .ComSlider-item.inactive, .imageWithRightTextWrappRev .slick-arrow , .two-imageWithHalfSlider-img .slick-arrow").click(function () {
    if (!$("body").hasClass("contact-us")) {
      $(".request-a-proposal-form, .weddingForm-writeus.active, #reservation-queries").hide();
      $(".rev_global_contact-page #reservation-queries").removeAttr("style");
      
      
      $(".requestReservationForm-container, .btnRequestAProposal").removeClass(
        "active"
      );
      $(".rev_global_contact-page #reservation-queries").addClass('active');
      $(".requestReservationForm-container #requestForm-box").show();
      $(".requestReservationForm-container #RequestFromThanks-box").hide();

      $(".selectCountryCodeValDisplay").text("");
      $(".rev_global_contact-page .tollfreeCountry-box").each(function () {
        let selectedCountry = $(this).find("#tollFreeCountry option:selected").data("country");
        // Update selectCountryCodeValDisplay with the new selected country
        $(this).find(".selectCountryCodeValDisplay").text(selectedCountry);
    })
      $(".requestReservationForm-container").each(function () {
        $(this).find("form")[0].reset();
      });
      $(".requestReservationForm-container")
        .find("select")
        .prop("selectedIndex", 0);
      $(
        ".requestReservationForm-container .country_code, .requestReservationForm-container input"
      ).removeClass("has-value");
      $(".formWrap, #weddingevent").find("input").val("");
      $(".formWrap, #weddingevent").find("select").prop("selectedIndex", 0);
    }
   
  });

  // $('.subsBtn').click(function(){
  //     $('#requestForm-box').hide();
  //     $('#RequestFromThanks-box').show();
  //     $("html,body").animate({
  //         scrollTop: $(".requestReservationForm-container").offset().top - 150
  //       }, 100);
  // })
}

function fnGlobalDiningForm() {
  $(".openDiningForm").click(function () {
    //$(".openDiningForm").removeClass("active");
    if (
      $(".requestReservationForm-container").is(":visible") &&
      $(this).hasClass("active")
    ) {
      $(".openDiningForm").removeClass("active");
      $(this).removeClass("active");

      $(".requestReservationForm-container").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".requestReservationForm-container").addClass("active");
    }
  });
  $("#Req-close-btn").click(function () {
    $(".requestReservationForm-container").removeClass("active");
  });
}

function fnEventFormSubmitBtn() {
  $(".btnScreenTwo").click(function () {
    $(".timelineWrap").hide();
  });
  $(".btnRequestAProposal").click(function () {
    $(".timelineWrap").show();
  });
  $(".closeStatusMsg").click(function () {
    $("#hideThanks").hide();
    $(".btnRequestAProposal").removeClass("active");
  });
}

// Function to check and scroll the page
function checkAndScroll() {
  let hideThanks = document.getElementById("hideThanks");
  let requestForm = document.querySelector(".requestProposalContactForm");
  let timelineWrap = document.querySelector(".timelineWrap");

  // Condition 1: Scroll up by 200px if #hideThanks is displayed
  if (
    window.innerWidth <= 1366 &&
    hideThanks &&
    window.getComputedStyle(hideThanks).display === "block"
  ) {
    window.scrollBy({
      top: -200,
      behavior: "smooth",
    });
  }

  // Condition 2: Scroll to .timelineWrap if .requestProposalContactForm is displayed
  if (
    window.innerWidth <= 1366 &&
    requestForm &&
    timelineWrap &&
    window.getComputedStyle(requestForm).display === "block"
  ) {
    timelineWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Function to observe changes in display property
function observeElement(element) {
  if (element) {
    const observer = new MutationObserver(checkAndScroll);
    observer.observe(element, { attributes: true, attributeFilter: ["style"] });
  }
}

// Get elements and observe changes
observeElement(document.getElementById("hideThanks"));
observeElement(document.querySelector(".requestProposalContactForm"));
