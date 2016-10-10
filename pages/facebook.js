/**
 * Created by vedi on 07/10/2016.
 */
'use strict';

const config = require('../config/config');

module.exports = {
  url: config.FACEBOOK_URL,
  elements: {
    emailField: 'input#email',
    passwordField: 'input#pass',
    submitButton: 'input[type="submit"]',
    removeAppDiv: {
      selector: '//div[@id="u_1_0"]',
      locateStrategy: 'xpath'
    },
    removeAppLink: {
      selector: '//a[contains(text(),"Remove App")]',
      locateStrategy: 'xpath'
    },
    removeAppConfirmationTitle: {
      selector: `//span[contains(text(),"Remove ${config.facebookAppName}?")]`,
      locateStrategy: 'xpath'
    },
    removeAppConfirmationOkButton: {
      selector: '//input[@name="ok"]',
      locateStrategy: 'xpath'
    }
  },
  commands: [{
    submit: function() {
      return this.click('@submitButton');
    }
  }]
};
