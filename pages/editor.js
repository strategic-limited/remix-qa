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
    adobeEditorButton: {
      selector: '//button[contains(text(),"Adobe Editor")]',
      locateStrategy: 'xpath'
    },

    lowerThirdsElement: {
      selector: '//span[contains(text(),"Lower Thirds & Combo Elements")]',
      locateStrategy: 'xpath'
    },
    lowerThirdsModalTitle: 'h3.combined-modal-title',
    imageElement: {
      selector: '//span[contains(text(),"image")]',
      locateStrategy: 'xpath'
    },
    imageUrlInput: 'input#image-url-input',

    youzignElement: {
      selector: '//button[contains(text(),"Youzign")]',
      locateStrategy: 'xpath'
    },

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

    playButton: 'span[class="icon icon-white icon-only icon-play"]'
  },

  sections: {
    personalizationModal: {
      selector: '#personalization-modal',
      elements: {
        next1: '#hideform1',
        connectWithFbButton: '#connectWithFbButton',
        fbTabsList: '#fbTabs',
        fbNewTabOption: 'option[value="newTab"]',
        fbExistingTabOption: {
          selector: '(//select[@id="fbTabs"]/option)[3]',
          locateStrategy: 'xpath'
        },
        fbTabName: 'input#fbTabName',
        showPostFormButton: 'a#showPostForm', // Next
        shareButton: 'a#done4', // Next
        fbPostTitle: 'input#fbPostTitle'
      }
    },
    adobeEditorModal: {
      selector: '#avpw_controls',
      elements: {
        framesButton: '[data-toolname="frames"]',
        curlsButton: '[data-framename="bohemia-curls"]',
        applyButton: 'a#avpw_apply_container',
        saveButton: 'a#avpw_save_button',
        bohemiaButton: {
          selector: '//span[contains(text(),"Bohemia")]',
          locateStrategy: 'xpath'
        }
      }
    }
  },

  commands: [{
    checkTimelineItems(idx) {
      const selector = `(//div[@class='title'])[${idx}]`;
      this.api.useXpath().waitForElementVisible(selector, 2000);
    },

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
