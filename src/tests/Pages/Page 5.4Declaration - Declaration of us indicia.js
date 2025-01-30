const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
// Declaration US Indicia Title
usIndiciaTitle:"//p[normalize-space()='Declaration of US Indicia']",
//IndiciaOptions
indiciaOptionN:"(//div[@data-testid='radio-items'])[1]",
indiciaOptionY:"(//div[@data-testid='radio-items'])[2]",

//Link for OptionY
indiciaDeclaration:"//u[normalize-space()='https://www.singlife.com/en/fatca/']",

//nextButton
nextButton:"//button[normalize-space()='Next']"
}

class DeclarationUsIndicia{

    async verifyDeclarationUsIndiciaTitle(){
            await assertText(PageLocators.usIndiciaTitle,"Declaration of US Indicia");
        }
    async clickIndiciaOptionN(){
        await Click(PageLocators.indiciaOptionN)
    }
    async clickNextButton(){
            await Click(PageLocators.nextButton);
        }  

}
module.exports={DeclarationUsIndicia}