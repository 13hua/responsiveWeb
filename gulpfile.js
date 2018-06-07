var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
// var postcss = require('gulp-postcss');

gulp.task('default', ['compile-sass', 'post-css', 'watch']);

gulp.task('compile-sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(plugins.sass())
        // .pipe(postcss())
        // .pipe(plugins.concat('style.css'))
        // .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./src/scss/css'));
});

gulp.task('post-css', function () {
    gulp.src('./src/scss/css/**.css')
        .pipe(plugins.postcss([
            autoprefixer({browsers: ['last 10 version']}),
            cssnano()
        ]))
        .pipe(gulp.dest('./src/css'));
});


gulp.task('watch', function () {
    gulp.watch('./src/scss/*.scss', ['compile-sass']);
    gulp.watch('./src/scss/css/**.css', ['post-css']);
});
