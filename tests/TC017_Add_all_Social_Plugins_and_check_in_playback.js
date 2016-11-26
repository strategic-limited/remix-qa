'use strict';

const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    specHelper.loginToVr(client);
  },

  'Add all Social Plugins and check in playback'(client) {

    const editorPage = specHelper.openEditorPage(client,
      'https://app.videoremix.io/editor/57dbadf3ebb1840003d518f9/remix');

    editorPage.expect.element('@elementsTab').to.be.visible.before(3000);
    editorPage.click('@elementsTab');

    // Step 5 - Add all social plugins

    //add like plugin
    editorPage.expect.element('@socialElement').to.be.visible.before(3000);
    editorPage.click('@socialElement');

    editorPage.expect.element('@socialPluginTypeSelect').to.be.visible.before(3000);

    editorPage.expect.element('@socialLikeDiv').to.be.visible.before(6000);
    editorPage.click('@socialLikeDiv');

    editorPage.click('@endInput');
    editorPage.clearValue('@endInput');
    editorPage.setValue('@endInput', '0:04.20');

    editorPage.click('@startInput');
    editorPage.clearValue('@startInput');
    editorPage.setValue('@startInput', '0:00.00');


    // add comments plugin
    editorPage.expect.element('@socialElement').to.be.visible.before(3000);
    editorPage.click('@socialElement');

    editorPage.expect.element('@socialPluginTypeSelect').to.be.visible.before(3000);
    editorPage.click('@socialPluginTypeSelect');
    editorPage.click('@socialPluginTypeCommentsOption');
    client.pause(2000);
    editorPage.click('@propertyXButton');

    editorPage.expect.element('@socialCommentsDiv').to.be.visible.before(2000);
    editorPage.click('@socialCommentsDiv');

    editorPage.click('@endInput');
    editorPage.clearValue('@endInput');
    editorPage.setValue('@endInput', '0:08.10');

    editorPage.click('@startInput');
    editorPage.clearValue('@startInput');
    editorPage.setValue('@startInput', '0:05.65');


    //add page plugin
    editorPage.expect.element('@socialElement').to.be.visible.before(3000);
    editorPage.click('@socialElement');

    editorPage.expect.element('@socialPluginTypeSelect').to.be.visible.before(3000);
    editorPage.click('@socialPluginTypeSelect');
    editorPage.click('@socialPluginTypePageOption');
    client.pause(2000);
    editorPage.click('@propertyXButton');

    editorPage.expect.element('@socialPageDiv').to.be.visible.before(2000);
    editorPage.click('@socialPageDiv');

    editorPage.click('@endInput');
    editorPage.clearValue('@endInput');
    editorPage.setValue('@endInput', '0:10.10');

    editorPage.click('@startInput');
    editorPage.clearValue('@startInput');
    editorPage.setValue('@startInput', '0:08.15');


    //add embed comments
    editorPage.expect.element('@socialElement').to.be.visible.before(3000);
    editorPage.click('@socialElement');

    editorPage.expect.element('@socialPluginTypeSelect').to.be.visible.before(3000);
    editorPage.click('@socialPluginTypeSelect');
    editorPage.click('@socialPluginTypeEmbeddedCommentsOption');
    client.pause(2000);
    editorPage.click('@propertyXButton');

    editorPage.expect.element('@socialEmbeddedCommentsDiv').to.be.visible.before(2000);
    editorPage.click('@socialEmbeddedCommentsDiv');

    editorPage.click('@endInput');
    editorPage.clearValue('@endInput');
    editorPage.setValue('@endInput', '0:12.10');

    editorPage.click('@startInput');
    editorPage.clearValue('@startInput');
    editorPage.setValue('@startInput', '0:10.17');


    //add embed posts
    editorPage.expect.element('@socialElement').to.be.visible.before(3000);
    editorPage.click('@socialElement');

    editorPage.expect.element('@socialPluginTypeSelect').to.be.visible.before(3000);
    editorPage.click('@socialPluginTypeSelect');
    editorPage.click('@socialPluginTypePostOption');
    client.pause(2000);
    editorPage.click('@propertyXButton');

    editorPage.expect.element('@socialPostDiv').to.be.visible.before(2000);
    editorPage.click('@socialPostDiv');

    editorPage.click('@endInput');
    editorPage.clearValue('@endInput');
    editorPage.setValue('@endInput', '0:14.20');

    editorPage.click('@startInput');
    editorPage.clearValue('@startInput');
    editorPage.setValue('@startInput', '0:12.15');

    // Step 5 - remix editor - save video
    editorPage.saveVideo();

    // Step -6 Click on Email Campaign and Verify
    editorPage.expect.element('@emailCampaignButton').to.be.visible.before(3000);
    editorPage.click('@emailCampaignButton');

    editorPage.expect.section('@personalizationModal').to.be.visible.before(3000);
    const personalizationModalSection = editorPage.section.personalizationModal;

    personalizationModalSection.expect.element('@next1').to.be.visible.before(10000);
    personalizationModalSection.click('@next1');

    personalizationModalSection.expect.element('@customEmailProvider').to.be.visible.before(1000);
    personalizationModalSection.click('@customEmailProvider');

    personalizationModalSection.expect.element('@resultUrlInput').to.be.visible.before(6000);
    personalizationModalSection.getValue('@resultUrlInput', (result) => {
      console.log(result.value);
      const playbackPage = client.page.playback();
      playbackPage.navigate(result.value);

      playbackPage.expect.element('@bigPlayButton').to.be.visible.before(20000);
      playbackPage.click('@bigPlayButton');
    })
  },

  after(client) {
    client.end();
  }
};
