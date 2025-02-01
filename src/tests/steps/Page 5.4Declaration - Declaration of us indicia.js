const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000);
require('dotenv').config();

const {DeclarationUsIndicia} = require('../Pages/Page 5.4Declaration - Declaration of us indicia');
const { pageObject } = require('../Hooks/PageObjects');
let pageDeclarationUsIndicia

Given('user able to view declaration of us indicia', async function () {
  pageDeclarationUsIndicia = new DeclarationUsIndicia;
  await pageDeclarationUsIndicia.verifyDeclarationUsIndiciaTitle();
});

When('user selects declare us indicia no', async function () {
  await pageDeclarationUsIndicia.clickIndiciaOption();
});

Then('user selects next on usIndico', async function () {
  if (pageDeclarationUsIndicia.clickIndiciaOption) {
    // Capture screenshot and attach it to Allure
    
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  await pageDeclarationUsIndicia.clickNextButton();
});