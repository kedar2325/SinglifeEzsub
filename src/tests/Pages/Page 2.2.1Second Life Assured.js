const { clickAndSendkeys, getByTextIDClick, getCurrentMonthName, launchURL, assertParticularText, toClick, GetByText_Click, sleep, clickByRole, doubleClick } = require('../Helper/Action');
const { yearSelection,MonthSelection,DateSelection } = require('../Helper/Helper');
require('dotenv').config();
const { pageObject } = require('../Hooks/PageObjects');

const PageLocators = {
    NRICNumber: "//input[@name='securityNumber']",
    salutationID: "#salutationCode img",
    firstName: "input[name='firstName']",
    DOB: "//input[@name='dob']",
    occupationID: "#occupationCode",
    smokingstatus: " //p[normalize-space()='Non-smoker']",
    nationality_click: "//div[@id='nationalityCode']//img",
    countryofresidence_click: "//div[@id='residenceCountryCode']//img[@class='sc-afc5380d-0 ekTQMr']",
    residencystatus: "//div[@id='residencyStatusCodeQuotation']//img[@class='sc-afc5380d-0 ekTQMr']",
    assuredRelationship:"//div[@id='relationship']//img",
    next_btn: "//button[text()='Next']",
    verifyProductSelectionPage: "//p[contains(text(),'Product selection for')]"

}

class CustomerInformation {
    constructor(page) {
        pageObject.page = page;
    }

    async clickNewEzsubButton() {
        let profileType = process.env.ProfileTypeSelection;
        if (profileType == 'New EzSub Profile') {
            await toClick(`//p[text()='${profileType}']`);
            console.log(`${profileType} is Selected`);
        }
        else {
            console.log(`${profileType} is not yet Implemented`)
        }

    }

    async fillNRICnumber() {
            await clickAndSendkeys(PageLocators.NRICNumber, process.env.NRICField)
        }
    async fillSalutation() {
            await toClick(PageLocators.salutationID);
        }
    async selectSalutation() {
            let salutationID = process.env.SalutationValue
            await clickByRole('option', { name: salutationID, exact: true });
        }
    async EnterlastName() {
            await getByTextIDClick('lastName', process.env.Last_Name);
        }
    async EnterfirstName() {
            await clickAndSendkeys(PageLocators.firstName, process.env.First_Name)
        }

    async EnterDOB() {
            await toClick(PageLocators.DOB);
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

    async SmokingStatus(){
            await sleep(2000);
            let smoking_status = process.env.smokingstatus
            await toClick(`//p[normalize-space()='${smoking_status}']`)
            
        }
    
    async SelectNationality(){
            await sleep(2000);
            await toClick(PageLocators.nationality_click);
            let nationality=process.env.nationality;
            await toClick(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`);
            console.log(`User selected nationality is ${nationality}`)
        }

    async SelectCountryofBirth(){
        await sleep(2000);
            let countryofresidence = process.env.countryOfResidence
            await toClick(PageLocators.countryofresidence_click)
            await toClick(`//div[@id='residenceCountryCode']//div[contains(text(),'${countryofresidence}')]`)
            console.log(`${countryofresidence} is Selected`);
            
    
        }
       
    async SelectResidencyStatus(){
        await sleep(2000);
            await toClick(PageLocators.residencystatus);
            let residency_status = process.env.residencyStatus
            await toClick(`//div[@id='residencyStatusCodeQuotation']//div[text()='${residency_status}']`)
            console.log(`${residency_status} is Selected`);
    
            //await toClick(PageLocators.residencystatus_permanent);
        }
    // async VerifyResidencyStatus(){
    //         let residency_status = process.env.residencyStatus
    //         await assertText(`//div[contains(text(),'${residency_status}')]`,process.env.residencyStatus);
    //         console.log("ih")
    // }
    async SelectRelationship(){
        await sleep(2000);
        await toClick(PageLocators.assuredRelationship);
        let assured_relationship = process.env.assured_relationship
        await toClick(`//div[@id='relationship']//div[text()='${assured_relationship}']`)
        console.log(`${assured_relationship} is Selected`);
    }

    async ClickNextButton(){
        await toClick(PageLocators.next_btn);
        await toClick(PageLocators.next_btn);
    }
    async VerifyProductPage(){
        await assertText(PageLocators.verifyProductSelectionPage, "Product selection for"); 

    }
}module.exports={CustomerInformation}