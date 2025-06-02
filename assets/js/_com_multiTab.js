function multiTab() {
  $(".tab1-content1, .tab1-content2").addClass("active");

  if (!$(".tab2-content2").hasClass("active")) {
    $(".tab2-content2").css({
      display: "none",
    });
  }

  $(".tab").click(function () {
    $(".customSelect").hide();
    var tabClass = $(this).hasClass("tab1") ? "tab1" : "tab2";

    $(".tab-content").removeClass("active");

    $(`.${tabClass}-content1, .${tabClass}-content2`).addClass("active");

    if (!$(".tab2-content2").hasClass("active")) {
      $(".tab2-content2").css({
        display: "none",
      });
    } else {
      $(".tab2-content2").css({
        display: "block",
      });
    }

    var activeLi = $(".customSelect.active li.active").text();
    $(".selectedli").text(activeLi);
  });

  $(".tabs li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".customSelect li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var selectedText = $(this).text();
    $(".selectedli").text(selectedText);
    $(".customSelect").hide();
  });

  // $("#destinationChange li").click(function () {
  //   var dataYearActive = $(this).parents(".com_imageWithrightTextCompRev").find(".yearTab li.active").attr("id");
  //   var selectedEmbr = $(this).attr("data-embr");
  //   var selectedDays = $(".daysListWrapp li.active." + selectedEmbr).attr(
  //     "data-value"
  //   );
  //   var selectedDaysTxt = $(".daysListWrapp li.active." + selectedEmbr).text();
  //   $(this).addClass("active").siblings().removeClass("active");
  //   var selectedText = $(this).text();
  //   $(".selectDestDrop").text(selectedText);
  //   $(".dayFilter .selectedli").text(selectedDaysTxt);
  //   $("#destinationChange").hide();
  //   $(".sailingWrapper .mainImgTextWrapp").hide();
  //   // alert(dataYearActive + selectedDays)
  //   $("#" + selectedDays).show();
  //   // $("." + selectedDays).show();
  //   $("." + dataYearActive).find("." + selectedDays).show();
  // });
}

function onSelectChange() {
  $(".tab1-content2 .mainImgTextWrapp, .tab2-content2 .mainImgTextWrapp").hide();
  $(".tab1-content2 .mainImgTextWrapp:first, .tab2-content2 .mainImgTextWrapp:first").show();
  $(".tab1-content1 li").click(function () {
    var selectedValue = $(this).data("value");
    $(".tab1-content2 .mainImgTextWrapp").hide();
    $("#" + selectedValue).show();
  });
  $(".tab2-content1 li").click(function () {
    var selectedValue = $(this).data("value");
    $(".tab2-content2 .mainImgTextWrapp").hide();
    $("#" + selectedValue).show();
  });


  // $(".com_imageWithrightTextCompRev .com_container .imageWithRightTextWrappRev .year").hide();
  // $(".com_imageWithrightTextCompRev .com_container .imageWithRightTextWrappRev .year:first").show();
  // $(".yearTab li").click(function () {

  //   var selectedYear = $(this).attr("id");
  //   //sailing date js start
  //   $(".com_imageWithrightTextCompRev .com_container .imageWithRightTextWrappRev .year").hide();
        
  //   $(".com_imageWithrightTextCompRev .com_container .imageWithRightTextWrappRev .year" + "." + selectedYear).show(); 
  //   $(".com_imageWithrightTextCompRev .com_container .imageWithRightTextWrappRev .year.year2" + "." + selectedYear).find(".mainImgTextWrapp.day4").show(); 
  //   $(".daysListWrapp li.active[style='display: block;']").trigger("click");
  //   //sailing date js end

  // });

  // $(".sailingWrapper .year .mainImgTextWrapp:first-child").show();



  $(".selectedli").click(function () {
    $(".customSelect.active").show();
  });

  // $(".selectDestDrop").click(function () {
  //   // var activeEmbr = $("#destinationChange").find("li.active").data("embr");
  //   //alert(activeEmbr);
  //   $("#destinationChange").toggle();
  //   $(".daysListWrapp").hide();
  // });

  // $("#destinationChange li").click(function () {
  //   $("#destinationChange li").removeClass("active");
  //   $(this).addClass("active");
  // });

  // $(".sailingWrapper .mainImgTextWrapp").first().show();
  // $("ul.daysListWrapp li").click(function () {
  //   var dataYearActive = $(this).parents(".com_imageWithrightTextCompRev").find(".yearTab li.active").attr("id");
  //   var currentDayTxt = $(this).text();
  //   var selectedValue = $(this).attr("data-value");
  //   $(".dayFilter .selectedli").text(currentDayTxt);
  //   $(".sailingWrapper .mainImgTextWrapp").hide();
  //   $("#" + selectedValue).show();
  //   $("." + dataYearActive).find("." + selectedValue).show();
  // });

  // $(".daysListWrapp li").click(function () {
  //   //$(this).addClass("active").siblings().removeClass("active");
  //   var activeEmbr = $("#destinationChange").find("li.active").data("embr");
  //   $(this)
  //     .siblings("." + activeEmbr)
  //     .removeClass("active");
  //   $(this).addClass("active");

  //   $(".daysListWrapp").hide();
  // });
  // $(".dayFilter .selectedli").click(function () {
  //   var activeEmbr = $("#destinationChange").find("li.active").data("embr");
  //   $(".daysListWrapp li").hide();
  //   $(this)
  //     .parents(".dayFilter")
  //     .find("." + activeEmbr)
  //     .show();
  //   $(".daysListWrapp").toggle();
  //   $("#destinationChange").hide();
  // });

// Code for Sailing date filter 
  $(document).ready(function () {
   
    $('.yearTab li').click(function () {
        var yearText = $(this).text().trim();
        var yearId = $(this).attr('id');

        //console.log("Year selected:", yearText, "| ID:", yearId);

        $('.yearTab li').removeClass('active');
        $(this).addClass('active');

        $('#destinationChange li').hide().removeClass('active');
        $('#destinationChange li[data-embr$="' + yearText + '"]').show();

        var $firstEmbr = $('#destinationChange li[data-embr$="' + yearText + '"]').first();
        if ($firstEmbr.length > 0) {
            $firstEmbr.addClass('active');
            $('.selectDestDrop').text($firstEmbr.text());
            var embrClass = $firstEmbr.data('embr');
            //console.log("Selected embarkation:", embrClass);

            var selectedDay = filterDays(embrClass);
            showContent(embrClass, selectedDay);
        } else {
            //console.warn("No embarkation found for year:", yearText);
        }
    });

    $('.selectDestDrop').click(function () {
        $('#destinationChange').toggle();
    });

    $('#destinationChange li').click(function () {
        $('#destinationChange li').removeClass('active');
        $(this).addClass('active');
        $('.selectDestDrop').text($(this).text());
        $('#destinationChange').hide();

        var embr = $(this).data('embr');
        console.log("Embarkation clicked:", embr);
        var selectedDay = filterDays(embr);
        showContent(embr, selectedDay);
    });

    $('.subFilterWrapp.dayFilter').click(function () {
        $('.daysListWrapp').toggle();
    });

    $('.daysListWrapp li').click(function () {
      $('.daysListWrapp li').removeClass('active');
      $(this).addClass('active');
  
      var selectedDay = $(this).data('value');
      var embarkation = $('#destinationChange li.active').text().trim();
      var year = $('.yearTab li.active').attr('id');
  
      //console.log("Day clicked:", selectedDay, "| Year:", year, "| Embarkation:", embarkation);
  
      $('.mainImgTextWrapp').hide().removeClass('active');
      
      // Show the content based on the selected day and embarkation
      $('.sailingWrapper .' + year + ' .mainImgTextWrapp').filter(function () {
          return (
              $(this).hasClass(selectedDay) &&
              $(this).text().trim().includes(embarkation)
          );
      }).show().addClass('active');
  
      $('.selectedli').text($(this).text());
  
      // Trigger showContent based on the selected day
      var embrClass = $('#destinationChange li.active').data('embr');
      showContent(embrClass, selectedDay);
  });
  

    function filterDays(embrClass) {
        //console.log("Filtering days for:", embrClass);
        $('.daysListWrapp li').hide().removeClass('active');

        var $match = $('.daysListWrapp li.' + embrClass);
        if ($match.length > 0) {
            $match.show().first().addClass('active');
            $('.selectedli').text($match.first().text());
            return $match.first().data('value'); // Return day class like 'day0'
        } else {
            //console.warn("No days found for embarkation class:", embrClass);
            return null;
        }
    }

    function showContent(embrClass, selectedDay) {
        if (!selectedDay) {
            //console.warn("No day selected. Aborting content show.");
            return;
        }

        var embarkationText = $('#destinationChange li.active').text().trim();
        var year = $('.yearTab li.active').attr('id');

        //console.log("Active combo -> Year:", year, "| Day:", selectedDay, "| Embarkation:", embarkationText);

        $('.sailingWrapper .year').hide();
        $('.sailingWrapper .' + year).show();

        $('.mainImgTextWrapp').hide().removeClass('active');

       var $matchedContent = $('.sailingWrapper .' + year + ' .mainImgTextWrapp').filter(function () {
    return $(this).hasClass(selectedDay);
});

if ($matchedContent.length > 0) {
    $matchedContent.show().addClass('active');
} else {
    //console.warn("No matching .mainImgTextWrapp found for day: " + selectedDay);
}

    }

    var $activeYear = $('.yearTab li.active');
    if ($activeYear.length > 0) {
        //console.log("Triggering default year:", $activeYear.text());
        $activeYear.trigger('click');
    } else {
        //console.warn("No active year tab found");
    }
});
// end of Code for Sailing date filter 

  $(".shareItn").click(function () {
    $(".shareItn .share-list").toggleClass("active");
  });

  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(
        ".customSelect, #destinationChange, .daysListWrapp, .selectedli, .selectDestDrop"
      ).length &&
      $(
        ".customSelect, #destinationChange, .daysListWrapp, .selectDestDrop, .selectedli"
      ).is(":visible")
    ) {
      $(".customSelect, #destinationChange, .daysListWrapp").hide();
    }
  });
  $(".booktripBtn").click(function () {
    $(".booking-engine").toggle();
  });
}
