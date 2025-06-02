function fnfeedback() {
    $(".error-msg").html("").hide();

    var filedata = document.getElementById("addmyfile");

    var hndlrurl = "/handlers/rev/feedback-Form.ashx";

    var formData = new FormData();
    formData.append("title", $("#fb_title").val());
    formData.append("firstName", $("#fb_firstname").val());
    formData.append("lastName", $("#fb_lastname").val());
    formData.append("emailId", $("#fb_email").val());
    formData.append("countryCode", $("#fb_country option:selected").text());
    formData.append("mobileNumber", $("#fb_phone").val());
    formData.append("raiseconcern", $("#fb_concern option:selected").text());
    if (filedata && filedata.files.length > 0) {
        formData.append("addmyfile", filedata.files[0]);
        imageName = filedata.files[0].name;

    }

    $.ajax({
        async: true,
        url: hndlrurl,
        type: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (result) {
            console.log(result);
            if (result.status) {
                $("#feedback-Thanks").show();
                $("#form-feedback").hide();
                clearfieldVal();

            } else {

                errorMessage = result.error_message.split('.');
                errorFields = result.error_field.split('.');
                // console.log(errorFields)
                for (var i = 0; i < errorFields.length; i++) {
                    if (errorFields[i] != "") {
                        $("#" + errorFields[i] + "_err").html(errorMessage[i]).show();
                        $("#" + errorFields[i]).focus();
                    }
                }
            }

        },
        error: function () { console.log("There is some issue in system. Please try again later."); },


        beforeSend: function () {
            $("#btnshowfeedbacksubmit").addClass('loading');
            $("#btnfeedbacksubmit").hide();
            $("#btnshowfeedbacksubmit").show();
        },
        complete: function () {
            $("#btnshowfeedbacksubmit").removeClass('loading');
            $("#btnfeedbacksubmit").show();
            $("#btnshowfeedbacksubmit").hide();
        }
    });

}
$(function () {
    $("#addmyfile").change(function () {

        var imageTemplate = "<li class=\"image-text-block-style1 global11111111\">\n <div class=\"image-block\">\n \n <img src=\"$$imgSrc$$\"\n />\n \n </div>\n <div class=\"text-block\">\n <div class=\"featured-hdng text-block-hdng-style1 delivery-hotels\">$$$imgName$$</div>\n </div>\n </li>";
        var finalImageString = "";
        for (var i = 0; i < this.files.length; i++) {
            finalImageString += imageTemplate.replace('$$imgSrc$$', URL.createObjectURL(this.files[i])).replace('$$$imgName$$', this.files[i].name);
        }
        $('.filter-component').show();
        $('.filter-results-list').html(finalImageString);
    });
});

function clearfieldVal() {
    $("#fb_firstname").val("");
    $("#fb_lastname").val("");
    $("#fb_email").val("");
    $("#fb_country").val("");
    $("#fb_phone").val("");
    $("#fb_concern").val();
    $("#addmyfile").val("");

}