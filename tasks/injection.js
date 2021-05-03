const gulp = require('gulp');
const inlinesource = require('gulp-inline-source');
const inject = require('gulp-inject-string');
const htmlmin = require('gulp-htmlmin');

module.exports = function injection() {
  return gulp.src('tmp/*.html')
    .pipe(inlinesource())
    .pipe(inject.after('<style', ' amp-custom'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      trimCustomFragments: true,
    }))
    .pipe(gulp.dest('dist'));
};
