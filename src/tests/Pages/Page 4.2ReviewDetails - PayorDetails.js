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
    verifyPayerDetails: "//span[contains(text(),'Are you paying for this policy?')]",
    //ThirdParty Details
    LastOrFamilyName: "//input[@name='payorFamilyName']",
    FirstOrGivenName: "//input[@name='payorFirstName']",
    PayerRelationship: "#react-select-51-placeholder",
    PayerType: "#react-select-52-placeholder",
    ReasonForPaying: "#react-select-53-placeholder"

    
}

class PayorDetails{
    constructor(page){
        pageObject.page=page;
    }
    async verifyPage(){
        await assertText(PageLocators.verifyPayerDetails, "Are you paying for this policy?"); 
    }
    /*async payerYes(){
        await toClick(PageLocators.payerDetails);
    }*/
    async  PayingPolicy(SelectPayingPolicy) {
        let Elements;
        switch (SelectPayingPolicy) {
            case "No":
                Elements="(//div[@data-testid='radio-items'])[1]";
                await toClick(Elements);
                break;
            case "Yes":
                Elements="(//div[@data-testid='radio-items'])[2]";
                await toClick(Elements);
                break;
            default:
                console.log("Invalid Selection");
        }
    }

    async  sourceWealth(SelectSourceOfWealth) {
        let Element;
        switch (SelectSourceOfWealth) {
            case "Employment/Trade Income":
                Element="(//img[@id='tick_icon'])[1]";
                await toClick(Element);
                break;
            case "Rental Income":
                Element="(//img[@id='tick_icon'])[2]";
                await toClick(Element);
                break;
            case "Investment Income":
                Element="(//img[@id='tick_icon'])[3]";
                await toClick(Element);
                break;
            case "Rental Income":
                Element="(//img[@id='tick_icon'])[4]";
                await toClick(Element);
                break;
            default:
                console.log("Unknown Selection");
        }
    }
    async sourceFunds(SelectSourceOfFunds){
        let ElementOfFund
        switch(SelectSourceOfFunds){
            case "Employment/Trade Income":
                ElementOfFund="(//img[@id='tick_icon'])[5]";
                await toClick(Element);
                break;
            case "Sales of Property":
                ElementOfFund="(//img[@id='tick_icon'])[6]";
                await toClick(Element);
                break;
            case "Savings":
                ElementOfFund="(//img[@id='tick_icon'])[1]";
                await toClick(Element);
                break;
            case "Maturity or Surrender of Policy":
                ElementOfFund="(//img[@id='tick_icon'])[1]";
                await toClick(Element);
                break;
            case "Others, please specify":
                ElementOfFund="(//img[@id='tick_icon'])[1]";
                await toClick(Element);
                break;
            default:
                console.log("Unknown Selection");

        }
        
    }
    async button(){
        await toClick(PageLocators.nextBtn);
    }
    async verifyInitialPremiumPage(){ 
        await assertText(PageLocators.verifyInitialPremiumPage, "Initial Premium Payment");
    }
}
module.exports={PayorDetails}
     