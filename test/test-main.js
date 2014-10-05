'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/\.spec\.js$/.test(file));
});

require.config({
    baseUrl: 'base',
    paths: {
        'flight': 'bower_components/flight'
    },
    deps: tests,
    callback: window.__karma__.start
});

jasmine.getFixtures().fixturesPath = 'base/test/fixtures';