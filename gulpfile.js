var gulp = require('gulp'),
  connect = require('connect'),
  http = require('http'),
  livereload = require('gulp-livereload');

gulp.task('connect-livereload', function(next) {
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.directory('app'));

    http.createServer(app).listen(9000, next);
    console.log("Listening on http://localhost:9000");
});

gulp.task('default', ['connect-livereload'], function (){
  gulp.watch('app/**/*')
    .on('change', livereload.changed);
});