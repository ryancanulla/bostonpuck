'use strict';

var path  = require('path');

module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        init: true,
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        },
        postProcess: function(config) {}
    });

    grunt.registerTask('build', ['copy', 'concat']);
    grunt.registerTask('runDev', ['build', 'concurrent:dev']);
//
//    // proxy REST endpoints for local development
//    grunt.registerTask('proxyLocal', ['dist', 'concurrent:local']);
//    grunt.registerTask('proxyDev', ['dist', 'concurrent:dev']);
//    grunt.registerTask('proxySit', ['dist', 'concurrent:sit']);
//    grunt.registerTask('proxyTst', ['dist', 'concurrent:tst']);
//
//    // proxy a full GFS environment to facilitate demos and testing
//    grunt.registerTask('proxyDemoDev', ['configureProxies:demoDev','connect']);
//    grunt.registerTask('proxyDemoSit', ['configureProxies:demoSit','connect']);
//
//    // internal targets
//    grunt.registerTask('runLocal', ['configureProxies:local','connect']);
//    grunt.registerTask('runDev', ['configureProxies:dev','connect']);
//    grunt.registerTask('runSit', ['configureProxies:sit','connect']);
//    grunt.registerTask('runTst', ['configureProxies:tst','connect']);
//
//    grunt.registerTask('teste2e', ['protractor:all']);
};