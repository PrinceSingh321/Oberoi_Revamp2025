function refreshCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("captchaImage");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}


$(function () {
    refreshCaptcha();
})
function fnspaBookingform() {
  var hotel_name=  getDestinationCountryTitle()
    console.log("hotel_name---" + hotel_name);
    $('.error-msg').hide();
    var hndlrurl = "/handlers/rev/spa-booking-form.ashx";
    var hotelcode = globalHotelCode;
    var currPageurl = window.location.pathname;
    var postData = {
        "hotel_name": hotel_name,
        "Title": $("#Title").val(),
        "firstName": $("#firstName").val(),
        "lastName": $("#lastName").val(),
        "emailId": $("#emailId").val(),
        "ddlCountryCode": $("#ddlCountryCode_spa").val(),
        "mobileNumber": $("#mobileNumber").val(),
        "spa_therapies": $("#spa_therapies").val(),
        "noofguest": $("#noofguest").val(),
        "reservationnumber": $("#reservationnumber").val(),
        "raiseconcern": $("#raiseconcern").val(),
        "txtCaptchaPassword": $("#CaptchaPassword").val(),
        "pageUrl": currPageurl,
        "utm_source": getParameterByName("utm_source"),
        "utm_medium": getParameterByName("utm_medium"),
        "utm_campaign": getParameterByName("utm_campaign"),
        "utm_content": getParameterByName("utm_content"),
        "utm_keyword": getParameterByName("utm_keyword"),
        "hotel_code": hotelcode,
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
                
                var form = document.getElementById("spa_form");
                form.reset();
                $('#requestForm-box').hide();
                $('#RequestFromThanks-box').show();
                $("html,body").animate({
                    scrollTop: $(".requestReservationForm-container").offset().top - 150
                }, 100);
                fnBlankwellness();
                refreshCaptcha();
               
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
       
        
         beforeSend: function () {
             $("#btnshowspasubmit").addClass('loading');
             $("#btnspasubmit").hide();
             $("#btnshowspasubmit").show();
        },
        complete: function () {
            $("#btnshowspasubmit").removeClass('loading');
            $("#btnspasubmit").show();
            $("#btnshowspasubmit").hide();
        }
    });
}
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
function fnBlankwellness() {
    $("#Title").val(""); 
    $("#firstName").val("");
    $("#lastName").val("");
    $("#emailId").val("");
    $("#ddlCountryCode_spa").val("");
    $("#mobileNumber").val("");
    $("#spa_therapies").val("");
    $("#noofguest").val("");
    $("#reservationnumber").val("");
    $("#raiseconcern").val("");
    $("#CaptchaPassword").val("");
    $(".selectCountryCodeValDisplay").text("");
    $("#Title").removeClass('has-value');
    $("#firstName").removeClass('has-value');
    $("#lastName").removeClass('has-value');
    $("#emailId").removeClass('has-value');
    $("#ddlCountryCode_spa").removeClass('has-value');
    $("#mobileNumber").removeClass('has-value');
    $("#spa_therapies").removeClass('has-value');
    $("#noofguest").removeClass('has-value');
    $("#reservationnumber").removeClass('has-value');
}

