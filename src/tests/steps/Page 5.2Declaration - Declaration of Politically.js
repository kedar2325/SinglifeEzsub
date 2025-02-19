const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000);
require('dotenv').config();

const { DeclarationPolitically } = require('../Pages/Page 5.2Declaration - Declaration of Politically');
const { pageObject } = require('../Hooks/PageObjects');

let pageDeclarationPolitically

Given('user able to view declaration of polictically', async function () {
    pageDeclarationPolitically = new DeclarationPolitically(pageObject.page);
    await pageDeclarationPolitically.verifyDeclarationPoliticallyTitle();
    //check page exists
});

When('user selects declares option', async function () {
    await pageDeclarationPolitically.clickPoliticallyExposedPerson();
    //clicks on PEP option as no
});

Then('user selects next in Declaration', async function () {
    if (pageDeclarationPolitically.verifyDeclarationPoliticallyTitle) {
        // Capture screenshot and attach it to Allure
        
        const screenshot = await pageObject.page.screenshot();
        this.attach(screenshot, 'image/png');
    }
    //await pageClientAcknowledgement.ClickNextButton();
    await pageDeclarationPolitically.clickNextButton();

    
    //clicks on next button
});