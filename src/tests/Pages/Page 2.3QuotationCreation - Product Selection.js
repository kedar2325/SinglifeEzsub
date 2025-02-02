const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep, Click, assertText } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyProductSelectionPage: "//p[contains(text(),'Product selection for')]",
    searchTab: "//div[@class='sc-223f9362-0 fbhqIF bg-white']//input[@id='search']",
    clickSelect: "//button[contains(text(),'Select')]",
    nextButton: "//button[contains(text(),'Next')]",
}

class ProductSelection{
    constructor(page){
        pageObject.page=page;
    }
    async navigationToProductSelection(){
        await sleep(1000)
        await Click(PageLocators.nextButton);
        await clickAndSendkeys(PageLocators.searchTab,excelValue()[pageObject.case].ProductName);   
    }
    async search(){
        await sleep(1000)
        
    }
    async selectInList(){
        await Click(PageLocators.clickSelect);
    }
    async clickNext(){
        await Click(PageLocators.nextButton);
    }
    async verifyProductsSelected(){
        let Productname=excelValue()[pageObject.case].ProductName;
        await assertText(`(//p[contains(text(),'${Productname}')])[1]`, excelValue()[pageObject.case].ProductName);
    }
}
module.exports={ProductSelection}
     

