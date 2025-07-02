function videoBanner() {
  if ($(window).width() > 767) {
    var player1;
    var isMuted = true;

    // Function to detect mobile devices
    function isMobileDevice() {
      return window.matchMedia("(max-width: 767px)").matches;
    }

    function onYouTubeIframeAPIReady() {
      // Use different video IDs for desktop and mobile
      var videoIdDesktop = $(".youtube-video").attr("data-video"); // Desktop video
      var videoIdMobile = $(".youtube-video").attr("data-video"); // Mobile video

      // Detect if it's a mobile device
      var videoIdToUse = isMobileDevice() ? videoIdMobile : videoIdDesktop;

      // Initialize YouTube player with the selected video
      player1 = new YT.Player("player1", {
        videoId: videoIdToUse,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          fs: 0,
          showinfo: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    // YouTube player ready handler
    function onPlayerReady(event) {
      // Hide the placeholder and show the video when it's ready
      document.getElementById("video-placeholder").style.display = "none";
      document.getElementById("player1").style.display = "block";
      event.target.playVideo(); // Autoplay the video

      // Observe the player's visibility in the viewport
      observeVideoVisibility();
      const iframe = document.getElementById("player1");
      const watermarkObserver = new MutationObserver(() => {
        const watermark =
          iframe.contentDocument?.querySelector(".ytp-watermark");
        if (watermark) {
          watermark.style.display = "none";
        }
      });

      watermarkObserver.observe(iframe, { childList: true, subtree: true });
    }
    

    // YouTube player state change handler (loop video)
    function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.ENDED) {
        event.target.seekTo(0); // Seek to the beginning
        event.target.playVideo(); // Start playing again
      }
    }

    // Function to observe if the video is in the viewport
    function observeVideoVisibility() {
      const playerElement = document.getElementById("player1");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // The video is in the viewport, play the video
              player1.playVideo();
            } else {
              // The video is out of the viewport, pause the video
              player1.pauseVideo();
            }
          });
        },
        { threshold: 0.5 }
      ); // Adjust threshold as needed (50% of the video must be in the viewport)

      observer.observe(playerElement);
    }

    // Initialize Slick slider
    $(".homePageBanner .banner").slick({
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: true,
      pauseOnHover: true,
      touchMove: true,
      draggable: true, 
      swipe: true ,
    });

    // Pause the video before the slide changes
    $(".homePageBanner.banner").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        if (currentSlide === 0) {
          player1.pauseVideo();
        }
      }
    );

    // Play the video when the slide becomes active
    $(".homePageBanner .banner").on(
      "afterChange",
      function (event, slick, currentSlide) {
        if (currentSlide === 0) {
          player1.playVideo();
        }
      }
    );

    // Pause video when clicking next or previous arrows
    $(".homePageBanner .slick-next, .homePageBanner .slick-prev").on(
      "click",
      function () {
        player1.pauseVideo();
      }
    );

    // Toggle mute/unmute and change button text
    $("#muteToggleButton").on("click", function () {
      if (isMuted) {
        player1.unMute();
        $(this).addClass("mute");
      } else {
        player1.mute();
        $(this).removeClass("mute");
      }
      isMuted = !isMuted;
    });

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }
  $(".fancybox-video").removeAttr("poster");

  if ($(window).width() < 767) {
    $('.udaivilas-banner').on('afterChange', function(event, slick, currentSlide) {
     
      $("video").each(function(){
      $(this).get(0).pause();
    });
    var currentVideo = $(slick.$slides[currentSlide]).find('video').get(0);
    if (currentVideo) {
        currentVideo.play();
    }
   

  });
  
      // Before slide change, pause all videos
      $('.udaivilas-banner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          var currentVideo = $(slick.$slides[currentSlide]).find('video').get(0);
          if (currentVideo) {
              currentVideo.pause();
          }
      });
  
      // After slide change, play the video on the current slide
      // $('.udaivilas-banner').on('afterChange', function(event, slick, currentSlide){
      //     var currentVideo = $(slick.$slides[currentSlide]).find('video').get(0);
      //     if (currentVideo) {
      //         currentVideo.play();
      //     }
      // });
      $("#muteToggleButton").on("click", function () {
        if( $(".T-video").prop('muted') ) {
          $(".T-video").prop('muted', false);
          $(this).addClass("mute");
          //$(".sound").show();
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $(".T-video").prop('muted', true);
      $(this).removeClass("mute");
      //$(".no-sound").show();
    }
  
      });
  }
}

if ($(window).width() > 767) {
$(".homePageBanner .banner").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  if (nextSlide === 0) {
    // Show placeholder before slide becomes active to avoid jerk
    $("#video-placeholder").css("display", "block");
    $("#player1").css("display", "none");
  }
});

$(".homePageBanner .banner").on("afterChange", function (event, slick, currentSlide) {
  if (currentSlide === 0) {
    // Hide placeholder and show video with a smooth fade
    setTimeout(function () {
      $("#video-placeholder").fadeOut(300);  // Smoothly hide placeholder
      $("#player1").fadeIn(300);             // Smoothly show video
    }, 100); // Slight delay for natural transition
  }
});
}

if ($(window).width() < 767) {
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const placeholder = document.getElementById("video-placeholder");

    if (video.readyState >= 3) {
        placeholder.style.display = "none"; // Hide if already loaded
    } else {
        video.addEventListener("canplay", function () {
            placeholder.style.display = "none"; // Hide when ready to play
        });
    }
});

}



// $(document).ready(function () {

// });
