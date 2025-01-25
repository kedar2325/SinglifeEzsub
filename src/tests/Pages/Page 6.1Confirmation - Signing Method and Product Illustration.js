const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, assertText, Click } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verify_signing_method_page: "//p[contains(text(),'Select your client’s preferred signing method')]",
    face_to_face_signing_method: "//div[contains(text(),'Face-to-face signing')]",
    click_preview_PDF: "(//button[contains(text(),'Preview PDF')])[1]",
    done_button: "//button[contains(text(),'Done')]",
    success_message: "//p[contains(text(),'Fully read & understood')]"

}

class SigningMethod {
    async verifyDocumentSigningPage(){
        await assertText(PageLocators.verify_signing_method_page, "Select your client’s preferred signing method"); 
    }

    async preferredSigningMethod(){
        await Click(PageLocators.face_to_face_signing_method);
    }

    async productIllustrationAndSummary(){
        await Click(PageLocators.click_preview_PDF);
        await Click(PageLocators.done_button);
    }

    async successMessage(){
        await assertText(PageLocators.success_message, "Fully read & understood"); 
   
    }

}module.exports={SigningMethod}