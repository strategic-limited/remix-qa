/**
 * Created by vedi on 07/10/2016.
 */
'use strict';

const config = require('../config/config');

module.exports = {
  url: config.LOGIN_URL,
  elements: {
    usernameInput: 'input[name="uid"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button.submit-password'
  },
  commands: [{
    submit: function() {
      return this.click('@submitButton');
    }
  }]
};
