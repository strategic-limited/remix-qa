'use strict';

const specHelper = require('../lib/spec-helper');
const config = require('../config/config');

const imageUrl = 'https://media.giphy.com/media/3o7ZeMCXAFPvusagQU/giphy.gif';

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    // Step 2 - After remix login verifying Templates pages
    specHelper.loginToVr(client);
  },

  'Playback Early Personalization Gif Vid'(client) {
    // Step 3 - Open remix Editor
    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/27102/remix');

    //Step 4 - Add media in the textbox
    editorPage.setValue('@mediaInput', imageUrl);
    editorPage.expect.element('@getMediaButton').to.be.visible.before(3000);
    editorPage.click('@getMediaButton');

    editorPage.expect.element('@imageInMyMedia').to.be.visible.before(3000);
    editorPage.click('@imageInMyMedia');

    //Step 5 - Save the video
    editorPage.expect.element('@saveButton').to.be.visible.before(2000);
    editorPage.click('@saveButton');

    editorPage.setValue('@savePopupTitleInput', new Date());
    editorPage.selectThumbnailInSavePopup(imageUrl);
    editorPage.click('@savePopupSaveButton');

    // step 6 - Play preview video
    editorPage.expect.element('@previewButton').to.be.visible.before(2000);
    editorPage.click('@previewButton');

    editorPage.expect.element('@previewBody').to.be.visible.before(10000);

    client.frame('previewVideo');
    const playbackPage = client.page.playback();

    playbackPage.expect.element('@withoutFbButton').to.be.visible.before(3000);
    playbackPage.click('@withoutFbButton');

    playbackPage.expect.element('@playButton').to.be.visible.before(5000);
    playbackPage.click('@playButton');

    client.pause(5000);

    playbackPage.click('@playButton');
  },

  after(client) {
    client.end();
  }

};
