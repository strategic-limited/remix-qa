const specHelper = require('../lib/spec-helper');
const config = require('../config/config');

module.exports = {
  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.facebookAccounts.publisher);
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

    editorPage.expect.element('@personalizationModal').to.be.visible.before(10000);

    editorPage.expect.element('@personalizationModalNext1').to.be.visible.before(100);
    editorPage.click('@personalizationModalNext1');

    editorPage.expect.element('@personalizationModalConnectWithFbButton').to.be.visible.before(6000);
    editorPage.click('@personalizationModalConnectWithFbButton');

    //Step 8 - facebook App Approval
    specHelper.switchToLastWindow(client);

    const facebookPopupPage = client.page.facebookPopup();
    facebookPopupPage.expect.element('@confirmButton').to.be.visible.before(5000);
    facebookPopupPage.click('@confirmButton');
    client.pause(3000);
    facebookPopupPage.click('@confirmButton');

    specHelper.switchWindowByIdx(client, 0);

    editorPage.expect.element('@personalizationModalFbTabsList').to.be.visible.before(8000);

  },

  after(client) {
    specHelper.cancelAppInFb(client);
    client.end();
  }

};
