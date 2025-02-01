const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { sleep } = require('../Helper/Action');
setDefaultTimeout(15000);
require('dotenv').config();

//login import
const { PayorDetails } = require('../Pages/Page 4.2ReviewDetails - PayorDetails');
const { pageObject } = require('../Hooks/PageObjects');

let PayerDetails;

Given('user able to view questions', async function () {
  PayerDetails = new PayorDetails(pageObject.page);
  await PayerDetails.payingpolicyPage();
});



When('user selects source of wealth', async function () {
  await PayerDetails.sourceWealth();
});

When('user selects source of funds', async function () {
  await PayerDetails.sourceFunds();
});

When('user click on next', async function () {
  await PayerDetails.button();
});

Then('user validate the initial premium payment text', async function () {
  await PayerDetails.verifyInitialPremiumPage();
  if (PayerDetails.verifyInitialPremiumPage) {
    // Capture screenshot and attach it to Allure
    await sleep(1000);
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }

});
