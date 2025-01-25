const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//login import
const { ReviewDetailsLifeAssured } = require('../Pages/Page 3.3ReviewDetails - Life Assured');
const { pageObject } = require('../Hooks/PageObjects');

let ReviewDetailsForLifeAssured;

Given('user able to view the values in life assured tab', async function () {
  ReviewDetailsForLifeAssured=new ReviewDetailsLifeAssured(pageObject.page);
  await ReviewDetailsForLifeAssured.verifyLifeAssuredPage();
  
    });
  When('user able to fill the values in all mandatory fields', async function () {
    await ReviewDetailsForLifeAssured.EnterContactInformation();
    
  });
  When('user able to complete the residential address', async function () {
    await ReviewDetailsForLifeAssured.EnterResidentialAddress();
    
  });

  When('user click the next button',async function() {
    await ReviewDetailsForLifeAssured.GotoUnderwritingpage();
    
  });
  