var host = 'https://app.videoremix.io/login';
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

          .url("https://app.videoremix.io/editor/28142/remix")
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

// Step 5 - Add all social plugins

          .waitForElementPresent("//span[@class='icon icon-white icon-plus']", 3000)
          .pause(5000)
          .click("//span[@class='icon icon-white icon-plus']")
          .pause(3000)
          .waitForElementVisible("//span[contains(text(),'Personalized Text')]", 2000)
          .moveToElement("//span[contains(text(),'Personalized Text')]", 100 , 100)
          //.click("//span[contains(text(),'Personalized Text')]")


.frame('intercom-frame', function ()
{
    client
    .click("//div[@class='butter-editor-body scrollbar-container'"]);
        .execute('scrollTo(0,3000)');
        .mouseButtonDown('0');
        .click("//span[contains(text(),'social')]");
})




          /*.waitForElementVisible("(//div[@class='butter-scroll-handle'])[3]", 5000)
          .useCss()
          .moveToElement('.butter-scroll-handle',200 , 600)
          .mouseButtonDown(0)
          .useXpath()
          .moveToElement("(//div[@class='butter-scroll-handle'])[3]",  300,  500)
          .mouseButtonDown(0)*/

        //  .pause(5000)
      //  .click("//a[@data-popcorn-plugin-type='social']")
        .pause(10000)

        //  .execute('scrollTo(0,3000)')
      //  .useXpath()
        //  .waitForElementVisible("//span[contains(text(),'social')]", 3000)

          //add like plugin
          .click("//span[contains(text(),'social')]")

          .pause(6000)
          .waitForElementVisible("//div[contains(text(),'Like')]", 5000)
          .click("//span[@class='icon icon-white icon-plus']")
          .pause(3000)
          .moveToElement("(//div[@class='butter-scroll-handle'])[3]", 0 , 0)
          .mouseButtonDown(0)

          //.execute('scrollTo(0,3000)')

          //add comment plugin
          .pause(5000)
          .waitForElementVisible("//span[contains(text(),'social')]", 3000)
          .click("//span[contains(text(),'social')]")
          .waitForElementVisible("//select[@data-manifest-key='type']", 5000)
          .click("//select[@data-manifest-key='type']")
          .click("//option[@value='fb-comments']")
          .pause(8000)

          //add

          .end();


    }
};
