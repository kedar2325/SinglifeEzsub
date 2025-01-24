const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep, Click, assertText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyInitialPremiumPage: "//p[contains(text(),'Initial Premium Payment')]",
    initialPremiumPayment: "(//p[contains(text(),'Credit Card')])[1]",

    //Credit card details
    //Payment Details
    enterCreditCardDetails: "(//button[@type='button'])[5]",
    cardTypeMaster: "#card_type_002",
    cardNumber: "#card_number",
    expirationMonth: "#card_expiry_month",
    expiryYear: "#card_expiry_year",
    nextButton: "//input[@name='commit']",

    //Review your order
    finishButton: "//input[@name='commit']",

    issuingBank: "#react-select-39-placeholder",
    selectANZ: "(//div[contains(text(),'ANZ')])[2]",

    //Subsequent Premium Payment
    paymentMethod: "(//p[contains(text(),'Cash/Cheque/Bank Draft')])[2]",

    //Next Button
    nextbtn: "//button[contains(text(),'Next')]",

    //Verify Declaration Page
    verifyDeclaration: "//p[contains(text(),'Let’s stay in touch - on your terms')]"
}

class ReviewDetailsInitialPremiumPayment{

    async verifyInitialPremiumPage(){ 
        await assertText(PageLocators.verifyInitialPremiumPage, "Initial Premium Payment");
    }
    async InitialPayment(){
        await Click(PageLocators.initialPremiumPayment);
    }

    //Enter Credit Card Details
    //Payment details
    async EnterCardDetails(){
        await Click(PageLocators.enterCreditCardDetails);
        sleep(3000);
        await Click(PageLocators.cardTypeMaster);
        await clickAndSendkeys(PageLocators.cardNumber,process.env.CardNumberValue);

        await Click(PageLocators.expirationMonth);
        await expect(dropDownList).toHaveValue('8');

        await Click(PageLocators.expiryYear); 
        await expect(dropDownList).toHaveValue('2030');

        await Click(PageLocators.nextButton);

        //Review your order
        await Click(PageLocators.finishButton);

        //Issuing Bank
        await Click(PageLocators.issuingBank);

        await Click(PageLocators.selectANZ);

    }

    //Subsequent Premium Payment 
    async ClickCash(){
        await Click(PageLocators.paymentMethod);
    }

    //Next Button
    async ClickNextButton(){
        await Click(PageLocators.nextbtn);
    }

    //Verify Declaration Page
    async verifyDeclarationPage(){
        await assertText(PageLocators.verifyDeclaration, "Let’s stay in touch - on your terms");
    }

 
}
module.exports={ReviewDetailsInitialPremiumPayment}
     