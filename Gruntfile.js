module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      css: {
        src: 'jquery.bxslider.css',
        dest: 'dist/jquery.bxslider.min.css'
      }
    },
    uglify: {
      js: {
        files: {
          'dist/jquery.bxslider.min.js': ['jquery.bxslider.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['cssmin:css', 'uglify:js']);
};
