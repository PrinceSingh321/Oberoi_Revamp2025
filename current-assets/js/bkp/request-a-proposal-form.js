/* JS: request-a-proposal-form.js start*/
var seatingStyleList = "";
var eventname = [];
var eventvenu = [];
var seatingstyle = [];

var defaultEnddateRP = moment().clone().add(1, 'year')._d;
var defaultStartdateRP = new Date();


$(function () {  
   


    try {

    /*Set Hotel name from array*/

        $(".eventHotelTitle").html(getDestinationCountryTitle());  

        //var dynamicMessage = fnDisplayDynamicMessageInCalendar(hotelcode);
        //if (dynamicMessage != "") {
        //    $(".divDynamicMessage").html('<div class="calender-dynamic-text">' + dynamicMessage + '</div>');
        //}

        $(".btnRequestAProposal").click(function () {

            $(".errorMsg").html("");           
            $(this).toggleClass("active");
            if (!$(this).closest('.venue-details').next('.request-a-proposal-form-wrap').length) {
                
                /* Cut all HTMl and inser to class ".venue-details" */
                $('.request-a-proposal-form-wrap').insertAfter($(this).closest('.venue-details'));

                /* get name of events, venue and seating style from attribute */
                eventname.length = 0;
                eventvenu.length = 0;
                seatingstyle.length = 0;

                $('form[name="formRequestAProposal"] select[name="event_type"]').html("<option value=''>Select Event</option>");
                $('form[name="formRequestAProposal"] select[name = "venue"]').html("<option value=''>Select Venue</option>");               
                try {
                    eventname = $(this).attr("data-events").split(",");
                    eventvenu = $(this).attr("data-venue").split(",");
                    seatingstyle = $(this).attr("data-seating-type").split(",");
                }
                catch (Exx) {  /**/ }

                    initializeEventAndVenue(eventname, eventvenu, seatingstyle);
               
                setTimeout(function(){
                    $('.request-a-proposal-form').show();
                    $('html,body').animate({
                        scrollTop: $('.request-a-proposal-form-wrap').offset().top - 160
                    }, 600);
                },0);
            }
            else{

                var $t = $('.request-a-proposal-form');
                if ($t.is(':visible')) {
                    $t.slideUp();
                } else {
                    $t.slideDown();
                    $('html,body').animate({
                        scrollTop: $('.request-a-proposal-form-wrap').offset().top - 160
                    }, 600);
                }
            }
        });
              
      

        var winW = $(window).width();
        var dateCheckIn = new Date();
        var dateCheckOut = new Date((new Date()).valueOf() + 1000 * 3600 * 24);

        //if (hotelcode.indexOf("HBJAIVA") != -1) {
        //    if (moment() <= moment("2019-09-15", "YYYY-MM-DD")) {
        //        defaultStartdateRP = new Date(moment("2019-09-15", "YYYY-MM-DD").clone().format("YYYY-MM-DD"));
        //        dateCheckIn = new Date(moment("2019-09-15", "YYYY-MM-DD").clone().format("YYYY-MM-DD"));
        //        dateCheckOut = new Date(moment("2019-09-15", "YYYY-MM-DD").clone().add(1, "days").format("YYYY-MM-DD"));
        //    }
        //}

        //else if (hotelcode.indexOf("HBCOKVR") != -1) {
        //    if (moment() <= moment("2019-10-01", "YYYY-MM-DD")) {
        //        defaultStartdateRP = new Date(moment("2019-10-01", "YYYY-MM-DD").clone().format("YYYY-MM-DD"));
        //        dateCheckIn = new Date(moment("2019-10-01", "YYYY-MM-DD").clone().format("YYYY-MM-DD"));
        //        dateCheckOut = new Date(moment("2019-10-01", "YYYY-MM-DD").clone().add(1, "days").format("YYYY-MM-DD"));
        //    }
        //}


        if (winW < 768) {
            $('#formRequestAProposal1 .t-datepicker').tDatePicker({
                autoClose: false,
                numCalendar: 12,
                iconDate: '',
                toDayShowTitle: false,
                nextDayHighlighted: false,
                iconArrowTop: false,
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP
            });

            $('.calender_1').tDatePicker({
                autoClose: false,
                numCalendar: 12,
                iconDate: '',
                toDayShowTitle: false,
                nextDayHighlighted: false,
                iconArrowTop: false,
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP
            }).on('beforeShowDay', function (event) {
             
                $('#formRequestAProposal1 .t-mobile-heading.calender_1_head').show();
                $('#formRequestAProposal1 .calender_1_head .t-check-in-mobile').html($('.t-date-check-in').html());
                $('#formRequestAProposal1 .calender_1_head .t-check-out-mobile').html($('.t-date-check-out').html());
            }).on('eventClickDay', function (event, dataDate) {
                $('.calender_1_head .t-check-in-mobile').html($('.t-dates.t-date-check-in').html());
                $('.calender_1_head .t-check-out-mobile').html($('.t-dates.t-date-check-out').html());

            }).on('onChangeCI', function (e, changeDateCI) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            }).on('clickDateCO', function (e, dateCO) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            });



            $('.calender_2').tDatePicker({
                autoClose: false,
                numCalendar: 12,
                iconDate: '',
                toDayShowTitle: false,
                nextDayHighlighted: false,
                iconArrowTop: false,
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                 endDate: defaultEnddateRP
            }).on('beforeShowDay', function (event) {
               
                $('.t-mobile-heading.calender_2_head').show();
                $('.calender_2_head .t-check-in-mobile').html($('.t-date-check-in').html());
                $('.calender_2_head .t-check-out-mobile').html($('.t-date-check-out').html());
            }).on('eventClickDay', function (event, dataDate) {
                $('.calender_2_head .t-check-in-mobile').html($('.t-dates.t-date-check-in').html());
                $('.calender_2_head .t-check-out-mobile').html($('.t-dates.t-date-check-out').html());
            });
            $('.t-mobile-heading .backWrap').click(function () {
                $('.booking-engine .t-mobile-heading').hide();
                //the following code restores original checkout date so instead we need to call $('body').click()
                //$('.t-datepicker').tDatePicker('hide');
                $('body').click();
                console.log("new code fired");
            }).on('onChangeCI', function (e, changeDateCI) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            }).on('clickDateCO', function (e, dateCO) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            });;
        } else {
            $('#formRequestAProposal1 .t-datepicker').tDatePicker({
                autoClose: true,
                durationArrowTop: 200,
                numCalendar: 2,
                iconDate: '',
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP
            });
            $('.calender_1').tDatePicker({
                autoClose: true,
                durationArrowTop: 200,
                numCalendar: 2,
                iconDate: '',
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP
            }).on('onChangeCI', function (e, changeDateCI) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            }).on('clickDateCO', function (e, dateCO) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            });;
            $('.calender_2').tDatePicker({
                autoClose: true,
                durationArrowTop: 200,
                numCalendar: 2,
                iconDate: '',
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP
            }).on('onChangeCI', function (e, changeDateCI) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            }).on('clickDateCO', function (e, dateCO) {
                setTimeout(function () {
                    fnEnableCODatesRequestAproposal();
                }, 10);
            });;
        }
        //open drop down on click of parent div
        $('#formRequestAProposal1 .triggerDropDown').click(function () {
            $(this).nextAll('.dropDown').toggle();
        });
        $('#formRequestAProposal1 .t-mobile-heading .backWrap').click(function () {
            $('#formRequestAProposal1 .t-mobile-heading').hide();
            $('#formRequestAProposal1 .t-datepicker').tDatePicker('hide');
        });
        $(document).mouseup(function (e) {
            var container = $(".dropDown");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });
        //select hotel name from drop down list
        $('#formRequestAProposal1 .hotelList .hotelBlock .list ul > li').click(function () {
            if (!$(this).hasClass('hasSubnav')) {
                var _hotelName = $(this).html();
                $('#formRequestAProposal1 .hotelList .hotelBlock .list ul > li').removeClass('active');
                $(this).addClass('active');
                $('#formRequestAProposal1 .hotelName .hotelLabel .name').html(_hotelName);
                $('#formRequestAProposal1 .hotelListDropDown').hide();
                $('#formRequestAProposal1 .triggerDropDown').removeClass('active');
            }
        });
        $('#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .head').click(function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });
        $('#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .content .values').click(function () {
            $(this).closest('.content').find('.values').removeClass('active');
            $(this).addClass('active');
        });
        $('#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .content .actionWrap .button').click(function () {
            var _hotelName = $(this).closest('.subNav').parent().find('.label').html();
            $('#formRequestAProposal1 .hotelList .hotelBlock .list ul > li').removeClass('active');
            $(this).closest('.subNav').parent().addClass('active');
            $('#formRequestAProposal1 .triggerDropDown').removeClass('active');
            $('#formRequestAProposal1 .hotelName .hotelLabel .name').html(_hotelName);
            $('#formRequestAProposal1 .hotelListDropDown').hide();
            $('#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .head').removeClass('active');
            $('#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .content').hide();
        });
        //close popup on mobile
        $('#formRequestAProposal1 .mobileHeader .close, .t-mobile-heading .close').click(function () {
            $('.t-datepicker-day, .t-mobile-heading').hide();
            //the following code restores original checkout date so instead we need to call $('body').click()
            //$('.t-datepicker').tDatePicker('hide');
            $('body').click();
            console.log("new code fired");
            $('.dropDown').hide();
        });
        //seating style script
        $('#formRequestAProposal1 .seatingStyleWrap .optionsWrap ul li').click(function () {
            $('.seatingStyleWrap .optionsWrap ul li').removeClass('active');
            $(this).addClass('active');
           // initializeEventAndVenue();
        });
        $("#formRequestAProposal1 .accomodationWrap .label label").click(function () {
            $("label").removeClass("active");
            $(this).addClass("active");
        });
        $("#formRequestAProposal1 .accomodationWrap .label label.yes").click(function () {
            $('.request-a-proposal-form .sectionFormWrap .accomodationWrap .accomodationForm').show();
        });
        $("#formRequestAProposal1 .accomodationWrap .label label.no").click(function () {
            $('.request-a-proposal-form .sectionFormWrap .accomodationWrap .accomodationForm').hide();
        });
        nextScreenFunc = function (slideCount, fillPercentage) {
            $('#formRequestAProposal1 .sectionFormWrap').hide();
            $('#formRequestAProposal1 .sectionFormWrap:eq(' + slideCount + ')').show();
            $('#formRequestAProposal1 .timelineWrap ul li').removeClass('active completed');
            for (i = 0; i < slideCount; i++) {
                $('.timelineWrap ul li:eq(' + i + ')').addClass('completed');
            }
            for (i = 0; i <= slideCount; i++) {
                $('#formRequestAProposal1 .timelineWrap ul li:eq(' + i + ')').addClass('active');
            }
            $('#formRequestAProposal1 .timelineWrap .filler').css({
                'width': fillPercentage + '%'
            });
        };

    }
    catch (exxx) {
        /**/
    }
});


function initializeEventAndVenue(events, venus, seating) {
    $('form[name="formRequestAProposal"] select[name="event_type"]').html("<option value=''>"+glblRequestAProposalCommonDictionaryArray.SelectEvent+"</option>" + fnGetHotelEventOptions(events));
    $('form[name="formRequestAProposal"] select[name = "venue"]').html("<option value=''>"+glblRequestAProposalCommonDictionaryArray.SelectVenue+"</option>" + fnGetHotelVenueOptions(venus));

    $(".seatingStyleList li").each(function () {
        $(this).hide();
        $(this).removeClass("active");
        for (var i = 0; i < seating.length; i++) {
            if (seating[i] != "") {             

                var strSeatingStyle = seating[i].toLowerCase().trim();
                if (strSeatingStyle == "theater")
                {
                    strSeatingStyle = "theatre";
                }

                if ($(this).find(".text").attr("data-seating-style-text").toLowerCase().trim() == strSeatingStyle) {                  
                    $(this).show();
                }               
            }
        }
    });

}
try {

    //FORM SUBMITTION LOGIC
    $(".btnScreenOne").click(function () {
        fnSubmitRequestAProposalForm(this, "screen1");
    });

    $(".btnScreenTwo").click(function () {
        fnSubmitRequestAProposalForm(this, "screen2");
    });

    function fnGetHotelEventOptions(events) {
        var arrUniqueValue = [];
        var optValues = "";
        for (i = 0; i < events.length; i++) {
            if (events[i] != "") {
                optValues += "<option value='" + events[i] + "'>" + events[i] + "</option>";
            }
        }
        return optValues;
    }
    function fnGetHotelVenueOptions(evenvenu) {
        var arrUniqueValue = [];
        var optValues = "";
        for (i = 0; i < evenvenu.length; i++) {
            if (evenvenu[i] != "") {
                optValues += "<option value='" + evenvenu[i] + "'>" + evenvenu[i] + "</option>";
            }
        }
        return optValues;
    }

    function fnSubmitRequestAProposalForm(obj, screen) {
        var _currFormId = $(obj).closest('form').attr('id');

        var hotelcode = $('#' + _currFormId + ' .allHotels').find('li.active').attr('hotelcode');

        var errorMessage = [];
        var errorFields = [];
        $(".errorMsg").html("");


        var data = $("#" + _currFormId).serializeArray();
        data.push({ name: 'hotel', value: $(".eventHotelTitle").html() });
        data.push({ name: 'screen', value: screen });
        data.push({ name: 'checkin', value: $('.calender_1 .t-input-check-in').val().trim() });
        data.push({ name: 'checkout', value: $('.calender_1 .t-input-check-out').val().trim() });
        data.push({ name: 'accomodation_checkin', value: $('.calender_2 .t-input-check-in').val().trim() });
        data.push({ name: 'accomodation_checkout', value: $('.calender_2 .t-input-check-out').val().trim() });
        data.push({ name: 'seating_style', value: $('#' + _currFormId + ' .seatingStyleWrap li.active').text().trim() });


        $.ajax({
            dataType: "jsonp",
            url: "/handlers/form-request-a-proposal.ashx",
            data: data,
            type: "POST",
            async: false,
            success: function (result) {
                result = JSON.parse(result);
                if (result.status) {
                    if (result.next_screen == "screen2") {
                        nextScreenFunc(1, 50);
                    }
                    else if (result.next_screen == "finalscreen") {
                        nextScreenFunc(2, 100);
                    }
                }
                else {
                    errorMessage = result.error_message.split('.');
                    errorFields = result.error_field.split('.');

                    for (var i = 0; i < errorFields.length; i++) {

                        if (errorFields[i] != "") {

                            $(".errorMsg").show();
                            if (errorFields[i] == "query") {
                                $('#' + _currFormId + ' textarea[name="' + errorFields[i] + '"]').next(".errorMsg").html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "salutation"
                                || errorFields[i] == "venue"
                                || errorFields[i] == "event_type"
                                || errorFields[i] == "category") {
                                $('#' + _currFormId + ' select[name="' + errorFields[i] + '"]').next(".errorMsg").html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "additional_information") {
                                $('#' + _currFormId + ' textarea[name="' + errorFields[i] + '"]').next(".errorMsg").html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "hotel") {

                                $('#' + _currFormId + ' .hotelName .errorMsg').html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "checkout") {

                                $('#' + _currFormId + ' .calender_1  .errorMsg').html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "checkout") {

                                $('#' + _currFormId + ' .calender_1  .errorMsg').html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "accomodation_checkout") {

                                $('#' + _currFormId + ' .calender_2  .errorMsg').html(errorMessage[i]);
                            }
                            else if (errorFields[i] == "seating_style") {

                                $('#' + _currFormId + ' .errorMessageSeatingStyle').html(errorMessage[i]);
                            }
                            else {
                                $('#' + _currFormId + ' input[name="' + errorFields[i] + '"]').next(".errorMsg").html(errorMessage[i]);
                            }


                        }
                    }
                }

            },
            error: function () {
                alert("There has been an error on server. Please try after some time.");
            }
        });
    }

}
catch (exxx) {


}

function fnEnableCODatesRequestAproposal() {
    console.log(22);
    var disableDateFrom = new Date(defaultEnddateRP);
    var disableDateFromIncremented = new Date(defaultEnddateRP);
    $(".request-a-proposal-form .checkOutDate tbody td.t-day, .request-a-proposal-form .checkOutDate tbody td.t-start, .request-a-proposal-form .checkOutDate tbody td.t-end, .request-a-proposal-form .checkOutDate tbody td.t-range").each(function () {

        if (new Date(parseInt($(this).attr("data-t-date"))).toString() == disableDateFrom.toString()) {
            $(this).next(".t-disabled").removeClass("t-disabled");
        }
    });
}


/* get the index of first country from JSON data*/
function getDestinationCountryTitle() {
    var hotelTitle = "";
    var _hotelcode = glblCurrentPageHotelCode;
    for (var i = 0; i < arrHotelLatLongDetails.length; i++) {
        if (arrHotelLatLongDetails[i].hotelcode.toLowerCase() == _hotelcode.toLowerCase()) {
            hotelTitle = arrHotelLatLongDetails[i].hoteltitle;
            break;
        }
    }
    return hotelTitle;
}


/* JS: request-a-proposal-form.js end*/