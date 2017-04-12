module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            systemjs: {
                files:
                    [
                        {
                            expand: true,
                            cwd: 'node_modules/systemjs/dist/',
                            src: 'system.js',
                            dest: 'build/'
                        }
                    ]
            },
            react: {
                files:
                    [
                        {
                            expand: true,
                            cwd: 'node_modules/react/dist/',
                            src: 'react.min.js',
                            dest: 'build/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/react-dom/dist/',
                            src: 'react-dom.min.js',
                            dest: 'build/'
                        }
                    ],
            }
        },

        ts: {
            ts: {
                src: ['ts/*.ts'],
                dest: 'js/',
                ext: '.js',
                options: {
                    module: 'system',
                    target: 'es5',
                    noImplicitAny: true,
                    noEmitOnError: true,
                    sourceMap: false
                }
            }
        },

        tslint: {
            options:
                {
                    configFile: 'tsconfig.json'
                },
            validate: ['ts/*.ts']
        },

        react: {
            single_file_output:
            {
                files:
                    {
                        'build/index.js': 'jsx/index.jsx'
                    }
            }
        },

        clean: {
            beforeBuild: ['build/'],
            afterBuild: ['build/scripts.js']
        },

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
                files: ['ts/**/*.*', 'jsx/**/*.*'],
                tasks: ['tslint', 'ts', 'react', 'concat', 'uglify', 'clean:afterBuild', 'hashres:prod'],
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

    grunt.loadNpmTasks('grunt-ts'),
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', [
            'clean:beforeBuild',
            'tslint',
            'ts',
            'react',
            'copy:react',
            'concat',
            'uglify',
            'cssmin',
            'hashres:prod',
            'copy:systemjs',
            'clean:afterBuild',
            'connect:server',
            'watch'
    ]);
};