const { Given, When, Then } = require('@cucumber/cucumber');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();



Given('I open the login page', async function () {
  await pageObject.page.goto(process.env.url);
  console.log(process.env.NRIC_Number);  
console.log(process.env.Password);  
console.log(process.env.LoginID); 
});

