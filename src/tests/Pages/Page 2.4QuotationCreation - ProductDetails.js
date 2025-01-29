const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, clickByRole, assertText, assertParticularText, toClick, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators = {
    productDetailsExist: "//div[text()='Product Details']",
    paymentfrequency: "//p[text()='Annual Premium Payable']//parent::div//following-sibling::div/input",
    policyterm: "#policyTerm",
    sumassured: "//input[@name='sumAssured']",
    calculatebtn: "//button[text()='Calculate']",
    amountexist: "//p[contains(@class,'sc-b68ad98c-0 dIXHmT') and text()='SGD']",
    nextButton: "//button[contains(text(),'Next')]"
}
class ProductDetails {
    constructor(page) {
        pageObject.page = page;
    }
    async ProductDetails_Exist() {
        await assertText(PageLocators.productDetailsExist, "Product Details")
    }
    async PolicyTerm() {
        let term = process.env.Term
        console.log(`User selected term as ${term}`)
        let pay = process.env.Paytype
        console.log(`User selected Pay type as ${pay}`)
        await sleep(2000);
        await toClick(`//div[@id='${term}']//img`)
       // await doubleClick("//div[@id='policyTerm']//img")
        await toClick(`//div[@id='${term}']//div[contains(text(),'${pay}')]`)
        //   await toClick(PageLocators.policyterm)
        // await clickByRole('option', { name: 'Account Executive' })
    }
    async EnterSumAssured() {
        await clickAndSendkeys(PageLocators.sumassured, process.env.SA)
    }
    async SumAssuredCalculate() {
        await sleep(8000);
        await toClick(PageLocators.calculatebtn);
    }
    async PaymentFrequency() {
        let paymentfrequency = process.env.PaymentFrequency
        await toClick(`//p[text()='${paymentfrequency}']//parent::div//following-sibling::div/input`);
        console.log(`User selects payment frequency as ${paymentfrequency}`);
    }
    async ValidatePremiumAmount_Exist() {
        await assertParticularText(PageLocators.amountexist, "SGD")
        await toClick(PageLocators.nextButton)
    }
}
module.exports = { ProductDetails }









