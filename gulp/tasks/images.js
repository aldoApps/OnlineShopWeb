module.exports = () => 
    $.gulp.task('images', () =>
      $.gulp.src($.path.src.images)
        .pipe($.gulp.dest($.path.dist.images)).on('end', $.bs.reload))
