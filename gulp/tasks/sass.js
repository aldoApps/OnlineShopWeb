module.exports = () =>
  $.gulp.task('style', () =>
    $.gulp.src($.path.src.style)
      .pipe($.gp.sass({outputStyle: 'expanded'}))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.groupCssMediaQueries())
      .pipe($.gp.sass(/*{outputStyle: 'compressed'}*/))
      .pipe($.gulp.dest($.path.dist.style)).on('end', $.bs.reload))