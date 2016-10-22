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
    removeAppConfirmationOkButton: 'input[name="ok"]',
    profileLink: 'a[data-testid="blue_bar_profile_link"]',
    postTitleDiv: {
      selector: '(//div[@class="mbs _6m6 _2cnj _5s6c"]/a)[1]',
      locateStrategy: 'xpath'
    },
    postVideoDiv: {
      selector: '(//div[@class="_6l- __c_"])[1]',
      locateStrategy: 'xpath'
    }
  },
  commands: [{
    submit: function() {
      return this.click('@submitButton');
    }
  }]
};
