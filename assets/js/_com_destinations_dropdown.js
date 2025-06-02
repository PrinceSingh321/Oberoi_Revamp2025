function fndestinationsdropdown(){
    $('.detail-downarrow').click(function() {
        // Toggle the active class and slide toggle the current element
        $(this).toggleClass('active');
        $(this).next(".destination-detailBox").slideToggle();
    
        // Find sibling li elements and remove the active class from their detail-downarrow elements
        // Also slide up their destination-detailBox elements
        $(this).closest('li').siblings('li').find('.detail-downarrow.active').removeClass('active').next(".destination-detailBox").slideUp();
    });
}