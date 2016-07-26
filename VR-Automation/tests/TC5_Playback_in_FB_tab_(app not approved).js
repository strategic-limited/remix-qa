var host = 'https://www.facebook.com/videoremixio/app/1728968890675795/';
module.exports =
{

    'Playback in FB tab (app not approved)': function(client)
     {
// Step 1 - Go to FB post and click Enter without facebook

       client
		  .windowMaximize()
      .url(host)
			.waitForElementPresent("body" , 6000)
			.useXpath()
      .execute('scrollTo(0,1300)')
      .waitForElementVisible("//a[@id='u_0_9']", 3000)
      .click("//a[@id='u_0_9']")
      .pause(5000)




      .frame('1', function ()
      {
        client
      //  .waitForElementVisible("//button[@id='withoutFbButton']", 5000)
        //.click("(//div[@id='pagelet_app_runner'])[2]")
        .click("((//div[@class='connect-fb-btn-container'])/button)[2]")
        //.pause(5000)
        //.click("//button[@id='withoutFbButton']")
        //.click("//button[contains(text(),'Enter without Facebook')]")
        .pause(5000)
      })




      .waitForElementVisible("//div[@id='controls-big-play-button']", 6000)
      .click("//div[@id='controls-big-play-button']")

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
