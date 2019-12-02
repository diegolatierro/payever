var page = require('./page');

function PageverApps (webdriver) {
  page.call(this, webdriver, 'https://commerceos.staging.devpayever.com');
}

PageverApps.prototype = Object.create(page.prototype);
PageverApps.prototype.constructor = PageverApps;
var shopButton = 'div[data-pe-app="shop"]';

//Click on Apps
PageverApps.prototype.clickShop = function() {
  this.waitFor({css: shopButton});
  this.driver.findElement({css: shopButton}).click();
  return new PageverApps(this.driver);
};

module.exports = PageverApps;
