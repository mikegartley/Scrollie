'use strict';
/*required*/
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var vinylbuffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var lost = require('lost');
var postcss = require('gulp-postcss');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var changed = require('gulp-changed');
var jslint = require('gulp-jslint');
var cssmin = require('gulp-cssmin');

//dest of files
var webroot = "./";

var paths = {
    js: webroot + "build/js/**/*.js",
    minJs: webroot + "build/js/",
    css: webroot + "build/css/**/*.css",
    minCss: webroot + "build/css/",
    concatJsDest: webroot + "build/js/site.min.js",
    concatCssDest: webroot + "build/css/site.min.css"
};

/* Task for building the Sass files */

gulp.task('styles', function () {
    var format = argv.production ? 'compressed' : 'expanded';

    return gulp.src('./dev/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(postcss([
            lost()
        ]))
        .on('error', function (err) {
            console.error(err.message);
        })
        .pipe(autoprefixer({
            browsers: ['last 8 versions', 'ie 8', 'ie 9']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());
});

/* Browserify
 * -------------------- */
gulp.task('scripts', function () {
    return gulp.src('./dev/scripts/*.js')
        .pipe(sourcemaps.init())
        
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js'));

});

/* Image compression
 * -------------------- */
gulp.task('image-compression', function () {
    return gulp.src('./dev/img/*')
        .pipe(changed('./dev/img/'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./img/'));
});

/* jshint
 * -------------------- */

gulp.task('jshint', function () {
    return gulp.src(['./dev/scripts/**/*.js', '!./dev/scripts/vendor/*.js'])
        .pipe(jslint())
        .pipe(jslint.reporter('default'))
        .pipe(jslint.reporter('stylish'))
});


/*
 * `gulp` will build the JS & CSS files and start watching the `src` folder for changes
 * `gulp watch` will only start watching the `src` folder for changes
 * `gulp build` will only build the JS & CSS files
 * `gulp build --production` will build the CSS files for production use (minify etc.)
 * -------------------- */
gulp.task('default', ['build', 'watch']);
gulp.task('build', ['scripts', 'styles', 'jshint']); //, 
gulp.task('watch', function () {
    gulp.watch('./dev/scripts/**/*.js', ['scripts']);
    gulp.watch('./dev/sass/**/*.scss', ['styles']);
    gulp.watch('./dev/img/*', ['image-compression']);
    gulp.watch('./dev/scripts/**/*.js', ['jshint']);
});

