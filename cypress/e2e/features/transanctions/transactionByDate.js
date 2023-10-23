import {Given,Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";

Before(()=>{
    cy.visit("/");     
    cy.login('Katharina_Bernier','s3cret');
    cy.intercept('POST', 'http://localhost:3001/graphql').as('items');
});

Given('The user select a date range',()=>{
    cy.url().should('eq','http://localhost:3000/');
    cy.wait('@items');
    HomePage.clickDateButton();
    HomePage.clickFirstDate();
    HomePage.clickFirstDate();

});

Then('The user see the transactions by dates selected',()=>{
    cy.wait(5000);
    HomePage.elements.noTransactionMessage().should('contains','No Transactions');
});