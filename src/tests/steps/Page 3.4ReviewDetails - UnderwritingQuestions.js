const { Given, When, setDefaultTimeout, Then} = require('@cucumber/cucumber');
const { underwritingQuestions } = require('../Pages/Page 3.4ReviewDetails - UnderwritingQuestions');
const { pageObject } = require('../Hooks/PageObjects');
const { sleep } = require('../Helper/Action');
setDefaultTimeout(20000);
let underwritingpage;
Given('user able to reach the underwriting tab', async function () {
  underwritingpage = new underwritingQuestions(pageObject.page)
  await underwritingpage.VerifyGreetText();
});

When('user able to fill the height and weight fields', async function () {
  await underwritingpage.fillHeight();
  await underwritingpage.fillWeight();
});

When('user click the calculate button', async function () {
  await underwritingpage.clickCalculate();
});
When('user answer underwriting Questions', async function () {
  await underwritingpage.verifyUnderwriting();
});

// When('user complete all the underwriting questions appropratiely', async function () {

//   //await   underwritingpage.clickNotoUnderwritingQuestions();
//   });
Then('user clicks the next to move from underwriting page', async function () {
  console.log("Entered step file")
  if (underwritingpage.verifyUnderwriting) {
    // Capture screenshot and attach it to Allure
    
    const screenshot = await pageObject.page.screenshot();
    this.attach(screenshot, 'image/png');
    await sleep(1000);
  }
  await underwritingpage.clickNextButton();
});

