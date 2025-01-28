const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep, Click, assertText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyProductSelectionPage: "//p[contains(text(),'Product selection for')]",
    searchTab: "(//input[@id='search'])[1]",
    clickSelect: "//button[contains(text(),'Select')]",
    nextButton: "//button[contains(text(),'Next')]",
}

class ProductSelection{
    constructor(page){
        pageObject.page=page;
    }
    async navigationToProductSelection(){
        await assertText(PageLocators.verifyProductSelectionPage, "Product selection for"); 
    }
    async search(){
        await clickAndSendkeys(PageLocators.searchTab,process.env.ProductName); 
    }
    async selectInList(){
        await Click(PageLocators.clickSelect);
    }
    async clickNext(){
        await Click(PageLocators.nextButton);
    }
    async verifyProductsSelected(){
        let Productname=process.env.ProductName;
        await assertText(`(//p[contains(text(),'${Productname}')])[1]`, process.env.ProductName);
    }
}
module.exports={ProductSelection}
     

