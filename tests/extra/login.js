module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .windowMaximize()
	  .url('https://www.facebook.com/')
	  .waitForElementVisible('body', 1000)
	  .useXpath()
      .setValue("//input[@id='email']","yvglrcw_wongwitz_1468002772@tfbnw.net")
      .setValue("//input[@id='pass']","JPsRq5vMuzn")
      .click("//input[@id='u_0_m']")
	  .pause(20000)
	  .end();
  }
};
