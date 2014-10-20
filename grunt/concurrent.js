module.exports = function (grunt, options) {
    return {
        dev: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    };
};
