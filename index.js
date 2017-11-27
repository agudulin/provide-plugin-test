var greenify = require('./greenify')
var noui = require('./jquery.nouislider')

greenify($)
noui($)

$(() => {
  //var foo = require('provide-plugin-foo-test')
  var b3 = require('./b3_glue')
  b3()

  $('#slider').noUiSlider({
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  })
})
