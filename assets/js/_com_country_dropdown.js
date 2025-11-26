function fncountrydropdown() {
  if (screen.width > 1024) {
    $(".country-dropdownMain > li.hasdropdown").off().click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(".country-dropdownMain > li.hasdropdown").removeClass("highlight");
        $(this).toggleClass("hasdrop");
        $(this).siblings("li.hasdropdown").removeClass("hasdrop");
        $(".country-dropdown").not($(this).find(".country-dropdown")).slideUp();
        $(this).find(".country-dropdown").slideToggle();
        var $this = $(this);
        $(this)
          .find(".country-dropdownColumn ul >li")
          .each(function (index, ele) {
            if ($(ele).hasClass("active")) {
              $this.addClass("highlight");
            }
          });
      });
    $(".country-dropdownMain > li.country-list")
      .not(".hasdropdown")
      .click(function (event) {
        $(this).siblings("li.country-list").removeClass("hasdrop highlight");
        $(".country-dropdown").slideUp();
      });

    // if ($(".country-dropdownColumn ul li.active").length > 0) {
    //     $(".country-dropdownColumn").addClass('on');
    // }
  }

  $(
    ".country_slider .com_TwoImageSlickSlider .slick-prev, .country_slider .com_TwoImageSlickSlider .slick-next, .country_slider .com_TwoImageSlickSlider .swiper-button-prev, .country_slider .com_TwoImageSlickSlider .swiper-button-next"
  ).on("click", function () {
    $("#egypt").removeClass("highlight");
    var selectedCountry = $(
      ".country_slider .com_TwoImageSlider-img-sec.slick-slide.slick-active, .country_slider .com_TwoImageSlider-img-sec.swiper-slide.swiper-slide-active"
    ).attr("data-country");
    console.log(selectedCountry);
    if (selectedCountry === "egypt") {
      $("#egypt").addClass("highlight");
      $("#india").removeClass("highlight");
    } else if (selectedCountry === "india") {
      $("#egypt").removeClass("highlight");
      $("#india").addClass("highlight");
    } else {
      $("#india").removeClass("highlight");
    }
  });
}

function fncountryscroll() {
  if (screen.width < 1024) {
    $(".country-dropdownMain > li.hasdropdown")
      .off()
      .click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(".country-dropdownMain > li.hasdropdown").removeClass("highlight");
        $(this).siblings("li.country-list").removeClass("highlight");
        $(this).toggleClass("hasdrop");
        $(this).siblings("li.hasdropdown").removeClass("hasdrop");
        $(".country-dropdown").not($(this).find(".country-dropdown")).slideUp();
        $(this).find(".country-dropdown").slideToggle();
        var $this = $(this);
        $(this)
          .find(".country-dropdownColumn ul >li")
          .each(function (index, ele) {
            if ($(ele).hasClass("active")) {
              $this.addClass("highlight");
            }
          });
      
// setTimeout(function () {
//   if ($(".country-dropdown:visible").length > 0) {
//     $(".countryscroll").css("overflow-x", "initial");
//     $(".countryscroll").addClass("overFlowScroll");
//   } else {
//     $(".countryscroll").css("overflow-x", "scroll");
//     $(".countryscroll").removeClass("overFlowScroll");
//   }
// }, 300);

       
        //   setTimeout(function(){

         
        //   if($(".country-dropdown").is(":visible")){
        //     $(".dropdown-wrapper").addClass("overFlowScroll");
        //   }
        //   else{
        //     $(".dropdown-wrapper").removeClass("overFlowScroll");
           
        //   }
        // },400)
       
      });
    $(".country-dropdownMain > li.country-list")
      .not(".hasdropdown")
      .click(function (event) {
        $(this).siblings("li.country-list").removeClass("hasdrop, highlight");
        $(".country-dropdown").slideUp();
        setTimeout(function () {
          //$(".countryscroll").css("overflow-x", "scroll");
        }, 300);
      });

     // Smooth scroll to center when clicking li
    //  $(".country-dropdownMain li").on("click", function (event) {
    //   event.preventDefault();
    //   event.stopPropagation(); // <-- IMPORTANT
    
    //   this.scrollIntoView({
    //     behavior: "smooth",
    //     block: "nearest",
    //     inline: "center",
    //   });
    // });

    if (window.innerWidth <= 767) {
      let isTouch = false;
      let startX = 0;

        $(".countryscroll").on("touchstart", function (e) {
            isTouch = true;
            startX = e.originalEvent.touches[0].clientX;
          })
          .on("touchmove", function (e) {
            if (!isTouch) return;

            let currentX = e.originalEvent.touches[0].clientX;
            let diffX = Math.abs(currentX - startX);

            // detect actual drag X-direction
            if (diffX > 10) {
              $(".country-dropdown").removeClass("show").hide(); // Hide dropdown
              $(".hasdropdown").removeClass("hasdrop");
            }
          })
          .on("touchend", function () {
            isTouch = false;
          });
          
      const container = document.querySelector(".country-dropdownMain");
      let activeLi = null;
      let activeDropdown = null;
    
      function updateDropdownPosition() {
        if (!activeLi || !activeDropdown) return;
    
        const liRect = activeLi.getBoundingClientRect();
        activeDropdown.style.position = "fixed";
        activeDropdown.style.top = liRect.bottom + "px";
        activeDropdown.style.left = liRect.left + "px";
      }
    
      const countryListItems = document.querySelectorAll(".country-list");
      const dropdowns = document.querySelectorAll(".country-dropdown");
    
      if (countryListItems.length > 0) {
        countryListItems.forEach((li) => {
          li.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
    
            this.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
    
            countryListItems.forEach((item) =>
              item.classList.remove("active")
            );
    
            dropdowns.forEach((dd) => (dd.style.display = "none"));
    
            this.classList.add("active");
    
            const dropdown = this.querySelector(".country-dropdown");
    
            if (dropdown) {
              activeLi = this;
              activeDropdown = dropdown;
    
              dropdown.style.display = "block";
              updateDropdownPosition();
    
              setTimeout(updateDropdownPosition, 200);
            } else {
              activeLi = null;
              activeDropdown = null;
            }
          });
        });
      }
    
      //Safe event binding only if container exists
      if (container) {
        container.addEventListener("scroll", updateDropdownPosition);
      }
    
      window.addEventListener("scroll", updateDropdownPosition);
      window.addEventListener("resize", updateDropdownPosition);


    }
    
    

    


      // // Horizontal scroll support
      // $(".countryscroll ul").each(function () {
      //   let startX, scrollLeft, isDown = false;
      //   let $this = $(this);

      //   // Touch drag (mobile)
      //   $this.on("touchstart", function (e) {
      //     isDown = true;
      //     startX = e.originalEvent.touches[0].pageX;
      //     scrollLeft = this.scrollLeft;
      //   });

      //   $this.on("touchmove", function (e) {
      //     if (!isDown) return;
      //     const x = e.originalEvent.touches[0].pageX;
      //     const walk = startX - x;
      //     this.scrollLeft = scrollLeft + walk;
      //     e.preventDefault();
      //   });

      //   $this.on("touchend touchcancel", function () {
      //     isDown = false;
      //   });

      //   // Touchpad / mousewheel (horizontal only)
      //   $this.on("wheel", function (e) {
      //     const el = this;
      //     const canScrollX = el.scrollWidth > el.clientWidth;

      //     // ✅ only stop body scroll if UL can scroll horizontally
      //     if (canScrollX && Math.abs(e.originalEvent.deltaX) > 0) {
      //       el.scrollLeft += e.originalEvent.deltaX;
      //       e.preventDefault();
      //     }
      //   });
      // });

  }
}
