const { expect } = require('@playwright/test');
const { Click, assertText, sleep } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
//BeneficialOwnershipTitle
beneficialOwnershipTitle:"//p[normalize-space()='Declaration of Beneficial Ownership']",
//benficialOwneroption
beneficialOwnershipN:"(//div[@data-testid='radio-items'])[1]",
beneficialOwnershipY:"(//div[@data-testid='radio-items'])[2]",

//Beneficial Details for option yes
beneficialLastName:"//input[@name='lastName']",
beneficialFirstName:"//input[@name='firstName']",
beneficialDob:"//input[@name='dob']",
beneficialNRIC:"//input[@name='securityNumber']",
beneficialNationality:"(//div[@id='react-select-28-placeholder'])[1]",
beneficialOwnerAddress:"//input[@name='resAddress.postalCode']",
beneficialCountry:"//div[@id='resAddress.countryCode']",
beneficialStreetNo:"//input[@name='resAddress.blockStreetNo']",
beneficialStreetName:"//input[@name='resAddress.streetName']",
beneficialUnitNo:"//input[@name='resAddress.unitNo']",
beneficialBuildingName:"//input[@name='resAddress.buildingName']",

//Click on Next
nextButton:"//button[normalize-space()='Next']"

}
class DeclarationBeneficialOwnership{

    async verifyBeneficialOwnershipTitle(){
        await sleep(2000);
        await assertText(PageLocators.beneficialOwnershipTitle,"Declaration of Beneficial Ownership");
    }
    async clickPoliticallyExposedPersonN(){
        await Click(PageLocators.beneficialOwnershipN);
    }
    async clickNextButton(){
        await Click(PageLocators.nextButton);
    }

}
module.exports={DeclarationBeneficialOwnership}