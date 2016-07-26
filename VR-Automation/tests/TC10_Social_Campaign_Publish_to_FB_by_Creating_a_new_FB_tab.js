var host = 'https://www.facebook.com/';
module.exports =
{

    'Social Campaign Publish to FB by Creating a new FB tab': function(client)
     {

// Step 1 - open facebook and login.

        client
		    .windowMaximize()
        .url(host)
			  .waitForElementPresent("body" , 3000)
			  .useXpath()
        .setValue("//input[@id='email']","nfhuful_valtchanovwitz_1468245450@tfbnw.net")
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



// Step 7 - verify Social campaign and move to next step

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
                          .click("//a[@id='done4']")
                          .pause(30000)
                          .waitForElementVisible("(//iframe)[8]", 6000)
                          .click("(//iframe)[8]")
                          for(var i=0; i <= 7; i++)
                          {
                            .keys(['\uE006']);
                          }




                      //    .click("//iframe[@id='f25697629180c3']")
                  //       .waitForElementVisible("//button[@name='__CONFIRM__']", 10000)
                    //     .click("//button[@name='__CONFIRM__']")



                                /*    .window_handles(function(result)
                                      {

                                                var temp = result.value[2];
                                                this.switchWindow(temp);

                                      })

                                    .click("//span[@id='u_0_1i']")
                                    //.waitForElementVisible("//span[contains(text(),'Share on Facebook')]",4000)
                                    .pause(3000)
                                    //.frame('#f7f5dda1ea61.FB_UI_Dialog')
                                    //.click("//form[@id='platformDialogForm']")
                                    //.waitForElementVisible("//div[@id='fb-root']",4000)
                                    //.click("//div[@id='fb-root']")

                                    //.click("//button[@name='__CONFIRM__']")
                                    //.submitForm("//form[@id='platformDialogForm']")
                                    //.waitForElementVisible("//form[@id='platformDialogForm']",4000)
                                  //.click("//form[@id='platformDialogForm']")
                                    //.waitForElementVisible("//button[@id='u_0_h']",4000)
                                  //  .click("//button[@id='u_0_h']") */

                    //Step 9 - Open facebook and verify the new tab created in step 8

      .end();

      }
  };
