/**
 * Created by Eugene Butusov on 20/02/2017.
 */
'use strict';

const embedUrl = 'https://strategiclimited.leadpages.co/test01/';
const assert = require('assert');

module.exports =
  {
    'Embed video shouldn\'t change frame during the loading': (client) => {
      // Load leadpages landing to check video
      let initialFrameHeight;
      client
        .windowMaximize()
        .url(embedUrl)
        .useCss()
        .waitForElementVisible('body', 3000)
        .useXpath()
        .waitForElementPresent("//iframe[@id='vr']" , 2000)
        .getElementSize('//iframe[@id=\'vr\']', function (result) {
          initialFrameHeight = result.value.height;
        })
        .pause(1000)
        .getElementSize('//iframe[@id=\'vr\']', function (result) {
          assert(result.value.height === initialFrameHeight);
        })
        .end();
    }
  };
