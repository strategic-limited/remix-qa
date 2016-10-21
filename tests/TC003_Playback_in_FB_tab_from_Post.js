'use strict';

const config = require('../config/config');
const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.facebookAccounts.real, true);
  },

  'Playback in FB tab from Post'(client) {
    //Step 2 - Go to facebook post page
    const facebookPostPage = client.page.facebookPost();
    facebookPostPage.navigate('https://www.facebook.com/videoremixio/posts/1719151158354824');
    facebookPostPage.expect.element('@postLink').to.be.visible.before(5000);
    facebookPostPage.openPost();

    specHelper.switchToLastWindow(client);

    facebookPostPage.expect.element('@confirmButton').to.be.visible.before(5000);
    facebookPostPage.confirm();
    facebookPostPage.expect.element('@videoFrame').to.be.visible.before(10000);

    client.frame(0);
    const playbackPage = client.page.playback();
    playbackPage.expect.element('@playButton').to.be.visible.before(5000);
    playbackPage.click('@playButton');
    client.pause(4000);
    playbackPage.click('@playButton');

    // step 3 - navigate to facebook and cancel the VR App
    specHelper.cancelAppInFb(client);
  },

  after(client) {
    client.end();
  }
};
