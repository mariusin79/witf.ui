var gulp = require('gulp'),
  gutil = require('gulp-util'),
  source = require('vinyl-source-stream'),
  watchify = require('watchify'),
  browserify = require('browserify'),
  connect = require('connect'),
  http = require('http'),
  livereload = require('gulp-livereload');

gulp.task('browserify', function (){
  var bundler = browserify('./app/src/index.js', {
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: false
  });

  bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app'));
});

gulp.task('connect-livereload', function(next) {
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.directory('app'));

    http.createServer(app).listen(9000, next);
    console.log("Listening on http://localhost:9000");
});

gulp.task('watch', ['connect-livereload','watchify'], function (){
  gulp.watch('index.html')
    .on('change', livereload.changed);
  gulp.watch('app/partials/**/*')
    .on('change', livereload.changed);
});

gulp.task('watchify', function (){
  var bundler = watchify(browserify('./app/src/index.js', {
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  }));
  bundler.on('update', rebundle);

  function rebundle(){
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./app'))
      .pipe(livereload());
  }

  return rebundle();
});
