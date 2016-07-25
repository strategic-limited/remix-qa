var host = 'https://www.facebook.com/';
module.exports =
{
    'Playback direct (app approved)': function(client) {
        client
		    .windowMaximize()
            .url(host)
			.waitForElementPresent("body" , 3000)
			.useXpath()
            .setValue("//input[@id='email']","yvglrcw_wongwitz_1468002772@tfbnw.net")
            .setValue("//input[@id='pass']","JPsRq5vMuzn")
			.waitForElementPresent("//input[@type='submit']" , 3000)
      .click("//input[@type='submit']")
      .waitForElementPresent("//div[@id='u_0_2']" , 4000)
            .execute(function(newWindow)
			{
                window.open('https://cdn.videoremix.io/282/vr/kwu', null, "height=1024,width=768");
            }, [host])
            .window_handles(function(result)
			{
                var temp = result.value[1];
                this.switchWindow(temp);
            })
			.useCss()
			.waitForElementVisible('body', 3000)
			.useXpath()
      .waitForElementPresent("//div[@id='controls-big-play-button']" , 5000)
			.click("//div[@id='controls-big-play-button']")
      .pause(3000)
      .end();
    }
};
