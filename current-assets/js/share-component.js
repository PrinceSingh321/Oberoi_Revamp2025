var thisClass;
var glblShareComponentIsGlobalPageShare = true;
var shareMapUrl = "";
$(document).ready(function(){
    $(".share-toggle").click(function(){
        $(this).next(".share-list").fadeToggle();
    });


    $(".share-component").click(function(event){
        event.stopPropagation();
    });


    $(document).click(function(){
        $(".share-component .share-list").fadeOut();
    });

    /////////////////////////////////////////////SET HOTEL IDS///////////////////////////////////
    if (document.URL.indexOf("/hotels-in-agra") != -1) {
        shareMapUrl = setMapLatLongForShare("HBAGROB");

    }
    else if (document.URL.indexOf("/hotels-in-jaipur") != -1) {
        shareMapUrl = setMapLatLongForShare("HBJAIOB");

    }
    else if (document.URL.indexOf("/hotels-in-ranthambhore") != -1) {
        shareMapUrl =setMapLatLongForShare("HBJAIVA");

    }
    else if (document.URL.indexOf("/hotels-in-udaipur") != -1) {
        shareMapUrl = setMapLatLongForShare("HBUDROB");

    }
    else if (document.URL.indexOf("/hotels-in-bengaluru") != -1) {
        shareMapUrl = setMapLatLongForShare("HBBLROB");

    }
    else if (document.URL.indexOf("/kerala-backwaters") != -1) {
        shareMapUrl = setMapLatLongForShare("HBCOKVR");

    }
    else if (document.URL.indexOf("/hotels-in-al-zorah") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBDXBAZ");

    }
    else if (document.URL.indexOf("/hotels-in-bali") != -1) {
        shareMapUrl = setMapLatLongForShare("HBDPSOB");

    }
    else if (document.URL.indexOf("/hotels-in-chandigarh") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBIXCOB");

    }
    else if (document.URL.indexOf("/hotels-in-delhi") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBDELOB");

    }
    else if (document.URL.indexOf("/hotels-in-dubai") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBDXBOB");

    }
    else if (document.URL.indexOf("/hotels-in-gurgaon") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBDELOG");

    }
    else if (document.URL.indexOf("/hotels-in-kolkata") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBCCUOB");

    }
    else if (document.URL.indexOf("/hotels-in-lombok") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBAMIOB");

    }
    else if (document.URL.indexOf("/hotels-in-madina") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBMEDOB");

    }
    else if (document.URL.indexOf("/hotels-in-mauritius") != -1) {
        shareMapUrl = setMapLatLongForShare("HBMRUTO");

    }
    else if (document.URL.indexOf("/hotels-in-morocco-marrakech") != -1) {
        shareMapUrl =  setMapLatLongForShare("HTLMRCO");

    }
    else if (document.URL.indexOf("/hotels-in-mumbai") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBBOMOB");

    }
    else if (document.URL.indexOf("/hotels-in-sahl-hasheesh") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBHRGOB");

    }
    else if (document.URL.indexOf("/hotels-in-shimla-cecil") != -1) {

        shareMapUrl =  setMapLatLongForShare("HBSLVOB");
    }
    else if (document.URL.indexOf("/hotels-in-shimla-wfh") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBSLVWH");
    }
    else if (document.URL.indexOf("/nile-cruise-philae") != -1) {

        shareMapUrl = setMapLatLongForShare("HBASWPH");
    }
    else if (document.URL.indexOf("/nile-cruise-zahra") != -1) {
        shareMapUrl =  setMapLatLongForShare("HBASWZA");
    }

    ////////////////////////////////////////////CALL SHARE FUNCTION//////////////////////////////
    fnShareComponentInit();

});


function setMapLatLongForShare(hotelcode) {

    var hotelLat = "";
    var hotelLng = "";
    var isHotelDetailFound = false;

    for (i = 0; i < arrHotelLatLongDetails.length; i++) {
        if (hotelcode == arrHotelLatLongDetails[i].hotelcode) {
            isHotelDetailFound = true;
            hotelLat = arrHotelLatLongDetails[i].lat;
            hotelLng = arrHotelLatLongDetails[i].lng;

            break;
        }
    }
    return [hotelLat, hotelLng];
}

function fnShareComponentInit() {



 if ($(".share-list li i").length > 0) {
     $(".share-list li i").click(function () { 

         if ($(this).closest("ul").hasClass("share-list-section")) {
             glblShareComponentIsGlobalPageShare = false;
         }
         else {
             glblShareComponentIsGlobalPageShare = true;
         }

         thisClass = $(this);
                var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|sm-t|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent.toLowerCase());
                var shareurl = "";
                var sharetitle = "";
                var sharedescription = "";
                var shareusername = "";
                var shareimage = "";
                var copyText = document.URL;
                var isCopyLink = false;
                var isEnvalopClick = false;

         //
        

                //CHECK AND ASSIGN TITLE
                if ($('meta[property="og:title"]').attr('content') != undefined && $('meta[property="og:title"]').attr('content') != "") {
                    sharetitle = $('meta[property="og:title"]').attr('content');
                }
                else {
                    sharetitle = document.title;
                }

                //CHECK AND ASSIGN DESCRIPTION
                if (typeof $('meta[property="og:description"]').attr('content') != "undefined" && $('meta[property="og:description"]').attr('content') != "") {
                    sharedescription = $('meta[property="og:description"]').attr('content');
                }
                else if (typeof  $('meta[name=description]').attr("content") != "undefined" && $('meta[name=description]').attr("content") != "") {
                    sharedescription = $('meta[name=description]').attr("content");
                }

                //ASSIGN URL TO SHARE
                shareurl = document.URL;



         if (!glblShareComponentIsGlobalPageShare) {
            
             sharetitle = $(this).closest(".share-list-parent").find(".share-list-section-title").text();
             var imageUrl = $(this).closest(".share-list-parent").find(".share-list-section-description").attr("src");
             if (typeof imageUrl != "undefined") {
                 sharedescription = $(this).closest(".share-list-parent").find(".share-list-section-description").attr("src");
             }
             else {
                 sharedescription = $(this).closest(".share-list-parent").find(".share-list-section-description").text();
             }
             shareurl = $(this).closest(".share-list-parent").find(".share-list-section-url").attr("href");
             copyText = shareurl;
         }
         var gmapUrl = "https://www.google.com/maps/search/?api=1&query=" + shareMapUrl;

         if ($(this).hasClass("fa-facebook")) {
             
             shareurl = "https://www.facebook.com/sharer/sharer.php?u= " + encodeURIComponent(gmapUrl) + "&href=" + encodeURIComponent(gmapUrl);
                    //shareurl = "https://www.google.com/maps/search/?api=1&query="+ shareMapUrl;
                    //console.log("fb");
                    //console.log(shareurl);
                }
                else if ($(this).hasClass("fa-x-twitter")) {
                    if (shareusername != "") {
                        shareusername = "&via =" + shareusername;
                    }
                    if (sharedescription != "") {
                        sharedescription = "&via =" + sharedescription;
                    }

                    //shareurl = "https://twitter.com/intent/tweet?&url=" + shareurl + sharedescription +  shareusername;
             shareurl = "https://twitter.com/intent/tweet?&url=" + encodeURIComponent(gmapUrl);
                }
                else if ($(this).hasClass("fa-linkedin")) {
                    //shareurl = "https://www.linkedin.com/sharing/share-offsite/?url=" + shareurl;
             shareurl = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(gmapUrl);
                }
                else if ($(this).hasClass("fa-envelope")) {
                    isEnvalopClick = true;
                    //shareurl = "mailto:?subject=" + sharetitle + "&body=" + shareurl + " " + sharedescription;
             shareurl = "mailto:?subject=" + sharetitle + "&body=" + encodeURIComponent(gmapUrl);
                }
                else if ($(this).hasClass("fa-link")) {                   
             CopyToClipboard(gmapUrl);
                    isCopyLink = true;
                }
                else if ($(this).hasClass("fa-whatsapp")) {                                       
                    var element = document.getElementById('text');
                    if (isMobile) {
                        //shareurl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(sharedescription + " " + shareurl);
                        shareurl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(gmapUrl);
                    } else {
                        //shareurl = "https://web.whatsapp.com/send?text=" + encodeURIComponent(sharedescription + " " + shareurl);
                        shareurl = "https://web.whatsapp.com/send?text=" + encodeURIComponent(gmapUrl);
                    }  

                 

                   
                }
         console.log("share url =" + shareurl);
                if (isCopyLink == false) {
                    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && isEnvalopClick) {
                        window.location = shareurl;
                    }
                    else {
                        windowPopup(shareurl, 500, 600);
                    }
                }
            });
        }
    }


        function windowPopup(url, width, height) {
           
            var left = (screen.width / 2) - (width / 2),
                top = (screen.height / 2) - (height / 2);
            window.open(
                url,
                "",
                "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
            );
        }

        function CopyToClipboard(text) {

            if (window.clipboardData && window.clipboardData.setData) {
                // IE specific code path to prevent textarea being shown while dialog is visible.
                return clipboardData.setData("Text", text);

            } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea");
                textarea.textContent = text;
                textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                } catch (ex) {
                    console.warn("Copy to clipboard failed.", ex);
                    return false;
                } finally {
                    document.body.removeChild(textarea);
                }
            }
        }
        