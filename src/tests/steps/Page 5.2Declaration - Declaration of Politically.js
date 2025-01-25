const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

const {DeclarationPolitically} = require('../Pages/Page 5.2Declaration - Declaration of Politically');
const { pageObject } = require('../Hooks/PageObjects');

let pageDeclarationPolitically

         Given('user able to view declaration of polictically', async function () {
          pageDeclarationPolitically = new DeclarationPolitically(pageObject.page);
          await pageDeclarationPolitically.verifyDeclarationPoliticallyTitle();
          //check page exists
         });

         When('user selects declare option no', async function () {
          await pageDeclarationPolitically.clickPoliticallyExposedPersonN();
          //clicks on PEP option as no
         });

         Then('user selects next', async function () {
          await pageDeclarationPolitically.clickNextButton();
          //clicks on next button
         });