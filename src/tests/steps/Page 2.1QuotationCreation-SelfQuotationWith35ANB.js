const { Given, Then, When, setDefaultTimeout} = require("@cucumber/cucumber");
const { CustomerSelection } = require("../Pages/Page 2.1QuotationCreation-SelfQuotationWith35ANB");
const { pageObject } = require("../Hooks/PageObjects");
const { sleep } = require('../Helper/Action');
setDefaultTimeout(15000);
let CustomerselectionFunction;
Given('user clicks customer selection for quotation', async function () {
  CustomerselectionFunction = new CustomerSelection(pageObject.page)
  await CustomerselectionFunction.QuotationType();
});

When('user clicks new EzSub profile', async function () {
  await CustomerselectionFunction.clickNewEzsubButton();
});

When('user provides quotation details', async function () {
  await CustomerselectionFunction.fillNRICnumber();
  await CustomerselectionFunction.fillSalutation();
  await CustomerselectionFunction.selectSalutation();
});

Then('user verify the DOB is visible', async function () {
  await CustomerselectionFunction.EnterlastName();
  await CustomerselectionFunction.EnterfirstName();
  await CustomerselectionFunction.EnterDOB();
  await CustomerselectionFunction.occupation();
  // if (await CustomerselectionFunction.occupation) {
  //   // Capture screenshot and attach it to Allure
  //   await sleep(1000);
  //   const screenshot = await pageObject.page.screenshot();
  //   this.attach(screenshot, 'image/png');
  // }
});
