let iframe_width, iframe_height, map_location;

$(function() {
  iframe_width = $("#map_hook").attr("data-width");
  iframe_height = (iframe_width * 9) / 16;
  map_location = $("#map_hook").attr("data-map_location");

  $("#map_hook").after("<div id='rmap_overlay'><div id='rmap_close'>&#10006</div></div> \
    <iframe id='rmap_iframe' src='" + map_location + "' frameborder='2' scrolling='no' width='" + iframe_width + "px' height='" + iframe_height + "px'></iframe> \
    <div id='rmap_popup'>Click here to enlarge the Map</div>");
  $("#rmap_overlay").css({"display": "none", "position": "fixed", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "background": "#000", "opacity": "0.85", "z-index": "999990", "overflow": "hidden"});
  $("#rmap_close").css({"position": "fixed", "top": "1vh", "left": "96vw", "color": "#FFF", "font-famly": "", "font-size": "60px", "font-weight": "bold", "cursor": "pointer"});
  $("#rmap_iframe").css({"position": "relative", "display": "block", "margin": "0 auto", "z-index": "999991"});
  $("#rmap_popup").css({"cursor": "pointer", "text-decoration": "underline", "text-align": "right"}).on("click", rmap_popup);
  $("#rmap_close, #rmap_overlay").on("click", rmap_unpop);
});

function rmap_popup() {
  $("#rmap_overlay").show();
  $("#rmap_popup").hide();

  let iwidth = window.innerWidth * 0.9;
  let iheight = window.innerHeight * 0.9;

  if(iheight >= (iwidth * 9) / 16) {
    iheight = (iwidth * 9) / 16;
    iheight = (iheight / window.innerHeight) * 100;
    iwidth = 90;
  } else {
    iwidth = (iheight * 16) / 9;
    iwidth = (iwidth / window.innerWidth) * 100;
    iheight = 90;
  }

  $("#rmap_iframe").css({"width": iwidth + "vw", "height": iheight + "vh", "margin-top": (100 - iheight) / 2 + "vh"});
}

function rmap_unpop() {
  $("#rmap_overlay").hide();
  $("#rmap_popup").show();
  $("#rmap_iframe").css({"width": iframe_width + "px", "height": iframe_height + "px", "margin-top": "0"});
}