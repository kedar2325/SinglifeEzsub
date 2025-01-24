const { clickAndSendkeys,Click, launchURL,  assertParticularText, toClick, GetByText_Click, sleep } = require('../Helper/Action');
require('dotenv').config();
const { pageObject } = require('../Hooks/PageObjects');

const PageLocators={
    username:"#okta-signin-username",
    password:"#okta-signin-password",
    loginButton:"//input[@type='submit']",
    homeGreetText:"//p[contains(text(), '👋 Welcome, ')]",
    NewQuatation:"//p[contains(text(), 'New Quotation')]/following-sibling::button",
    InsurancePlan:"//p[contains(text(), '",
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
    async  InsuranceType(InsurancePlan) {
        let Element;
        switch (InsurancePlan) {
            case "Life Insurance":
                Element="//p[contains(text(), 'Life Insurance')]";
                await toClick(Element);
                break;
            case "CareShield":
                Element="//p[contains(text(), 'CareShield')]";
                await toClick(Element);
                break;
            case "ElderShield":
                Element="//p[contains(text(), 'ElderShield')]";
                await toClick(Element);
                break;
            case "Medical&Health Insurance":
                Element="//p[contains(text(), 'Medical&Health Insurance')]";
                await toClick(Element);
                break;
            case "Accident Guard":
                Element="//p[contains(text(), 'Accident Guard')]";
                await toClick(Element);
                break;
            case "Dementia Cover":
                Element="//p[contains(text(), 'Dementia Cover')]";
                await toClick(Element);
                break;
            default:
                console.log(" Unknown Insurance Plan");
        }
    }
    async ClickStartQuatation(){
        await toClick(PageLocators.startQuatationButton);
    }
    async ClickYesProceedButton(){
        await toClick(PageLocators.yesProceedButton);
    }
}
module.exports={PlanSelection}