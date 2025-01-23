const { Given, When, Then } = require('@cucumber/cucumber');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();



Given('User launch the login url', async function () {
  await pageObject.page.goto(process.env.url);
  console.log(process.env.NRIC_Number);  
console.log(process.env.Password);  
console.log(process.env.LoginID); 
});

When('User enters the valid loginID and Password', async function () {
        
});

When('User clicks the Login button', async function () {
        
});
Then('User validate the home page text', async function () {
        
});
