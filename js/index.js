$(function() {
  load_data();

  $("path").on("mouseover", function() {
    $(".info_box").css({"left": (+$(this).position().left + +200) + "px", "top": (+$(this).position().top - +40) + "px"}).show();
    $(".info_box .area_name").text($(this).attr("data-name"));

    update_row($(this), "studio");
    update_row($(this), "bed1");
    update_row($(this), "bed2");
    update_row($(this), "bed3");
    update_row($(this), "bed4");
    update_row($(this), "bed5");

    $(".info_box .area_bed1").text($(this).attr("data-bed1"));
    $(".info_box .area_bed2").text($(this).attr("data-bed2"));
    $(".info_box .area_bed3").text($(this).attr("data-bed3"));
    $(".info_box .area_bed4").text($(this).attr("data-bed4"));
    $(".info_box .area_bed5").text($(this).attr("data-bed5"));
    $(".info_box .area_vacancy span").text($(this).attr("data-vacancy"));
    $(".info_box .area_income span").text($(this).attr("data-income"));
    $(".info_box .area_population span").text($(this).attr("data-population"));

    var obj_array = ["studio", "bed1", "bed2", "bed3", "bed4", "bed5"];
    $.each(obj_array, function(index, value) {

      if($(this).attr("data-"+value) == "$-1") {
        alert(1)
      }
    });
  });

  $(".info_box, path").on("mouseout", function() {
    $(".info_box").hide();
  });

  $(".info_box").on("mouseover", function() {
    $(".info_box").show();
  });
});

function update_row(area, item) {
  if(area.attr("data-"+item) == "$-1") {
    $(".info_box .area_"+item).parent("li").hide();
  } else {
    $(".info_box .area_"+item).text(area.attr("data-"+item));
    $(".info_box .area_"+item).parent("li").show();
  }
}

function load_data() {
  var data_array = [
      ["Allston", "1584.00", "1756.88", "2164.40", "2832.86", "3424.41", "3872.76", "6.48", "44,000", "21,503"],
      ["Back Bay", "1715.34", "2.444.46", "3196.41", "3919.28", "5066.00", "-1", "4.94", "93,059", "20,628"],
      ["Beacon Hill", "1801.57", "2433.63", "2841.87", "4085.84", "-1", "-1", "1.65", "90,347", "15,824"],
      ["Brighton", "1542.36", "1847.95", "2171.81", "2702.51", "3569.11", "4344.97", "4.11", "50,752", "42,780"],
      ["Brookline", "1609.54", "2100.65", "2799.50", "3533.42", "4266.55", "4899.75", "4.86", "95,518", "58,732"],
      ["Cambridge", "1762.85", "2143.36", "2831.55", "3377.55", "4387.25", "4789.29", "4.40", "79,416", "105,162"],
      ["Chrlestown", "1798.50", "1921.59", "2524.79", "3783.33", "-1", "-1", "4.31", "87,381", "16,439"],
      ["Dorchester", "1608.87", "1356.98", "1853.14", "2405.43", "2997.43", "3304.82", "3.55", "44,553", "130,353"],
      ["East Boston", "1377.67", "1618.51", "2030.40", "2526.82", "3023.71", "3419.60", "3.92", "51,097", "40508"],
      ["Fenway", "1752.55", "2324.04", "2781.80", "3660.73", "4625.00", "-1", "5.70", "40,269", "26,125"],
      ["Jamica Plain", "1227.65", "1708.96", "2173.63", "2905.63", "3368.52", "4045.85", "6.16", "77,480", "35,401"],
      ["Malden", "1282.96", "1543.60", "1866.93", "2335.40", "112.09.44", "-1", "4.55", "54,896", "59.450"],
      ["Medford", "1229.00", "1546.26", "2135.76", "2484.90", "3170.79", "4112.50", "5.58", "76,445", "56,173"],
      ["Mission Hill", "1535.28", "1899.09", "2349.33", "3109.43", "3826.33", "4572.52", "6.81", "30,487", "15,181"],
      ["Newton", "-1", "1840.00", "2346.60", "3384.51", "4027.15", "-1", "2.60", "122,080", "85,146"],
      ["North End", "1570.50", "2247.45", "2934.42", "3905.67", "3469.00", "-1", "6.875", "88,786", "10,686"],
      ["Quency", "-1", "1299.84", "1837.57", "2273.25", "-1", "-1", "5.59", "64,155", "92,271"],
      ["Somerville", "1855.79", "1972.11", "2182.63", "2949.39", "3777.14", "4825.00", "3.97", "73,106", "75,754"],
      ["South Boston", "1409.67", "1952.44", "2510.14", "3303.86", "3923.35", "-1", "1.40", "77,633", "31,799"],
      ["South End", "1558.75", "2362.34", "2996.30", "3866.71", "4851.03", "-1", "4.71", "62.300", "26,498"]
    ];

  $.each(data_array, function( index, value ) {
    $(".map .area" + index).attr({"data-name": value[0], "data-studio": "$"+value[1], "data-bed1": "$"+value[2], "data-bed2": "$"+value[3], "data-bed3": "$"+value[4], "data-bed4": "$"+value[5], "data-bed5": "$"+value[6], "data-vacancy": value[7]+"%", "data-income": "$"+value[8], "data-population": value[9]});
  });
}