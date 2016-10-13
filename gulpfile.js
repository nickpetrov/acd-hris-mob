var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var ngConfig = require('gulp-ng-config');
var addStream = require("add-stream");
var ngAnnotate = require("gulp-ng-annotate");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");

var path = {
  src: "src/",
  www: "www/"
};

var img = [
    path.src + "img/**/*.*",
    "!" + path.src + "img/favicon.png",
    "!" + path.src + "img/favicon.ico"
];

var favicon = [
    path.src + "img/favicon.ico"
];

var manifest = [
    path.src + "manifest.json"
];

var scss = [
    "scss/ionic.app.scss"
];

var fonts = [
    path.src + "lib/ionic/fonts/**/*.*"
];

var js = [
    path.src + "lib/ionic/js/ionic.bundle.js",
    path.src + "lib/lodash/lodash.js",
    path.src + "lib/ngstorage/ngStorage.js",
    path.src + "lib/restangular/dist/restangular.js",
    path.src + "lib/ngCordova/dist/ng-cordova.js",
    path.src + "lib/moment/moment.js",
    // path.src + "lib/onezone-datepicker/dist/onezone-datepicker.min.js",
    path.src + "modules/auth/auth.module.js",
    path.src + "modules/join/join.module.js",
    path.src + "modules/privacy/privacy.module.js",
    path.src + "modules/terms/terms.module.js",
    path.src + "modules/reset-password/reset-password.module.js",
    path.src + "modules/app/app.module.js",
    path.src + "modules/acdn-hris/acdn-hris.module.js",
    path.src + "modules/acdn-hris/**/*.js",
    path.src + "modules/**/*.js"
];

var templates = [
    path.src + "modules/**/*.html"
];

//Error handling function
function handleErrors() {
    for(var i = 0; i < arguments.length; i++) {
        console.log("Plugin: " + arguments[i].plugin + "\n" + "Message: " + arguments[i].message)
    }
}

//Convenience wrapper to adopt plumber
gulp.plumbedSrc = function(){
    return gulp.src.call(gulp, arguments[0])
        .pipe(plumber());
};


//Task for deleting "www" folder
gulp.task("clean", function() {
  return del(path.www, {
        force: true
    });
});


//Task for moving images to www
var imagesTask = function() {
    return gulp.src(img)
        .pipe(gulp.dest(path.www + "img/"))
};

gulp.task("images", imagesTask);


//Task for moving favicon to www
var faviconTask = function() {
    return gulp.src(favicon)
        .pipe(gulp.dest(path.www))
};

gulp.task("favicon", faviconTask);


//Task for moving manifest to www
var manifestTask = function() {
    return gulp.src(manifest)
        .pipe(gulp.dest(path.www))
};

gulp.task("manifest", manifestTask);


//Task for moving "index.html" to www
var indexTask = function() {
    return gulp.src(path.src + "index.html")
        .pipe(gulp.dest(path.www));
};

gulp.task("index", indexTask);


//Task for converting sass to css and gather it together
var cssDevTask = function() {
    gulp.plumbedSrc(scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] })).on("error", handleErrors)
        .pipe(concat("styles.css")).on("error", handleErrors)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.www + "css/"));
};

gulp.task("css-dev", cssDevTask);

var cssBuildTask = function() {
    gulp.plumbedSrc(scss)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] })).on("error", handleErrors)
        .pipe(concat("styles.css")).on("error", handleErrors)
        .pipe(gulp.dest(path.www + "css/"));
};
gulp.task("css-build", cssBuildTask);


//Task for moving fonts to www
var fontsTask = function() {
    return gulp.src(fonts)
        .pipe(gulp.dest(path.www + "fonts/"));
};
gulp.task("fonts", fontsTask);


//Function for creating from json constants for module
/**
 * environment-dependent constants
 * @param {"development"|"production"|"local"} environment
 */
var createConfig = function(environment){
    return gulp.src(path.src + "modules/acdn-hris/apiEndpoints.json")
        .pipe(ngConfig("acdn-hris", {
            createModule: false,
            environment: environment,
            wrap: true
        }))
};


//Tasks for creating common js file
// var jsDevTask = function() {
//     return gulp.src(js)
//         .pipe(plumber())
//         .pipe(sourcemaps.init()).on("error", handleErrors)
//         .pipe(addStream.obj(createConfig("development")))
//         .on("error", handleErrors)
//         .pipe(ngAnnotate())
//         .on("error", handleErrors)
//         .pipe(concat("scripts.js"))
//         .on("error", handleErrors)
//         .pipe(sourcemaps.write("."))
//         .on("error", handleErrors)
//         .pipe(gulp.dest(path.www + "/js"))
// };

var jsDevTask = function() {
    gulp.plumbedSrc(js)
        .pipe(sourcemaps.init()).on("error", handleErrors)
        .pipe(addStream.obj(createConfig("development")))
        .on("error", handleErrors)
        .pipe(ngAnnotate())
        .on("error", handleErrors)
        .pipe(concat("scripts.js"))
        .on("error", handleErrors)
        .pipe(sourcemaps.write("."))
        .on("error", handleErrors)
        .pipe(gulp.dest(path.www + "/js"))
};

gulp.task("js-dev", jsDevTask);

var jsBuildTask = function() {
    gulp.plumbedSrc(js)
        .pipe(addStream.obj(createConfig("production")))
        .on("error", handleErrors)
        .pipe(ngAnnotate())
        .on("error", handleErrors)
        .pipe(concat("scripts.js"))
        .on("error", handleErrors)
        .pipe(uglify())
        .on("error", handleErrors)
        .pipe(gulp.dest(path.www + "/js"));
};

gulp.task("js-build", jsBuildTask);


//Task for copying all templates
var templatesTask =  function() {
    return gulp.src(templates)
        .pipe(gulp.dest(path.www + "/templates"));
};

gulp.task("templates", templatesTask);

var watchProject = function() {
    gulp.watch("scss/**/*", ["css-dev"]);
    gulp.watch(path.src + "img/**/*", ["images"]);
    gulp.watch(path.src + "modules/**/*.js", ["js-dev"]);
    gulp.watch(path.src + "modules/**/*.html", ["templates"]);
    gulp.watch(path.src + "index.html", ["index"]);
};


gulp.task("dev", ["images", "favicon", "manifest", "index", "css-dev", "fonts", "js-dev", "templates"], watchProject); // use for developing
gulp.task("build", ["images", "favicon", "manifest", "index", "css-build", "fonts", "js-build", "templates"]); // use for production build
