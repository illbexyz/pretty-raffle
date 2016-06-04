(function(global) {
  'use strict'

  global.toolbox.router.get('/(.*)', global.toolbox.fastest, {
    origin: /\.(?:googleusercontent|google|googleapis|gstatic|firebaseio|appspot)\.com$/
  })
  global.toolbox.router.get('/(.+)', global.toolbox.fastest, {
    origin: 'https://pretty-raffle.firebaseapp.com'
  })
  global.toolbox.router.get('/*', global.toolbox.fastest);
})(self)
