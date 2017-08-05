$(function() {
    $("#map_hook").after("<div id='rmap_overlay'><div id='rmap_close'>Close</div></div> \
      <iframe id='rmap_iframe' src='https://map-infographics.herokuapp.com/' frameborder='2' scrolling='no' width='800px' height='450px'></iframe> \
      <div id='rmap_popup' style='cursor: pointer; text-decoration: underline; text-align: right;'>Click here to enlarge the Map</div>");
    $("#rmap_overlay").css({"display": "none", "position": "fixed", "width": "100vw", "height": "100vh", "z-index": "999990", "overflow": "hidden"});
    $("#rmap_iframe").css({"margin": "0 auto", "z-index": "999991"});
    $("#rmap_popup").on("click", rmap_popup);
});

function rmap_popup() {
  $("#rmap_overlay").show();
  $("#rmap_iframe").css({"width": "86vw", "height": "86vh"});
  $("#rmap_popup").hide();
}