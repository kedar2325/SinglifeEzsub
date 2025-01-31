const path = require('path');
const {  getCurrentMonthName, toClick, sleep, doubleClick, mouseHoverClick, assertCheckBox, mouseDown,mouseMove,mouseUp, readExcelData } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

async function yearSelection() {
    await toClick("//p[text()='2025']");
    let year = process.env.year;
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
async function MonthSelection() {
    let Currentmonth = getCurrentMonthName();
    await toClick(`//p[text()='${Currentmonth}']`);
    await sleep(2000);
    let month = process.env.Month
    console.log(`User selected Month is : ${month}`)
    await toClick(`//div[text()='${month}']`)
}
async function DateSelection() {
    await sleep(2000);
    let DateValue = process.env.Date;
    console.log(`User selected date is : ${DateValue}`)
    await doubleClick(`//p[text()='${DateValue}']`);
}
async function RiderSelectionMethod(Ridername){
    await toClick(`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//img`);
    console.log(`${Ridername} rider has been Selected`)
    let Webelement=`//p[contains(text(),'${Ridername}')]//parent::div//div//div[@id='InputWrapper']//input`;
    await assertCheckBox(Webelement,Ridername);
}
async function Signature(Webelement){
    await mouseHoverClick(Webelement);
    //    await mouseMove(270, 150);
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





module.exports = {
    excelValue,
    yearSelection,
    MonthSelection,
    DateSelection,
    RiderSelectionMethod,
    Signature
}