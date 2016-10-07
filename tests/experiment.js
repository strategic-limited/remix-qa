var host = 'https://app.videoremix.io/login';
module.exports =
{

    'Playback a magazine video directly': function(client)
     {

       client
       .windowMaximize()
       .url(host)
       .waitForElementPresent("body" , 5000)
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
          .waitForElementPresent("//h2" , 2000)
          .click("//button[@title='Close']")
          .useCss()
          .waitForElementVisible('body', 2000)

// Step 4 - Open remix Editor

          .url("https://app.videoremix.io/editor/28202/remix")
          .useXpath()
          .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 20000)
          .waitForElementVisible("//button[@type='button']", 3000)
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

      //    .waitForElementVisible("//span[@class='fa fa-video-camera']", 2000)
          .pause(3000)
      //    .click("//span[@class='fa fa-video-camera']")
          .waitForElementVisible("//a[@id='embedSocialBtn']", 3000)
          .pause(3000)
          .click("//a[@id='embedSocialBtn']")
          .pause(10000)
          .waitForElementVisible("//iframe[@id='oauth2relay1198118475']", 10000)
          .pause(2000)
          .frame('oauth2relay1198118475')
          .waitForElementVisible("//select[@id='embed1']", 10000)
          .end();
//--------------------------------------------------------------

          .waitForElementVisible("//button[contains(text(),'Youzign')]", 6000)
          .click("//button[contains(text(),'Youzign')]")
          .waitForElementVisible("//h4[contains(text(),'Your Designs')]", 6000)
          .waitForElementVisible("(//div[@class='thumb-container'])[5]")
          .click("(//div[@class='thumb-container'])[5]")
          //take screenshot

        }
  };
