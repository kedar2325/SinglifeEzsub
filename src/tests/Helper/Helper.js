const {  getCurrentMonthName, toClick, sleep, doubleClick, mouseHoverClick } = require('../Helper/Action');
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

module.exports = {
    yearSelection,
    MonthSelection,
    DateSelection
}