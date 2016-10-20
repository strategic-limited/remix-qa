'use strict';

const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, true);
    // Step 2 - open video remix in new window and Login.
    specHelper.loginToVr(client);
  },

  'Remixed video can be played back'(client) {
    // Step 4 - Open remix Editor
    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/27102/remix');

    //    Step 4 - remix editor - save video
    editorPage.expect.element('@saveButton').to.be.visible.before(2000);
    editorPage.click('@saveButton');

    editorPage.setValue('@savePopupTitleInput', new Date());
    editorPage.click('@savePopupSaveButton');

    editorPage.expect.element('@previewButton').to.be.visible.before(2000);
    editorPage.click('@previewButton');

    editorPage.expect.element('@previewBody').to.be.visible.before(10000);

    // Step 5  - Click on 'Connect with Facebook' button
    client.frame('previewVideo');
    const playbackPage = client.page.playback();
    playbackPage.expect.element('@useFbButton').to.be.visible.before(5000);
    playbackPage.click('@useFbButton');

    client.pause(1000);

    //Step 6 - facebook App Approval
    specHelper.switchToLastWindow(client);

    const facebookPopupPage = client.page.facebookPopup();
    facebookPopupPage.expect.element('@confirmButton').to.be.visible.before(5000);
    facebookPopupPage.click('@confirmButton');

    specHelper.switchWindowByIdx(client, 0);

    // step 7 - Play preview video
    editorPage.click('@previewBody');
    client.frame('previewVideo');
    playbackPage.expect.element('@playButton').to.be.visible.before(5000);
    playbackPage.click('@playButton');
    client.pause(4000);
    playbackPage.click('@playButton');

    // step 8 - navigate to facebook
    specHelper.cancelAppInFb(client);
  },

  after(client) {
    client.end();
  }

};
