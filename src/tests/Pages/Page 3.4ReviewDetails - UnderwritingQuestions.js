const { clickAndSendkeys, sleep, toClick, assertText, Click, sendkeys, isVisible } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    underwritingGreetText:"//p[text()='Underwriting questions for:']",
    height: "//input[contains(@data-testid,'height')]",
    weight: "//input[contains(@data-testid,'weight')]",
    calculate: "//button[normalize-space()='Calculate']",
    residencystatus_no: "//div[text()='Singlife Steadypay Saver']",
    underwritingNotReq:"//div[contains(text(),'This section is not required for this application')]",
    //
    underwitingQuestion:"span[contains(text(),'In the last 12 months preceding the date of this application, have you been residing in Singapore for more than 183 days?')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='No']",
    underwitingQuestion:"span[contains(text(),'In the last 12 months preceding the date of this application, have you been residing in Singapore for more than 183 days?')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='No']",
    next_btn: "//button[text()='Next']",
    //Questions
    // 1.In the last 12 months preceding the date of this application, have you been residing in Singapore
    // 2.In the next 12 months, do you plan to spend more than 90 days outside of your current country
    // 3.Do you take part in any of the following or plan to in future?
    // 4.Do you drink alcohol?
    // 5.In the last 10 years, have you been treated for alcoholism or used habit forming drug(s)?
    // 6.Heart attack, coronary artery disease, irregular heartbeat, heart valve disorder or any heart
    // 7.Stroke, epilepsy or any other neurological disorder?
    // 8.Diabetes, raised blood sugar or thyroid disorders?
    // 9.Depression, anxiety or any other mental disorder?
    // 10.Kidney or liver (e.g hepatitis B or C) disorder?

}
class underwritingQuestions{
    constructor(page){
        pageObject.page=page;
    }
    async VerifyGreetText(){
        await assertText(PageLocators.underwritingGreetText,'Underwriting questions for:');
    }
    async fillHeight(){
        await clickAndSendkeys(PageLocators.height,process.env.Height);
    }
    async fillWeight(){
        await clickAndSendkeys(PageLocators.weight,process.env.Weight);
    }
    async clickCalculate(){
        await toClick(PageLocators.calculate);
        await sleep(8000);
    }
    async verifyUnderwriting(){
        let UnderwritingQuestionsReq = excelValue()[pageObject.case].UnderwitingQuesReq
        if(UnderwritingQuestionsReq=="Yes"){
        let path=""
            let ListofQA=process.env.UnderwritingQuestions.split('|');
            for (let CombineQA of ListofQA) {
                let Answer = CombineQA.split(',');
                const locatorText = Answer[0];
                const locatorValue = Answer[1];
                console.log(locatorText);
                console.log(locatorValue);
                path=`//span[contains(text(),'${locatorText}')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${locatorValue}']`;
                // for (let QALocator of Answer){ 
                //     path=path.concat(path,QALocator);
                // }
                await toClick(path);
                console.log(path);
                await sleep(1100);
                path="";
            }
            }
    }
    // async VerifyUnderwriting() {
    //     await toClick("(//p[text()='No'])[1]");
    //     await assertText(PageLocators.residencystatus_no,'Singlife Steadypay Saver');
    //     let locator;
    //     for(let i=1;i<12;i++){
    //         locator="(//p[text()='No'])["+i+"]";
    //         await sleep(2000);
    //         await toClick(locator); 
    //     }
    // }
    // async clickNotoUnderwritingQuestions(){
    //     let locator;
    //     for(let i=12;i<=22;i++){
    //         locator="(//p[text()='No'])["+i+"]";
    //         await sleep(2000);
    //         await toClick(locator);
    //     }
    // }
    // async clickNextButton(){
    //         console.log("to click next button")
    //         await toClick(PageLocators.next_btn);
    //         console.log("clicked next button")
    //     }
}
module.exports={underwritingQuestions}
