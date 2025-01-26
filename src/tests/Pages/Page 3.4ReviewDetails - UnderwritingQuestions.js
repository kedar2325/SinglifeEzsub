const { clickAndSendkeys, sleep, toClick, assertText, Click, sendkeys } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    underwritingGreetText:"//p[text()='Underwriting questions for:']",
    height: "//input[contains(@data-testid,'height')]",
    weight: "//input[contains(@data-testid,'weight')]",
    calculate: "//button[normalize-space()='Calculate']",
    residencystatus_no: "//div[text()='Singlife Steadypay Saver']",
}
class underwritingQuestions{
    constructor(page){
        pageObject.page=page;
    }
    async VerifyGreetText(){
        await assertText(PageLocators.underwritingGreetText,'Underwriting questions for:');
    }
    async fillHeight(){
        await clickAndSendkeys(PageLocators.height,"0.11");
    }
    async fillWeight(){
        await clickAndSendkeys(PageLocators.weight,"80");
    }
    async clickCalculate(){
        await toClick(PageLocators.calculate);
        await sleep(8000);
    }
    async VerifyUnderwriting() {
        await toClick("(//p[text()='No'])[1]");
        await assertText(PageLocators.residencystatus_no,'Singlife Steadypay Saver');
        let locator;
        for(let i=1;i<12;i++){
            locator="(//p[text()='No'])["+i+"]";
            await sleep(1000);
            await toClick(locator); 
        }
    }
    async clickNotoUnderwritingQuestions(){
        let locator;
        for(let i=12;i<=22;i++){
            locator="(//p[text()='No'])["+i+"]";
            await sleep(1000);
            await toClick(locator);
        }
    }
}
module.exports={underwritingQuestions}
