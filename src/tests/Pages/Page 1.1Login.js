const { clickAndSendkeys,Click, launchURL,  assertParticularText } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

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
        await launchURL(process.env.url)    
    }
    async  Enterusername(){
        await clickAndSendkeys(PageLocators.username,excelValue()[pageObject.case].LoginID);
    }
    async  EnterPassword(){
        await clickAndSendkeys(PageLocators.password,excelValue()[pageObject.case].Password);
    }
    async  ClickLoginButton(){
        await Click(PageLocators.loginButton)
    }
    async assertHomeText(){
        await assertParticularText(PageLocators.homeGreetText,"👋 Welcome, ")
    }
}
 module.exports={Login}