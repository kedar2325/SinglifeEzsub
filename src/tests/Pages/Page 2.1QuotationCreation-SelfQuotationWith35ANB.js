const { clickAndSendkeys,getByTextIDClick,Click, launchURL,  assertParticularText, toClick, GetByText_Click, sleep, clickByRole, doubleClick } = require('../Helper/Action');
require('dotenv').config();
const { pageObject } = require('../Hooks/PageObjects');

const PageLocators={
    customerType:"//p[contains(text(), 'Self')]",
    nextButton:"//button[contains(text(), 'Next')]",
    newEzsubButton:"//p[text()='New EzSub Profile']",
    NRICfield:"//input[@name='securityNumber']",
    salutationID:"#salutationCode img",
    firstName:"input[name='firstName']",
    DOBfield:"//input[@name='dob']",
    yearClick:"//p[text()='2025']",
    leftArrowForData:"(//div[@variant='top']//img)[1]",
    selectYear:"//div[text()='1985']",
    selectDate:"//p[text()='2']",
    occupationID:"#occupationCode",

}
class CustomerSelection{
    constructor(page){
        pageObject.page=page;
    }
 
    async  QuotationType() {
        const quotationType = process.env.quotationType;
        const InsurancePlan = process.env.InsurancePlan;
        if (InsurancePlan === "Life Insurance" || InsurancePlan === "Medical & Health Insurance" || InsurancePlan === "Accident Guard") {
            if (quotationType === "Self" || quotationType === "Third-party") {
                await toClick(`//p[contains(text(), '${quotationType}')]`);
                console.log(`${quotationType} quatation is selected`);
                await toClick(PageLocators.nextButton);
            }  
            else if (InsurancePlan === "Life Insurance" && quotationType === "Joint-Life") {
                    await toClick(`//p[contains(text(), '${quotationType}')]`);
                    console.log(`${quotationType} quatation is selected`);
                    await toClick(PageLocators.nextButton);
                }
                else if (InsurancePlan === "Medical & Health Insurance" && quotationType === "Family") {
                    await toClick(`//p[contains(text(), '${quotationType}')]`);
                    console.log(`${quotationType} quatation is selected`);
                   await toClick(PageLocators.nextButton);
               } else {
                   console.log(`For  ${InsurancePlan} no quatation type is available..`);
               }
            }
        else{
            console.log(`Unsupported quotation type ${quotationType} for ${InsurancePlan}`);
        }
    }
    

    // async clickNextButton(){
    //     await toClick(PageLocators.nextButton);
    // }
    async clickNewEzsubButton(){
        let profileType=process.env.Profile;
        if(profileType=='New EzSub Profile'){
            await toClick(`//p[text()='${profileType}']`);
        }
        else{
            console.log(`${profileType} is not yet Implemented`)
        }
       
    }
    async fillNRICnumber(){
        await clickAndSendkeys(PageLocators.NRICfield,process.env.NRIC_Number)
    }
    async fillSalutation(){
        await toClick(PageLocators.salutationID);
    }
    async selectSalutation(){
        await clickByRole('option',{ name: 'Mr', exact: true })
    }
    async EnterlastName(){
        await getByTextIDClick('lastName',"Auto");
    }
    async EnterfirstName(){
        await clickAndSendkeys(PageLocators.firstName,"Robot")
    }
    async EnterDOB(){
        await toClick(PageLocators.DOBfield);
        await toClick(PageLocators.yearClick);
        await doubleClick(PageLocators.leftArrowForData);
        await doubleClick(PageLocators.leftArrowForData);
        await Click(PageLocators.selectYear);
        await toClick(PageLocators.selectDate);
    }
    async occupation(){
         await toClick(PageLocators.occupationID);
         await clickByRole('option', { name: 'Account Executive' })
    }
}
module.exports={CustomerSelection}