const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sprite = require('gulp.spritesmith');
const concat = require('gulp-concat');
const path = require('path');
const less = require('gulp-less');



// 1.压缩html
// gulp-htmlmin
// $ cnpm i gulp-htmlmin -D
gulp.task('htmlmin', () => {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});


// 2. 压缩css
// gulp-cssmin
// $ cnpm i gulp-cssmin -D
gulp.task('cssmin', () => {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});


// 3. 压缩JS
// gulp-uglify
// $ cnpm i gulp-uglify -D
gulp.task('jsmin', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});


// 4. 压缩图片
// gulp-imagemin
// $ cnpm i gulp-imagemin -D
gulp.task('imgmin', () => {
    return gulp.src('./src/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

// 5. 精灵图
// gulp.spritesmith
// $ cnpm i gulp.spritesmith -D

gulp.task('sprite', () => {
    return gulp.src('./src/img/*')
        .pipe(sprite({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest('./src/css'));
});

// 6. 合并文件
// gulp-concat
// $ cnpm i gulp-concat -D
gulp.task('concatjs', () => {
    return gulp.src(['./src/js/base.js', './src/js/index.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'));
});

// 7. less编译
// gulp-less
// $ cnpm i gulp-less -D
gulp.task('less', () => {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/css'));
});

// 8. 文件监听
gulp.task('watchless', () => {
    // 监听less文件发生变化 则自动执行less
    gulp.watch('./src/styles/*.less', gulp.series('less'));
});

// 9. 自动化构建
gulp.task('dev', () => {
    gulp.watch(['./src/styles/*.less', './src/html/*.html', './src/js/**/*.js'],
        gulp.series('htmlmin', 'concatjs', 'less', 'cssmin', 'jsmin'));
});