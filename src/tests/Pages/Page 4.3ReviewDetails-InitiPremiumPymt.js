const { clickAndSendkeys, launchURL, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    initialPremiumPayment: "(//p[contains(text(),'Credit Card')])[1]",
    sourceOfWealth : "(//img[@id='tick_icon'])[2]",
    sourceOfFunds: "(//img[@id='tick_icon'])[5]",
    nextBtn: "//button[contains(text(),'Next')]"
    
}

class ReviewDetails{
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
module.exports={ReviewDetails}
     