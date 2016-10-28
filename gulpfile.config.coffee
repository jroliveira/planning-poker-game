sourcePath = './src/'
appPath = "#{sourcePath}app/"
bowerPath = "./bower_components/"

module.exports =
  files: [
    "#{appPath}**/*.js"
    "!#{appPath}**/*.spec.js"
  ]
  index: "#{sourcePath}index.html"
  appPath: appPath
  sourcePath: sourcePath
  temp: './temp/'
  build: './www/'
  js: [
    "#{appPath}**/*.module.js"
    "#{appPath}**/*.js"
    "!#{appPath}**/*.spec.js"
  ]
  css: [
    "#{appPath}**/*.css"
  ]
  images: [
    "#{sourcePath}img/*.*"
  ]
  htmlTemplates: [
    "#{appPath}**/*.html"
  ]
  fonts: [
    "#{sourcePath}fonts/*.*"
    "#{bowerPath}ionic/release/fonts/*.*"
  ]
  webdep: [
    './.nojekyll'
    './_config.yml'
    './CNAME'
  ]
  templateCache:
    file: 'templates.js'
    options:
      module: 'planningPoker'
      standAlone: false
      root: '/src/app/'
  appConfig:
    wrap: "(function() {\n  'use strict';\n\n  <%= module %>\n})();"
    pretty: true
    createModule: false
  getWiredepDefaultOptions: ->
    options =
      bowerJson: require './bower.json'
      directory: './bower_components/'
      ignorePath: /\.\./
