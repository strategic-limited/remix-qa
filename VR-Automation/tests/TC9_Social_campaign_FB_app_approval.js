var host = 'https://www.facebook.com/';
module.exports =
{

    'Social campaign FB app approval': function(client)
     {

// Step 1 - open facebook and login.

        client
		    .windowMaximize()
        .url(host)
			  .waitForElementPresent("body" , 3000)
			  .useXpath()
        .setValue("//input[@id='email']","hubjbxj_valtchanovescu_1468245451@tfbnw.net")
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
      		.waitForElementVisible('body', 5000)
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
          .waitForElementPresent("//h2" , 5000)
          .click("//button[@title='Close']")
          .useCss()
          .waitForElementVisible('body', 2000)

// Step 4 - Open remix Editor

          .url("https://app.videoremix.io/editor/28202/remix")
          .useXpath()
          .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 20000)
          .waitForElementVisible("//button[@type='button']", 5000)
          .click("//button[@type='button']")
          .refresh()
          .waitForElementVisible("//span[@id='identity']", 20000)


// Step 5 - remix editor - save video

          .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
          .click("//button[contains(text(),'Save')]")
          .setValue("//input[@class='input title-input']",new Date())
          .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
          .click("//span[contains(text(),'Save')]")

// Step 6 - Go to Social Campaign

          .pause(4000)
          .waitForElementVisible("//a[@id='embedSocialBtn']", 2000)
          .click("//a[@id='embedSocialBtn']")
          .pause(10000)

// Step 7 - verify Social campaign and move to FB app approval step

          .window_handles(function(result)
          {
                  var temp = result.value[2];
                  this.switchWindow(temp);
          })

          .waitForElementVisible("//div[@id='personalization-modal']", 10000)
          .click("//div[@id='personalization-modal']")
        //.waitForElementVisible("//a[@id='start']",10000)
          .waitForElementVisible("//a[@id='hideform1']",10000)
          .click("//a[@id='hideform1']")
          .pause(4000)
          .waitForElementVisible("//a[@id='connectWithFbButton']", 6000)
          .click("//a[@id='connectWithFbButton']")
          .pause(4000)

//Step 8 - facebook App Approval

          .window_handles(function(result)
                    {
                              var temp = result.value[2];
                              this.switchWindow(temp);
                    })

          .useCss()
          .waitForElementVisible('body', 3000)
          .useXpath()
          .pause(5000)
          .waitForElementPresent("//button[@name='__CONFIRM__']", 5000)
          .click("//button[@name='__CONFIRM__']")
          .pause(10000)
          .click("//button[@name='__CONFIRM__']")
          .pause(10000)
        //  .waitForElementVisible("//select[@id='fbTabs']", 4000)


// Step 9 - Verify app approval on Facebook

          .execute(function(newWindow)
          {
              window.open("https://www.facebook.com/settings?tab=applications", null, "height=1024,width=1524")
          }, [host])

          .window_handles(function(result)
        			{
                        var temp = result.value[1];
                        this.switchWindow(temp);
              })

          .useCss()
          .waitForElementVisible('body', 5000)
          .useXpath()
          .pause(5000)
          .waitForElementVisible("//div[contains(text(),'videoremix publisher')]", 5000)

// Step 10 - Cancel app approval

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
