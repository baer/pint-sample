module.exports = {   
  name: 'test',

  build: [
    'jshint'
  ],

  config: {
    jshint: {
      files: ['src/js/main.js']
    }
  }
};