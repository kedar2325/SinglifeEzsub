const { Given, When, Then } = require('@cucumber/cucumber');
const { pageObject } = require('../Hooks/PageObjects');
const { launchURL, sleep } = require('../Helper/Action');
require('dotenv').config();

//login import
const { Login } = require('../Pages/Page 1.1Login');

let loginFunction;
Given('User launch the login url', async function () {
  loginFunction=new Login();
  await loginFunction.NavigateLoginpage();
  await pageObject.page.pause()
  await pageObject.page.setDefaultTimeout(20000)
  
  
});

When('User enters the valid loginID and Password', async function () {
  await loginFunction.Enterusername();
  await loginFunction.EnterPassword();
  await loginFunction.ClickLoginButton();
  
  
});

When('User clicks the Login button', async function () {
     
       
});
Then('User validate the home page text', async function () {
      
});
