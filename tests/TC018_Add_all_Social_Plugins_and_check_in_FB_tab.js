'use strict';

const config = require('../config/config');
const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.facebookAccounts.real);
    // Step 2 - open video remix in new window and Login.
    specHelper.loginToVr(client);
  },

  'Add all Social Plugins and publish in FB tab'(client) {

    let fieldValue1;
    let fieldValue2;

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
    specHelper.cancelAppInFb(client, config.facebookApps.publisher);
    specHelper.cancelAppInFb(client, config.facebookApps.viewer);

    client.end();
  }

};
