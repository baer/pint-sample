module.exports = {   
  name: 'static',

  dependsOn: [
    'css',
    'javascript'
  ],

  build: [
    'copy'
  ],

  initialize: function() {
    console.log('I am an initializer');
  },

  finalize: function() {
    console.log('I am a finalizer');
  },

  config: {
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['apple-touch-icon-precomposed.png', 'index.html', 'favicon.ico'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    }
  }
};