var gulp = require('gulp'),
	browser = require('browser-sync').create(),
	sass = require('gulp-sass'),
	spritesmith = require('gulp.spritesmith'),
	autoprefix = require('gulp-autoprefixer'),
	htmlIncluder = require('gulp-htmlincluder'),
	imagemin = require('gulp-imagemin');



gulp.task('server',['html', 'sass'], function(){
	browser.init({
		server: {
			baseDir: './prod',
			index: 'html/homepage.html'
		}
	});
    gulp.watch('./src/sass/**/**/*.scss', ['sass']);
    gulp.watch('./src/image/bg/*.png', ['imagemin']);
    gulp.watch('./src/html/*.html', ['html']);
    gulp.watch('./prod/html/*.html').on('change', browser.reload);
});

gulp.task('sass', function(){
	gulp.src('./src/sass/**/**/*.scss')
		.pipe(sass())
		.pipe(autoprefix({
			browsers: ['last 4 versions'],
            cascade: false 
        }))
		.pipe(gulp.dest('prod/css/'))
		.pipe(browser.stream());
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('src/image/icon/*.png')
		.pipe(spritesmith({
			imgName: 'icons.png',
			cssName: 'icons.scss',
			padding: 15
		}));
	return spriteData.pipe(gulp.dest('src/image/bg/'));
});

gulp.task('imagemin', ['sprite'], function(){
	gulp.src('./src/image/bg/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('prod/images/'))
		.pipe(browser.stream());
})

gulp.task('html', function(){
	gulp.src('./src/html/*.html')
		.pipe(htmlIncluder())
		.pipe(gulp.dest('prod/html/'))
		.pipe(browser.stream());
})

gulp.task('default', ['server']);
