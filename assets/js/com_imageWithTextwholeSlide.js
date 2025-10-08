function Activities() {

  /****Lazy load ****/
  function setPicturePlaceholder1($picture) {
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
  
  function loadRealImage1($img) {
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
  
  function observeSlides1($slider, slick) {
    const $slides = slick.$slides;
  
    $slides.not('.slick-cloned').each(function () {
      setPicturePlaceholder1($(this).find('picture'));
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const $slide = $(entry.target);
          const $img = $slide.find('img[data-lazy]');
          loadRealImage1($img);
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
  const $lazyloadslider1 = $('.imageWithTextWrappRev');
  
  $lazyloadslider1.on('init', function (event, slick) {
    const $slider = $(this);
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
  
    if (isMobile) {
      observeSlides1($slider, slick);
  
      // Force load first two slides on mobile
      [0, 1].forEach(idx => {
        const $slide = $slider.find(`.slick-slide[data-slick-index="${idx}"]`).not('.slick-cloned');
        if ($slide.length) {
          const $picture = $slide.find('picture');
          const $img = $picture.find('img');
          setPicturePlaceholder1($picture);
          loadRealImage1($img);
        }
      });
    } else {
      observeSlides1($slider, slick);
    }
  });
  
  // Handle slide change (mobile prev/next)
  $lazyloadslider1.on('afterChange', function (event, slick, currentSlide) {
    const $currentSlide = $(slick.$slides[currentSlide]).not('.slick-cloned');
    const $picture = $currentSlide.find('picture');
    const $img = $picture.find('img');
    setPicturePlaceholder1($picture);
    loadRealImage1($img);
  
    // Optional: preload next slide for smoother UX
    const $nextSlide = $(slick.$slides[currentSlide + 1]).not('.slick-cloned');
    if ($nextSlide.length) {
      const $nextPic = $nextSlide.find('picture');
      const $nextImg = $nextPic.find('img');
      setPicturePlaceholder1($nextPic);
      loadRealImage1($nextImg);
    }
  });
  

  /**** End of Lazy load ****/

  $(".imageWithTextWrappRev").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand"
  });
}
