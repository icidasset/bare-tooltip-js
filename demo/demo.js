(function() {

  var tooltip, tooltip_cd, tooltip_ef, $cd, $ef;

  // show tooltip on hover
  tooltip = new BareTooltip($(".has-tooltip"));
  tooltip.setup();

  // show tooltip on click
  $cd = $(".has-tooltip-on-click").filter(".c, .d");
  $ef = $(".has-tooltip-on-click").filter(".e, .f");

  tooltip_cd = new BareTooltip($cd, { trigger_type: "click" });
  tooltip_ef = new BareTooltip($ef, { trigger_type: "click", timeout_duration: 1000 });

  tooltip_cd.setup();
  tooltip_ef.setup();

  // globalize
  window.tooltip_instances = [
    tooltip, tooltip_cd, tooltip_ef
  ];

}());
