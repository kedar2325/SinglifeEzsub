const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15000); 
require('dotenv').config();

//ProductSelection import
const { ProductSelection } = require('../Pages/Page 2.3QuotationCreation - Product Selection');
const { pageObject } = require('../Hooks/PageObjects');

let ProductSelectionPage;

Given('user search for the product in the product selection search box', async function () {
    ProductSelectionPage=new ProductSelection(pageObject.page);
    await ProductSelectionPage.navigationToProductSelection();
    
});

When('user select the required product from the product list', async function () {
    await ProductSelectionPage.search();
    
});
When('user select the product from the search result', async function () {
    await ProductSelectionPage.selectInList();
    
}); 
When('user click the next button', async function () {
    await ProductSelectionPage.clickNext();
    
})
Then('user validate the searched product should be displayed', async function () {
    await ProductSelectionPage.verifyProductsSelected();
    
});