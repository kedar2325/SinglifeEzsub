const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

const { ClientAcknowledgement } = require('../Pages/Page 5.1Declaration - Client Acknowledgement');
const { pageObject } = require('../Hooks/PageObjects');

let pageClientAcknowledgement;
  Given('user able to view terms', async function () {
    pageClientAcknowledgement = new ClientAcknowledgement(pageObject.page);
    await pageClientAcknowledgement.verifyClientAcknowledgement();
    // To check Title exists
  });



  When('user selects terms option yes', async function () {
    //To select option yes
    await pageClientAcknowledgement.clickMarketingConsentY();
  });

  When('user selects terms option no', async function () {
    //To select option no
    await pageClientAcknowledgement.clickMarketingConsentN();
  });

  When('user selects e-documents option yes', async function () {
    //To select Doc Yes
    await pageClientAcknowledgement.eDocY();
  });

  When('user selects e-documents option no', async function () {
    //To select Doc No
    await pageClientAcknowledgement.eDocN();
  });

  // When('user enter contact details', async function () {
  //   //Enter Contact Details
  //   await pageClientAcknowledgement.EnterContactEmailId();
  //   await pageClientAcknowledgement.EnterMobileCode();
  //   await pageClientAcknowledgement.EnterContactMobileNo();
  // });



  Then('user click on next in CA', async function () {
    //To click next button
    await pageClientAcknowledgement.ClickNextButton();
  });