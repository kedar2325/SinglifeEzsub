const { Given, When, Then,setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000); 
require('dotenv').config();

//login import
const { RiderSelection } = require('../Pages/Page 2.5QuotationCreation - Rider Selection');
const { pageObject } = require('../Hooks/PageObjects');
const { sleep } = require('../Helper/Action');

let RiderSelectionPage;
Given('user able to view the available riders', async function () {
  RiderSelectionPage=new RiderSelection(pageObject.page);
  await RiderSelectionPage.verifyRiderGreetText();
    
  });
When('user select the riders in the rider selection page', async function () {
  await RiderSelectionPage.selectRiders();
    
  });
When('user click the premium calculate button for the selected rider', async function () {
  await RiderSelectionPage.calculatePremium();
  });

// Then('user validate the premium calculated for the selected riders', async function () {
//     await RiderSelectionPage.clickNextButton();
//   });