var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;


gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .transform(babelify.configure({
      presets: ['es2015']
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// seek out css folders and compile them into build/css
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
  gulp.start('cssBuild');
});

gulp.task('cssBuild', ['bower'], function(){
  return gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream());
});
