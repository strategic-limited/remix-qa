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
        .setValue("//input[@id='email']","test15july@gmail.com")
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
        .pause(3000)
        .waitForElementVisible("//div[@id='js_n']", 5000)
        .click("(//div[@class='_6l- __c_'])[1]")
        .pause(5000)
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

        .frame(0, function() {
         client
        .click("//span[@id='controls-play']")
        .waitForElementVisible("//span[contains(text(),'0:09')]", 9000)
        .click("//span[@id='controls-play']")
        .pause(4000)
        .click("//span[@id='controls-play']")
        .pause(4000)
        })

        .end();
      }
  };
