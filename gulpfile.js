//INSTANCIAR DEPENDENCIAS
var gulp = require('gulp');

gulp.task('default',['js','css']);

gulp.task('js',function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./js'));
});

gulp.task('css',function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.css')
        .pipe(gulp.dest('./css'));
});