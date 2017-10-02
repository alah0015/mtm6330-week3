// Declare global scope variables.
const gulp = require('gulp')
const sass = require('gulp-sass')      // load the gulp library
const sassPath = 'scss/**/*.scss' // load the gulp-sass compiler library

// Define a new task called 'sass' that we can call to compile Sass to CSS
gulp.task('sass', function () {
  return gulp
    .src(sassPath)  // where to find the Sass source files
    .pipe(sass())           // forward those files to the compiler
    .pipe(gulp.dest('css')) // where to output the comipled CSS files
})

gulp.task('default', function () {
  gulp.watch(sassPath, ['sass'])
})
