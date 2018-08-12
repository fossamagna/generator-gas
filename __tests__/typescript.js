'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-gas:typescript', () => {
	beforeAll(() => {
		return helpers
      .run(path.join(__dirname, '../generators/typescript'))
			.withOptions({
        appName: 'test-app',
        githubUsername: 'fossamagna',
        name: 'Full Name',
        email: 'fossamagna2@gmail.com'
      });
	});

	it('creates files', () => {
		assert.file([
      '.gitignore',
      'package.json',
      '.clasp.json',
      'README.md',
      'src/index.ts',
      'src/hello.ts',
      'src/shim.d.ts',
      'tsconfig.json',
    ]);

    assert.jsonFileContent('package.json', {
      name: 'test-app',
      repository: 'fossamagna/test-app',
      author: {
        name: 'Full Name',
        email: 'fossamagna2@gmail.com'
      }
    });
	});
});
