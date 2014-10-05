'use strict';

module.exports = function(config) {
	config.set({
		autoWatch: true,
		basePath: '',
		browsers: [ process.env.TRAVIS ? 'Firefox' : 'Chrome'],
		captureTimeout: 5000,
		exclude: [
			'app/**/main.js'
		],
		files: [
			'bower_components/jquery/dist/jquery.js',
			'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
			'bower_components/jasmine-flight/lib/jasmine-flight.js',
			{ pattern: 'bower_components/flight/**/*.js', included: false },
			{ pattern: 'lib/**/*.js', included: false },
			{ pattern: 'test/spec/**/*.js', included: false },
			{ pattern: 'test/fixtures/**/*.js', included: false },
			'test/**/test-main.js'
		],
		frameworks: [
			'jasmine',
			'requirejs'
		],
		reporters: [ process.env.TRAVIS ? 'dots' : 'progress' ],
		reportSlowerThan: 500,
		singleRun: false
	});
};