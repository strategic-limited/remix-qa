'use strict';

const specHelper = require('../lib/spec-helper');

const imageUrl = 'http://www.gettyimages.in/gi-resources/images/Editorial-Images/Entertainment.jpg';

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    specHelper.loginToVr(client);
  },

  'Check Editing images from Adobe Editor'(client) {

    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28082/remix');

    // Step 5 - Add Image Element
    editorPage.expect.element('@elementsTab').to.be.visible.before(3000);
    editorPage.click('@elementsTab');

    editorPage.expect.element('@imageElement').to.be.visible.before(3000);
    editorPage.click('@imageElement');

    editorPage.expect.element('@imageUrlInput').to.be.visible.before(3000);
    editorPage.clearValue('@imageUrlInput');
    editorPage.setValue('@imageUrlInput', imageUrl);
    specHelper.pressEnter(client);

    editorPage.waitForElementVisible(`img[src="${imageUrl}"]`, 10000);

    editorPage.expect.element('@adobeEditorButton').to.be.visible.before(1000);
    editorPage.click('@adobeEditorButton');

    editorPage.expect.section('@adobeEditorModal').to.be.visible.before(6000);

    var adobeEditorModalSection = editorPage.section.adobeEditorModal;

    adobeEditorModalSection.expect.element('@framesButton').to.be.visible.before(3000);
    adobeEditorModalSection.click('@framesButton');

    adobeEditorModalSection.expect.element('@bohemiaButton').to.be.visible.before(6000);
    adobeEditorModalSection.click('@bohemiaButton');

    adobeEditorModalSection.expect.element('@curlsButton').to.be.visible.before(6000);
    adobeEditorModalSection.click('@curlsButton');

    adobeEditorModalSection.expect.element('@applyButton').to.be.visible.before(3000);
    adobeEditorModalSection.click('@applyButton');

    adobeEditorModalSection.expect.element('@saveButton').to.be.visible.before(3000);
    adobeEditorModalSection.click('@saveButton');

    editorPage.checkTimelineItems(1);

    editorPage.click('@playButton');
    client.pause(5000);
    editorPage.click('@playButton');

    editorPage.saveVideo();

    // step 7 - Play preview video
    editorPage.expect.element('@previewButton').to.be.visible.before(2000);
    editorPage.click('@previewButton');

    editorPage.expect.element('@previewBody').to.be.visible.before(10000);

    client.frame('previewVideo');
    const playbackPage = client.page.playback();

    playbackPage.expect.element('@playButton').to.be.visible.before(5000);
    playbackPage.click('@playButton');

    client.pause(5000);

    playbackPage.click('@playButton');

  },

  after(client) {
    client.end();
  }

};
