function fnsustaindropdown(){
$("#showsustain").click(function(){
    $(this).toggleClass("pop-active");
    $("#mapArea").slideUp(300);
    $("#showMap").removeClass('map-opened');
    $("#sustain-main").slideToggle(300);
    if($(this).hasClass("pop-active")){
		$('html,body').animate({
			scrollTop: $('.showdetail').offset().top - 160
		}, 600);
	}
    else{
        $('html,body').animate({
			scrollTop: $('.showdetail').offset().top 
		}, 600); 
    }
   
});

$(".popbtn #showMap").click(function(){
    $("#sustain-main").slideUp(300);
    $("#showsustain").removeClass('pop-active');
    
})

}

