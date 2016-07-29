# browserify-underscore-templates
A basic browserify transform to compile underscore templates

# Example

templates/view.html:
```html
<h1><%- title %></h1>
<p><%- text %></p>
```

src/view.js
```javascript
var tpl = require('../templates/test.html');

console.log(tpl({
  title: 'This is a test title'
  text: 'This is test content'
}));
```

cli:
```
$ browserify -t [ browserify-underscore-templates --extension .html ] ./src/view.js ./templates/test.html > ./views.js
```

# Alterantives

There is an alternative compiler at https://github.com/robrichard/browserify-compile-templates.
