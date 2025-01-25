const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep,assertText, toClick, } = require('../Helper/Action');
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
    constructor(page){
        pageObject.page=page;
    }
    async verifyPage(){
        await assertText(PageLocators.verifyPayerDetails, "Are you paying for this policy?"); 
    }
    async payerYes(){
        await toClick(PageLocators.payerDetails);
    }
    async sourceWealth(){
        await toClick(PageLocators.sourceOfWealth);
    }
    async sourceFunds(){
        await toClick(PageLocators.sourceOfFunds);
    }
    async button(){
        await toClick(PageLocators.nextBtn);
    }
    async verifyInitialPremiumPage(){ 
        await assertText(PageLocators.verifyInitialPremiumPage, "Initial Premium Payment");
    }
}
module.exports={PayorDetails}
     