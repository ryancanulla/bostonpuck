module.exports = function (grunt, options) {
    return {

        options: {

        },
        dist: {
            src: [
                // common
                'src/app/namespace.js',
                'src/app/app.js',

                // game
                'src/app/game/demo.js'

            ],

            dest: 'build/bostonPuck.js'
        }

    };
};
