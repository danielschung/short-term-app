import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-cssmin';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('scripts', function () {
    return gulp
        .src([
            './js/short-term-application.js',
            './js/short-term-mask.min.js',
        ])
        .pipe(babel('short-term.min.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('styles', function () {
    return gulp
        .src('./_scss/short-term-app.scss')
        .pipe(sass())
        .pipe(concat('short-term.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', gulp.parallel('scripts', 'styles'));