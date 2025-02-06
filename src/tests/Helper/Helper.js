const path = require('path');
const { clickAndSendkeys, getCurrentMonthName, toClick, sleep, doubleClick, mouseHoverClick, assertCheckBox, mouseDown,mouseMove,mouseUp, readExcelData } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
const { AllureRuntime, AllureReport } = require('allure-cucumberjs');


const fs = require('fs');
require('dotenv').config();

async function yearSelection(year) {
    await toClick("//p[text()='2025']");
    //let year = process.env.year;
    console.log(`User selected year is : ${year} `)
    if (year >= 2021) {
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 2021 && year >= 2011) {
        await toClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 2011 && year >= 2001) {
        await doubleClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 2001 && year >= 1991) {
        await doubleClick("(//div[@variant='top']//img)[1]");
        await toClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 1991 && year >= 1981) {
        await doubleClick("(//div[@variant='top']//img)[1]");
        await doubleClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 1981 && year >= 1971) {
        await doubleClick("(//div[@variant='top']//img)[1]");
        await doubleClick("(//div[@variant='top']//img)[1]");
        await toClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 1971 && year >= 1961) {
        await doubleClick("(//div[@variant='top']//img)[1]");
        await doubleClick("(//div[@variant='top']//img)[1]");
        await doubleClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
    else if (year < 1961 && year >= 1951) {
        await doubleClick("(//div[@variant='top']//img)[1]");
        await doubleClick("(//div[@variant='top']//img)[1]");
        await doubleClick("(//div[@variant='top']//img)[1]");
        await toClick("(//div[@variant='top']//img)[1]");
        await toClick(`//div[text()='${year}']`);
    }
}
async function MonthSelection(Month) {
    let Currentmonth = getCurrentMonthName();
    await toClick(`//p[text()='${Currentmonth}']`);
    await sleep(1000);
    let month = Month;
    console.log(`User selected Month is : ${month}`)
    await toClick(`//div[text()='${month}']`)
}
async function DateSelection(Date) {
    await sleep(1000);
    let DateValue = Date;
    console.log(`User selected date is : ${DateValue}`)
    await doubleClick(`//p[text()='${DateValue}']`);
}
async function UncheckRiders(Ridername) {
    const isRiderChecked=await pageObject.page.locator(`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//input`).isChecked();
    if(isRiderChecked){
        await toClick(`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//img`);
    }
    else{
        console.log("Rider is already unchecked");
    }
}
async function RiderSelectionMethod(Ridername,sumAssured){
        await toClick(`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//img`);
        console.log(`${Ridername} rider has been Selected`);
        if(sumAssured=="-"){
            await sleep(1000);
            await pageObject.page.getByRole('button', { name: 'Calculate premium' }).click();
        }
        else{
            console.log(`for this ${Ridername} rider user enter sum assured as ${sumAssured}`)
            await clickAndSendkeys("//input[@name='sumAssured']",sumAssured);
            await pageObject.page.getByRole('button', { name: 'Calculate premium' }).click();
        }
    // await toClick(`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//img`);
    // console.log(`${Ridername} rider has been Selected`);
    // let Webelement=`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//input`;
    // await assertCheckBox(Webelement,Ridername);
}
async function Signature(Webelement){
    await mouseHoverClick(Webelement);
      await mouseDown();
        await mouseDown();
        const startY = 150;
        for (let x = 270; x < 400; x += 5) {
            await mouseMove(x, startY);
          }
        await mouseUp();
}
function excelValue(){
    const excelData=readExcelData("C:/Users/12194/Desktop/SinglifeEzsub/data.xlsx","Sheet1")
    return excelData;
}
async function PolicyTerm(){
    let term = excelValue()[process.env.caseID].Term
    console.log(`User selected term as ${term}`)
    let pay = excelValue()[process.env.caseID].Paytype
    console.log(`User selected Pay type as ${pay}`)
    await toClick(`//div[@id='${term}']//img`);
    await toClick(`//div[@id='${term}']//div[contains(text(),'${pay}')]`)
}
async function EnterSumAssured(sumassuredElement) {
    let sumAssured=excelValue()[process.env.caseID].SA;
    sumAssured = String(sumAssured);
    console.log(`Sum Assured value is ${sumAssured}`)
    await clickAndSendkeys(sumassuredElement, sumAssured);
}
async function SumAssuredCalculate(calculatebtn) {
    await sleep(3000);
    await toClick(calculatebtn);
}
async function PaymentFrequency() {
    let paymentfrequency = excelValue()[process.env.caseID].PaymentFrequency
    await toClick(`//p[text()='${paymentfrequency}']//parent::div//following-sibling::div/input`);
    console.log(`User selects payment frequency as ${paymentfrequency}`);
}
async function NoofYears() {
    let yearText=excelValue()[process.env.caseID].ProductYear
     let years=excelValue()[process.env.caseID].NoofYears;
     years = String(years);
    await clickAndSendkeys(`//p[text()='${yearText}']//parent::label//parent::div/div/input`,years);
}

// helper.js (or rename helper.ts to helper.js)


// async function screenshotOnFailure(scenario) {
//   // Ensure scenario name is correctly retrieved
//   const scenarioName = scenario.pickle?.name || scenario.sourceLocation?.uri || 'Unknown_Scenario';
//   const formattedName = scenarioName.replace(/\s+/g, '_').replace(/[^\w\-]/g, '');
//   const screenshotPath = `screenshots/${formattedName}.png`;

//   // Ensure the directory exists
//   if (!fs.existsSync('screenshots')) {
//     fs.mkdirSync('screenshots', { recursive: true });
//   }

//   await pageObject.page.screenshot({ path: screenshotPath, timeout: 5000 });

//   // Attach the screenshot to the Cucumber report (if supported)
//   if (scenario.attach) {
//     const screenshotData = fs.readFileSync(screenshotPath);
//     scenario.attach(screenshotData.toString('base64'), 'image/png');
//     console.log(`📸 Screenshot saved and attached: ${screenshotPath}`);
//   } else {
//     console.log(`⚠️ Screenshot saved but could not attach: ${screenshotPath}`);
//   }
// }
async function screenshotOnFailure(scenario) {
    // Ensure scenario name is correctly retrieved
    const scenarioName = scenario.pickle?.name || scenario.sourceLocation?.uri || 'Unknown_Scenario';
    const formattedName = scenarioName.replace(/\s+/g, '_').replace(/[^\w\-]/g, '')  

    const screenshotPath = `failed_screenshots/${formattedName}.png`;
  
    // Ensure the directory exists
    if (!fs.existsSync('failed_screenshots')) {
      fs.mkdirSync('failed_screenshots', { recursive: true });
    }
  
    await pageObject.page.screenshot({ path: screenshotPath, timeout: 5000 });
  
    // Attach the screenshot to Allure report
    if (scenario.attach) {
      const screenshotData = fs.readFileSync(screenshotPath).toString('base64');
      scenario.attach(screenshotData, 'image/png');  // Attach as Base64 (Allure-compatible)
      console.log(`📸 Screenshot saved and attached to Allure: ${screenshotPath}`);
    } else {
      console.log(`⚠️ Screenshot saved but could not attach: ${screenshotPath}`);
    }

//   const allure = new AllureRuntime();
//   allure.attachment(screenshotPath, fs.readFileSync(screenshotPath), 'image/png');
//   console.log(`✅ Screenshot attached to Allure report: ${screenshotPath}`);
}
  
 
  
  
  




module.exports = {
    NoofYears,
    UncheckRiders,
    PaymentFrequency,
    SumAssuredCalculate,
    EnterSumAssured,
    PolicyTerm,
    excelValue,
    yearSelection,
    MonthSelection,
    DateSelection,
    RiderSelectionMethod,
    Signature,
    screenshotOnFailure
}