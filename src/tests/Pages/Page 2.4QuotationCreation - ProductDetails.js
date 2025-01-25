const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, clickByRole,assertText, assertParticularText, toClick, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    paymentfrequency_exist: "//p[text()='Annual Premium Payable']",
    policyterm: "#policyTerm",
    sumassured: "//input[@name='sumAssured']",
    calculatebtn: "//button[text()='Calculate']",
    amountexist: "//p[contains(@class,'sc-b68ad98c-0 dIXHmT') and text()='SGD']",
    nextButton: "//button[contains(text(),'Next')]"
}
class ProductDetails{
    constructor(page){
        pageObject.page=page;
    }
    async ProductDetails_Exist(){
        await assertText(PageLocators.paymentfrequency_exist,"Annual Premium Payable")
    }
    async PolicyTerm(){
     //   await toClick(PageLocators.policyterm)
       // await clickByRole('option', { name: 'Account Executive' })
    }
    async EnterSumAssured(){
        await clickAndSendkeys(PageLocators.sumassured,process.env.SA)
    }
    async SumAssuredCalculate(){
        await sleep(8000);
        await toClick(PageLocators.calculatebtn);
    }
    async ValidatePremiumAmount_Exist(){
        await assertParticularText(PageLocators.amountexist,"SGD")
        await toClick(PageLocators.nextButton)
    }
}
module.exports={ProductDetails}









