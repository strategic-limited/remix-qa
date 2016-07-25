var host = 'https://app.videoremix.io/login';
module.exports =
{

  'Check Editing images from Adobe Editor': function(client)
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

// Step 5 - Add Image Element
          .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
          .pause(5000)
          .click("//span[@class='icon icon-white icon-plus']")
          .pause(5000)
          .waitForElementVisible("//span[contains(text(),'image')]", 3000)
          .click("//span[contains(text(),'image')]")
          .waitForElementVisible("//input[@id='image-url-input']", 3000)
          .setValue("//input[@id='image-url-input']", "http://www.gettyimages.in/gi-resources/images/Editorial-Images/Entertainment.jpg", "Keys.ENTER")
      //    .sendKeys("//input[@id='image-url-input']", .Keys.ENTER)
          .waitForElementVisible("//img[@src='http://www.gettyimages.in/gi-resources/images/Editorial-Images/Entertainment.jpg']", 6000)
          .click("//button[contains(text(),'Adobe Editor')]")
          .waitForElementVisible("//span[@id='avpw_breadcrumb_header']", 6000)
          .waitForElementVisible("//span[contains(text(),'Frames')]", 3000)
          .click("//span[contains(text(),'Frames')]")
          .waitForElementVisible("//span[contains(text(),'Bohemia')]", 6000)
          .click("//span[contains(text(),'Bohemia')]")
          .waitForElementVisible("//span[contains(text(),'Curls')]", 6000)
          .click("//span[contains(text(),'Curls')]")
          .waitForElementVisible("//a[contains(text(),'Apply')]", 3000)
          .click("//a[contains(text(),'Apply')]")
          .waitForElementVisible("//a[@id='avpw_save_button']", 3000)
          .click("//a[@id='avpw_save_button']")
          //take screenshot

//step 5 - Save

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
