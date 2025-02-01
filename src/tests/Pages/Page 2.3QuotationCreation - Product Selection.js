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
        //await assertText(PageLocators.verifyProductSelectionPage, "Product selection for"); 
        await clickAndSendkeys(PageLocators.searchTab,"Singlife Steadypay Saver"); 
        console.log("2")
        
    }
    async search(){
        await sleep(1000)
        console.log("4")
        
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
     

