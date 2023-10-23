import {Given,Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";

Before(()=>{
    cy.visit("/");     
    cy.login('Katharina_Bernier','s3cret');
    cy.intercept('POST', 'http://localhost:3001/graphql').as('items');
});

Given('The User See His HomePage',()=>{
    cy.url().should('eq','http://localhost:3000/');
});

Then('clicks the friends tab',()=>{
    HomePage.clickFriends();
    cy.url().should('include','/contacts');
});

Then('clicks the mine tab',()=>{
    HomePage.clickMine();
    cy.url().should('include','/personal');
});

Then('clicks the everyone tab',()=>{
    HomePage.clickEveryOne();
    cy.url().should('include','');
});

Then('click range button',()=>{
    cy.wait('@items');
    HomePage.clickRange();
    HomePage.elements.rangeContainer().should('be.visible');
});

Then('move right range',()=>{
    HomePage.slideRight();
   //HomePage.elements.rigthRange().should('have.attr','aria-valuenow','50');
});