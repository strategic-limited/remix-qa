var host = 'https://app.videoremix.io/login';

var fieldValue;
module.exports =
{

  'Add all Social Plugins and check in playback': function(client)
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

          .url("https://app.videoremix.io/editor/57dbadf3ebb1840003d518f9/remix")
          //.useXpath()
          .pause(5000)
        /* .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 20000)
          .waitForElementVisible("//button[@type='button']", 2000)
          .click("//button[@type='button']") */                 // this has been removed from editor
          .waitForElementVisible("//strong[contains(text(),'Welcome!')]", 30000)
          .waitForElementVisible("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", 3000)
          .setValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", "youtube")
          .clearValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']")
          .pause(3000)
          .waitForElementVisible("//div[contains(text(),'Step 2, Drag your media to the timeline.')]", 3000)
          .click("//div[contains(text(),'Step 2, Drag your media to the timeline.')]")

// Step 5 - Add all social plugins

                    .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
                    .pause(5000)
                    .click("//span[@class='icon icon-white icon-plus']")
                    .pause(3000)
                    .waitForElementVisible("//span[contains(text(),'social')]", 3000)

          //add like plugin

                    .click("//span[contains(text(),'social')]")
                    .pause(6000)
                    .waitForElementVisible("//div[contains(text(),'Like')]", 5000)


                    .click("//div[contains(text(),'Like')]")
                    .click("//input[@data-manifest-key='end']")
                    .clearValue("//input[@data-manifest-key='end']")
                    .setValue("//input[@data-manifest-key='end']", "0:04.20")

                    .waitForElementPresent("//input[@data-manifest-key='start']", 3000)
                    .click("//input[@data-manifest-key='start']")
                    .clearValue("//input[@data-manifest-key='start']")
                    .setValue("//input[@data-manifest-key='start']", "0:00.00")


         // add comments plugin

                    .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
                    .pause(5000)
                    .click("//span[@class='icon icon-white icon-plus']")
                    .click("//span[contains(text(),'social')]")
                    .pause(6000)
                    .click("//fieldset/select")
                    .click("//option[@value='fb-comments']")

                    .pause(4000)
                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(4000)

                    .click("//div[contains(text(),'Comments')]")
                    .click("//input[@data-manifest-key='end']")
                    .clearValue("//input[@data-manifest-key='end']")
                    .setValue("//input[@data-manifest-key='end']", "0:08.10")

                    .waitForElementPresent("//input[@data-manifest-key='start']", 3000)
                    .click("//input[@data-manifest-key='start']")
                    .clearValue("//input[@data-manifest-key='start']")
                    .setValue("//input[@data-manifest-key='start']", "0:05.65")

          //add page plugin

                    .waitForElementVisible("//span[@class='icon icon-white icon-plus']", 3000)
                    .pause(5000)
                    .click("//a[(contains(text(),'Elements'))]")
                    .waitForElementVisible("//span[contains(text(),'social')]",4000)
                    .click("//span[contains(text(),'social')]")
                    .pause(6000)
                    .click("//fieldset/select")
                    .click("//option[@value='fb-page']")

                    .pause(4000)
                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(4000)

                    .click("//div[contains(text(),'Page')]")
                    .click("//input[@data-manifest-key='end']")
                    .clearValue("//input[@data-manifest-key='end']")
                    .setValue("//input[@data-manifest-key='end']", "0:10.10")

                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(3000)
                    .click("//div[contains(text(),'Page')]")
                    .click("//input[@data-manifest-key='start']")
                    .clearValue("//input[@data-manifest-key='start']")
                    .setValue("//input[@data-manifest-key='start']", "0:08.15")


          //add embed comments

                    .waitForElementVisible("//span[@class='icon icon-white icon-plus']", 3000)
                    .pause(5000)
                    .click("//span[@class='icon icon-white icon-plus']")
                    .click("//span[contains(text(),'social')]")
                    .pause(6000)
                    .click("//fieldset/select")
                    .click("//option[@value='fb-comment-embed']")

                    .pause(4000)
                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(4000)

                    .click("//div[contains(text(),'Embedded Comments')]")
                    .click("//input[@data-manifest-key='end']")
                    .clearValue("//input[@data-manifest-key='end']")
                    .setValue("//input[@data-manifest-key='end']", "0:12.10")

                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(3000)
                    .click("//div[contains(text(),'Embedded Comments')]")
                    .click("//input[@data-manifest-key='start']")
                    .clearValue("//input[@data-manifest-key='start']")
                    .setValue("//input[@data-manifest-key='start']", "0:10.17")


          //add embed posts

                    .waitForElementVisible("//span[@class='icon icon-white icon-plus']", 3000)
                    .pause(5000)
                    .click("//span[@class='icon icon-white icon-plus']")
                    .click("//span[contains(text(),'social')]")
                    .pause(6000)
                    .click("//fieldset/select")
                    .click("//option[@value='fb-post']")

                    .pause(4000)
                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(4000)
                    .click("//div[contains(text(),'Post')]")

                    .click("//input[@data-manifest-key='end']")
                    .clearValue("//input[@data-manifest-key='end']")
                    .setValue("//input[@data-manifest-key='end']", "0:14.20")

                    .click("//span[@class='icon icon-only icon-x']")
                    .pause(3000)
                    .click("//div[contains(text(),'Post')]")
                    .click("//input[@data-manifest-key='start']")
                    .clearValue("//input[@data-manifest-key='start']")
                    .setValue("//input[@data-manifest-key='start']", "0:12.15")


// Step 5 - remix editor - save video

                    .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
                    .click("//button[contains(text(),'Save')]")
                    .setValue("//input[@class='input title-input']",new Date())
                    .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
                    .click("//span[contains(text(),'Save')]")
                    .pause(3000)


// Step -6 Click on Email Campaign and Verify

                    .waitForElementVisible("//a[@id='embedBtn']", 5000)
                    .click("//a[@id='embedBtn']")

                    .window_handles(function(result)
                                  {
                                            var temp = result.value[2];
                                            this.switchWindow(temp);
                                  })

                    .waitForElementVisible("//div[@id='personalization-modal']", 10000)
                    .click("//div[@id='personalization-modal']")
                    .waitForElementVisible("//a[@id='hideform1']",10000)
                    .click("//a[@id='hideform1']")

                    .waitForElementVisible("//label[@title='Custom / All Other Email Providers']", 6000)
                    .click("//label[@title='Custom / All Other Email Providers']")
                    .waitForElementVisible("//input[@id='resultUrl']", 6000)
                    .getValue("//input[@id='resultUrl']", function(result)
                                {
                                  fieldValue = result.value;
                                  console.log(fieldValue);
                                  client.url(fieldValue);

                                })

// Step -7 - Check in Playback

          .pause(3000)
          .waitForElementVisible("//div[@id='controls-big-play-button']", 20000)
          .click("//div[@id='controls-big-play-button']")
          .pause(20000)
          .waitForElementPresent("//span[contains(text(),'0:16')][@id='controls-currenttime']", 3000)
          .end();
        }
  };
