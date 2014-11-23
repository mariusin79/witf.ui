'use strict';

var gulp = require('gulp'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream'),
  connect = require('connect'),
  http = require('http'),
  livereload = require('gulp-livereload');

var paths = {
  html: ['app/*.html'],
  css: ['app/css/*.css'],
  js: ['app/js/**/*.js', '!app/js/bundle.js']
};

gulp.task('js', function () {
  return browserify({
    entries: './app/js/app.js',
    debug: true
  })
    .transform(reactify)
    .bundle()
    .on('error', function (err) {
      console.log(err.message);
      //this.end();
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('server', function (next){
  var app = connect()
    .use(require('connect-livereload')({port: 35729}))
    .use(connect.static('app'));

  http.createServer(app).listen(9000, next);
  console.log('Listening on http://localhost:9000');

  //livereload.listen();
  gulp.watch(paths.js, ['js']);
  gulp.watch('app/js/bundle.js').on('change', livereload.changed);
  gulp.watch(paths.html).on('change', livereload.changed);
  gulp.watch(paths.css).on('change', livereload.changed);
});

gulp.task('default', ['server', 'js']);



//gulp.task('default', ['connect-livereload'], function () {
//  gulp.watch('app/**/*')
//    .on('change', livereload.changed);
//});
