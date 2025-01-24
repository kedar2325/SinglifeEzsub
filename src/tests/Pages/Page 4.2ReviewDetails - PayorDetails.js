const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyInitialPremiumPage: "//p[contains(text(),'Initial Premium Payment')]",
    payerDetails: "(//div[@data-testid='radio-items'])[2]",
    sourceOfWealth : "(//img[@id='tick_icon'])[1]",
    sourceOfFunds: "(//img[@id='tick_icon'])[7]",
    nextBtn: "//button[contains(text(),'Next')]",
    verifyPayerDetails: "//span[contains(text(),'Are you paying for this policy?')]"
    
}

class PayorDetails{
    async verifyPage(){
        await assertText(PageLocators.verifyPayerDetails, "Are you paying for this policy?"); 
    }
    async payerYes(){
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
    async verifyInitialPremiumPage(){ 
        await assertText(PageLocators.verifyInitialPremiumPage, "Initial Premium Payment");
    }
}
module.exports={PayorDetails}
     