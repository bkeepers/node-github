var {defineSupportCode} = require('cucumber');
const Client = require('../..');

function GitHubWorld() {
  this.client = new Client();

  this.request = function(method, url, table) {
    // FIXME: look up method+url in routes.json, and call appropriate methods
    // on this.client, translating table into real params
    console.log(method, url, table);
  }
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(GitHubWorld);
});
