
const { clickAndSendkeys, sleep, toClick, assertText, Click, sendkeys } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    lifeassured_exist: "//p[@class='sc-b68ad98c-0 detZbA']",
    email: "//input[@name='email']",
    mobilecode: "//input[contains(@name,'mobileCC')]",
    mobileno: "//input[@name='mobileNo']",
    maritalstatus: "//div[@id='react-select-11-placeholder']",
    maritalstatus_married: "//div[contains(text(),'Married')]",
    race: "//div[@id='raceCode']//div[@class='css-1wy0on6']",
    race_indian: "//div[contains(text(),'Indian')]",
    countryofbirth:" //div[@id='birthCountryCode']//img[contains(@class,'sc-afc5380d-0 ekTQMr')] ",
    countryofbirth_singapore: "//div[@id='birthCountryCode']//div[@class='css-18z52ef']",

    postalcode: "//input[@name='resAddress.postalCode']",
    search: "//button[text()='Search']",
    unitno: "//input[@name='resAddress.unitNo']",
    annulaincome: "//input[@name='employment.annualIncome']",
    employername: "//input[@name='employment.companyName']",
    employmentduties: "//input[@name='employment.duties']",
    natureofbusiness: "//div[@id='employment.natureOfBusiness']//img[@class='sc-afc5380d-0 ekTQMr']",
    natureofbusiness_accounting: "//div[contains(text(),'Accounting/Finance')]",
    financialbackgroung_no: "//div[contains(@class,'w-full bg-transparent')]//div[contains(@class,'sc-7997bd10-5 cnYUNw active')]",
    next_btn: "//button[text()='Next']",
}
class ReviewDetailsLifeAssured{
    async verifyLifeAssuredPage(){
        await assertText(PageLocators.lifeassured_exist,"Life Assured")
    }
    async EnterContactInformation(){
        await clickAndSendkeys(PageLocators.email,process.env.email)
        await clickAndSendkeys(PageLocators.mobilecode,process.env.mobilecode)
        await clickAndSendkeys(PageLocators.mobileno,process.env.mobileno)
        await Click(PageLocators.maritalstatus)
        await Click(PageLocators.maritalstatus_married)
        await Click(PageLocators.race)
        await Click(PageLocators.race_indian)
        await Click(PageLocators.countryofbirth)
        await Click(PageLocators.countryofbirth_singapore)
    }
    async EnterResidentialAddress(){
        await clickAndSendkeys(PageLocators.postalcode,process.env.postalcode)
        await Click(PageLocators.search)
        await clickAndSendkeys(PageLocators.unitno,process.env.unitno)
        await clickAndSendkeys(PageLocators.annulaincome,process.env,annulaincome)
        await clickAndSendkeys(PageLocators.employername,process.env.employername)
        await clickAndSendkeys(PageLocators.employmentduties,process.env.employmentduties)
        await Click(PageLocators.natureofbusiness)
        await Click(PageLocators.natureofbusiness_accounting)
        await Click(PageLocators.financialbackgroung_no)
    }
    async GotoUnderwritingpage(){
        await Click(PageLocators.next_btn)

    }


}
module.exports={ReviewDetailsLifeAssured}



