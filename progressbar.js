$( function() {
    $("#progressbar").css({ 'background': 'LightPink' });
    $( "#progressbar" ).progressbar({
      max: 100
    });
    var tick_function = function() {
    var value = $("#progressbar").progressbar("option", "value");
    value += 20;
    $("#progressbar").progressbar("option", "value", value);
    if (value <= 100) {
        window.setTimeout(tick_function, 6000);
    } else {
        $('#progressbar').progressbar('option', 'value', 0);
        value = 0;
    }
   };
   window.setTimeout(tick_function, 6000);
  });
