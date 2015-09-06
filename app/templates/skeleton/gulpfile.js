/*jslint node: true */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    karma = require('karma').server,
    stylish = require('jshint-stylish');

var MAIN_STYLE_SRC = 'app.scss';
var BASE_SRC = '**/';

var JS_SRC = BASE_SRC + '*.js';
var STYLE_SRC = [MAIN_STYLE_SRC, BASE_SRC + '*.scss'];
var TMPL_SRC = BASE_SRC + '*.html';

/**
 * Run test once and exit
 */
gulp.task('testall', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    browsers: ['Chrome', 'PhantomJS']
  }, done);
});

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('testdebug', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    browsers: ['Chrome']
  }, done);
});

gulp.task('jshint', ['test'], function() {
  return gulp.src(JS_SRC)
    .pipe(jshint('../.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  gulp.watch(TMPL_SRC, ['test', 'jshint']);
  gulp.watch(JS_SRC, ['test', 'jshint']);
});

gulp.task('default', ['test', 'jshint', 'watch']);
