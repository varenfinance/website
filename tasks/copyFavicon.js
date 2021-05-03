const gulp = require('gulp');
const copy = require('gulp-copy');

module.exports = function copyFavicon() {
  return gulp.src(['source/assets/images/favicon/favicon.svg'])
   .pipe(copy('dist/assets/images/favicon', {prefix: 6}));
};
