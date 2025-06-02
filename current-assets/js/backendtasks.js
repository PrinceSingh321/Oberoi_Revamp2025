

$(window).load(function () {
    try {
        if (fnGetParameterByName("section") != "") {
            pageScrollTo(fnGetParameterByName("section"));
        }
    }
    catch (excsectionscroll) { }
});

$(document).ready(function () {
    
    /*add active class*/
    $(".header-wraper li a").each(function () {
        if (window.location.href.toLowerCase().indexOf($(this).attr("href").toLowerCase()) != -1) {
            $(this).parent("li").addClass("active-tab");
        }
    });
    $(".main-menu li a").each(function () {
        if (window.location.pathname.toLowerCase().indexOf($(this).attr("href").toLowerCase()) != -1) {
            $(this).parent("li").addClass("active");
        }
    });
    // if (document.URL.toLowerCase().indexOf("/hotels-in-") != -1 || document.URL.toLowerCase().indexOf("/kerala-backwaters") != -1 || document.URL.toLowerCase().indexOf("/nile-cruise-") != -1) {
    //     $("body").addClass("hotel-pages");
    // }
    if (document.URL.toLowerCase().indexOf("/overview") != -1) {
        $("header, .top-nav").addClass("fullwidthheader");
    }
    if (window.location.pathname.toLowerCase() == "/") {
        $("header, .top-nav").addClass("fullwidthheader");
    }
    if (document.URL.toLowerCase().indexOf("/about-us") != -1) {
        $("body").addClass("about-us");
    }
    if (document.URL.toLowerCase().indexOf("/contact-us") != -1 || document.URL.toLowerCase().indexOf("/rooms-suites") != -1) {
        setCountryByIP();
    }
    if (window.location.pathname.toLowerCase() == "/experiences") {
        $("body").addClass("global-experiences");
    }
    if (window.location.pathname.toLowerCase() == "/special-offers" || window.location.pathname.toLowerCase() == "/special-offers/") {
        $("body").addClass("global-offers");       
    }
    if (window.location.pathname.toLowerCase().indexOf("/special-offers" != -1)) {      
        setCountryByIP();
    }
    if (window.location.pathname.toLowerCase() == "/magazines" || window.location.pathname.toLowerCase() == "/magazines/" ) {
        $("body").addClass("global-magazines");
        fnFilterEmagazineByCategory();
    }

    if (document.URL.indexOf("/hotels-in-agra") != -1) {
        setHotelSelectedByHotelCode("HBAGROB");
        setDirectionMapLatLongDetails("HBAGROB");
        fnGetTimeByZone("");
        fnLocalTemperature("1279259");
    }
    else if (document.URL.indexOf("/hotels-in-jaipur") != -1) {
        setHotelSelectedByHotelCode("HBJAIOB");
        setDirectionMapLatLongDetails("HBJAIOB");
        fnGetTimeByZone("");
        fnLocalTemperature("1269515");
    }
    else if (document.URL.indexOf("/hotels-in-ranthambhore") != -1) {
        setHotelSelectedByHotelCode("HBJAIVA");
        setDirectionMapLatLongDetails("HBJAIVA");
        fnGetTimeByZone("");
        fnLocalTemperature("1254241");
    }
    else if (document.URL.indexOf("/hotels-in-udaipur") != -1) {
        setHotelSelectedByHotelCode("HBUDROB");
        setDirectionMapLatLongDetails("HBUDROB");
        fnGetTimeByZone("");
        fnLocalTemperature("1253986");
    }
    else if (document.URL.indexOf("/hotels-in-bengaluru") != -1) {
        setHotelSelectedByHotelCode("HBBLROB");
        setDirectionMapLatLongDetails("HBBLROB");
        fnGetTimeByZone("");
        fnLocalTemperature("1277333");
    }
    else if (document.URL.indexOf("/kerala-backwaters") != -1) {
        setHotelSelectedByHotelCode("HBCOKVR");
        setDirectionMapLatLongDetails("HBCOKVR");
        fnGetTimeByZone("");
        fnLocalTemperature("1267254");
    }
    else if (document.URL.indexOf("/hotels-in-al-zorah") != -1) {
        setHotelSelectedByHotelCode("HBDXBAZ");
        setDirectionMapLatLongDetails("HBDXBAZ");
        fnGetTimeByZone("Arabian Standard Time");
        fnLocalTemperature("292932");
    }
    else if (document.URL.indexOf("/hotels-in-bali") != -1) {
        setHotelSelectedByHotelCode("HBDPSOB");
        setDirectionMapLatLongDetails("HBDPSOB");
        fnGetTimeByZone("North Asia East Standard Time");
        fnLocalTemperature("7406901");
    }
    else if (document.URL.indexOf("/hotels-in-chandigarh") != -1) {
        setHotelSelectedByHotelCode("HBIXCOB");
        setDirectionMapLatLongDetails("HBIXCOB");
        fnGetTimeByZone("");
        fnLocalTemperature("1274746");
    }
    else if (document.URL.indexOf("/hotels-in-delhi") != -1) {
        setHotelSelectedByHotelCode("HBDELOB");
        setDirectionMapLatLongDetails("HBDELOB");
        fnGetTimeByZone("");
        fnLocalTemperature("1261481");
    }
    else if (document.URL.indexOf("/hotels-in-dubai") != -1) {
        setHotelSelectedByHotelCode("HBDXBOB");
        setDirectionMapLatLongDetails("HBDXBOB");
        fnGetTimeByZone("Arabian Standard Time");
        fnLocalTemperature("292223");
    }
    else if (document.URL.indexOf("/hotels-in-gurgaon") != -1) {
        setHotelSelectedByHotelCode("HBDELOG");
        setDirectionMapLatLongDetails("HBDELOG");
        fnGetTimeByZone("");
        fnLocalTemperature("1270642");
    }
    else if (document.URL.indexOf("/hotels-in-kolkata") != -1) {
        setHotelSelectedByHotelCode("HBCCUOB");
        setDirectionMapLatLongDetails("HBCCUOB");
        fnGetTimeByZone("");
        fnLocalTemperature("1275004");
    }
    else if (document.URL.indexOf("/hotels-in-lombok") != -1) {
        setHotelSelectedByHotelCode("HBAMIOB");
        setDirectionMapLatLongDetails("HBAMIOB");
        fnGetTimeByZone("North Asia East Standard Time");
        fnLocalTemperature("1624997");
    }
    else if (document.URL.indexOf("/hotels-in-madina") != -1) {
        setHotelSelectedByHotelCode("HBMEDOB");
        setDirectionMapLatLongDetails("HBMEDOB");
        fnGetTimeByZone("Arabic Standard Time");
        fnLocalTemperature("109223");

    }
    else if (document.URL.indexOf("/hotels-in-mauritius") != -1) {
        setHotelSelectedByHotelCode("HBMRUTO");
        setDirectionMapLatLongDetails("HBMRUTO");
        fnGetTimeByZone("Mauritius Standard Time");
        fnLocalTemperature("934292");

    }
    else if (document.URL.indexOf("/hotels-in-morocco-marrakech") != -1) {
        setHotelSelectedByHotelCode("HTLMRCO");
        setDirectionMapLatLongDetails("HTLMRCO");
        fnGetTimeByZone("Central European Standard Time");
        fnLocalTemperature("6547285");
    }
    else if (document.URL.indexOf("/hotels-in-mumbai") != -1) {
        setHotelSelectedByHotelCode("HBBOMOB");
        setDirectionMapLatLongDetails("HBBOMOB");
        fnGetTimeByZone("");
        fnLocalTemperature("1275339");
    }
    else if (document.URL.indexOf("/hotels-in-sahl-hasheesh") != -1) {
        setHotelSelectedByHotelCode("HBHRGOB");
        setDirectionMapLatLongDetails("HBHRGOB");
        fnGetTimeByZone("Egypt Standard Time");
        fnLocalTemperature("361291");
    }
    else if (document.URL.indexOf("/hotels-in-shimla-cecil") != -1) {
        setHotelSelectedByHotelCode("HBSLVOB");
        setDirectionMapLatLongDetails("HBSLVOB");
        fnGetTimeByZone("");
        fnLocalTemperature("1256237");
    }
    else if (document.URL.indexOf("/hotels-in-shimla-wfh") != -1) {
        setHotelSelectedByHotelCode("HBSLVWH");
        setDirectionMapLatLongDetails("HBSLVWH");
        fnGetTimeByZone("");
        fnLocalTemperature("1256237");
    }
    else if (document.URL.indexOf("/nile-cruise-philae") != -1) {

        setHotelSelectedByHotelCode("HBASWPH");
        setDirectionMapLatLongDetails("HBASWPH");
        fnGetTimeByZone("Egypt Standard Time");
        fnLocalTemperature("359792");

        if (document.URL.indexOf("/nile-cruise-philae/overview") != -1) {
            setHotelSelectedByHotelCode("");
        }
        else if (document.URL.indexOf("/nile-cruise-philae/special-offers") != -1) {
            setHotelSelectedByHotelCode("");
        }
        //hotelcode = "HBASWPH";
        //initializeCruiseEvent();       

    }
    else if (document.URL.indexOf("/nile-cruise-zahra") != -1) {
        
        setHotelSelectedByHotelCode("HBASWZA");
        setDirectionMapLatLongDetails("HBASWZA");
        fnLocalTemperature("360630");
        fnGetTimeByZone("Egypt Standard Time");
        if (document.URL.indexOf("/nile-cruise-zahra/overview") != -1) {
            setHotelSelectedByHotelCode("HBASWZA");
        }
        else if (document.URL.indexOf("/nile-cruise-zahra/special-offers") != -1) {
            setHotelSelectedByHotelCode("HBASWZA");
        }
      
       //hotelcode = "HBASWZA";
       // initializeCruiseEvent();

        
        //embNights = 5;
        //minnights = embNights;
        //$('.cruiseSelectionWrap .noOfNightsWrap .dropDownLabel .value').html('<abbr>0' + embNights + '</abbr> <span>Nights</span></div>');
        //$(".cruiseDropDown .optionWrap").each(function () { $(this).removeClass("active") });
        //$(".cruiseDropDown .optionWrap").each(function () { if ($(this).text().indexOf(embNights) != -1) { $(this).addClass("active") } });


        //fnSetCruiseDate();       

    }   

});



var globalHotelCode = "";

function setHotelSelectedByHotelCode(_hotelcode) {
    globalHotelCode = _hotelcode;   /// DO NOT DELETE THIS, THIS IS GLOBAL VARIABLE USED IN HANDLERS FOR MAILER FUNCTIONALITY
    console.log(globalHotelCode + "----global");
    //try {

    //    var _cruize_this = "";
    //    $('.booking-engine').each(function () {
    //        var data_index = $(this).attr("data-index");

    //        if ($('.booking-engine:eq(' + data_index + ')').length > 0) {
    //            $('.booking-engine:eq(' + data_index + ') .allHotels li').each(function () {

    //                $(this).removeClass('active')

    //                if ($(this).attr('data-hotelcode') == _hotelcode) {
    //                    var _hotelName = $(this).html();
    //                    var _currIndex = $(this).closest('.booking-engine').attr('data-index');
    //                    var _cityName = $(this).attr('data-city');
    //                    var _dataHotelName = $(this).attr('data-hotelName');
    //                    var _layout2HotelNameHTML = '<abbr>' + _cityName + '</abbr>' + _dataHotelName;
    //                    $('.booking-engine:eq(' + _currIndex + ') .hotelListDropDown .hotelList .hotelBlock .list ul > li').removeClass('active');
    //                    $(this).addClass('active');

    //                    $(this).closest('.booking-engine').find('.hotelName .hotelLabel .name .mobileN').html(_layout2HotelNameHTML);
    //                    $(this).closest('.booking-engine').find('.hotelName .hotelLabel .name .desktopN').html(_hotelName);
    //                    $('.booking-engine:eq(' + _currIndex + ') .hotelListDropDown').hide();
    //                    $('.triggerDropDown').removeClass('active');
    //                    $('.booking-engine:eq(' + _currIndex + ')').find('.datesWrap:last-child').removeClass('disableCheckout');
    //                    //Cruise script
    //                    $('.cruiseSelectionWrap').hide();
    //                    var _embarkationPlaceName = $(this).attr('data-embarkationName');
    //                    var _noOfNights = $(this).attr('data-noOfNights');
    //                    if (_embarkationPlaceName) {
    //                        $('.booking-engine .checkInDate').addClass('dateDisabled');
    //                        $('.booking-engine .checkOutDate').addClass('dateDisabled');
    //                        $('.cruiseSelectionWrap').show();
    //                        var _dropDownValuesEmbarkationPlace = _embarkationPlaceName.split('|');
    //                        var _dropDownValuesNoOfNight = _noOfNights.split('|');
    //                        $('.cruiseSelectionWrap .embarkationWrap .cruiseDropDown .block').html('');
    //                        $('.cruiseSelectionWrap .noOfNightsWrap .cruiseDropDown .block').html('');
    //                        for (var i = 0; i < _dropDownValuesEmbarkationPlace.length; i++) {
    //                            $('.cruiseSelectionWrap .embarkationWrap .cruiseDropDown .block').append('<div class="optionWrap">' + _dropDownValuesEmbarkationPlace[i] + '</div>');
    //                            $('.cruiseSelectionWrap .embarkationWrap .dropDownLabel .value').html(_dropDownValuesEmbarkationPlace[0]);
    //                        }
    //                        for (var i = 0; i < _dropDownValuesNoOfNight.length; i++) {
    //                            $('.cruiseSelectionWrap .noOfNightsWrap .cruiseDropDown .block')
    //                                .append('<div class="optionWrap">' + _dropDownValuesNoOfNight[i] + ' Nights</div>');
    //                            $('.cruiseSelectionWrap .noOfNightsWrap .dropDownLabel .value').html('<abbr>' + _dropDownValuesNoOfNight[0] + '</abbr> <span>Nights</span></div>');
    //                        }


    //                    }


    //                }
    //            });
    //        }

    //    });



    //    if ($('.eventDetails').length > 0) {
    //        $('.eventDetails .allHotels li').each(function () {
    //            $(this).removeClass('active');
    //            if ($(this).attr('hotelcode') == _hotelcode) {
    //                $('.eventDetails .hotelName .name').html($(this).text());
    //                $(this).addClass('active');
    //            }
    //        });
    //    }


    //    if (document.URL.indexOf("/contact-us") != -1 && $('.select-box').length > 0) {
    //        $(".select-box").val(_hotelcode);
    //    }

    //    hotelcode = _hotelcode;
    //    hideShowChildrenSelection();
    //    addDynamicTextToCalender();
    //}
    //catch (Exxxx) {
    //    console.log("error");
    //}


}



function loadEmbedMap(location) {

    if ($("#showMap").length > 0) {
        $("#showMap").click(function () {
            var finalURL = "";
            var strURL = "https://maps.google.com/maps?q=$$LOCATION$$&t=&z=13&ie=UTF8&iwloc=&output=embed";           
            if (location != "") {
                finalURL = strURL.replace("$$LOCATION$$", location);
            }
            else {
                finalURL = strURL.replace("$$LOCATION$$", "amarvilas agra");
            }

            $('#map-embed').attr("src", finalURL);
            $('#map-embed').show();
            $('#map-image').hide();

        });
    }
}


var isDynamicMessagePageLoad = true;
/*  get dynamic text message from  JSON jsonDataBookingWidget (basic cshtml) */
function fnDisplayDynamicMessageInCalendar(_hotelcode) {
   
    var dynamicMessage = "";
    var dynamicMessageForLayou2 = "";
    $('.booking-engine .calender-dynamic-text').hide();
    $('.booking-engine .calender-dynamic-text').html("");
    $('.booking-engine .calanderBottomMessage').html("");

    var fromDate = "";
    var dateTill = "";


    

    if (typeof _hotelcode != "undefined") {
        if (typeof jsonDataBookingWidget != "undefined") {
            for (var i = 0; i < jsonDataBookingWidget.length; i++) {
                if (jsonDataBookingWidget[i].hotel_code.toLowerCase() == _hotelcode.toLowerCase()) {
                    dynamicMessage = jsonDataBookingWidget[i].display_message;
                    dynamicMessageForLayou2 = jsonDataBookingWidget[i].display_message;
                    fromDate = jsonDataBookingWidget[i].from_date;
                    dateTill = jsonDataBookingWidget[i].till_date;
                    break;
                }
            }
        }
    }

    setTimeout(function () {
        if (_hotelcode == "HBASWPH" || _hotelcode == "HBASWZA") {

            if ($(".booking-engine .checkInCheckOut").hasClass('cruiseCalenderDefaultScreen') || getJsonDataBookingWidgetValueByKey(_hotelcode, "display_message_in_dates").indexOf($(".booking-engine .t-input-check-in").val()) == -1) {
                dynamicMessage = "";
            }

        }
        else {
            if (dateTill != "") {

                


                var arrHotelSpecificDateArray = enumerateDateFromStartAndEndDate(fromDate, dateTill, []);

                /*Get date array from ViewPor either from Desktop or on scroll on mobile*/
                var momentDates = displayMonthINCalenderInViewport();

                var isMonthDateMatched = false;

                for (var i = 0; i < momentDates.length; i++) {

                    var strMonthAndDate1 = moment(momentDates[i], "YYYY-MM-DD").format("YYYY-MM").toString();
                    for (var j = 0; j < arrHotelSpecificDateArray.length; j++) {
                        var strMonthAndDate2 = moment(arrHotelSpecificDateArray[j], "YYYY-MM-DD").format("YYYY-MM").toString();
                        if (strMonthAndDate1 == strMonthAndDate2) {
                            isMonthDateMatched = true;
                        }
                    }
                }

                if (!isMonthDateMatched) {
                    dynamicMessage = "";
                }

                if (typeof $(".t-input-check-in") != "undefined") {
                    $(".t-input-check-in").each(function () {
                        if (moment(dateTill, "YYYY-MM-DD") < moment($(this).val(), "YYYY-MM-DD")) {
                            dynamicMessageForLayou2 = "";
                            dynamicMessage = "";

                            
                        }

                        //console.log("dateTill=====" + dateTill + "$(this).val() " + $(this).val() + "  dynamicMessageForLayou2" + dynamicMessageForLayou2);
                    });
                }

              

            }
        }



        $('.booking-engine .calender-dynamic-text').hide();
        $('.booking-engine .calender-dynamic-text').html("");
        $('.booking-engine .calanderBottomMessage').html("");

        if (dynamicMessage != "") {
           
            if ($('.hotelList ul li[data-hotelcode="' + _hotelcode + '"]').hasClass('active')) {

                //$('.calender-dynamic-text').show();
                //$('.calender-dynamic-text').html(htmlMessage);
                if (typeof $(".booking-engine .calender-dynamic-text") != "undefined") {
                    $(".booking-engine .calender-dynamic-text").remove();
                }
                $('.booking-engine .t-datepicker-days:not(.layout2)').prepend('<div class="calender-dynamic-text" style="display:none;"></div>');

                $('.booking-engine:not(.layout2) .calender-dynamic-text').show();
                $('.booking-engine:not(.layout2) .calender-dynamic-text').html(dynamicMessage);

            }
            
        }


        if (dynamicMessageForLayou2 != "") {

            if ($('.hotelList ul li[data-hotelcode="' + _hotelcode + '"]').hasClass('active')) {

                if ($('.booking-engine.layout2 .calanderBottomMessage').length > 0) {
                    $('.booking-engine.layout2 .calanderBottomMessage').html(dynamicMessageForLayou2);
                }

            }

        }
    }, 100);
    
    isDynamicMessageDisplayedOnPageLoad = false;

    return dynamicMessage;
}

/*  get dynamic text message from  JSON jsonDataBookingWidget (basic cshtml) only for Exotic vacation Page(EV)*/
function getDynamicMessageTextEV(_hotelcode) {
    var dynamicMessage = "";
    var dateTill = "";
    if (typeof _hotelcode != "undefined") {
        if (typeof jsonDataBookingWidget != "undefined") {
            for (var i = 0; i < jsonDataBookingWidget.length; i++) {
                if (jsonDataBookingWidget[i].hotel_code.toLowerCase() == _hotelcode.toLowerCase()) {
                    dynamicMessage = jsonDataBookingWidget[i].display_message_for_exotic_vacation;
                    dateTill = jsonDataBookingWidget[i].till_date;
                    break;
                }
            }
        }
    }
   
    if (dateTill != "") {
        $(".t-input-check-in").each(function () {
            if (moment(dateTill, "YYYY-MM-DD") < moment($(this).val(), "YYYY-MM-DD")) {
                dynamicMessage = "";               
            }
        });
       
    }

    return dynamicMessage;
}


function getJsonDataBookingWidgetValueByKey(hoteCode, keyName) {
    var keyValue = "";
    for (var i = 0; i < jsonDataBookingWidget.length; i++) {
        if (jsonDataBookingWidget[i].hotel_code == hoteCode) {
            if (keyName == "display_message_in_dates") {
                keyValue = jsonDataBookingWidget[i].display_message_in_dates;
            }            
            break;
        }
    }

    return keyValue;
}

function getHotelLatLongDetails(hotelcode) {
    var lat = "";
    var long = "";
    var directionmapimage = "";
    var image = "";
    var hoteltitle = "";
    var email = "";
    var phone = "";
    var url = "";
    var address = "";
    var isdetailfound = false;
    for (i = 0; i < arrHotelLatLongDetails.length; i++) {
        if (hotelcode == arrHotelLatLongDetails[i].hotelcode) {
            isdetailfound = true;
            lat = arrHotelLatLongDetails[i].lat;
            long = arrHotelLatLongDetails[i].lng;
            directionmapimage = arrHotelLatLongDetails[i].directionmapimage;
            image = arrHotelLatLongDetails[i].image;
            hoteltitle = arrHotelLatLongDetails[i].hoteltitle;
            email = arrHotelLatLongDetails[i].email;
            phone = arrHotelLatLongDetails[i].phone;
            url = arrHotelLatLongDetails[i].url;
            address = arrHotelLatLongDetails[i].address;
            break;
        }
    }

    return [isdetailfound, lat, long, directionmapimage, image, hoteltitle, email, phone, url, address];
}


function getHotelCodesByCountry(country) {
    var arrHotelsByCountry = [];
    var arrCountry = [];
    if (country != "") {
        arrCountry = country.split(",");
    }

    for (i = 0; i < arrHotelLatLongDetails.length; i++) {
        for (j = 0; j < arrCountry.length; j++) {

            if (arrCountry[j].toLowerCase() == arrHotelLatLongDetails[i].country.toLowerCase()) {             
                arrHotelsByCountry.push(arrHotelLatLongDetails[i].hotelcode);
            }
        }
    }

    return arrHotelsByCountry;
}

function setDirectionMapLatLongDetails(hotelcode) {
  
    setTimeout(function () {
        if (!isDirectionMapInitialised) {
            $("#dmap").hide();
        }

        var arrHotelDetails = getHotelLatLongDetails(hotelcode);

        if (arrHotelDetails[0]) {
            if ($("#hotelStarPoint").length > 0) {
                $("#hotelStarPoint").val(strip_html_tags(arrHotelDetails[5]));
            }
            if (typeof (sourceLat) !== 'undefined') {
                sourceLat = arrHotelDetails[1];
            }
            if (typeof (sourceLong) !== 'undefined') {
                sourceLong = arrHotelDetails[2];
            }

            if (typeof (sourceDirectionImage) !== 'undefined') {
                sourceDirectionImage = arrHotelDetails[3];
            }

            /*Set Image*/
            if ($('#map-image').length > 0) {
                
                var currentUrl = document.location.pathname;

                if (currentUrl == "/contact-us" || currentUrl == "/contact-us/") {

                    $('#map-embed').hide();
                    $('#map-image').attr("src", sourceDirectionImage);
                    $('#map-image').show();
                }
                else {
                    /*if (currentUrl.lastIndexOf('/overview') != -1) {
                       loadEmbedMap(location);            
                    }
                    else {
                    */
                    $('#map-embed').hide();
                    $('#map-image').show();
                    /*}*/
                }
            }
        }

    }, 10);
}

function fnLocalTemperature(locationid) {
    if (locationid != "") {
        if ($(".setLocalTemperature").length > 0) {
            $.ajax({
                dataType: "jsonp",
                url: "/handlers/getTemprature.ashx?id=" + locationid,
                success: function (objJson) {
                    //$(".setLocalTemperature").html(parseInt(objJson.main.temp).toFixed(0) + "&#8451; / " + ConvertTempratureCtoF(objJson.main.temp) + "&#8457;");
                    $(".setLocalTemperature").html(parseInt(objJson.main.temp).toFixed(0) + "<sup>o</sup>C");
                }
            });
        }
    }
}

function fnGetItinerariesDetails(nodeId) {
    if (nodeId != "") {
        $.ajax({
            url: "/handlers/get-sc-Itineraries-details.ashx?Id=" + nodeId,
            success: function (response) {
                $("#itinerariesDetailBlock").html(response);
                itinerarySliderInIt();
            }
        });
    }

}

function fnGetDestinationItems(nodeId) {
    //alert(1)
    if (nodeId != "") {
        $.ajax({
            url: "/handlers/get-sc-destinations-child-items.ashx?Id=" + nodeId,
            success: function (response) {
                if ($('.location-specific-content-slider .slider-div').hasClass("slick-initialized")) {
                    $('.location-specific-content-slider .slider-div').slick('unslick');
                    //$('.location-specific-content-slider .slider-div').slick('unslick').slick('reinit');
                    // $('.location-specific-content-slider .slider-div').slick('destroy');
                }
                $("#destinationItemsBlock").html(response);
                destinationSliderInit();
            }
        });
    }

}

function ConvertTempratureCtoF(temp) {
    if (temp != "") {
        return Math.round((temp * 9 / 5) + 32);
    }
    else {
        return temp;
    }
}

/*function fnLocalTime(zone)
{
    if (zone != "") {
        if ($(".setLocalTime").length > 0) {
            $(".setLocalTime").html(moment.tz(zone).format('hh:mm:ss A'));
        }
    }   
}*/

function fnGetTimeByZone(timezone) {
    if (timezone != "") {     
        if ($(".setLocalTime").length > 0) {
            var formData = [];

            formData.push({ name: "timezone", value: timezone });
            $.ajax({
                url: "/handlers/get-time.ashx?timezone=" + timezone,
                dataType: "jsonp",
                data: formData,
                type: "POST",
                async: false,
                success: function (result) {
                    result = JSON.parse(result);
                    if (result.status) {
                        $(".setLocalTime").html(result.time.toLowerCase());
                        console.log("LocalTime: "+result.time.toLowerCase());
                    }
                },
                error: function () {
                    alert("There has been an error on server. Please try after some time.");
                }
            });
        }
    }
    else {
        $(".setLocalTime").html(moment(new Date()).format('h:mm A').toLowerCase());
    }
}


function fnFilterEmagazineByCategory() {

    var category = fnGetParameterByName("category").toLowerCase();
    if (category != "") {
        $("#themes-tab input[type=checkbox]").each(function () {
            if ($(this).next("span").text().toLowerCase() == category) {
                $(this).next("span").click();
                $(".single-tab").eq(0).click();
            }
        });
    }
}


function setCountryByIP() {
    var isValidCountryName = false;
    if ($("#tollFreeCountry option").length > 0) {
        var countryName = "";
        $.ajax({
            url: "/handlers/get-country-by-ip.ashx",
            dataType: "jsonp",
            type: "POST",
            async: false,
            success: function (result) {
                result = JSON.parse(result);
                if (result.status) {                 
                    countryName = result.country;
                    if (countryName == "") {
                        countryName = "india";
                    }
                    //countryName = "taiwan";

                    if (countryName != "india") {
                        /*Remove Selected Attribite*/
                        $("#tollFreeCountry option").each(function () {
                            $(this).removeAttr('selected');
                        });

                        /*Select specific country*/
                        $("#tollFreeCountry option").each(function () {
                            //  console.log($(this).attr("data-country") + "/" + countryName);
                            if ($(this).attr("data-country") == countryName) {
                                isValidCountryName = true;
                                $(this).attr('selected', 'selected');
                                setTimeout(function () {
                                    $("#tollFreeCountry").trigger("change");
                                }, 100);                               
                            }
                        });

                        if (!isValidCountryName) {
                            $("#tollFreeCountry option").each(function () {                              
                                if ($(this).attr("data-country") == "india") {
                                    $(this).attr('selected', 'selected');
                                    $("#tollFreeCountry").trigger("change");
                                }
                            });
                        }
                    }
                }
            },
            error: function () {
                $("#tollFreeCountry option").each(function () {
                    if ($(this).attr("data-country") == "india") {
                        $(this).attr('selected', 'selected');
                        $("#tollFreeCountry").trigger("change");
                    }
                });
            }
        });

    }
}


$(function () {
    fnShowUserMessageToFinishTheirBooking();
});

/*Show user message that hes was triying to book stay but leaved for any reason.*/ 
function fnShowUserMessageToFinishTheirBooking() {

    setTimeout(function () {
        if ($(".usermessagetofinishtheirbooking").length > 0) {

            var userNameWithSalutation = "Dear Guest"; //Mr. Kalra
            var nightsBookedWithText = ""; //1
            var hotelNameCA = "";
            var checkinDateCA = ""; //20th May 2019
            var checkoutDateCA = ""; //21th May 2019
            var guesCountsWithText = "";
            var userLastSearchData = "";
            var hotelImage = "";
            var numberOfRoomsWithText = "";


            if (IsMemberLoggedIn) {

                if (readCookie("UserSalutation") != "") {
                    userSalutation = readCookie("UserSalutation");
                }
                if (readCookie("UserLastName") != "") {
                    userLastName = readCookie("UserLastName");
                    IsMemberLoggedIn = true;
                }
            }

            if (readCookie("userLastSearchHotelTitle") != "") {
                hotelNameCA = readCookie("userLastSearchHotelTitle");
            }

            if (readCookie("userLastSearchData") != "") {
                userLastSearchData = readCookie("userLastSearchData");
                checkinDateCA = moment(fnGetParameterByNameFromUrl("arrive", userLastSearchData).split(",")[0], "YYYY-MM-DD").format("Do MMMM YYYY");
                checkoutDateCA = moment(fnGetParameterByNameFromUrl("depart", userLastSearchData).split(",")[0], "YYYY-MM-DD").format("Do MMMM YYYY");
                hotelImage = getHotelImageByHotelCode(getHotelCodeBySynxisCode(fnGetParameterByNameFromUrl("hotel", userLastSearchData).split(";")[0]));

                var dateDiff = parseInt(getDateDifference(moment(fnGetParameterByNameFromUrl("arrive", userLastSearchData).split(",")[0], "YYYY-MM-DD"), moment(fnGetParameterByNameFromUrl("depart", userLastSearchData).split(",")[0], "YYYY-MM-DD")));

                if (dateDiff > 1) {
                    nightsBookedWithText = dateDiff + " nights";
                }
                else {
                    nightsBookedWithText = dateDiff + " night";
                }


                var totalGuest = parseInt(sumArray(fnGetParameterByNameFromUrl("adult", userLastSearchData), ",")) + parseInt(sumArray(fnGetParameterByNameFromUrl("child", userLastSearchData), ","));

                if (totalGuest > 1) {
                    guesCountsWithText = totalGuest + " guests";
                }
                else {
                    guesCountsWithText = totalGuest + " guest";
                }
            }

            if (userSalutation != "" && userLastName != "") {
                userNameWithSalutation = "Dear " + userSalutation + " " + userLastName;
            }

            var roomsCount = parseInt(fnGetParameterByNameFromUrl("rooms", userLastSearchData));
            if (roomsCount > 1) {
                numberOfRoomsWithText = roomsCount + " rooms";
            }
            else {
                numberOfRoomsWithText = roomsCount + " room";
            }

            if (hotelNameCA != "" && userLastSearchData != "") {
                var userMessageTemplate = "";
                userMessageTemplate += "<span class='close-btn btn-user-booking-reminder-close'>X</span>";
                userMessageTemplate += "<div class='marketing-asset-booking-detail'> ";
                userMessageTemplate += "    <div class='hotel-image'><img src='" + hotelImage + "'></div>";
                userMessageTemplate += "    <div class='booking-detail'>";
                userMessageTemplate += "        <p> <strong> " + userNameWithSalutation + " </strong>, <br>On your previous visit you had shown interest in the following:<br><span>" + hotelNameCA + "</span><br> Stay for " + guesCountsWithText + " for " + nightsBookedWithText + " from " + checkinDateCA + "<br> If you'd like to continue with that booking, please <a id='ResumeAbondonCart' href='" + userLastSearchData + "'>click here.</a></p>";
                userMessageTemplate += "    </div>";
                userMessageTemplate += "</div>";

                if (readCookie("userBookingReminderCloseCount") != "") {
                    /*var name numberOfRemindersToFinishBooking is declared in home page.
                      Value is fetched from Home Page in CMS*/
                    if ((parseInt(readCookie("userBookingReminderCloseCount"))) < numberOfRemindersToFinishBooking) {
                        $(".usermessagetofinishtheirbooking").html(userMessageTemplate);

                        if (moment() >= moment(fnGetParameterByNameFromUrl("arrive", userLastSearchData).split(",")[0], "YYYY-MM-DD")) {
                            $(".usermessagetofinishtheirbooking").html("");
                        }

                        if (typeof (userBrowserSessionId) !== "undefined") {
                            if (readCookie("userBrowserSessionId") != "") {
                                $(".usermessagetofinishtheirbooking").html("");
                            }
                        }
                    }
                }
            }
            else {
                console.log("Else part user reminder");
            }
        }

        $(".btn-user-booking-reminder-close").click(function () {
            closeUserReminder();
        });
    }, 10);

}

function closeUserReminder() {
    if ($(".usermessagetofinishtheirbooking").length > 0) {
        if (readCookie("userBookingReminderCloseCount") != "") {
            var userBookingReminderCloseCount = 1;
            userBookingReminderCloseCount = parseInt(readCookie("userBookingReminderCloseCount"));
            userBookingReminderCloseCount++;
            createCookieByDate("userBookingReminderCloseCount", userBookingReminderCloseCount, moment("2050-12-31", "YYYY-MM-DD").clone().format("YYYY-MM-DD"));
            if (typeof (userBrowserSessionId) !== "undefined") {
                document.cookie = "userBrowserSessionId=" + userBrowserSessionId + ";";
            }
        }
        else {
            createCookieByDate("userBookingReminderCloseCount", 0, moment("2050-12-31", "YYYY-MM-DD").clone().format("YYYY-MM-DD"));
        }

        $(".usermessagetofinishtheirbooking").html("");
    }
}

$(window).load(function () {
    if (typeof hideUserReminderToFinishBookingAfter != "undefined") {
        setTimeout(function () {

            if ($(".usermessagetofinishtheirbooking").length > 0) {
                if ($(".usermessagetofinishtheirbooking").html() != "") {
                    closeUserReminder();                    
                }
            }

        }, hideUserReminderToFinishBookingAfter * 1000);
    }
});

var GV_countryCode = "";
function getCountryCode() {
    try {
        $.ajax({
            async: true,
            type: "GET",
            url: 'https://api.ipinfodb.com/v3/ip-country/?key=4ecf29ac33780e638478dd023b3179c45f257ef8a0e36e6393f1bc907e4ab87b&format=json',
            data: {},
            dataType: "json",
            success: function (e) {
                var t, s, o;
                t = e, s = JSON.stringify(t), o = JSON.parse(s), GV_countryCode = o.countryCode, createCookieWithDomainName("GV_countryCode", GV_countryCode, 60, ".oberoihotels.com")
            }
        });
    }
    catch (exip) { }
}

function createCookieWithDomainName(cookiname, cookivalue, timeinminutes, domainName) {
    var d = new Date();
    d.setTime(d.getTime() + (timeinminutes * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    var domain = "domain=" + domainName;
    document.cookie = cookiname + "=" + cookivalue + ";" + expires + ";" + expires + ";path=/";
}

function pushDataLayerVariables() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'UD_CountryCode': GV_countryCode
    });
}

$(function () {

    if (readCookie("GV_countryCode") != "") {
        GV_countryCode = readCookie("GV_countryCode");
        pushDataLayerVariables();
    }
    else {
        getCountryCode();
        setTimeout(function () {
            pushDataLayerVariables();
        }, 2000);
    }

    RequestFormChange();
});

/*Use for Spa therapies selected by therapy click*/
function RequestFormChange() {
   
    $(".RequestFormBtn").click(function () {
       // console.log(this);
    var dataThere = $(this).attr("data-id");
    //alert(dataThere)
    console.log(dataThere);
    if (dataThere != undefined) {
        $('#spa_therapies').val(dataThere).trigger('change');
        $('#spa_therapies').addClass("has-value");
    }
    if (dataThere == undefined) {
        $('#spa_therapies').removeClass("has-value");
    }
    else { console.log('hello'); $('.selecttherapies').hide(); $('.selecttherapies').show(); }
   
})
}

/******************* get key event keycode *******************/
function getKeyCode(e) {
    if (window.event)
        return window.event.keyCode;
    else
        if (e)
            return e.which;
        else
            return null;
}
/***************** get key event keycode ends ***********/
/****************** Key Restriction function Start here *************/
function keyRestrictValidChars(e, validchars) {
    var key = '', keychar = '';
    key = getKeyCode(e);
    if (key == null)
        return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    validchars = validchars.toLowerCase();
    if (validchars.indexOf(keychar) != -1)
        return true;
    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;
    return false;
}
function keyRestrictInValidChars(e, invalidchars) {
    var key = '', keychar = '';
    key = getKeyCode(e);
    if (key == null)
        return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    invalidchars = invalidchars.toLowerCase();
    if (invalidchars.indexOf(keychar) == -1)
        return true;
    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;
    return false;
}
/****************** Key Restriction function End here *************/
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
/*************************************************************************************/