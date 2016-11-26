'use strict';

const config = require('../config/config');
const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    specHelper.loginToVr(client);
  },

  'Check Playback, when Allow Facebook not enabled'(client) {

    // Step 4 - Open remix Editor
    const editorPage = specHelper.openEditorPage(client,
      'https://app.videoremix.io/editor/27102/remix');

    //step 5 - Save
    const title = new Date();

    editorPage.expect.element('@saveButton').to.be.visible.before(2000);
    editorPage.click('@saveButton');

    editorPage.setValue('@savePopupTitleInput', title);
    editorPage.click('@savePopupAllowFacebookCheckBox');
    editorPage.click('@savePopupSaveButton');

    //
    editorPage.expect.element('@previewButton').to.be.visible.before(2000);
    editorPage.click('@previewButton');

    editorPage.expect.element('@previewBody').to.be.visible.before(10000);

    client.frame('previewVideo');
    const playbackPage = client.page.playback();

    playbackPage.expect.element('@useFbButton').to.be.not.visible.before(3000);
    playbackPage.expect.element('@withoutFbButton').to.be.not.visible.before(3000);
  },

  after(client) {
    client.end();
  }

};
