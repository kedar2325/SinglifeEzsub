const { clickAndSendkeys, sleep, toClick, assertText, Click, assertParticularText } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={

    selectedquotation_exist: "//p[text()='Selected Quotations']",
    next_btn: "//button[text()='Next']",
    quotationoverview_exist: "//p[text()='Quotation Overview']",
    proceedtoapply_btn: "//button[text()='Proceed to apply']",
    lifeassured_exist: "//p[text()='Selected Quotations']/following-sibling::p[text()='Life Assured']"

}
class ReviewDetailsSelectedQuotation{
    constructor(page){
        pageObject.page=page;
    }
    async SelectedQuotationExist(){
        await assertText(PageLocators.selectedquotation_exist,"Selected Quotations")
        await toClick(PageLocators.next_btn);
    }
    async ClickNextBtn(){
        await toClick(PageLocators.next_btn)
    }
    async ProceedtoApplyBtn(){
        await assertText(PageLocators.quotationoverview_exist,"Quotation Overview");
        await toClick(PageLocators.next_btn);
        await toClick(PageLocators.proceedtoapply_btn)
    }

    async LifeAssuredExist(){
        await assertParticularText(PageLocators.lifeassured_exist,"Assured")
    }

}
module.exports={ReviewDetailsSelectedQuotation}
