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
    //mousewheelControl: true,
    parallax: true,
    //freeMode: true,
    loop: true,
    speed: 600,
    navigation: false,
    autoplay: {
      delay: 4000,
    },
    // navigation: {
    //     nextEl: ".descriptionImageSliderRev .swiper-button-next",
    //     prevEl: ".descriptionImageSliderRev .swiper-button-prev",
    // },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.5,          // Lower sensitivity to reduce skipping
      releaseOnEdges: false,
      thresholdDelta: 20,        // Helps filter small scrolls (trackpad flicks)
      thresholdTime: 200,        // Ignores new scrolls for 300ms
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

    // ✅ Lazy load enabled
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,

    on: {
        init: function () {
            // Count only real slides, excluding duplicates used for loop
            const realSlides = this.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate'));
            if (realSlides.length === 1) {
                document.querySelector('.descriptionImageSliderRev').classList.add('single_slide_active');
            }

            this.slides.forEach(slide => {
              const img = slide.querySelector('img[data-src]');
              if (img && !img.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
              const picture = slide.querySelector('picture');
              if (picture) {
                picture.querySelectorAll('source[data-srcset]').forEach(source => {
                  source.setAttribute('srcset', source.getAttribute('data-srcset'));
                  source.removeAttribute('data-srcset');
                });
              }
            });

        },
        
         lazyImageReady: function (swiper, slideEl, imageEl) {
            // ✅ Swiper lazy loaded, set src
            if (imageEl.dataset.src) {
              imageEl.src = imageEl.dataset.src;
              imageEl.removeAttribute('data-src');
            }
            const picture = imageEl.closest('picture');
            if (picture) {
              picture.querySelectorAll('source[data-srcset]').forEach(source => {
                source.setAttribute('srcset', source.getAttribute('data-srcset'));
                source.removeAttribute('data-srcset');
              });
            }
          }

    }

    

});

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
