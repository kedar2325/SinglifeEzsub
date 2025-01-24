const { expect } = require('@playwright/test');
const { clickAndSendkeys, launchURL, sleep, Click, assertText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyProductSelectionPage: "//p[contains(text(),'Product selection for')]",
    searchTab: "(//input[@id='search'])[1]",
    clickSelect: "//button[contains(text(),'Select')]",
    nextButton: "//button[contains(text(),'Next')]",
    verifyProductSelected: "//p[contains(text(),'Singlife Steadypay Saver')]"


}

class ProductSelection{
    async navigationToProductSelection(){
        await assertText(PageLocators.verifyProductSelectionPage, "Product selection for"); 
    }
    async search(){
        await clickAndSendkeys(PageLocators.searchTab,process.env.SearchWord); 
    }
    async selectInList(){
        await Click(PageLocators.clickSelect);
    }
    async clickNext(){
        await Click(PageLocators.nextButton);
    }
    async verifyProductsSelected(){
        await assertText(PageLocators.verifyProductSelected, "Singlife Steadypay Saver");
    }
}
module.exports={ProductSelection}
     

