/* JS: request-a-proposal-form.js start*/
var seatingStyleList = "";
var eventname = [];
var eventvenu = [];
var seatingstyle = [];
var selectedvanuebind = "";
var defaultEnddateRP = moment().clone().add(1, "year")._d;
var defaultStartdateRP = new Date();


$(function () {  
   
    $("#ddlcountrycode").change(function () {
        var selectedCountry = $("#ddlcountrycode option:selected").text();
        if (selectedCountry != "") {
            var selectedCountryWithoutNumbers = selectedCountry
                .replace("+1-", "")
                .replace(/\d+/g, "")
                .replace("+", "")
                .trim();
            // console.log(selectedCountryWithoutNumbers);
            $("#country").val(selectedCountryWithoutNumbers);
        }
    });


    try {

    /*Set Hotel name from array*/

        $(".eventHotelTitle").html(getDestinationCountryTitle());  

        //var dynamicMessage = fnDisplayDynamicMessageInCalendar(hotelcode);
        //if (dynamicMessage != "") {
        //    $(".divDynamicMessage").html('<div class="calender-dynamic-text">' + dynamicMessage + '</div>');
        //}

        $(".btnRequestAProposal").click(function (event) {
            

            $(".errorMsg").html("");
           
            var isMainCapacity = "";
            isMainCapacity = $(this).attr("data-capacity-type");
            console.log("data attr - " + isMainCapacity);
            //if (isMainCapacity == "main") {
            //    console.log("main");
            //    $("#capacity").html($("#capacityChartDiv").html());
            //}
            if (isMainCapacity == "item") {
                console.log("item");
                var divId = $(this).attr("data-divid");
                console.log(divId);
                $("#capacity").html($("#" + divId).html());
                //$(".seatingStyleBox").addClass("activeAcc");
            }
            else {
                $("#capacity").html("");
                
            }
           
          
            if (!$(this).closest('.venue-details').next('.request-a-proposal-form-wrap').length) {
                
                /* Cut all HTMl and inser to class ".venue-details" */
                $('.request-a-proposal-form-wrap').insertAfter($(this).closest('.venue-details'));

                /* get name of events, venue and seating style from attribute */
                eventname.length = 0;
                eventvenu.length = 0;
                seatingstyle.length = 0;

                $('form[name="formRequestAProposal"] select[name="event_type"]').html("<option value=''>Select Event</option>");
                $('form[name="formRequestAProposal"] select[name = "venue"]').html("<option value=''>Select Venue</option>");
                console.log("venue attr - " + $(this).attr("data-venue"));
                try {
                    eventname = $(this).attr("data-events").split(",");
                    eventvenu = $(this).attr("data-venue").split(",");
                    seatingstyle = $(this).attr("data-seating-type").split(",");
                }
                catch (Exx) {  /**/ }

                    initializeEventAndVenue(eventname, eventvenu, seatingstyle);
                // $(".btnRequestAProposal").removeClass("active");    
                
                    if($('.request-a-proposal-form').is(":visible")){
                        if($(".btnRequestAProposal").not(this).hasClass("active")){
                            $(".btnRequestAProposal").not(this).removeClass("active");
                            $(this).addClass("active");
                            $('html,body').animate({
                                scrollTop: $('.request-a-proposal-form-wrap').offset().top - 160
                            }, 600);
                           
                        }

                        else{
                            $(this).removeClass("active");
                            $('.request-a-proposal-form').hide();
                        }
                        
                          
                    
                        
                    }
                    else{
                       $(this).addClass("active");
                        $('.request-a-proposal-form').show();
                        $('html,body').animate({
                            scrollTop: $('.request-a-proposal-form-wrap').offset().top - 160
                        }, 600);
                    }
                    
                
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

            // Bind Selected venue where you click 
            var dataThere = $(this).attr("data-bind");
            console.log("bind venue - " + dataThere);
            if (dataThere != undefined) {
                $('#venue').val(dataThere).trigger('change');
                $('#venue').addClass("has-value");
                $('.capacityChartBox').show();
                console.log('bb'); 
            }
            if (dataThere == undefined) {
                $('#venue').removeClass("has-value");
                $('.capacityChartBox').show();
                console.log('aa'); 
            }
            if (dataThere == '') {
                $('#venue').removeClass("has-value");
                $('.capacityChartBox').hide();
                console.log('hhhh'); 
            }
            else { console.log('cc'); }
        });
              
      

        var winW = $(window).width();
        var dateCheckIn = new Date();
        var dateCheckOut = new Date(new Date().valueOf() + 1000 * 3600 * 24);

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
            $("#formRequestAProposal1 .t-datepicker").tDatePicker({
                autoClose: false,
                numCalendar: 12,
                iconDate: "",
                toDayShowTitle: false,
                nextDayHighlighted: false,
                iconArrowTop: false,
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP,

            });

            $(".calender_1")
                .tDatePicker({
                    autoClose: false,
                    numCalendar: 12,
                    iconDate: "",
                    toDayShowTitle: false,
                    nextDayHighlighted: false,
                    iconArrowTop: false,
                    dateCheckIn: dateCheckIn,
                    dateCheckOut: dateCheckOut,
                    startDate: defaultStartdateRP,
                    endDate: defaultEnddateRP,
                    
                })
                .on("beforeShowDay", function (event) {
                    $("#formRequestAProposal1 .t-mobile-heading.calender_1_head").show();
                    $("#formRequestAProposal1 .calender_1_head .t-check-in-mobile").html(
                        $(".calender_1 .t-date-check-in").html()
                    );
                    $("#formRequestAProposal1 .calender_1_head .t-check-out-mobile").html(
                        $(".calender_1 .t-date-check-out").html()
                    );
                })
                .on("eventClickDay", function (event, dataDate) {
                    setTimeout(function(){
                    $(".calender_1_head .t-check-in-mobile").html(
                        $(".calender_1 .t-dates.t-date-check-in").html()
                    );
                    $(".calender_1_head .t-check-out-mobile").html(
                        $(".calender_1 .t-dates.t-date-check-out").html()
                    );
                },100);
                })
                .on("onChangeCI", function (e, changeDateCI) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                        $(".cico-identification").html("Select Event Start Date");
                    }, 10);
                })
                .on("clickDateCO", function (e, dateCO) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                        $(".cico-identification").html("Select Event End Date");
                    }, 10);
                })
                .on("clickDateCI", function (e, dateCI) {
                    setTimeout(function () {
                        $(".cico-identification").html("Select Event Start Date");
                    }, 10);
                });
               
                

            $(".calender_2")
                .tDatePicker({
                    autoClose: false,
                    numCalendar: 12,
                    iconDate: "",
                    toDayShowTitle: false,
                    nextDayHighlighted: false,
                    iconArrowTop: false,
                    dateCheckIn: dateCheckIn,
                    dateCheckOut: dateCheckOut,
                    startDate: defaultStartdateRP,
                    endDate: defaultEnddateRP,
                })
                .on("beforeShowDay", function (event) {
                    $(".t-mobile-heading.calender_2_head").show();
                    $(".calender_2_head .t-check-in-mobile").html(
                        $(".calender_2 .t-date-check-in").html()
                    );
                    $(".calender_2_head .t-check-out-mobile").html(
                        $(".calender_2 .t-date-check-out").html()
                    );
                })
                .on("eventClickDay", function (event, dataDate) {
                    $(".calender_2_head .t-check-in-mobile").html(
                        $(".calender_2 .t-dates.t-date-check-in").html()
                    );
                    $(".calender_2_head .t-check-out-mobile").html(
                        $(".calender_2 .t-dates.t-date-check-out").html()
                    );
                });
            $(".t-mobile-heading .backWrap")
                .click(function () {
                    $(".booking-engine .t-mobile-heading").hide();
                    //the following code restores original checkout date so instead we need to call $('body').click()
                    //$('.t-datepicker').tDatePicker('hide');
                    $("body").click();
                    console.log("new code fired");
                })
                .on("onChangeCI", function (e, changeDateCI) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                    }, 10);
                })
                .on("clickDateCO", function (e, dateCO) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                    }, 10);
                });
        } else {
            $("#formRequestAProposal1 .t-datepicker").tDatePicker({
                autoClose: true,
                durationArrowTop: 200,
                numCalendar: 2,
                iconDate: "",
                dateCheckIn: dateCheckIn,
                dateCheckOut: dateCheckOut,
                startDate: defaultStartdateRP,
                endDate: defaultEnddateRP,
            });
            $(".calender_1")
                .tDatePicker({
                    autoClose: true,
                    durationArrowTop: 200,
                    numCalendar: 2,
                    iconDate: "",
                    dateCheckIn: dateCheckIn,
                    dateCheckOut: dateCheckOut,
                    startDate: defaultStartdateRP,
                    endDate: defaultEnddateRP,
                    dateDisabled: [],
                    CheckInDateHeading: 'Select Event Start Date',
                    CheckOutDateHeading: 'Select Event End Date'
                })
                .on("onChangeCI", function (e, changeDateCI) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                        $(".calender_1 .cico-identification").html("Select Event End Date");
                    }, 10);
                    
                })
                // .on("eventClickDay", function (event, dataDate) {
                //     if($(".calender_1 .checkOutDate .t-day-check-out").length == 0){
                //         var getStartDate = $('.calender_1').tDatePicker('getStartDate');
                //         alert(getStartDate);
                //         $(".calender_1").tDatePicker('setEndDate', getStartDate)
                //         //$(".calender_1 .t-datepicker").tDatePicker('setEndDate', '2024-12-30')
                //         // dateCheckOut: dateCheckOut,
                //     }
                //     //alert(dateCheckOut);
                // })
                .on("clickDateCO", function (e, dateCO) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                        $(".calender_1 .cico-identification").html("Select Event End Date");
                    }, 10);
                   
                    
                })
                .on("clickDateCI", function (e, dateCI) {
                    
                    setTimeout(function () {
                        $(".calender_1 .cico-identification").html(
                            "Select Event Start Date"
                        );
                    }, 10);
                   
                });
            $(".calender_2")
                .tDatePicker({
                    autoClose: true,
                    durationArrowTop: 200,
                    numCalendar: 2,
                    iconDate: "",
                    dateCheckIn: dateCheckIn,
                    dateCheckOut: dateCheckOut,
                    startDate: defaultStartdateRP,
                    endDate: defaultEnddateRP,
                })
                .on("onChangeCI", function (e, changeDateCI) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                    }, 10);
                })
                
                .on("clickDateCO", function (e, dateCO) {
                    setTimeout(function () {
                        fnEnableCODatesRequestAproposal();
                    }, 10);
                });
                

        }

       

        //open drop down on click of parent div
        $("#formRequestAProposal1 .triggerDropDown").click(function () {
            $(this).nextAll(".dropDown").toggle();
        });
        $("#formRequestAProposal1 .t-mobile-heading .backWrap").click(function () {
            $("#formRequestAProposal1 .t-mobile-heading").hide();
            $("#formRequestAProposal1 .t-datepicker").tDatePicker("hide");
        });
        $(document).mouseup(function (e) {
            var container = $(".dropDown");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });
        //select hotel name from drop down list
        $("#formRequestAProposal1 .hotelList .hotelBlock .list ul > li").click(
            function () {
                if (!$(this).hasClass("hasSubnav")) {
                    var _hotelName = $(this).html();
                    $(
                        "#formRequestAProposal1 .hotelList .hotelBlock .list ul > li"
                    ).removeClass("active");
                    $(this).addClass("active");
                    $("#formRequestAProposal1 .hotelName .hotelLabel .name").html(
                        _hotelName
                    );
                    $("#formRequestAProposal1 .hotelListDropDown").hide();
                    $("#formRequestAProposal1 .triggerDropDown").removeClass("active");
                }
            }
        );
        $(
            "#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .head"
        ).click(function () {
            $(this).toggleClass("active");
            $(this).next().slideToggle();
        });
        $(
            "#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .content .values"
        ).click(function () {
            $(this).closest(".content").find(".values").removeClass("active");
            $(this).addClass("active");
        });
        $(
            "#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .content .actionWrap .button"
        ).click(function () {
            var _hotelName = $(this)
                .closest(".subNav")
                .parent()
                .find(".label")
                .html();
            $(
                "#formRequestAProposal1 .hotelList .hotelBlock .list ul > li"
            ).removeClass("active");
            $(this).closest(".subNav").parent().addClass("active");
            $("#formRequestAProposal1 .triggerDropDown").removeClass("active");
            $("#formRequestAProposal1 .hotelName .hotelLabel .name").html(_hotelName);
            $("#formRequestAProposal1 .hotelListDropDown").hide();
            $(
                "#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .head"
            ).removeClass("active");
            $(
                "#formRequestAProposal1 .hotelList .hotelBlock .list ul li .subNav .content"
            ).hide();
        });
        //close popup on mobile
        $(
            "#formRequestAProposal1 .mobileHeader .close, .t-mobile-heading .close"
        ).click(function () {
            $(".t-datepicker-day, .t-mobile-heading").hide();
            //the following code restores original checkout date so instead we need to call $('body').click()
            //$('.t-datepicker').tDatePicker('hide');
            $("body").click();
            console.log("new code fired");
            $(".dropDown").hide();
        });
        //seating style script
        $("#formRequestAProposal1 .seatingStyleWrap .optionsWrap ul li").click(
            function () {
                $(".seatingStyleWrap .optionsWrap ul li").removeClass("active");
                $(this).addClass("active");
                // initializeEventAndVenue();
            }
        );
        $("#formRequestAProposal1 .accomodationWrap .label label").click(
            function () {
                $("label").removeClass("active");
                $(this).addClass("active");
            }
        );
        $("#formRequestAProposal1 .accomodationWrap .label label.yes").click(
            function () {
                $(
                    ".request-a-proposal-form .sectionFormWrap .accomodationWrap .accomodationForm"
                ).show();
            }
        );
        $("#formRequestAProposal1 .accomodationWrap .label label.no").click(
            function () {
                $(
                    ".request-a-proposal-form .sectionFormWrap .accomodationWrap .accomodationForm"
                ).hide();
            }
        );
        nextScreenFunc = function (slideCount, fillPercentage) {
            $("#formRequestAProposal1 .sectionFormWrap").hide();
            $(
                "#formRequestAProposal1 .sectionFormWrap:eq(" + slideCount + ")"
            ).show();
            $("#formRequestAProposal1 .timelineWrap ul li").removeClass(
                "active completed"
            );
            for (i = 0; i < slideCount; i++) {
                $(".timelineWrap ul li:eq(" + i + ")").addClass("completed");
            }
            for (i = 0; i <= slideCount; i++) {
                $("#formRequestAProposal1 .timelineWrap ul li:eq(" + i + ")").addClass(
                    "active"
                );
            }
            $("#formRequestAProposal1 .timelineWrap .filler").css({
                width: fillPercentage + "%",
            });
        };
    } catch (exxx) {
        /**/
    }

    
       

    
    
});

function initializeEventAndVenue(events, venus, seating, selectedvanuebind) {
    $('form[name="formRequestAProposal"] select[name="event_type"]').html(
        "<option value=''>" +
        glblRequestAProposalCommonDictionaryArray.SelectEvent +
        "</option>" +
        fnGetHotelEventOptions(events)
    );
   
    $('form[name="formRequestAProposal"] select[name = "venue"]').html(
        "<option value=''>" +
        glblRequestAProposalCommonDictionaryArray.SelectVenue +
        "</option>" +
        fnGetHotelVenueOptions(venus, selectedvanuebind)
    );

    $(".seatingStyleList li").each(function () {
        //$(this).hide();
        $(this).removeClass("active");
        for (var i = 0; i < seating.length; i++) {
            if (seating[i] != "") {
                var strSeatingStyle = seating[i].toLowerCase().trim();
                if (strSeatingStyle == "theater") {
                    strSeatingStyle = "theatre";
                }

                if (
                    $(this)
                        .find(".text")
                        .attr("data-seating-style-text")
                        .toLowerCase()
                        .trim() == strSeatingStyle
                ) {
                    $(this).show();
                }
            }
        }
    });
}
try {
    //FORM SUBMITTION LOGIC
    $(".btnScreenOne").click(function () {
        fnSubmitRequestAProposalForm(this, "screen1", "btnnext");
    });

    $(".btnScreenTwo").click(function () {
        fnSubmitRequestAProposalForm(this, "screen2", "btnsubmit");
    });

    function fnGetHotelEventOptions(events) {
        var arrUniqueValue = [];
        var optValues = "";
        for (i = 0; i < events.length; i++) {
            if (events[i] != "") {
                optValues +=
                    "<option value='" + events[i] + "'>" + events[i] + "</option>";
            }
        }
        return optValues;
    }
    function fnGetHotelVenueOptions(evenvenu, selectedvanuebind) {
        var arrUniqueValue = [];
        var optValues = "";

       
        //  console.log("mmhhh" + selectedvanuebind);
        for (i = 0; i < evenvenu.length; i++) {
            
            if (evenvenu[i] != "") {
                if (evenvenu[i] == selectedvanuebind) {
                  
                    optValues +=
                        "<option selected='selected'  value='" +
                        evenvenu[i] +
                        "'>" +
                        evenvenu[i] +
                        "</option>";
                } else {
                    optValues +=
                        "<option  value='" + evenvenu[i] + "'>" + evenvenu[i] + "</option>";
                }
            }
        }
        return optValues;
    }

    function fnSubmitRequestAProposalForm(obj, screen, buttonId) {
        var _currFormId = $(obj).closest("form").attr("id");
        console.log("_hotelcode---" + globalHotelCode);
        var hotel_code = globalHotelCode;
        var hotelcode = $("#" + _currFormId + " .allHotels")
            .find("li.active")
            .attr("hotelcode");

        var errorMessage = [];
        var errorFields = [];
        $(".errorMsg").html("");

        var data = $("#" + _currFormId).serializeArray();

        var formData = $("#" + _currFormId).serializeArray();
        var data1 = new FormData();
        if (screen == "screen1") {
            $.each(formData, function (key, input) {
                data1.append(input.name, input.value);
                if (
                    input.name == "event_type" &&
                    (input.value == "Social Events" || input.value == "social events")
                ) {
                    document.getElementsByName("company")[0].placeholder = "Company";
                }
                // else { document.getElementsByName('company')[0].placeholder = 'Company'; }
            });
        }
        $.each(formData, function (key, input) {
            data1.append(input.name, input.value);
            if (
                (input.name == "event_type" && input.value == "Corporate Events") ||
                (input.name == "event_type" && input.value == "corporate events")
            ) {
                document.getElementsByName("company")[0].placeholder = "Company*";
            }
        });

        data.push({ name: "hotel_code", value: hotel_code });
        data.push({ name: "hotel", value: $(".eventHotelTitle").html() });
        data.push({ name: "screen", value: screen });
        data.push({
            name: "checkin",
            value: $(".calender_1 .t-input-check-in").val().trim(),
        });
        data.push({
            name: "checkout",
            value: $(".calender_1 .t-input-check-out").val().trim(),
        });
        data.push({
            name: "accomodation_checkin",
            value: $(".calender_2 .t-input-check-in").val().trim(),
        });
        data.push({
            name: "accomodation_checkout",
            value: $(".calender_2 .t-input-check-out").val().trim(),
        });
        data.push({
            name: "seating_style",
            value: $("#" + _currFormId + " .seatingStyleWrap li.active")
                .text()
                .trim(),
        });

        $.ajax({
            /* dataType: "jsonp",*/
            url: "/handlers/rev/form-request-a-proposal.ashx",
            data: data,
            type: "POST",
            async: true,
            success: function (result) {
                result = JSON.parse(result);
                if (result.status) {
                    if (result.next_screen == "screen2") {
                        nextScreenFunc(1, 50);
                    } else if (result.next_screen == "finalscreen") {
                        var form = document.getElementById("formRequestAProposal1");
                        form.reset();
                        nextScreenFunc(2, 100);
                        $("#reservationNo").text("RFP000" + result.PrimaryId);
                        // console.log("UniqueId", result.PrimaryId);
                    }
                } else {
                    errorMessage = result.error_message.split(".");
                    errorFields = result.error_field.split(".");

                    for (var i = 0; i < errorFields.length; i++) {
                        if (errorFields[i] != "") {
                            $(".errorMsg").show();
                            if (errorFields[i] == "query") {
                                $(
                                    "#" + _currFormId + ' textarea[name="' + errorFields[i] + '"]'
                                )
                                    .next(".errorMsg")
                                    .html(errorMessage[i]);
                            } else if (
                                errorFields[i] == "salutation" ||
                                errorFields[i] == "venue" ||
                                errorFields[i] == "event_type" ||
                                errorFields[i] == "category" ||
                                errorFields[i] == "country"
                            ) {
                                $("#" + _currFormId + ' select[name="' + errorFields[i] + '"]')
                                    .next(".errorMsg")
                                    .html(errorMessage[i]);
                            } else if (errorFields[i] == "ddlcountrycode") {
                                $("#" + _currFormId + ' select[name="' + errorFields[i] + '"]')
                                    .next(".floating-label")
                                    .next(".errorMsg")
                                    .html(errorMessage[i]);
                            } else if (errorFields[i] == "additional_information") {
                                $(
                                    "#" + _currFormId + ' textarea[name="' + errorFields[i] + '"]'
                                )
                                    .next(".errorMsg")
                                    .html(errorMessage[i]);
                            } else if (errorFields[i] == "hotel") {
                                $("#" + _currFormId + " .hotelName .errorMsg").html(
                                    errorMessage[i]
                                );
                            } else if (errorFields[i] == "checkout") {
                                $("#" + _currFormId + " .calender_1  .errorMsg").html(
                                    errorMessage[i]
                                );
                            } else if (errorFields[i] == "checkout") {
                                $("#" + _currFormId + " .calender_1  .errorMsg").html(
                                    errorMessage[i]
                                );
                            } else if (errorFields[i] == "accomodation_checkout") {
                                $("#" + _currFormId + " .calender_2  .errorMsg").html(
                                    errorMessage[i]
                                );
                            } else if (errorFields[i] == "seating_style") {
                                $("#" + _currFormId + " .errorMessageSeatingStyle").html(
                                    errorMessage[i]
                                );
                            } else {
                                // console.log($('#' + _currFormId + ' input[name="' + errorFields[i] + '"]'));
                                // $('#' + _currFormId + ' input[name="' + errorFields[i] + '"]').next(".errorMsg").html(errorMessage[i]);
                                $("#" + _currFormId + ' input[name="' + errorFields[i] + '"]')
                                    .parent()
                                    .find(".errorMsg")
                                    .html(errorMessage[i]);
                            }
                        }
                    }
                }
            },
            error: function () {
                alert("There has been an error on server. Please try after some time.");
            },
            beforeSend: function () {
                $("#" + buttonId).addClass("loading");
                if (buttonId == "btnnext") {
                    $(".btnScreenOne").hide();
                    $("#btnnext").show();
                } else if (buttonId == "btnsubmit") {
                    $("#btnsubmit").show();
                    $(".btnScreenTwo").hide();
                }
            },
            complete: function () {
                $("#" + buttonId).removeClass("loading");
                if (buttonId === "btnnext") {
                    $(".btnScreenOne").show();
                    $("#btnnext").hide();
                } else if (buttonId === "btnsubmit") {
                    $(".btnScreenTwo").show();
                    $("#btnsubmit").hide();
                }
            },
        });
    }
} catch (exxx) { }

function fnEnableCODatesRequestAproposal() {
    console.log(22);
    var disableDateFrom = new Date(defaultEnddateRP);
    var disableDateFromIncremented = new Date(defaultEnddateRP);
    $(
        ".request-a-proposal-form .checkOutDate tbody td.t-day, .request-a-proposal-form .checkOutDate tbody td.t-start, .request-a-proposal-form .checkOutDate tbody td.t-end, .request-a-proposal-form .checkOutDate tbody td.t-range"
    ).each(function () {
        if (
            new Date(parseInt($(this).attr("data-t-date"))).toString() ==
            disableDateFrom.toString()
        ) {
            $(this).next(".t-disabled").removeClass("t-disabled");
        }
    });
}

/* get the index of first country from JSON data*/
function getDestinationCountryTitle() {
    var hotelTitle = "";
    var _hotelcode = glblCurrentPageHotelCode;

    for (var i = 0; i < arrHotelLatLongDetails.length; i++) {
        console.log("arrHotelLatLongDetails", arrHotelLatLongDetails[i].hotelcode);
        if (
            arrHotelLatLongDetails[i].hotelcode.toLowerCase() ==
            _hotelcode.toLowerCase()
        ) {
            hotelTitle = arrHotelLatLongDetails[i].hoteltitle;

            break;
        }
    }
    return hotelTitle;
}

$(
    ".request-a-proposal-form .sectionFormWrap .formWrap .formWrap .selectOptionList .input"
).click(function () {
    $("ul.optionList").hide();
    $(this).next(".optionList").show();
});
$("ul.optionList li").click(function () {
    var dataValItem = $(this).text();
    $("ul.optionList").hide();
    // $(this).parents(".selectOptionList").find(".optionSelectedVal").text(dataValItem);
    $(this).parents(".selectOptionList").find(".input").val(dataValItem);
    $(this).parents(".optionList").hide();
});

const button = document.getElementsByClassName("t-today");

// button.addEventListener(
//     "click",
//     () => {
//         console.log("Button was clicked!");
//     },
//     { once: true }
// );
/* JS: request-a-proposal-form.js end*/


$('#venue').on('change', function() {
    var selectedValue = $(this).val();
    
    
    $("#capacity").html($("[data-capacity='"+selectedValue+"']").html());
    $(".capacityChartBox").show();
    $(".seatingStyleBox").addClass("activeAcc");
    if($(".capacityChartBox").hasClass("activeAcc")){
        $(".seatingStyleBox").removeClass("activeAcc");
    }
    if ($(this).val() == "") {
        $(".seatingStyleBox").removeClass("activeAcc");
    }
});







