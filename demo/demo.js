(function() {

  var t, tc_cd, tc_ef,
      $cd, $ef;

  // show tooltip on hover
  t = new BareTooltip($(".has-tooltip"));

  // show tooltip on click
  $cd = $(".has-tooltip-on-click").filter(".c, .d");
  $ef = $(".has-tooltip-on-click").filter(".e, .f");

  tc_cd = new BareTooltip($cd, { trigger_type: "click" });
  tc_ef = new BareTooltip($ef, { trigger_type: "click", timeout_duration: 1000 });

  // globalize
  window.tooltip_instances = [
    t, tc_cd, tc_ef
  ];

}());
