'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _s = require('underscore.string');

module.exports = class extends Generator {
	prompting() {
		// Have Yeoman greet the user.
		this.log(
			yosay(`Welcome to the grand ${chalk.red('generator-gas')} generator!`));

		const prompts = [
			{
				name: 'appName',
				message: 'What do you want to name your app?',
				default: this.appname.replace(/\s/g, '-'),
				filter: val => {
					return _s.slugify(val);
				}
			},
			{
				name: 'githubUsername',
				message: 'What is your GitHub username?',
				store: true,
				validate: val => {
					return val.length > 0 ? true : 'You have to provide a username';
				}
			}
		];

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	configuring() {
		this.composeWith(require.resolve('../babel'), {
			appName: this.props.appName,
			githubUsername: this.props.githubUsername,
			name: this.user.git.name(),
			email: this.user.git.email()
		});
	}
};
