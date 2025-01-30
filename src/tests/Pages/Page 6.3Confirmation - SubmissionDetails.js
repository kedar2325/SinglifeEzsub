const { expect } = require('@playwright/test');
const { Click, assertText, sleep } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    //Page Title
    ReviewDetails:"//p[normalize-space()='Review Application Details']",
    SubmitApplicationBtn:"//button[normalize-space()='Submit Application']",
    SuccessMessage:"//p[normalize-space()='Success! Your application has been submitted']"
}

class SubmitDocuments{
    async verifyReviewApplicationDetails(){
            await assertText(PageLocators.ReviewDetails,"Review Application Details");
        }
    async clickSubmitApplicationButton(){
            await Click(PageLocators.SubmitApplicationBtn);
            await sleep(2000);
    }
    async verifySubmitSuccessfully(){
        await sleep(2000);
            await assertText(PageLocators.SuccessMessage,"Success! Your application has been submitted");
    }

}
module.exports={SubmitDocuments}