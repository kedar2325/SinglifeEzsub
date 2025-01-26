const { pageObject } = require("../Hooks/PageObjects");
const { expect, selectors } = require("@playwright/test");

async function launchURL(URL) {
    await pageObject.page.goto(URL);
    return pageObject.page;
}
async function GetByText_Click(text) {
    await pageObject.page.getByText(text).click()
}
async function getByTextIDClick(text,input){
    await pageObject.page.getByTestId(text).fill(input)
}
async function GetByText_fill(text,parameterText) {
    await pageObject.page.getByText(text).fill(parameterText);
}


async function toClick(Webelement) {
    await pageObject.page.locator(Webelement).click();
}

async function sendkeys(Webelement, text) {
    await pageObject.page.locator(Webelement).fill(text);
}

async function clickAndSendkeys(Webelement, text) {
    await pageObject.page.locator(Webelement).click();
    await pageObject.page.locator(Webelement).fill(text);
}

async function Fill(Webelement, text) {
    await pageObject.page.fill(Webelement, text);
}
async function fillByText(text, inputValue) {
    const element = await pageObject.page.getByText(text, { exact: true });
    await element.fill(inputValue);
}
async function clickByText(text, inputValue) {
    const element = await pageObject.page.getByText(text, { exact: true });
    await element.click(inputValue);
}

async function Click(Webelement) {
    await pageObject.page.click(Webelement);
}

async function select(Webelement, text) {
    await pageObject.page.click(Webelement);
    const option = await pageObject.page.$(Webelement);
    await option?.selectOption(text);
    await pageObject.page.selectOption(Webelement, text);
}

async function doubleClick(Webelement) {
    await pageObject.page.dblclick(Webelement);
}

async function Tab(Webelement) {
    await pageObject.page.tap(Webelement);
}

async function mouceClick(x, y) {
    await pageObject.page.mouse.click(x, y);
}

async function moucedoubleClick(x, y) {
    await pageObject.page.mouse.dblclick(x, y);
}

async function mousedown() {
    await pageObject.page.mouse.down();
}

async function sleep(time) {
    await pageObject.page.waitForTimeout(time);
}

async function assertURL(URL) {
    const url = pageObject.page.url();
    expect(url).toBe(URL);
}

async function waitSelector(Webelement) {
    await pageObject.page.waitForSelector(Webelement);
}

async function dropDownValidate(Webelement, options) {
    await pageObject.page.selectOption(Webelement, options);
}

async function takeScreenshot(name) {
    await pageObject.page.screenshot({ path: "test-results/Screenshots/" + Date.now() + name + ".png" });
}

async function statusCode(response, code) {
    if (response.status() == code) {
        console.log(`Response status code is ${code}`);
    }
}

async function responseData(response) {
    console.log(await response.text());
}

async function responseJSON(response) {
    const jsonResponse = await response.json();

    if (Array.isArray(jsonResponse) && jsonResponse.length > 0) {
        const lastItem = jsonResponse[jsonResponse.length - 1];
        if (lastItem && lastItem._id) {
            const id = lastItem._id;
            console.log('Fetched ID:', id);
            return id;
        } else {
            console.error('No _id property found in the last item:', lastItem);
            return undefined;
        }
    } else {
        console.error('No data available in response or incorrect format:', jsonResponse);
        return undefined;
    }
}

async function responseURL(response) {
    console.log(await response.url());
}

async function responseRequest(response) {
    console.log(await response.request());
}

async function responseHeaders(response) {
    console.log(await response.headers());
}

async function assertText(Webelement, text) {
    await expect(pageObject.page.locator(Webelement)).toHaveText(text);
}
async function assertParticularText(Webelement,text) {
    const elementText = await pageObject.page.locator(Webelement).textContent();
  if (!elementText.includes(text)) {
    throw new Error(`Expected text: "${text}", but found: "${elementText}"`);
  }
}

async function cookieVerification() {
    const cookies = await pageObject.page.context().cookies();
    console.log(`Cookies present in the page are: ${JSON.stringify(cookies, null, 2)}`);
}

async function setCookies(dataForCookie) {
    await pageObject.page.context().addCookies(dataForCookie);
}

async function mouseHoverClick(Webelement) {
    const locator = pageObject.page.locator(Webelement);
    await locator.hover();
    await locator.click();
}

async function fileUpload(filepath) {
    execFile(filepath, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing AutoIt script: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout} - File upload successfully`);
    });
}
async function clickByRole(role, options = {}) {
    const element = await pageObject.page.getByRole(role, options);
    await element.click();
};
async function fillByRole(role, inputValue, options = {}) {
    const element = await pageObject.page.getByRole(role, options);
    await element.fill(inputValue);
};
async function pressEnter(Webelement){
    const element= await pageObject.page.locator(Webelement)
    await element.press('Enter');
};



module.exports = {
    launchURL,
    GetByText_Click,
    GetByText_fill,
    getByTextIDClick,
    toClick,
    sendkeys,
    clickAndSendkeys,
    Fill,
    Click,
    fillByText,
    clickByText,
    select,
    doubleClick,
    Tab,
    mouceClick,
    moucedoubleClick,
    mousedown,
    fillByRole,
    clickByRole,
    sleep,
    assertURL,
    waitSelector,
    dropDownValidate,
    takeScreenshot,
    statusCode,
    responseData,
    responseJSON,
    responseURL,
    responseRequest,
    responseHeaders,
    assertText,
    assertParticularText,
    cookieVerification,
    setCookies,
    mouseHoverClick,
    fileUpload,
    pressEnter,
};
