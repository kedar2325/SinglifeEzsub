const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout} = require('@cucumber/cucumber');
const { sleep } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
setDefaultTimeout(15000);
require('dotenv').config();

//login import
const { ROP } = require('../Pages/Page 4.1ReviewDetails - ROP');
const { pageObject } = require('../Hooks/PageObjects');

let ROPDetails;

Given('user able to see ROP page with product', async function () {
  ROPDetails = new ROP(pageObject.page);
  await ROPDetails.navigationToROP();
});

When('user completes assured details', async function () {
  await ROPDetails.selectAssuredDetails()
  // let QuotationType=excelValue()[process.env.caseID].quotationType
  // let NoOfQues = excelValue()[process.env.caseID].NumberOfQues1
  // if(QuotationType=="Self"){
  //   if(NoOfQues=="1"){
  //     await ROPDetails.Select_Yes_No_Ques1();
  //   }else{
  // await ROPDetails.Select_Yes_No_Ques1();
  // await ROPDetails.Select_Yes_No_Ques2();
  //   }
  // }else{
  //   await ROPDetails.Select_Yes_No_Ques1();
  // }

});
When('user completes second assured details', async function () {
  await ROPDetails.selectsecondAssuredDetails()
  // let QuotationType=excelValue()[process.env.caseID].quotationType
  // let NoOfQues = excelValue()[process.env.caseID].NumberOfQues2
  // console.log(NoOfQues);
  // if(QuotationType=="Third-Party"){
  //   await sleep(2000);
  //   if(NoOfQues=="1"){
  //     console.log("entering if");
  // await ROPDetails.Select_Yes_No_Ques2();
  // }else{
  //   await ROPDetails.SecondLA_Select_Yes_No_Ques1();
  //   await ROPDetails.SecondLA_Select_Yes_No_Ques2();
  // }
//}
});

When('user clicks next to move payer details page', async function () {
  await ROPDetails.nxtbutton()
  
})

Then('user validate the payer details text', async function () {
  await ROPDetails.verifyPayerDetails();
  // if (ROPDetails.verifyPayerDetails) {
  //   // Capture screenshot and attach it to Allure
  //   await sleep(1000);
  //   const screenshot = await pageObject.page.screenshot();
  //   this.attach(screenshot, 'image/png');
  // }

});
