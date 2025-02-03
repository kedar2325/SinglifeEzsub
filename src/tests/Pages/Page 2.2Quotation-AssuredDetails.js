
const { clickByRole,clickAndSendkeys, sleep, toClick, assertText, Click, getByTextIDClick, waitSelector, assertElementVisible, assertElementEnabled } = require('../Helper/Action');
const { excelValue, yearSelection, MonthSelection, DateSelection } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();


const PageLocators={
    NRICNumber: "//input[@name='securityNumber']",
    salutationID: "#salutationCode img",
    firstName: "input[name='firstName']",
    DOB: "//input[@name='dob']",
    occupationID: "#occupationCode",
    smokingstatus: " //p[normalize-space()='Non-smoker']",
    nationality_click: "//div[@id='nationalityCode']//img",
    countryofresidence_click: "//div[@id='residenceCountryCode']//img[@class='sc-afc5380d-0 ekTQMr']",
    residencystatus: "//div[@id='residencyStatusCodeQuotation']//img[@class='sc-afc5380d-0 ekTQMr']",
    next_btn: "//button[text()='Next']",
    assuredRelationship:"//div[@id='relationship']//img",
     verifyProductSelectionPage: "//p[contains(text(),'Product selection for')]"
}

class QuotationSelectNationaliandResidency{
    constructor(page){
        pageObject.page=page;
    }
    async SmokingStatus(){
        await sleep(1000);
        let smoking_status = excelValue()[process.env.caseID].smokingstatus
        await assertElementEnabled(`//p[normalize-space()='${smoking_status}']`,"Smoking status button")
        await toClick(`//p[normalize-space()='${smoking_status}']`)
        
    }
    async SelectNationality(){
        await sleep(1000);
        await Click(PageLocators.nationality_click);
        let nationality=excelValue()[process.env.caseID].nationality;
        await assertElementVisible(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`,"Nationality input field")
        await Click(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`);
        console.log(`User selected nationality is ${nationality}`)
    }
    async SelectCountryofBirth(){
        await sleep(1000);
        let countryofresidence = excelValue()[process.env.caseID].countryOfResidence
        await assertElementVisible(PageLocators.countryofresidence_click,"Country of Residence input")
        await Click(PageLocators.countryofresidence_click)
        await toClick(`//div[@id='residenceCountryCode']//div[contains(text(),'${countryofresidence}')]`)
        console.log(`${countryofresidence} is Selected`);
    }
   
    async SelectResidencyStatus(){
        await sleep(1000);
        await assertElementVisible(PageLocators.residencystatus,"Residencystatus")
        await toClick(PageLocators.residencystatus);
        let residency_status = excelValue()[process.env.caseID].residencyStatus
        await toClick(`//div[@id='residencyStatusCodeQuotation']//div[text()='${residency_status}']`)
        console.log(`${residency_status} is Selected`);
    }
    async VerifyResidencyStatus(){
        await sleep(1000);
        let residency_status = excelValue()[process.env.caseID].residencyStatus
        await assertText(`//div[contains(text(),'${residency_status}')]`,excelValue()[process.env.caseID].residencyStatus);
        await toClick(PageLocators.next_btn);
        await sleep(2000);
         await Click(PageLocators.next_btn);
    }
    async VerifySecondAssured(){
        if(excelValue()[process.env.caseID]!='Self'){
            console.log("Complete second assured details");
            let profileType = excelValue()[process.env.caseID].ProfileTypeSelection;
            if (profileType == 'New EzSub Profile') {
                await assertElementEnabled(`//p[text()='${profileType}']`,"Ezsub Profile button")
                await toClick(`//p[text()='${profileType}']`);
                console.log(`${profileType} is Selected`);
            }
            else {
                console.log(`${profileType} is not yet Implemented`)
            }
               await assertElementVisible(PageLocators.NRICNumber,"NRIC input field")
             await clickAndSendkeys(PageLocators.NRICNumber, excelValue()[process.env.caseID].NRICField)
             
             await toClick(PageLocators.salutationID);
              let salutationID = excelValue()[process.env.caseID].SalutationValue
              await clickByRole('option', { name: salutationID, exact: true });
              await getByTextIDClick('lastName', excelValue()[process.env.caseID].Last_Name);
                await assertElementVisible(PageLocators.firstName,"Firstname and lastname input field")
            await clickAndSendkeys(PageLocators.firstName, excelValue()[process.env.caseID].First_Name);
           await assertElementVisible(PageLocators.DOBfield,"Date of Birth field")
            await toClick(PageLocators.DOB);
            await sleep(2000);
            await yearSelection(excelValue()[process.env.caseID].SecondLAyear);
            await MonthSelection(excelValue()[process.env.caseID].SecondLAmonth);
            await DateSelection(excelValue()[process.env.caseID].SecondLAdate);
              await assertElementVisible(PageLocators.occupationID,"Occupation ID field")
            await toClick(PageLocators.occupationID);
            let occupationID=excelValue()[process.env.caseID].occupationID;
            await clickByRole('option', { name: occupationID })
            console.log(`Selected occupation ID is ${occupationID}`)
            await sleep(2000);
            let smoking_status = excelValue()[process.env.caseID].smokingstatus
            await assertElementEnabled(`//p[normalize-space()='${smoking_status}']`,"Smoking status button")
            await toClick(`//p[normalize-space()='${smoking_status}']`)
            await sleep(2000);
            await toClick(PageLocators.nationality_click);
            let nationality=excelValue()[process.env.caseID].nationality;
            await assertElementVisible(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`,"Nationality input field")
            await toClick(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`);
            console.log(`User selected nationality is ${nationality}`)
            await sleep(2000);
            let countryofresidence = excelValue()[process.env.caseID].countryOfResidence
            await assertElementVisible(PageLocators.countryofresidence_click,"Country of Residence input")
            await toClick(PageLocators.countryofresidence_click)
            await toClick(`//div[@id='residenceCountryCode']//div[contains(text(),'${countryofresidence}')]`)
            console.log(`${countryofresidence} is Selected`);
            await sleep(2000);
            await assertElementVisible(PageLocators.residencystatus,"Residencystatus")
            await toClick(PageLocators.residencystatus);
            let residency_status = excelValue()[process.env.caseID].residencyStatus
           
            await toClick(`//div[@id='residencyStatusCodeQuotation']//div[text()='${residency_status}']`)
            console.log(`${residency_status} is Selected`);            
            await sleep(2000);
            await toClick(PageLocators.assuredRelationship);
            let assured_relationship = excelValue()[process.env.caseID].assured_relationship
            await toClick(`//div[@id='relationship']//div[text()='${assured_relationship}']`)
            console.log(`${assured_relationship} is Selected`);
            await toClick(PageLocators.next_btn);
            await sleep(4000);
            await toClick(PageLocators.next_btn);
            await assertText(PageLocators.verifyProductSelectionPage, "Product selection for");      
        }
        else{
            console.log("User selects Self quotation type so second life assured is no needed");
        }
    }

}

module.exports={QuotationSelectNationaliandResidency}