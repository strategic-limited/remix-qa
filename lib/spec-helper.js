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

  loginToFb(client, account, cancelApps) {
    if (account === true || account === false) {
      cancelApps = account;
      account = undefined;
    }
    account = account || config.facebookAccounts.viewer;
    const facebookPage = client.page.facebook();
    facebookPage
      .navigate()
      .setValue('@emailField', account.login)
      .setValue('@passwordField', account.password)
      .submit();

    if (cancelApps) {
      this.cancelAppInFb(client, config.facebookApps.publisher);
      this.cancelAppInFb(client, config.facebookApps.viewer);
    }

    return client;
  },

  cancelAppInFb(client, app) {
    app = app || config.facebookApps.viewer;
    const facebookPage = client.page.facebook();
    const appDivSelector = `div#app-id-${app.id}`;
    facebookPage.navigate('https://www.facebook.com/settings?tab=applications');
    facebookPage.waitForElementVisible(appDivSelector, 3000, false, (result) => {
      if (result.value) {
        facebookPage
          .click(appDivSelector)
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

    const projectsPage = client.page.projects();
    projectsPage.expect.element('@templatesSection').to.be.visible.before(5000);

    return client;
  },

  openPlaybackPage(client, url) {
    const playbackPage = client.page.playback();
    return playbackPage.navigate(url);
  },

  openEditorPage(client, url) {
    const editorPage = client.page.editor();
    editorPage.navigate(url);
    editorPage.expect.element('@welcomeStep1').to.be.visible.before(30000);
    editorPage.expect.element('@mediaInput').to.be.visible.before(100);
    editorPage.setValue('@mediaInput', 'youtube');
    editorPage.clearValue('@mediaInput');
    editorPage.expect.element('@welcomeStep2').to.be.visible.before(5000);
    editorPage.click('@welcomeStep2');

    return editorPage;
  },

  pressEnter(client) {
    client.keys(['\uE006']);
  },

  pressTab(client) {
    client.keys(['\uE004']);
  }
};

module.exports = specHelper;