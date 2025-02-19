const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep, Click, assertText, toClick, sendkeys, windowHandle } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyInitialPremiumPage: "//p[contains(text(),'Initial Premium Payment')]",
    cashButton:"(//p[text()='Cash/Cheque/Bank Draft'])[1]",
    giroButton:"(//p[text()='Interbank GIRO'])[1]",
    creditCardButton:"(//p[text()='Credit Card'])[1]",
    giro_accountNumber:"(//input[@type='number'])[1]",
    JointAccount_Name:"",
    Joint_NRICNumber:"//input[@name='jointAccountHolderId']",
    Cheque_Number:"//p[text()='Cheque No.']//parent::label/following-sibling::div/input",
    Issuing_Bank:"//p[text()='Issuing Bank']//parent::label/following-sibling::div/input",

    
    giroButton2:"(//p[text()='Interbank GIRO'])[2]",
    cashButton2:"(//p[text()='Cash/Cheque/Bank Draft'])[2]",
    entercreditcarddetailbtn: "//button[text()='Enter credit card details']",


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

    async InitialPremiumPaymentMethod() {
            let paymentMethod=process.env.PaymentType;
            //await toClick(`//p[text()= '${paymentMethod}']`);
            console.log(`${paymentMethod} is Selected`);
        if(paymentMethod=="Interbank GIRO"){
            await Click(PageLocators.giroButton);
            await clickAndSendkeys(PageLocators.giro_accountNumber,process.env.GIRO_AccountNumber);
            await clickAndSendkeys(PageLocators.JointAccount_Name,process.env.Joint_Account_Name);
            await clickAndSendkeys(PageLocators.NRICNumber,process.env.NRIC_Number);
        }
        else if(paymentMethod=="Cash/Cheque/Bank Draft"){
            await toClick(`(//p[text()='${paymentMethod}'])[1]`);
            await clickAndSendkeys(PageLocators.Cheque_Number, process.env.ChequeNumber);
            await clickAndSendkeys(PageLocators.Issuing_Bank, process.env.IssuingBank);
            await toClick(`(//p[text()='${paymentMethod}'])[2]`);
        }
        else if(paymentMethod=="Credit Card"){
            await toClick(`(//p[text()='${paymentMethod}'])[1]`);
           // await toClick();
            const page=await windowHandle(PageLocators.entercreditcarddetailbtn);
            await page.waitForSelector("//label[text()='Mastercard']//parent::div//input");
            await page.locator("//label[text()='Mastercard']//parent::div//input").click();
            await page.locator("//input[@id='card_number']").click();
            await page.locator("//input[@id='card_number']").fill("5123450000000008");
    
        }
        else {
            console.log("No payment method is available");
        }
        
    }

    async SubsequentPremiumPayment(){
        let Element;
        switch (process.env.SubsequentPremiumPayment_Type) {
            case "Interbank GIRO":
                Element=PageLocators.giroButton2;
                await Click(Element);
                break;
            case "Cash/Cheque/Bank Draft":
                Element=PageLocators.cashButton2;
                await toClick(Element);
            default:
                console.log('Unknown Selection');
        }




    }

   


    // async CashPayment(){
    //     await toClick(PageLocators.cashButton);
    // }
    // async EnterChequeNo(){
    //     await clickAndSendkeys(PageLocators.chequeNo,"64");
    // }
    // async EnterIssuingBank(){
    //     await clickAndSendkeys(PageLocators.issuingBank,"SBI");
    // }
    // async CashPayment2(){
    //     await toClick(PageLocators.cashButton2);
    // }

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
     