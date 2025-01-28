
const { clickAndSendkeys, sleep, toClick, assertText, Click, select, waitSelector } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();


const PageLocators={
    smokingstatus: " //p[normalize-space()='Non-smoker']",
    nationality_click: "//div[@id='nationalityCode']//img",
    countryofresidence_click: "//div[@id='residenceCountryCode']//img[@class='sc-afc5380d-0 ekTQMr']",
    //countryofresidence_brazil: "//div[@id='residenceCountryCode']//div[contains(text(),${process.env.countryOfResidence})]",
    residencystatus: "//div[@id='residencyStatusCodeQuotation']//img[@class='sc-afc5380d-0 ekTQMr']",
    //residencystatus_permanent: "//div[contains(text(),${process.env.residencyStatus})]",
    next_btn: "//button[text()='Next']"

}

class QuotationSelectNationaliandResidency{
    constructor(page){
        pageObject.page=page;
    }

    async SmokingStatus(){
        await sleep(2000);
        let smoking_status = process.env.smokingstatus
        await toClick(`//p[normalize-space()='${smoking_status}']`)
        
    }
    async SelectNationality(){
        await Click(PageLocators.nationality_click);
        let nationality=process.env.nationality;
        await Click(`//div[@id='nationalityCode']//div[contains(text(),'${nationality}')]`);
        console.log(`User selected nationality is ${nationality}`)
    }
    // async SelectCountryofBirth(){
    //     await Click(PageLocators.countryofresidence_click)
    //     let CountryOfResidence=process.env.CountryOfResidence;
    //     await Click(`//div[@id='residenceCountryCode']//div[contains(text(),${CountryOfResidence})]`);
    //     console.log(`User selected country of residence is ${CountryOfResidence}`)

    // }
    async SelectCountryofBirth(){
        let countryofresidence = process.env.countryOfResidence
        await Click(PageLocators.countryofresidence_click)
        await toClick(`//div[@id='residenceCountryCode']//div[contains(text(),'${countryofresidence}')]`)
        console.log(`${countryofresidence} is Selected`);
        

    }
   
    async SelectResidencyStatus(){
        await toClick(PageLocators.residencystatus);
        let residency_status = process.env.residencyStatus
        await toClick(`//div[@id='residencyStatusCodeQuotation']//div[text()='${residency_status}']`)
        console.log(`${residency_status} is Selected`);

        //await toClick(PageLocators.residencystatus_permanent);
    }
    async VerifyResidencyStatus(){
        let residency_status = process.env.residencyStatus
        await assertText(`//div[contains(text(),'${residency_status}')]`,process.env.residencyStatus);
        await toClick(PageLocators.next_btn);
        await toClick(PageLocators.next_btn);
    }

}

module.exports={QuotationSelectNationaliandResidency}