const { clickAndSendkeys,Click, launchURL,  assertParticularText, pressEnter, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    username:"#okta-signin-username",
    password:"#okta-signin-password",
    loginButton:"//input[@type='submit']",
    homeGreetText:"//p[contains(text(), '👋 Welcome, ')]"
}
 class Test{
    constructor(page){
        pageObject.page=page;
    }
    async NavigateLoginpage(){
        await launchURL("https://www.iobit.com/en/keyboard-test.php")    
    }
    async Enter(){
        await sleep(2000);
        await pressEnter();
    }
    async Sleep(){
        await sleep(8000);
    }
}
 module.exports={Test}