const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000);
const { excelValue } = require('../Helper/Helper');
require('dotenv').config();


//ConfirmSupportDocsimport
const { ConfirmSupportingDocs } = require('../Pages/Page 6.2Confirmation - Supporting Documents');
const { pageObject } = require('../Hooks/PageObjects');

let pageSupportingDocs;

Given('user able to view the supporting docs', async function () {
    pageSupportingDocs=new ConfirmSupportingDocs(pageObject.page);
  await pageSupportingDocs.verifySupportingDocsTitle();
});

When('user able to upload proof of id', async function () {
  await pageSupportingDocs.uploadProofOfId();
});

When('user able to upload proof of address', async function () {
  await pageSupportingDocs.uploadProofOfAddress();
});

When('user able to upload proof of mas', async function () {
  //let PaymentType = excelValue()[process.env.caseID].PaymentType
  await pageSupportingDocs.uploadProofMas();
  
  // if (process.env.PaymentType == "CreditCard") {
    
  // }
});

Then('user click on next btn on doc', async function () {
  if (pageSupportingDocs.verifySupportingDocsTitle) {
    // Capture screenshot and attach it to Allure
    
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  
  await pageSupportingDocs.clickNextButton();
});