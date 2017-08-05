let iframe_width = 800;
let iframe_height = 450;

$(function() {
    $("#map_hook").after("<div id='rmap_overlay'><div id='rmap_close'>&#10006</div></div> \
      <iframe id='rmap_iframe' src='https://map-infographics.herokuapp.com/' frameborder='2' scrolling='no' width='" + iframe_width + "px' height='" + iframe_height + "px'></iframe> \
      <div id='rmap_popup'>Click here to enlarge the Map</div>");
    $("#rmap_overlay").css({"display": "none", "position": "fixed", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "background": "#000", "opacity": "0.85", "z-index": "999990", "overflow": "hidden"});
    $("#rmap_close").css({"position": "fixed", "top": "1vh", "left": "94vw", "color": "#FFF", "font-famly": "", "font-size": "40px", "font-weight": "bold"});
    $("#rmap_iframe").css({"position": "relative", "display": "block", "margin": "0 auto", "z-index": "999991"});
    $("#rmap_popup").css({"cursor": "pointer", "text-decoration": "underline", "text-align": "right"}).on("click", rmap_popup);
    $("#rmap_close, #rmap_overlay").on("click", rmap_unpop);
});

function rmap_popup() {
  $("#rmap_overlay").show();
  $("#rmap_popup").hide();
  $("#rmap_iframe").css({"width": "86vw", "height": "86vh", "margin-top": "7vh"});
}

function rmap_unpop() {
  $("#rmap_overlay").hide();
  $("#rmap_popup").show();
  $("#rmap_iframe").css({"width": iframe_width + "px", "height": iframe_height + "px", "margin-top": "0"});
}