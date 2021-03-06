var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	minify = require('gulp-minify-css'),
	rename = require('gulp-rename');

const bower = './bower_components';
const bootstrap = `${bower}/bootstrap-sass/assets`;
const angular = `${bower}/angular/`;

const src = './src';
const dist = './dist';

// custom bootstrap build
gulp.task('css', () => {
	gulp.src(`${src}/sass/*.{sass,scss}`)
		.pipe(sass({
			includePaths: `${bootstrap}/stylesheets/`
		}))
		.pipe(gulp.dest(`${dist}/css/`))
		.pipe(sourcemaps.init())
		.pipe(minify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(`${dist}/css/`));
});

gulp.task('fonts', () => {
	// add font awesome
});

gulp.task('html', () => {
	gulp.src(`${src}/**/*.html`)
		.pipe(gulp.dest(dist));
});

gulp.task('js', () => {
	gulp.src([
		`${bootstrap}/javascripts/bootstrap.{js,min.js}`,
		`${angular}/angular.{js,min.js,min.js.map}`,
		`${src}/js/**/*.js`
	])
		.pipe(gulp.dest(`${dist}/js/`));
});

gulp.task('build', [
	'css',
	'fonts',
	'html',
	'js'
]);

gulp.task('develop', [
	'build'
]);

gulp.task('default', [
	'build'
]);
