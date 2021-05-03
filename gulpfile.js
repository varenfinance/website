const browsersync = require("browser-sync").create();
const clean = require('./tasks/clean');
const cleanTmp = require('./tasks/clean-temp');
const connect = require('gulp-connect');
const css = require('./tasks/css');
const gulp = require('gulp');
const images = require('./tasks/images');
const copyIcons = require('./tasks/copyIcons');
const copyFavicon = require('./tasks/copyFavicon');
const copyFiles = require('./tasks/copyFiles');
const icons = require('./tasks/icons');
const injection = require('./tasks/injection');
const newPage = require('./tasks/new-page');
const panini = require('panini');
const templates = require('./tasks/templates');


function templateRefresh() {
  panini.refresh();
  return templates()
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function server() {
  return connect.server({
    root: 'dist',
    port: 3000
  });
}

function watchFiles() {
  gulp.watch('source/assets/scss/**/*', gulp.series(css, templateRefresh, injection));
  gulp.watch('source/data/*.json', gulp.series(templateRefresh, injection));
  gulp.watch('source/**/*.html', gulp.series(templateRefresh, injection));
  gulp.watch('source/assets/images/**/*', images);
  gulp.watch('source/assets/icons/*.svg', icons, copyIcons);
  gulp.watch('source/misc/**/*', copyFiles);
  gulp.watch('dist/**/*', browserSyncReload);
}

gulp.task('create',
  gulp.series(
    newPage,
    icons,
    copyIcons,
    css,
    templates,
    copyFiles,
    copyFavicon,
    injection
  )
);

gulp.task('new-page',
  gulp.series(
    newPage,
    icons,
    copyIcons,
    css,
    templates,
    copyFiles,
    copyFavicon,
    injection
  )
);

gulp.task('build',
  gulp.series(
    clean,
    icons,
    copyIcons,
    gulp.parallel(
      css,
      images
    ),
    templates,
    injection
  )
);

gulp.task('postbuild',
  gulp.series(
    copyFiles,
    copyFavicon,
    cleanTmp
  )
);

gulp.task('watch',
  gulp.series(
    clean,
    icons,
    copyIcons,
    gulp.parallel(
      css,
      images
    ),
    templates,
    copyFiles,
    copyFavicon,
    injection,
    gulp.parallel(
      watchFiles,
      browserSync
    )
  )
);
