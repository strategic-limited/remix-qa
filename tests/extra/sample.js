module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .windowMaximize()
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('//input[@id='email']', 'yvglrcw_wongwitz_1468002772@tfbnw.net')
      .setValue('//input[@id='pass']', 'JPsRq5vMuzn')
      .click('//input[@id='u_0_m']')
      .pause(10000)
      .end();
  }
};
