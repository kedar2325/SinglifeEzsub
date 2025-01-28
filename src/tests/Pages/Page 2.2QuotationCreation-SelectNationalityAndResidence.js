
const { clickAndSendkeys, sleep, toClick, assertText, Click, select, waitSelector } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();


const PageLocators={
    smokingstatus: " //p[normalize-space()='Non-smoker']",
    nationality_click: "//div[@id='nationalityCode']//img[@class='sc-afc5380d-0 ekTQMr']",
    //nationality_click: "//div[@id='react-select-22-placeholder']",
    //nationality_indonesia: "//div[@id='nationalityCode']//div[contains(text(),${process.env.nationality})]",
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
        let smoking_status = process.env.smokingstatus
        await toClick(`//p[normalize-space()='${smoking_status}']`)
    }
    async SelectNationality(){
        await sleep(2000);
        await Click(PageLocators,nationality_click);
        console.log("successfull");
        await clickAndSendkeys(PageLocators.nationality_click,process.env.nationality);
        //await Click(PageLocators.nationality_indonesia)
    }
    async SelectCountryofBirth(){
        await Click(PageLocators.countryofresidence_click)
        await Click(PageLocators.countryofresidence_brazil)

    }
    // async SelectResidency(){
    //     await Click(PageLocators.residencystatus)
    //     await Click(PageLocators.residencystatus_permanent)
    // }
    async SelectResidencyStatus(){
        await toClick(PageLocators.residencystatus);
        await toClick(PageLocators.residencystatus_permanent);
    }
    async VerifyResidencyStatus(){
        await assertText(PageLocators.residencystatus_permanent);
        await toClick(PageLocators.next_btn);
        await toClick(PageLocators.next_btn);
    }

}

module.exports={QuotationSelectNationaliandResidency}