const { clickAndSendkeys, sleep, toClick, assertText, Click } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={

    selectedquotation_exist: "//p[text()='Selected Quotations']",
    next_btn: "//button[text()='Next']",
    quotationoverview_exist: "//p[text()='Quotation Overview']",
    proceedtoapply_btn: "//button[text()='Proceed to apply']",
    lifeassured_exist: "//p[@class='sc-b68ad98c-0 detZbA']"

}
class ReviewDetailsSelectedQuotation{
    async SelectedQuotationExist(){
        await assertText(PageLocators.selectedquotation_exist,"Selected Quotations")
    }
    async ClickNextBtn(){
        await Click(PageLocators.next_btn)
    }
    async ProceedtoApplyBtn(){
        await assertText(PageLocators.quotationoverview_exist,"Quotation Overview")
        await click(PageLocators.proceedtoapply_btn)
    }

    async LifeAssuredExist(){
        await assertText(PageLocators.lifeassured_exist,"Life Assured")
    }

}
module.exports={ReviewDetailsSelectedQuotation}
