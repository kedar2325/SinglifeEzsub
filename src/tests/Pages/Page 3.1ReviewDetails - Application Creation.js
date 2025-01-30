const { clickAndSendkeys, sleep, toClick, assertText, Click } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();


const PageLocators={
    quotationsummary_exist: "//p[text()='Quotation Summary']",
    savequotation_btn: "//button[text()='Save quotation']",
    proceedtoapply_btn: "//button[text()='Proceed to apply']",
    reviewdetails_exist: "//p[text()='Review Details']"
}

class ReviewDetailsApplicationCreation{
    constructor(page){
        pageObject.page=page;
    }
    async VerifyQuotationSummaryExist(){
        await assertText(PageLocators.quotationsummary_exist,"Quotation Summary" )
    }
    async ClickSaveQuotationBtn(){
        await toClick(PageLocators.savequotation_btn)

    }
    async ProceedtoApplyBtn(){
        await Click(PageLocators.proceedtoapply_btn)
    }
    async ReviewDetailsExist(){
        await assertText(PageLocators.reviewdetails_exist,"Review Details" )
    }

    }


module.exports={ReviewDetailsApplicationCreation}