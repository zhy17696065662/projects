var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('scss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('shi',function(){
    gulp.watch('./src/scss/*.scss',gulp.series('scss'))
})