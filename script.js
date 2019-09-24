//  пеключение кнопок 
function toogleColor() {
  $(this)
    .siblings()
    .removeClass("toogle-button");
  $(this).toggleClass("toogle-button");
}

$("#color").click(toogleColor);

$("#backgroundColor").click(toogleColor);

$(function() {
  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function(nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }
  function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    if ($("#color").hasClass("toogle-button"))
      $("#swatch").css("color", "#" + hex);

    if ($("#backgroundColor").hasClass("toogle-button"))
      $("#swatch").css("background-color", "#" + hex);
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $("#red").slider("value", 0);
  $("#green").slider("value", 0);
  $("#blue").slider("value", 0);
});