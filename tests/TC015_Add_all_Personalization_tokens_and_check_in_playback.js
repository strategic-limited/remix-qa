'use strict';

const specHelper = require('../lib/spec-helper');

module.exports = {

  before(client) {
    specHelper.prepareClient(client);
    // Step 1 - Login to VR editor
    specHelper.loginToVr(client);
  },

  'Add all Personalization tokens and check in playback'(client) {

    const editorPage = specHelper.openEditorPage(client, 'https://app.videoremix.io/editor/28142/remix');

    editorPage.expect.element('@elementsTab').to.be.visible.before(3000);
    editorPage.click('@elementsTab');

    // Step 5 - Add all tokens
    editorPage.expect.element('@personalizedTextElement').to.be.visible.before(3000);
    editorPage.click('@personalizedTextElement');

    editorPage.setValue('@personalizedTextTextArea', '');

    const personalizerModalSection = editorPage.section.personalizerModal;

    //Step 6 - Add FirstName token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@firstNameItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add LastName token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@lastNameItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add Email token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@emailItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add GeoCountry token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@geoCountryItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add GeoCity token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@geoCityItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add GeoState token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.expect.element('@geoStateItem').to.be.visible.before(3000);
    personalizerModalSection.click('@geoStateItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add Name token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.expect.element('@nameItem').to.be.visible.before(3000);
    personalizerModalSection.click('@nameItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add Gender token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@genderItem');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    // Add Custom token
    editorPage.click('@personalizeButton');
    editorPage.expect.section('@personalizerModal').to.be.visible.before(3000);
    personalizerModalSection.click('@customItem');
    personalizerModalSection.setValue('@customInput', 'FOOD');
    personalizerModalSection.expect.element('@addVariableButton').to.be.visible.before(3000);
    personalizerModalSection.click('@addVariableButton');

    editorPage.expect.element('@advancedTab').to.be.visible.before(5000);
    editorPage.click('@advancedTab');

    editorPage.expect.element('@advancedFontSizeInput').to.be.visible.before(3000);
    editorPage.clearValue('@advancedTab');
    editorPage.setValue('@advancedTab', '5');

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
    });
  },

  after(client) {
    client.end();
  }
};
