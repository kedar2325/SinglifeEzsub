
const { clickAndSendkeys, sleep, toClick, assertText, Click, select, waitSelector } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();


const PageLocators={
    nationality_click: "//div[@id='nationalityCode']//img[@class='sc-afc5380d-0 ekTQMr']",
    nationality_indonesia: "//div[@id='nationalityCode']//div[contains(text(),'Singapore')]",
    countryofresidence_click: "//div[@id='residenceCountryCode']//img[@class='sc-afc5380d-0 ekTQMr']",
    countryofresidence_brazil: "//div[@id='residenceCountryCode']//div[text()='Singapore']",
    residencystatus: "//div[@id='residencyStatusCodeQuotation']//img[@class='sc-afc5380d-0 ekTQMr']",
    residencystatus_permanent: "//div[contains(text(),'Citizen')]",
    next_btn: "//button[text()='Next']"

}

class QuotationSelectNationaliandResidency{
    constructor(page){
        pageObject.page=page;
    }
    async SelectNationality(){
        await Click(PageLocators.nationality_click)
        await Click(PageLocators.nationality_indonesia)
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
        await assertText(PageLocators.residencystatus_permanent, "Citizen");
        await toClick(PageLocators.next_btn);
        await toClick(PageLocators.next_btn);
    }

}

module.exports={QuotationSelectNationaliandResidency}