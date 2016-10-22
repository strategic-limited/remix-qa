/**
 * Created by vedi on 07/10/2016.
 */
'use strict';

module.exports = {
  elements: {
    postTitleDiv: {
      selector: '(//div[@class="mbs _6m6 _2cnj _5s6c"]/a)[1]',
      locateStrategy: 'xpath'
    },
    postLink: {
      selector: '(//div[@class="_6l- __c_"])',
      locateStrategy: 'xpath'
    },
    confirmButton: {
      selector: '//button[@name="__CONFIRM__"]',
      locateStrategy: 'xpath'
    },
    videoFrame: 'div#pagelet_app_runner iframe'
  },
  commands: [{
    openPost: function() {
      return this.click('@postLink');
    },
    confirm: function() {
      return this.click('@confirmButton');
    },
  }]
};
