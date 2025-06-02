function email_subscription() {
    $(".errorMsg").hide();
    var hndlrurl = "/handlers/rev/subscription-news-letters.ashx";
    var postData = {
        "newsLetterUserEmail": $("#newsLetterUserEmail").val(),       
    }

    $.ajax({
        async: true,
        url: hndlrurl,
        type: "post",
        data: postData,
        success: function (result) {
            result = JSON.parse(result);
            if (result.status) {
                console.log(result);
                if (result.isduplicate) {
                    $(".newsLetterErrorMessage").html(result.error_message);
                    $(".newsLetterErrorMessage").show();
                }
                else {
                    $("#formNewsLetter")[0].reset();
                    $(".newsLetterSuccessMessage").html(result.error_message);
                    $(".newsLetterSuccessMessage").show();
                    setTimeout(function () {
                        $(".newsLetterSuccessMessage").hide();
                    }, 5000);
                }
            }
            else {
                $(".newsLetterErrorMessage").html(result.error_message);
                $(".newsLetterErrorMessage").show();
            }
        },
        error: function () {
            alert("There has been an error on server. Please try after some time.");
        },
        beforeSend: function () {
            $("#btnNewsshowLetter").addClass('loading');
            $("#btnNewsLetter").hide();
            $("#btnNewsshowLetter").show();
        },
        complete: function () {
            $("#btnNewsshowLetter").removeClass('loading');
            $("#btnNewsLetter").show();
            $("#btnNewsshowLetter").hide();
        }
    });


}