const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000);
require('dotenv').config();

const { DeclarationBeneficialOwnership } = require('../Pages/Page 5.3Declaration - Declaration of BeneficialOwnership');
const { pageObject } = require('../Hooks/PageObjects');
let pageBeneficialOwnership

Given('user able to view declaration of beneficial ownership', async function () {
        pageBeneficialOwnership = new DeclarationBeneficialOwnership(pageObject.page);
        await pageBeneficialOwnership.verifyBeneficialOwnershipTitle();
        //Check Page exits
});


When('user selects declare beneficial option no or yes', async function () {
        await pageBeneficialOwnership.clickBeneficialOwnerOption();
        //Select beneficial Ownership N
});


Then('user selects next on BO', async function () {
        if (pageBeneficialOwnership.clickBeneficialOwnerOption) {
        // Capture screenshot and attach it to Allure
      
        const screenshot = await pageObject.page.screenshot();
        this.attach(screenshot, 'image/png');
        }
        await pageBeneficialOwnership.clickNextButton();
        //Click on next button
});