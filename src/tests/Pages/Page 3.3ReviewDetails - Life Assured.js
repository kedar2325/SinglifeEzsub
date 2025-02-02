
const { clickAndSendkeys, sleep, toClick, assertText, Click, HiddenDropdown, toCheck, assertParticularText } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    lifeassured_exist: "//p[@class='sc-b68ad98c-0 detZbA']",
    email: "//input[@name='email']",
    cityOfResidence:"//p[text()='City of Residence']//parent::label//following-sibling::div/input",
    mobilecode: "//input[contains(@name,'mobileCC')]",
    mobileCodeNo:"//li[text()='Singapore (+65)']",
    mobileno: "//input[@name='mobileNo']",
    maritalstatus: "//div[@id='maritalStatusCode']//img",
    //maritalstatus_married: "//div[contains(text(),'${maritalstatus}')]",
    race: "//div[@id='raceCode']//img",
    countryofbirth: "//div[@id='birthCountryCode']//div[@class='css-1wy0on6']",
    country:"//div[@id='resAddress.countryCode']",
    selectCountry:"//div[@id='resAddress.countryCode']//div[text()='Brazil']",
    postalcode: "//input[@name='resAddress.postalCode']",
    search: "//button[text()='Search']",
    address_landedproperty: "//div[contains(@class,'grid gap-6 grid-cols-2 pt-6')]//img[@id='tick_icon']",
    correspondanceaddress_checkbox: "//div[@class='flex flex-start py-4']//img[@id='tick_icon']",
    unitno: "//input[@name='resAddress.unitNo']",
    annualincome: "//input[@name='employment.annualIncome']",
    employername: "//input[@name='employment.companyName']",
    employmentduties: "//input[@name='employment.duties']",
    natureofbusiness: "//div[@id='employment.natureOfBusiness']//img",
    next_btn: "//button[text()='Next']",
}
class ReviewDetailsLifeAssured{
    constructor(page){
        pageObject.page=page;
    }
    async verifyLifeAssuredPage(){
        await assertParticularText(PageLocators.lifeassured_exist,"Assured")
    }
    async enterCityofResidence(){
        await clickAndSendkeys(PageLocators.cityOfResidence,excelValue()[process.env.caseID].cityofresidence);
    }
    async enterEmailandMobile(){
        await clickAndSendkeys(PageLocators.email,excelValue()[process.env.caseID].email)
        await clickAndSendkeys(PageLocators.mobilecode,excelValue()[process.env.caseID].mobilecode)
        await toClick(PageLocators.mobileCodeNo);
        let mobileNo=String(excelValue()[process.env.caseID].mobileno);
        await clickAndSendkeys(PageLocators.mobileno,mobileNo)
    }
    async EnterAdditionalInformation(){  
        let marital_status = excelValue()[process.env.caseID].maritalstatus
        let race_code = excelValue()[process.env.caseID].racecode
        let countryof_birth = excelValue()[process.env.caseID].countryofbirth
        await toClick(PageLocators.maritalstatus)
        await toClick(`//div[text()='${marital_status}']`)
        await toClick(PageLocators.race)
        await toClick(`//div[@id='raceCode']//div[contains(text(),'${race_code}')]`)
        await toClick(PageLocators.countryofbirth)
        await toClick(`//div[@id='birthCountryCode']//div[text()='${countryof_birth}']`)
      
    }
    async EnterResidentialAddress(){   
        let postalCode=excelValue()[process.env.caseID].postalcode;
        postalCode=String(postalCode);
        await clickAndSendkeys(PageLocators.postalcode,postalCode)
        await toClick(PageLocators.search)   
        let unitNo=String(excelValue()[process.env.caseID].unitno)
        await clickAndSendkeys(PageLocators.unitno,unitNo)  
        await sleep(2000);
        await toClick(PageLocators.address_landedproperty)
    }
    
    async FinancialBackground(){
            let Element;
            switch (excelValue()[process.env.caseID].SelectFinancialBackground) {
                case "Employed":
                    Element="//input[@id='radioGroupOtionEmployed']";
                    await toClick(Element);
                    break;
                case "Self-Employed":
                    Element="//input[@id='radioGroupOtionSelfEmployed']";
                    await toClick(Element);
                    let AnnualIncome_previousYear=String(excelValue()[process.env.caseID].AnnualIncome_PreviousYear)
                    await clickAndSendkeys(PageLocators.AnnualIncomeFromPreviousTaxYear, AnnualIncome_previousYear);
                    break;
                default:
                    console.log("Unknown Selection");
            }
        }
    async DefaultFinancialBackground(){  
        let annualIncome=String(excelValue()[process.env.caseID].annualincome);
        await clickAndSendkeys(PageLocators.annualincome,annualIncome);
        await clickAndSendkeys(PageLocators.employername,excelValue()[process.env.caseID].employername);
        await clickAndSendkeys(PageLocators.employmentduties,excelValue()[process.env.caseID].exactduties);
        await sleep(2000)
        let NatureOfBusiness=excelValue()[process.env.caseID].Nature_of_Business;
        await toClick(PageLocators.natureofbusiness);
        console.log(`${NatureOfBusiness} is Selected`);
        await toClick(`//div[text()= '${NatureOfBusiness}']`);
        let yes_no_selection=excelValue()[process.env.caseID].Select_yes_no;
        await toClick(`//p[text()='Financial Background']/following-sibling::div/p/following::div//div//p[text()='${yes_no_selection}']`);
        console.log(`${yes_no_selection} is Selected`);
        //await sleep(3000);

    }
   async secondLifeAssuredDetails(){
    console.log("Second life assured details")
    //await sleep(2000);
    if(excelValue()[process.env.caseID]!="Self"){
            //assert page
            await assertParticularText(PageLocators.lifeassured_exist,"Assured")
            //enter cityof resisdence
           // await clickAndSendkeys(PageLocators.cityOfResidence,process.env.cityofresidence);
            //enter email and mobile
            await clickAndSendkeys(PageLocators.email,excelValue()[process.env.caseID].email)
        await clickAndSendkeys(PageLocators.mobilecode,excelValue()[process.env.caseID].mobilecode)
        await toClick(PageLocators.mobileCodeNo);
        let mobileNo=String(excelValue()[process.env.caseID].mobileno);
        await clickAndSendkeys(PageLocators.mobileno,mobileNo)
        //enter additional information
        let marital_status = excelValue()[process.env.caseID].maritalstatus
        let race_code = excelValue()[process.env.caseID].racecode
        let countryof_birth = excelValue()[process.env.caseID].countryofbirth
        await toClick(PageLocators.maritalstatus)
        await toClick(`//div[text()='${marital_status}']`)
        await toClick(PageLocators.race)
        await toClick(`//div[@id='raceCode']//div[contains(text(),'${race_code}')]`)
        await toClick(PageLocators.countryofbirth)
        await toClick(`//div[@id='birthCountryCode']//div[text()='${countryof_birth}']`)
        //resisdencial address
        // await clickAndSendkeys(PageLocators.postalcode,process.env.postalcode)
        // await toClick(PageLocators.search)   
        // await clickAndSendkeys(PageLocators.unitno,process.env.unitno)  
        // await sleep(2000);
        // await toClick(PageLocators.address_landedproperty)
        //financial background
        let Element;
        switch (excelValue()[process.env.caseID].SelectFinancialBackground) {
            case "Employed":
                Element="//input[@id='radioGroupOtionEmployed']";
                await toClick(Element);
                console.log("financial background is selected");
                break;
            case "Self-Employed":
                Element="//input[@id='radioGroupOtionSelfEmployed']";
                await toClick(Element);
                 let AnnualIncome_previousYear=String(excelValue()[process.env.caseID].AnnualIncome_PreviousYear)
                 await clickAndSendkeys(PageLocators.AnnualIncomeFromPreviousTaxYear, AnnualIncome_previousYear);
                break;
            default:
                console.log("Unknown Selection");
        }
        //default financial background
        await sleep(2000);
        let annualIncome=String(excelValue()[process.env.caseID].annualincome);
        await clickAndSendkeys(PageLocators.annualincome,annualIncome);
        await clickAndSendkeys(PageLocators.employername,excelValue()[process.env.caseID].employername);
        await clickAndSendkeys(PageLocators.employmentduties,excelValue()[process.env.caseID].exactduties);
        await sleep(2000)
        let NatureOfBusiness=excelValue()[process.env.caseID].Nature_of_Business;
        await toClick(PageLocators.natureofbusiness);
        console.log(`${NatureOfBusiness} is Selected`);
        await toClick(`//div[text()= '${NatureOfBusiness}']`);
        await toClick(PageLocators.next_btn);
        await sleep(3000);
        // let yes_no_selection=process.env.Select_yes_no;
        // await toClick(`//p[text()='Financial Background']/following-sibling::div/p/following::div//div//p[text()='${yes_no_selection}']`);
        // console.log(`${yes_no_selection} is Selected`);
        // await sleep(5000);
    }
   }
    async GotoUnderwritingpage(){
        await toClick(PageLocators.next_btn)
        await sleep(5000);

    }


}
module.exports={ReviewDetailsLifeAssured}



