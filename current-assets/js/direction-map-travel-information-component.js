var isTravelDirectionMapInitialised = false;
var travelStartPoint = "";
var travelEndPoint = "";
var travelMap;
var sourceLat = 27.167931;
var sourceLong = 78.049320;

function initTravelDirectionMap() {

    var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        scale: 3
    };

    var polylineDotted = {
        strokeColor: '#0eb7f6',
        strokeOpacity: 0,
        fillOpacity: 0,
        icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '10px'
        }],
    };

    var rendererOptions = {
        map: travelMap,      
        suppressMarkers: false,
        polylineOptions: polylineDotted,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
    };

    var noPoi = [
        {
            featureType: "poi",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    travelMap = new google.maps.Map(document.getElementById('tmap'), {
        center: { lat: sourceLat, lng: sourceLong },
        zoom: 7        
    });

    travelMap.setOptions({ styles: noPoi });
    directionsDisplay.setMap(travelMap);

    if (isTravelDirectionMapInitialised == false) {
        calculateAndDisplayTravelRoute(directionsService, directionsDisplay);
        isTravelDirectionMapInitialised = true;
    }

    var fnCalculateRoute = function () {
        calculateAndDisplayTravelRoute(directionsService, directionsDisplay);
    };

    $("#calculateAndDisplayTravelRoute").click(fnCalculateRoute);
}


function calculateAndDisplayTravelRoute(directionsService, directionsDisplay) {

    directionsService.route({
        origin: travelStartPoint,
        destination: travelEndPoint,
        travelMode: google.maps.TravelMode.DRIVING,
        optimizeWaypoints: true,
    }, function (response, status) {
        if (status === 'OK') {
            $(".divTravelMap").show();
            directionsDisplay.setDirections(response);
        }
        else {
            console.log("Location not found.");
            $(".divTravelMap").hide();
        }
    });

}


$(function () {
    if (window.location.pathname.indexOf("/travel-information") != -1) {
        setTimeout(function () {  

            /*Initialise Map*/
            initTravelDirectionMap(); 
            
            /*Get First Source and Bind in the class .map-box */
                    $(".divTravelMap").appendTo($(".travel-info .accordian-heading").parent().eq(0).find(".accordian-content .map-box"));
                    fnShowTravelRoute($.trim($(".travel-info .accordian-heading").eq(0).text().replace("From", "")), $(".grey-box-info-dtls p").eq(0).html());                                  
            /*Hide image inside div class .map-box*/
                    $('.map-box img').hide();
                   
        }, 1000);

        /*On clicking each heading set source from heading and destination from first p tag under Address*/
        $(".travel-info .accordian-heading").click(function () {
            if ($(this).hasClass("active")) {
                $(".divTravelMap").appendTo($(this).parent().find(".accordian-content .map-box"));
                fnShowTravelRoute($.trim($(this).text().replace("From", "")), $(".grey-box-info-dtls p").eq(0).html());     
            }
        });
    }
    else
    {
        /*This piece of code is to remove div HTML as taking space. No need on another pages travel-information */
        if ($(".divTravelMap").length > 0)
        {
            $(".divTravelMap").remove();
        }
    }
});



/*Function to set travel start and end point*/
function fnShowTravelRoute(source, destination) {
    console.log("From: " +source + "--To: " + destination);
    travelStartPoint = source;
    travelEndPoint = destination;

    $("#calculateAndDisplayTravelRoute").click();

    /*This piece of code is to handle bug of polyline. 
    Some time polyline not visible correctly util we change zomm in or out*/
    setTimeout(function () {
        travelMap.setZoom(travelMap.getZoom() - 1); 
    },250);
   
}