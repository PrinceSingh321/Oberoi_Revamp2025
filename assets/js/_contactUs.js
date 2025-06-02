function fntollFreeNo(){
  $('#tollFreeCountry').change(function() {
    if ($("#tollFreeCountry").length > 0) {
        var selectedCountry = $(this).find('option:selected').data('country');
        var tollFreeValue = $(this).val();
        
        // Split the value by ';'
        var values = tollFreeValue.split(';');
        var tollFreeNumber = values[0];
        var additionalValue = values.length > 1 ? values[1] : null;

        // Update the first anchor tag
        $('.toll-free-no a').first().attr('href', 'tel:' + tollFreeNumber).text(tollFreeNumber);

        // If additional value exists, create another anchor tag or update it
        if (additionalValue) {
            if ($('.toll-free-no a.additional').length === 0) {
                // Create a new anchor tag if it doesn't exist
                $('.toll-free-no').append(' <a class="additional" href="tel:' + additionalValue + '">' + additionalValue + '</a>');
            } else {
                // Update existing additional anchor tag
                $('.toll-free-no a.additional').attr('href', 'tel:' + additionalValue).text(additionalValue);
            }
        } else {
            // Remove additional anchor tag if no value exists
            $('.toll-free-no a.additional').remove();
        }

        $(this).parents(".tollfreeCountry-box").find(".selectCountryCodeValDisplay").text(selectedCountry);
    }
});

}

function fnwriteToUS(){
  $(".write-to-us-tab > ul > li").click(function(){
    if($('.com_writetousComponent').length > 0){
    $(".write-to-us-tab > ul > li").removeClass('active');
    $(this).addClass('active');
    var writeTousTab = $(this).attr("data-tab-content");
    $(".requestReservationForm-container").removeClass('active');
    $("#"+writeTousTab).addClass('active');
    $("#"+writeTousTab + " .requestForm-box").show();
    $(this).parents(".write-to-us-tab").find(".contact-us-tab").removeClass("openListItem");
    let itemValue = $(this).text();
    $(this).parents('.write-to-us-tab').find(".getDropdownValue").text(itemValue);
  }
  })
  $("#addmyfile").change(function () {
    var imageTemplate =
      '<li class="image-text-block-style1 global11111111">\n <div class="image-block" style="display: $$displayStyle$$;">\n \n <img src="$$imgSRc$$"\n />\n \n </div>\n <div class="text-block">\n <div class="featured-hdng text-block-hdng-style1 delivery-hotels">$$$imgName$$</div>\n </div>\n </li>';
    var finalImageString = "";
 
    for (var i = 0; i < $("#addmyfile")[0].files.length; i++) {
      var file = $("#addmyfile")[0].files[i];
      var fileType = file.type.split("/")[0]; // Get the first part of the MIME type (e.g., "image")
       
      // Determine whether to display the image-block
      var displayStyle = fileType === "image" ? "block" : "none";
      
     
      finalImageString += imageTemplate
        .replace(
          "$$imgSRc$$",
          fileType === "image" ? window.URL.createObjectURL(file) : ""
        )
        .replace("$$$imgName$$", file.name)
        .replace("$$displayStyle$$", displayStyle);
    }
 
    $(".filter-component").show();
    $(".filter-results-list").html(finalImageString);

    if(fileType != "image"){
      
      setTimeout(function(){
        $(".fileUploadLabel .image-block").hide();
      },50)
      
    }
  });
}

function fnwriteToUSTabs(){
  $(".ourOffices-tabs > ul > li").click(function(){
    if($('.com_writetousComponent').length > 0){
    $(".ourOffices-tabs > ul > li").removeClass('active');
    $(this).addClass('active');
    var writeTousTabs = $(this).attr("data-tab-text");
    $(".ourOffices-container").removeClass('activeTab');
    $("#"+writeTousTabs).addClass('activeTab');
    $(this).parents('.ourOffices-tabs').find(".ourOffices-tab").removeClass("openListItem");
    let itemValue = $(this).text();
    $(this).parents('.ourOffices-tabs').find(".getDropdownValue").text(itemValue);
  }
  })



  
  $(".getDropdownValue").click(function () {
    $(this).parents('.write-to-us-tab').find(".contact-us-tab").toggleClass("openListItem");
    $(this).parents('.ourOffices-tabs').find(".ourOffices-tab").toggleClass("openListItem");

  });


}


function fngetDirection(){
$(".mapdirection").click(function(){
  var dataImgMap  = $(this).data("img");
  var dataHotelName =$(this).data("hotel-name");
  $(".viewMapData").insertAfter($(this).parents(".slider-img-sec").find('.textWrappRev'));
  $(this).parents(".slider-img-sec").siblings().find(".mapdirection").removeClass("active");
  $(this).toggleClass("active");

  $(".viewMapData #map-image").attr("src", dataImgMap);
  // $(this).parents(".textWrappRev").next(".viewMapData").find("#hotelStarPoint").removeAttr('value');
  // $(this).parents(".textWrappRev").next(".viewMapData").find("#hotelStarPoint").removeAttr('readonly');
 

  
  if($(this).hasClass("active")){
    $(this).parents(".slider-img-sec").find('.textWrappRev').next(".viewMapData").show();
    $('html,body').animate({scrollTop:$(this).parents(".slider-img-sec").find('.textWrappRev').next(".viewMapData").offset().top -220},) 
    //$('html,body').animate({scrollTop: id.offset().top -120}, 'linear')
  }
  else{
    $(this).parents(".slider-img-sec").find('.textWrappRev').next(".viewMapData").hide();
  }
 
  for (var i = 0; i < arrHotelLatLongDetails.length; i++) {
    if (arrHotelLatLongDetails[i].hoteltitle == dataHotelName) {
      
      sourceLat = arrHotelLatLongDetails[i].lat;
      sourceLong = arrHotelLatLongDetails[i].lng;
}
  }

setTimeout(function(){
  $("#hotelStarPoint").attr("value", dataHotelName);
  $("#hotelStarPoint").attr('readonly', 'readonly');
},500)
 
})
}

 