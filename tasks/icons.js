const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const svgConf  = {
    shape: {
      dimension: {
        maxWidth: 20,
        maxHeight: 20
      },
      spacing: {
        padding: 0
      }
    },
    mode: {
      view: {
        prefix: '.icon-%s',
        dimensions: true,
        bust: false,
        render: {
          scss: true
        }
      },
      symbol: {
        inline: true
      }
    }
  };


module.exports = function icons() {
  return gulp.src('source/assets/icons/*.svg')
  .pipe(svgSprite(svgConf))
  .on('error', function(error) {
  })
  .pipe(gulp.dest('source/assets/scss/icons'));
};
