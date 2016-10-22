'use strict';

const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    specHelper.loginToVr(client);
  },

  'Check DropMock integration'(client) {

    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28082/remix');

    editorPage.expect.element('@elementsTab').to.be.visible.before(3000);
    editorPage.click('@elementsTab');

    // Step 5 - Add Image Element
    editorPage.expect.element('@imageElement').to.be.visible.before(3000);
    editorPage.click('@imageElement');

    editorPage.expect.element('@dropMockElement').to.be.visible.before(3000);
    editorPage.click('@dropMockElement');

    client
      .useXpath()
      .waitForElementVisible("//h4[contains(text(),'Your Drive')]", 6000)
      .waitForElementVisible("(//div[@class='thumb-container'])[1]", 5000)
      .click("(//div[@class='thumb-container'])[1]");


    editorPage.checkTimelineItems(1);
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
