const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//login import
const { ROP } = require('../Pages/Page 4.1ReviewDetails - ROP');
const { pageObject } = require('../Hooks/PageObjects');

let ROPDetails;

Given('user able to view ques', async function () {
  ROPDetails=new ROP(pageObject.page);
  await ROPDetails.navigationToROP();
  });

When('User selects Yes option', async function () {
  await ROPDetails.yesisexist1();
  await ROPDetails.yesisexist2();
    
  });
  When('user clicks next', async function () {
    await ROPDetails.button();
  });
  Then('user validate the payer details text', async function () {
    await ROPDetails.verifyPayerDetails();
   
  });
