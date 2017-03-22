module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '',
                    open: {
                        appName: 'Chrome'
                    }
                }
            }
        },

        concat: {
            dist: {
                src: ['js/**/*.js'],
                dest: 'build/scripts.js'
            }
        },

        uglify: {
            build: {
                src: 'build/scripts.js',
                dest: 'build/scripts.min.js'
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },

            target: {
                files: {
                    'build/styles.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/main.css'
                    ]
                }
            }
        },

        eslint: {
            target: ['build/scripts.js']
        },

        hashres: {
            options: {
                fileNameFormat: '${name}.[${hash}].${ext}'
            },

            prod: {
                src: [
                    'build/scripts.min.js',
                    'build/styles.min.css'
                ],

                dest: ['index.html']
            }
        },

        watch: {

            css: {
                files: ['css/**/*.*'],
                tasks: ['cssmin', 'hashres:prod'],
                options: {livereload: true}
            },

            scripts: {
                files: ['js/**/*.*'],
                tasks: ['concat', 'uglify', 'eslint', 'hashres:prod'],
                options: {livereload: true}
            },

            html: {
                files: ['*.html'],
                options: {livereload: true}
            }
        },

        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', [
            'concat',
            'uglify',
            'cssmin',
            'eslint',
            'hashres:prod',
            'connect:server',
            'watch'
]);
};