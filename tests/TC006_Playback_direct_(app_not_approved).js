'use strict';

const config = require('../config/config');
const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.facebookAccounts.viewer);
  },

  'Playback direct (app not approved)'(client) {
    // Step 2 - Open playback link https://cdn.videoremix.io/282/vr/kwu
    const playbackPage = specHelper.openPlaybackPage(client, 'https://cdn.videoremix.io/282/vr/kwu');

    // Step 3 - Click on 'Connect with Facebook'
    playbackPage.expect.element('@useFbButton').to.be.visible.before(5000);
    playbackPage.click('@useFbButton');

    client.pause(1000);

    specHelper.switchToLastWindow(client);

    //Step 4 - cancel the app approval
    const facebookPopupPage = client.page.facebookPopup();
    facebookPopupPage.expect.element('@cancelButton').to.be.visible.before(5000);
    facebookPopupPage.click('@cancelButton');

    specHelper.switchWindowByIdx(client, 0);

    //Step 5 - Play the video
    playbackPage.expect.element('@bigPlayButton').to.be.visible.before(10000);
    playbackPage.play();
    client.pause(5000);
  },

  after(client) {
    client.end();
  }
};
