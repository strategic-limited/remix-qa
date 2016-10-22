'use strict';

const specHelper = require('../lib/spec-helper');
const config = require('../config/config');

module.exports = {
  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.facebookAccounts.publisher, true);
    // Step 2 - open video remix in new window and Login.
    specHelper.loginToVr(client);
  },

  'Social campaign FB app approval'(client) {

    // Step 4 - Open remix Editor
    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28202/remix');

    // Step 5 - remix editor - save video
    editorPage.saveVideo();

    // Step 6 - Go to Social Campaign
    editorPage.expect.element('@produceTab').to.be.visible.before(3000);
    editorPage.click('@produceTab');

    editorPage.expect.element('@socialCampaignButton').to.be.visible.before(5000);
    editorPage.click('@socialCampaignButton');

    editorPage.expect.section('@personalizationModal').to.be.visible.before(10000);

    var personalizationModalSection = editorPage.section.personalizationModal;

    personalizationModalSection.expect.element('@next1').to.be.visible.before(100);
    personalizationModalSection.click('@next1');

    personalizationModalSection.expect.element('@connectWithFbButton').to.be.visible.before(6000);
    personalizationModalSection.click('@connectWithFbButton');

    //Step 8 - facebook App Approval
    specHelper.switchToLastWindow(client);

    const facebookPopupPage = client.page.facebookPopup();
    facebookPopupPage.expect.element('@confirmButton').to.be.visible.before(5000);
    facebookPopupPage.click('@confirmButton');
    client.pause(3000);
    facebookPopupPage.click('@confirmButton');

    specHelper.switchWindowByIdx(client, 0);

    personalizationModalSection.expect.element('@fbTabsList').to.be.visible.before(8000);

  },

  after(client) {
    specHelper.cancelAppInFb(client);
    client.end();
  }

};
