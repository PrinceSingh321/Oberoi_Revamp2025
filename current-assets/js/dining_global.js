var hotelData;
var hotelcode;
var hotelNameDining = "";
function refreshdiningCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("diningCaptchaImg");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}

$(function () {
    refreshdiningCaptcha()
    $('.btnRequestAProposal').on('click', function () {
        refreshdiningCaptcha();
        hotelcode = $(this).data('hotelcode');
        var restaurantsData = $(this).data('restaurants');

        $('#restaurant_name').val(restaurantsData);
        $('#restaurant_name').trigger('change');
        var alltimedata1 = $(this).data('alltime');
        var allTimeArray = alltimedata1.split(';');
        console.log(allTimeArray);
        $('#dining_time').empty();
        $('#dining_time').append('<option value="">Select Time</option>');

        allTimeArray.forEach(function (times) {

            var timesArray = times.trim().split(',');
            timesArray.forEach(function (time) {

                if (time !== '') {

                    $('#dining_time').append('<option value="' + time.trim() + '">' + time.trim() + '</option>');
                }
            });
        });
        var message = $('#booking_information');
        var phoneData = $(this).data('phone');
        var phonesArray = phoneData.split(',');
        console.log("phonesArray-" + phonesArray);
         hotelData = $(this).data('hotelname');
        console.log("hotelName-" + hotelData);
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
        

       

        $('#dining_time').trigger('change');
    });
})

function fnDiningform() {
    $('.error-msg').hide();

    
    var hndlrurl = "/handlers/rev/dining-global.ashx";
    var currPageurl = window.location.pathname;

    var postData = {       
        "hotel_name": $("#restaurant_name").text(),
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
$('.openDiningForm').on('click', function (event) {
    var requestHotelName = $(this).attr("data-hotelnamecityfirst");
    let requestName = $(this).attr("data-restaurants");
    $("#diningForm .hasSubHotel li").each(function () {
        if ($(this).find("span").text().trim().toLowerCase() == requestHotelName.toLowerCase()) {
            $(this).find("span").click();
        }
    })
    //const msgChangeHotelwise = document.getElementById("booking_information");
    //msgChangeHotelwise.innerHTML = "Hello, World!";
    
    var _currFormId =  $(this).closest('form').attr('id');
    var hotelNameOnDropDownClick = "";
    hotelNameOnDropDownClick = event.target.innerHTML;
    var addSpaSubCategory = document.getElementById("diningForm").elements["no_of_resturant"];
    $("#" + _currFormId).find('#no_of_resturant').find('option').remove().end();
    $("#" + _currFormId).find('#no_of_resturant').find('option').remove().end().append('<option value="">Select Resturant*</option>');
    for (var i = 0; i < glblDiningData.length; i++) {
        if (hotelNameOnDropDownClick.trim() == glblDiningData[i]["HotelName"].trim()) {

            addSpaSubCategory.innerHTML = addSpaSubCategory.innerHTML +
                '<option value="' + glblDiningData[i]["CategoryItemName"] + '">' + glblDiningData[i]["CategoryItemName"] + '</option>';

        }
    }
    fnremoveduplicateDining();
    // User Default select restaurant
    $('#no_of_resturant').find('option').each(function (i, e) {
        if ($(e).val().toUpperCase() == requestName.toUpperCase()) {
            $('#no_of_resturant').prop('selectedIndex', i);
        }
    });
});

$('.hasSubHotel ul li').on('click', function (event) {
    var _currFormId = $(this).closest('form').attr('id');
    var hotelNameOnDropDownClick = "";
    hotelNameOnDropDownClick = event.target.innerHTML;
    var addSpaSubCategory = document.getElementById(_currFormId).elements["no_of_resturant"];
    $("#" + _currFormId).find('#no_of_resturant').find('option').remove().end();
    $("#" + _currFormId).find('#no_of_resturant').find('option').remove().end().append('<option value="">Select Resturant*</option>');  
    for (var i = 0; i < glblDiningData.length; i++) {
        if (hotelNameOnDropDownClick.trim() == glblDiningData[i]["HotelName"].trim()) {
            hotelNameDining = hotelNameOnDropDownClick;
            addSpaSubCategory.innerHTML = addSpaSubCategory.innerHTML +
                '<option value="' + glblDiningData[i]["CategoryItemName"] + '">' + glblDiningData[i]["CategoryItemName"] + '</option>';
            let hotelName = hotelNameDining;
            let hotelNamePhone = glblDiningData[i]["phone"].split(',');
            fnbindHotellabelmsg(hotelName, hotelNamePhone)
        }
    }
    fnremoveduplicateDining();
});

$('#diningForm #no_of_resturant').on('change', function () {
    var _currFormId = "diningForm";// $(this).closest('form').attr('id');
    var addSpaSubCategory = document.getElementById("diningForm").elements["dining_time"]; //document.getElementById('spanameglobal');

    $("#" + _currFormId).find('#dining_time').find('option').remove().end();

    $("#diningForm").find('#dining_time').find('option').remove().end().append('<option value="">Select Time</option>');

    for (var i = 0; i < glblDiningData.length; i++) { 
        if (hotelNameDining == glblDiningData[i]["HotelName"]) {
            if ($(this).val() == glblDiningData[i]["CategoryItemName"]) {
                let hotelName =  glblDiningData[i]["HotelName"];
                let hotelNamePhone =  glblDiningData[i]["phone"].split(',');
                fnbindHotellabelmsg(hotelName, hotelNamePhone)
                var dropdowntime = $('#dining_time');
                var alltimedata1 = glblDiningData[i]["time"];
                var timesarray = alltimedata1.split(',');
                if (timesarray.length > 0 && timesarray.some(time => time.trim() !== "")) {
                    $.each(timesarray, function (index, time) {
                        if (time.trim() !== "") {
                            var option = $('<option>', { value: time.toLowerCase(), text: time.toLowerCase() });
                            dropdowntime.append(option);
                        }
                    });
                }

                break;
            }
        }
    }
});
function fnbindHotellabelmsg(hotelnamelocal, hotelNamePhone1) {
    let hotelName = hotelnamelocal;// glblDiningData[i]["HotelName"];
    let hotelNamePhone = hotelNamePhone1;  // glblDiningData[i]["phone"].split(',');
    var phoneMessage = "For booking of more than 8 guests or reservation request with in the next 24 hours, please call ";
    if (hotelNamePhone == "") {
        phoneMessage += hotelName + "";
    }
    else { phoneMessage += hotelName + " directly on "; }
    
   
    $.each(hotelNamePhone, function (index, phone) {
        phoneMessage += "<a href='tel:" + phone.trim() + "'>" + phone.trim() + "</a>";
        if (index < hotelNamePhone.length - 1) {
            phoneMessage += " or ";
        }
    });
    const msgChangeHotelwise = document.getElementById("booking_information");;
    msgChangeHotelwise.innerHTML = phoneMessage;

}
function fnremoveduplicateDining() {
    var optionValues = [];
    $('#no_of_resturant option').each(function () {
        if ($.inArray(this.value, optionValues) > -1) {
            $(this).remove()
        } else {
            optionValues.push(this.value);
        }
    });  
}
