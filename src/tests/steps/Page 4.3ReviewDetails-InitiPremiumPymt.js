const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000);
require('dotenv').config();

//login import
const { ReviewDetailsInitialPremiumPayment } = require('../Pages/Page 4.3ReviewDetails-InitiPremiumPymt');
const { pageObject } = require('../Hooks/PageObjects');
const { sleep } = require('../Helper/Action');

let InitialPremiumPymt;

Given('user able to view payment method', async function () {
  InitialPremiumPymt = new ReviewDetailsInitialPremiumPayment(pageObject.page);
  await sleep(2000);
  await InitialPremiumPymt.verifyInitialPremiumPage();
});

When('user selects payment method', async function () {
  await InitialPremiumPymt.InitialPremiumPaymentMethod();
});

When('user selects subsequent premium payment', async function () {
  await InitialPremiumPymt.SubsequentPremiumPayment();
});

When('user click on Next', async function () {
  await InitialPremiumPymt.ClickNextButton();
});

Then('user validate the on your terms text', async function () {
  await InitialPremiumPymt.verifyDeclarationPage();
  // if (InitialPremiumPymt.SubsequentPremiumPayment) {
  //   // Capture screenshot and attach it to Allure
  //   await sleep(1000);
  //   const screenshot = await pageObject.page.screenshot();
  //   this.attach(screenshot, 'image/png');
  // }
});