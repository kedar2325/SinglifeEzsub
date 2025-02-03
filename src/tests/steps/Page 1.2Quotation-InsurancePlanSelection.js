const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const { PlanSelection } = require("../Pages/Page 1.2Quotation-InsurancePlanSelection");
const { pageObject } = require("../Hooks/PageObjects");
const { sleep } = require('../Helper/Action');
setDefaultTimeout(20000);

let NewPlanSelection;

Given('user able to view the new quotation', async function () {
  NewPlanSelection = new PlanSelection(pageObject.page);
  await NewPlanSelection.NewQuatation();
});

When('user clicks new quotation', async function () {
  await NewPlanSelection.InsuranceType();
});
When('user selects life insurance', async function () {
  await NewPlanSelection.ClickStartQuatation();
});
Then('user clicks yes proceed', async function () {
  await NewPlanSelection.ClickYesProceedButton();

  if (await NewPlanSelection.InsuranceType) {
    // Capture screenshot and attach it to Allure
    await sleep(1000);
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});
