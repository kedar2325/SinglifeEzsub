const { Given, Then, When, And } = require("@cucumber/cucumber");
const{ ReviewDetailsSelectedQuotation } = require("../Pages/Page 3.2ReviewDetails - SelectedQuotation")
const { pageObject } = require("../Hooks/PageObjects");
const { select } = require("../Helper/Action");

setDefaultTimeout(15000); 

let SelectedQuotation;
Given('user able to view the selected quotation page', async function () {
    SelectedQuotation = new ReviewDetailsSelectedQuotation(pageObject.page)
    await SelectedQuotation.SelectedQuotationExist()

  });
When('user click the next button', async function () {
  await SelectedQuotation.ClickNextBtn()
    
  });

When('user click the proceed to apply button', async function () {
  await SelectedQuotation.ProceedtoApplyBtn()
      
  });
Then('user validate the life assured tab', async function () {
  await SelectedQuotation.LifeAssuredExist()
    
  });