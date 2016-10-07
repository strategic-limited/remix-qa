var host = 'https://www.facebook.com/';
module.exports =
{

    'Remixed video can be played back': function(client)
     {
// Step 1 - open facebook and login.
      client
		  .windowMaximize()
      .url(host)
			.waitForElementPresent("body" , 3000)
			.useXpath()
      .setValue("//input[@id='email']","houdelh_panditwitz_1468246588@tfbnw.net")
      .setValue("//input[@id='pass']","Abcdefgh@123")
			.waitForElementPresent("//input[@type='submit']" , 3000)
      .click("//input[@type='submit']")
      //.waitForElementPresent("//div[@id='u_0_2']" , 6000)

// Step 2 - open video remix in new window and Login.
            .execute(function(newWindow)
			{
                window.open('https://app.videoremix.io/login', null, "height=1024,width=1524");
      }, [host])
            .window_handles(function(result)
			{
                var temp = result.value[1];
                this.switchWindow(temp);
            })
			.useCss()
      .pause(3000)
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
      .waitForElementVisible("//a[@data-section='templates']", 5000)

// Step 4 - Open remix Editor

    .url("https://app.videoremix.io/editor/27102/remix")
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


//    Step 4 - remix editor - save video
      .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
      .click("//button[contains(text(),'Save')]")
      .setValue("//input[@class='input title-input']",new Date())
      .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
      .click("//span[contains(text(),'Save')]")   //delete below one after test pasess
      .pause(2000)
      .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
      .click("//button[contains(text(),'Save')]")
      .pause(5000)
      .waitForElementVisible("//div[@id='preview-icon']", 3000)
      .click("//div[@id='preview-icon']")
      .pause(10000)

// Step 5  - Click on 'Connect with Facebook' button

.waitForElementVisible("//div[@id='previewDialogbody']", 5000)
.frame('previewVideo', function () {
    client
        .waitForElementVisible("//div/button[@id='useFbButton']", 9000)
        .click("//div/button[@id='useFbButton']")
        .pause(7000)
})

//Step 6 - facebook App Approval

    .window_handles(function(result)
    {

        var temp = result.value[2];
        this.switchWindow(temp);

    })

    .useCss()
    .waitForElementVisible('body', 3000)
    .useXpath()
    .waitForElementPresent("//button[@name='__CONFIRM__']", 5000)
    .click("//button[@name='__CONFIRM__']")
    .pause(10000)
    .window_handles(function(result)
    {
        var temp = result.value[1];
        this.switchWindow(temp);

    })

// step 7 - Play preview video

    .waitForElementVisible("//div[@id='previewDialogbody']", 5000)
    .click("//div[@id='previewDialogbody']")
    .frame('previewVideo', function () {
        client
            .waitForElementVisible("//span[contains(text(),'0:09')]", 9000)
            .click("//span[@id='controls-play']")
            .pause(4000)
            .click("//span[@id='controls-play']")
            .pause(4000)
    })

// step 8 - navigate to facebook and cancel the VR App

    .url("https://www.facebook.com/settings?tab=applications")
    .pause(10000)
    .waitForElementVisible("//div[@id='u_1_0']", 5000)
    .pause(7000)
    .click("//div[@id='u_1_0']")
    .waitForElementVisible("//a[contains(text(),'Remove App')]", 5000)
    .click("//a[contains(text(),'Remove App')]")
    .waitForElementVisible("//span[contains(text(),'Remove VidCloud.io?')]", 5000)
    .click("//input[@name='ok']")
    .pause(6000)
    .end();

    }
};
