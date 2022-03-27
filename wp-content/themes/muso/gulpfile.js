var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");
var plumber = require("gulp-plumber");
var media = require("gulp-merge-media-queries");
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

gulp.task("sass", function() {
    gulp.src("scss/**/*scss")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(frontnote())
		.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions','Firefox 24','IE 9','android 4'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("./css"))
        .pipe(notify('Sassコンパイル完了'));
});

gulp.task('watch', ['sass'], function(){
    gulp.watch('scss/**/*scss',['sass']);
});
gulp.task('default', ['watch']);


gulp.task("cssmin", function() {
    gulp.src("css/**/*css")
        .pipe(media())
        .pipe(cssmin())
        .pipe(gulp.dest("./css"))
        .pipe(notify('CSS圧縮完了'));
});
