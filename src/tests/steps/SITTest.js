const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//Submit import
const { Test } = require('../Pages/SITTest');
const { pageObject } = require('../Hooks/PageObjects');

let pageTest;

Given('user able to enter site', async function () {
    pageTest=new Test(pageObject.page);
    await pageTest.NavigateLoginpage();
  });

  When('user able to click enter', async function () {
    await pageTest.Enter();
  });

  Then('user wait', async function () {
    await pageTest.Sleep();
  });