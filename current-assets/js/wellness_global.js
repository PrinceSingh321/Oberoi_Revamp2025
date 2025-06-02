$(document).ready(function () {

    $(".hotels-name-box").show();
    $(".hotels-name-box2").hide();
    $('#spacategoryglobal').find('option').remove().end().append('<option value="">Select Category</option>');

    $('#spa_formInner #spacategoryglobal').on('change', function () {
        var _currFormId = $(this).closest('form').attr('id');
        var addSpaSubCategory = document.getElementById(_currFormId).elements["spanameglobal"]; //document.getElementById('spanameglobal');

        $("#" + _currFormId).find('#spanameglobal').find('option').remove().end();

        $("#" + _currFormId).find('#spanameglobal').find('option').remove().end().append('<option value="">Select Sub Category</option>');

        for (var i = 0; i < glblspaAppointmentData.length; i++) {
            if ($(this).val() == glblspaAppointmentData[i]["SpaCategoryItemName"]) {
                //$('#spanameglobal').find('option').remove().end()
                //    .append('<option value="">' + glblspaAppointmentData11[i]["SpaCategoryItemName"] + '</option>');
                $("#" + _currFormId).find('#spanameglobal').find('option').remove().end();

                $("#" + _currFormId).find('#spanameglobal').find('option').remove().end().append('<option value="">Select Sub Category</option>');

                for (var j = 0; j < glblspaAppointmentData[i]["SpaSubCategoryItem"].length; j++) {
                    addSpaSubCategory.innerHTML = addSpaSubCategory.innerHTML +
                        '<option value="' + glblspaAppointmentData[i]["SpaSubCategoryItem"][j]["SubCategoryName"] + '">' + glblspaAppointmentData[i]["SpaSubCategoryItem"][j]["SubCategoryName"] + '</option>';
                }
            }
        }
    });
    $('#spa_form #spacategoryglobal').on('change', function () {
        var _currFormId = $(this).closest('form').attr('id');
        var addSpaSubCategory = document.getElementById(_currFormId).elements["spanameglobal"]; //document.getElementById('spanameglobal');

        $("#" + _currFormId).find('#spanameglobal').find('option').remove().end();

        $("#" + _currFormId).find('#spanameglobal').find('option').remove().end().append('<option value="">Select Sub Category</option>');

        for (var i = 0; i < glblspaAppointmentData.length; i++) {
            if ($(this).val() == glblspaAppointmentData[i]["SpaCategoryItemName"]) {
                //$('#spanameglobal').find('option').remove().end()
                //    .append('<option value="">' + glblspaAppointmentData11[i]["SpaCategoryItemName"] + '</option>');
                $("#" + _currFormId).find('#spanameglobal').find('option').remove().end();

                $("#" + _currFormId).find('#spanameglobal').find('option').remove().end().append('<option value="">Select Sub Category</option>');

                for (var j = 0; j < glblspaAppointmentData[i]["SpaSubCategoryItem"].length; j++) {
                    addSpaSubCategory.innerHTML = addSpaSubCategory.innerHTML +
                        '<option value="' + glblspaAppointmentData[i]["SpaSubCategoryItem"][j]["SubCategoryName"] + '">' + glblspaAppointmentData[i]["SpaSubCategoryItem"][j]["SubCategoryName"] + '</option>';
                }
            }
        }
    });

    //$('#spaname').find('option').remove().end()

    $(".wellnes-book-now-button").click(function () {
        $('#hdnFormType').val("global");

    });


    $('.hasSubHotel ul li').on('click', function (event) {

        var _currFormId = $(this).closest('form').attr('id');
        var hotelNameOnDropDownClick = "";
        hotelNameOnDropDownClick = event.target.innerHTML;
        var addSpaSubCategory = document.getElementById(_currFormId).elements["spacategoryglobal"];
        $("#" + _currFormId).find('#spacategoryglobal').find('option').remove().end();
        $("#" + _currFormId).find('#spacategoryglobal').find('option').remove().end().append('<option value="">Select Category</option>');
        $("#" + _currFormId).find('#spanameglobal').find('option').remove().end().append('<option value="">Select Sub Category</option>');
        for (var i = 0; i < glblspaAppointmentData.length; i++) {
            if (hotelNameOnDropDownClick == glblspaAppointmentData[i]["HotelName"]) {

                //$('#spacategoryglobal').find('option').remove().end()
                //    .append('<option value="">' + glblspaAppointmentData11[i]["SpaCategoryItemName"] + '</option>');
                //for (var j = 0; j < glblspaAppointmentData11[i]["SpaSubCategoryItem"].length; j++) {
                addSpaSubCategory.innerHTML = addSpaSubCategory.innerHTML +
                    '<option value="' + glblspaAppointmentData[i]["SpaCategoryItemName"] + '">' + glblspaAppointmentData[i]["SpaCategoryItemName"] + '</option>';
                //}
            }
        }
    });

});

function refreshspaCaptcha() {

    var timestamp = new Date().getTime();

    var captchaImage = document.getElementById("captchaImage");
    captchaImage.src = "/handlers/captcha.ashx?timestamp=" + timestamp;
}
function refreshspaexpCaptcha() {

    var timestamps = new Date().getTime();

    var captchaImageExp = document.getElementById("captchaImageExp");
    captchaImageExp.src = "/handlers/captcha.ashx?timestamp=" + timestamps;
}


$(function () {
    refreshspaCaptcha();
    refreshspaexpCaptcha();
})


$(".submitFormBtnExp").click(function () {
    $('.processingBtn').addClass('processing');
    $('.error-msg').hide();
    var _currFormId = $(this).closest('form').attr('id');

    var formData = $("#" + _currFormId).serializeArray();
    var data = new FormData();
    //Form data
    data.append('type', "sendrequest");
    $.each(formData, function (key, input) {
        data.append(input.name, input.value);
    });
    var hotelnames = $('#hotelname').text();
    data.append('hotelname', hotelnames);
    fnUserSubmit(data, _currFormId);
});

$(".submitFormBtn").click(function () {

    $('.processingBtn').addClass('processing');
    $('.error-msg').hide();
    var _currFormId = $(this).closest('form').attr('id');
 
    var formData = $("#" + _currFormId).serializeArray();
    var data = new FormData();
    //Form data
    data.append('type', "sendrequest");
    $.each(formData, function (key, input) {
        data.append(input.name, input.value);
    });
    var hotelname = $('#hotelname').text();
    data.append('hotelname', hotelname);
    fnUserSubmit(data, _currFormId);
});
function fnUserSubmit(data, _currFormId) {

    $.ajax({
        url: "/handlers/rev/wellness-global.ashx",
        data: data,
        type: "POST",
        processData: false,
        contentType: false,
        success: function (result) {
            //result = JSON.parse(result);
            console.log(result);
            if (result.IsRequestSuccessfull) {
                
                var form = document.getElementById(_currFormId);
            
                form.reset();
                $(this).parents(".requestReservationForm-container").find('#requestForm-box').hide();
                $(this).parents(".requestReservationForm-container").find('#RequestFromThanks-box').show();
                $("html,body").animate({
                    scrollTop: $(".requestReservationForm-container").offset().top - 150
                }, 100);
                fnBlankwellness();
                refreshspaCaptcha();

            }
            else {

                errorMessage = result.error_message.split('.');
                errorFields = result.error_field.split('.');
                // console.log(errorFields)
                for (var i = 0; i < errorFields.length; i++) {
                    if (errorFields[i] != "") {
                        $("#" + _currFormId).find("#" + errorFields[i] + "_err").html(errorMessage[i]).show();
                        if (i === 0) {
                            $("#" + _currFormId).find(errorFields[i]).focus();
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
function fnglobalspaBookingform() {
    var hotel_name = getDestinationCountryTitle()
    console.log("hotel_name---" + hotel_name);
    $('.error-msg').hide();
    var hndlrurl = "/handlers/rev/wellness-global.ashx";
    var hotelcode = globalHotelCode;
    var currPageurl = window.location.pathname;
    var postData = {
        //"hotel_name": hotel_name,
        //"noofguest": $("#noofguest").val(),
        //"spa_date": $("#SpaDate").val(),
        //"spa_time": $("#SpaTime").val(),
        "Title": $("#Title").val(),
        "firstName": $("#firstName").val(),
        "lastName": $("#lastName").val(),
        "emailId": $("#emailId").val(),
        "ddlCountryCode": $("#ddlCountryCode_spa").val(),
        "mobileNumber": $("#mobileNumber").val(),
        "hotel_name": $("#hotelname").text(),
        "bookingid": $("#bookingid").val(),
        "category": $("#spacategoryglobal").val(),
        "subcategory": $("#spanameglobal").val(),
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
                refreshspaCaptcha();

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

