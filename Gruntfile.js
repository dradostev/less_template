module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		vendor: {
			jquery: 'bower_components/jquery/dist/jquery.js',
			dropit: 'bower_components/dropit/dropit.js',
			icomoon: 'bower_components/icomoon/'
		},

		prj: {
			root: 'public/',
			dev: 'public/dev/',
			prod: 'public/min/'
		},

		styles: 'less/',
		scripts: 'js/',

		banner: {
			build: 'Built at: <%= grunt.template.now %>\nVersion: <%= pkg.version %>\nAuthor: <%= pkg.author.name %>\n\n'
		},

		mkdir: {
			all: {
				options: {
					create: ['public/dev', 'public/min']
				}
			}
		},

		copy: {
			main: {
				files: [
					{ expand: true, flatten: true, src: ['<%= vendor.icomoon %>fonts/***'], dest: 'public/fonts' }
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
					'<%= vendor.jquery %>',
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
					'<%= prj.dev %>css/concat.css': '<%= styles %>main.less'
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
					"<%= prj.min %>css/styles.min.css" : ["<%= prj.dev %>css/*.css"]
				}
			}
		},

		uncss: {
		  dist: {
			files: {
			  '<%= prj.min %>css/prod.min.css': ['public/*.html']
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
			html: {
				files: ['<%= prj.root %>*.html'],
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