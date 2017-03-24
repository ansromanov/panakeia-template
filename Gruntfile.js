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
          dest: 'Development/templates/postcss',
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
          cwd: 'Production/templates/scss',
          src: '*.scss',
          dest: 'Production/templates/postcss',
          ext: '.css'
        }]
      }
    },
    pug: {
      dev: {
        options: {
          client: false,
          pretty: true
        },
        files: [{
          cwd: "Development/templates/pug",
          src: "**/*.pug",
          dest: "Development/",
          expand: true,
          ext: ".html"
        }]
      },
      prod: {
        options: {
          client: false,
          pretty: true
        },
        files: [{
          cwd: "Production/templates/pug",
          src: "**/*.pug",
          dest: "Production/",
          expand: true,
          ext: ".html"
        }]
      }
    },
    imagemin: {
      dev: {
        files: [{
          expand: true,
          cwd: 'Development/templates/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'Development/images/'
        }]
      },
      prod: {
        files: [{
          expand: true,
          cwd: 'Production/templates/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'Production/images/'
        }]
      }
    },
    postcss: {
      dev: {
        options: {
          map: {
            inline: false,
            annotation: 'Development/templates/postcss'
          },
          processors: [
            require('autoprefixer')(),
            require('stylelint')()
          ],
        },
        dist: {
          src: 'Development/templates/postcss/style.css',
          dest: 'Development/css/style.css',
        }
      },
      prod: {
        options: {
          map: {
            inline: false,
            annotation: 'Development/templates/postcss'
          },
          processors: [
            require('autoprefixer')()
          ],
        },
        dist: {
          src: 'Development/templates/postcss/style.css',
          dest: 'Development/css/style.css',
        }
      }
    },
    watch: {
      sass_dev: {
        files: ['Development/templates/scss/*.{scss,sass}'],
        tasks: ['sass:dev'],
      },
      sass_prod: {
        files: ['Production/templates/scss/*.{scss,sass}'],
        tasks: ['sass:prod'],
      },
      pug_dev: {
        files: ['Development/templates/pug/*.pug'],
        tasks: ['pug:dev'],
      },
      pug_prod: {
        files: ['Production/templates/pug/*.pug'],
        tasks: ['pug:prod'],
      },
      imagemin_dev: {
        files: ['Development/templates/images/*.{png,jpg,gif}'],
        tasks: ['imagemin:dev']
      },
      imagemin_prod: {
        files: ['Production/templates/images/*.{png,jpg,gif}'],
        tasks: ['imagemin:prod']
      },
      postcss_dev: {
        files: ['Development/templates/postcss/style.css'],
        tasks: ['postcss:dev']
      },
      postcss_prod: {
        files: ['Production/templates/postcss/style.css'],
        tasks: ['postcss:prod']
      },

    }
  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', [
    'watch'
  ]);

};