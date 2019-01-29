var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
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