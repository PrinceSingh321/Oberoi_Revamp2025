// JavaScript Document
function desinationCarousel() {
	/*$('.destination-slider').slick({
		arrows:true,
		
		slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		
	});*/
	
	$(".mo-oberoi-destination-tab-details-wrap .destination-slider, .exotic-vacation .destination-slider").slick({
		infinite: true,
		centerMode: true,
		lazyLoad:'ondemand',
		centerPadding: '15%',
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
			   centerMode: false,
			   arrows: false,
		        }
		    }
		  ]
	});
	
$('.mo-oberoi-destination-tab-details-wrap .destination-slider, .exotic-vacation .destination-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var sel = $(this).find('.slick-active.destination-slide').attr('data-country');
	//console.log(sel);
	$('.mo-oberoi-destination-tab-details-wrap .countryList li, .exotic-vacation .countryList li').removeClass('activec');
	$('.mo-oberoi-destination-tab-details-wrap .countryList li[data-filter='+sel+'], .exotic-vacation .countryList li[data-filter='+sel+']').addClass('activec');

	$(".mo-oberoi-destination-tab-details-wrap .selectedCountry, .exotic-vacation .selectedCountry").text(sel);
    
	fnAssignDataSrcToSrc();
});
	//$(".destination-slider").slick("slickFilter",".india");

/*$(".destinationTab li").on("click", function(){
	$(".destinationTab li").removeClass("active");
	  $(this).addClass("active");
        var fItem =$(".destinationTab ul li").attr("data-filter");
		//alert(fItem)

 //$(".destination-slider").slick("slickUnfilter");
 //$(".destination-slider").slick("slickFilter","."+ fItem+"");
		//$(".destination-slider").slick("slickUnfilter");
	    //$(".destination-slider").slick("slickFilter","."+ fItem+"");
	});*/
	


	
	
var winWidth = $(window).width();

if(winWidth<768){	
	$(".mo-oberoi-destination-tab-details-wrap .selectedCountry, .exotic-vacation .selectedCountry").click(function(){
		$(".mo-oberoi-destination-tab-details-wrap .countryList, .exotic-vacation .countryList").toggle();
		setTimeout(function(){
			$(window).scroll();
		},50)
	});

	$(".mo-oberoi-destination-tab-details-wrap .countryList li, .exotic-vacation .countryList li").click(function(){
		var countryValue = $(this).attr("data-filter");
		$('#countryFilter').attr("data-filter", countryValue);
		$(".mo-oberoi-destination-tab-details-wrap .selectedCountry, .exotic-vacation .selectedCountry").text($(this).text());
	
	});	
	
	$(document).click(function(event){
		$(".mo-oberoi-destination-tab-details-wrap .countryList, .exotic-vacation .countryList").hide();
	});	
	$(".mo-oberoi-destination-tab-details-wrap .selectedCountry, .exotic-vacation .selectedCountry").click(function(event){
		event.stopPropagation();
	});	
}
}


	
	function goToSlide(num)
	{
		$('.mo-oberoi-destination-tab-details-wrap .destination-slider, .exotic-vacation .destination-slider').slick('slickGoTo', num);
		$('.mo-oberoi-destination-tab-details-wrap .countryList  li, .exotic-vacation .countryList  li').removeClass('active');
		$('this').addClass('active');
	}

	$(".mo-oberoi-destination-tab-details-wrap .countryList li, .exotic-vacation .countryList li").click(function(){
	  $('.mo-oberoi-destination-tab-details-wrap .countryList li, .exotic-vacation .countryList li').removeClass('activec');
	  $(this).addClass('activec');
});

$(window).load(function(){
$('.mo-oberoi-destination-tab-details-wrap .slidesText p, .exotic-vacation .slidesText p').each(function(){
var hi =	$(this).height();
	
	//console.log(hi);
	if(hi<=25)
		{
			$(this).parent().parent('.text-container').children('.slidesBtn').addClass('singleLine');
		}
	
});	
	
});

$(document).ready(function(){

	setTimeout(function(){
		$(".destination .destinationTab li.activec").click();
	},100);	

	if($(window).width() < 1199){
		$(".destination-component .destination-component-col1").insertBefore(".destination-component .destination-component-col2");
	}

	});


	
	

	