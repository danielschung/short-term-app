import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-cssmin';
import babel from 'gulp-babel';
import rename from 'gulp-rename';

gulp.task('scripts', function () {
    return gulp
        .src([
            './js/short-term-application.js',
            './js/mask.min.js',
        ])
        .pipe(babel())
        .pipe(concat('short-term.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename('short-term.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('styles', function () {
    return gulp
        .src('./styles/scss/short-term-app.scss')
        .pipe(sass())
        .pipe(concat('short-term.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./styles/css'));
});

gulp.task('default', gulp.parallel('scripts', 'styles'));