var host = 'https://app.videoremix.io/login';
module.exports =
{

  'Preview LOWER THIRDS & COMBO ELEMENTS': function(client)
   {

// Step 1 - Login to VR editor
   client
      .windowMaximize()
      .url(host)
      .useCss()
      .waitForElementVisible('body', 3000)
      .useXpath()
      .waitForElementPresent("//input[@name='uid']" , 2000)
      .setValue("//input[@name='uid']","test03@gmail.com")
      .setValue("(//input[@name='password'])[1]","Abcdefgh@123")
      .click("(//button[@ng-click='user.password && submitPassword()'])[2]")
      .pause(3000)

// Step 2 -  after remix login closing pop up.
        .useCss()
        .waitForElementVisible('body', 3000)
        .useXpath()
        .waitForElementPresent("//h2" , 3000)
        .click("//button[@title='Close']")
        .useCss()
        .waitForElementVisible('body', 2000)

// Step 4 - Open remix Editor

            .url("https://app.videoremix.io/editor/28082/remix")
            .useXpath()
            .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 15000)
            .waitForElementVisible("//button[@type='button']", 10000)
            .click("//button[@type='button']")
            .refresh()
            .waitForElementVisible("//span[@id='identity']", 10000)

//Step 5 - Click on Elements and click on Lower thirds and combo Elements

            .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
            .click("//span[@class='icon icon-white icon-plus']")
            .waitForElementVisible("//a[@data-popcorn-plugin-type='combined']", 2000)
            .click("//a[@data-popcorn-plugin-type='combined']")
            .end();
          }
};
