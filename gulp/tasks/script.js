module.exports = () =>
    $.gulp.task('script', () =>
      $.gulp.src($.path.src.script)
        .pipe($.gp.include())
        .pipe($.gp.babel())
        .pipe($.gulp.dest($.path.dist.script)).on('end', $.bs.reload))