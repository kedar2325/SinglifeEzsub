const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys, assertParticularText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    //Declaration Page exits check
    declarationPoliticallyTitle:"//p[contains(text(),'Declaration of Politically Exposed Person (PEP) an')]",
    //Declaration Option
    politicallyExposedPersonN:"(//div[@data-testid='radio-items'])[1]",
    politicallyExposedPersonY:"(//div[@data-testid='radio-items'])[2]",

    //Details for polictically exposed yes
    nameOfPEP:"//input[@name='name']",
    relationshipToAssured:"//div[@id='relationship']",

    //Next Button
    nextButton:"//button[normalize-space()='Next']"

}
class DeclarationPolitically{

    async verifyDeclarationPoliticallyTitle(){
        await assertParticularText(PageLocators.declarationPoliticallyTitle,"Declaration of Politically Exposed Person (PEP) and/or Close Associate");
    }
    async clickPoliticallyExposedPersonN(){
        await Click(PageLocators.politicallyExposedPersonN);
    }
    async clickNextButton(){
        await Click(PageLocators.nextButton);
    }
}
module.exports={DeclarationPolitically}