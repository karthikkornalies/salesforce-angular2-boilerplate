/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

"use strict";

const browserify   = require('browserify'),
      watchify     = require('watchify'),
      bundleLogger = require('../util/bundleLogger'),
      gulp         = require('gulp'),
      handleErrors = require('../util/handleErrors'),
      source       = require('vinyl-source-stream'),
      fs           = require("fs");

gulp.task('browserify', ['typescript'], function() {

  let bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true,
    extensions: ['.ts']
  })
  .add("./build/scripts/boot.js");

  let bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    var bundlerResult= bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('app.js'))
      // Specify the output destination
      .pipe(gulp.dest('./build/assets/js/'))
      // Log when bundling completes!
      .on('end', bundleLogger.end);

      return bundlerResult;
  };

  // if( process.env.isWatching  ) {
  //   bundler = watchify(bundler);
  //   // Rebundle with watchify on changes.
  //   bundler.on('update', bundle );
  // }
  
  bundler.on('update', bundle );

  return bundle();
});
