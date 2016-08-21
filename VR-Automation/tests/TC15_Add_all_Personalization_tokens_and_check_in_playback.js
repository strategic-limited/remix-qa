var host = 'https://app.videoremix.io/login';

var fieldValue;
module.exports =
{

  'Add all Personalization tokens and check in playback': function(client)
   {

// Step 1 - Login to VR editor
      client
      .windowMaximize()
      .url(host)
      .useCss()
      .waitForElementVisible('body', 3000)
      .useXpath()
      .waitForElementPresent("//input[@name='uid']" , 2000)
      .setValue("//input[@name='uid']","test03@gmail.com")
      .setValue("(//input[@name='password'])[1]","Abcdefgh@123")
      .click("(//button[@ng-click='user.password && submitPassword()'])[2]")
      .pause(3000)

/* // Step 2 -  after remix login closing pop up. (This functionality has been removed)
        .useCss()
        .waitForElementVisible('body', 3000)
        .useXpath()
        .waitForElementPresent("//h2" , 3000)
        .click("//button[@title='Close']")
        .useCss()
        .waitForElementVisible('body', 2000) */

// Step 4 - Open remix Editor

          .url("https://app.videoremix.io/editor/28142/remix")
          .useXpath()
          .pause(5000)
        /* .waitForElementVisible("//div[@id='tutorialFirstRunBody']", 20000)
          .waitForElementVisible("//button[@type='button']", 2000)
          .click("//button[@type='button']") */                 // this has been removed from editor
          .waitForElementVisible("//strong[contains(text(),'Welcome!')]", 20000)
          .waitForElementVisible("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", 3000)
          .setValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']", "youtube")
          .clearValue("//textarea[@placeholder='Paste a Clyp, SoundCloud, Vimeo, HTML5 media, image link']")
          .pause(3000)
          .waitForElementVisible("//div[contains(text(),'Step 2, Drag your media to the timeline.')]", 3000)
          .click("//div[contains(text(),'Step 2, Drag your media to the timeline.')]")

// Step 5 - Add all tokens

          .click("(//span[@class='icon icon-white icon-plus'])[1]")
          .waitForElementVisible("//span[contains(text(),'Personalized Text')]", 3000)
          .click("//span[contains(text(),'Personalized Text')]")
          .setValue("//textarea[@data-manifest-key='text']", "")

//Step 6 - Add Firstname token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'FIRSTNAME')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          // Add Lastname token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'LASTNAME')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add Email token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'EMAIL')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add Geocountry token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'GEOCOUNTRY')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add Geocity token

          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'GEOCITY')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add GeoState token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'GEOSTATE')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add Name token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'NAME')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add Gender token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'GENDER')]")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          //Add Custom token
          .click("//button[contains(text(),'Personalize!')]")
          .waitForElementVisible("//div[@id='personalizer-modal']", 4000)

          .click("//span[contains(text(),'CUSTOM')]")
          .setValue("//input[@id='custom-textbox']", "FOOD")
          .waitForElementPresent("//div/div/div/button[@id='add-variable-button']", 6000)
          .click("//div/div/div/button[@id='add-variable-button']")

          .waitForElementVisible("//a[contains(text(),'Advanced')]", 5000)
          .click("//a[contains(text(),'Advanced')]")
          .waitForElementVisible("//input[@data-manifest-key='fontSize']", 3000)
          .clearValue("//input[@data-manifest-key='fontSize']")
          .setValue("//input[@data-manifest-key='fontSize']", "5")

// Step 5 - remix editor - save video

          .waitForElementVisible("//button[contains(text(),'Save')]", 2000)
          .click("//button[contains(text(),'Save')]")
          .setValue("//input[@class='input title-input']",new Date())
          .waitForElementVisible("//span[contains(text(),'Save')]", 3000)
          .click("//span[contains(text(),'Save')]")
          .pause(3000)

// Step -6 Click on Email Campaign and Verify

          .waitForElementVisible("//a[@id='embedBtn']", 5000)
          .click("//a[@id='embedBtn']")

          .window_handles(function(result)
              {
                        var temp = result.value[2];
                        this.switchWindow(temp);
              })

          .waitForElementVisible("//div[@id='personalization-modal']", 10000)
          .click("//div[@id='personalization-modal']")
          .waitForElementVisible("//a[@id='hideform1']",10000)
          .click("//a[@id='hideform1']")

          .waitForElementVisible("//label[@title='Custom / All Other Email Providers']", 6000)
          .click("//label[@title='Custom / All Other Email Providers']")
          .waitForElementVisible("//input[@id='resultUrl']", 6000)
          .getValue("//input[@id='resultUrl']", function(result)
            {
              fieldValue = result.value;
              console.log(fieldValue);
              client.url(fieldValue);

            })

// Step -7 - Check in Playback
            .pause(3000)
          .waitForElementVisible("//div[@id='controls-big-play-button']", 20000)
          .click("//div[@id='controls-big-play-button']")
          .end();
        }
  };
