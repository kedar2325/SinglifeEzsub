
const { clickAndSendkeys, sleep, toClick, assertText, Click, HiddenDropdown, toCheck } = require('../Helper/Action');
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
        await assertText(PageLocators.lifeassured_exist,"Life Assured")
    }
    async enterCityofResidence(){
        await clickAndSendkeys(PageLocators.cityOfResidence,process.env.cityofresidence);
    }
    async enterEmailandMobile(){
        await clickAndSendkeys(PageLocators.email,process.env.email)
        await clickAndSendkeys(PageLocators.mobilecode,process.env.mobilecode)
        await toClick(PageLocators.mobileCodeNo);
        await clickAndSendkeys(PageLocators.mobileno,process.env.mobileno)
    }
    async EnterAdditionalInformation(){  
        let marital_status = process.env.maritalstatus
        let race_code = process.env.racecode
        let countryof_birth = process.env.countryofbirth
        await toClick(PageLocators.maritalstatus)
        await toClick(`//div[text()='${marital_status}']`)
        await toClick(PageLocators.race)
        await toClick(`//div[@id='raceCode']//div[contains(text(),'${race_code}')]`)
        await toClick(PageLocators.countryofbirth)
        await toClick(`//div[@id='birthCountryCode']//div[text()='${countryof_birth}']`)
    







        //hidden dropdown for singapore country section
     //   await HiddenDropdown(PageLocators.countryofbirth,PageLocators.countryofbirth_singapore,"Singapore")
      
    }
    async EnterResidentialAddress(){   

        await clickAndSendkeys(PageLocators.postalcode,process.env.postalcode)
        await toClick(PageLocators.search)   
        await clickAndSendkeys(PageLocators.unitno,process.env.unitno)
        
        await sleep(2000);
        await toClick(PageLocators.address_landedproperty)
    }
    
    async FinancialBackground(){
            let Element;
            switch (process.env.SelectFinancialBackground) {
                case "Employed":
                    Element="//input[@id='radioGroupOtionEmployed']";
                    await toClick(Element);
                    break;
                case "Self-Employed":
                    Element="//input[@id='radioGroupOtionSelfEmployed']";
                    await toClick(Element);
                    await clickAndSendkeys(PageLocators.AnnualIncomeFromPreviousTaxYear, process.env.AnnualIncome_PreviousYear);
                    break;
                default:
                    console.log("Unknown Selection");
            }
        }
    async DefaultFinancialBackground(){
       
        await clickAndSendkeys(PageLocators.annualincome,process.env.annualincome);
        await clickAndSendkeys(PageLocators.employername,process.env.employername);
        await clickAndSendkeys(PageLocators.employmentduties,process.env.exactduties);
        await sleep(2000)
        let NatureOfBusiness=process.env.Nature_of_Business;
        await toClick(PageLocators.natureofbusiness);
        console.log(`${NatureOfBusiness} is Selected`);
        await toClick(`//div[text()= '${NatureOfBusiness}']`);
        let yes_no_selection=process.env.Select_yes_no;
        await toClick(`//p[text()='Financial Background']/following-sibling::div/p/following::div//div//p[text()='${yes_no_selection}']`);
        console.log(`${yes_no_selection} is Selected`);
        await sleep(5000);
    }
    //coutryof birth
// country
// yes or no
    async GotoUnderwritingpage(){
        await toClick(PageLocators.next_btn)
        await sleep(5000);

    }


}
module.exports={ReviewDetailsLifeAssured}



