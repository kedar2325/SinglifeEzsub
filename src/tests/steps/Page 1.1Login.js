const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout} = require('@cucumber/cucumber');
const { sleep } = require('../Helper/Action');
setDefaultTimeout(20000);
//const { AllureStep, AllureAttachment } = require('@allure-palywright');
require('dotenv').config();



//login import
const { Login } = require('../Pages/Page 1.1Login');
const { pageObject } = require('../Hooks/PageObjects');
const { takeScreenshot } = require('../Helper/Action');

let loginFunction;
Given('User launch the login url', async function () {
  loginFunction = new Login(pageObject.page);
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
  //takeScreenshot("login completed")
  if (loginFunction.assertHomeText) {
    // Capture screenshot and attach it to Allure
    await sleep(1000);
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');

  }
});
