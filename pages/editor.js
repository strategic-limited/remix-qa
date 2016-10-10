/**
 * Created by vedi on 07/10/2016.
 */
'use strict';

const config = require('../config/config');

module.exports = {
  elements: {
    welcomeStep1: {
      selector: '//strong[contains(text(),"Welcome!")]',
      locateStrategy: 'xpath'
    },
    welcomeStep2: {
      selector: '//div[contains(text(),"Step 2, Drag your media to the timeline.")]',
      locateStrategy: 'xpath'
    },
    mediaInput: 'textarea.add-media-input',
    saveButton: {
      selector: '//button[contains(text(),"Save")]',
      locateStrategy: 'xpath'
    },
    previewButton: {
      selector: '//div[@id="preview-icon"]',
      locateStrategy: 'xpath'
    },
    previewBody: {
      selector: '//div[@id="previewDialogbody"]',
      locateStrategy: 'xpath'
    },
    savePopupTitleInput: {
      selector: '//input[@class="input title-input"]',
      locateStrategy: 'xpath'
    },
    savePopupSaveButton: {
      selector: '//span[contains(text(),"Save")]',
      locateStrategy: 'xpath'
    }
  }
};
