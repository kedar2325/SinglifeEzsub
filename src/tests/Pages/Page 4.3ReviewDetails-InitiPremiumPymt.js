const { clickAndSendkeys, launchURL, sleep, Click } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    initialPremiumPayment: "(//p[contains(text(),'Credit Card')])[1]",

    //Credit card details
    //Payment Details
    enterCreditCardDetails: "(//button[@type='button'])[5]",
    cardType: "#card_type_002",
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
    nextbtn: "//button[contains(text(),'Next')]"
}

class ReviewDetails{
    async InitialPayment(){
        await Click(PageLocators.initialPremiumPayment);
    }

    //Enter Credit Card Details
    //Payment details
    async EnterCardDetails(){
        await Click(PageLocators.enterCreditCardDetails);
    }

    async ClickCardType(){
        await Click(PageLocators.cardType);
    }
    async EnterCardNumber(){
        await clickAndSendkeys(PageLocators.cardNumber,process.env.CardNumberValue);
    }
    async EnterExpirationMonth(){
        await Click(PageLocators.expirationMonth); //how to pass value
    }
    async EnterExpirationYear(){
        await Click(PageLocators.expiryYear); //how to pass value
    }
    async ClickNext(){
        await Click(PageLocators.nextButton);
    }

    //Review your order
    async ClickFinishButton(){
        await Click(PageLocators.finishButton);
    }

    //Issuing Bank
    async ClickIssuingBank(){
        await Click(PageLocators.issuingBank);
    }
    async SelectBankANZ(){
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


    







  

 
}
module.exports={ReviewDetails}
     