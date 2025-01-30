const { clickAndSendkeys, getByTextIDClick, getCurrentMonthName, launchURL, assertParticularText, toClick, GetByText_Click, sleep, clickByRole, doubleClick } = require('../Helper/Action');
const { yearSelection,MonthSelection,DateSelection } = require('../Helper/Helper');
require('dotenv').config();
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');

const PageLocators = {
    nextButton: "//button[contains(text(), 'Next')]",
    NRICNumber: "//input[@name='securityNumber']",
    salutation: "#salutationCode img",
    firstName: "input[name='firstName']",
    DOBfield: "//input[@name='dob']",
    occupationID: "#occupationCode",

}
class CustomerSelection {
    constructor(page) {
        pageObject.page = page;
    }

    async QuotationType() {
        const quotationType = excelValue()[0].quotationType;
        const InsurancePlan = excelValue()[0].InsurancePlan;
        if (InsurancePlan === "Life Insurance" || InsurancePlan === "Medical & Health Insurance" || InsurancePlan === "Accident Guard") {
            if (quotationType === "Self" || quotationType === "Third-Party") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`${quotationType} quatation is selected`);
                await toClick(PageLocators.nextButton);
            }
            else if (InsurancePlan === "Life Insurance" && quotationType === "Joint-Life") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`${quotationType} quatation is selected`);
                await toClick(PageLocators.nextButton);
            }
            else if (InsurancePlan === "Medical & Health Insurance" && quotationType === "Family") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`${quotationType} quatation is selected`);
                await toClick(PageLocators.nextButton);
            } else {
                console.log(`For  ${InsurancePlan} no quatation type is available..`);
            }
        }
        else {
            console.log(`Unsupported quotation type ${quotationType} for ${InsurancePlan}`);
        }
    }


    // async clickNextButton(){
    //     await toClick(PageLocators.nextButton);
    // }
    async clickNewEzsubButton() {
        let profileType = excelValue()[0].Profile;
        if (profileType == 'New EzSub Profile') {
            await toClick(`//p[text()='${profileType}']`);
            console.log(`${profileType} is Selected`);
        }
        else {
            console.log(`${profileType} is not yet Implemented`)
        }

    }
    async fillNRICnumber() {
        await clickAndSendkeys(PageLocators.NRICNumber, process.env.NRIC_Number)
    }
    async fillSalutation() {
        await toClick(PageLocators.salutation);
    }
    async selectSalutation() {
        let salutation = excelValue()[0].Salutation
        await clickByRole('option', { name: salutation, exact: true });
    }
    async EnterlastName() {
        await getByTextIDClick('lastName', excelValue()[0].lastname);
    }
    async EnterfirstName() {
        await clickAndSendkeys(PageLocators.firstName, excelValue()[0].firstname)
    }
   

    async EnterDOB() {
        await toClick(PageLocators.DOBfield);
        await sleep(2000);
        await yearSelection();
        await MonthSelection();
        await DateSelection();
        // await toClick(PageLocators.yearClick);
        // await doubleClick(PageLocators.leftArrowForData);
        // await doubleClick(PageLocators.leftArrowForData);
        // await Click(PageLocators.selectYear);
        // await toClick(PageLocators.selectDate);
    }
    async occupation() {
        await toClick(PageLocators.occupationID);
        let occupationID=excelValue()[0].occupationID;
        await clickByRole('option', { name: occupationID })
        console.log(`Selected occupation ID is ${occupationID}`)
    }
}
module.exports = { CustomerSelection }