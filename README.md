# Bare Tooltip

Basic tooltip plugin in javascript.


## Settings

```javascript
// with defaults

trigger_type = "hover"; // or "click";
tooltip_klass = "tooltip"; // tooltip element css class
animation_speed = 350; // opacity transition duration, etc.

template = '<div class="{{CLASSES}}">' +
  '<div class="content">{{CONTENT}}</div>' +
  '<div class="arrow"></div>' +
'</div>';
```


## To do

- Implement optional 'hide on timeout' for 'has-tooltip-on-click'
- Alt demo with jQuery
- Browser testing
