# Bare Tooltip

Basic tooltip plugin written in js with prototypes for easy customization.


## Dependencies

- jQuery or Zepto


## How to use

```javascript
var instance = new BareTooltip(element, optional_settings);
// where element could be either a regular DOM element
// or a jQuery/Zepto object

instance.setup();
// seperated because it allows easier customization
// however, there is the 'setup_immediately' setting
```

If you provide a jQuery/Zepto object, you can link multiple triggers.
For example, say you have two trigger elements with 'click' as trigger type.
If you click on the first trigger and then second, then the first tooltip
will disappear. Check the demo for a real example.

### How to add data

- tooltip_data setting (html or function which returns html)
- child element with the class 'tooltip-data'
- element next to self (trigger) with the class 'tooltip-data'
- 'data-tooltip' attribute
- 'title' attribute

### Other ways to add css classes

You can set the attribute 'data-tooltip-classes' on the element(s) and
their parents to provide extra css classes.


## Settings

```javascript
// with defaults
trigger_type = "hover"; // or "click";
tooltip_klass = "tooltip"; // tooltip element css class
animation_speed = 350; // opacity transition duration, etc.
timeout_duration = 0; // duration in ms, 0 to disable
hide_on_document_click = true; // or false. Uses $(elem).one()
setup_immediately = false; // or true; setup = context and event binding
delegate_selector = false; // if present, then used as delegation selector
tooltip_data = false; // tooltip {{CONTENT}} html option (can also be function)

template = '<div class="{{CLASSES}}">' +
  '<div class="content">{{CONTENT}}</div>' +
  '<div class="arrow"></div>' +
'</div>';
```


## To do

- Add 'extensibility' piece to readme
