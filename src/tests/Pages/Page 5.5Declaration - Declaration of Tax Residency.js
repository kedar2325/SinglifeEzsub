const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
// Declaration US Indicia Title
declarationTaxResidencyTitle:"//p[normalize-space()='Declaration of Tax Residency under CRS']",

//Singapore Tax Resident
singaporeTaxResidentN:"(//div[@data-testid='radio-items'])[1]",
singaporeTaxResidentY:"(//div[@data-testid='radio-items'])[2]",
tinNumber:"//input[@name='tin']",

//tax resident other jurisdictions
otherJurisdictionsN:"(//div[@data-testid='radio-items'])[3]",
otherJurisdictionsY:"(//div[@data-testid='radio-items'])[4]",

// jurisdictions Y below ques
countryOfTaxResidency:"(//div[@id='countryOfResidency'])[1]",
tinOptionN:"(//div[@data-testid='radio-items'])[5]",
tinOptionY:"(//div[@data-testid='radio-items'])[6]",
otherTinNumber:"//input[@name='tin'])[2]",

//checkbox provided all my tax residence
checkboxTaxResidence:"//img[@id='tick_icon']",

//nextButton
nextButton:"//button[normalize-space()='Next']"

}

class DeclarationTaxResidency{
        async verifyDeclarationTaxResidencyTitle(){
                    await assertText(PageLocators.declarationTaxResidencyTitle,"Declaration of Tax Residency under CRS");
                }
        async clickSingaporeTaxResidentY(){
            await Click(PageLocators.singaporeTaxResidentY);
        }
        async enterNricNumber(){
            await clickAndSendkeys(PageLocators.tinNumber,process.env.NRIC_Number)
        }
        async clickOtherJurisdictionsN(){
            await Click(PageLocators.otherJurisdictionsN);
        }
        async clickOtherJurisdictionsY(){
            await Click(PageLocators.otherJurisdictionsY);
        }
        async checkTaxResidence(){
            await Click(PageLocators.checkboxTaxResidence);
        }
        async clickNextButton(){
                   await Click(PageLocators.nextButton);
               } 
        }  
module.exports={DeclarationTaxResidency}