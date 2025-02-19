const { Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
const { ReviewDetailsApplicationCreation } = require("../Pages/Page 3.1ReviewDetails - Application Creation")
const { pageObject } = require("../Hooks/PageObjects");
const { sleep } = require('../Helper/Action');
const { select } = require("../Helper/Action");

setDefaultTimeout(15000);

let ApplicationCreation;

Given('user able to view the quotation summary page', async function () {
    ApplicationCreation = new ReviewDetailsApplicationCreation(pageObject.page)
    await ApplicationCreation.VerifyQuotationSummaryExist()


});
When('user click the save quotation button', async function () {
    await ApplicationCreation.ClickSaveQuotationBtn()
});
When('user click the proceed to apply button', async function () {
    await ApplicationCreation.ProceedtoApplyBtn()

});
Then('user should view the review details page', async function () {
    await ApplicationCreation.ReviewDetailsExist()
    if (ApplicationCreation.ReviewDetailsExist) {
        // Capture screenshot and attach it to Allure
        await sleep(1000);
        const screenshot = await pageObject.page.screenshot();
        this.attach(screenshot, 'image/png');
    }


});
