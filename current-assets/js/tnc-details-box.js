$(document).ready(function () {
  $(".tnc-details").click(function () {
    $(this).toggleClass("actv");
    $(this).next(".tnc-details-content").slideToggle();
  });

  $(".arrowComp").click(function () {
    $(".forHiddenComp").toggleClass("active");
  });
});

const targetDiv = document.querySelector(".forHiddenComp .description-col");

// Function to add or remove class based on height
function checkHeight(entries) {
  entries.forEach((entry) => {
    if (entry.contentRect.height > 575) {
      targetDiv.classList.add("height-exceeded");
    } else {
      targetDiv.classList.remove("height-exceeded");
    }
  });
}

// Create a ResizeObserver instance
const resizeObserver = new ResizeObserver(checkHeight);

// Start observing the target div
resizeObserver.observe(targetDiv);

// To stop observing, use:
// resizeObserver.unobserve(targetDiv);
// resizeObserver.disconnect();
