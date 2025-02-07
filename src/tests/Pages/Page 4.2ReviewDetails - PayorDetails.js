const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep,assertText, toClick, Click, } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyInitialPremiumPage: "//p[contains(text(),'Initial Premium Payment')]",
    //payerDetailsYes: "(//div[@data-testid='radio-items'])[2]",
    //payerDetailsNo: "(//div[@data-testid='radio-items'])[1]",
    sourceOfWealth : "(//img[@id='tick_icon'])[1]",
    sourceOfFunds: "(//img[@id='tick_icon'])[7]",
    nextBtn: "//button[contains(text(),'Next')]",
    verifyPayerDetails: "//span[contains(text(),'Are you paying for this policy?')]",
    //ThirdParty Details
    LastOrFamilyName: "//input[@name='payorFamilyName']",
    FirstOrGivenName: "//input[@name='payorFirstName']",
    PayerRelationship: "//div[@id='relationship']//img",
    PayerType: "//div[@id='payorType']//img",
    BusinessRegNo: "//input[@name='businessRegNo']",
    NRICNumber: "//input[@name='payorIdentityCardNo']",
    ReasonForPaying: "//div[@id='payorReason']//img",
    Reason_Others: "//input[contains(@name,'payorReasonOth')]",
    Wealth_Others: "(//input[@name='others'])[1]",
    Fund_Others: "(//input[@name='others'])[2]"

    
}

class PayorDetails{
    constructor(page){
        pageObject.page=page;
    }
    async payingpolicyPage(){
        await sleep(2000);
        await assertText(PageLocators.verifyPayerDetails, "Are you paying for this policy?"); 
        let Element;
        switch (process.env.SelectPayingPolicy) {
            case "No":
                console.log(process.env.SelectPayingPolicy);
                Element="//p[text()='Payer Details']/following::p[text()='No']";
                await toClick(Element);
                
                await clickAndSendkeys(PageLocators.LastOrFamilyName, process.env.FamilyName);
                await clickAndSendkeys(PageLocators.FirstOrGivenName,process.env.GivenName);

                await toClick(PageLocators.PayerRelationship);
                let payer_relationship = process.env.PayerRelationship
                
                await toClick(`//div[@id='relationship']//div[text()='${payer_relationship}']`)
                console.log(`${payer_relationship} is Selected`);

                await toClick(PageLocators.PayerType);
                let payer_type = process.env.PayerType
                await toClick(`//div[@id='payorType']//div[text()='${payer_type}']`)
                console.log(`${payer_type} is Selected`);
                if(payer_type == 'Individual'){
                    await clickAndSendkeys(PageLocators.NRICNumber, process.env.NRICValue);
                }
                else if(payer_type == 'Entity'){
                    await clickAndSendkeys(PageLocators.BusinessRegNo, process.env.BusinessRegistrationNumber);
                }
                else
                    console.log(`Unknown Selection`);

                await toClick(PageLocators.ReasonForPaying);
                let reason_for_paying = process.env.ReasonFor_Paying
                await toClick(`//div[@id='payorReason']//div[text()='${reason_for_paying}']`)
                console.log(`${reason_for_paying} is Selected`);
                if(reason_for_paying == 'Others')
                {
                    await clickAndSendkeys(PageLocators.Reason_Others, process.env.SpecifyOtherReason);
                }
                break;
            case "Yes":
                Element="(//p[text()='Yes'])[1]";
                await toClick(Element);
                break;
            default:
                console.log("Invalid Selection");
        }
    }

    async sourceWealth(){
        let Element;
        switch (process.env.SelectSourceOfWealth) {
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
            case "Others, please specify":
                Element="(//img[@id='tick_icon'])[4]";
                await toClick(Element);
                await clickAndSendkeys(PageLocators.Wealth_Others, process.env.Wealth_Other);
                break;
            default:
                console.log("Unknown Selection");
        }
    }
    async sourceFunds(){
        let ElementOfFund
        switch(process.env.SelectSourceOfFunds){
            case "Employment/Trade Income":
                ElementOfFund="(//img[@id='tick_icon'])[5]";
                await toClick(ElementOfFund);
                break;
            case "Sales of Property":
                ElementOfFund="(//img[@id='tick_icon'])[6]";
                await toClick(ElementOfFund);
                break;
            case "Savings":
                ElementOfFund="(//img[@id='tick_icon'])[1]";
                await toClick(ElementOfFund);
                break;
            case "Maturity or Surrender of Policy":
                ElementOfFund="(//img[@id='tick_icon'])[1]";
                await toClick(ElementOfFund);
                break;
            case "Others, please specify":
                ElementOfFund="(//img[@id='tick_icon'])[1]";
                await toClick(ElementOfFund);
                await clickAndSendkeys(PageLocators.Fund_Others, process.env.Fund_Other);
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
     