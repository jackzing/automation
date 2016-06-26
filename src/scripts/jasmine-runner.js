var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var path = require('path');
var noop = function() {};

var jrunner = new Jasmine();
jrunner.configureDefaultReporter({print: noop});    // remove default reporter logs
//jasmine.getEnv().addReporter(new SpecReporter());   // add jasmine-spec-reporter
jasmine.getEnv().addReporter(new SpecReporter({
      //displayStacktrace: 'none',
      displayStacktrace: 'summary',
      displayFailuresSummary: true,
      displayPendingSummary: true,
      displaySuccessfulSpec: true,
      displayFailedSpec: true,
      displayPendingSpec: true,
      displaySpecDuration: false,
      displaySuiteNumber: false,
      colors: {
              success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      prefixes: {
                        success: '✓ ',
        failure: '✗ ',
        pending: '* '
      },
      customProcessors: []
}));
//jrunner.projectBaseDir = '';
//jrunner.specDir = '';
jrunner.loadConfigFile();                           // load jasmine.json configuration
//jrunner.addSpecFiles([path.resolve('./first.spec.js')]);
jrunner.execute();
