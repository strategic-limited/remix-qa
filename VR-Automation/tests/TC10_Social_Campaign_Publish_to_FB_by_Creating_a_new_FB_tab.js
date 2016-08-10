var host = 'https://www.facebook.com/';
module.exports =
{

    'Social Campaign Publish to existing FB tab': function(client)
     {

// Step 1 - open facebook and login.

        client
		    .windowMaximize()
        .url(host)
			  .waitForElementPresent("body" , 3000)
			  .useXpath()
        .setValue("//input[@id='email']","test15july.1@gmail.com")
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

          .url("https://app.videoremix.io/editor/28202/remix")
          .useXpath()
          .pause(10000)
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


// Step 5 - remix editor - save video

          .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
          .click("//button[contains(text(),'Save')]")
          .setValue("//input[@class='input title-input']",new Date())
          .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
          .click("//span[contains(text(),'Save')]")   //delete below one after test pasess
          .pause(2000)
          .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
          .click("//button[contains(text(),'Save')]")
          .pause(2000)
          .waitForElementVisible("//a[contains(text(),'Produce & Share')]", 4000)
          .click("//a[contains(text(),'Produce & Share')]")


// Step 6 - Go to Social Campaign

          .pause(10000)
          .waitForElementVisible("//a[@id='embedSocialBtn']", 3000)
          .click("//a[@id='embedSocialBtn']")
          .pause(10000)


// Step 7 - verify Social campaign and move to next step
          .window_handles(function(result)
              {
                        var temp = result.value[2];
                        this.switchWindow(temp);
              })

            .waitForElementVisible("//div[@id='personalization-modal']", 20000)
            .click("//div[@id='personalization-modal']")
            .waitForElementVisible("//a[@id='hideform1']",10000)
            .click("//a[@id='hideform1']")

// Step 8 - Social campaign login with facebook

            .waitForElementVisible("//a[@id='connectWithFbButton']", 5000)
            .click("//a[@id='connectWithFbButton']")
            .pause(4000)


//Step 9 - facebook App Approval

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
              .click("//button[@name='__CONFIRM__']")
              .window_handles(function(result)
              {

                            var temp = result.value[1];
                            this.switchWindow(temp);

              })

// Step 8 - Social campaign facebook pages - make a selection

              .waitForElementVisible("//select[@id='fbTabs']", 4000)
              .click("//select[@id='fbTabs']")
              .pause(2000)
              .click("//option[@value='newTab']")
              .keys(['\uE006'])
              .clearValue("//input[@id='fbTabName']")
              .setValue("//input[@id='fbTabName']" , "Test video")
              .pause(4000)
              .click("//a[@id='showPostForm']")
              .pause(4000)

              .getValue("//input[@id='fbPostTitle']", function(result1)
                {
                  fieldValue1 = result1.value;
                  console.log(fieldValue1);
                })

              .click("//a[@id='done4']")
              .pause(15000)
              .keys(['\uE006'])
              .keys(['\uE004'])
              .keys(['\uE004'])
              .keys(['\uE004'])
              .keys(['\uE004'])
              .keys(['\uE004'])
              .keys(['\uE004'])
              .keys(['\uE004'])
              .keys(['\uE006'])
              .pause(5000)

// Step 9  - open facebook and go to timeline

              .url("https://www.facebook.com/")
              .waitForElementVisible("//a[@data-testid='blue_bar_profile_link']", 5000)
              .click("//a[@data-testid='blue_bar_profile_link']")
              .pause(5000)

              .waitForElementVisible("(//div[@class='mbs _6m6 _2cnj _5s6c']/a)[1]", 8000)

              .getText("(//div[@class='mbs _6m6 _2cnj _5s6c']/a)[1]", function(result2)
                {
                  fieldValue2 = result2.value;
                  console.log(fieldValue2);
                  client.assert.equal(fieldValue1, fieldValue2)
                })


// Step - Click on the Post and user get redirect to FB tab

              .click("(//div[@class='_6l- __c_'])[1]")
              .pause(8000)

              .window_handles(function(result)
              {
                  var temp = result.value[2];
                  this.switchWindow(temp);
              })

              .useCss()
              .waitForElementVisible('body', 3000)
              .useXpath()
              .waitForElementVisible("//button[@name='__CONFIRM__']", 8000)
              .click("//button[@name='__CONFIRM__']")
              .pause(20000)
              .execute('scrollTo(0,3000)')

              .frame('widget2', function() {
               client
              .click("//span[@id='controls-play']")
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
              .pause(3000)
              .waitForElementVisible("//a[contains(text(),'Remove App')]", 5000)
              .click("//a[contains(text(),'Remove App')]")
              .pause(3000)
              .waitForElementVisible("//span[contains(text(),'Remove videoremix publisher?')]", 5000)
              .click("//input[@name='ok']")
              .pause(5000)

              .waitForElementVisible("//div[@id='u_1_2']", 5000)
              .pause(7000)
              .click("//div[@id='u_1_2']")
              .pause(3000)
              .waitForElementVisible("//a[contains(text(),'Remove App')]", 5000)
              .click("//a[contains(text(),'Remove App')]")
              .waitForElementVisible("//span[contains(text(),'Remove videoremix.io?')]", 5000)
              .click("//input[@name='ok']")
              .waitForElementNotVisible("//div[contains(text(),'videoremix.io')]", 3000)
              .pause(6000)

              .end();

          }
  };
