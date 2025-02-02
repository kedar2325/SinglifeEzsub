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
                    console.log("Page 5.5 Declaration Title exists check")
                }
        async enterDeclarationTabOne(){
            let singaporeButtonPathElement=excelValue()[pageObject.case].ResidentSingapore;
            let singaporeButtonPath=`//span[contains(text(),'I am a tax resident in Singapore')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${singaporeButtonPathElement}']`;

            console.log(singaporeButtonPath);

            await toClick(singaporeButtonPath);
            await sleep(1000);
            console.log(singaporeButtonPathElement)
            if(singaporeButtonPathElement=="Yes"){
            console.log("Enter ResidentSingapore loop after click yes")
            let NRIC_Number=excelValue()[pageObject.case].NRIC_Number
            //no need application should already populate NRIC
            //await clickAndSendkeys(PageLocators.tinNumberSingapore,NRIC_Number);
            console.log("Enter Nric worked");
            }else{
            console.log("Enter ResidentSingapore loop after click no")
            }
            let otherJurisdictionButtonPathElement=excelValue()[pageObject.case].TaxResidentInOtherJurisdictions;
            let otherJurisdictionButtonPath=`//span[contains(text(),'tax resident in other Jurisdictions')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${otherJurisdictionButtonPathElement}']`
            console.log(otherJurisdictionButtonPath);
            if(otherJurisdictionButtonPathElement=="Yes"){
            //When singapore resident No button app auto selects Yes no need to click
            if(singaporeButtonPathElement=="Yes"){
            await Click(otherJurisdictionButtonPath); 
            }
            let countryOfTaxResidenceElement=excelValue()[pageObject.case].CountryOfTaxResidence;
            let countryOfTaxResidence=`//div[@id=countryOfResidency']//div[text()='${countryOfTaxResidenceElement}']`
            console.log(countryOfTaxResidence);
            await Click(PageLocators.countryOfTaxResidence_click);
            await Click(countryOfTaxResidence);
            let otherTaxIdentificationButtonElement=excelValue()[pageObject.case].OtherTaxIdentificationNumber;
            let otherTaxIdentificationButton=`//span[contains(text(),'have a Tax Identification Number')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${otherTaxIdentificationButtonElement}']`
            await Click(otherTaxIdentificationButton);
            if(otherTaxIdentificationButtonElement=="Yes"){
            let tinNumberOtherJudisElement=excelValue()[pageObject.case].OtherJurisdictionNumber
            await clickAndSendkeys(PageLocators.tinNumberOtherJudis,tinNumberOtherJudisElement);
            }else{
            //already selected yes or no for tax resident
            // let otherTaxIdentificationButtonElement=excelValue()[pageObject.case].OtherTaxIdentificationNumber
            // let otherTaxIdentificationButton=`//span[contains(text(),'have a Tax Identification Number')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${otherTaxIdentificationButtonElement}']`    
            // await Click(otherTaxIdentificationButton);

            let selectReasonRadioElement=excelValue()[pageObject.case].JurisdictionReason
            let selectReasonRadioPath = `//p[contains(text(),'${selectReasonRadioElement}')]/parent::div/input[@type='radio']`
            await toClick(selectReasonRadioPath);
            await Click(PageLocators.checkboxTaxResidence);
            }
            }else{
            console.log("came to click no")
            await Click(otherJurisdictionButtonPath);
            await Click(PageLocators.checkboxTaxResidence);
            } 

        }
        async enterDeclarationTabTwo(){
            console.log("21")
            let secondSingaporeButtonPathElement=excelValue()[pageObject.case].SecondResidentSingapore;
            let secondSingaporeButtonPath=`//span[contains(text(),'I am a tax resident in Singapore')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.SecondResidentSingapore}']`
            console.log(secondSingaporeButtonPathElement);
            await toClick(secondSingaporeButtonPath);
            await sleep(1000);

            if(secondSingaporeButtonPathElement=="Yes"){
                console.log("22")
            console.log("Enter ResidentSingapore loop after click yes")
            let OtherNRIC_Number=excelValue()[pageObject.case].OtherJurisdictionNumber
            await clickAndSendkeys(PageLocators.tinNumberSingapore,OtherNRIC_Number);
            console.log("Enter Nric worked");
            }else{
            console.log("Enter ResidentSingapore loop after click no")
            }
            let secondOtherJurisdictionButtonPathElement=excelValue()[pageObject.case].SecondTaxResidentInOtherJurisdictions;
            let secondOtherJurisdictionButtonPath=`//span[contains(text(),'tax resident in other Jurisdictions')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${process.env.SecondTaxResidentInOtherJurisdictions}']`
            console.log(secondOtherJurisdictionButtonPath);
            if(secondOtherJurisdictionButtonPathElement=="Yes"){
            //When singapore resident No button app auto selects Yes no need to click
            if(secondSingaporeButtonPathElement=="Yes"){
            await Click(secondOtherJurisdictionButtonPath);
            }    
            let countryOfTaxResidenceElement=excelValue()[pageObject.case].SecondCountryOfTaxResidence;
            let countryOfTaxResidence=`//div[@id=countryOfResidency']//div[text()='${countryOfTaxResidenceElement}']`
            console.log(countryOfTaxResidence);
            await Click(PageLocators.countryOfTaxResidence_click);
            await Click(countryOfTaxResidence);
            let otherTaxIdentificationButtonElement=excelValue()[pageObject.case].SecondOtherTaxIdentificationNumber;
            let otherTaxIdentificationButton=`//span[contains(text(),'have a Tax Identification Number')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${otherTaxIdentificationButtonElement}']`
            await Click(otherTaxIdentificationButton);
            if(otherTaxIdentificationButtonElement=="Yes"){
            let tinNumberOtherJudisElement=excelValue()[pageObject.case].SecondOtherJurisdictionNumber
            await clickAndSendkeys(PageLocators.tinNumberOtherJudis,tinNumberOtherJudisElement);
            }else{
            //already selected yes or no for tax resident
            // let otherTaxIdentificationButtonElement=excelValue()[pageObject.case].OtherTaxIdentificationNumber
            // let otherTaxIdentificationButton=`//span[contains(text(),'have a Tax Identification Number')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${otherTaxIdentificationButtonElement}']`    
            // await Click(otherTaxIdentificationButton);

            let selectReasonRadioElement=excelValue()[pageObject.case].SecondJurisdictionReason
            let selectReasonRadioPath = `//p[contains(text(),'${selectReasonRadioElement}')]/parent::div/input[@type='radio']`
            await toClick(selectReasonRadioPath);
            await Click(PageLocators.checkboxTaxResidence);
            }
            }else{
            console.log("came to click no")
            await Click(secondOtherJurisdictionButtonPath);
            await Click(PageLocators.checkboxTaxResidence);
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