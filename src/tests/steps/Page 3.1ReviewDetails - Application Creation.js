const { Given, When, Then } = require('@cucumber/cucumber');
const{ ReviewDetailsApplicationCreation } = require("../Pages/Page 3.1ReviewDetails - Application Creation")
const { pageObject } = require("../Hooks/PageObjects");
const { select } = require("../Helper/Action");

setDefaultTimeout(15000); 

let ApplicationCreation;

Given('user able to view the quotation summary page', async function () {
    ApplicationCreation = new ReviewDetailsApplicationCreation(pageObject.page)
    ApplicationCreation.VerifyQuotationSummaryExist()

    
});
When('user click the save quotation button', async function () {
    ApplicationCreation.ClickSaveQuotationBtn()
    
});
When('user click the proceed to apply button', async function () {
    ApplicationCreation.ProceedtoApplyBtn()
    
});
Then('user should view the review details page', async function () {
    ApplicationCreation.ReviewDetailsExist()
    
});
