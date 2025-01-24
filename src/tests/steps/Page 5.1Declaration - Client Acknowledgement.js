const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

const { ClientAcknowledgement } = require('../Pages/Page 5.1Declaration - Client Acknowledgement');
const { pageObject } = require('../Hooks/PageObjects');

let ClientAcknowledgement;
  Given('user able to view terms', async function () {
    ClientAcknowledgement=new ClientAcknowledgement(pageObject.page);
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('user selects terms option', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('user selects e-documents option', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('user enter contact details', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('user validate the text declaration of politically', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });