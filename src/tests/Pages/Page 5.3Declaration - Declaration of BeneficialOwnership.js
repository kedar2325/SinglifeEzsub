const { expect } = require('@playwright/test');
const { Click, assertText, sleep, clickAndSendkeys, toClick, clickByRole, GetByText_Click } = require('../Helper/Action');
const { yearSelection,MonthSelection,DateSelection } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

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
        await sleep(2000);
        await assertText(PageLocators.beneficialOwnershipTitle,"Declaration of Beneficial Ownership");
    }
    async clickBeneficialOwnerOption(){
        let beneficialoption = process.env.beneficial_owner
        console.log(beneficialoption)
        if(beneficialoption.includes("Yes")){
            await Click(`//p[normalize-space()='Declaration of Beneficial Ownership']/following::p[text()='${beneficialoption}']`)
            await clickAndSendkeys(PageLocators.beneficialLastName1,process.env.bo1_lastname)
            await clickAndSendkeys(PageLocators.beneficialFirstName1,process.env.bo1_firstname)
            await Click(PageLocators.beneficialDob1)
            await yearSelection();
            await MonthSelection();
            await DateSelection();
            await clickAndSendkeys(PageLocators.beneficialNRIC1,process.env.bo1_nricno)
            await Click(PageLocators.beneficialNationality_Click1)
            let nationality = process.env.bo1_nationality
            await Click(`(//div[text()='${nationality}'])[1]`)
            //await clickByRole('button', { name: 'Yes, proceed' })
            console.log("clicked")
            await Click(PageLocators.beneficialOwnerRelationship1)
            let relationship = process.env.bo1_relationship
            await Click(`//div[contains(text(),'${relationship}')]`)
            await clickAndSendkeys(PageLocators.beneficialOwnerPostalcode1,process.env.bo1_postalcode)
           
            await Click(PageLocators.beneficialaddress_searchbtn1)
            await sleep(2000); 
            await clickAndSendkeys(PageLocators.beneficialUnitNo1,process.env.bo1_unitno)
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