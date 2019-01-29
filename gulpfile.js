var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlbeautify = require('gulp-html-beautify'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src('./src/html/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(pug({pretty:true}))
        .pipe(htmlbeautify())
        .pipe(gulp.dest('./build/'))
});

gulp.task('sass', function() {
    return gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
});