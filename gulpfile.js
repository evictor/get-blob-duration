const gulp = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const pump = require('pump')

gulp.task('default', (done) => {
  pump([
    gulp.src('src/getBlobDuration.js'),
    sourcemaps.init(),
    babel({
      presets: ['env']
    }),
    uglify({
      warnings: true
    }),
    sourcemaps.write('.'),
    gulp.dest('dist')
  ], done)
})