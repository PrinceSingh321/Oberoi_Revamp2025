function fncountrydropdown(){
    if (screen.width > 1024) {
    $(".country-dropdownMain > li.hasdropdown ").off().click(function(event) {
        event.stopPropagation();
        event.preventDefault();    
        $(this).toggleClass('hasdrop');     
        $(this).siblings("li").removeClass('hasdrop active');  
        $(".country-dropdown").not($(this).find(".country-dropdown")).slideUp(); 
        $(this).find(".country-dropdown").slideToggle();
    });
    $(".country-dropdownMain > li").not(".hasdropdown").click(function(event) {
        $(this).siblings("li").removeClass('hasdrop active');   
        $(".country-dropdown").slideUp();
    });
    }
    else{
        $(".country-dropdownMain > li.hasdropdown").off().click(function(event) {
            event.stopPropagation(); 
            event.preventDefault(); 
            $(this).toggleClass('hasdrop');
            $(this).siblings("li").removeClass('hasdrop active');
            $(".country-dropdown").not($(this).find(".country-dropdown")).slideUp();
            $(this).find(".country-dropdown").slideToggle();
            if ($(this).hasClass('hasdrop')) {
                setTimeout(function () {
                    $(".countryscroll").css("overflow-x", "initial");
                }, 10);
            } else {
                setTimeout(function () {
                    $(".countryscroll").css("overflow-x", "scroll");
                }, 300);
            }
        }); 
        $(".country-dropdownMain > li").not(".hasdropdown").click(function(event) {
            $(this).siblings("li").removeClass('hasdrop active');
            $(".country-dropdown").slideUp();
            setTimeout(function () {
                $(".countryscroll").css("overflow-x", "scroll");
            }, 300);
        });
    }

}




