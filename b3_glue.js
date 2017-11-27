var ctx = require.context('./node_modules/provide-plugin-foo-test', true, /\.js$/);
console.log(ctx.keys())

module.exports = function() {
  ['./index.js'].forEach(ctx)
}

