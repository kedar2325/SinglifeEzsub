const { Given, Then, When, And } = require("@cucumber/cucumber");
const { CustomerSelection } = require("../Pages/Page 2.1QuotationCreation-SelfQuotationWith35ANB");
const { pageObject } = require("../Hooks/PageObjects");
let CustomerselectionFunction;
Given('user clicks customer selection for quotation', async function () {
  CustomerselectionFunction=new CustomerSelection(pageObject.page)
  await CustomerselectionFunction.selectCustomer();
  });

When('user clicks new EzSub profile', async function () {
        await CustomerselectionFunction.clickNextButton();
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
});
