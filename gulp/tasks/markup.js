const gulp = require('gulp'),
      notify = require("gulp-notify"),
      minimist = require("minimist")
      args = minimist( process.argv ),
      uglify = require("gulp-uglify"),
      handleErrors = require('../util/handleErrors');

gulp.task('markup', function() {

  // Make sure we minify any javascript
  gulp.src('src/htdocs/assets/**/*.js')
      .pipe(uglify({
        mangle: false
      }))	
      .pipe(gulp.dest("build/assets"));
      
  // Everything else can just be thrown over
  gulp.src(["src/htdocs/assets/**/*", "!src/htdocs/assets/**/*.js"])
      .pipe(gulp.dest("build/assets"));
   
});
