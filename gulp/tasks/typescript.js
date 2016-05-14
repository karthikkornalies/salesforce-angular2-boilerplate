"use strict";

const gulp = require("gulp"),
      ts = require("gulp-typescript"),
      uglify = require("gulp-uglify"),
      sourcemaps = require("gulp-sourcemaps");

let tsProject = ts.createProject("tsconfig.json", 
{ 
  typescript: require("typescript"),
});

gulp.task("typescript", function() {
  let tsResult = tsProject.src()
                          .pipe(ts(tsProject));
  
  return tsResult.js
                 .pipe(uglify())
                 .pipe(gulp.dest("build/scripts/"));
});
