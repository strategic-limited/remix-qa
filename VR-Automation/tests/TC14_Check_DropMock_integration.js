var host = 'https://app.videoremix.io/login';
module.exports =
{

  'Check DropMock integration': function(client)
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
          .pause(3000)
          .waitForElementVisible("//span[@id='identity']", 10000)

// Step 5 - Add Image Element
          .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
          .pause(5000)
          .click("//span[@class='icon icon-white icon-plus']")
          .pause(5000)
          .waitForElementVisible("//span[contains(text(),'image')]", 3000)
          .click("//span[contains(text(),'image')]")
          .waitForElementVisible("//button[contains(text(),'DropMock')]", 3000)
          .click("//button[contains(text(),'DropMock')]")
          .waitForElementVisible("//h4[contains(text(),'Your Drive')]", 6000)
          .waitForElementVisible("(//div[@class='thumb-container'])[5]", 5000)
          .click("(//div[@class='thumb-container'])[5]")
          //take screenshot


//Step 6 - Save
          .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
          .click("//button[contains(text(),'Save')]")
          .setValue("//input[@class='input title-input']",new Date())
          .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
          .click("//span[contains(text(),'Save')]")
          .pause(3000)
          .waitForElementVisible("//div[@id='preview-icon']", 3000)
          .click("//div[@id='preview-icon']")
          .pause(10000)

// step 7 - Play preview video

          .waitForElementVisible("//div[@id='previewDialogbody']", 5000)
          .click("//div[@id='previewDialogbody']")
          .pause(25000)
          .end();
                  //take screenshot
                  }
          };
