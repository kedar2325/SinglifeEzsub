const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const {PlanSelection}=require("../Pages/Page 1.2Quotation-LifeInsurancePlanSelection");

setDefaultTimeout(15000); 
let NewPlanSelection;
Given('user login with Valid Credentials', async function () {
  NewPlanSelection=new PlanSelection();
 // await NewPlanSelection.validLogin();
});

When('user able to view the new quotation', async function () {
        await NewPlanSelection.NewQuatation();
});

When('user clicks new quotation as {string}', async function (InsurancePlan) {
  await NewPlanSelection.InsuranceType(InsurancePlan);
});
When('user selects life insurance', async function () {
        await NewPlanSelection.ClickStartQuatation();
});
Then('user clicks yes proceed', async function () {
  await NewPlanSelection.ClickYesProceedButton();
  });
