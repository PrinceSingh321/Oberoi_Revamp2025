function filterComp() {
  $(".c-filter").on("click", function () {
    var $item = $(this).attr("data-item");

    if ($item == "all") {
      $(".filterable").removeClass("is-hidden");
    } else {
      $(".filterable").addClass("is-hidden");
      $(".filterable[data-item=" + $item + "]").removeClass("is-hidden");
    }
  });
}
