var queryType = "";
$(function () {
    fnOtherqueriesCaptcha();
    $(".contact-us-tab").on("click", "li", function () {
        fnOtherqueriesCaptcha();
       
    });
    $('#ddl_oth_country').change(function () {
        var selectedCountry = $("#ddl_oth_country option:selected").text();
        //   console.log("selectedCountry - " + selectedCountry);       
        $('#ddl_oth_country_code option').each(function () {
            var countryCodeOption = $(this);
            var countryCodeText = countryCodeOption.text();
            var countryCode = countryCodeText.split('+')[1];
            var countryName = countryCodeText.split('+')[0].trim();
            if (countryName == selectedCountry) {
                countryCodeOption.prop('selected', true);
                $('#country_code_oth').text(countryCode);
                $('#ddl_oth_country_code').addClass('has-value');
                console.log("Country Code for " + selectedCountry + ": " + countryCode);
            }

        })
    });

    $("#ddl_oth_country_code").change(function () {
        var selectedCountrycode = $("#ddl_oth_country_code option:selected").text();
        if (selectedCountrycode != "") {
            var selectedCountryWithoutNumbers = selectedCountrycode.replace("+1-", "").replace(/\d+/g, '').replace("+", "").trim();
             console.log(selectedCountryWithoutNumbers);
            $("#ddl_oth_country").val(selectedCountryWithoutNumbers);
            $('#oth_country').text(selectedCountryWithoutNumbers);
            $('#ddl_oth_country').addClass('has-value');
        }
    })

    
});

function fnOtherqueriesCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("oth_captchaImg");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}
function fnotherqueries() {
    queryType = $(".contact-us-tab li.active").data("tab-content");
    console.log("queryType", queryType);
    $(".error-msg").html("").hide();

    var hndlrurl = "/handlers/rev/form-other-queries.ashx";
    var postData = {
        "category": $("#ddl_oth_category option:selected").text(),
        "categorynum": $("#ddl_oth_category option:selected").val(),
        "salutation": $("#ddl_oth_title").val(),
        "firstname": $("#txt_oth_first_name").val(),
        "lastname": $("#txt_oth_lastname").val(),
        "email": $("#txt_oth_email").val(),
        "country": $("#ddl_oth_country option:selected").text(),
        "country_code": $("#ddl_oth_country_code option:selected").text(),
        "mobile": $("#txt_oth_phone").val(),
        "query": $("#txt_oth_query").val(),
        "querytype": queryType,
        "captcha": $("#txt_oth_captcha").val(),
    }
    $.ajax({
        async: true,
        url: hndlrurl,
        type: "post",
        data: postData,
        success: function (result) {
            result = JSON.parse(result);
            if (result.status) {
                $("#other-queriesThanks").show();
                $("#form_otherQueries").hide();
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
            $("#btnshowotherquerysubmit").addClass('loading');
            $("#btnotherquerysubmit").hide();
            $("#btnshowotherquerysubmit").show();
        },
        complete: function () {
            $("#btnshowotherquerysubmit").removeClass('loading');
            $("#btnotherquerysubmit").show();
            $("#btnshowotherquerysubmit").hide();
        }
    });
}
function fnclear() {
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