const gulp = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const pump = require('pump')
const fs = require('fs')
const babelCfg = JSON.parse(fs.readFileSync('./.babelrc').toString())

gulp.task('default', (done) => {
  pump([
    gulp.src('src/getBlobDuration.js'),
    sourcemaps.init(),
    babel(babelCfg),
    uglify({
      warnings: true
    }),
    sourcemaps.write('.'),
    gulp.dest('dist')
  ], done)
})