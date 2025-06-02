var isDirectionMapInitialised = false;
var sourceLat = 27.167931;
var sourceLong = 78.04932;
var sourceDirectionImage = "";
var swapClicked = false;

var dmAddFieldsA = "";
var dmAddFieldsB = "";

function initDirectionMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById("dmap"), {
    zoom: 7,
    center: { lat: sourceLat, lng: sourceLong },
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
  });
  directionsDisplay.setMap(map);

  console.log(1);

  if (isDirectionMapInitialised == false) {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    isDirectionMapInitialised = true;
  }

  var fnCalculateRoute = function () {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };

  $("#calculateDirection").click(fnCalculateRoute);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  if (swapClicked) {
    directionsService.route(
      {
        origin: $("#hotelEndPoint").val(),
        destination: { lat: sourceLat, lng: sourceLong },
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      function (response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          $("span#directionMsg").html("Location not found.");
        }
      }
    );
  } else {
    directionsService.route(
      {
        origin: { lat: sourceLat, lng: sourceLong },
        destination: $("#hotelEndPoint").val(),
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      function (response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          $("span#directionMsg").html("Location not found.");
        }
      }
    );
  }
}

$(function () {
  if ($("#calculateDirection").length > 0) {
    $("#calculateDirection").click(function () {
      fnCalculateDirection();
    });

    $("#hotelEndPoint").keyup(function (event) {
      if (event.keyCode == 13) {
        $("#calculateDirection").click();
        console.log(222222222222);
      }
    });

    $(".add-swipe-button").click(function (event) {
      if (swapClicked) {
        swapClicked = false;
      } else if (!swapClicked) {
        swapClicked = true;
      }

      if (dmAddFieldsB == "") {
        dmAddFieldsB = $(".address-field").find(":input")[0];
        dmAddFieldsA = $(".address-field").find(":input")[1];
      }
      $(".address-field").html("");
      if (swapClicked) {
        $(".address-field").append(dmAddFieldsA);
        $(".address-field").append(dmAddFieldsB);
      } else {
        $(".address-field").append(dmAddFieldsB);
        $(".address-field").append(dmAddFieldsA);
      }

      $("#hotelEndPoint").focus();
      $("#hotelEndPoint").keyup(function (event) {
        if (event.keyCode == 13) {
          $("#calculateDirection").click();
        }
      });
    });
  }

  function fnCalculateDirection() {
    $("span#directionMsg").html("");
    if ($("#hotelEndPoint").length > 0) {
      if ($("#hotelEndPoint").val() != "") {
        if (isDirectionMapInitialised == false) {
          initDirectionMap();
          $("#map-image").hide();
          $("#dmap").show();
        }
      }
    }
  }
});
/*Section for destination map section*/

function fnSetDestinationMapSetMarker(lat, long, label) {
  if (lat != "" && long != "") {
    lat = parseFloat(lat);
    long = parseFloat(long);
    var coordinates = {
      lat: lat,
      lng: long,
    };
    var sourceLat = "";
    var sourceLong = "";
    try {
      for (var i = 0; i < arrHotelLatLongDetails.length; i++) {
        if (
          arrHotelLatLongDetails[i].hotelcode.toLowerCase() ==
          glblCurrentPageHotelCode.toLowerCase()
        ) {
          sourceLat = arrHotelLatLongDetails[i].lat;
          sourceLong = arrHotelLatLongDetails[i].lng;
          break;
        }
      }
    } catch (Exx) {}

    var lati = lat; //lat;
    var longi = long; // long;
    console.log("lat--" + lat + " long--" + long);
    console.log("lat2--" + sourceLat + " long2--" + sourceLong);
    setTimeout(function () {
      var map = new google.maps.Map(document.getElementById("destinationMap"), {
        zoom: 10,
        center: coordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
      });

      //var marker = new google.maps.Marker({
      //    position: coordinates,
      //    map: map,
      //    icon: {
      //        url:' "https://www.oberoihotels.com/images/oberoihotels/map-pin.png",

      //        origin: new google.maps.Point(0, 0),
      //        anchor: new google.maps.Point(40, 65),
      //        //labelOrigin: new google.maps.Point(10, 33),
      //    },
      //    label: {
      //        text: '',
      //        fontSize: "16px",
      //        color: "#050857",
      //        fontWeight: "bold"
      //    }
      //});

      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(map);
      // set request
      var request = {
        origin: { lat: sourceLat, lng: sourceLong },
        destination: { lat: lati, lng: longi },
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService
        .route(request, function (response, status) {
          console.log(response);
          // console.log(status + " hi");
          if (status == google.maps.DirectionsStatus.OK) {
            //  console.log(response);
            // console.log(status + " status");
            travelMode: google.maps.TravelMode.DRIVING;
            // set route
            //directionsDisplay.setDirections(response);

            directionsRenderer.setDirections(response);
          } else if (status == "ZERO_RESULTS") {
            // make google latlng
            var originLatlng = new google.maps.LatLng(sourceLat, sourceLong);
            var destLatlng = new google.maps.LatLng(lati, longi);
            // set and define the marker

            var marker1 = new google.maps.Marker({
              position: destLatlng,
              map: map,
              size: new google.maps.Size(20, 20),
              icon: "/images/oberoihotels/rev/google-map-pin.png",
              //title: 'Destination'
            });
          }
        })
        .catch((e) =>
          window.console.log(
            "Directions request failed due to invalid lat or long "
          )
        );

      //directionsService
      //    .route({
      //        origin: { lat: sourceLat, lng: sourceLong },
      //        destination: { lat: lati, lng: longi },
      //        // Note that Javascript allows us to access the constant
      //        // using square brackets and a string value as its
      //        // "property."
      //        travelMode: google.maps.TravelMode.DRIVING,

      //    })
      //    .then((response) => {
      //        directionsRenderer.setDirections(response);
      //    })
      //    .catch(
      //        (e) => window.console.log("Directions request failed due to invalid lat or long "));
    }, 50);
  } else {
    alert("Cordinates not found.");
  }
}

$(".mapsDestBtnRev .showMap").click(function () {
  $(".viewMapData").insertAfter($(this).parents(".imageWithRightTextWrapp"));
});

function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("destinationMap"), {
    zoom: 14,
    center: { lat: 37.77, lng: -122.447 },
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

if ($(window).width() < 768) {
  $(".ComSlider-tab.desTab li").click(function () {
    $(".destListWrapp .compMapshare").hide();
  });
}
