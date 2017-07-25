var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  var routes = require('../../lib/routes');
  delete routes.defines;

  function generate(block) {
    if(block.method && block.url) {
      console.log(`${block.method} ${block.url}`);
      When(`${block.method} ${block.url}`, function (table) {
        return this.request(block.method, block.url, table);
      });
    } else {
      for(const section in block) {
        generate(block[section]);
      }
    }
  }

  generate(routes);
});
