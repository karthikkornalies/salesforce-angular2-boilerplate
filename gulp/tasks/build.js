var gulp = require('gulp');

// gulp.task('build', [ 'move_modules', 'typescript', 'browserify', 'css', 'images', 'vfpage' ]);
gulp.task('build', [ 'move_modules', 'typescript', 'vfpage' ]);
gulp.task('deploy', ['build']);
