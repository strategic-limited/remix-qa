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
      .setValue("//input[@id='email']","fbiravo_seligsteinescu_1468245839@tfbnw.net")
      .setValue("//input[@id='pass']","Abcdefgh@123")
			.waitForElementPresent("//input[@type='submit']" , 3000)
      .click("//input[@type='submit']")
      .waitForElementPresent("//div[@id='u_0_2']" , 4000)

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
			.waitForElementVisible('body', 3000)
			.useXpath()
      .waitForElementPresent("//input[@name='uid']" , 2000)
      .setValue("//input[@name='uid']","test03@gmail.com")
      .setValue("(//input[@name='password'])[1]","Abcdefgh@123")
			.click("(//button[@ng-click='user.password && submitPassword()'])[2]")
      .pause(3000)

// Step 3 -  after remix login closing pop up.
      .useCss()
      .waitForElementVisible('body', 3000)
      .useXpath()
      .waitForElementPresent("//h2" , 3000)
      .click("//button[@title='Close']")
      .useCss()
      .waitForElementVisible('body', 2000)

// Step 4 - Open remix Editor

    .url("https://app.videoremix.io/editor/27102/remix")
    .useXpath()
    .pause(3000)
    .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 20000)
    .waitForElementVisible("//button[@type='button']", 2000)
    .click("//button[@type='button']")
    .refresh()
    .pause(3000)
    .waitForElementVisible("//span[@id='identity']", 10000)


// Step 4 - remix editor - save video
    .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
    .click("//button[contains(text(),'Save')]")
    .setValue("//input[@class='input title-input']",new Date())
    .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
    .click("//span[contains(text(),'Save')]")
    .pause(3000)
    .waitForElementVisible("//div[@id='preview-icon']", 3000)
    .click("//div[@id='preview-icon']")
    .pause(10000)

// Step 5  - Click on 'Connect with Facebook' button

    .waitForElementVisible("//div[@id='previewDialogbody']", 10000)
    .click("//div[@id='previewDialogbody']")
    .click("//div/button[@id='useFbButton']")
    .pause(7000)


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

    .execute(function(newWindow)
    {
        window.open("https://www.facebook.com/settings?tab=applications", null, "height=1024,width=1524")
    }, [host])

    .useCss()
    .waitForElementVisible('body', 3000)
    .useXpath()
    .waitForElementVisible("//div[contains(text(),'videoremix.io')]", 5000)
    .click("//div[@class='clearfix _3fig']")
    .waitForElementVisible("//a[contains(text(),'Remove App')]", 5000)
    .click("//a[contains(text(),'Remove App')]")
    .waitForElementVisible("//span[contains(text(),'Remove videoremix.io?')]", 5000)
    .click("//input[@name='ok']")
    .waitForElementNotVisible("//div[contains(text(),'videoremix.io')]")
    .pause(6000)
    .end();

    }
};
