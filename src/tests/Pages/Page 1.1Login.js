const { clickAndSendkeys,Click, launchURL, sleep, toClick, assertText, mouceClick } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    username:"#okta-signin-username",
    password:"#okta-signin-password",
    loginButton:"//input[@type='submit']",
    homeGreetText:"//p[contains(text(), '👋 Welcome, ')]"
}
 class Login{
    async NavigateLoginpage(){
        await launchURL(process.env.url)
        
        
        
    }
    async  Enterusername(){
        await clickAndSendkeys(PageLocators.username,process.env.LoginID);
    }
    async  EnterPassword(){
        await clickAndSendkeys(PageLocators.password,process.env.Password);
    }
    async  ClickLoginButton(){
        await Click(PageLocators.loginButton)
    }
    async assertHomeText(){
        await assertText(PageLocators.homeGreetText,"👋 Welcome, ")
    }
}
 module.exports={Login}