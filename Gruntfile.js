module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            templates: {
                files: ['jade/*.jade', 'jade/*.pug'],
                tasks: ['pug'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'styles/main_global.css': 'sass/main_global.scss'
                }
            }
        },
        uglify: {
            all_js: {
                files: {
                    'js/min/all.js': [
                        'js/jquery1.10.js',
                        'js/inputmask.bundle.js',
                        'js/jquery-ui-1.11.4.js',
                        'js/script.js'
                    ]
                }
            }
        },
        pug: {
            // debug: {
            //     options: {
            //         data: {
            //             client: false,
            //             debug: true,
            //             pretty: true
            //         }
            //     },
            //     files: [{
            //         cwd: "jade/",
            //         src: "*.jade",
            //         dest: "",
            //         expand: true,
            //         ext: ".html"
            //     }]
            // },
            release: {
                options: {
                    data: {
                        client: true,
                        debug: false,
                        pretty: false
                    }
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
};