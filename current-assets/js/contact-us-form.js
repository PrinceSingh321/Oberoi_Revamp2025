


$(function () {

	$('#tollFreeCountry').on('change', function() {

        $('.toll-free-no').removeClass("zone-country");
 	  var ph1= this.value;		
		var arr = ph1.split(';');
	
        if (ph1.indexOf("country-china") != -1) {
            if (arr.length >= 2) {
                $('.toll-free-no').addClass("zone-country");
                $('.toll-free-no').html("<span class='ddl-toll-free-number'>Northern China : </span><a href='tel:" + arr[1] + "'>" + arr[1] + "</a><br/><span class='ddl-toll-free-number'>Southern China : </span><a href='tel:" + arr[2] + "'>" + arr[2] + "</a>");
            }

        }
        else {
            if (arr[2] != undefined) {
                $('.toll-free-no').html("<a href='tel:" + arr[0] + "'>" + arr[0] + "</a> <a href='tel:" + arr[1] + "'>" + arr[1] + "</a> <a href='tel:" + arr[2] + "'>" + arr[2] + "</a>");
            }

            else if (arr[1] != undefined) {
                $('.toll-free-no').html("<a href='tel:" + arr[0] + "'>" + arr[0] + "</a> <a href='tel:" + arr[1] + "'>" + arr[1] + "</a>");
            }
            else {
                $('.toll-free-no').html("<a href='tel:" + this.value + "'>" + this.value + "</a>");
            }
        }
});
	
	
	
	$(".queries-btn label").click(function(){
		$(".queries-btn label").removeClass("active");
		$(this).addClass("active");
		});
	
		
    $(".other-queries").click(function () {
        $(".error-message").html("");
        $(".other-queries-field").show();
        $(".divContactUsAllHotels").hide();
        
		});	
    $(".reservation-queries").click(function () {
        $(".error-message").html("");
        $(".other-queries-field").hide();
        $(".divContactUsAllHotels").show();
    });	

    reloadContactUsPageCaptchaImage();
});



//FORM SUBMITTION LOGIC

        function reloadContactUsPageCaptchaImage() {
            $(".captcha").attr("src", "/handlers/captcha.ashx?id=" + moment());
        }

        $(".btn-reset-contact-us").click(function () {   

            var tempQueryType = "";
            var _currFormId = $(this).closest('form').attr('id');
            tempQueryType = $('#' + _currFormId + ' input[name=querytype]:checked').val();                      

            $(".error-message").html("");
            $("#" + _currFormId)[0].reset();

            //This piece of code is to maintain querytype radio button afetr resetting form.
            if (tempQueryType == "other-queries") {
                $('#' + _currFormId + ' input[value="other-queries"]').attr('checked', true);
                $('#' + _currFormId + ' input[value="reservation-queries"]').attr('checked', false);
                $('#' + _currFormId + ' .reservation-queries').removeClass("active");
                $('#' + _currFormId + ' .other-queries').addClass("active");
            }
            else {
                $('#' + _currFormId + ' input[value="other-queries"]').attr('checked', false);
                $('#' + _currFormId + ' input[value="reservation-queries"]').attr('checked', true);
                $('#' + _currFormId + ' .reservation-queries').addClass("active");
                $('#' + _currFormId + ' .other-queries').removeClass("active");
            }

        });


        $(".btn-contact-us").click(function () {
          
            $(".contactusThanksmsg").appendTo($(this).parents("li").find(".contact-us-form"));
            var _currFormId = $(this).closest('form').attr('id');
            var errorMessage = [];
            var errorFields = [];
            var formData = $("#" + _currFormId).serializeArray();
            formData.push({ name: "hotelnametext", value: $(".contactUsAllHotels option:selected").text() }); 
            $(".error-message").html("");

            $.ajax({
                dataType: "jsonp",
                url: "/handlers/form-contact-us.ashx",
                data: formData,
                type: "POST",
                async: false,
                success: function (result) {
                    result = JSON.parse(result);
                    if (result.status) {
                       // alert("Form Submitted Successfully");
                        //$("#contactForm1").html("Thank you for submitting enquiry with us.")

                         $("#contactForm1").hide();
                        $(".contactusThanksmsg").show();
                         $("#contactForm1").each(function(){
                                this.reset();
                            });
                       setTimeout (function(){
                           $("#contactForm1").show();
                           $(".contactusThanksmsg").hide();

                       },10000)   
                    }
                    else {
                        errorMessage = result.error_message.split('.');
                        errorFields = result.error_field.split('.');
                        console.log(errorMessage + "--" + errorFields);

                        for (var i = 0; i < errorFields.length; i++) {

                            if (errorFields[i] != "") {

                                $(".error-message").show();
                                if (errorFields[i] == "query") {
                                    $('#' + _currFormId + ' textarea[name="' + errorFields[i] + '"]').next("span").html(errorMessage[i]);
                                }
                                else if (errorFields[i] == "country" || errorFields[i] == "salutation" || errorFields[i] == "category" || errorFields[i] == "hotel") {
                                    $('#' + _currFormId + ' select[name="' + errorFields[i] + '"]').next("span").html(errorMessage[i]);
                                }
                                else {
                                    $('#' + _currFormId + ' input[name="' + errorFields[i] + '"]').next("span").html(errorMessage[i]);
                                }
                            }
                        }
                    }

                },
                error: function () {
                    alert("There has been an error on server. Please try after some time.");
                }
            });
        });