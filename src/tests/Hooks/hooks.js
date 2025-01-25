const { Before, After, Status, setDefaultTimeout, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium,firefox,webkit } = require('@playwright/test');
const { pageObject } = require('./PageObjects');
require('dotenv').config();

let browser;
let pages;


BeforeAll(async function() {
    const browserName = process.env.BrowserName; 
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
// });
AfterAll(async function(){
    try {
       await browser.close();
   } catch (error) {
       console.error('Error closing the browser:', error);
   }
})

