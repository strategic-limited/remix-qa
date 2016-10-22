'use strict';

const specHelper = require('../lib/spec-helper');
const config = require('../config/config');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    // Step 2 - After remix login verifying Templates pages
    specHelper.loginToVr(client);
  },

  'Preview LOWER THIRDS & COMBO ELEMENTS'(client) {

    // Step 4 - Open remix Editor
    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28082/remix');

    //Step 5 - Click on Elements and click on Lower thirds and combo Elements
    editorPage.expect.element('@elementsTab').to.be.visible.before(3000);
    editorPage.click('@elementsTab');

    client.execute('scrollTo(0,1500)');

    editorPage.expect.element('@lowerThirdsElement').to.be.visible.before(3000);
    editorPage.click('@lowerThirdsElement');

    editorPage.expect.element('@lowerThirdsModalTitle').to.be.visible.before(3000);

  },

  after(client) {
    client.end();
  }

};
