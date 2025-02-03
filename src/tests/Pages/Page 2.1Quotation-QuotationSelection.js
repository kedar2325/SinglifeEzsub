const { clickAndSendkeys, getByTextIDClick, getCurrentMonthName, launchURL, assertParticularText, toClick, GetByText_Click, sleep, clickByRole, doubleClick, assertElementVisible, assertElementEnabled } = require('../Helper/Action');
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
        const quotationType = excelValue()[process.env.caseID].quotationType;
        await assertElementVisible(`//p[contains(text(), '${quotationType}')]`,"quotation selection button");
        const InsurancePlan = excelValue()[process.env.caseID].InsurancePlan;
        if (InsurancePlan === "Life Insurance" || InsurancePlan === "Medical & Health Insurance" || InsurancePlan === "Accident Guard") {
            if (quotationType === "Self" || quotationType === "Third-Party") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`user selects quotation type as : ${quotationType}`);
                await toClick(PageLocators.nextButton);
            }
            else if (InsurancePlan === "Life Insurance" && quotationType === "Joint-Life") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`user selects quotation type as : ${quotationType}`);
                await toClick(PageLocators.nextButton);
            }
            else if (InsurancePlan === "Medical & Health Insurance" && quotationType === "Family") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`user selects quotation type as : ${quotationType}`);
                await toClick(PageLocators.nextButton);
            } else {
                console.log(`For  ${InsurancePlan} no quatation type is available..`);
            }
        }
        else {
            console.log(`Unsupported quotation type ${quotationType} for ${InsurancePlan}`);
        }
    }
    async clickNewEzsubButton() {
        let profileType = excelValue()[process.env.caseID].Profile;
        if (profileType == 'New EzSub Profile') {
            await assertElementEnabled(`//p[text()='${profileType}']`,"Ezsub Profile button")
            await toClick(`//p[text()='${profileType}']`);
            console.log(`user selects profile type as : ${profileType}`);
        }
        else {
            console.log(`${profileType} is not yet Implemented`)
        }

    }
    async fillNRICnumber() {
        await assertElementVisible(PageLocators.NRICNumber,"NRIC input field")
        await clickAndSendkeys(PageLocators.NRICNumber, excelValue()[process.env.caseID].NRIC_Number)
    }
    async fillSalutation() {
        await assertElementVisible(PageLocators.salutation,"Salutation input field")
        await toClick(PageLocators.salutation);
    }
    async selectSalutation() {
        let salutation = excelValue()[process.env.caseID].Salutation
        await clickByRole('option', { name: salutation, exact: true });
    }
    async EnterlastName() {
        await getByTextIDClick('lastName', excelValue()[process.env.caseID].lastname);
    }
    async EnterfirstName() {
        await clickAndSendkeys(PageLocators.firstName, excelValue()[process.env.caseID].firstname)
        await assertElementVisible(PageLocators.firstName,"Firstname and lastname input field")
    }
   

    async EnterDOB() {
        await assertElementVisible(PageLocators.DOBfield,"Date of Birth field")
        await toClick(PageLocators.DOBfield);
        await sleep(2000);
        await yearSelection(excelValue()[process.env.caseID].year);
        await MonthSelection(excelValue()[process.env.caseID].Month);
        await DateSelection(excelValue()[process.env.caseID].Date);
    }
    async occupation() {
        await assertElementVisible(PageLocators.occupationID,"Occupation ID field")
        await toClick(PageLocators.occupationID);
        let occupationID=excelValue()[process.env.caseID].occupationID;
        await clickByRole('option', { name: occupationID })
        console.log(`Selected occupation ID is ${occupationID}`)
    
    }
}
module.exports = { CustomerSelection }