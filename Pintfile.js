module.exports = {
  jobs: [
    require('./build/css.js'),
    require('./build/javascript.js'),
    require('./build/static.js'),
    require('./build/test.js')
  ]
};