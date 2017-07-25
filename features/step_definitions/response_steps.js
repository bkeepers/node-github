var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Then('verify response:', function (table) {
    console.log("verifing last response", table);
  });
});
