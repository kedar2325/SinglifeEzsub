const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
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
    await pageSupportingDocs.uploadProofMas();
  });

  Then('user click on next btn on doc', async function () {
    await pageSupportingDocs.clickNextButton();
  });