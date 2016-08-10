var host = 'https://app.videoremix.io/login';
module.exports =
{

  'Check Playback, when Allow Facebook not enabled': function(client)
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

          .url("https://app.videoremix.io/editor/30722/remix")
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

//step 5 - Save

          .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
          .click("//button[contains(text(),'Save')]")
          .setValue("//input[@class='input title-input']",new Date())
          .click("//input[@id='allow-fb']")                                     //Allow Facebook disable
          .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
          .click("//span[contains(text(),'Save')]")
          .pause(3000)

          .waitForElementVisible("//button[contains(text(),'Save')]", 2000) //delete these three lines after test passes
          .click("//button[contains(text(),'Save')]")
          .pause(3000)

          .waitForElementVisible("//div[@id='preview-icon']", 3000)
          .click("//div[@id='preview-icon']")
          .pause(10000)

//Step 6 - Verify 'Connect with Facebook' and 'Enter Without Facebook' should not be available

          .waitForElementVisible("//div[@id='previewDialogbody']", 5000)
          .frame('previewVideo', function () {
          client
          .waitForElementNotVisible("//div/button[@id='useFbButton']", 9000)
          .waitForElementNotVisible("//button[@id='withoutFbButton']", 9000)
          .pause(4000)
          })
          .end();

          }
};
