import {Given,Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import Transactions from "../../pages/transactionsPage";

Before(()=>{
    cy.visit("/");     
    cy.login('Katharina_Bernier','s3cret');
    cy.intercept('POST', 'http://localhost:3001/graphql').as('items');
});

Given('The user accessing to new transaction page',()=>{
    cy.url().should('eq','http://localhost:3000/');
    Transactions.clickNewTransaction();
    cy.url().should('eq','http://localhost:3000/transaction/new');
   Transactions.elements.selectContactSpan().should('have.class','MuiStepLabel-active');
});

When('The user select another user from the list',()=>{
    Transactions.clickUserToPay();
    Transactions.elements.paymentSpan().should('have.class','MuiStepLabel-active');
});

When('Fill the ammount and comments info',()=>{
   Transactions.elements.requestButton().should('be.disabled');
   Transactions.elements.payButton().should('be.disabled');
   Transactions.typeAmount(300);
   Transactions.typeNote("paymente transaction by cypress");  
});

When('Click Pay Button',()=>{
    Transactions.elements.requestButton().should('be.enabled');
    Transactions.elements.payButton().should('be.enabled');
    Transactions.clickPayButton();
});

Then('The transaction  is created it',()=>{
    Transactions.elements.completSpan().should('have.class','MuiStepLabel-completed');
    Transactions.elements.paiMessage().should('contain','Paid $300.00 for paymente transaction by cypress');
})