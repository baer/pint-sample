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
    console.log('Set up all the CSS');
  },

  finalize: function() {
    console.log('Tear down all the CSS');
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