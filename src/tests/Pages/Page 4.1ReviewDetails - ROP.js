const { expect } = require('@playwright/test');
const { clickAndSendkeys,assertText, launchURL, sleep, toClick, Click } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyROPPage: "//p[contains(text(),'')]",

    // //1st yes

    singlifeShieldNo1: "(//p[text()='No'])[1]",
    singlifeShieldNo2:"(//p[text()='No'])[2]",
    singlifeShieldNo:"(//p[text()='Yes'])[2]",
    nameofCompany1Btn:"(//div[@id='companyName'])[1]",
    nameofCompany2Btn:"(//div[@id='companyName'])[2]",
    nameOfCompany1: "//div[@id='companyName']//img[@class='sc-afc5380d-0 ekTQMr']",
    lifeSumAssured1: "//input[@name='lifeSAAmount']",
    permanentlyDisabledSumAssured1: "//input[@name='TPDSAAmount']",
    criticalIllnessSumAssured1: "//input[@name='CISAAmount']",
    disabilityIncomeSumAssured1: "//input[@name='DISAAmount']",
    personalAccidentSumAssured1: "//input[@name='PASAAmount']",

    //2nd yes
    singlifeCancerCoverPlus : "(//div[@data-testid='radio-items'])[4]",
    nameOfCompany2: "(//div[@id='companyName']//img[@class='sc-afc5380d-0 ekTQMr'])[2]",
    //policyNumber: "//input[@name='policyNumber']",
    lifeSumAssured2: "(//input[@name='lifeSAAmount'])[2]",
    permanentlyDisabledSumAssured2: "(//input[@name='TPDSAAmount'])[2]",
    criticalIllnessSumAssured2: "(//input[@name='CISAAmount'])[2]",
    disabilityIncomeSumAssured2: "(//input[@name='DISAAmount'])[2]",
    
    nextButton: "//button[contains(text(),'Next')]",

    verifyPayerDetails: "//span[contains(text(),'Are you paying for this policy?')]"
    
    
}

class ROP{
    constructor(page){
        pageObject.page=page;
    }
    async navigationToROP(){
        await sleep(1000);
        let productName= excelValue()[process.env.caseID].ProductName
        let Element = `(//p[contains(text(),'${productName}')])[1]`
        await assertText(Element, productName); 
    }
    async selectAssuredDetails(){
        await toClick("(//p[text()='No'])[1]")
    }

    async selectsecondAssuredDetails(){
        let quotation_type = excelValue()[process.env.caseID].quotationType
        if(quotation_type!='Self'){
            await toClick("//p[text()='Replacement of policies for:']/parent::div/ul/li[2]")
            await sleep(2000)
            await toClick("(//p[text()='No'])[2]")  
        }
    }

//     async  Select_Yes_No_Ques1() {
//         let Option = excelValue()[process.env.caseID].SelectYesOrNo_1
//         console.log(Option);
//         let Element;
//         switch (Option) {
//             case "No":
//                 console.log("Q1 No")
//                 Element="(//p[text()='No'])[1]";
//                 await Click(Element);
//                 break;
//             case "Yes":
//                 console.log("Q1 Yes")
//                 Element="(//p[text()='Yes'])[1]";
//                 await toClick(Element);
//                 await Click(PageLocators.nameofCompany1Btn);
//                 let CompanyName1=excelValue()[process.env.caseID].SelectCompanyName1;
//                 await toClick(`//p[text()= '${CompanyName1}']`);
//                 console.log(`${CompanyName1} is Selected`);
//                 let lifeSumAssured1=excelValue()[process.env.caseID].SumAssured
//                 let permanentlyDisabledSumAssured1=excelValue()[process.env.caseID].PermanentlyDisabled
//                 let criticalIllnessSumAssured1=excelValue()[process.env.caseID].CriticalIllness
//                 let disabilityIncomeSumAssured1=excelValue()[process.env.caseID].DisabilityIncome
//                 let personalAccidentSumAssured1=excelValue()[process.env.caseID].PersonalAccident
//                 await clickAndSendkeys(PageLocators.lifeSumAssured1,lifeSumAssured1);
//                 await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,permanentlyDisabledSumAssured1);
//                 await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,criticalIllnessSumAssured1);
//                 await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,disabilityIncomeSumAssured1);
//                 await clickAndSendkeys(PageLocators.personalAccidentSumAssured1,personalAccidentSumAssured1);
//                 break;
//             default:
//                 console.log("Unknown Selection");
//         }
//     }
    
//     async  Select_Yes_No_Ques2() {
//         await sleep(2000);
//         let Option = excelValue()[process.env.caseID].SelectYesOrNo_2
//         let Element;
//         switch (Option) {
//             case "No":
//                 console.log("Q2 No")
//                 Element="(//p[text()='No'])[2]";
//                 await toClick(Element);
//                 break;
//             case "Yes":
//                 console.log("Q2 Yes")
//                 Element="(//p[text()='Yes'])[2]";
//                 await toClick(Element)
//                 let i = 0;
//                 let Option1=excelValue()[process.env.caseID].SelectYesOrNo_1
//                 if(Option1 == "Yes"){
//                     i=2;
//                 }else{
//                     i=1
//                 }
//                 let nameofCompany2Btn=`(//div[@id='companyName'])[${i}]`
//                 let lifeSumAssured1= `(//input[@name='lifeSAAmount'])${i}`
//                 let permanentlyDisabledSumAssured1= `//input[@name='TPDSAAmount'])${i}`
//                 let criticalIllnessSumAssured1= `(//input[@name='CISAAmount'])${i}`
//                 let disabilityIncomeSumAssured1= `(//input[@name='DISAAmount'])${i}`
//                 // let personalAccidentSumAssured1= `(//input[@name='PASAAmount'])${i}`
//                 let CompanyName1=excelValue()[process.env.caseID].SelectCompanyName2;
//                 await Click(nameofCompany2Btn);
//                 await toClick(`//p[text()= '${CompanyName1}']`);
//                 console.log(`${CompanyName1} is Selected`);
//                 let ValuelifeSumAssured1=excelValue()[process.env.caseID].SumAssured2;
//                 let ValuepermanentlyDisabledSumAssured1=excelValue()[process.env.caseID].PermanentlyDisabled2;
//                 let ValuecriticalIllnessSumAssured1=excelValue()[process.env.caseID].CriticalIllness2
//                 let ValuedisabilityIncomeSumAssured1=excelValue()[process.env.caseID].DisabilityIncome2
//                 //let ValuepersonalAccidentSumAssured1=excelValue()[process.env.caseID].PersonalAccident
//                 await clickAndSendkeys(lifeSumAssured1,ValuelifeSumAssured1);
//                 await clickAndSendkeys(permanentlyDisabledSumAssured1,ValuepermanentlyDisabledSumAssured1);
//                 await clickAndSendkeys(criticalIllnessSumAssured1,ValuecriticalIllnessSumAssured1);
//                 await clickAndSendkeys(disabilityIncomeSumAssured1,ValuedisabilityIncomeSumAssured1);
//                 // if(Option1=="Yes"){
//                 //     let CompanyName2=excelValue()[process.env.caseID].SelectCompanyName2;
//                 //     await Click(PageLocators.nameofCompany2Btn);
//                 //     await toClick(`//p[text()= '${CompanyName2}']`);
//                 //     console.log(`${CompanyName2} is Selected`);
//                 //     let lifeSumAssured2=excelValue()[process.env.caseID].SumAssured2
//                 //     let permanentlyDisabledSumAssured2=excelValue()[process.env.caseID].PermanentlyDisabled2
//                 //     let criticalIllnessSumAssured2=excelValue()[process.env.caseID].CriticalIllness2
//                 //     let disabilityIncomeSumAssured2=excelValue()[process.env.caseID].DisabilityIncome2
//                 //     //await clickAndSendkeys(PageLocators.policyNumber,process.env.PolicyNo);
//                 //     await clickAndSendkeys(PageLocators.lifeSumAssured2,lifeSumAssured2);
//                 //     await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured2,permanentlyDisabledSumAssured2);
//                 //     await clickAndSendkeys(PageLocators.criticalIllnessSumAssured2,criticalIllnessSumAssured2);
//                 //     await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured2,disabilityIncomeSumAssured2);
//                 // }else{
//                 //     let CompanyName2=excelValue()[process.env.caseID].SelectCompanyName2;
//                 //     await Click(PageLocators.nameofCompany1Btn);
//                 //     await toClick(`//p[text()= '${CompanyName2}']`);
//                 //     console.log(`${CompanyName2} is Selected`);
//                 //     let lifeSumAssured2=excelValue()[process.env.caseID].SumAssured2
//                 //     let permanentlyDisabledSumAssured2=excelValue()[process.env.caseID].PermanentlyDisabled2
//                 //     let criticalIllnessSumAssured2=excelValue()[process.env.caseID].CriticalIllness2
//                 //     let disabilityIncomeSumAssured2=excelValue()[process.env.caseID].DisabilityIncome2
//                 //     //await clickAndSendkeys(PageLocators.policyNumber,process.env.PolicyNo);
//                 //     await clickAndSendkeys(PageLocators.lifeSumAssured1,lifeSumAssured2);
//                 //     await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,permanentlyDisabledSumAssured2);
//                 //     await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,criticalIllnessSumAssured2);
//                 //     await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,disabilityIncomeSumAssured2);
//                 // }
                
                
               
//                 break;
//             default:
//                 console.log("Unknown Selection");
//         }
//     }

//    async SecondLA_Select_Yes_No_Ques1() {
    
//         let Option = excelValue()[process.env.caseID].SecondLA_Select_Yes_No_Ques1
//         console.log(Option);
//         let Element;
//         switch (Option) {
//             case "No":
//                 console.log("Q3 No")
//                 Element="(//p[text()='No'])[3]";
//                 await Click(Element);
//                 break;
//             case "Yes":
//                 console.log("Q3 Yes")
//                 Element="(//p[text()='Yes'])[3]";
//                 await toClick(Element);
//                 let i=0
//                 let Option1=excelValue()[process.env.caseID].SelectYesOrNo_1
//                 let Option2=excelValue()[process.env.caseID].SelectYesOrNo_2
//                 if((Option1 == "Yes" && Option2 == "No")|| (Option1 == "No" && Option1 == "Yes")){
//                     i=2;
//                 }else if(Option1 == "Yes" && Option2 == "Yes"){
//                     i=3;
//                 }else{
//                     i=1
//                 }
//                 let nameofCompany2Btn=`(//div[@id='companyName'])[${i}]`
//                 let lifeSumAssured1= `(//input[@name='lifeSAAmount'])${i}`
//                 let permanentlyDisabledSumAssured1= `//input[@name='TPDSAAmount'])${i}`
//                 let criticalIllnessSumAssured1= `(//input[@name='CISAAmount'])${i}`
//                 let disabilityIncomeSumAssured1= `(//input[@name='DISAAmount'])${i}`
//                 let personalAccidentSumAssured1= `(//input[@name='PASAAmount'])${i}`
//                 let CompanyName1=excelValue()[process.env.caseID].LASelectCompanyName1;
//                 await Click(nameofCompany2Btn);
//                 await toClick(`//p[text()= '${CompanyName1}']`);
//                 console.log(`${CompanyName1} is Selected`);
//                 let ValuelifeSumAssured1=excelValue()[process.env.caseID].LASumAssured;
//                 let ValuepermanentlyDisabledSumAssured1=excelValue()[process.env.caseID].LAPermanentlyDisabled;
//                 let ValuecriticalIllnessSumAssured1=excelValue()[process.env.caseID].LACriticalIllness;
//                 let ValuedisabilityIncomeSumAssured1=excelValue()[process.env.caseID].LADisabilityIncome;
//                 let ValuepersonalAccidentSumAssured1=excelValue()[process.env.caseID].LAPersonalAccident;
//                 await clickAndSendkeys(lifeSumAssured1,ValuelifeSumAssured1);
//                 await clickAndSendkeys(permanentlyDisabledSumAssured1,ValuepermanentlyDisabledSumAssured1);
//                 await clickAndSendkeys(criticalIllnessSumAssured1,ValuecriticalIllnessSumAssured1);
//                 await clickAndSendkeys(disabilityIncomeSumAssured1,ValuedisabilityIncomeSumAssured1);
//                 await clickAndSendkeys(personalAccidentSumAssured1,ValuepersonalAccidentSumAssured1);
//                 break;
//             default:
//                 console.log("Unknown Selection");
//         }
//     }
//     async SecondLA_Select_Yes_No_Ques1_1(){
//         //await toClick(PageLocators.nextButton);
//         await sleep(4000);
//         let NumberofQues = excelValue()[process.env.caseID].NumberOfQues1
//         let Option = excelValue()[process.env.caseID].SelectYesOrNo_1
//         let i=1
//         console.log(Option);
//         if (NumberofQues=="1"){
//             i=2
//         }else{
//             i=3
//         }
//         let Element;
//         switch (Option) {
//             case "No":
//                 console.log("LA Q1 No")
//                 Element=`(//p[text()='No'])[${i}]`;
//                 console.log(Element);
//                 await Click(Element);
//                 break;
//             case "Yes":
//                 console.log("LA Q1 Yes")
//                 Element=`(//p[text()='Yes'])[${i}]`;
//                 console.log(Element);
//                 await toClick(Element);
//                 await Click(PageLocators.nameofCompany1Btn);
//                 let CompanyName1=excelValue()[process.env.caseID].SelectCompanyName1;
//                 await toClick(`//p[text()= '${CompanyName1}']`);
//                 console.log(`${CompanyName1} is Selected`);
//                 let lifeSumAssured1=excelValue()[process.env.caseID].SumAssured
//                 let permanentlyDisabledSumAssured1=excelValue()[process.env.caseID].PermanentlyDisabled
//                 let criticalIllnessSumAssured1=excelValue()[process.env.caseID].CriticalIllness
//                 let disabilityIncomeSumAssured1=excelValue()[process.env.caseID].DisabilityIncome
//                 let personalAccidentSumAssured1=excelValue()[process.env.caseID].PersonalAccident
//                 await clickAndSendkeys(PageLocators.lifeSumAssured1,lifeSumAssured1);
//                 await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,permanentlyDisabledSumAssured1);
//                 await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,criticalIllnessSumAssured1);
//                 await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,disabilityIncomeSumAssured1);
//                 await clickAndSendkeys(PageLocators.personalAccidentSumAssured1,personalAccidentSumAssured1);
//                 break;
//             default:
//                 console.log("Unknown Selection");
//         }
//         await toClick(PageLocators.nextButton);
//     }
//     async SecondLA_Select_Yes_No_Ques2() {
        
//         let Option=excelValue()[process.env.caseID].SecondLA_Select_Yes_No_Ques2
//         await sleep(4000);
//         let Element;
//         switch (Option) {
//             case "No":
//                 console.log("Q4 No")
//                 Element="(//p[text()='No'])[4]";
//                 await toClick(Element);
//                 break;
//             case "Yes":
//                 console.log("Q4 Yes")
//                 Element="(//p[text()='Yes'])[4]";
//                 await toClick(Element);
//                 let i=0
//                 let Option1=excelValue()[process.env.caseID].SelectYesOrNo_1
//                 let Option2=excelValue()[process.env.caseID].SelectYesOrNo_2
//                 let Option3=excelValue()[process.env.caseID].SecondLA_Select_Yes_No_Ques1

//                 if(Option1 == "No" && Option2 == "No"&& Option3 == "No"){
//                     i=1;
//                 }else if((Option1 == "Yes" && Option2 == "No" && Option3 == "Yes")|| (Option1 == "No" && Option1 == "Yes" && Option3 == "Yes")|| (Option1 == "Yes" && Option1 == "Yes" && Option3 == "No")){
//                     i=3;
//                 }else if(Option1 == "Yes" && Option2 == "Yes" && Option3 == "Yes"){
//                     i=4;
//                 }else{
//                     i=2;
//                 }

//                 let nameofCompany2Btn=`(//div[@id='companyName'])[${i}]`
//                 let lifeSumAssured1= `(//input[@name='lifeSAAmount'])${i}`
//                 let permanentlyDisabledSumAssured1= `//input[@name='TPDSAAmount'])${i}`
//                 let criticalIllnessSumAssured1= `(//input[@name='CISAAmount'])${i}`
//                 let disabilityIncomeSumAssured1= `(//input[@name='DISAAmount'])${i}`
//                 // let personalAccidentSumAssured1= `(//input[@name='PASAAmount'])${i}`
//                 let CompanyName1=excelValue()[process.env.caseID].LASelectCompanyName2;
//                 await Click(nameofCompany2Btn);
//                 await toClick(`//p[text()= '${CompanyName1}']`);
//                 console.log(`${CompanyName1} is Selected`);
//                 let ValuelifeSumAssured1=excelValue()[process.env.caseID].LASumAssured2;
//                 let ValuepermanentlyDisabledSumAssured1=excelValue()[process.env.caseID].LAPermanentlyDisabled2;
//                 let ValuecriticalIllnessSumAssured1=excelValue()[process.env.caseID].LACriticalIllness2;
//                 let ValuedisabilityIncomeSumAssured1=excelValue()[process.env.caseID].LADisabilityIncome2;
//                 //let ValuepersonalAccidentSumAssured1=excelValue()[process.env.caseID].PersonalAccident
//                 await clickAndSendkeys(lifeSumAssured1,ValuelifeSumAssured1);
//                 await clickAndSendkeys(permanentlyDisabledSumAssured1,ValuepermanentlyDisabledSumAssured1);
//                 await clickAndSendkeys(criticalIllnessSumAssured1,ValuecriticalIllnessSumAssured1);
//                 await clickAndSendkeys(disabilityIncomeSumAssured1,ValuedisabilityIncomeSumAssured1);
//                 //await clickAndSendkeys(personalAccidentSumAssured1,ValuepersonalAccidentSumAssured1);
//                 // let CompanyName2=process.env.SelectCompanyName2;
//                 // await toClick(`//p[text()= '${CompanyName2}']`);
//                 // console.log(`${CompanyName2} is Selected`);
                
//                 // //await clickAndSendkeys(PageLocators.policyNumber,process.env.PolicyNo);
//                 // await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured2);
//                 // await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled2);
//                 // await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness2);
//                 // await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome2);
//                 break;
//             default:
//                 console.log("Unknown Selection");
//         }
//         await toClick(PageLocators.nextButton);
//     }
/*
    async NoExist(){
        await toClick(PageLocators.singlifeShieldNo1);
        await toClick(PageLocators.singlifeShieldNo2);
    }

    //1st yes
    async yesisexist1(){
        await toClick(PageLocators.singlifeShieldNo);
        await clickAndSendkeys(PageLocators.nameOfCompany1,process.env.CompanyName);
        await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured);
        await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled);
        await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness);
        await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome);
        await clickAndSendkeys(PageLocators.personalAccidentSumAssured1,process.env.PersonalAccident);
   }

    //2nd yes
    async yesisexist2(){
        await toClick(PageLocators.singlifeCancerCoverPlus);
        await clickAndSendkeys(PageLocators.nameOfCompany1,process.env.CompanyName2);
        await clickAndSendkeys(PageLocators.policyNumber,process.env.PolicyNo);
        await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured2);
        await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled2);
        await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness2);
        await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome2);
   }
    */
    //Next button
    async nxtbutton(){
        await toClick(PageLocators.nextButton);
    }

    //Verification of Payer Detail
    async verifyPayerDetails(){
        await assertText(PageLocators.verifyPayerDetails, "Are you paying for this policy?"); 
    }
}
module.exports={ROP}
     