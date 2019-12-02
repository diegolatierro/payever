var page = require('./page');

function PageverDashboard (webdriver) {
  page.call(this, webdriver, 'https://commerceos.staging.devpayever.com');
}

PageverDashboard.prototype = Object.create(page.prototype);
PageverDashboard.prototype.constructor = PageverDashboard;
var appButton = 'button[data-pe-navbar-link="apps"]>span>span';
var tutorialLabel = 'span[class="widget-card-header-title"]';
var expect = require('chai').expect

//Validation current page
PageverDashboard.prototype.openBusinessDashboard = function() {
  this.driver.findElement({ class: ''}).click();
  return new PageverDashboard(this.driver);
};

//Click on Apps
PageverDashboard.prototype.clickApps = function() {
  this.waitFor({css: appButton},300000);
  this.driver.findElement({css: appButton}).click();
  return new PageverDashboard(this.driver);
};

//Validate login correct
PageverDashboard.prototype.loginCorrect = function() {
  expect({css: tutorialLabel}).to.exist
};
module.exports = PageverDashboard;
