const { expect } = require('@playwright/test');
const { clickAndSendkeys,assertText, launchURL, sleep, toClick } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    verifyROPPage: "//p[contains(text(),'Singlife Steadypay Saver')]",

    // //1st yes
    singlifeShieldNo1: "(//p[text()='No'])[1]",
    singlifeShieldNo2:"(//p[text()='No'])[2]",
    singlifeShieldNo:"(//p[text()='Yes'])[2]",
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
        await assertText(PageLocators.verifyROPPage, "Singlife Steadypay Saver"); 
        await sleep(2000);
    }

    async  Select_Yes_No_Ques1(SelectYesOrNo_1) {
        let Element;
        switch (SelectYesOrNo_1) {
            case "No":
                Element="(//p[text()='No'])[1]";
                await toClick(Element);
                break;
            case "Yes":
                Element="(//p[text()='Yes'])[1]";
                await toClick(Element);

                let CompanyName1=process.env.SelectCompanyName1;
                await toClick(`//p[text()= '${CompanyName1}']`);
                console.log(`${CompanyName1} is Selected`);
                
                await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured);
                await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled);
                await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness);
                await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome);
                await clickAndSendkeys(PageLocators.personalAccidentSumAssured1,process.env.PersonalAccident);
                break;
            default:
                console.log("Unknown Selection");
        }
    }

    async  Select_Yes_No_Ques2(SelectYesOrNo_2) {
        let Element;
        switch (SelectYesOrNo_2) {
            case "No":
                Element="(//p[text()='No'])[2]";
                await toClick(Element);
                break;
            case "Yes":
                Element="(//p[text()='Yes'])[2]";
                await toClick(Element);

                let CompanyName2=process.env.SelectCompanyName2;
                await toClick(`//p[text()= '${CompanyName2}']`);
                console.log(`${CompanyName2} is Selected`);
                
                //await clickAndSendkeys(PageLocators.policyNumber,process.env.PolicyNo);
                await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured2);
                await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled2);
                await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness2);
                await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome2);
   
                break;
            default:
                console.log("Unknown Selection");
        }
    }


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
    async button(){
        await toClick(PageLocators.nextButton);
    }

    //Verification of Payer Detail
    async verifyPayerDetails(){
        await assertText(PageLocators.verifyPayerDetails, "Are you paying for this policy?"); 
    }
}
module.exports={ROP}
     