module.exports = () =>
    $.gulp.task('html', () =>
        $.gulp.src($.path.src.html)
            .pipe($.gp.pug({pretty: true}))
            .pipe($.gulp.dest($.path.dist.html)).on('end', $.bs.reload))