const { clickAndSendkeys, launchURL, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    //1st yes
    singlifeShieldNo: "(//div[@data-testid='radio-items'])[2]",
    nameOfCompany1: "#react-select-16-placeholder",
    lifeSumAssured1: "//input[@name='lifeSAAmount']",
    permanentlyDisabledSumAssured1: "//input[@name='TPDSAAmount']",
    criticalIllnessSumAssured1: "//input[@name='CISAAmount']",
    disabilityIncomeSumAssured1: "//input[@name='DISAAmount']",
    personalAccidentSumAssured1: "//input[@name='PASAAmount']",

    //2nd yes
    singlifeCancerCoverPlus : "(//div[@data-testid='radio-items'])[4]",
    nameOfCompany2: "#react-select-17-placeholder",
    policyNumber: "//input[@name='policyNumber']",
    lifeSumAssured2: "(//input[@name='lifeSAAmount'])[2]",
    permanentlyDisabledSumAssured2: "(//input[@name='TPDSAAmount'])[2]",
    criticalIllnessSumAssured2: "(//input[@name='CISAAmount'])[2]",
    disabilityIncomeSumAssured2: "(//input[@name='DISAAmount'])[2]",
    

    nextButton: "//button[contains(text(),'Next')]"
    
}

class ROP{
    //1st yes
    async yesisexist1(){
        await Click(PageLocators.SinglifeShieldNo);
    }
    async EnterNameOfCompany1(){
        await clickAndSendkeys(PageLocators.nameOfCompany1,process.env.CompanyName)
    }
    async EnterLifeSumAssured1(){
        await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured)
    }
    async EnterPermanentlyDisabledSumAssured1(){
        await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled)
    }
    async EnterCriticalIllnessSumAssured1(){
        await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness)
    }
    async EnterDisabilityIncomeSumAssured1(){
        await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome)
    }
    async EnterPersaonalAccidentSumAssured1(){
        await clickAndSendkeys(PageLocators.personalAccidentSumAssured1,process.env.PersonalAccident)
    }


    //2nd yes
    async yesisexist2(){
        await Click(PageLocators.singlifeCancerCoverPlus);
    }
    async EnterNameOfCompany2(){
        await clickAndSendkeys(PageLocators.nameOfCompany1,process.env.CompanyName2)
    }
    async EnterPolicyNumber(){
        await clickAndSendkeys(PageLocators.policyNumber,process.env.PolicyNo)
    }
    async EnterLifeSumAssured2(){
        await clickAndSendkeys(PageLocators.lifeSumAssured1,process.env.SumAssured2)
    }
    async EnterPermanentlyDisabledSumAssured2(){
        await clickAndSendkeys(PageLocators.permanentlyDisabledSumAssured1,process.env.PermanentlyDisabled2)
    }
    async EnterCriticalIllnessSumAssured2(){
        await clickAndSendkeys(PageLocators.criticalIllnessSumAssured1,process.env.CriticalIllness2)
    }
    async EnterDisabilityIncomeSumAssured2(){
        await clickAndSendkeys(PageLocators.disabilityIncomeSumAssured1,process.env.DisabilityIncome2)
    }
    
    //Next Button
    async button(){
        await Click(PageLocators.nextButton);
    }
}
module.exports={ROP}
     