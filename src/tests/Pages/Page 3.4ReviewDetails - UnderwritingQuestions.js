const { clickAndSendkeys, sleep, toClick, assertText, Click, sendkeys, isVisible } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    underwritingGreetText:"//p[text()='Underwriting questions for:']",
    height: "(//input[contains(@data-testid,'height')])[1]",
    height2: "(//input[contains(@data-testid,'height')])[2]",
    weight: "(//input[contains(@data-testid,'weight')])[1]",
    weight2: "(//input[contains(@data-testid,'weight')])[1]",
    calculate: "(//button[@type='button'][normalize-space()='Calculate'])[1]",
    calculate2: "(//button[@type='button'][normalize-space()='Calculate'])[1]",
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
        await sleep(3000);
        await assertText(PageLocators.underwritingGreetText,'Underwriting questions for:');
    }
    async fillHeight(){
        let Height = String(excelValue()[process.env.caseID].Height)
        await clickAndSendkeys(PageLocators.height,Height);
    }
    async fillWeight(){
        let Weight = String(excelValue()[process.env.caseID].Weight)
        await clickAndSendkeys(PageLocators.weight,Weight);
    }
    async clickCalculate(){
        await toClick(PageLocators.calculate);
        await sleep(6000);
    }
    async verifyUnderwriting(){
        let UnderwritingQuestionsReq = excelValue()[process.env.caseID].UnderwitingQuesReq
        if(UnderwritingQuestionsReq=="Yes"){
        let path=""
            let ListofQA=excelValue()[process.env.caseID].UnderwritingQuestions.split('|');
            for (let CombineQA of ListofQA) {
                let Answer = CombineQA.split(',');
                const locatorText = Answer[0];
                const locatorValue = Answer[1];
                console.log(locatorText);
                console.log(locatorValue);
                path=`(//span[contains(text(),'${locatorText}')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${locatorValue}'])[1]`;
                await toClick(path);
                console.log(path);
                await sleep(1000);
                path="";
            }
            }
        // let SecondUnderwritingQuestionsReq = excelValue()[process.env.caseID].SecondUnderwritingQuestionsReq;
        // if(QuotationType!="Self"){
        //     console.log("P3.4 - quo <> self");
        //     await Click(PageLocators.next_btn);
        //     await sleep(4000);
        //     if(SecondUnderwritingQuestionsReq=="Yes"){
        //     console.log("UW ques not req")
        //     let Height2 = String(excelValue()[process.env.caseID].LA_Height);
        //     let Weight2 = String(excelValue()[process.env.caseID].LA_Weight);
        //     await clickAndSendkeys(PageLocators.height2,Height2);
        //     await clickAndSendkeys(PageLocators.weight2,Weight2);
        //     await toClick(PageLocators.calculate2);
        //     await sleep(4000);
        //     let path=""
        //     let SecondUnderwritingQuestions = excelValue()[process.env.caseID].SecondUnderwritingQuestions
        //     let ListofQA=SecondUnderwritingQuestions.split('|');
        //     for (let CombineQA of ListofQA) {
        //         let Answer = CombineQA.split(',');
        //         const locatorText = Answer[0];
        //         const locatorValue = Answer[1];
        //         console.log(locatorText);
        //         console.log(locatorValue);
        //         path=`(//span[contains(text(),'${locatorText}')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${locatorValue}'])[2]`;
        //         // for (let QALocator of Answer){ 
        //         //     path=path.concat(path,QALocator);
        //         // }
        //         await toClick(path);
        //         console.log(path);
        //         await sleep(1100);
        //         path="";
        //     }
        //     }
        //     console.log("p3.4 to click next button")
        //     await Click(PageLocators.next_btn);
        //     console.log("clicked next button")
        // }
        // await sleep(3000);
    }
    async verifyUnderwritingTwo(){
        let QuotationType = excelValue()[process.env.caseID].quotationType
        let SecondUnderwritingQuestionsReq = excelValue()[process.env.caseID].SecondUnderwritingQuestionsReq;
        if(QuotationType!="Self"){
            await Click(PageLocators.next_btn);
            await sleep(4000);
            if(SecondUnderwritingQuestionsReq=="Yes"){
            console.log("UW ques not req")
            let Height2 = String(excelValue()[process.env.caseID].LA_Height);
            let Weight2 = String(excelValue()[process.env.caseID].LA_Weight);
            await clickAndSendkeys(PageLocators.height2,Height2);
            await clickAndSendkeys(PageLocators.weight2,Weight2);
            await toClick(PageLocators.calculate2);
            await sleep(4000);
            let path=""
            let SecondUnderwritingQuestions = excelValue()[process.env.caseID].SecondUnderwritingQuestions
            let ListofQA=SecondUnderwritingQuestions.split('|');
            for (let CombineQA of ListofQA) {
                let Answer = CombineQA.split(',');
                const locatorText = Answer[0];
                const locatorValue = Answer[1];
                console.log(locatorText);
                console.log(locatorValue);
                path=`(//span[contains(text(),'${locatorText}')]/parent::p/parent::div/parent::div/parent::div//following-sibling::div/div/p[text()='${locatorValue}'])[2]`;
                await toClick(path);
                console.log(path);
                await sleep(1000);
                path="";
            }
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
    async clickNextButton(){
            await sleep(3000)
            await toClick(PageLocators.next_btn);
        }
}
module.exports={underwritingQuestions}
