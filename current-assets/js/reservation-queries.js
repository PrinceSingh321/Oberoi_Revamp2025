var queryType = "";
$(function () {
    fnrefreshCaptcha();
    $(".contact-us-tab").on("click", "li", function () {
        fnrefreshCaptcha();
        
        
    });
    $('#ddl_rq_hotel').change(function () {
        var selectedHotelName = $(this).find('option:selected').text();
        $('#hotel_name').text(selectedHotelName);
    });
   
   
})

function fnrefreshCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("reservationCaptchaImg");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}
function fnreservation() {
    queryType = $(".contact-us-tab li.active").data("tab-content");
    console.log("queryType", queryType);
    $(".error-msg").html("").hide();
   
    var hndlrurl = "/handlers/rev/form-contact-us.ashx";
    var postData = {
        "salutation": $("#salutation").val(),
        "firstname": $("#txt_rq_first_name").val(),
        "lastname": $("#txt_rq_last_name").val(),
        "hotel": $("#ddl_rq_hotel option:selected").text(),
        "email": $("#txt_rq_email").val(),
        "country_code": $("#ddl_rq_country_code option:selected").text(),
        "mobile": $("#txt_rq_mobile").val(),
        "query": $("#txt_rq_query").val(),
        "querytype": queryType,
        "captcha": $("#rq_CaptchaPassword").val(),
    }
    $.ajax({
        async: true,
        url: hndlrurl,
        type: "post",
        data: postData,
        success: function (result) {
            result = JSON.parse(result);
            if (result.status) {
                $("#reservation-thanks").show();
                $("#formreservation-queries").hide();
             
            }

            else {
                errorMessage = result.error_message.split('.');
                errorFields = result.error_field.split('.');
                 console.log(errorFields)
                for (var i = 0; i < errorFields.length; i++) {
                    if (errorFields[i] != "") {
                        $("#" + errorFields[i] + "_err").html(errorMessage[i]).show();
                        $("#" + errorFields[i]).focus();
                    }
                }
                console.log(result);
            }
        },
        error: function () { console.log("There is some issue in system. Please try again later."); },


        beforeSend: function () {
            $("#btnshowresverationsubmit").addClass('loading');
            $("#btnresverationsubmit").hide();
            $("#btnshowresverationsubmit").show();
        },
        complete: function () {
            $("#btnshowresverationsubmit").removeClass('loading');
            $("#btnresverationsubmit").show();
            $("#btnshowresverationsubmit").hide();
        }
    });
}
function fnclear(){
    $("#txt_rq_title").val('');
    $("#txt_rq_first_name").val('');
    $("#txt_rq_last_name").val('');
    $("#ddl_rq_hotel").val('');
    $("#txt_rq_email").val('');
    $("#ddl_rq_country_code").val('');
    $("#txt_rq_mobile").val('');
    $("#txt_rq_query").val('');
    $("#rq_CaptchaPassword").val('');
    $("#hotel_name").text("");
    $("#country_code_rq").text("");
    $("#rq_title").text("");
   

}