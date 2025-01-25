const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//login import
const { SigningMethod } = require('../Pages/Page 6.1Confirmation - Signing Method and Product Illustration');
const { pageObject } = require('../Hooks/PageObjects');

let Signing_Method;

Given('user able to view the signing method', async function () {
    Signing_Method=new SigningMethod(pageObject.page);
    await Signing_Method.verifyDocumentSigningPage();
  });

  When('user selects the preferred signing method', async function () {
    await Signing_Method.preferredSigningMethod();
  });

  When('user preview the PDF of Product Illustration and Product Summary', async function () {
    await Signing_Method.productIllustrationAndSummary();
  });

  Then('user verify the success message', async function () {
    await Signing_Method.successMessage();
  });
