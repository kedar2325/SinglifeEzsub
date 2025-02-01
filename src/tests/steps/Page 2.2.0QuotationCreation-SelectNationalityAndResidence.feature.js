const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const { QuotationSelectNationaliandResidency } = require("../Pages/Page 2.2.0QuotationCreation-SelectNationalityAndResidence.feature")
const { pageObject } = require("../Hooks/PageObjects");

setDefaultTimeout(20000);

let CountrySelection;

Given('user selects Nationality from the dropdown', async function () {
    CountrySelection = new QuotationSelectNationaliandResidency(pageObject.page)
    await CountrySelection.SmokingStatus()
    await CountrySelection.SelectNationality()

});

When('user selects country of residence', async function () {
    await CountrySelection.SelectCountryofBirth()

});

When('user selects residence status from the dropdown', async function () {
    await CountrySelection.SelectResidencyStatus()
});

Then('user verify residency status should be displayed', async function () {
    await CountrySelection.VerifyResidencyStatus()
    // if (CountrySelection.VerifyResidencyStatus) {
    //     // Capture screenshot and attach it to Allure
    //     await sleep(1000);
    //     const screenshot = await pageObject.page.screenshot();
    //     this.attach(screenshot, 'image/png');
    // }

});
