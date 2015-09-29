/**
 * Created by grant on 15-09-27.
 */
var gulp = require("gulp");
var yuidoc = require("gulp-yuidoc");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("docs", function() {
	return gulp.src("../AdHelper.js")
		.pipe(yuidoc())
		.pipe(gulp.dest("../docs"));
});

gulp.task("minify", function() {
	return gulp.src("../AdHelper.js")
		.pipe(uglify())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("../"));
});