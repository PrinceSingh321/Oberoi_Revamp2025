document.addEventListener("DOMContentLoaded", function () {
  const dataArrayAqi = [
    { min: 0, max: 20, color: "#4DB85C" },
    { min: 21, max: 40, color: "#43984F" },
    { min: 41, max: 50, color: "#6D7C4C" },
    { min: 51, max: 70, color: "#836E4C" },
    { min: 71, max: 109, color: "#956349" },
    { min: 110, max: 150, color: "#AA5648" },
    { min: 151, max: 190, color: "#B94B47" },
    { min: 191, max: 200, color: "#B94B47" },
    { min: 201, max: 300, color: "#D23643" },
    { min: 301, max: 500, color: "#963236" },
    { min: 501, max: 700, color: "#803131" },
    { min: 701, max: 1000, color: "#582F29" },
  ];

  function fnGetColorForValue(value) {
    for (const item of dataArrayAqi) {
      if (value >= item.min && value <= item.max) {
        return item.color;
      }
    }
    return "#582F29"; // Default color if value is out of range
  }

  const elements = document.querySelectorAll(".aqi-bg");

  elements.forEach((element) => {
    const dataValue = element.getAttribute("data-value");
    // Display the data value
    console.log(dataValue);

    element.style.backgroundColor = fnGetColorForValue(dataValue);
    element.nextElementSibling.innerHTML = dataValue;
    if (dataValue > 900) {
      element.style.backgroundColor = "#f0024";
    }
  });

  $("#showAqi").click(function () {
    $(this).toggleClass("active");
    $(".aqiComponentWrap").slideToggle(300);
    $("#showMap, #showsustain").removeClass("map-opened, pop-active");
    $("#mapArea, #sustain-main").hide();
  });
  $("#showMap, #showsustain").click(function () {
    $(".aqiComponentWrap").hide();
    $("#showAqi").removeClass("active");
  });
});
