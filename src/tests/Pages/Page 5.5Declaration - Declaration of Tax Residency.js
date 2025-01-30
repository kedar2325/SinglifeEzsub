const { expect } = require('@playwright/test');
const { excelValue } = require('../Helper/Helper');
const { Click, assertText, clickAndSendkeys, sleep, toClick } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
const { Console } = require('console');
require('dotenv').config();

const PageLocators={
// Declaration US Indicia Title
declarationTaxResidencyTitle:"//p[normalize-space()='Declaration of Tax Residency under CRS']",

//Singapore Tax Resident
singaporeButtonPath:`//span[contains(text(),'I am a tax resident in Singapore')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.ResidentSingapore}']`,
secondSingaporeButtonPath:`//span[contains(text(),'I am a tax resident in Singapore')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.SecondResidentSingapore}']`,
//singaporeTaxResidentN:"(//div[@data-testid='radio-items'])[1]",
//singaporeTaxResidentY:"(//div[@data-testid='radio-items'])[2]",
tinNumberSingapore:"(//input[@name='tin'])[1]",
tinNumberOtherJudis:"(//input[@name='tin'])[2]",

//tax resident other jurisdictions
otherJurisdictionButtonPath:`//span[contains(text(),'tax resident in other Jurisdictions')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.TaxResidentInOtherJurisdictions}']`,
secondOtherJurisdictionButtonPath:`//span[contains(text(),'tax resident in other Jurisdictions')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.SecondTaxResidentInOtherJurisdictions}']`,
// otherJurisdictionsN:"(//div[@data-testid='radio-items'])[3]",
// otherJurisdictionsY:"(//div[@data-testid='radio-items'])[4]",

// jurisdictions Y below ques
//countryOfTaxResidency:"(//div[@id='countryOfResidency'])[1]",
//drop down country of residence
countryOfTaxResidence:`//div[@id=countryOfResidency']//div[text()='${process.env.CountryOfTaxResidence}']`,
countryOfTaxResidence_click:"//div[@id='countryOfResidency']",
secondCountryOfTaxResidence:`//div[@id=countryOfResidency']//div[text()='${process.env.SecondCountryOfTaxResidence}']`,
//tinOptionN:"(//div[@data-testid='radio-items'])[5]",
//tinOptionY:"(//div[@data-testid='radio-items'])[6]",
otherTinNumber:"//input[@name='tin'])[2]",
otherTaxIdentificationButton:`//span[contains(text(),'have a Tax Identification Number')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.OtherTaxIdentificationNumber}']`,
secondOtherTaxIdentificationButton:`//span[contains(text(),'have a Tax Identification Number')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.SecondOtherTaxIdentificationNumber}']`,
selectReasonRadio:`//p[contains(text(),'${process.env.JurisdictionReason}')]/parent::div/input[@type='radio']`,
secondSelectReasonRadio:`//p[contains(text(),'${process.env.SecondJurisdictionReason}')]/parent::div/input[@type='radio']`,
//checkbox provided all my tax residence
checkboxTaxResidence:"//img[@id='tick_icon']",

//nextButton
nextButton:"//button[normalize-space()='Next']"

}

class DeclarationTaxResidency{
        async verifyDeclarationTaxResidencyTitle(){
                    await assertText(PageLocators.declarationTaxResidencyTitle,"Declaration of Tax Residency under CRS");
                }
        async enterDeclarationTabOne(){
            console.log(PageLocators.singaporeButtonPath);
            await toClick(PageLocators.singaporeButtonPath);
            await sleep(1000);
            console.log(process.env.ResidentSingapore)
            if(process.env.ResidentSingapore=="Yes"){
            console.log("Enter ResidentSingapore loop after click yes")
            await clickAndSendkeys(PageLocators.tinNumberSingapore,process.env.NRIC_Number);
            console.log("Enter Nric worked");
            }else{
            console.log("Enter ResidentSingapore loop after click no")
            }
            console.log(PageLocators.otherJurisdictionButtonPath);
            if(process.env.TaxResidentInOtherJurisdictions=="Yes"){
            //When singapore resident No button app auto selects Yes no need to click
            if(process.env.ResidentSingapore=="Yes"){
            await Click(PageLocators.otherJurisdictionButtonPath); 
            }    
            console.log(countryOfTaxResidence);
            await Click(PageLocators.countryOfTaxResidence_click);
            await Click(PageLocators.countryOfTaxResidence);
            await Click(PageLocators.otherTaxIdentificationButton);
            if(process.env.OtherTaxIdentificationNumber=="Yes"){
            await clickAndSendkeys(PageLocators.tinNumberOtherJudis,process.env.OtherJurisdictionNumber);
            }else{
            await Click(PageLocators.otherTaxIdentificationButton);
            await toClick(PageLocators.selectReasonRadio);
            await Click(PageLocators.checkboxTaxResidence);
            }
            }else{
                console.log("came to click no")
            await toClick(PageLocators.otherJurisdictionButtonPath); 
            await Click(PageLocators.checkboxTaxResidence);
            } 

        }
        async enterDeclarationTabTwo(){
            console.log("21")
            console.log(PageLocators.singaporeButtonPath);
            await toClick(PageLocators.secondSingaporeButtonPath);
            await sleep(1000);
            if(process.env.ResidentSingapore=="Yes"){
                console.log("22")
            console.log("Enter ResidentSingapore loop after click yes")
            await clickAndSendkeys(PageLocators.tinNumberSingapore,process.env.SecondOtherJurisdictionNumber);
            console.log("Enter Nric worked");
            }else{
            console.log("Enter ResidentSingapore loop after click no")
            }
            console.log(PageLocators.secondOtherJurisdictionButtonPath);
            if(process.env.SecondTaxResidentInOtherJurisdictions=="Yes"){
            //When singapore resident No button app auto selects Yes no need to click
            if(process.env.SecondResidentSingapore=="Yes"){
            await Click(PageLocators.otherSecondTaxIdentificationButton); 
            }    
            console.log(countryOfTaxResidence);
            await Click(PageLocators.countryOfTaxResidence_click);
            await Click(PageLocators.secondCountryOfTaxResidence);
            await Click(PageLocators.secondOtherTaxIdentificationButton);
            if(process.env.OtherTaxIdentificationNumber=="Yes"){
            await clickAndSendkeys(PageLocators.tinNumberOtherJudis,process.env.SecondOtherJurisdictionNumber);
            }else{
            await Click(PageLocators.secondOtherTaxIdentificationButton);
            await toClick(PageLocators.secondSelectReasonRadio);
            }
            }else{
            await Click(PageLocators.secondOtherTaxIdentificationButton);
            await toClick(PageLocators.secondSelectReasonRadio);   
            } 
        }


        // async enterDeclarationTabTwo(){
        //     await Click(PageLocators.nextButton)
        //     await Click(PageLocators.secondSingaporeButtonPath);
        //     await sleep(1000);
        //     if(process.env.SecondResidentSingapore=="Yes"){
        //     await clickAndSendkeys(PageLocators.tinNumberSingapore,process.env.SecondNRIC_Number);
        //     }else{
        //     await Click(PageLocators.secondCountryOfTaxResidence);
        //     if(process.env.SecondTaxResidentInOtherJurisdictions=="Yes"){
        //     await toClick(secondCountryOfTaxResidence);
        //     await Click(secondOtherJurisdictionButtonPath);
        //     await sleep(1000);
        //     if(process.env.SecondOtherTaxIdentificationNumber=="Yes"){
        //     await clickAndSendkeys(PageLocators.tinNumberOtherJudis,process.env.SecondOtherJurisdictionNumber);
        //     }else{
        //     await toClick(PageLocators.secondSelectReasonRadio);
        //     }
        //     await Click(PageLocators.nextButton)
        // }
        // }
        // }
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