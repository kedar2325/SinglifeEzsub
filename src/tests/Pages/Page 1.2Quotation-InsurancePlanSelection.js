const { clickAndSendkeys,Click, launchURL,  assertParticularText, toClick, GetByText_Click, sleep, assertElementVisible, assertElementEnabled } = require('../Helper/Action');
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
        let InsuraceType=excelValue()[process.env.caseID].InsurancePlan;
        await assertElementVisible(`//p[text()= '${InsuraceType}']`,"Insurance Field");
        await toClick(`//p[text()= '${InsuraceType}']`);
        console.log(`user selects Insurance type as : ${InsuraceType}`);
        
    }
    async ClickStartQuatation(){
        await assertElementEnabled(PageLocators.startQuatationButton,"Start quotation button");
        await toClick(PageLocators.startQuatationButton);
    }
    async ClickYesProceedButton(){
        await assertElementEnabled(PageLocators.yesProceedButton,"Yes proceed button");
        await toClick(PageLocators.yesProceedButton);
    }
}
module.exports={PlanSelection}