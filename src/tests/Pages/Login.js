const { clickAndSendkeys, launchURL, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
const PageLocators={
    username:"#okta-signin-username",
    password:"#okta-signin-password"
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

}
 module.exports={Login}