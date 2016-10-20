'use strict';

const config = require('../config/config');
const specHelper = require('../lib/spec-helper');

const host = 'https://www.facebook.com/videoremixio/app/1728968890675795/';

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - open facebook and login.
    specHelper.loginToFb(client, config.anotherFacebookAccount);
  },

  'Playback in FB tab (app not approved)'(client) {
    // Step 1 - Go to FB post and click Enter without facebook
    const facebookPostPage = client.page.facebookPost();
    facebookPostPage.navigate(host);

    facebookPostPage.expect.element('@videoFrame').to.be.visible.before(10000);

    client.frame(0);
    const playbackPage = client.page.playback();
    playbackPage.expect.element('@withoutFbButton').to.be.visible.before(5000);
    playbackPage.click('@withoutFbButton');
    playbackPage.expect.element('@playButton').to.be.visible.before(5000);
    playbackPage.click('@playButton');
    client.pause(4000);
    playbackPage.click('@playButton');
  },

  after(client) {
    client.end();
  }

};
