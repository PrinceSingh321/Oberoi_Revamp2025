var isDestinationMapInitialized = false,
  flagDesmapOut = false;
var destinationMapCounter = 0,
  mapZoom = 5;
var allMarkerIds = [];
var marker, i, map, infowindow;

/*Default center point (lat long) and zoom level*/
var centerLat = 22.927584;
var centerLong = 85.820824;

function fnMapDatadetails($mapData) {
  var hotelCodes = $mapData.data("hotelcode");
  if (hotelCodes && !$mapData.next().hasClass("map-popup-detail")) {
    $(".destionation-country-wrap .map-popup-detail").remove();
    var $mapPopupClone = $(".map-popup-detail").clone();
    $mapPopupClone.insertAfter($mapData);
    //console.log($mapPopupClone, 'datainserted');
  }
}

/*$(".destination-hotels-list li a").click(function () {   
    var objLiThis = $(this);
    $('.destination-hotels-list li').each(function (index) {
        $(this).removeClass('active');
    });
    $(objLiThis).parent("li").addClass('active');

    hotelcode = objLiThis.attr("data-hotelcode");
    for (i = 0; i < arrHotelLatLongDetails.length; i++) {
        if (hotelcode == arrHotelLatLongDetails[i].hotelcode) {
            centerLat = arrHotelLatLongDetails[i].lat;
            centerLong = arrHotelLatLongDetails[i].lng;
            map.setZoom(7);         
            google.maps.event.trigger(allMarkerIds[i], 'click');
            break;
        }
    }
    setTimeout(function(){
       fnMapDatadetails();
    },1000)

});*/

$(".destination-hotels-list li a").click(function () {
  var $this = $(this);
  // $(".destination-hotels-list li").removeClass("active");
  $this.parent("li").siblings().removeClass("active");
  $this.parent("li").toggleClass("active");
  var hotelcode = $this.attr("data-hotelcode");

  // Find the corresponding latitude and longitude
  for (var i = 0; i < arrHotelLatLongDetails.length; i++) {
    if (hotelcode == arrHotelLatLongDetails[i].hotelcode) {
      var centerLat = arrHotelLatLongDetails[i].lat;
      var centerLong = arrHotelLatLongDetails[i].lng;

      map.setZoom(7);
      google.maps.event.trigger(allMarkerIds[i], "click");
      break;
    }
  }

  $(".destination-hotels-list .map-popup-detail").toggle();

  if ($(window).width() < 991) {
    $("html,body").animate(
      {
        scrollTop:
          $(".destination-component .destination-component-col2").offset().top -
          100,
      },
      600
    );
  }

  // // Call fnMapDatadetails with the clicked element
  // setTimeout(function () {

  //   $this.parents(".mo-continent-hotels-list").siblings(".mo-continent-hotels-list").find('.map-popup-detail').remove();
  //   $this.parent("li").siblings().find('.map-popup-detail').remove();
  //   //$this.parent("li").siblings().find().each(".map-popup-detail").hide();
  //   if($(window).width() > 991){
  //   fnMapDatadetails($this);
  //   $this.parents("li").find(".map-popup-detail:nth-child(3)").remove();
  // };

  // // if($this.parents("li").find(".map-popup-detail").length > 2){
  // //   alert();
  // // }
  // // alert($this.parent("li").find(".map-popup-detail").length);

  // }, 100);
});

$(".destination-country-list li").click(function () {
  /*For MO*/
  $(".mo-continent-name").removeClass("active");
  $(".mo-continent-hotels-list").hide();
  // $(".mo-continent-name:eq(0)").addClass("active");
  // $(".mo-continent-hotels-list:eq(0)").show();
  /*For MO end*/

  $(".destination-hotels-list li").each(function (index) {
    $(this).removeClass("active");
  });
  $(".destination-country-list li").each(function (index) {
    $(this).removeClass("active");
  });
  changeMapCenter($(this).attr("data-destinationtab").toLowerCase());
});

$(function () {
  if (document.URL.toLowerCase().indexOf("/destinations") != -1) {
    if (!isDestinationMapInitialized) {
      if ($("#map-canvas").length > 0) {
        setTimeout(initisDestinationMap, 1000);
      }
    }
  }
});

/*Function to Initialize Google map with one hotelcode as one input parameter*/
function initisDestinationMap(hotelcode) {
  destinationMapCounter++;

  if (destinationMapCounter < 3) {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
      zoom: mapZoom,
      center: new google.maps.LatLng(centerLat, centerLong),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: true,
    });

    map.setOptions({ styles: styles["silver"], draggable: true });
    infowindow = new google.maps.InfoWindow();

    for (i = 0; i < arrHotelLatLongDetails.length; i++) {
      var mapIcon = "";

      if (
        arrHotelLatLongDetails[i].hotelcode.toLowerCase().indexOf("temp") != -1
      ) {
        mapIcon =
          "https://www.oberoihotels.com/images/oberoihotels/mandarin-map-pin.png";
      } else {
        mapIcon =
          "https://www.oberoihotels.com/images/oberoihotels/map-pin.png";
      }

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          arrHotelLatLongDetails[i].lat,
          arrHotelLatLongDetails[i].lng
        ),
        icon: mapIcon,
        map: map,
      });
      allMarkerIds.push(marker);

      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(
              fnInfoHtmlTemplate(
                arrHotelLatLongDetails[i].image,
                arrHotelLatLongDetails[i].hoteltitle,
                arrHotelLatLongDetails[i].email,
                arrHotelLatLongDetails[i].phone,
                arrHotelLatLongDetails[i].phoneNumber2,
                arrHotelLatLongDetails[i].url,
                arrHotelLatLongDetails[i].address
              )
            );
            infowindow.open(map, marker);

            flagDesmapOut = true;
          };
        })(marker, i)
      );

      google.maps.event.addListener(
        marker,
        "mouseover",
        (function (marker, i) {
          return function () {
            infowindow.setContent(
              fnInfoHtmlTemplate(
                arrHotelLatLongDetails[i].image,
                arrHotelLatLongDetails[i].hoteltitle,
                arrHotelLatLongDetails[i].email,
                arrHotelLatLongDetails[i].phone,
                arrHotelLatLongDetails[i].phoneNumber2,
                arrHotelLatLongDetails[i].url,
                arrHotelLatLongDetails[i].address
              )
            );
            infowindow.open(map, marker);
            flagDesmapOut = false;
          };
        })(marker, i)
      );

      google.maps.event.addListener(marker, "mouseout", function () {
        if (!flagDesmapOut) {
          infowindow.close();
        }
      });
    }
  }

  isDestinationMapInitialized = true;
}

function changeMapCenter(country) {
  infowindow.close();
  for (i = 0; i < arrHotelLatLongDetails.length; i++) {
    if (country == "omo") {
      country = "asia-pacific";
    }
    if (
      country
        .toLowerCase()
        .replace(/,/g, "")
        .replace(/&amp;/g, "")
        .replace(/ /g, "")
        .replace(/-/g, "") ==
      arrHotelLatLongDetails[i].country
        .toLowerCase()
        .replace(/,/g, "")
        .replace(/&amp;/g, "")
        .replace(/ /g, "")
        .replace(/-/g, "")
    ) {
      console.log(
        "Country Specific Details " +
          country +
          "---" +
          arrHotelLatLongDetails[i].country.toLowerCase() +
          "--" +
          arrHotelLatLongDetails[i].lat +
          "--" +
          arrHotelLatLongDetails[i].lng +
          "--" +
          arrHotelLatLongDetails[i].hoteltitle
      );

      centerLat = arrHotelLatLongDetails[i].lat;
      centerLong = arrHotelLatLongDetails[i].lng;

      /*Set Zoom Level by couuntry*/
      if (country == "uae" || country == "saudiarabia") {
        map.setZoom(13);
      } else if (country == "indonesia") {
        map.setZoom(9);
      } else if (country == "mauritius") {
        map.setZoom(13);
      } else if (country == "egypt") {
        map.setZoom(6);
      } else if (country == "morocco") {
        map.setZoom(12);
      } else if (country == "theamericas") {
        map.setZoom(3);
      } else if (country == "europemiddleeastafrica") {
        map.setZoom(2);
      } else {
        map.setZoom(4);
      }

      /*by default open marker by couuntry name. Array allMarkerIds[20] contains marker Ids */
      if (
        country == "saudiarabia" ||
        country == "morocco" ||
        country == "mauritius" ||
        country == "uae"
      ) {
        if (country == "saudiarabia") {
          google.maps.event.trigger(
            allMarkerIds[getDestinationCountryIndex("saudiarabia")],
            "click"
          );
        } else if (country == "morocco") {
          google.maps.event.trigger(
            allMarkerIds[getDestinationCountryIndex("morocco")],
            "click"
          );
        } else if (country == "mauritius") {
          google.maps.event.trigger(
            allMarkerIds[getDestinationCountryIndex("mauritius")],
            "click"
          );
          
        }

        else if (country == "uae") {
          google.maps.event.trigger(
            allMarkerIds[getDestinationCountryIndex("uae")],
            "click"
          );
          
        }
      }
      map.setCenter(new google.maps.LatLng(centerLat, centerLong));
      break;
    }
  }
}

$("#omo .mo-continent-name").click(function () {
  var tempCountry = $(this)
    .html()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/&amp;/g, "")
    .replace(/ /g, "")
    .replace(/-/g, "");
  console.log(tempCountry);
  changeMapCenter(tempCountry);

  //$(".mo-continent-name").each(function () {
  //    if ($(this).hasClass("active")) {
  //        var tempCountry = $(this).html().toLowerCase().replace(/,/g, '').replace(/&amp;/g, '').replace(/ /g, '').replace(/-/g, '');
  //        console.log(tempCountry);
  //        changeMapCenter(tempCountry);
  //    }
  //});
});

var styles = {
  default: null,
  silver: [
    {
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
  ],
};

/* Template for marker popup*/
function fnInfoHtmlTemplate(
  image,
  hoteltitle,
  email,
  phone,
  phoneNumber2,
  url,
  address
) {
  if (image == "") {
    image = "/images/OberoiHotels/map-popup-img.jpg";
  }

  var isExist = url.includes("mandarinoriental");

  if (isExist == true) {
    return (
      "<div class='map-popup'> <div class='map-popup-img'> <a href='javascript:;' data-moUrl='" +
      url +
      "' class='moMenuLink'><img src='" +
      image +
      "' width='175' height='187' alt='Hotel Image'></a> </div> <div class='map-popup-detail'> <div class='map-popup-hdng'><a href='javascript:;' data-moUrl='" +
      url +
      "' class='moMenuLink'>" +
      hoteltitle +
      "</a></div> <ul class='map-popup-list'> <li> <span>Address</span> <span>" +
      address +
      "</span></li> <li> <span>Email</span> <span><a href='mailto:" +
      email +
      "'>" +
      email +
      "</a></span></li> <li> <span>Reservations</span> <span>" +
      phoneNumber2 +
      "</span> </li><li> <span>Hotel</span> <span>" +
      phone +
      "</span> </li> </ul> <a href='javascript:;' data-moUrl='" +
      url +
      "' class='map-popup-btn moMenuLink'>Explore</a> </div> </div>"
    );
  } else {
    return (
      "<div class='map-popup'> <div class='map-popup-img'> <a href='" +
      url +
      "'><img src='" +
      image +
      "' width='175' height='187' alt='Hotel Image'></a> </div> <div class='map-popup-detail'> <div class='map-popup-hdng'><a href='" +
      url +
      "'>" +
      hoteltitle +
      "</a></div> <ul class='map-popup-list'> <li> <span>Address</span> <span>" +
      address +
      "</span></li> <li> <span>Email</span> <span><a href='mailto:" +
      email +
      "'>" +
      email +
      "</a></span></li> <li> <span>Reservations</span> <span>" +
      phoneNumber2 +
      "</span> </li><li> <span>Hotel</span> <span>" +
      phone +
      "</span> </li> </ul> <a href='" +
      url +
      "' class='map-popup-btn'>Explore</a> </div> </div>"
    );
  }
}

$("#map-canvas").mousemove(function (event) {
  var relX = event.pageX - $(this).offset().left;
  var relY = event.pageY - $(this).offset().top;
  var relBoxCoords = "(" + relX + "," + relY + ")";

  //console.log(relBoxCoords);
});

/* get the index of first country from JSON data*/
function getDestinationCountryIndex(country) {
  var index = 0;
  for (var i = 0; i < arrHotelLatLongDetails.length; i++) {
    if (
      arrHotelLatLongDetails[i].country.toLowerCase() == country.toLowerCase()
    ) {
      index = i;
      break;
    }
  }
  return index;
}

/*function fnMapDatadetails(){
    var hotelCodes = objLiThis.data('hotelcode');
    if (hotelCodes && !objLiThis.next().hasClass('map-popup-detail')) {
        $(".destionation-country-wrap .map-popup-detail").remove();
        var $mapPopupClone = $(".map-popup-detail").clone();
        $mapPopupClone.insertAfter(objLiThis); 
    }
}*/

// $(".destination-hotels-list ul li a").click(function () {
//   $(this).toggleClass("active");
// });
