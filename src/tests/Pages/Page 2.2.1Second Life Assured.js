const { clickAndSendkeys, getByTextIDClick, getCurrentMonthName, launchURL, assertParticularText, toClick, GetByText_Click, sleep, clickByRole, doubleClick } = require('../Helper/Action');
const { yearSelection,MonthSelection,DateSelection } = require('../Helper/Helper');
const { excelValue } = require('../Helper/Helper');
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
        let profileType = excelValue()[pageObject.case].ProfileTypeSelection;
        if (profileType == 'New EzSub Profile') {
            await toClick(`//p[text()='${profileType}']`);
            console.log(`${profileType} is Selected`);
        }
        else {
            console.log(`${profileType} is not yet Implemented`)
        }

    }

    async fillNRICnumber() {
            await clickAndSendkeys(PageLocators.NRICNumber, excelValue()[pageObject.case].NRICField)
        }
    async fillSalutation() {
            await toClick(PageLocators.salutationID);
        }
    async selectSalutation() {
            let salutationID = excelValue()[pageObject.case].SalutationValue
            await clickByRole('option', { name: salutationID, exact: true });
        }
    async EnterlastName() {
            await getByTextIDClick('lastName', excelValue()[pageObject.case].Last_Name);
        }
    async EnterfirstName() {
            await clickAndSendkeys(PageLocators.firstName, excelValue()[pageObject.case].First_Name)
        }

    async EnterDOB() {
            await toClick(PageLocators.DOB);
            await sleep(2000);
            await yearSelection(excelValue()[pageObject.case].SecondLAyear);
            await MonthSelection(excelValue()[pageObject.case].SecondLAmonth);
            await DateSelection(excelValue()[pageObject.case].SecondLAdate);
        }
    async occupation() {
            await toClick(PageLocators.occupationID);
            let occupationID=excelValue()[pageObject.case].occupationID;
            await clickByRole('option', { name: occupationID })
            console.log(`Selected occupation ID is ${occupationID}`)
        }

    async SmokingStatus(){
            await sleep(2000);
            let smoking_status = excelValue()[pageObject.case].smokingstatus
            await toClick(`//p[normalize-space()='${smoking_status}']`)
            
        }
    
    async SelectNationality(){
            await sleep(2000);
            await toClick(PageLocators.nationality_click);
            let nationality=excelValue()[pageObject.case].nationality;
            await toClick(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`);
            console.log(`User selected nationality is ${nationality}`)
        }

    async SelectCountryofBirth(){
        await sleep(2000);
            let countryofresidence = excelValue()[pageObject.case].countryOfResidence
            await toClick(PageLocators.countryofresidence_click)
            await toClick(`//div[@id='residenceCountryCode']//div[contains(text(),'${countryofresidence}')]`)
            console.log(`${countryofresidence} is Selected`);
            
    
        }
       
    async SelectResidencyStatus(){
        await sleep(2000);
            await toClick(PageLocators.residencystatus);
            let residency_status = excelValue()[pageObject.case].residencyStatus
            await toClick(`//div[@id='residencyStatusCodeQuotation']//div[text()='${residency_status}']`)
            console.log(`${residency_status} is Selected`);
    
            //await toClick(PageLocators.residencystatus_permanent);
        }
    // async VerifyResidencyStatus(){
    //         let residency_status = excelValue()[0].residencyStatus
    //         await assertText(`//div[contains(text(),'${residency_status}')]`,excelValue()[0].residencyStatus);
    //         console.log("ih")
    // }
    async SelectRelationship(){
        await sleep(2000);
        await toClick(PageLocators.assuredRelationship);
        let assured_relationship = excelValue()[pageObject.case].assured_relationship
        await toClick(`//div[@id='relationship']//div[text()='${assured_relationship}']`)
        console.log(`${assured_relationship} is Selected`);
    }

    async ClickNextButton(){
        await toClick(PageLocators.next_btn);
        console.log("Next button is Clicked");
        await sleep(4000);
        await toClick(PageLocators.next_btn);
        console.log("Next button is Clicked");
    }
    async VerifyProductPage(){
        await assertText(PageLocators.verifyProductSelectionPage, "Product selection for"); 

    }
}module.exports={CustomerInformation}