const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//login import
const { SigningMethod } = require('../Pages/Page 6.1Confirmation - Signing Method and Product Illustration');
const { pageObject } = require('../Hooks/PageObjects');

let pageSigningMethod;

Given('user able to view the signing method', async function () {
    pageSigningMethod=new SigningMethod(pageObject.page);
    await pageSigningMethod.verifyDocumentSigningPage();
  });

  When('user selects the preferred signing method', async function () {
    await pageSigningMethod.preferredSigningMethod();
  });

  When('user preview the PDF of Product and success', async function () {
    await pageSigningMethod.productIllustrationAndSummary();
    await pageSigningMethod.productsuccessMessage();
  });

  When('user preview the PDF of App and success', async function () {
    await pageSigningMethod.appFormClickandSummary();
  });

  When('user preview the PDF of Assured Signature and success', async function () {
    await pageSigningMethod.signatureClickandSummary();
  });

  When('user preview the PDF of Credit Signature and success', async function () {
    await pageSigningMethod.creditCardClickandSummary();
  });

  Then('user click on next btn on signing', async function () {
    await pageSigningMethod.clickNextButton();
  });
