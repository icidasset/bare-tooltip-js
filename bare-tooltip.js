/*

  + Bare Tooltip

*/

var root = window;
root.BareTooltip = (function($) {
  var __bind = function(fn, me) {
    return function() { return fn.apply(me, arguments); };
  };

  var default_template = '<div class="{{CLASSES}}">' +
    '<div class="content">{{CONTENT}}</div>' +
    '<div class="arrow"></div>' +
  '</div>';

  /**************************************
   *  Default settings
   */
  BT.prototype.settings = {
    trigger_type: "hover",
    tooltip_klass: "tooltip",
    animation_speed: 350,
    template: default_template
  };



  /**************************************
   *  State (instance.state)
   */
  // $tooltip_element
  // $current_trigger



  /**************************************
   *  Constructor
   */
  function BT(element, settings) {
    var original_settings = this.settings;

    if (settings) {
      this.settings = {};
      $.extend(this.settings, original_settings, settings);
    }

    // state object
    this.state = {};

    // bind to self
    this.bind_to_self([
      "trigger_mouseover_handler", "trigger_mouseout_handler",
      "trigger_click_handler", "move_tooltip"
    ]);

    // cache element
    this.$el = (function() {
      if (element instanceof $) {
        return element;
      } else if ($.isArray(element)) {
        return element;
      } else {
        return $(element);
      }
    }());

    // further setup
    this.setup();
  }



  /**************************************
   *  Setup
   */
  BT.prototype.setup = function() {
    switch (this.settings.trigger_type) {
      case "hover":
        this.$el.on("mouseover", this.trigger_mouseover_handler);
        this.$el.on("mouseout", this.trigger_mouseout_handler);
        break;
      case "click":
        this.$el.on("click", this.trigger_click_handler);
        break;
      default:
        console.error("Invalid BareTooltip trigger type");
        return;
    }
  };


  /**************************************
   *  Tooltip methods
   */
  BT.prototype.new_tooltip = function(content, additional_classes) {
    var klasses, h, $tooltip;

    klasses = additional_classes || [];
    klasses.unshift(this.settings.tooltip_klass);

    // html
    h = this.settings.template;
    h = h.replace("{{CLASSES}}", klasses.join(" "));
    h = h.replace("{{CONTENT}}", content);

    // new Zepto/jQuery element
    this.state.$tooltip_element = $tooltip = $(h);

    // some css
    $tooltip.css({
      opacity: 0,
      position: "absolute"
    });

    // add to dom
    $("body").append($tooltip);
  };


  BT.prototype.setup_tooltip = function(trigger) {
    var content, add_classes,
        $trigger = $(trigger), $add;

    // set content
    content = (function() {
      if ($trigger.children(".tooltip-data").length) {
        return $trigger.children(".tooltip-data").html();

      } else if ($trigger.next(".tooltip-data").length) {
        return $trigger.next(".tooltip-data").html();

      } else if ($trigger.attr("data-tooltip")) {
        return $trigger.attr("data-tooltip");

      } else if ($trigger.attr("title")) {
        return $trigger.attr("title");

      } else {
        return "";

      }
    })();

    // set classes
    $add = $trigger.parents("[data-tooltip-classes]");
    add_classes = [];

    if ($trigger.attr("data-tooltip-classes")) {
      add_classes.push($trigger.attr("data-tooltip-classes"));
    }

    $add.each(function() {
      add_classes.push($(this).attr("data-tooltip-classes"));
    });

    // remove old tooltip (temporary)
    if (this.state.$tooltip_element) {
      this.hide_and_remove_tooltip();
    }

    // current trigger
    this.state.$current_trigger = $trigger;

    // make new tooltip
    this.new_tooltip(content, add_classes);
  };



  /**************************************
   *  Main event handlers
   */
  BT.prototype.trigger_mouseover_handler = function(e) {
    this.setup_tooltip(e.currentTarget);

    // move tooltip
    $(e.currentTarget).on("mousemove", this.move_tooltip);
    this.move_tooltip(e);

    // show
    this.show_tooltip();
  };


  BT.prototype.trigger_mouseout_handler = function(e) {
    $(e.currentTarget).off("mousemove", this.move_tooltip);

    // hide and remove
    this.hide_and_remove_tooltip();
  };


  BT.prototype.trigger_click_handler = function(e) {
    var setup_new = function() {
      this.setup_tooltip(e.currentTarget);
      this.move_tooltip(e);
      this.show_tooltip();
    };

    if (this.state.$current_trigger) {
      var current_trigger = this.state.$current_trigger[0];
      this.hide_and_remove_tooltip();
      if (current_trigger !== e.currentTarget) setup_new.call(this);
    } else {
      setup_new.call(this);
    }
  };



  /**************************************
   *  Show, hide, position, etc.
   */
  BT.prototype.move_tooltip = function(e) {
    var $t = this.state.$tooltip_element,
        $trigger = $(e.currentTarget);

    if (this.settings.trigger_type == "click") {
      $t.css({
        left: $trigger.offset().left + Math.round($trigger.width() / 2) - Math.round($t.width() / 2),
        top: $trigger.offset().top - $t.height() - 5
      });

    } else {
      $t.css({
        left: e.pageX - ($t.width() / 2),
        top: e.pageY - $t.height() - 18
      });

    }
  };


  BT.prototype.show_tooltip = function() {
    this.state.$tooltip_element.animate({ opacity: 1 }, this.settings.animation_speed);
  };


  BT.prototype.hide_and_remove_tooltip = function() {
    var self = this, $tooltip = self.state.$tooltip_element;
    self.state.$current_trigger = null;
    self.state.$tooltip_element = null;
    $tooltip.animate(
      { opacity: 0 }, {
        duration: this.settings.animation_speed,
        complete: function() { $tooltip.remove(); }
      }
    );
  };



  /**************************************
   *  Utility functions
   */
  BT.prototype.bind_to_self = function(array) {
    this.bind(array);
  };


  BT.prototype.bind = function(array, self, method_object) {
    self = self || this;

    // where to the method lives
    method_object = method_object || self;

    // loop
    $.each(array, function(idx, method_name) {
      method_object[method_name] = __bind(method_object[method_name], self);
    });
  };



  /**************************************
   *  Return
   */
  return BT;

})(Zepto);
