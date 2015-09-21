# ghostmodeify

*prepend browsersync-client script tag to bundle.js*

It will enable `ghost-mode` to synchronize `clicks`, `scrolls`, `location` and 'form' events across connected webviews (browsers, ...)

## Install
```sh
npm install ghostmodeify --save-dev
```

## Usage
```js
var browserify      = require('browserify')
var ghostmodeify  = require('ghostmodeify')

var b = browserify()
b.add('/path/to/your/source/file.js')
b.plugin(ghostmodeify)
b.bundle().pipe(process.stdout)
```
or
```bash
npm install browserify ecstatic -g
ecstatic & browserify index.js -p ghostmodeify > bundle.js
```
or
```bash
npm install watchify ecstatic -g
ecstatic & watchify index.js -p ghostmodeify -o bundle.js -dv
```
where
```html
<!-- index.html -->
<body><script src="bundle.js"></script></body>
```
so that `index.html` is served from `localhost`.

## Roadmap
* Rewride `ghostmodeify` so that it also works when `index.html` is just opened through "doubleclick", which needs a change to `browser-sync`. If you want to help with that, drop me a message 
