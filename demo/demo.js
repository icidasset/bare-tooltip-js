(function() {

  window.bare_tooltip_instances = [];

  // show tooltip on hover
  $(".has-tooltip").each(function() {
    window.bare_tooltip_instances.push(
      new BareTooltip(this)
    );
  });

  // show tooltip on click
  $(".has-tooltip-on-click").each(function() {
    window.bare_tooltip_instances.push(
      new BareTooltip(this, { trigger_type: "click" })
    );
  });

}());
