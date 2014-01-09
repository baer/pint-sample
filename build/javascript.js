module.exports = {   
  name: 'javascript',

  dependsOn: {},

  build: [
    'uglify'
  ],

  config: {
    uglify: {
      dist: {
        files: {
          './dist/js/main.min.js': [
            './src/js/vendor/jquery-1.10.2.min.js',
            './src/js/vendor/bootstrap.js',
            './src/js/main.js'
          ]
        }
      }
    }
  }
};