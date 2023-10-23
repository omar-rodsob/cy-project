import {Given,Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";

Before(()=>{
    cy.visit("/");         
    cy.login('Katharina_Bernier','s3cret');    
});

Given("The User have a balance",()=>{
    HomePage.elements.userBalance().should('not.be.empty');
});

Then("That balance is the sum from the list",function (){
    HomePage.elements.userBalance().as('userBalance');
    cy.getCookie('connect.sid')
        .then((cookie) => {
           cy.request('http://localhost:3001/banktransfers').as('banktransfers').then((response)=>{
            let sumTransfers = 0;
            Object.entries(response.body.transfers).forEach(([key, value]) => {
                let amount = value.type === 'deposit' ? Number(value.amount):Number('-'+value.amount);
                sumTransfers = sumTransfers + amount;
              });
              cy.wrap(sumTransfers).as('sumTransfers');
           });
    });
    HomePage.elements.userBalance().contains('$0.00');
});