'use strict';

const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    specHelper.loginToVr(client);
  },

  'Check Editing images from Adobe Editor'(client) {

    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28082/remix');

    editorPage.expect.element('@elementsTab').to.be.visible.before(3000);
    editorPage.click('@elementsTab');

    // Step 5 - Add Image Element
    editorPage.expect.element('@imageElement').to.be.visible.before(3000);
    editorPage.click('@imageElement');

    editorPage.expect.element('@youzignElement').to.be.visible.before(3000);
    editorPage.click('@youzignElement');

    client
      .useXpath()
      .waitForElementVisible("//h4[contains(text(),'Your Designs')]", 6000)
      .waitForElementVisible("(//div[@class='data centeredImageContainer'])[1]", 3000)
      .click("(//div[@class='data centeredImageContainer'])[1]")
      .pause(3000);

    editorPage.click('@playButton');

    client.pause(5000);

    // Step 6 - Save
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
