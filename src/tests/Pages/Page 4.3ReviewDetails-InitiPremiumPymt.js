const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep, Click, assertText, toClick } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyInitialPremiumPage: "//p[contains(text(),'Initial Premium Payment')]",
     cashButton:"(//p[text()='Cash/Cheque/Bank Draft'])[1]",
    chequeNo:"//p[text()='Cheque No.']//parent::label/following-sibling::div/input",
    issuingBank:"//p[text()='Issuing Bank']//parent::label/following-sibling::div/input",
    cashButton2:"(//p[text()='Cash/Cheque/Bank Draft'])[2]",

    //Next Button
    nextbtn: "//button[contains(text(),'Next')]",

    //Verify Declaration Page
    verifyDeclaration: "//p[contains(text(),'Let’s stay in touch - on your terms')]"
}

class ReviewDetailsInitialPremiumPayment{
    constructor(page){
        pageObject.page=page;
    }
    async verifyInitialPremiumPage(){ 
        await assertText(PageLocators.verifyInitialPremiumPage, "Initial Premium Payment");
    }

    async paymentMethod() {
            let paymentMethod=process.env.PaymentType;
            await toClick(`//p[text()= '${paymentMethod}']`);
            console.log(`${paymentMethod} is Selected`);
        if(paymentMethod.includes("Interbank GIRO")){
            await InterbankGIROPayment();
        }
        else if(paymentMethod.includes("Cash/Cheque/Bank Draft")){
            await CashOrChequeDraft();


        }
        else if(paymentMethod.includes("Credit Card")){
            await CreditCardPayment();
        }
        else {
            console.log("No payment method is available");
        }
        
    }

    async InterbankGIROPayment(){
        
    }
    









    async CashPayment(){
        await toClick(PageLocators.cashButton);
    }
    async EnterChequeNo(){
        await clickAndSendkeys(PageLocators.chequeNo,"64");
    }
    async EnterIssuingBank(){
        await clickAndSendkeys(PageLocators.issuingBank,"SBI");
    }
    async CashPayment2(){
        await toClick(PageLocators.cashButton2);
    }

    //Next Button
    async ClickNextButton(){
        await Click(PageLocators.nextbtn);
    }

    //Verify Declaration Page
    async verifyDeclarationPage(){
        await sleep(5000);
        await assertText(PageLocators.verifyDeclaration, "Let’s stay in touch - on your terms");
    }

 
}
module.exports={ReviewDetailsInitialPremiumPayment}
     