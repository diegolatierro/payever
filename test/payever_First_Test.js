var test = require('selenium-webdriver/testing'),
  expect = require('chai').expect,
  PayeverPage = require('./page-objects/payever_login-page');
  PageverDashboard = require('./page-objects/payever_dashboard-page');
  PageverApps = require('./page-objects/payever_Apps-page');
  PageverShop = require('./page-objects/payever_Shop-page');
  PageverThemes = require('./page-objects/payever_Themes-page');

test.describe('Login', function() {

  var driver;

  this.timeout(15000);

  test.before(function(done) {
    driver = require('./driver').getDriver();
    done();
  });

  test.after(function(done) {
    if(driver)
      driver.quit();
    done();
  });

  test.it('should login to site', function() {
    this.timeout(50000);//login too slow
    var payeverLogin = new PayeverPage(driver);
    var payeverDashboard = new PageverDashboard(driver);
    var payeverApps = new PageverApps(driver);
    var payeverShop = new PageverShop(driver);
    var payeverThemes = new PageverThemes(driver);

    //step 1: open https://commerceos.staging.devpayever.com
    payeverLogin.open();
    //step 2: login with this credentials
    payeverLogin.login('aqa@payever.org','Aqacool123!');
    //Step 3: Open business dashboard
    payeverDashboard.loginCorrect();//VALIDATION
    //Step 4: Click on 'Apps' in the left top bar
    payeverDashboard.clickApps();
    //Step 5: Click on 'Shop' app icon
    payeverApps.clickShop();
    //Step 6: Open shop app
    payeverShop.clickOnShopCorrectly();//VALIDATION
    //Step 7: Click 'Themes' in the top bar
    payeverShop.clickThemes();
    //Step 8: Click 'Add Theme'
    payeverThemes.clickNewTheme();
    //Step 9: Opens 'AQA' shop
    payeverShop.AQAValidation();//VALIDATION
    //Step 10: Click [ A ] text widget icon in the nav bar
    payeverThemes.clickOnTextButton();
    //Step 11: Places text widget on canvas
    //payeverThemes.textLabelExist();//VALIDATION
    //Step 12: Click on text widget
    payeverThemes.clickOnTextLabel();
    //Step 13: Assign text to widget: 'This test is completed!'
    //Step 14: Click 'Close' in the right top bar
    payeverThemes.clickOnEscape();
    //done();
  });
});
