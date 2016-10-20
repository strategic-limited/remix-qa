/**
 * Created by vedi on 08/07/16.
 */
'use strict';

const config = require('../config/config');

const specHelper = {
  prepareClient(client) {
    return client
      .useXpath()
      .windowMaximize();
  },

  switchWindowByIdx(client, idx) {
    return client
      .windowHandles(function (result) {
        this.switchWindow(result.value[idx >= 0 ? idx : result.value.length + idx]);
      });
  },

  switchToLastWindow(client) {
    return this.switchWindowByIdx(client, -1);
  },

  loginToFb(client, account, cancelApp) {
    if (account === true || account === false) {
      cancelApp = account;
      account = undefined;
    }
    account = account || config.facebookAccount;
    const facebookPage = client.page.facebook();
    facebookPage
      .navigate()
      .setValue('@emailField', account.login)
      .setValue('@passwordField', account.password)
      .submit();

    if (cancelApp) {
      this.cancelAppInFb(client);
    }

    return client;
  },

  cancelAppInFb(client) {
    const facebookPage = client.page.facebook();
    facebookPage.navigate('https://www.facebook.com/settings?tab=applications');
    facebookPage.waitForElementVisible('@removeAppDiv', 1000, false, (result) => {
      if (result.value) {
        facebookPage
          .click('@removeAppDiv')
          .waitForElementVisible('@removeAppLink', 5000)
          .click('@removeAppLink')
          .waitForElementVisible('@removeAppConfirmationTitle', 5000)
          .click('@removeAppConfirmationOkButton');
      }
    });
  },

  loginToVr(client) {
    const loginPage = client.page.login();
    loginPage
      .navigate()
      .setValue('@usernameInput', config.vrAccount.login)
      .setValue('@passwordInput', config.vrAccount.password)
      .submit();

    return client;
  },

  openPlaybackPage(client, url) {
    const playbackPage = client.page.playback();
    return playbackPage.navigate(url);
  }
};

module.exports = specHelper;