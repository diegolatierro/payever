var page = require('./page');

function PageverShop (webdriver) {
  page.call(this, webdriver, 'https://commerceos.staging.devpayever.com');
}

PageverShop.prototype = Object.create(page.prototype);
PageverShop.prototype.constructor = PageverShop;
var shopButton = 'button[data-pe-navbar-link="themes"]';
var expect = require('chai').expect
var shopLabel = 'span[class="mat-toolbar-link-text ng-star-inserted"]';
var aqaLabel = 'button[class="mat-button mat-button-link mat-button-bold undefined selected ng-star-inserted"]'

//Click on Apps
PageverShop.prototype.clickThemes = function() {
  this.waitFor({css: shopButton});
  this.driver.findElement({css: shopButton}).click();
  return new PageverApps(this.driver);
};

//Validation click on shop
PageverShop.prototype.clickOnShopCorrectly = function() {
  expect({css: shopLabel}).to.exist
};

PageverShop.prototype.AQAValidation = function() {
  expect({css: aqaLabel}).to.exist
};

module.exports = PageverShop;
