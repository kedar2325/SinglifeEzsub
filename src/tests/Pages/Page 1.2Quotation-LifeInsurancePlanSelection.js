const { clickAndSendkeys,Click, launchURL,  assertParticularText, toClick, GetByText_Click, sleep } = require('../Helper/Action');
require('dotenv').config();

const PageLocators={
    username:"#okta-signin-username",
    password:"#okta-signin-password",
    loginButton:"//input[@type='submit']",
    homeGreetText:"//p[contains(text(), '👋 Welcome, ')]",
    NewQuatation:"//p[contains(text(), 'New Quotation')]/following-sibling::button",
    startQuatationButton:"//button[contains(text(), 'Start quotation')]",
    yesProceedButton:"//button[contains(text(), 'Yes, proceed')]",
}
class PlanSelection{
    async validLogin(){
       await launchURL(process.env.url);
        await clickAndSendkeys(PageLocators.username,process.env.LoginID);
         await clickAndSendkeys(PageLocators.password,process.env.Password);
         await Click(PageLocators.loginButton)
          await assertParticularText(PageLocators.homeGreetText,"👋 Welcome, ")
          sleep(3000);
       
    }
    async  NewQuatation() {
        await toClick(PageLocators.NewQuatation)
    }
    async  InsuranceType(InsurancePlan) {
        switch (InsurancePlan) {
            case "Life Insurance":
                await GetByText_Click("Life Insurance");
                break;
            case "CareShield":
                await GetByText_Click("CareShield");
                break;
            case "ElderShield":
                await GetByText_Click("ElderShield");
                break;
            case "Medical&Health Insurance":
                await GetByText_Click("Medical&Health Insurance");
                break;
            case "Accident Guard":
                await GetByText_Click("Accident Guard");
                break;
            case "Dementia Cover":
                await GetByText_Click("Dementia Cover");
                break;
            default:
                console.log("Unknown Insurance Plan");
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