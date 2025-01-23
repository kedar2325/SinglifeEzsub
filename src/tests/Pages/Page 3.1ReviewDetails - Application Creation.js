const { clickAndSendkeys, launchURL, sleep, toClick, assertText } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();


const PageLocators={
    quotationsummary_exist: "//p[normalize-space()='Quotation Summary']",
    savequotation_btn: ""
}

class ReviewDetailsApplicationCreation{
    async VerifyQuotationSummaryExist(){
        await assertText(PageLocators.quotationsummary_exist,"Quotation Summary" )
    }
    async ClickSAveQuotationBtn(){
        await toClick()

    }

    }


module.exports={}