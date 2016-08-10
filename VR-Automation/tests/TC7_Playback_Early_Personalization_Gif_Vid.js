var host = 'https://app.videoremix.io/login';
module.exports =
{

  'Playback Early Personalization Gif Vid': function(client)
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

// Step 2 - After remix login verifying Templates pages
        .waitForElementVisible("//a[@data-section='templates']", 3000)

// Step 3 - Open remix Editor

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


//Step 4 - Add media in the textbox

        .setValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", "https://media.giphy.com/media/3o7ZeMCXAFPvusagQU/giphy.gif")
        .waitForElementVisible("//a[@id='get-media-btn']", 3000)
        .click("//a[@id='get-media-btn']")
        .waitForElementVisible("//div[@data-popcorn-plugin-type='image']", 3000)
        .click("//div[@data-popcorn-plugin-type='image']")
        .waitForElementVisible("(//div[@class='title'])[1]", 3000)
        .click("//span[@class='icon icon-white icon-only icon-play']")

//Step 5 - Save the video
        .pause(3000)
        .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
        .click("//button[contains(text(),'Save')]")
        .setValue("//input[@class='input title-input']",new Date())
        .click("//li[@data-source='https://media.giphy.com/media/3o7ZeMCXAFPvusagQU/giphy.gif']")
        .click("//span[contains(text(),'Save')]")
        .pause(3000)
        .click("//div[@id='preview-icon']")

// step 6 - Play preview video

        .pause(5000)
        .frame('previewVideo', function () {
            client
                .click("//span[@id='controls-play']")
                .pause(4000)
                .click("//span[@id='controls-play']")
                .pause(4000)
        })
        .end();

  }

};
