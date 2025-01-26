const { clickAndSendkeys,Click, launchURL,  assertParticularText, pressEnter, sleep } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    elementLocator:"//canvas[@id='signature-pad']",
    url:"https://onlinesignature.com/draw-a-signature-online"
}
 class Test{
    constructor(page){
        pageObject.page=page;
    }
    async NavigateLoginpage(){
        await launchURL(PageLocators.url)    
    }
    async Enter(){
        await sleep(2000);
        await pressEnter(PageLocators.elementLocator);
    }
    async Sleep(){
        await sleep(8000);
    }
}
 module.exports={Test}