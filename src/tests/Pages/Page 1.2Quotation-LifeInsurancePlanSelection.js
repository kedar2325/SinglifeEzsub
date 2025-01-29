const { clickAndSendkeys,Click, launchURL,  assertParticularText, toClick, GetByText_Click, sleep } = require('../Helper/Action');
require('dotenv').config();
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');

const PageLocators={
    NewQuatation:"//p[contains(text(), 'New Quotation')]/following-sibling::button",
    startQuatationButton:"//button[contains(text(), 'Start quotation')]",
    yesProceedButton:"//button[contains(text(), 'Yes, proceed')]",
}
class PlanSelection{
    constructor(page){
        pageObject.page=page;
    }
 
    async  NewQuatation() {
        await toClick(PageLocators.NewQuatation)
    }
    async  InsuranceType() {
        let InsuraceType=excelValue()[0].InsurancePlan;
        await toClick(`//p[text()= '${InsuraceType}']`);
        console.log(`${InsuraceType} is Selected`);
    }
    async ClickStartQuatation(){
        await toClick(PageLocators.startQuatationButton);
    }
    async ClickYesProceedButton(){
        await toClick(PageLocators.yesProceedButton);
    }
}
module.exports={PlanSelection}