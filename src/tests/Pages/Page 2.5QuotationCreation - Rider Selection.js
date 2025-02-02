const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, assertText, assertParticularText, toClick, sleep } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
const { RiderSelectionMethod } = require('../Helper/Helper');
require('dotenv').config();
const riderCIPW = 'Critical Illness Premium Waiver II'
const PageLocators={
    RiderGreetText:"//div[text()='Rider(s) Selection']",
    easyTerm: "//p[text()='EasyTerm']",
    cancerPremium: "//p[contains(text(),'Cancer Premium Waiver II')]",
    criticalIllness: "//p[contains(text(),'Critical Illness Premium Waiver II')]",
    nextButton: "//button[text()='Next']"

}
class RiderSelection{
    constructor(page){
        pageObject.page=page;
    }
    async verifyRiderGreetText(){
        await assertText(PageLocators.RiderGreetText,"Rider(s) Selection");
    }
    async selectRiders(){
        let ListofRider=process.env.Rider.split(',');
        for (let rider of ListofRider) {
            await RiderSelectionMethod(rider);
        }
    }
    async calculatePremium(){
        // await page.getByText('Term*')
        // await page.getByText('Sum assured', { exact: true })
        await pageObject.page.getByRole('button', { name: 'Calculate premium' }).click();
        await sleep(2000);
    }
    async clickNextButton(){
        await toClick(PageLocators.nextButton);
    }

}
module.exports={RiderSelection}