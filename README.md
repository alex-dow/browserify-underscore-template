# browserify-underscore-template
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
  title: 'Test Title'
  text: 'This is test content'
}));
```

cli:
```
$ browserify -t [ browserify-underscore-templates --extension .html ] ./src/view.js ./templates/test.html > ./views.js
$ node views.js
<h1>Test Title</h1>
<p>This is test content</p>
```

# Alterantives

There is an alternative compiler at https://github.com/robrichard/browserify-compile-templates.
