const { expect } = require('@playwright/test');
const { Click, assertText, sleep, clickAndSendkeys, toClick, clickByRole, GetByText_Click } = require('../Helper/Action');
const { yearSelection,MonthSelection,DateSelection } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();
const { excelValue } = require('../Helper/Helper');

const PageLocators={
//BeneficialOwnershipTitle
beneficialOwnershipTitle:"//p[normalize-space()='Declaration of Beneficial Ownership']",
//benficialOwneroption
beneficialOwnershipN:"(//div[@data-testid='radio-items'])[1]",
beneficialOwnershipY:"(//div[@data-testid='radio-items'])[2]",

//Beneficial Details for option yes
beneficialLastName1:"//input[@name='lastName']",
beneficialFirstName1:"//input[@name='firstName']",
beneficialDob1:"//input[@name='dob']",
beneficialNRIC1:"//input[@name='securityNumber']",
beneficialNationality_Click1:"//div[@class='css-1arx8z6-indicatorContainer']//img",
beneficialOwnerRelationship1: "//div[@id='relationship']//img",
beneficialOwnerPostalcode1:"//input[@name='resAddress.postalCode']",
beneficialCountry:"//div[@id='resAddress.countryCode']",
beneficialStreetNo:"//input[@name='resAddress.blockStreetNo']",
beneficialStreetName:"//input[@name='resAddress.streetName']",
beneficialaddress_searchbtn1: "//button[normalize-space()='Search']",
beneficialUnitNo1:"//input[@name='resAddress.unitNo']",
beneficialBuildingName:"//input[@name='resAddress.buildingName']",

//Click on Next
nextButton:"//button[normalize-space()='Next']"

}
class DeclarationBeneficialOwnership{

    async verifyBeneficialOwnershipTitle(){
        console.log("now in page5.3 title exists")
        await sleep(2000);
        await assertText(PageLocators.beneficialOwnershipTitle,"Declaration of Beneficial Ownership");
    }
    async clickBeneficialOwnerOption(){
        console.log("beneficial option selection exits")
        // console.log(excelValue()[process.env.caseID].beneficial_owner);
        // console.log(excelValue()[process.env.caseID].bo1_firstname);
        // console.log(excelValue()[process.env.caseID].bo1_lastname);
        // console.log(excelValue()[process.env.caseID].bo1_nricno);
        let beneficialoption = excelValue()[process.env.caseID].beneficial_owner;
        let beneficialFirstName = excelValue()[process.env.caseID].bo1_firstname;
        let beneficialLastName = excelValue()[process.env.caseID].bo1_lastname;
        let beneficalNRICNum = excelValue()[process.env.caseID].bo1_nricno;
        console.log(beneficialoption)
        console.log(beneficialFirstName)
        console.log(beneficialLastName)
        console.log(beneficalNRICNum)
        if(beneficialoption.includes("Yes")){
            await Click(`//p[normalize-space()='Declaration of Beneficial Ownership']/following::p[text()='${beneficialoption}']`)
            await clickAndSendkeys(PageLocators.beneficialLastName1,beneficialFirstName)
            await clickAndSendkeys(PageLocators.beneficialFirstName1,beneficialLastName)
            await Click(PageLocators.beneficialDob1)
            await yearSelection();
            await MonthSelection();
            await DateSelection();
            await clickAndSendkeys(PageLocators.beneficialNRIC1,beneficalNRICNum)
            await Click(PageLocators.beneficialNationality_Click1)
            let nationality = excelValue()[process.env.caseID].bo1_nationality;
            await Click(`(//div[text()='${nationality}'])[1]`)
            //await clickByRole('button', { name: 'Yes, proceed' })
            console.log("clicked")
            await Click(PageLocators.beneficialOwnerRelationship1)
            let relationship = excelValue()[process.env.caseID].bo1_relationship;
            await Click(`//div[contains(text(),'${relationship}')]`)
            let postalCode = excelValue()[process.env.caseID].bo1_postalcode;
            await clickAndSendkeys(PageLocators.beneficialOwnerPostalcode1,process.env.bo1_postalcode);
           
            await Click(PageLocators.beneficialaddress_searchbtn1)
            await sleep(2000); 
            let unitNo = excelValue()[process.env.caseID].bo1_unitno;
            await clickAndSendkeys(PageLocators.beneficialUnitNo1,unitNo)
 }
 else{
    await Click(`//p[normalize-space()='Declaration of Beneficial Ownership']/following::p[text()='${beneficialoption}']`)
 }
        
       
    }
    async clickNextButton(){
        await Click(PageLocators.nextButton);
    }

}
module.exports={DeclarationBeneficialOwnership}