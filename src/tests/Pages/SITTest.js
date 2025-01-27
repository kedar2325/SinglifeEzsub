const { clickAndSendkeys,Click, launchURL,  assertParticularText, pressEnter, sleep, mouseMove, mouseDown, mouseUp,locator,boundingBox, fileUpload, uploadFile } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();
const { chromium } = require('playwright');
const {filePath} = require('../fileUpload/Sample.txt')

const PageLocators={
    //elementLocator:"//canvas[@id='signature-pad']",
    //url:"https://onlinesignature.com/draw-a-signature-online"
    url:"https://practice.expandtesting.com/upload",
    elementLocator:"//input[@id='fileInput']"

}
 class Test{
    constructor(page){
        pageObject.page=page;
    }
    async NavigateLoginpage(){
        await launchURL(PageLocators.url)    
    }
    async Enter(){
        await sleep(12000);
        await uploadFile(PageLocators.elementLocator,'C:\\Users\\7821\\Desktop\\Sample.txt')
        await Click("//button[@id='fileSubmit']")
    }
    
    
    async horizontalline(){
        await sleep(12000);

        // const canvas = document.querySelector("//canvas[@id='signature-pad']");
        // const rect = canvas.getBoundingClientRect();
        // console.log('x:', rect.x, 'y:', rect.y, 'width:', rect.width, 'height:', rect.height);
        const startX = 430; // Start 100px from the left
        const startY = 410; // Start at 150px from the top (middle of the canvas)
        const endX = 1900;   // End at 300px from the left
        const endY = startY; // Keep the same Y position for a horizontal line
        
        await mouseMove(startX, startY);
        await mouseDown();
        for (let x = startX; x < endX; x += 5) {
            await mouseMove(x, startY);
            await sleep(10);  // Small delay to make sure the browser registers the movement
          }
        await mouseUp()
        }
    
    async Sleep(){
        await sleep(8000);
    }
}
 module.exports={Test}