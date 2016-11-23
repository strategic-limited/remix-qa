'use strict';

const specHelper = require('../lib/spec-helper');
const config = require('../config/config');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.facebookAccounts.real, true);
    specHelper.cancelAppInFb(client);
    // Step 2 - open video remix in new window and Login.
    specHelper.loginToVr(client);
  },

  'Social Campaign Publish to existing FB tab'(client) {

    let fieldValue1;
    let fieldValue2;

    // Step 4 - Open remix Editor
    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28202/remix');

    // Step 5 - remix editor - save video
    editorPage.saveVideo();

    // Step 6 - Go to Social Campaign
    editorPage.expect.element('@produceTab').to.be.visible.before(3000);
    editorPage.click('@produceTab');

    editorPage.expect.element('@socialCampaignButton').to.be.visible.before(5000);
    editorPage.click('@socialCampaignButton');

    // Step 7 - verify Social campaign and move to next step
    editorPage.expect.section('@personalizationModal').to.be.visible.before(10000);

    const personalizationModalSection = editorPage.section.personalizationModal;

    personalizationModalSection.expect.element('@next1').to.be.visible.before(100);
    personalizationModalSection.click('@next1');

    // Step 8 - Social campaign login with facebook
    personalizationModalSection.expect.element('@connectWithFbButton').to.be.visible.before(6000);
    personalizationModalSection.click('@connectWithFbButton');

    //Step 9 - facebook App Approval
    specHelper.switchToLastWindow(client);

    const facebookPopupPage = client.page.facebookPopup();
    facebookPopupPage.expect.element('@confirmButton').to.be.visible.before(5000);
    facebookPopupPage.click('@confirmButton');
    client.pause(3000);
    facebookPopupPage.click('@confirmButton');

    specHelper.switchWindowByIdx(client, 0);

    personalizationModalSection.expect.element('@fbTabsList').to.be.visible.before(8000);
    personalizationModalSection.click('@fbTabsList');

    // Step 8 - Social campaign facebook pages - make a selection
    personalizationModalSection.click('@fbNewTabOption');
    specHelper.pressEnter(client);

    personalizationModalSection.clearValue('@fbTabName');
    personalizationModalSection.setValue('@fbTabName', 'Test video');

    personalizationModalSection.expect.element('@showPostFormButton').to.be.visible.before(3000);
    personalizationModalSection.click('@showPostFormButton');
    personalizationModalSection.expect.element('@fbPostTitle').to.be.visible.before(3000);
    personalizationModalSection.getValue('@fbPostTitle', function(result) {
      fieldValue1 = result.value;
      console.log(fieldValue1);
    });

    personalizationModalSection.click('@shareButton');

    client.pause(10000);
    specHelper.pressEnter(client);
    for (let i = 0; i < 7; i++) {
      specHelper.pressTab(client);
    }
    specHelper.pressEnter(client);
    client.pause(5000);

    // Step 9  - open facebook and go to timeline
    const facebookPage = client.page.facebook();
    facebookPage.navigate();

    facebookPage.expect.element('@profileLink').to.be.visible.before(5000);
    facebookPage.click('@profileLink');

    const facebookPostPage = client.page.facebookPost();
    facebookPostPage.expect.element('@postTitleDiv').to.be.visible.before(8000);
    facebookPostPage.getText('@postTitleDiv', function(result) {
      fieldValue2 = result.value;
      console.log(fieldValue2);
      client.assert.equal(fieldValue1, fieldValue2)
    });
    facebookPostPage.expect.element('@postLink').to.be.visible.before(1000);
    facebookPostPage.openPost();

    specHelper.switchToLastWindow(client);

    facebookPostPage.expect.element('@confirmButton').to.be.visible.before(5000);
    facebookPostPage.confirm();
    facebookPostPage.expect.element('@videoFrame').to.be.visible.before(15000);

    client.frame(2);
    const playbackPage = client.page.playback();
    playbackPage.expect.element('@playButton').to.be.visible.before(20000);
    playbackPage.click('@playButton');
    client.pause(4000);
    playbackPage.click('@playButton');
  },

  after(client) {
    // cancel 2 apps
    specHelper.cancelAppInFb(client);
    specHelper.cancelAppInFb(client);

    client.end();
  }

};
