var gulp = require('gulp');

const bower = './bower_components';
const bootstrap = `${bower}/bootstrap-sass/assets`;
const dist = './dist';

gulp.task('css', () => {
	// custom bootstrap build
});

gulp.task('fonts', () => {
	// add font awesome
});

gulp.task('js', () => {
	gulp.src(`${bootstrap}/javascripts/bootstrap.{js,min.js}`)
		.pipe(gulp.dest(`${dist}/js`));
});

gulp.task('default', [
	'css',
	'fonts',
	'js'
]);
