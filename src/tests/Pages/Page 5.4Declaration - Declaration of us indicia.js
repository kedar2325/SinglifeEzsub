const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys, assertParticularText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();
const { excelValue } = require('../Helper/Helper');

const PageLocators={
// Declaration US Indicia Title
usIndiciaTitle:"//p[normalize-space()='Declaration of US Indicia']",
//IndiciaOptions

//Link for OptionY
indiciaDeclaration:"//p[contains(text(),'Please complete the United States of America (US) ')]",

//nextButton
nextButton:"//button[normalize-space()='Next']"
}

class DeclarationUsIndicia{

    async verifyDeclarationUsIndiciaTitle(){
        console.log("now declaration title check")
            await assertText(PageLocators.usIndiciaTitle,"Declaration of US Indicia");
        }
    async clickIndiciaOption(){
        console.log("click indicia func")
        console.log(excelValue()[pageObject.case].indicaoption)
        let indicaoption = excelValue()[pageObject.case].indicaoption
        if(indicaoption.includes("Yes")){
            await Click(`//p[normalize-space()='${indicaoption}']`)
            await assertParticularText(PageLocators.indiciaDeclaration,"Please complete the United States of America (US) ")
        }
        else{
            await Click(`//p[normalize-space()='${indicaoption}']`)
        }
        
        

    }
    async clickNextButton(){
            await Click(PageLocators.nextButton);
        }  

}
module.exports={DeclarationUsIndicia}

//p[text()='You are not allowed to buy a product with cash value if you are a US person and have one or more US Indicia']
//button[normalize-space()='Cancel']