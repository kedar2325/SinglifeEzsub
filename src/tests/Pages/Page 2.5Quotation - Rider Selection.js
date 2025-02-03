const { expect } = require('@playwright/test');
const { clickAndSendkeys, Click, assertText, assertParticularText, toClick, sleep } = require('../Helper/Action');
const { excelValue, UncheckRiders } = require('../Helper/Helper');
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
        
        let ListofUncheckRider=excelValue()[process.env.caseID].UncheckRider.split(',');
            for(let rider of ListofUncheckRider){
                await UncheckRiders(rider);
                await sleep(1000);
                console.log("28839 uncheck");
            }

        let ListofRider=excelValue()[process.env.caseID].Rider.split(',');
        for (let riderWithValue of ListofRider) {
            let list=riderWithValue.split('|'); 
                let rider=list[0];
                console.log(rider);
                let sumAssured=list[1];
                await RiderSelectionMethod(rider,sumAssured);
                await sleep(2000);
                console.log("28839 check");
            }
        
    }
    async clickNextButton(){
        await sleep(2000);
        await toClick(PageLocators.nextButton);
    }

}
module.exports={RiderSelection}