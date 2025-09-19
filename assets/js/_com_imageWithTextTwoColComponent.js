function com_imageWithTextTwoColComponent() {
  // $(".descriptionImageSliderRev").slick({
  //   dots: true,
  //   arrows: true,
  //   lazyLoad: "progressive",
  //   autoplay:true,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         arrows: true,
  //         dots: true,
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // });

  

  var DescriptionSwiper = new Swiper('.descriptionImageSliderRev', {
    slidesPerView: 1,
    parallax: true,
    loop: true,
    speed: 600,
    navigation: false,
    autoplay: {
      delay: 4000,
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.5,
      releaseOnEdges: false,
      thresholdDelta: 20,
      thresholdTime: 200,
    },
    pagination: {
      el: '.descriptionImageSliderRev .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      }
    },
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  
    on: {
      init(swiper) {
        const realSlides = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate'));
        if (realSlides.length === 1) {
          document.querySelector('.descriptionImageSliderRev').classList.add('single_slide_active');
        }
  
        setAllPlaceholders();
        loadSlideImage(swiper.slides[swiper.activeIndex]);
      },
  
      slideChange(swiper) {
        loadSlideImage(swiper.slides[swiper.activeIndex]);
      }
    }
  });
  
  function setAllPlaceholders() {
    document.querySelectorAll(".custom-placeholder").forEach(el => {
      const isMobile = window.matchMedia("(max-width: 720px)").matches;
      const src = isMobile ? el.dataset.placeholderMobile : el.dataset.placeholderDesktop;
      el.style.backgroundImage = `url('${src}')`;
    });
  }
  
  function loadSlideImage(slideEl) {
    if (!slideEl) return;
  
    // Agar already load ho chuka hai to skip karo
    if (slideEl.dataset.imageLoaded === "true") return;
  
    const picture = slideEl.querySelector("picture");
    if (!picture) return;
  
    picture.querySelectorAll("source").forEach(source => {
      if (source.dataset.srcset) source.srcset = source.dataset.srcset;
    });
  
    const img = picture.querySelector("img");
    if (img && img.dataset.src) {
      img.onload = () => {
        const placeholder = slideEl.querySelector(".custom-placeholder");
        if (placeholder) placeholder.classList.add("hidden");
        // Mark as loaded to prevent reloading
        slideEl.dataset.imageLoaded = "true";
      };
      img.src = img.dataset.src;
    }
  }
  

document.querySelectorAll('.descriptionImageSliderRev .swiper-button-next, .descriptionImageSliderRev .swiper-button-prev').forEach(el => {
  el.remove();
});

  $("#lounge .multislider-sub-slide-img").each(function () {
    if (
      $("#lounge .multislider-sub-slide-img .multislider-sub-slide").length == 1
    ) {
      $("#lounge .multislider-sub-slide-img .slick-dots").hide();
    }
  });
}
