const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout} = require('@cucumber/cucumber');
const { sleep } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
setDefaultTimeout(15000);
require('dotenv').config();

//login import
const { ROP } = require('../Pages/Page 4.1ReviewDetails - ROP');
const { pageObject } = require('../Hooks/PageObjects');

let ROPDetails;

Given('user able to view ques', async function () {
  ROPDetails = new ROP(pageObject.page);
  await ROPDetails.navigationToROP();
});

When('user selects Yes or No option', async function () {
  await ROPDetails.Select_Yes_No_Ques1();
  await ROPDetails.Select_Yes_No_Ques2();

});
When('user clicks next', async function () {
  await ROPDetails.button();
});
When('user selects LA Yes or No option', async function () {
  let QuotationType=excelValue()[process.env.caseID].quotationType
  if(QuotationType=="ThirdParty"){
  await ROPDetails.SecondLA_Select_Yes_No_Ques1();
  await ROPDetails.SecondLA_Select_Yes_No_Ques2();
  }
});

Then('user validate the payer details text', async function () {
  await ROPDetails.verifyPayerDetails();
  if (ROPDetails.verifyPayerDetails) {
    // Capture screenshot and attach it to Allure
    await sleep(1000);
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }

});
