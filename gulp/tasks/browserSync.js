var browserSync = require('browser-sync');
var gulp        = require('gulp');

var BrowserSyncWrapper = require("gulp-visualforce").BrowserSync;

var minimist = require("minimist");
var args = minimist(process.argv);

gulp.task('browserSync', ['move_modules', 'build'], function() {

	var opts = BrowserSyncWrapper( {
		app: process.env.NAME,
    https: true,
    server: {
      baseDir: ['build', 'src'],
    },
    notify: true,

    files: [ "build/**", "!build/node_modules/**" ]
  
  }, "build", args.local );

   browserSync( opts );

 });