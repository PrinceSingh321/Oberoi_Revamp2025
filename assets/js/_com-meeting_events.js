function fnseatingchart() {
  $(".viewSeatingChart a").on("click", function () {
    $(this).parents(".cta-boxRev").siblings(".cta-boxRev").find(".buttonStyle2Rev").removeClass("active");
    //$(this).toggleClass("btnRequestAProposal active");
    $(".viewSeatingChart a").not(this).removeClass("btnRequestAProposal active");
    $(this).toggleClass("btnRequestAProposal active");
    var mainBannerHeight = $(".banner-and-booking-widget").outerHeight();
    var scrollToPosition = mainBannerHeight * 2 - 100;
    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      500
    );
    // Toggle .seatingChartWrapper based on the active button
    if ($(this).hasClass("active")) {
      $(".seatingChartWrapper").slideDown("slow");
  } else {
      $(".seatingChartWrapper").slideUp("slow");
  }
   
    $("#formRequestAProposal1 .request-a-proposal-form").hide();
  });

  $(".btnRequestAProposal").on("click", function () {
    $(this).parents(".cta-boxRev").siblings(".cta-boxRev").find(".buttonStyle2Rev").removeClass("active");
    $(".viewSeatingChart a").removeClass('active');
    $(".seatingChartWrapper").hide();
  });
  $(".form-chart-tabs .heading").on("click", function () {
    $(this).addClass("activeAcc");
    $(this).siblings().removeClass("activeAcc");
  });

  $(".eventSeating").on("change", function () {
    // $(".seatingStyleWrap .form-chart-tabs .heading:first-child").addClass(
    //   "activeAcc"
    // );
    $(".seatingStyleWrap .form-chart-tabs .heading:last-child").show();
    // $(".seatingStyleWrap .optionsWrap").hide();
    // $(".eventsWapper").show();
    var selectedId = $(this).val();

    $(".eventDataTable").each(function () {
      var tableId = $(this).data("id");
      if (tableId === selectedId) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $(".seatingStyleBox").on("click", function () {
    $(".seatingStyleWrap .optionsWrap").show();
    $(".eventsWapper").hide();
  });
  $(".capacityChartBox").on("click", function () {
    $(".seatingStyleWrap .optionsWrap").hide();
    $(".eventsWapper").show();
  });

  $(".requestPoposalvenues .buttonStyle2Rev.btnRequestAProposal.mr-10").on(
    "click",
    function () {
      var buttonId = $(this).attr("id");
      $(".eventSeating").val(buttonId).trigger("change");
    }
  );

  $(".eventSeating").on("change", function () {
    var selectedValue = $(this).val();
    console.log("eventSeating value changed to: " + selectedValue);
  });

  $(".selectedHotel").on("click", function (event) {
    event.stopPropagation(); // Prevent the event from propagating to document
    $(".countryListInDropdown").show();
    $(".hasSubHotel .subMenuHotelsList").hide();
  });
  $(".hasSubHotel").click(function () {
    $(this).children(".subMenuHotelsList").show();
    $(this).siblings().children(".subMenuHotelsList").hide();
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".selectedHotel, .countryListInDropdown").length
    ) {
      $(".countryListInDropdown").hide();
    }
  });
  $(".countryListInDropdown").on("click", function (event) {
    event.stopPropagation(); // Prevent the event from propagating to document
  });

  $(
    ".countryListInDropdown li span, .countryListInDropdown .subMenuHotelsList li span"
  ).on("click", function () {
    var selectedText = $(this).text();
    $(".selectedHotel").text(selectedText);
    $(".countryListInDropdown").hide();
  });
}
