var page = require('./page');

function PageverThemes (webdriver) {
  page.call(this, webdriver, 'https://commerceos.staging.devpayever.com');
}

PageverThemes.prototype = Object.create(page.prototype);
PageverThemes.prototype.constructor = PageverThemes;
var shopButton = 'mat-card-content[data-pe-themes="add"]';
var themeBodyArea = 'pe-builder-elements-section:nth-of-type(4)';
var themeBodyAreaScript = 'document.querySelector("pe-editor-canvas[class=\"pe-editor-canvas\"]").shadowRoot.querySelector("div").querySelector("pe-builder-elements-document").children[1].querySelector("span").click()';

var themeTextButton = 'pe-builder-navbar-top-button[bottomlabel="Text"]>button';
var themeTextLabelScript = 'document.querySelector("pe-editor-canvas").shadowRoot.querySelector("div").querySelector("pe-builder-elements-document").children[1].children[0].querySelector("div").innerHTML = "This test is completed!";'
var themeTextLabel = 'document.querySelector("pe-editor-canvas").shadowRoot.querySelector("div").querySelector("pe-builder-elements-document").children[1].children[0].querySelector("div")';
var themeNavBarEscape = 'button[data-pe-navbar-link="schließen"]';
var expect = require('chai').expect

//Click on Apps
PageverThemes.prototype.clickNewTheme = function() {
  this.waitFor({css: shopButton});
  this.driver.findElement({css: shopButton}).click();
  return new PageverThemes(this.driver);
};
//Click on Body Area
PageverThemes.prototype.clickOnBodyArea = function() {
  this.waitFor({css: themeTextButton});
  this.driver.executeScript(themeBodyAreaScript);
  return new PageverThemes(this.driver);
};
//Click on Text button
PageverThemes.prototype.clickOnTextButton = function() {
  this.waitFor({css: themeTextButton});
  this.driver.findElement({css: themeTextButton}).click();
  return new PageverThemes(this.driver);
};

//Click on Text label
PageverThemes.prototype.clickOnTextLabel = function() {
  this.driver.executeScript(themeTextLabelScript);
  return new PageverThemes(this.driver);
};

PageverThemes.prototype.clickOnEscape = function() {
  this.driver.findElement({css: themeNavBarEscape}).click()
  return new PageverThemes(this.driver);
};

PageverThemes.prototype.textLabelExist = function() {
  //expect({this.driver.executeScript(themeTextLabelScript)}).to.exist //FIX THIS
};

module.exports = PageverThemes;
