
const { clickAndSendkeys, sleep, toClick, assertText, Click, sendkeys } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    lifeassured_exist: "//p[@class='sc-b68ad98c-0 detZbA']",
    email: "//input[@name='email']",
    mobilecode: "//input[contains(@name,'mobileCC')]",
    mobileno: "//input[@name='mobileNo']",
    maritalstatus: "//div[@id='maritalStatusCode']",
    maritalstatus_married: "//div[contains(text(),'Married')]",
    race: "//div[@id='raceCode']//div[@class='css-1wy0on6']",
    race_indian: "//div[contains(text(),'Indian')]",
    countryofbirth:"//div[@id='birthCountryCode']//img[contains(@class,'sc-afc5380d-0 ekTQMr')]",
    countryofbirth_singapore: "//div[@id='birthCountryCode']//div[@class='css-18z52ef']",
    postalcode: "//input[@name='resAddress.postalCode']",
    search: "//button[text()='Search']",
    unitno: "//input[@name='resAddress.unitNo']",
    annualincome: "//input[@name='employment.annualIncome']",
    employername: "//input[@name='employment.companyName']",
    employmentduties: "//input[@name='employment.duties']",
    natureofbusiness: "//div[@id='employment.natureOfBusiness']//img[@class='sc-afc5380d-0 ekTQMr']",
    natureofbusiness_accounting: "//div[contains(text(),'Accounting/Finance')]",
    financialbackgroung_no: "(//p[text()='No'])[2]",
    next_btn: "//button[text()='Next']",
}
class ReviewDetailsLifeAssured{
    constructor(page){
        pageObject.page=page;
    }
    async verifyLifeAssuredPage(){
        await assertText(PageLocators.lifeassured_exist,"Life Assured")
    }
    async EnterContactInformation(){
        await clickAndSendkeys(PageLocators.email,process.env.email)
        await clickAndSendkeys(PageLocators.mobilecode,process.env.mobilecode)
        await clickAndSendkeys(PageLocators.mobileno,process.env.mobileno)
        await toClick(PageLocators.maritalstatus)
        await toClick(PageLocators.maritalstatus_married)
        await toClick(PageLocators.race)
        await toClick(PageLocators.race_indian)
        await toClick(PageLocators.countryofbirth)
        await toClick(PageLocators.countryofbirth_singapore)
    }
    async EnterResidentialAddress(){   
        await clickAndSendkeys(PageLocators.postalcode,process.env.postalcode)
        await toClick(PageLocators.search)   
        await clickAndSendkeys(PageLocators.unitno,process.env.unitno)
        await clickAndSendkeys(PageLocators.annualincome,process.env.annualincome);
        await clickAndSendkeys(PageLocators.employername,process.env.employername)
        await clickAndSendkeys(PageLocators.employmentduties,process.env.exactduties)  
        await toClick(PageLocators.natureofbusiness)
        await toClick(PageLocators.natureofbusiness_accounting)
        await toClick(PageLocators.financialbackgroung_no)
    }
    async GotoUnderwritingpage(){
        await toClick(PageLocators.next_btn)
        await sleep(5000);

    }


}
module.exports={ReviewDetailsLifeAssured}



