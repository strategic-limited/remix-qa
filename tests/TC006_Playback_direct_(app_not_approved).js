var host = 'https://www.facebook.com/';
module.exports =
{

    'Playback direct (app not approved)': function(client)
     {
// Step 1 - open facebook and login.

        client
		    .windowMaximize()
        .url(host)
			  .waitForElementPresent("body" , 3000)
			  .useXpath()
        .setValue("//input[@id='email']","labczzw_warmanwitz_1468246590@tfbnw.net")
        .setValue("//input[@id='pass']","Abcdefgh@123")
        .waitForElementPresent("//input[@type='submit']" , 3000)
        .click("//input[@type='submit']")
      //  .waitForElementPresent("//div[@id='u_0_2']" , 4000)


// Step 2 - Open playback link https://cdn.videoremix.io/282/vr/kwu

        .execute(function(newWindow)
        {
          window.open("https://cdn.videoremix.io/282/vr/kwu", null, "height=1024,width=1524")
        }, [host])
        .pause(5000)
        .window_handles(function(result)
        {
            var temp = result.value[1];
            this.switchWindow(temp);
        })
        .pause(5000)

// Step 3 - Click on 'Connect with Facebook'

        .useCss()
        .waitForElementVisible('body', 5000)
        .useXpath()
        .waitForElementPresent("//button[@id='useFbButton']", 5000)
        .click("//button[@id='useFbButton']")
        .pause(3000)

//Step 4 - cancel the app approval

        .window_handles(function(result)
        {
            var temp = result.value[2];
            this.switchWindow(temp);
        })
        .useCss()
        .waitForElementVisible('body', 3000)
        .useXpath()
        .waitForElementPresent("//button[@name='__CANCEL__']", 8000)
        .click("//button[@name='__CANCEL__']")
        .pause(10000)

//Step 5 - Play the video

        .window_handles(function(result)
        {
              var temp = result.value[1];
              this.switchWindow(temp);
        })
        .waitForElementVisible("//span[@id='controls-play']", 9000)
        .click("//span[@id='controls-play']")

        .frame('previewVideo', function () {
         client
        .waitForElementVisible("//span[contains(text(),'0:09')]", 9000)
        .click("//span[@id='controls-play']")
        .pause(4000)
        .click("//span[@id='controls-play']")
        .pause(4000)
        })

        .end();
  }
};
