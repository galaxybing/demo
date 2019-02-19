require('babel-register')();
var gulp = require('gulp'),
    os = require('os'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    gulpOpen = require('gulp-open'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    md5 = require('gulp-md5-plus'),
    fileinclude = require('gulp-file-include'),
    //rimraf = require('gulp-rimraf'),
    del = require('del'),
    vinylPaths = require('vinyl-paths'),

    spriter = require('gulp-css-spriter'),
    base64 = require('gulp-css-base64'),
    webpack = require('webpack'),
    connect = require('gulp-connect');
var webpackConfig = require('./webpack.config.js');

var host = {
    path: 'dist/',
    port: 3000,
    html: 'index.html'
};

//mac chrome: "Google chrome",
var browser = os.platform() === 'linux' ? 'Google chrome' : (
  os.platform() === 'darwin' ? 'Google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
var pkg = require('./package.json');

gulp.task('copy:images', function (done) {
    gulp.src(['src/images/**/*']).pipe(gulp.dest('dist/images')).on('end', done);
});

gulp.task('lessmin', function (done) {
    gulp.src(['src/css/main.less', 'src/css/*.css'])
        .pipe(less())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload())
        .on('end', done);
});

gulp.task('md5:js', ['build-js'], function (done) {
    gulp.src('dist/js/*.js')// 将dist/js下面所有的js计算md5戳
        .pipe(md5(10, 'dist/*.html'))// 将html中script中的src引用文件名替换为加了md5的文件名
        .pipe(gulp.dest('dist/js'))// 将md5文件替换到目标目录dist/js
        .on('end', done);
});

/*
gulp.task('md5:css', ['sprite'], function (done) {
    gulp.src('dist/css/*.css')
        .pipe(md5(10, 'dist/app/*.html'))
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});
*/
gulp.task('css:lessmin:md5', function (done) {// 'sprite',
    gulp.src(['src/css/main.less', 'src/css/*.css'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('style.min.css'))
        .pipe(md5(10, 'dist/*.html'))
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});

gulp.task('fileinclude', function (done) {
    gulp.src(['src/*.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
        .on('end', done);
        //.pipe(connect.reload());
});
/*
gulp.task('sprite', ['copy:images', 'lessmin'], function (done) {
    var timestamp = +new Date();
    gulp.src('dist/css/style.min.css')
        .pipe(spriter({
            spriteSheet: 'dist/images/spritesheet' + timestamp + '.png',
            pathToSpriteSheetFromCSS: '../images/spritesheet' + timestamp + '.png',
            spritesmithOptions: {
                padding: 10
            }
        }))
        .pipe(base64())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
        .on('end', done);
});
*/
gulp.task('clean', function (done) {
    gulp.src(['dist'])
        .pipe(vinylPaths(del))
        .on('end', done);
});

gulp.task('watch', function (done) {
    gulp.watch(['src/**/*'], ['build-js', 'lessmin', 'fileinclude']);
});

gulp.task('connect', function () {
    //connect.server();
    connect.server({
        root: host.path,
        port: host.port,
        livereload: true
    });

});

gulp.task('open', function (done) {
    gulp.src('')
        .pipe(gulpOpen({
            app: browser,
            uri: 'http://localhost:'+host.port
        }))
        .on('end', done);
});

var devCompiler = webpack(Object.create(webpackConfig));

gulp.task("build-js", ['fileinclude'], function(callback) {

    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));// .pipe(connect.reload())
        callback();
    });

});

// 开发
gulp.task('dev', [ 'connect',
                    'copy:images', 'fileinclude', 'lessmin', 'build-js',
                    'open', 'watch']);

// 发布
gulp.task('build', ['clean',
                    'copy:images', 'fileinclude', 'css:lessmin:md5',  'build-js', 'md5:js']);
