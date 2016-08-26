args = require('yargs').argv
config = require './gulpfile.config'
del = require 'del'
gulp = require 'gulp'
karma = require('karma').server
minifier = require 'gulp-uglify/minifier'
uglify = require 'uglify-js-harmony'
$ = require('gulp-load-plugins')(lazy: true)

gulp.task 'wiredep', ['config'], ->
  options = config.getWiredepDefaultOptions()
  wiredep = require('wiredep').stream
  gulp
    .src config.index
    .pipe wiredep(options)
    .pipe $.inject(gulp.src(config.js))
    .pipe $.inject(gulp.src(config.css))
    .pipe gulp.dest(config.sourcePath)

gulp.task 'build', [
  'images'
  'fonts'
  'wiredep'
  'templatecache'
], ->
  assets = $.useref.assets(searchPath: './')
  templateCache = config.temp + config.templateCache.file
  htmlFilter = $.filter '*.html'
  cssFilter = $.filter '**/*.css'
  jsLibFilter = $.filter '**/lib.js'
  jsAppFilter = $.filter '**/app.js'
  gulp
    .src config.index
    .pipe $.plumber()
    .pipe $.inject(gulp.src(templateCache, read: false), starttag: '<!-- inject:templates.js -->')
    .pipe assets
    .pipe cssFilter
    .pipe $.csso()
    .pipe cssFilter.restore()
    .pipe jsLibFilter
    .pipe $.uglify()
    .pipe jsLibFilter.restore()
    .pipe jsAppFilter
    .pipe $.ngAnnotate()
    .pipe minifier({}, uglify)
    .pipe jsAppFilter.restore()
    .pipe $.rev()
    .pipe assets.restore()
    .pipe $.useref()
    .pipe $.revReplace()
    .pipe htmlFilter
    .pipe $.htmlmin(
      collapseWhitespace: true
      maxLineLength: 120
      removeComments: true
    )
    .pipe htmlFilter.restore()
    .pipe gulp.dest(config.build)

gulp.task 'templatecache', ['clean-template-cache'], ->
  gulp
    .src config.htmlTemplates
    .pipe $.htmlmin(empty: true)
    .pipe $.angularTemplatecache(config.templateCache.file, config.templateCache.options)
    .pipe gulp.dest(config.temp)

gulp.task 'clean-template-cache', ->
  del config.temp + config.templateCache.file

gulp.task 'images', ['clean-images'], ->
  gulp
    .src config.images
    .pipe $.imagemin()
    .pipe $.flatten()
    .pipe gulp.dest("#{config.build}img/")

gulp.task 'clean-images', ->
  del "#{config.build}img/**/*"

gulp.task 'fonts', ['clean-fonts'], ->
  gulp
    .src config.fonts
    .pipe gulp.dest("#{config.build}fonts")

gulp.task 'clean-fonts', ->
  del "#{config.build}fonts/*"

gulp.task 'clean', ->
  del "#{config.build}css/*.*"
  del "#{config.build}img/**/*.*"
  del "#{config.build}fonts/*.*"
  del "#{config.build}js/*.*"
  del config.temp

gulp.task 'test', [], (done) ->
  karma.start {
    configFile: "#{__dirname}/karma.conf.js"
    singleRun: true
  }, done

gulp.task 'generate-package', ['build'], $.shell.task [
  'ionic build android --release'
]

gulp.task 'serve-local', [
  'wiredep'
  'templatecache'
], ->
  gulp
    .src './'
    .pipe $.webserver
      port: 8080
      livereload: true
      open: 'http://localhost:8080/src/'

gulp.task 'serve-production', ['build'], ->
  gulp
    .src './'
    .pipe $.webserver
      port: 8081
      livereload: false
      open: 'http://localhost:8081/www/'

gulp.task 'config', ->
  gulp
    .src 'app-config.constant.json'
    .pipe $.ngConfig('planningPoker', config.appConfig)
    .pipe gulp.dest(config.appPath)
