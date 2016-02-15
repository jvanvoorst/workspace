var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
	gulp.src('src/*.js')
		// .pipe(concat('min.js'))
		.pipe(uglify())
	    .pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['scripts']);
});