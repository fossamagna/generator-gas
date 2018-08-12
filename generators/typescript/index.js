'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

	constructor(args, opts) {
        super(args, opts);
	}
	
	writing() {
		this.fs.copyTpl(
			this.templatePath('**'),
			this.destinationPath(),
			{
				appName: this.options.appName,
				githubUsername: this.options.githubUsername,
				name: this.options.name,
				email: this.options.email
			}
		);
		this.fs.move(
			this.destinationPath('_package.json'),
			this.destinationPath('package.json')
		);
		this.fs.move(
			this.destinationPath('_gitignore'),
			this.destinationPath('.gitignore')
		);
		this.fs.move(
			this.destinationPath('_clasp.json'),
			this.destinationPath('.clasp.json')
		);
	}

	install() {
		this.installDependencies({bower: false});
	}
};
