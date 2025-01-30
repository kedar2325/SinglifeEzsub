const { expect } = require('@playwright/test');
const { mouseHoverClick,mouseMove,mouseUp, mouseDown, sleep, Click, assertText, toClick, windowHandle } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
const { Signature } = require('../Helper/Helper');
require('dotenv').config();

const PageLocators={
    verify_signing_method_page: "//p[contains(text(),'Select your client’s preferred signing method')]",
    face_to_face_signing_method: "//div[contains(text(),'Face-to-face signing')]",
    productClickPreviewPDF: "(//button[contains(text(),'Preview PDF')])[1]",
    productDonebutton: "//button[contains(text(),'Done')]",
    productSuccessMessage: "(//p[contains(text(),'Fully read & understood')])[1]",
    //Application form
    appPreviewBtn:"(//button[@type='button'][normalize-space()='Preview PDF'])[2]",
    appSuccessMsg:"(//p[contains(text(),'Fully read & understood')])[2]",
    //Signature Form
    assuredSignatureForm:"//button[text()='Preview PDF & sign' and not(@disabled)]",
    signatureFormTitle:"(//p[contains(text(),'Signature Form')])[1]",
    assuredSignatureButton:"(//div[@id='clickable-box_0'])[1]",
    canvaAssured:"//canvas[@class='PopupSignature_sigCanvas__4x24_']",
    adviserSignatureButton:"//div[@id='clickable-box_1']//img",
    financialSignatureButton:"//div[@id='clickable-box_1']//img",
    saveSignature:"(//button[normalize-space()='Save signature'])[1]",
    lifeAssuredSignatureTitle:"//div[contains(text(),'Life Assured Signature')]",
    lifeAssuredSignaturePalette:"(//div[@id='clickable-box_0'])[1]",
    lifeAssuredSignatureCanva:"(//canvas)[2]",
    financialAssuredSignatureTitle:"(//div[contains(text(),'Financial Advisor Signature')])[1]",
    financialAssuredSignaturePalette:"//div[@id='clickable-box_1']//img",
    financialAssuredSignatureCanva:"(//canvas)[2]",
    confirmButton:"//button[normalize-space()='Confirm']",
    signatureFormSuccessMsg:"(//p[contains(text(),'Fully Signed')])[2]",
    //signaturePrevBtn:"(//button[@type='button'][normalize-space()='Preview PDF & sign'])[1]",
    //Credit Cards
    creditCardPrevBtn:"(//button[@type='button'][normalize-space()='Preview PDF & sign'])[2]",
    creditCardSigTitle:"(//p[contains(text(),'VISA/MasterCard Authorisation Form')])[1]",
    creditCardSigPalette:"//div[@id='clickable-box_0']//img",
    creditCardSigCanva:"(//canvas)[2]",
    creditCardSigConfirmBtn:"(//button[normalize-space()='Confirm'])[1]",
    creditCardSavebtn:"//button[normalize-space()='Save signature']",
    creditCardSuccessMsg:"(//p[contains(text(),'Fully Signed')])[2]",
    //nextButton
    nextButton:"//button[normalize-space()='Next']"
}

class SigningMethod {
    async verifyDocumentSigningPage(){
        await assertText(PageLocators.verify_signing_method_page, "Select your client’s preferred signing method"); 
    }

    async preferredSigningMethod(){
        await Click(PageLocators.face_to_face_signing_method);
    }

    async productIllustrationAndSummary(){
        await Click(PageLocators.productClickPreviewPDF);
        await sleep(2000);
        await Click(PageLocators.productDonebutton);
    }

    async productsuccessMessage(){
        await assertText(PageLocators.productSuccessMessage, "Fully read & understood"); 
    }
    async appFormClickandSummary(){
        await Click(PageLocators.appPreviewBtn);
        await Click(PageLocators.productDonebutton);
        await assertText(PageLocators.appSuccessMsg, "Fully read & understood"); 
        await sleep(2000);
    }
    async signatureClickandSummary(){
        await Click(PageLocators.assuredSignatureForm);        
        await Click(PageLocators.assuredSignatureButton);
        await assertText(PageLocators.signatureFormTitle,"Signature Form");
       // await Click(PageLocators.assuredSignatureButton);
        await sleep(2000);
        await assertText(PageLocators.lifeAssuredSignatureTitle, "Life Assured Signature");

      //  await windowHandle(PageLocators.assuredSignatureButton,PageLocators.canvaAssured);
        await Signature(PageLocators.canvaAssured)
    //    await mouseHoverClick(PageLocators.canvaAssured);
    // //    await mouseMove(270, 150);
    //   await mouseDown();
    //     await mouseDown();
    //     const startY = 150;
    //     for (let x = 270; x < 400; x += 5) {
    //         await mouseMove(x, startY);
    //       }
    //     await mouseUp();
        await Click(PageLocators.confirmButton);
        await Click(PageLocators.adviserSignatureButton);
        await assertText(PageLocators.financialAssuredSignatureTitle,"Financial Advisor Signature");
        await Click(PageLocators.financialAssuredSignatureCanva);
        //add code for financial advisor signature
        await Signature(PageLocators.canvaAssured)
        await Click(PageLocators.confirmButton);
        await sleep(2000);
        await Click(PageLocators.saveSignature);
        await assertText(PageLocators.signatureFormSuccessMsg,"Fully Signed");
    }
    async creditCardClickandSummary(){
        await Click(PageLocators.creditCardPrevBtn);
        await assertText(PageLocators.creditCardSigTitle,"VISA/MasterCard Authorisation Form");
        await Click(PageLocators.creditCardSigPalette);

        await Signature(PageLocators.canvaAssured);
        //add code for sign using Canva
        await Click(PageLocators.creditCardSigConfirmBtn);
        await Click(PageLocators.creditCardSavebtn);
        await assertText(PageLocators.creditCardSuccessMsg,"Fully Signed");
    }
    async clickNextButton(){
        await Click(PageLocators.nextButton);
    }
}

module.exports={SigningMethod}