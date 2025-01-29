const { clickAndSendkeys, getByTextIDClick, getCurrentMonthName, launchURL, assertParticularText, toClick, GetByText_Click, sleep, clickByRole, doubleClick } = require('../Helper/Action');
const { yearSelection,MonthSelection,DateSelection } = require('../Helper/Helper');
require('dotenv').config();
const { pageObject } = require('../Hooks/PageObjects');

const PageLocators = {
    nextButton: "//button[contains(text(), 'Next')]",
    NRICfield: "//input[@name='securityNumber']",
    salutationID: "#salutationCode img",
    firstName: "input[name='firstName']",
    DOBfield: "//input[@name='dob']",
    occupationID: "#occupationCode",

}
class CustomerSelection {
    constructor(page) {
        pageObject.page = page;
    }

    async QuotationType() {
        const quotationType = process.env.quotationType;
        const InsurancePlan = process.env.InsurancePlan;
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
        let profileType = process.env.Profile;
        if (profileType == 'New EzSub Profile') {
            await toClick(`//p[text()='${profileType}']`);
            console.log(`${profileType} is Selected`);
        }
        else {
            console.log(`${profileType} is not yet Implemented`)
        }

    }
    async fillNRICnumber() {
        await clickAndSendkeys(PageLocators.NRICfield, process.env.NRIC_Number)
    }
    async fillSalutation() {
        await toClick(PageLocators.salutationID);
    }
    async selectSalutation() {
        let salutation = process.env.Salutation
        await clickByRole('option', { name: salutation, exact: true });
    }
    async EnterlastName() {
        await getByTextIDClick('lastName', process.env.lastname);
    }
    async EnterfirstName() {
        await clickAndSendkeys(PageLocators.firstName, process.env.firstname)
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
        let occupationID=process.env.occupationID;
        await clickByRole('option', { name: occupationID })
        console.log(`Selected occupation ID is ${occupationID}`)
    }
}
module.exports = { CustomerSelection }