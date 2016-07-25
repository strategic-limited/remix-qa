var host = 'https://www.facebook.com/videoremixio/app/1728968890675795/ ';
module.exports =
{

    'Playback in FB tab (app not approved)': function(client)
     {

       client
      .windowMaximize()
      .url(host)
      .useCss()
      .waitForElementVisible('body', 3000)
      .useXpath()

      // select iframe
  //    .getLocationView("//span[contains(text(),'Videos')]", 200, 200)
//      .execute('scrollTo(0,3000)');
      .waitForElementVisible("//button[@id='withoutFbButton']", 5000)
      .click("//button[@id='withoutFbButton']")
      .waitForElementVisible("//div[@id='controls-big-play-button']", 6000)
      .click("//div[@id='controls-big-play-button']")

      //screenshot
      end();
    }
};
