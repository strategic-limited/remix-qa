/**
 * Created by vedi on 07/10/2016.
 */
'use strict';

module.exports = {
  elements: {
    confirmButton: {
      selector: '//button[@name="__CONFIRM__"]',
      locateStrategy: 'xpath'
    },
    cancelButton: {
      selector: '//button[@name="__CANCEL__"]',
      locateStrategy: 'xpath'
    }
  }
};
