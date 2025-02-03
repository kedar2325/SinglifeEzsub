
const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { sleep } = require('../Helper/Action');
setDefaultTimeout(40000);

require('dotenv').config();


const { ProductDetails } = require('../Pages/Page 2.4Quotation - Product Details');
const { pageObject } = require('../Hooks/PageObjects');

let ProductDetailsPage;


Given('user able to view the mandatory fields in product details page', async function () {
  ProductDetailsPage = new ProductDetails(pageObject.page)
  await ProductDetailsPage.ProductDetails_Exist()


});
When('user fill all the mandatory fields based on the product selection', async function () {
 await ProductDetailsPage.ProductCare();
});
Then('user should validate the premium amount calculated', async function () {
  await ProductDetailsPage.ValidatePremiumAmount_Exist()
  if (ProductDetailsPage.ValidatePremiumAmount_Exist) {
    await sleep(1000);
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
  }

});