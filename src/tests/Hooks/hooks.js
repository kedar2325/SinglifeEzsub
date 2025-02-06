const { Before, After, Status, setDefaultTimeout, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium,firefox,webkit } = require('@playwright/test');
const { screenshotOnFailure } = require('../Helper/Helper');
const { pageObject } = require('./PageObjects');
const { AllureRuntime } = require('allure-cucumberjs');
require('dotenv').config();

// const path = require('path');
// const cucumberHtmlReporter = require('cucumber-html-reporter');
// const reportPath = path.join(__dirname, 'cucumber-report.html');
let browser;
let pages;


BeforeAll(async function() {
    const browserName = process.env.BrowserName; 
        // pageObject.case=process.env.NumberOfCases;
    switch (browserName.toLowerCase()) {
        case 'chromium':
            browser = await chromium.launch({ headless: false, args: ["--start-maximized"] });     
            break;
        case 'firefox':
            browser = await firefox.launch({ headless: false });
            break;
        case 'webkit':
            browser = await webkit.launch({ headless: false });
            break;
        default:
            throw new Error(`Unsupported browser: ${browserName}`);
    }
    setDefaultTimeout(60 * 1000); 
    const context = await browser.newContext({viewport: null});
    
    pages = await context.newPage();
    pageObject.page = pages;
    
    
});


// function generateReport() {
//     cucumberHtmlReporter.generate({
//         theme: 'bootstrap',
//         jsonFile: 'cucumber_report.json',
//         output: reportPath,
//         reportSuiteAsScenarios: true,
//         launchReport: true
//     });
// }

// After(async function (scenario) {
//     console.log(`Scenario status: ${scenario.result?.status}`); // Debugging
  
//     if (scenario.result?.status === Status.FAILED) {
//       console.log('❌ Scenario failed! Capturing screenshot...');
//       await screenshotOnFailure({ page: this.page }, scenario);
//     }
// })

After(async function (scenario) {
    console.log(`Scenario status: ${scenario.result?.status}`);
  
    if (scenario.result?.status === Status.FAILED) {
      console.log('❌ Scenario failed! Capturing screenshot...');
      
      // Capture and attach the screenshot
      await screenshotOnFailure(scenario);
      
  
      // Attach manually for Allure
    //   const screenshotPath = `screenshots/${scenario.pickle?.name.replace(/\s+/g, '_')}.png`;
    //   const allure = new AllureRuntime();
    //   allure.attachment(screenshotPath, Buffer.from(screenshotPath, 'base64'), 'image/png');
    }
  
  });
    
    
  
// After(async function ( scenario) {
//     const page = this.page
    

//     if (scenario.result.status === Status.FAILED && page) {
        
//         console.log(`❌ Test Failed: ${scenario.pickle.name}`);
//         const screenshot = await page.screenshot({ fullPage: true });
//         await this.attach(screenshot, 'image/png');
//         console.log('📸 Screenshot captured and attached to Allure report.');
// //       allure.attachment('Failure Screenshot', screenshot, 'image/png');

//         // Capture screenshot at the moment of failure
//        // const screenshot = await pageObject.page.screenshot({ path: `./allure-results/${scenario.pickle.name}.png` });

//         // Attach the screenshot to Allure
//        // await this.attach(screenshot, 'image/png');

//         // Capture the page console logs if available
//         //const logs = await pageObject.page.evaluate(() => console.log);
//         //await this.attach(JSON.stringify(logs, null, 2), 'application/json');
//     }
// })

// After( function(scenario) {
//     try {
//         if (scenario.result?.status === Status.FAILED) {
//             const img =  pageObject.page.screenshot({ 
//                 path: `./test-results/Screenshots/${scenario.pickle.name}.png`, 
//                 type: "png" 
//             });
//             this.attach(img, "image/png");
            
//         }
//     } catch (error) {
//         console.error('Error capturing screenshot:', error);
//     } 
//  });
AfterAll(async function(){
    try {
       await browser.close();
   } catch (error) {
       console.error('Error closing the browser:', error);
   }
})

