module.exports = function (grunt) {
  var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: 'Development/templates/scss',
          src: '*.scss',
          dest: 'Development/css',
          ext: '.css'
        }]
      },
      prod: {
        options: {
          outputStyle: 'compressed',
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'Development/templates/scss',
          src: '*.scss',
          dest: 'Development/css',
          ext: '.css'
        }]
      }
    },
    pug: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [{
          cwd: "Development/templates/",
          src: "**/*.pug",
          dest: "Development/",
          expand: true,
          ext: ".html"
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'Development/templates/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'Development/images/'
        }]
      }
    },
    watch: {
      sass: {
        files: ['Development/templates/scss/*.{scss,sass}'],
        tasks: ['sass:dev']
      },
      pug: {
        files: ['Development//templates/*.pug'],
        tasks: ['pug:compile']
      },
      imagemin: {
        files: ['Development/templates/images/*.{png,jpg,gif}'],
        tasks: ['imagemin:dynamic']
      }

    }


  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', [
    'watch'
  ]);

};