var greenify = require('./greenify')
var noui = require('./jquery.nouislider')
var foo = require('provide-plugin-foo-test')

noui($)

$(() => {
  foo()

  $('#slider').noUiSlider({
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  })
})
