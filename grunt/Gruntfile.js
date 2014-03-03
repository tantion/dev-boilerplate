// vim:ts=2:sts=2:sw=2:
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      debug: {
        options: {
          port: 9000,
          base: 'app/'
        }
      },
      dist: {
        options: {
          port: 9001,
          base: 'dist/'
        }
      }
    }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['connect:dist']);

};
