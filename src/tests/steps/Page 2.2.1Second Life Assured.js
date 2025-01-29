const { Given, Then, When, setDefaultTimeout  } = require("@cucumber/cucumber");
const { CustomerInformation } = require("../Pages/Page 2.2.1Second Life Assured");
const { pageObject } = require("../Hooks/PageObjects");
setDefaultTimeout(15000); 
let CustomerInformationFunction;


Given('user selects profile for second life assured', async function () {
    CustomerInformationFunction=new CustomerInformation(pageObject.page)
    await CustomerInformationFunction.clickNewEzsubButton();
        
});
When('user fills all the mandatory details', async function () {
    await CustomerInformationFunction.fillNRICnumber();
    await CustomerInformationFunction.fillSalutation();
    await CustomerInformationFunction.selectSalutation();
    await CustomerInformationFunction.EnterlastName();
    await CustomerInformationFunction.EnterfirstName();
    await CustomerInformationFunction.EnterDOB();
    await CustomerInformationFunction.occupation();
    await CustomerInformationFunction.SmokingStatus();
    await CustomerInformationFunction.SelectNationality();
    await CustomerInformationFunction.SelectCountryofBirth();
    await CustomerInformationFunction.SelectResidencyStatus();
   // await CustomerInformationFunction.VerifyResidencyStatus();
    await CustomerInformationFunction.SelectRelationship();
    
});
When('user click next button to move Product selection page', async function () {
    await CustomerInformationFunction.ClickNextButton();
        
});
Then('user verify the Product select page', async function () {
        
});