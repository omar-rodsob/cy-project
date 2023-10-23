import {Given,Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

Given("The User have a file to upload",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload");
});

Then("Select the file",()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
});

Then("The user click upload button",()=>{
    cy.get('#file-submit').click();
});

Then("the file is uploaded",()=>{
    cy.get('#uploaded-files').should('contain','example.json')
});

Then("Select the files",()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
});

Then("Drag the files",()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json','cypress/fixtures/newuser.json',{action: 'drag-drop'});
});

Then("the files are uploaded",()=>{

});
