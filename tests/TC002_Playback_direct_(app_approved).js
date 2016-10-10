'use strict';

const specHelper = require('../lib/spec-helper');
const config = require('../config/config');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client);
  },

  'Playback direct (app approved)'(client) {
    const playbackPage = specHelper.openPlaybackPage(client, 'https://cdn.videoremix.io/282/vr/kwu');
    playbackPage.expect.element('@bigPlayButton').to.be.visible.before(10000);
    playbackPage.play();

    client.pause(5000);
  },

  after(client) {
    client.end();
  }

};