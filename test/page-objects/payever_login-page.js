var page = require('./page');

function PayeverPage (webdriver) {
  page.call(this, webdriver, 'https://commerceos.staging.devpayever.com');
}

PayeverPage.prototype = Object.create(page.prototype);
PayeverPage.prototype.constructor = PayeverPage;

//Vars for login page
var name_field = 'UserName';
var pass_field = 'mat-input-3';
var login_button_script = "document.getElementsByTagName('Button')[0].click();";

PayeverPage.prototype.typeUserName = function(username) {
  this.waitFor({ name:  name_field});
  return this.driver.findElement({ name: name_field  }).sendKeys(username);
};
PayeverPage.prototype.typePassword = function(password) {
  this.waitFor({ id: pass_field });
  return this.driver.findElement({ id: pass_field  }).sendKeys(password);

};

PayeverPage.prototype.clickLoginButton = function() {
  this.driver.executeScript(login_button_script);
  return new PayeverPage(this.driver);
};

PayeverPage.prototype.login = function(username,password) {
  this.waitFor({ name: name_field });
  this.typeUserName(username);
  this.typePassword(password);
  this.clickLoginButton();
};


module.exports = PayeverPage;
