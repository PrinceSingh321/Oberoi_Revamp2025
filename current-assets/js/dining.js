var hotelData;
function refreshdiningCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("diningCaptchaImg");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}


function fnPrefieldSelectBoxOnbutttonClick() {
    var dropdown = $('#restaurant_name');
    var dropdowndiv = $('#restaurant_namediv');
    var message = $('#booking_info');
    var dropdowntime = $('#dining_time');
    $('.RequestFormBtn').on('click', function () {

        var restaurantsData = $(this).data('restaurants');
        var restaurantsArray = restaurantsData.split(',');

        var alltimedata1 = $(this).data('alltime');
        var allTime1Array = alltimedata1.split(';');

        var alltimedata2 = $(this).data('alltime2');
        var alltimeArray2 = alltimedata2.split(';');

        var phoneData = $(this).data('phone');
        var phonesArray = phoneData.split(',');

         hotelData = $(this).data('hotelname');

        var selectedrestraunt = $(this).data('selname');

        var timeData = $(this).data('time');
        var time2Data = $(this).data('time2');

        var timesarray = timeData.split(',');
        var times2array = time2Data.split(',');       

        dropdown.removeClass('has-value');
        dropdown.empty();
        dropdowntime.removeClass('has-value');
        dropdowntime.empty();
        $.each(restaurantsArray, function (index, restaurant) {
            var option = $('<option>', { value: restaurant, text: restaurant });
            if (restaurant === selectedrestraunt) {
                option.attr('selected', true);
                dropdown.addClass('has-value');
                dropdowndiv.text(selectedrestraunt);
            }
            option.attr('data-all-time', allTime1Array[index]);
            option.attr('data-all-time2', alltimeArray2[index]);
            dropdown.append(option);

        });
        if (dropdowntime.length > 0) {

            dropdowntime.append($('<option>', { value: '', text: 'Select Time' }));

            if (timesarray.length > 0 && timesarray.some(time => time.trim() !== "")) {
                $.each(timesarray, function (index, time) {
                    if (time.trim() !== "") {
                        var option = $('<option>', { value: time.toLowerCase(), text: time.toLowerCase() });
                        dropdowntime.append(option);
                    }
                });
            }

            if (times2array.length > 0 && times2array.some(time => time.trim() !== "")) {
                $.each(times2array, function (index, time) {
                    if (time.trim() !== "") {
                        var option = $('<option>', { value: time.toLowerCase(), text: time.toLowerCase() });
                        dropdowntime.append(option);
                    }
                });
            }

        }





        if (phonesArray.length > 0) {
            var phoneMessage = "For booking of more than 8 guests or reservation request with in the next 24 hours, please call ";
            phoneMessage += hotelData + " directly on ";
            $.each(phonesArray, function (index, phone) {
                phoneMessage += "<a href='tel:" + phone.trim() + "'>" + phone.trim() + "</a>";
                if (index < phonesArray.length - 1) {
                    phoneMessage += " or ";
                }
            });

            message.html(phoneMessage);
        }
    });
    $('#restaurant_name').on('change', function () {

        var selectedRestaurant = $(this).val();
      
        var selectedOption = $(this).find('option:selected');
        var allTimeData = selectedOption.data('all-time');
       
        var allTimeData2 = selectedOption.data('all-time2');

        var timeSlots = allTimeData.split(',');
        var timeSlots2 = allTimeData2.split(',');
       
        dropdowntime.removeClass('has-value');
        dropdowntime.empty();
        $("#diningdiv_time").empty()
        if (dropdowntime.length > 0) {
            dropdowntime.append($('<option>', { value: '', text: 'Select Time' }));
            if (timeSlots.length > 0 && timeSlots.some(time1 => time1.trim() !== "")) {
                $.each(timeSlots, function (index, timeSlot) {
                    dropdowntime.append($('<option>', {
                        value: timeSlot,
                        text: timeSlot
                    }));
                });
            }
            if (timeSlots2.length > 0 && timeSlots2.some(time2 => time2.trim() !== "")) {
                $.each(timeSlots2, function (index, timeSlot) {
                    dropdowntime.append($('<option>', {
                        value: timeSlot,
                        text: timeSlot
                    }));
                });
            }
        }



    });
}

$(function () {
    refreshdiningCaptcha();
    fnPrefieldSelectBoxOnbutttonClick();
})

function fnDiningform() {
    $('.error-msg').hide();
    console.log("_hotelcode---" + globalHotelCode);
    console.log(hotelData);
    var hotelcode = globalHotelCode;
    var hndlrurl = "/handlers/rev/dining.ashx";
    var currPageurl = window.location.pathname;

    var postData = {
        "hotel_name": hotelData,
        "restaurant_name": $("#restaurant_name").val(),
        "noofguest": $("#no_of_guest").val(),
        "dining_date": $("#Revdatepicker").val(),
        "dining_time": $("#dining_time").val(),
        "title": $("#txt_title").val(),
        "firstName": $("#txtfirst_name").val(),
        "lastName": $("#txtlast_name").val(),
        "emailId": $("#txt_email").val(),
        "ddlCountryCode": $("#ddlcountrycode").val(),
        "mobileNumber": $("#txt_mobile").val(),
        "message": $("#txt_message").val(),
        "txtCaptchaPassword": $("#txt_captchapassword").val(),
        "hotel_code": hotelcode,
        "pageUrl": currPageurl,
        "utm_source": getParameterByName("utm_source"),
        "utm_medium": getParameterByName("utm_medium"),
        "utm_campaign": getParameterByName("utm_campaign"),
        "utm_content": getParameterByName("utm_content"),
        "utm_keyword": getParameterByName("utm_keyword"),
        "referer_querystring": getParameterByName("referer_querystring"),
    }
    $.ajax({
        async: true,
        url: hndlrurl,
        type: "post",
        data: postData,
        success: function (result) {
            // console.log(result);
            if (result.IsRequestSuccessfull) {

                var form = document.getElementById("diningForm");
                form.reset();
                $('#requestForm-box').hide();
                $('#RequestFromThanks-box').show();
                if ($("#RequestFromThanks-box").css("display") == "block") {
                    $(".requestReservationForm-container").addClass("activeC");
                  }
                $("html,body").animate({
                    scrollTop: $(".requestReservationForm-container").offset().top - 150
                }, 100);
                fnBlankdining();
                refreshdiningCaptcha();

            }
            else {

                errorMessage = result.error_message.split('.');
                errorFields = result.error_field.split('.');
                // console.log(errorFields)
                for (var i = 0; i < errorFields.length; i++) {
                    if (errorFields[i] != "") {
                        $("#" + errorFields[i] + "_err").html(errorMessage[i]).show();
                        if (i === 0) {
                            $("#" + errorFields[i]).focus();
                        }
                    }
                }



            }
        },
        error: function () { console.log("There is some issue in system. Please try again later."); },
        //beforeSend: function () { $("#btnshowdiningsubmit").show(); $("#btndiningsubmit").hide(); },
        //complete: function () { $("#btnshowdiningsubmit").hide(); $("#btndiningsubmit").show(); }
        beforeSend: function () {
            $("#btnshowdiningsubmit").addClass('loading');
            $("#btndiningsubmit").hide();
            $("#btnshowdiningsubmit").show();
        },
        complete: function () {
            $("#btnshowdiningsubmit").removeClass('loading');
            $("#btndiningsubmit").show();
            $("#btnshowdiningsubmit").hide();
        }
    });
}
function fnBlankdining() {
    $("#restaurant_name").val("");
    $("#no_of_guest").val("");
    $("#Revdatepicker").val("");
    $("#dining_time").val("");
    $("#txt_title").val("");
    $("#txtfirst_name").val("");
    $("#txtlast_name").val("");
    $("#txt_email").val("");
    $("#ddlcountrycode").val("");
    $("#txt_mobile").val("");
    $("#txt_message").val("");
    $("#txt_captchapassword").val("");
    $(".selectCountryCodeValDisplay").text("");
    $("#no_of_guest").removeClass('has-value');
    $("#Revdatepicker").removeClass('has-value');
    $("#dining_time").removeClass('has-value');
    $("#txt_title").removeClass('has-value');
    $("#txtfirst_name").removeClass('has-value');
    $("#txtlast_name").removeClass('has-value');
    $("#txt_email").removeClass('has-value');
    $("#ddlcountrycode").removeClass('has-value');
    $("#txt_mobile").removeClass('has-value');
}
// This is only use for sukh vilas kanan Resturant only selected date is Sunday 
$("#Revdatepicker").datepicker({
    onSelect: function (dateText) {
        console.log("Selected date: " + dateText + "; input's current value: " + this.value);
        $(this).change();
    }
}).on("change", function () {
    var date = $(this).datepicker('getDate');
    var dayOfWeek = date.getUTCDay();

    var e = document.getElementById("restaurant_name");
    var value = e.value;
    selectValues = { "12:30 pm": "12:30 pm", "1:00 pm": "1:00 pm", "1:30 pm": "1:30 pm", "2:00 pm": "2:00 pm", "2:30 pm": "2:30 pm", "7:00 pm": "7:00 pm", "7:30 pm": "7:30 pm", "8:00 pm": "8:00 pm", "8:30 pm": "8:30 pm", "9:00 pm": "9:00 pm", "9:30 pm": "9:30 pm" };
    if (value == "Kaanan") {
        
        if (dayOfWeek == 6 || dayOfWeek == 7) {
            var optionValues = [];
            $.each(selectValues, function (key, value) {
                $('#dining_time  option').each(function () {
                    if (this.value == value) {
                        $(this).remove()
                    }
                });
            });          
            $.each(selectValues, function (key, value) {
                $('#dining_time')
                    .append($("<option></option>")
                        .attr("value", key)
                        .text(value));
            });
            $('#dining_time option').each(function () {
                if ($.inArray(this.value, optionValues) > -1) {
                    $(this).remove()
                } else {
                    optionValues.push(this.value);
                }
            });
           
        }
        else {
            selectValues2 = { "12:30 pm": "12:30 pm", "1:00 pm": "1:00 pm", "1:30 pm": "1:30 pm", "2:00 pm": "2:00 pm", "2:30 pm": "2:30 pm" };
            $.each(selectValues2, function (key, value) {
                $('#dining_time  option').each(function () {
                    if (this.value == value) {
                        $(this).remove()
                    }
                });
            });

        }
        }
});


