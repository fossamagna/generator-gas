# <%= appName %>

Google Apps Script Application with [Browserify](http://browserify.org) + [Babel](https://babeljs.io/).

# For Local Development

For Apps Script local development, You need to use Drive API to export a Apps Script Project on Google Drive. This project will be use [gas-manager](https://github.com/soundTricker/gas-manager) for import Apps Script Project.

gas-project.json:
```json
{
  "src": {
    "fileId": "<YOUR_SCRIPT_ID>",
    "files": {
      "Code": {
        "path": "dist/Code.gs",
        "type": "server_js"
      }
    }
  }
}
```

Please see [gas-manager](https://github.com/soundTricker/gas-manager#cli) and [Importing and Exporting Projects Page](https://developers.google.com/apps-script/import-export) for details.

# Deploy

```sh
$ npm run deploy
```

* Server JavaScript files will be compiled by Browserify and [gasify](https://www.npmjs.com/package/gasify).
* Sync compiled `Code.gs` to Google Apps Script Project in Google Drive by gas-manager.
