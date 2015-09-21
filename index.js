var bs = require("browser-sync").create('ghostmode')
var through = require('through2')
var mylocalip = require('my-local-ip')

var opts = {
  ghostMode : { clicks: true, forms: true, scroll: true },
  scrollProportionally: true,
  scrollThrottle: 50,
  scrollRestoreTechnique: 'window.name',
  scrollElements: [],
  scrollElementMapping: [],
  logPrefix: "ghostmode",
  logConnections: true,
  notify: false
}
bs.init(opts)

var text = "setTimeout(function(){var s=document.createElement('script'); s.setAttribute('src', 'http://"+mylocalip()+":3000/browser-sync/browser-sync-client.js');document.body.appendChild(s)},0);"

module.exports = function ghostmodeify (b) {
  b.on('bundle', function () {
    var first = true
    b.pipeline.get('wrap').push(through.obj(
      function (buf, enc, next) {
        if (first) {
            this.push(text)
            first = false
        }
        this.push(buf)
        next()
      }
    ))
  })
}
