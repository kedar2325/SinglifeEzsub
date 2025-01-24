const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, assertText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    paymentfrequency_exist: "//p[text()='Annual Premium Payable']",
    policyterm: "#policyTerm img",
    sumassured: "//input[@name='sumAssured']",
    calculatebtn: "//button[normalize-space()='Calculate']",
    amountexist: "//p[contains(@class,'sc-b68ad98c-0 dIXHmT') and text()='SGD']",
    nextButton: "//button[contains(text(),'Next')]"
}
class ProductDetails{
    async ProductDetails_Exist(){
        await assertText(PageLocators.paymentfrequency_exist,"Annual Premium Payable")
    }
    async PolicyTerm(){
        await Click(PageLocators.policyterm)
        await clickByRole('option', { name: 'Account Executive' })
    }
    async EnterSumAssured(){
        await clickAndSendkeys(PageLocators.sumassured,process.env.SA)
    }
    async SumAssuredCalculate(){
        await Click(PageLocators.calculatebtn)
    }
    async ValidatePremiumAmount_Exist(){
        await assertText(PageLocators.amountexist,"SGD")
        await Click(PageLocators.nextButton)
    }
}
module.exports={ProductDetails}









