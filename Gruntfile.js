module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/test.css': 'sass/test.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: 'images/build/'
        }]
      }
    },
    browserSync: {
    bsFiles: {
        src : 'css/*.css'
    },
    options: {
        server: {
            baseDir: "./"
        }
      }
    },
    watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      }
    }
  });
  // Load the plugins tasks

  // Default task(s).
  grunt.registerTask('default', ["sass","imagemin","watch","browserSync"]);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
};
