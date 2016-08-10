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

/* // Step 2 -  after remix login closing pop up. (This functionality has been removed)
                        .useCss()
                        .waitForElementVisible('body', 3000)
                        .useXpath()
                        .waitForElementPresent("//h2" , 3000)
                        .click("//button[@title='Close']")
                        .useCss()
                        .waitForElementVisible('body', 2000) */

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
          .waitForElementVisible("(//div[@class='title'])[1]", 3000)
          .click("//span[@class='icon icon-white icon-only icon-play']")
          .pause(5000)

//Step 6 - Save

          .waitForElementVisible("//button[contains(text(),'Save')]", 4000)
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
          .pause(5000)
          .frame('previewVideo', function ()
          {
          client
          .click("//span[@id='controls-play']")
          .pause(4000)
          .click("//span[@id='controls-play']")
            })
          .end();

        }
};
