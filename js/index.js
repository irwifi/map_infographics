$(function() {
  load_data();

  $("path").on("mouseover", function() {
    info_popup($(this));
  });

  $(".info_box, path").on("mouseout", function() {
    $(".info_box").hide();
  });

  $(".info_box").on("mouseover", function() {
    $(".info_box").show();
  });

  $(".map_popup").on("click", map_popup)

  $(".overlay").on("click", map_unpopup)

  $("#defined_pos").on("click", function() {
    $("#defined_pos").addClass("active");
    $("#bottom_right").removeClass("active");
  });

  $("#bottom_right").on("click", function() {
    $("#bottom_right").addClass("active");
    $("#defined_pos").removeClass("active");
  });
});

function info_popup(element) {
  $(".info_box").css({"height": "55%"});
  $(".info_box").css({
    "top": (+$(".map_image").css("height").slice(0, -2) - +$(".info_box").css("height").slice(0, -2)) + "px",
    "left": (+$(".map_image").css("width").slice(0, -2) - +$(".info_box").css("width").slice(0, -2)) + "px"});

  // show the info box at the predefined position
  if($("#defined_pos").hasClass("active")) {
    $(".info_box").css({"left": element.attr("data-left") + "%", "top": element.attr("data-top") + "%"});
  }

  $(".info_box").show();

  update_row(element, "studio");
  update_row(element, "bed1");
  update_row(element, "bed2");
  update_row(element, "bed3");
  update_row(element, "bed4");
  update_row(element, "bed5");

  $(".info_box .area_name").text(element.attr("data-name"));
  $(".info_box .area_vacancy span").text(element.attr("data-vacancy"));
  $(".info_box .area_income span").text(element.attr("data-income"));
  $(".info_box .area_population span").text(element.attr("data-population"));
}

function update_row(area, item) {
  if(area.attr("data-"+item) == "$-1") {
    $(".info_box .area_"+item).parent("li").hide();
    var unit = +$(".info_box").css("width").slice(0, -2)/20; //20% is the width of info_box
    $(".info_box").css("height", (+$(".info_box").css("height").slice(0, -2) - +2*unit) + "px");
    $(".info_box").css("top", (+$(".info_box").css("top").slice(0, -2) + +2*unit) + "px");
  } else {
    $(".info_box .area_"+item).text(area.attr("data-"+item));
    $(".info_box .area_"+item).parent("li").show();
  }
}

function load_data() {
  var data_array = [
      ["Allston", "1584.00", "1756.88", "2164.40", "2832.86", "3424.41", "3872.76", "6.48", "44,000", "21,503", "30", "14"],
      ["Back Bay", "1715.34", "2.444.46", "3196.41", "3919.28", "5066.00", "-1", "4.94", "93,059", "20,628", "41", "18"],
      ["Beacon Hill", "1801.57", "2433.63", "2841.87", "4085.84", "-1", "-1", "1.65", "90,347", "15,824", "43", "16"],
      ["Brighton", "1542.36", "1847.95", "2171.81", "2702.51", "3569.11", "4344.97", "4.11", "50,752", "42,780", "27", "16"],
      ["Brookline", "1609.54", "2100.65", "2799.50", "3533.42", "4266.55", "4899.75", "4.86", "95,518", "58,732", "33", "15"],
      ["Cambridge", "1762.85", "2143.36", "2831.55", "3377.55", "4387.25", "4789.29", "4.40", "79,416", "105,162", "42", "10"],
      ["Chrlestown", "1798.50", "1921.59", "2524.79", "3783.33", "-1", "-1", "4.31", "87,381", "16,439", "44", "8"],
      ["Dorchester", "1608.87", "1356.98", "1853.14", "2405.43", "2997.43", "3304.82", "3.55", "44,553", "130,353", "54", "24"],
      ["East Boston", "1377.67", "1618.51", "2030.40", "2526.82", "3023.71", "3419.60", "3.92", "51,097", "40508", "56", "3"],
      ["Fenway", "1752.55", "2324.04", "2781.80", "3660.73", "4625.00", "-1", "5.70", "40,269", "26,125", "38", "13"],
      ["Jamica Plain", "1227.65", "1708.96", "2173.63", "2905.63", "3368.52", "4045.85", "6.16", "77,480", "35,401", "40", "25"],
      ["Malden", "1282.96", "1543.60", "1866.93", "2335.40", "112.09.44", "-1", "4.55", "54,896", "59.450", "42", "-1.6"],
      ["Medford", "1229.00", "1546.26", "2135.76", "2484.90", "3170.79", "4112.50", "5.58", "76,445", "56,173", "35", "-1"],
      ["Mission Hill", "1535.28", "1899.09", "2349.33", "3109.43", "3826.33", "4572.52", "6.81", "30,487", "15,181", "38", "14"],
      ["Newton", "-1", "1840.00", "2346.60", "3384.51", "4027.15", "-1", "2.60", "122,080", "85,146", "22", "22"],
      ["North End", "1570.50", "2247.45", "2934.42", "3905.67", "3469.00", "-1", "6.875", "88,786", "10,686", "44", "9"],
      ["Quincy", "-1", "1299.84", "1837.57", "2273.25", "-1", "-1", "5.59", "64,155", "92,271", "72", "20"],
      ["Roxbury", "-1", "-1", "2086.00", "3049.00", "3132.00", "-1", "5.24", "28,885", "51,234", "44", "18"],
      ["Somerville", "1855.79", "1972.11", "2182.63", "2949.39", "3777.14", "4825.00", "3.97", "73,106", "75,754", "38", "2"],
      ["South Boston", "1409.67", "1952.44", "2510.14", "3303.86", "3923.35", "-1", "1.40", "77,633", "31,799", "54", "7"],
      ["South End", "1558.75", "2362.34", "2996.30", "3866.71", "4851.03", "-1", "4.71", "62.300", "26,498", "43", "18"],
      ["Symphony", "1800.32", "2356.91", "3066.97", "4163.00", "5536.12", "-1", "8.67", "31,737", "28,441", "38", "20"]
    ];

  $.each(data_array, function( index, value ) {
    $(".map .area" + index).attr({"data-name": value[0], "data-studio": "$"+value[1], "data-bed1": "$"+value[2], "data-bed2": "$"+value[3], "data-bed3": "$"+value[4], "data-bed4": "$"+value[5], "data-bed5": "$"+value[6], "data-vacancy": value[7]+"%", "data-income": "$"+value[8], "data-population": value[9], "data-left": value[10], "data-top": value[11]});
  });
}

function map_popup() {
  $(".overlay").show();
  $(".map_popup_container").show();
  $(".map_container").clone().appendTo(".map_popup_container");
  $(".map_popup_container .map_container").css({"width": "100%"});

  $(".map_popup_container path").on("mouseover", function() {
    info_popup($(this));
    $(".main_container .info_box").hide();
  });

  $(".map_popup_container .info_box, .map_popup_container path").on("mouseout", function() {
    $(".map_popup_container .info_box").hide();
  });

  $(".map_popup_container .info_box").on("mouseover", function() {
    $(".map_popup_container .info_box").show();
  });

  $(".map_popup_container .map_label").remove();

  $(".info_box .stats").css("font-size", "120%");
  $(".area_name").css("font-size", "200%");
}

function map_unpopup() {
  $(".overlay").hide();
  $(".map_popup_container .map_container").remove();
  $(".map_popup_container").hide();
  $(".info_box .stats").css("font-size", "100%");
  $(".area_name").css("font-size", "125%");
}