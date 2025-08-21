// JavaScript Document






$(window).load(function () {
    $(".banner-and-booking-widget .banner-image").height($(".banner-image > img").height());
    $(window).resize(function () {
        $(".banner-and-booking-widget .banner-image").height($(".banner-image > img").height());
    });
  //  $("html, body").scrollTop(0);


    if ($(window).width() > 767) {
       
            setTimeout(function () {
               $("#videoPlayer").YTPlayer();
            }, 500);
        



        $('#muteUnMute').click(function () {
            $(this).toggleClass('active');
            $("#videoPlayer").YTPToggleVolume()
			
        });
    }

});


$(document).ready(function(){

	
	
	
	$('.expand-video a').click(function(){
		
		var vUrl= $('.expand-video a').attr('data-videoUrl');
		
		// $('#videoPlayer').YTPPause();
		
		$('#videoPopup').html('<button class="fullvideoClose"><img src="/images/oberoihotels/exotic-vacations/closeicon-white.svg"></button><iframe width="" height="" src="'+vUrl+'" frameborder="0" allow="autoplay" allowfullscreen allownetworking="internal"></iframe><div class="top-popup"><img src="/images/oberoihotels/common/Oberoi-HotelsResorts-white-logo.png" alt="" /></div>');
		$('#videoPopup').addClass('active');
							  
	});
	
	$(document).on('click', '.fullvideoClose', function () { 
 
		// $('#videoPlayer').YTPPlay();
		
		$('#videoPopup').html('');
		
		$('#videoPopup').removeClass('active');
		
		
	});
	
    $('.homePageBanner .banner').slick({
        dots: false,
        infinite: true,
        fade: true,         
        cssEase: 'linear',
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 5000,   
    });
	
});





$(window).scroll(function() {
 
	if($('#videoPlayer').length)
		{
	if( $(window).scrollTop() >  bookingEnginePos ) {
		//$('#videoPlayer').YTPPause();
		console.log('video pause');
	}
	else
		{
			//$('#videoPlayer').YTPPlay();
			console.log('video play');
		}
	}
});



$(window).load(function(){
	if ( window.location.href.indexOf('?film') > 0 || currenturlpathnamewithoutlanguage == '/film'  || currenturlpathnamewithoutlanguage == '/film/') 
	{
		$('.expand-video a').click();
		$('#videoPopup iframe').attr('src',"https://www.youtube.com/embed/ZvAHk0Tojao?autoplay=1&loop=1&rel=0&showinfo=0");
		
		if($(window).width()<= 991)
			{
				$('.video-btn').click()
			}
	}
	
	setTimeout(function(){
		$(window).resize();
	}, 300);
	setTimeout(function(){
		if( $(window).width() > 768 ) {
			$(".banner-image").addClass("disable");
			$(".banner-slide").addClass("disable");
		}
	}, 2000);
		setTimeout(function(){
				if ( window.location.href.indexOf('?film') > 0 || currenturlpathnamewithoutlanguage == '/film'  || currenturlpathnamewithoutlanguage == '/film/') {
					console.log('click again');
						$('.expand-video a').click();
							$('#videoPopup iframe').attr('src',"https://www.youtube.com/embed/ZvAHk0Tojao?autoplay=1&loop=1&rel=0&showinfo=0");
					if($(window).width()<= 991)
			{
				$('.video-btn').click()
			}

				}
			}, 2000);

	
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }



	 


var player;
    var lastPausedTime = 0;

    function onYouTubeIframeAPIReady() {
        const videoId = document.getElementById('yt-player').getAttribute('data-video');
        player = new YT.Player('yt-player', {
            videoId: videoId,
            playerVars: {
                autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId, // required for loop to work
            rel: 0,            // no related videos
            controls: 0,       // hide controls
            modestbranding: 1, // less branding
            showinfo: 0,       // deprecated but can still be used
            fs: 0,             // disable fullscreen button
            disablekb: 1,      // disable keyboard controls
            iv_load_policy: 3, // hide annotations
            playsinline: 1  // play inline on mobile devices  
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady() {


    // Autoplay video if it's the first slide
    if ($('.homePageBanner .banner').slick('slickCurrentSlide') === 0) {
        setTimeout(() => {
            player.playVideo();
        }, 20);
    }

    $('.homePageBanner .banner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide === 0) {
            const currentTime = player.getCurrentTime();
            lastPausedTime = Math.max(0, currentTime - 0);
            player.pauseVideo();
        }
    });

    $('.homePageBanner .banner').on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide === 0) {
            player.seekTo(lastPausedTime, true);
            player.playVideo();
        }
    });

    $(".video-poster").addClass('hidden');
}






$(document).ready(function(){
	// $(".unMuteVideo").click(function(){
	// 	if($(this).hasClass('mute')){
	// 		$(this).removeClass('mute');
	// 		player.mute();
	// 	}else{
	// 		$(this).addClass('mute');
	// 		player.unMute();
	// 	}
	// });


     $(".unMuteVideo").click(function () {
        const isMobile = $(window).width() <= 767; 

        if ($(this).hasClass("mute")) {
            $(this).removeClass("mute");

            if (isMobile) {
                $("video").prop("muted", true); 
            } else {
                player.mute(); 
            }
        } else {
            $(this).addClass("mute");

            if (isMobile) {
                $("video").prop("muted", false); 
            } else {
                player.unMute(); 
            }
        }
    });
});

function initVideoAndYT() {
  const video = document.getElementById("video");
  const poster = document.getElementById("videoPoster");
  const ytPoster = document.getElementById("ytPoster");
  const muteButton = document.getElementById("muteToggleButton");

  function showMuteAndHidePoster(targetPoster) {
    if (targetPoster) targetPoster.classList.add("hidden");
    if (muteButton) muteButton.classList.add("visible");
  }

  // --- HTML5 Video ---
  if (video) {
    video.addEventListener("playing", function () {
      showMuteAndHidePoster(poster);
    });

    video.addEventListener("error", function () {
      if (poster) poster.classList.remove("hidden");
    });

    // ✅ Handle case where video is already playing on refresh
    if (video.readyState >= 2 && !video.paused) {
      showMuteAndHidePoster(poster);
    }
  }

  // --- YouTube Player ---
  if (typeof YT !== "undefined") {
    const oldOnReady = window.onPlayerReady;

    window.onPlayerReady = function (event) {
      showMuteAndHidePoster(ytPoster);
      if (typeof oldOnReady === "function") {
        oldOnReady(event);
      }
    };

    // ✅ Handle case when YT player is already initialized
    if (window.ytPlayer && window.ytPlayer.getPlayerState) {
      const state = window.ytPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
        showMuteAndHidePoster(ytPoster);
      }
    }
  }
}

// --- Run after full page load (fix for normal refresh) ---
window.addEventListener("load", initVideoAndYT);
