const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, assertText, assertParticularText, toClick, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();
const riderCIPW = 'Critical Illness Premium Waiver II'
const PageLocators={
    easyTerm: "//p[text()='EasyTerm']",
    cancerPremium: "//p[contains(text(),'Cancer Premium Waiver II')]",
    criticalIllness: "//p[contains(text(),'Critical Illness Premium Waiver II')]",
    nextButton: "//button[text()='Next']"

}
class RiderSelection{
    constructor(page){
        pageObject.page=page;
    }
    async verifyListOfRiders(){
        await assertText(PageLocators.easyTerm, "EasyTerm"); 
        //await assertParticularText(PageLocators.cancerPremium, "Cancer Premium Waiver II");
        await assertText(PageLocators.criticalIllness, "Critical Illness Premium Waiver II");
    }
    async selectRiders(){
        // Rider Selection: Check if the 'Critical Illness Premium Waiver II' & 'Easy Term' rider is available and select it

        while(true){
            if(riderCIPW == 'Critical Illness Premium Waiver II'){
                await pageObject.page.locator('#tick_icon').first().click()
                break
            }
            else{
                await page.locator('//p[normalize-space()="Cancer Premium Waiver II"]').check()
            }
        }
    }
    async calculatePremium(){
        // await page.getByText('Term*')
        // await page.getByText('Sum assured', { exact: true })
        await pageObject.page.getByRole('button', { name: 'Calculate premium' }).click()
    }
    async clickNextButton(){
        await toClick(PageLocators.nextButton);
    }

}
module.exports={RiderSelection}