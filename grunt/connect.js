module.exports = function (grunt, options) {
    return {
        server: {
            options: {
                debug: true,
                port: 8181,
                hostname: '0.0.0.0',
                base: 'build',
                keepalive: true
            }
        }
    };
};
