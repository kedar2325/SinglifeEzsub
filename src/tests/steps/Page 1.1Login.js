const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//login import
const { Login } = require('../Pages/Page 1.1Login');
const { pageObject } = require('../Hooks/PageObjects');

let loginFunction;
Given('User launch the login url', async function () {
  loginFunction=new Login();
  await loginFunction.NavigateLoginpage();
});

When('User enters the valid loginID and Password', async function () {
  await loginFunction.Enterusername();
  await loginFunction.EnterPassword();
 
  
  
});

When('User clicks the Login button', async function () {
  await loginFunction.ClickLoginButton();
       
});
Then('User validate the home page text', async function () {
      await loginFunction.assertHomeText();
});
