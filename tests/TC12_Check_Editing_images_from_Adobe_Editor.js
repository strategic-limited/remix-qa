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

/* // Step 3 -  after remix login closing pop up. (This functionality has been removed)
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
          .waitForElementVisible("//strong[contains(text(),'Welcome!')]", 20000)
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
          .waitForElementVisible("//input[@id='image-url-input']", 3000)
          .clearValue("//input[@id='image-url-input']")
          .pause(3000)
          .setValue("//input[@id='image-url-input']", "http://www.gettyimages.in/gi-resources/images/Editorial-Images/Entertainment.jpg")
      //    .sendKeys("//input[@id='image-url-input']", .Keys.ENTER)
      //    .click("//input[@id='image-url-input']")


          .keys(['\uE006'])
          .pause(30000)

          .waitForElementVisible("//img[@src='http://www.gettyimages.in/gi-resources/images/Editorial-Images/Entertainment.jpg']", 10000)
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
          .waitForElementVisible("(//div[@class='title'])[1]", 3000)
          .click("//span[@class='icon icon-white icon-only icon-play']")

//step 5 - Save
          .pause(5000)
          .waitForElementVisible("//button[contains(text(),'Save')]", 4000)
          .click("//button[contains(text(),'Save')]")
          .waitForElementVisible("//input[@class='input title-input']", 2000)
          .setValue("//input[@class='input title-input']",new Date())
          .pause(5000)
          .waitForElementVisible("//span[contains(text(),'Save')]", 5000)
          .click("//span[contains(text(),'Save')]")
          .pause(3000)
          .waitForElementVisible("//div[@id='preview-icon']", 5000)
          .click("//div[@id='preview-icon']")
          .pause(10000)
          .window_handles(function(result)
          {
                  var temp = result.value[1];
                  this.switchWindow(temp);
          })

// step 7 - Play preview video

          .pause(3000)
          .frame('previewVideo', function () {
              client
              .waitForElementVisible("//span[@id='controls-play']", 5000)
                  .click("//span[@id='controls-play']")
                  .pause(4000)
                  .click("//span[@id='controls-play']")
          })
          .end();

  }
};
