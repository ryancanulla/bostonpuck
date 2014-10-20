module.exports = function (grunt, options) {
    return {

        main: {
            files: [


                {
                    expand: true,
                    cwd: 'src/',
                    src: ['index.html'],
                    dest: 'build/'
                },
                {
                    expand: true,
                    cwd: 'src/images/',
                    src: ['*.png'],
                    dest: 'build/images/'
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: 'vendor/',
                    src: [
                        'phaser/phaser.js'
                    ],
                    dest: 'build/vendor/'
                }
            ]
        }

    };
};