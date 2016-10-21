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
    imageInMyMedia: '[data-popcorn-plugin-type=image]',
    saveButton: {
      selector: '//button[contains(text(),"Save")]',
      locateStrategy: 'xpath'
    },

    elementsTab: 'a.butter-editor-header-popcorn',
    produceTab: 'a.butter-editor-header-share',

    lowerThirdsElement: {
      selector: '//span[contains(text(),"Lower Thirds & Combo Elements")]',
      locateStrategy: 'xpath'
    },
    lowerThirdsModalTitle: 'h3.combined-modal-title',

    socialCampaignButton: '#embedSocialBtn',

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
    getMediaButton: '#get-media-btn',
    savePopupSaveButton: {
      selector: '//span[contains(text(),"Save")]',
      locateStrategy: 'xpath'
    },

    personalizationModal: '#personalization-modal',
    personalizationModalNext1: '#hideform1',
    personalizationModalConnectWithFbButton: '#connectWithFbButton',
    personalizationModalFbTabsList: '#fbTabs'
  },

  commands: [{
    saveVideo(title) {
      title = title || new Date();

      this.expect.element('@saveButton').to.be.visible.before(2000);
      this.click('@saveButton');

      this.setValue('@savePopupTitleInput', title);
      this.click('@savePopupSaveButton');
    },

    selectThumbnailInSavePopup(dataSource) {
      const selector = `li[data-source="${dataSource}"]`;
      this.expect.element(selector).to.be.visible.before(2000);
      return this.click(selector);
    }
  }]
};
