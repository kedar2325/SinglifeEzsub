const { expect } = require('@playwright/test');
const { Click, assertText, clickAndSendkeys, uploadFile } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    //Page Title
    SupportingDocsTitle:"//p[contains(text(),'Please upload required documents to support the ap')]",
    //Upload Button
    ProofOfIdUploadBtn:"(//button[@type='button'][normalize-space()='Upload files'])[1]",
    ProofOfAddressUploadBtn:"(//button[@type='button'][normalize-space()='Upload files'])[2]",
    SectionUploadBtn:"(//button[@type='button'][normalize-space()='Upload files'])[3]",
    //Upload Docs Window
    UploadDocsTitle:"//p[normalize-space()='Upload Documents']",
    BrowseToUploadBtn:"//p[normalize-space()='browse to upload']",
    UploadAnywayBtn:"//button[normalize-space()='Upload anyway']",
    FurtherVerficationTitle:"//p[normalize-space()='We may reach out to you for verification']",
    FurtherVerificationProceedBtn:"//button[normalize-space()='Proceed']",
    UploadBtn:"//button[normalize-space()='Upload']",
    ProofIdSuccess:"(//p[contains(text(),'Uploaded')])[1]",
    ProofAddressSuccess:"(//p[contains(text(),'Uploaded')])[2]",
    ProofMasSuccess:"(//p[contains(text(),'Uploaded')])[3]",
    //nextButton
    nextButton:"//button[normalize-space()='Next']"
}

class ConfirmSupportingDocs{
    async verifySupportingDocsTitle(){
        await assertText(PageLocators.SupportingDocsTitle,"Please upload required documents to support the application");
    }
    async uploadProofOfId(){
        await Click(PageLocators.ProofOfIdUploadBtn);
        await assertText(PageLocators.UploadDocsTitle,"Upload Documents")
       // await Click(PageLocators.BrowseToUploadBtn);
        await uploadFile(PageLocators.BrowseToUploadBtn,"../src/tests/fileUpload/Code Stages Developer Guide.pdf")
        //Upload PDF code need to add
        await Click(PageLocators.UploadAnywayBtn);
        await assertText(PageLocators.FurtherVerficationTitle,"We may reach out to you for verification");
        await Click(PageLocators.FurtherVerificationProceedBtn);
        await assertText(PageLocators.ProofIdSuccess,"Uploaded")
    }
    async uploadProofOfAddress(){
        await Click(PageLocators.ProofOfAddressUploadBtn);
        await assertText(PageLocators.UploadDocsTitle,"Upload Documents")
     //   await Click(PageLocators.BrowseToUploadBtn);
        //Upload PDF code need to add
        await uploadFile(PageLocators.BrowseToUploadBtn,"../src/tests/fileUpload/Code Stages Developer Guide.pdf")
        await Click(PageLocators.UploadBtn);
        await assertText(PageLocators.ProofAddressSuccess,"Uploaded")
    }
    async uploadProofMas(){
        await Click(PageLocators.SectionUploadBtn);
        await assertText(PageLocators.UploadDocsTitle,"Upload Documents")
      //  await Click(PageLocators.BrowseToUploadBtn);
        await uploadFile(PageLocators.BrowseToUploadBtn,"../src/tests/fileUpload/Code Stages Developer Guide.pdf")
        //Upload PDF code need to add
        await Click(PageLocators.UploadBtn);
        await assertText(PageLocators.ProofMasSuccess,"Uploaded")
    }  
    async clickNextButton(){
        await Click(PageLocators.nextButton);
    }   
}
module.exports={ConfirmSupportingDocs}