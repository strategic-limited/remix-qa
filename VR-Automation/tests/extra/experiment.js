var host = 'https://www.facebook.com/';
module.exports = {
    'Playback a magazine video directly': function(client) {
        client
		    .windowMaximize()
            .url(host)
			.pause(5000)
			.useXpath()
            .setValue("//input[@id='email']","yvglrcw_wongwitz_1468002772@tfbnw.net")
            .setValue("//input[@id='pass']","JPsRq5vMuzn")
			.pause(5000)
            .click("//input[@type='submit']")
			.pause(6000)
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
			.waitForElementVisible('body', 1000)
			.useXpath()
			.pause(10000)
			.click("//div[@id='controls-big-play-button']")
      .pause(3000)
      .end();
    }
};
