var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["./*.html", "./*.js"]).on('change', browserSync.reload);
    gulp.watch("./styles/sass/*.sass", ['sass']);
});

gulp.task('sass', function() {
  return gulp.src("./styles/main.sass")
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./styles/public"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
