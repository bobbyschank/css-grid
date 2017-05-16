var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//define a task with the name of 'default'
// and a callback to perform when the task is ran
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss',['styles']);
  	console.log('I just compiled your SASS.');
});