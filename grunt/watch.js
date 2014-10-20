module.exports = function (grunt, options) {
    return {

        js: {
            files: ['src/app/**/*.js'],
            tasks: ['concat']
        },

        vendor: {
            files: ['vendor/**/*.js'],
            tasks: ['copy']
        },

        images: {
            files: ['images/**/*.png'],
            tasks: ['copy']
        },

        index: {
            files: ['src/index.html'],
            tasks: ['copy']
        }
    };
};
