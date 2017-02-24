var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');
var ftp = require('vinyl-ftp');

var source = 'html/assets/src/';
var destination = 'html/assets/build/'

gulp.task('sass', function(){
  return gulp.src(source+'/css/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(destination+'css/'))
  .pipe(cssmin())
  .pipe(gulp.dest(destination+'css/'));
});

gulp.task('cssmin', ['sass'], function(){
  return gulp.src(source+'css/main.css')
  .pipe(cssmin())
  .pipe(gulp.dest(destination+'css/'));
});

gulp.task('imagemin:img', function(){
  return gulp.src(source+'img/**/*.{png,jpg,gif}')
  .pipe(imagemin())
  .pipe(gulp.dest(destination+'img/'));
});

gulp.task('imagemin:svg', function(){
  return gulp.src(source+'svg/**/*.svg')
  .pipe(imagemin({
    svgoPlugins: [
      {removeViewBox: false},
      {removeUselessStrokeAndFill: false}
    ]
  }))
  .pipe(gulp.dest(destination+'svg/'));
});




gulp.task('uglify', function(){
  return gulp.src([source+'js/libs/*.js',source+'js/*.js'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest(destination+''))
  .pipe(uglify({
    preserveComments: 'some'
  }))
  .pipe(gulp.dest(destination+'js/'));
});

gulp.task('svgmap', function () {
  return gulp.src(source+'svg/**/*.svg')
  .pipe(imagemin({
    svgoPlugins: [
      {removeViewBox: false},
      {removeUselessStrokeAndFill: false}
    ]
  }))
  .pipe(gulp.dest(destination+'svg/'))
  .pipe(rename({prefix: 'icon-'}))
  .pipe(svgstore())
  .pipe(gulp.dest(destination+'/svg'));
});



gulp.task('watch', function() {
  gulp.watch(source+'css/**/*.scss', ['sass']);
//gulp.watch(source+'js/**/*.js', ['uglify']);
  gulp.watch(source+'img/**/*.{png,jpg,gif}', ['imagemin:img']);
  gulp.watch(source+'svg/**/*.svg', ['imagemin:svg']);
  dest = ['./+(assets|layout|config|snippets|templates|locales)/**'];
  gulp.watch(dest).on('change', function(file) {
      livereload.changed(file.path);
  });
});



gulp.task('ftpAssets', function() {
    var conn = ftp.create({
        host:     'seamsno.nextmp.net',
        user:     'gulp@skogen.io',
        password: 'AmoralOinkedViceOpines29',
        parallel: 3,
        log:      gutil.log
    });
    var globs = [
        destination+'**',
        'html/assets/templates/**',
        'html/uploads/**',
        'html/index.php',
        'html/.htaccess',
        'html/robots.txt'
    ];
    return gulp.src(globs, { base: 'html/', buffer: false })
      .pipe(conn.newer( '/skogen.io/html/site/'))
      .pipe(conn.dest( '/skogen.io/html/site/'));
});

gulp.task('ftpCraft', function() {
    var conn = ftp.create({
        host:     'seamsno.nextmp.net',
        user:     'gulp@skogen.io',
        password: 'AmoralOinkedViceOpines29',
        parallel: 1,
        log:      gutil.log
    });
    var globs = [
        'craft/**'
    ];
    return gulp.src(globs, { base: 'craft/', buffer: false })
      .pipe(conn.newer( '/skogen.io/html/site/'))
      .pipe(conn.dest( '/skogen.io/html/site/'));
});
