function fnComSliderthreeImages() {

  /****Lazy load ****/
    function setPicturePlaceholder($picture) {
      const $img = $picture.find('img');
      if ($img.attr('data-placeholder-set') || $img.attr('data-loaded')) return;
    
      const isMobile = window.matchMedia("(max-width: 720px)").matches;
      const placeholder = isMobile
        ? $img.attr('data-placeholder-mobile')
        : $img.attr('data-placeholder-desktop');
    
      if (placeholder) {
        $img.attr('src', placeholder);
      }
    
      $img.attr('data-placeholder-set', 'true');
    }
    
    function loadRealImage($img) {
      if (!$img.length || $img.attr('data-loaded')) return;
      $img.attr('data-loaded', 'true');
    
      const $picture = $img.closest('picture');
    
      $picture.find('source').each(function () {
        const $source = $(this);
        const srcset = $source.attr('data-srcset');
        if (srcset) {
          $source.attr('srcset', srcset).removeAttr('data-srcset');
        }
      });
    
      if ($img.attr('data-lazy')) {
        $img.attr('src', $img.attr('data-lazy')).removeAttr('data-lazy');
      }
    }
    
    function observeSlides($slider, slick) {
      const $slides = slick.$slides;
    
      $slides.not('.slick-cloned').each(function () {
        setPicturePlaceholder($(this).find('picture'));
      });
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const $slide = $(entry.target);
            const $img = $slide.find('img[data-lazy]');
            loadRealImage($img);
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: $slider[0].querySelector('.slick-list'),
        rootMargin: '50px',
        threshold: 0.1
      });
    
      $slides.add($slider.find('.slick-cloned')).each(function () {
        observer.observe(this);
      });
    }
    
    // ---- INIT ----
    const $lazyloadslider = $('.com_TwoImageSlickSlider');
    
    $lazyloadslider.on('init', function (event, slick) {
      const $slider = $(this);
      const isMobile = window.matchMedia("(max-width: 991px)").matches;
    
      if (isMobile) {
        observeSlides($slider, slick);
    
        // Force load first two slides on mobile
        [0, 1].forEach(idx => {
          const $slide = $slider.find(`.slick-slide[data-slick-index="${idx}"]`).not('.slick-cloned');
          if ($slide.length) {
            const $picture = $slide.find('picture');
            const $img = $picture.find('img');
            setPicturePlaceholder($picture);
            loadRealImage($img);
          }
        });
      } else {
        observeSlides($slider, slick);
      }
    });
    
    // Handle slide change (mobile prev/next)
    $lazyloadslider.on('afterChange', function (event, slick, currentSlide) {
      const $currentSlide = $(slick.$slides[currentSlide]).not('.slick-cloned');
      const $picture = $currentSlide.find('picture');
      const $img = $picture.find('img');
      setPicturePlaceholder($picture);
      loadRealImage($img);
    
      // Optional: preload next slide for smoother UX
      const $nextSlide = $(slick.$slides[currentSlide + 1]).not('.slick-cloned');
      if ($nextSlide.length) {
        const $nextPic = $nextSlide.find('picture');
        const $nextImg = $nextPic.find('img');
        setPicturePlaceholder($nextPic);
        loadRealImage($nextImg);
      }
    });
    

     
 
  

  $(".com_TwoImageSlickSlider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding: "20px",
    touchMove: true,
    draggable: true, // Allow dragging with mouse/trackpad
    swipe: true ,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

 
  // Handle tab clicks
  $(".com_TwoImageSliderComponentRev .ComSlider-tab li").on("click", function () {
    var $this = $(this);
    var itemCategory = $this.attr("data-filter");
    var $parentSlider = $this.closest(
      ".com_TwoImageSliderComponentRev"
    );

    // Update slider based on attribute
    var itemCtgoryIndex = $parentSlider
      .find(
        ".slider-img-sec:not('.slick-cloned')[data-slide=" +
          itemCategory +
          "], .com_TwoImageSlider-img-sec:not('.slick-cloned')[data-slide=" +
          itemCategory +
          "]"
      )
      .attr("data-slick-index");

    $parentSlider
      .find(".com_TwoImageSlickSlider")
      .slick("slickGoTo", itemCtgoryIndex);

    // Activate the current tab
    $parentSlider.find(".ComSlider-tab li").removeClass("active");
    $this.addClass("active");

    // Activate dropdown and sub-tabs if clicked tab has dropdown
    if ($this.hasClass("hasdropdown")) {
      var $dropdown = $this.find(".country-dropdown");
      $dropdown.addClass("active");

      $this.addClass("active");

      // Activate country list items in dropdown
      $dropdown.find("li").each(function () {
        var $item = $(this);
        var filterValue = $item.attr("data-filter");
        if (
          $parentSlider
            .find(".com_TwoImageSlider-img-sec[data-slide=" + filterValue + "]")
            .is(":visible")
        ) {
          $item.addClass("active");
        } else {
          $item.removeClass("active");
        }
      });
    }
  });
  
  // // Add class to active tab on slider change
  $(".com_TwoImageSlickSlider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      let $slickSlider = $(this);
      let dataSlickItem = $slickSlider
        .find(".slick-slide.slick-active")
        .attr("data-slide");

      // Update active tab
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev")
        .find(".ComSlider-tab li")
        .removeClass("active");
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev")
        .find(".ComSlider-tab li[data-filter=" + dataSlickItem + "]")
        .addClass("active");
        
        $slickSlider
        .parents(".com_TwoImageSliderComponentRev").find(".ComSlider-tab li.hasdropdown [data-filter=" + dataSlickItem + "]")

        //Add This Block: Handle hasdropdown li activation
    $slickSlider
    .parents(".com_TwoImageSliderComponentRev")
    .find(".ComSlider-tab li.hasdropdown")
    .each(function () {
      const $li = $(this);
      const $childFilter = $li.find("[data-filter]");
      if ($childFilter.attr("data-filter") === dataSlickItem) {
        $li.addClass("active");
      } else {
        $li.removeClass("active");
        $li.removeClass('hasdrop');
        $li.removeClass('highlight');
      }
    });

  //     // Activate dropdown and sub-tabs if the slider item has dropdown
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev")
        .find(".country-list.hasdropdown")
        .each(function () {
          var $countryList = $(this);
          var countryDropdown = $countryList.find(".country-dropdown");
          var activeDropdownItem = countryDropdown.find(
            "li[data-filter=" + dataSlickItem + "]"
          );

          if (activeDropdownItem.length) {
            $countryList.addClass("active");
            countryDropdown.addClass("active");
            activeDropdownItem.addClass("active");
          } else {
            $countryList.removeClass("active");
            countryDropdown.removeClass("active");
            countryDropdown.find("li").removeClass("active");
          }
        });

   //hide map on slide change  and show image
       if($("#dmap").length > 0){
        $("#dmap").hide();
        $("#map-image").show();
      }

    // Update dropdown value text
      var filterActvTxt = $slickSlider
        .parents(".com_TwoImageSliderComponentRev")
        .find(".ComSlider-tab li.active")
        .text();
      $slickSlider
        .parents(".com_TwoImageSliderComponentRev")
        .find(".getDropdownValue")
        .text(filterActvTxt);
        
    $(".slidesBtnRev .cta-boxRev .buttonStyle2Rev").removeClass("active");

    $(".viewMapData").hide();
    
    }
    
  );

 
 }
  
  /*** Lazyloading Code ***/