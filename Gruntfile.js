module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		vendor: {
			jquery: 'bower_components/jquery/dist/jquery.js',
			dropit: 'bower_components/dropit/dropit.js',
			icomoon: 'bower_components/icomoon/'
		},

		/* Before use of icomoon it's needed to go to icomoon's style.css and append '../../' to font urls and 'color: inherit' to glyphs */

		prj: {
			root: '../',
			dev: '../dev/',
			prod: '../',
			template: 'templates/'
		},

		styles: 'less/',
		scripts: 'js/',

		banner: {
			build: '/*\n\n Theme Name: <%= pkg.name %>\nDescription: Шаблон для сайта <%= pkg.author.current-project %>\n Version: <%= pkg.version %>\n Author: <%= pkg.author.name %>\n Author e-mail: <%= pkg.author.email %> \n\n*/'
		},

		mkdir: {
			all: {
				options: {
					create: ['../dev', '../img']
				}
			}
		},

		copy: {
			main: {
				files: [
					{ expand: true, flatten: true, src: ['<%= vendor.icomoon %>fonts/***'], dest: '<%= prj.root %>/fonts' },
					{ expand: true, flatten: true, src: ['templates/***'], dest: '<%= prj.root %>' }
				]
			}
		},

		jshint: {
			files: ['<%= scripts %>*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},

		concat: {
			dist: {
				src: [
					/*'<%= vendor.jquery %>',*/ //jQuery isn't needed due to it is embedded into WP
					'<%= vendor.dropit %>',
					'<%= scripts %>*.js'
				],
				dest: '<%= prj.dev %>js/dev.js'
			}
		},

		uglify: {
			build: {
				src: '<%= prj.dev %>js/concat.js',
				dest: '<%= prj.prod %>js/prod.min.js'
			}
		},

		less: {
			development: {
				files: {
					'<%= prj.dev %>css/style.css': '<%= styles %>main.less'
				}
			}
		},

		autoprefixer: {
			multiple_files: {
		      expand: true,
		      flatten: true,
		      src: '<%= prj.dev %>css/concat.css',
		      dest: '<%= prj.dev %>css/prefixed.css'
		    }
		},

		cssmin: {
			with_banner: {
				options: {
					banner: '<%= banner.build %>'
				},
				files: {
					"<%= prj.prod %>style.css" : ["<%= prj.dev %>css/*.css"]
				}
			}
		},

		uncss: {
		  dist: {
			files: {
			  '<%= prj.prod %>css/style.css': ['<%= prj.root %>*.php']
			}
		  }
		},

		watch : {
			scripts: {
				files: ['<%= scripts %>*.js'],
				tasks: ['jshint', 'concat'/*, 'uglify'*/],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['<%= styles %>/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			php: {
				files: ['<%= prj.root %>*.php'],
				options: {
					livereload: true
				}
			},
			php_templates: {
				files: ['templates/*.php'],
				tasks: ['copy'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('build:prod', ['jshint', 'concat', 'uglify', 'less', 'autoprefixer', 'cssmin', 'uncss']);
	grunt.registerTask('build:dev', ['concat', 'less', 'watch']);
	grunt.registerTask('init', ['mkdir', 'copy', 'concat', 'less', 'watch']);
	grunt.registerTask('default', ['watch']);
}