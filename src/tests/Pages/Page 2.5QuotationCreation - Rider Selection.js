const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, assertText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    easyTerm: "//p[contains(text(),'EasyTerm')]",
    cancerPremium: "//p[contains(text(),'Cancer Premium Waiver II')]",
    criticalIllness: "//p[contains(text(),'Critical Illness Premium Waiver II')]",
    nextButton: "//button[contains(text(),'Next')]"

}
class RiderSelection{
    async verifyListOfRiders(){
        await assertText(PageLocators.easyTerm, "EasyTerm"); 
        await assertText(PageLocators.cancerPremium, "Cancer Premium Waiver II");
        await assertText(PageLocators.criticalIllness, "Critical Illness Premium Waiver II");
    }
    async selectRiders(){
        // Rider Selection: Check if the 'Critical Illness Premium Waiver II' & 'Easy Term' rider is available and select it
        const riderCIPW = 'Critical Illness Premium Waiver II'
        while(true){
            if(riderCIPW == 'Critical Illness Premium Waiver II'){
                await page.locator('#tick_icon').first().click()
                break
            }
            else{
                await page.locator('//p[normalize-space()="Cancer Premium Waiver II"]').check()
            }
        }
    }
    async calculatePremium(){
        await page.getByText('Term*')
        await page.getByText('Sum assured', { exact: true })
        await page.getByRole('button', { name: 'Calculate premium' }).click()
    }
    async clickNextButton(){
        await Click(PageLocators.nextButton());
    }

}
module.exports={RiderSelection}