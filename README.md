# Bare Tooltip

Basic tooltip plugin written in js with prototypes for easy customization.


## How to use

```javascript
var instance = new BareTooltip(element, optional_settings);
// where element could be either a regular DOM element
// or a jQuery/Zepto object
```

If you provide a jQuery/Zepto object, you can link multiple triggers.
For example, say you have two trigger elements with 'click' as trigger type.
If you click on the first trigger and then second, then the first tooltip
will disappear. Check the demo for a real example.


## Settings

```javascript
// with defaults
trigger_type = "hover"; // or "click";
tooltip_klass = "tooltip"; // tooltip element css class
animation_speed = 350; // opacity transition duration, etc.
timeout_duration = 0; // duration in ms, 0 to disable
hide_on_document_click = true; // or false. Uses $(elem).one()

template = '<div class="{{CLASSES}}">' +
  '<div class="content">{{CONTENT}}</div>' +
  '<div class="arrow"></div>' +
'</div>';
```


## To do

- Add 'extensibility' piece to readme
- Browser testing
- Alternate demo with jQuery
