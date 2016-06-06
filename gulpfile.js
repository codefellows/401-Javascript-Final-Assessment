const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack:dev', function() {
  //TODO make a webpack dev build
});

gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('webpack:test', function() {
  //TODO make a webpack test build for use with Karma
});

//TODO create a build:dev task and set it to the default task
