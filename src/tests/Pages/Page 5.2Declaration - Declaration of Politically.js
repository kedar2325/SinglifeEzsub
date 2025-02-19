const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys, assertParticularText, toClick } = require('../Helper/Action');
const { excelValue } = require('../Helper/Helper');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    //Declaration Page exits check
    declarationPoliticallyTitle:"//p[contains(text(),'Declaration of Politically Exposed Person (PEP) an')]",
    //Declaration Option
    politicallyExposedPersonN:"(//div[@data-testid='radio-items'])[1]",
    politicallyExposedPersonY:"(//div[@data-testid='radio-items'])[2]",

    //Details for polictically exposed yes
    nameOfPEP:"//input[@name='name']",
    relationshipToAssured:"//div[@id='relationship']//img",

    //Next Button
    nextButton:"//button[normalize-space()='Next']"

}
class DeclarationPolitically{

    async verifyDeclarationPoliticallyTitle(){
        await assertParticularText(PageLocators.declarationPoliticallyTitle,"Declaration of Politically Exposed Person (PEP) and/or Close Associate");
        console.log("able to check polically title")
    }
    async clickPoliticallyExposedPerson(){
        console.log("click politically func in ")
        let Element;
        let PoliticallyExposedPerson=excelValue()[process.env.caseID].PoliticallyExposedPerson;
        let PoliticallyExposedPersonName=excelValue()[process.env.caseID].Name_of_PEP;
        let RelationshipAssured=excelValue()[process.env.caseID].RelationshipAssured;
        console.log(PoliticallyExposedPerson)
        console.log(PoliticallyExposedPersonName)
        console.log(RelationshipAssured)
        switch (PoliticallyExposedPerson) {
            case "No":
                Element=PageLocators.politicallyExposedPersonN;
                await toClick(Element);
                break;
            case "Yes":
                Element=PageLocators.politicallyExposedPersonY;
                await toClick(Element);

                await clickAndSendkeys(PageLocators.nameOfPEP, PoliticallyExposedPersonName);

                await Click(PageLocators.relationshipToAssured);

                let relationship_Assured=RelationshipAssured;
                await toClick(`//div[text()= '${relationship_Assured}']`);
                console.log(`${relationship_Assured} is Selected`);
                break;
            default:
                console.log("Unknown Selection");
        }
        
    }
    async clickNextButton(){
        await Click(PageLocators.nextButton);
    }
}
module.exports={DeclarationPolitically}