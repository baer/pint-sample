module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['src/js/main.js']
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['apple-touch-icon-precomposed.png', 'index.html', 'favicon.ico'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    },
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
    },
    cssmin: {
      combine: {
        files: {
          './dist/css/main.min.css': [
            './src/css/bootstrap.css',
            './src/css/bootstrap-theme.css',
            './src/css/main.css'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'copy']);
};