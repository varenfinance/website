const gulp = require('gulp');
const copy = require('gulp-copy');

module.exports = function copyIcons() {
  return gulp.src('source/assets/scss/icons/view/svg/*.svg')
   .pipe(copy('dist/svg', {prefix: 6}));
};
