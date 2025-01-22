const { Before, After, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium,firefox,webkit } = require('@playwright/test');
const { pageObject } = require('./PageObjects');
require('dotenv').config();

let browser;
let pages;

Before(async function() {
    const browserName = process.env.BrowserName; 
    switch (browserName.toLowerCase()) {
        case 'chromium':
            browser = await chromium.launch({ headless: false });
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
    const context = await browser.newContext();
    pages = await context.newPage();
    pageObject.page = pages;
});

After(async function(scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const img = await pageObject.page.screenshot({ path: `./test-results/Screenshots/${scenario.pickle.name}`, type: "png" });
        this.attach(img, "image/png");
    }
    await browser.close();
});
