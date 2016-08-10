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

/* // Step 2 -  after remix login closing pop up. (This functionality has been removed)
              .useCss()
              .waitForElementVisible('body', 3000)
              .useXpath()
              .waitForElementPresent("//h2" , 3000)
              .click("//button[@title='Close']")
              .useCss()
              .waitForElementVisible('body', 2000) */

// Step 3 - After remix login verifying Templates pages
            .waitForElementVisible("//a[@data-section='templates']", 3000)

// Step 4 - Open remix Editor

            .url("https://app.videoremix.io/editor/28082/remix")
            .useXpath()
            .pause(5000)
          /* .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 20000)
            .waitForElementVisible("//button[@type='button']", 2000)
            .click("//button[@type='button']") */                 // this has been removed from editor
            .waitForElementVisible("//strong[contains(text(),'Welcome!')]", 10000)
            .waitForElementVisible("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", 3000)
            .setValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", "youtube")
            .clearValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']")
            .pause(3000)
            .waitForElementVisible("//div[contains(text(),'Step 2, Drag your media to the timeline.')]", 3000)
            .click("//div[contains(text(),'Step 2, Drag your media to the timeline.')]")

//Step 5 - Click on Elements and click on Lower thirds and combo Elements

            .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
            .pause(5000)
            .click("//span[@class='icon icon-white icon-plus']")
            .pause(5000)
            .execute('scrollTo(0,1500)')
            .waitForElementVisible("//span[contains(text(),'Lower Thirds & Combo Elements')]", 3000)
            .click("//span[contains(text(),'Lower Thirds & Combo Elements')]")
            .waitForElementVisible("//h3", 3000)
            .end();

          }
};
