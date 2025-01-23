const { Given, When, Then } = require('@cucumber/cucumber');
const { pageObject } = require('../Hooks/PageObjects');
const { launchURL } = require('../Helper/Action');
require('dotenv').config();

//login import
const { Login } = require('../Pages/Login');



let loginFunction;

Given('User launch the login url', async function () {
  loginFunction=new Login();
  await loginFunction.NavigateLoginpage();
});

When('User enters the valid loginID and Password', async function () {
  await pageObject.page.waitForTimeout(80000);
  await loginFunction.Enterusername();
  await loginFunction.EnterPassword();
});

When('User clicks the Login button', async function () {
        
});
Then('User validate the home page text', async function () {
        
});
