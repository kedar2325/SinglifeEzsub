
const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();


const { ProductDetails } = require('../Pages/Page 2.4QuotationCreation - ProductDetails');
const { pageObject } = require('../Hooks/PageObjects');

let ProductDetailsPage;


Given('user able to view the mandatory fields in product details page', async function () {
  ProductDetailsPage = new ProductDetails(pageObject.page)
  ProductDetailsPage.ProductDetails_Exist()

    
  });
When('user able to select the policy term from the policy term dropdown', async function () {
  ProductDetailsPage.PolicyTerm()

    
  });
When('user enter the sum sssured value in the sum asssured field', async function () {
  ProductDetailsPage.EnterSumAssured()
    
  });
When('user click the calculate button for the premium calculation', async function () {
  ProductDetailsPage.SumAssuredCalculate()
    
  });
Then('user should validate the premium amount calculated', async function () {
  ProductDetailsPage.ValidatePremiumAmount_Exist()
    
  });