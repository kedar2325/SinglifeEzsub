const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//login import
const { ReviewDetailsInitialPremiumPayment } = require('../Pages/Page 4.3ReviewDetails-InitiPremiumPymt');
const { pageObject } = require('../Hooks/PageObjects');

let InitialPremiumPymt;

Given('user able to view payment method', async function () {
  InitialPremiumPymt=new ReviewDetailsInitialPremiumPayment(pageObject.page);
  await InitialPremiumPymt.verifyInitialPremiumPage();
});

When('user selects payment method', async function () {
  await InitialPremiumPymt.InitialPayment();
  await InitialPremiumPymt.EnterCardDetails();
});

When('user selects subsequent premium payment', async function () {
  await InitialPremiumPymt.ClickCash();
});

When('user click on Next', async function () {
  await InitialPremiumPymt.ClickNextButton();
});

Then('user validate the on your terms text', async function () {
  await InitialPremiumPymt.verifyDeclarationPage();
});