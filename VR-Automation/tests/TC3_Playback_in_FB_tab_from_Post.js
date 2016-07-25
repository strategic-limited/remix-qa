var host = 'https://www.facebook.com/';
module.exports =
{

    'Playback in FB tab from Post': function(client)
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

//Step 2 - Go to facebook post page

        .execute(function(newWindow)
  {
            window.open('https://www.facebook.com/videoremixio/posts/1719151158354824', null, "height=1024,width=1524");
  }, [host])
        .window_handles(function(result)
  {
            var temp = result.value[1];
            this.switchWindow(temp);
        })

        .useXpath()
        .pause(10000)
        .waitForElementVisible("//button[@id='useFbButton']", 6000)
        .click("//button[@id='useFbButton']")
        .waitForElementVisible("//button[@name='__CONFIRM__']", 6000)
        .click("//button[@name='__CONFIRM__']")
        .waitForElementVisible("//div[@id='controls-big-play-button']", 6000)
        .click("//div[@id='controls-big-play-button']")

        //screenshot
        .end();
      }
  };
