var greenify = require('./greenify')
var noui = require('./jquery.nouislider')

greenify($)
noui($)

$(() => {
  $('a').greenify()

  $('#slider').noUiSlider({
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
})
