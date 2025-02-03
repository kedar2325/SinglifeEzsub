const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys } = require('../Helper/Action');
const { sleep } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    //Page title to verify on page
clientAcknowledgementTitle: "//p[contains(text(),'Let’s stay in touch - on your terms')]",
//Let’s stay in touch - on your terms options yes and No
marketingConsentY: "//input[@id='radioGroupOtionY']",
marketingConsentN: "//input[@id='radioGroupOtionN']",
//edocuments used index path
eDocN: "(//div[@data-testid='radio-items'])[1]",
eDocY: "(//p[normalize-space()='Yes'])[1]",

//Update Contact details
contactEmailID: "(//input[@autocomplete='off'])[1]",
contactMobileCode: "//input[@placeholder='Select']",
contactMobileNumber: "(//input[@type='normal'])[2]",

//Next Button
nextButton:"//button[normalize-space()='Next']"


}
class ClientAcknowledgement{
async verifyClientAcknowledgement(){ 
        await sleep(2000);
        await assertText(PageLocators.clientAcknowledgementTitle, "Let’s stay in touch - on your terms");
    }

async clickMarketingConsentY(){
    await Click(PageLocators.marketingConsentY);
}
async clickMarketingConsentN(){
    await Click(PageLocators.marketingConsentN);
}

async eDocY(){
    await Click(PageLocators.eDocY)
}
async eDocN(){
    await Click(PageLocators.eDocN)
}
async EnterContactEmailId(){
    await clickAndSendkeys(PageLocators.contactEmailID,process.env.contactEmailID)
}

async EnterMobileCode(){
     await Click(PageLocators.contactMobileCode); 
    await expect(dropDownList).toHaveValue(process.env.contactMobileCode);
}
async EnterContactMobileNo(){
    await clickAndSendkeys(PageLocators.contactMobileNumber,process.env.contactMobileNumber);
}
async ClickNextButton(){
    await Click(PageLocators.nextButton);
}
}
module.exports={ClientAcknowledgement}
