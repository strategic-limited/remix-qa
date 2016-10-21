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
    appDiv: 'div#u_1_0',
    removeAppLink: {
      selector: '//a[contains(text(),"Remove App")]',
      locateStrategy: 'xpath'
    },
    removeAppConfirmationTitle: '#title_dialog_0',
    removeAppConfirmationOkButton: 'input[name="ok"]'
  },
  commands: [{
    submit: function() {
      return this.click('@submitButton');
    }
  }]
};
