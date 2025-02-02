const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, clickByRole, assertText, assertParticularText, toClick, sleep } = require('../Helper/Action');
const { excelValue, PolicyTerm,NoofYears, EnterSumAssured,SumAssuredCalculate,PaymentFrequency } = require('../Helper/Helper');
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
    async ProductCare() {
        let productName = excelValue()[process.env.caseID].ProductName;
        switch (productName) {
            case "Singlife Steadypay Saver":
                // await toClick(`//div[@id='policyTerm']//img`);
                await PolicyTerm();
                await EnterSumAssured(PageLocators.sumassured);
                await SumAssuredCalculate(PageLocators.calculatebtn);
                await PaymentFrequency();
                break;  
            case "Singlife Choice Saver":
                await PolicyTerm();
                await NoofYears();
                await EnterSumAssured(PageLocators.sumassured);
                await PaymentFrequency();  
                await SumAssuredCalculate(PageLocators.calculatebtn);
                break;
            case "Singlife Elite Term II":
                await PolicyTerm();
                // await NoofYears();
                await EnterSumAssured(PageLocators.sumassured);
                await SumAssuredCalculate(PageLocators.calculatebtn);
                await PaymentFrequency();  
                break;
            case "Singlife Comprehensive Critical Illness":
                await NoofYears();
                await EnterSumAssured(PageLocators.sumassured);
                await SumAssuredCalculate(PageLocators.calculatebtn);
                await PaymentFrequency();  
                break;   
            default:
                console.log(`Error: Unrecognized product name: ${productName}`);
                break;
        }
    }

    async ValidatePremiumAmount_Exist() {
        await assertParticularText(PageLocators.amountexist, "SGD")
        await toClick(PageLocators.nextButton)
    }
}
module.exports = { ProductDetails }









