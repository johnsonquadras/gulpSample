var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


//Uglify task
gulp.task('scripts',function(){
    gulp.src('src/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    
});


gulp.task('watch',function(){
    gulp.watch('src/*.js',['scripts']);
})


