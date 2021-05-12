const gulp = require('gulp');
const copy = require('gulp-copy');

module.exports = function copyFiles() {
  return gulp.src(['source/assets/fonts/*'])
   .pipe(copy('dist/assets/fonts', {prefix: 6}));
};
