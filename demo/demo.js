(function() {

  // show tooltip on hover
  var t = new BareTooltip($(".has-tooltip"));

  // show tooltip on click
  var tc_cd = new BareTooltip($(".has-tooltip-on-click").filter(".c, .d"), { trigger_type: "click" });
  var tc_ef = new BareTooltip($(".has-tooltip-on-click").filter(".e, .f"), { trigger_type: "click" });

  // globalize
  window.tooltip_instances = [
    t, tc_cd, tc_ef
  ];

}());
