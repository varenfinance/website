const gulp = require('gulp');
const copy = require('gulp-copy');

module.exports = function copyFiles() {
  return gulp.src(['source/misc/**/*', '!source/misc/sw-raw.js', 'source/misc/.htaccess'])
   .pipe(copy('dist', {prefix: 6}));
};
