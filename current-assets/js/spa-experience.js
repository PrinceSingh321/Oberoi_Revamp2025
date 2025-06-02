function refreshspa_experCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("spa_experience_captchaImage");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}


$(function () {
    refreshspa_experCaptcha();
   
})
function fnspaexperienceBookingform() {
   
    $('.error-msg').hide();
    var hndlrurl = "/handlers/rev/spa-experience.ashx";
    var hotelcode = globalHotelCode;
    var currPageurl = window.location.pathname;
    var postData = {     
        "noofguest": $("#spa_noofguest").val(),
        "spa_date": $("#SpaExDate").val(),
        "spa_time": $("#SpaExTime").val(),
        "Title": $("#spa_Title").val(),
        "firstName": $("#spa_firstName").val(),
        "lastName": $("#spa_lastName").val(),
        "hotel_name": $("#spa_experience_hotel").val(), 
        "emailId": $("#spa_emailId").val(),
        "ddlCountryCode": $("#countryCode_spa").val(),
        "mobileNumber": $("#phone").val(),
        "raiseconcern": $("#spa_raiseconcern").val(),
        "txtCaptchaPassword": $("#spa_CaptchaPassword").val(),
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

                var form = document.getElementById("spa_experienceform");
                form.reset();
                $('.requestForm-box').hide();
                $('#RequestSpaFromThanks').show();
                $("html,body").animate({
                    scrollTop: $(".requestReservationForm-container").offset().top - 150
                }, 100);
              
                refreshspa_experCaptcha();

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
            $("#btnshowspaexsubmit").addClass('loading');
            $("#btnspaexsubmit").hide();
            $("#btnshowspaexsubmit").show();
        },
        complete: function () {
            $("#btnshowspaexsubmit").removeClass('loading');
            $("#btnspaexsubmit").show();
            $("#btnshowspaexsubmit").hide();
        }
    });
}