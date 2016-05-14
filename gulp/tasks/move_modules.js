"use strict";

const gulp = require("gulp"),
      uglify = require("gulp-uglify");

// We need to be very explicit about what files we need so as to not go over Salesforce's 5MB limit
let folders = [
  [["node_modules/@angular/common/**/*.js", "!node_modules/@angular/common/esm/**/*", "!node_modules/@angular/common/testing/**/*"], "build/node_modules/@angular/common"],
  [["node_modules/@angular/compiler/**/*.js", "!node_modules/@angular/compiler/esm/**/*", "!node_modules/@angular/compiler/testing/**/*"], "build/node_modules/@angular/compiler"],
  [["node_modules/@angular/core/**/*.js", "!node_modules/@angular/core/esm/**/*", "!node_modules/@angular/core/testing/**/*"], "build/node_modules/@angular/core"],
  [["node_modules/@angular/http/**/*.js", "!node_modules/@angular/http/esm/**/*", "!node_modules/@angular/http/testing/**/*"], "build/node_modules/@angular/http"],
  [["node_modules/@angular/platform-browser/**/*.js", "!node_modules/@angular/platform-browser/esm/**/*", "!node_modules/@angular/platform-browser/testing/**/*"], "build/node_modules/@angular/platform-browser"],
  [["node_modules/@angular/platform-browser-dynamic/**/*.js", "!node_modules/@angular/platform-browser-dynamic/esm/**/*", "!node_modules/@angular/platform-browser-dynamic/testing/**/*"], "build/node_modules/@angular/platform-browser-dynamic"],
  [["node_modules/@angular/router/**/*.js", "!node_modules/@angular/router/esm/**/*", "!node_modules/@angular/router/testing/**/*"], "build/node_modules/@angular/router"],
  
  ["node_modules/@angular2-material/**/*.js", "build/node_modules/@angular2-material"],
  
  ["node_modules/rxjs/**/*.js", "build/node_modules/rxjs"],
  ["node_modules/angular2-in-memory-web-api/**/*.js", "build/node_modules/angular2-in-memory-web-api"],
  
  ["node_modules/clay-model/lib/*.js", "build/node_modules/clay-model/lib"],
  ["node_modules/clay-model/utils/*.js", "build/node_modules/clay-model/utils"],
  
  ["node_modules/clay-model-salesforce-api/index.js", "build/node_modules/clay-model-salesforce-api"],
  ["node_modules/jsforce/build/jsforce.js", "build/node_modules/jsforce/build/"],
  [["node_modules/querystring/**/*.js", "!node_modules/querystring/test/**/*"], "build/node_modules/querystring"],
  ["node_modules/kew/kew.js", "build/node_modules/kew"],
];

gulp.task("move_modules", function() {
   
   for (let folder of folders) {
     
     gulp.src(folder[0])
         .pipe(uglify({
           mangle: false
          }))
         .pipe(gulp.dest(folder[1]));
 
   }
    
});
