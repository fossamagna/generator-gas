'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-gas:app', () => {
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, '../generators/app'))
			.withPrompts({someAnswer: true});
	});

	it('creates files', () => {
		assert.file([
      '.babelrc',
      '.gitignore',
      'package.json',
      'gas-project.json',
      '.eslintrc.json',
      'README.md',
      'src/index.js',
      'src/hello.js'
    ]);
	});
});
