const gulp = require("gulp");
const sass = require("gulp-sass");

var paths = {
    styles: {
        src: '_includes/assets/scss/*.scss',
        dest: '_includes/assets/css'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

var build = gulp.series(styles);

exports.watch = watch;
exports.build = build;

exports.default = build;
