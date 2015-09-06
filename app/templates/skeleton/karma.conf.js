module.exports = function(config) {
  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['jasmine-jquery', 'jasmine'],

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    files: [
      // bower dist dependencies
      'bower_components/angular/angular.js',

      //Spec Helpers
      // 'spec-helpers/spec-helper-main.js',
      // 'spec-helpers/**.js',

      // bower test dependencies
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // your implementation files
      // 'animation-and-style-helpers.js',
      'app.js',
      // 'partial/**/*.js',
      // 'partial/**/*.html',
      // 'directive/**/*.js'
      // 'directive/**/*.html'
      // 'service/**/*.js'
      // 'filter/**/*.js'
    ],

    ngHtml2JsPreprocessor: {
      moduleName: '<%= _.camelize(appname) %>',
      // or define a custom transform function
      //      cacheIdFromPath: function(filepath) {
      //        console.error("=============>", filepath);
      //        return cacheId;
      //      }
    },

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      subdir: '.'
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};
