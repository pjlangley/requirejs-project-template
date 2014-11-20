module.exports = function( grunt ) {
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: '../public/assets/js',
          out: '../public/assets/js/prod/prod-almond.js',
          name: 'vendor/almond',
          include: 'main',
          mainConfigFile: '../public/assets/js/main.js' // Ensures paths specified in requirejs.config are available
        }
      }
    }
  });
};
