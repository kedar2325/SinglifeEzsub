const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const {PlanSelection}=require("../Pages/Page 1.2Quotation-LifeInsurancePlanSelection");
const { pageObject } = require("../Hooks/PageObjects");
setDefaultTimeout(20000); 

let NewPlanSelection;

Given('user able to view the new quotation', async function () {
  NewPlanSelection = new PlanSelection(pageObject.page);
        await NewPlanSelection.NewQuatation();
});

When('user clicks new quotation as {string}', async function (InsurancePlan) {
  console.log(InsurancePlan);
  await NewPlanSelection.InsuranceType(InsurancePlan);
});
When('user selects life insurance', async function () {
        await NewPlanSelection.ClickStartQuatation();
});
Then('user clicks yes proceed', async function () {
  await NewPlanSelection.ClickYesProceedButton();
  });
