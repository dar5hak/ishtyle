var gulp = require('gulp'),
  stylint = require('gulp-stylint'),
  stylus = require('gulp-stylus');

gulp.task('stylint', function () {
  return gulp.src('./stylus/*.styl')
    .pipe(stylint());
});

gulp.task('stylus', function () {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['stylint', 'stylus']);