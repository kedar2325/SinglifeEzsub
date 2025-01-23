const { clickAndSendkeys, launchURL, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    payerDetails: "(//div[@data-testid='radio-items'])[2]",
    sourceOfWealth : "(//img[@id='tick_icon'])[1]",
    sourceOfFunds: "(//img[@id='tick_icon'])[7]",
    nextBtn: "//button[contains(text(),'Next')]"
    
}

class PayorDetails{
    async payer(){
        await Click(PageLocators.payerDetails);
    }
    async sourceWealth(){
        await Click(PageLocators.sourceOfWealth);
    }
    async sourceFunds(){
        await Click(PageLocators.sourceOfFunds);
    }
    async button(){
        await Click(PageLocators.nextBtn);
    }
}
module.exports={PayorDetails}
     