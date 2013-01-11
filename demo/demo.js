(function() {

  // show tooltip on hover
  var t = new BareTooltip($(".has-tooltip"));

  // show tooltip on click
  var tc = new BareTooltip($(".has-tooltip-on-click"), { trigger_type: "click" });

}());
