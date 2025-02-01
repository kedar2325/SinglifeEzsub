const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const { ReviewDetailsSelectedQuotation } = require("../Pages/Page 3.2ReviewDetails - SelectedQuotation")
const { pageObject } = require("../Hooks/PageObjects");
const { sleep } = require('../Helper/Action');
const { select } = require("../Helper/Action");

setDefaultTimeout(15000);

let SelectedQuotation;

Given('user able to view the selected quotation page', async function () {
  SelectedQuotation = new ReviewDetailsSelectedQuotation(pageObject.page)
  await SelectedQuotation.SelectedQuotationExist()

});


When('user click the proceed to apply button  for quatation', async function () {
  await SelectedQuotation.ProceedtoApplyBtn()

});
Then('user validate the life assured tab', async function () {
  await SelectedQuotation.LifeAssuredExist()
  if (SelectedQuotation.LifeAssuredExist) {
    // Capture screenshot and attach it to Allure
    await sleep(1000);
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});