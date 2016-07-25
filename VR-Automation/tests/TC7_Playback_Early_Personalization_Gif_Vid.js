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


//Step 5 - Add media in the textbox

        .setValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", "https://media.giphy.com/media/3o7ZeMCXAFPvusagQU/giphy.gif")
        .waitForElementVisible("//a[@id='get-media-btn']", 3000)
        .click("//a[@id='get-media-btn']")
        .waitForElementPresent("//div[@data-popcorn-plugin-type='image']", 3000)
        .click("//div[@data-popcorn-plugin-type='image']")
        .waitForElementVisible("(//div[@class='title'])[1]", 3000)

//Step 5 - Save the video

        .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
        .click("//button[contains(text(),'Save')]")
        .setValue("//input[@class='input title-input']",new Date())
        .click("//span[contains(text(),'Save')]")
        .pause(3000)
        .click("//div[@id='preview-icon']")


// step 8 - Play preview video

    .waitForElementVisible("//div[@id='previewDialogbody']", 5000)
    .click("//div[@id='previewDialogbody']")
    .pause(25000)
    .end();

  }

};
