const { expect } = require('@playwright/test');
const { clickAndSendkeys,Click, launchURL,  assertParticularText, takeScreenshot } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();
//const { allure,attachmentPath } = require('allure-js-commons')
//const { ContentType } = require('allure-js-commons')  


const PageLocators={
    username:"#okta-signin-username",
    password:"#okta-signin-password",
    loginButton:"//input[@type='submit']",
    homeGreetText:"//p[contains(text(), '👋 Welcome, ')]"
}
 class Login{
    constructor(page){
        pageObject.page=page;
    }
    async NavigateLoginpage(){
        console.log(`pageObject.case value: ${process.env.caseID}`);
        await launchURL(process.env.url)    
    }
    async  Enterusername(){
        await clickAndSendkeys(PageLocators.username,excelValue()[process.env.caseID].LoginID);
    }
    async  EnterPassword(){
        await clickAndSendkeys(PageLocators.password,excelValue()[process.env.caseID].Password);
    }
    async  ClickLoginButton(){
        await Click(PageLocators.loginButton)
    }
    async assertHomeText(){
        await assertParticularText(PageLocators.homeGreetText,"👋 Welcome, ")
        await takeScreenshot("Login Completed")

        //const screen1 = await PageLocators.page.screenshot({path: '../test-results/screenshot.png',fullPage: true});
 // allure.screenshot('screenShot', screen1, 'image/png');
        //await allure.attachment("Text file", "This is the file content.", ContentType.TEXT);

  //await allure.attachmentPath("Screenshot", "C:/Users/12194/Desktop/SinglifeEzsub/test-results/image.png", {

    //contentType: ContentType.PNG,
    //fileExtension: "png",
  //});
    }
}

 module.exports={Login}