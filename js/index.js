$(function() {
  $("path").on("mouseover", function() {
    $(".info_box").css({"left": (+$(this).position().left + +400) + "px", "top": (+$(this).position().top - +300) + "px"}).show();
    $(".info_box .area_name").text($(this).attr("data-name"));
  })

  $("path").on("mouseout", function() {
    $(".info_box").hide();
  })
});