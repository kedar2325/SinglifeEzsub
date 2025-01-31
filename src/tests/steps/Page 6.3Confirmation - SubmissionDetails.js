const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000); 
require('dotenv').config();

//Submit import
const { SubmitDocuments } = require('../Pages/Page 6.3Confirmation - SubmissionDetails');
const { pageObject } = require('../Hooks/PageObjects');
const { takeScreenshot } = require('../Helper/Action');

let pageSubmitDocuments;

Given('user able to view the app details', async function () {
    pageSubmitDocuments=new SubmitDocuments(pageObject.page);
    await pageSubmitDocuments.verifyReviewApplicationDetails();
  });

  When('user able to click submit application', async function () {
    await pageSubmitDocuments.clickSubmitApplicationButton();
  });

  Then('user verify application successfully', async function () {
    await pageSubmitDocuments.verifySubmitSuccessfully();
    takeScreenshot("Policy Number generation Completed");
  });