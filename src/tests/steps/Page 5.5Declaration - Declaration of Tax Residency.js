const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

const {DeclarationTaxResidency} = require('../Pages/Page 5.5Declaration - Declaration of Tax Residency');
const { pageObject } = require('../Hooks/PageObjects');
let pageTaxDeclaration

Given('user able to view declaration of tax residency', async function () {
    pageTaxDeclaration = new DeclarationTaxResidency;
    await pageTaxDeclaration.verifyDeclarationTaxResidencyTitle();
  });

When('user selects tax resident in singapore yes', async function () {
    await pageTaxDeclaration.clickSingaporeTaxResidentY();
  });

When('user enter tax declaration', async function () {
    await pageTaxDeclaration.enterDeclarationTabOne();
    if(process.env.quotationType!="Self"){
      await pageTaxDeclaration.enterDeclarationTabTwo()
    }
  });
When('user enters tin number', async function () {
    await pageTaxDeclaration.enterNricNumber();
  });
When('user selects tax resident in other jurisdiction no', async function () {
    await pageTaxDeclaration.clickOtherJurisdictionsN();
  });
// When('user selects tax resident in other jurisdiction no', async function () {
//     await pageTaxDeclaration.clickOtherJurisdictionsN();
//   }); 
When('user checks the declaration', async function () {
    await pageTaxDeclaration.checkTaxResidence();
  });
  Then('user selects next', async function () {
    await pageTaxDeclaration.clickNextButton();
  });