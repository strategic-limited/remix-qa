/**
 * Created by Nazar Rudenko 21.02.17.
 */

'use strict';

const embedUrl = 'https://cdn.videoremix.io/282/vr/ayi?button_submit=Submit&firstname=Gabriel+Garcia&keyword=buy+organic+coffee+beans+united+states&pass_data=get&email=ovalab%40mail.ru&name=Friend&custom_http_referer=https%3A%2F%2Fapp.getresponse.com%2Fadd_subscriber.html&site=submit&ip=5.138.56.41';
const assert = require('assert');

module.exports =
  {
    'Embed video should run synchronously after pausing/playing via frame': (client) => {
      // Load leadpages landing to check video

      let initialProgressBar;
      client
        .windowMaximize()
        .url(embedUrl)
        .useCss()
        .waitForElementVisible('body', 3000)
        .useXpath()
        .waitForElementPresent("//div[@class='popcorn-sequencer']", 3000)
        .getElementSize("//div[@class='popcorn-sequencer']", (result) => {
          let frameSize = result.value;
          client
            .pause(2000)
            .click("//span[@id='controls-play']")
            .moveTo(frameSize.width / 2, frameSize.height / 2)
            .pause(500)
            .mouseButtonClick(0)
            .getElementSize('//div[@id=\'controls-progressbar\']', (result) => initialProgressBar = result.value.width)
            .pause(2000)
            .getElementSize('//div[@id=\'controls-progressbar\']', (result) => assert(result.value.width === initialProgressBar))
            .end();
        })

    }
  };
