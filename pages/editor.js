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
    advancedTab: 'a.advanced-tab',

    propertyXButton: 'span.icon.icon-only.icon-x',

    startInput: 'input[data-manifest-key="start"]',
    endInput: 'input[data-manifest-key="end"]',

    adobeEditorButton: {
      selector: '//button[contains(text(),"Adobe Editor")]',
      locateStrategy: 'xpath'
    },

    lowerThirdsElement: {
      selector: '//span[contains(text(),"Lower Thirds & Combo Elements")]',
      locateStrategy: 'xpath'
    },
    lowerThirdsModalTitle: 'h3.combined-modal-title',

    socialElement: {
      selector: '//span[contains(text(),"social")]',
      locateStrategy: 'xpath'
    },
    socialLikeDiv: {
      selector: '//div[contains(text(),"Like")]',
      locateStrategy: 'xpath'
    },
    socialCommentsDiv: {
      selector: '//div[contains(text(),"Comments")]',
      locateStrategy: 'xpath'
    },
    socialPageDiv: {
      selector: '//div[contains(text(),"Page")]',
      locateStrategy: 'xpath'
    },
    socialEmbeddedCommentsDiv: {
      selector: '//div[contains(text(),"Embedded Comments")]',
      locateStrategy: 'xpath'
    },
    socialPostDiv: {
      selector: '//div[contains(text(),"Post")]',
      locateStrategy: 'xpath'
    },
    socialPluginTypeSelect: {
      selector: '//fieldset/select',
      locateStrategy: 'xpath'
    },
    socialPluginTypeCommentsOption: {
      selector: '//option[@value="fb-comments"]',
      locateStrategy: 'xpath'
    },
    socialPluginTypePageOption: {
      selector: '//option[@value="fb-page"]',
      locateStrategy: 'xpath'
    },
    socialPluginTypeEmbeddedCommentsOption: {
      selector: '//option[@value="fb-comment-embed"]',
      locateStrategy: 'xpath'
    },
    socialPluginTypePostOption: {
      selector: '//option[@value="fb-post"]',
      locateStrategy: 'xpath'
    },


    imageElement: {
      selector: '//span[contains(text(),"image")]',
      locateStrategy: 'xpath'
    },
    imageUrlInput: 'input#image-url-input',

    youzignElement: {
      selector: '//button[contains(text(),"Youzign")]',
      locateStrategy: 'xpath'
    },

    dropMockElement: {
      selector: '//button[contains(text(),"DropMock")]',
      locateStrategy: 'xpath'
    },

    personalizedTextElement: {
      selector: '//span[contains(text(),"Personalized Text")]',
      locateStrategy: 'xpath'
    },
    personalizedTextTextArea: 'textarea[data-manifest-key="text"]',
    personalizeButton: {
      selector: '//button[contains(text(),"Personalize!")]',
      locateStrategy: 'xpath'
    },

    advancedFontSizeInput: 'input[data-manifest-key="fontSize"]',

    emailCampaignButton: '#embedBtn',
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
    savePopupAllowFacebookCheckBox: {
      selector: '//input[@id="allow-fb"]',
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
        fbPostTitle: 'input#fbPostTitle',
        customEmailProvider: 'label[title="Custom / All Other Email Providers"]',
        resultUrlInput: 'input#resultUrl'
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
    },
    personalizerModal: {
      selector: 'div#personalizer-modal',
      elements: {
        firstNameItem: {
          selector: '//span[@class="token-name" and contains(text(),"FIRSTNAME")]',
          locateStrategy: 'xpath'
        },
        lastNameItem: {
          selector: '//span[@class="token-name" and contains(text(),"LASTNAME")]',
          locateStrategy: 'xpath'
        },
        emailItem: {
          selector: '//span[@class="token-name" and contains(text(),"EMAIL")]',
          locateStrategy: 'xpath'
        },
        geoCountryItem: {
          selector: '//span[@class="token-name" and contains(text(),"GEOCOUNTRY")]',
          locateStrategy: 'xpath'
        },
        geoCityItem: {
          selector: '//span[@class="token-name" and contains(text(),"GEOCITY")]',
          locateStrategy: 'xpath'
        },
        geoStateItem: {
          selector: '//span[@class="token-name" and contains(text(),"GEOSTATE")]',
          locateStrategy: 'xpath'
        },
        nameItem: {
          selector: '//span[@class="token-name" and contains(text(),"NAME")]',
          locateStrategy: 'xpath'
        },
        genderItem: {
          selector: '//span[@class="token-name" and contains(text(),"GENDER")]',
          locateStrategy: 'xpath'
        },
        customItem: {
          selector: '//span[@class="token-name" and contains(text(),"CUSTOM")]',
          locateStrategy: 'xpath'
        },
        customInput: 'input#custom-textbox',
        addVariableButton: '#add-variable-button'
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
