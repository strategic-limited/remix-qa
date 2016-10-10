/**
 * Created by vedi on 07/10/2016.
 */
'use strict';

const config = require('../config/config');

module.exports = {
  elements: {
    useFbButton: {
      selector: '//div/button[@id="useFbButton"]',
      locateStrategy: 'xpath'
    },
    playButton: {
      selector: '//span[@id="controls-play"]',
      locateStrategy: 'xpath'
    },
    bigPlayButton: 'div#controls-big-play-button'
  },
  commands: [{
    play: function() {
      return this.click('@bigPlayButton');
    }
  }]
};
