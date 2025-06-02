function refreshweddingeventCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("globaleventcaptcha");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}
$(function () {
    refreshweddingeventCaptcha();

})
function fnweddingeventform() {
    $('.error-msg').hide();
    var hotelcode = globalHotelCode;
    var hndlrurl = "/handlers/rev/wedding-event.ashx";
    var currPageurl = window.location.pathname;

    var postData = {


        "hotel": $("#hotelname").text(),
        "title": $("#txt_title").val(),
        "firstName": $("#txtfirst_name").val(),
        "lastName": $("#txtlast_name").val(),
        "noofguest": $("#txtattendence").val(),
        "emailId": $("#txtemail").val(),
        "ddlCountryCode": $("#ddl_country_code").val(),
        "mobileNumber": $("#txtmobile").val(),
        "message": $("#txtquery").val(),
        "txtCaptchaPassword": $("#txtcaptcha").val(),
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
            if (result.IsRequestSuccessfull) {

                var form = document.getElementById("wedEvent");
                form.reset();
                $('#weddingevent').hide();
                $('#weddingthanksevent').show();
                fnBlankdining();
                refreshweddingeventCaptcha();
                

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
            $("#btnsubmitwedshow").addClass('loading');
            $("#btnsubmitwed").hide();
            $("#btnsubmitwedshow").show();
        },
        complete: function () {
            $("#btnsubmitwedshow").removeClass('loading');
            $("#btnsubmitwed").show();
            $("#btnsubmitwedshow").hide();
        }
    });
}
function fnBlankdining() {


    $("#txt_title").val("");
    $("#txtfirst_name").val("");
    $("#txtlast_name").val("");
    $("#no_of_guest").val("");
    $("#txt_email").val("");
    $("#ddlcountrycode").val("");
    $("#txt_mobile").val("");
    $("#txt_message").val("");
    $("#txt_captchapassword").val("");
}