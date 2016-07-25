var host = 'https://www.facebook.com/';
module.exports =
{
    'facebook_login': function(client)
    {
        client
		    .windowMaximize()
        .url(host)
        .useXpath()
        .waitForElementVisible("//input[@id='email']" , 1000)
        .setValue("//input[@id='email']","yvglrcw_wongwitz_1468002772@tfbnw.net")
        .setValue("//input[@id='pass']","JPsRq5vMuzn")
			  .waitForElementVisible("//input[@type='submit']" , 1000)
        .click("//input[@type='submit']")
			  .pause(6000)


    }

  }
