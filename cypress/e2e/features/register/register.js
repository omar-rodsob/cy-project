import {Given,Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import RegisterHomePage from "../../pages/registerHomePage";

Before(function (){
    cy.fixture('newuser').then((newuser) => {
        // "this" is still the test context object
        this.newuser = newuser
      })
})


Given("A User accesing to signup",function (){   
    cy.visit('/signup');
    cy.url().should('contains','/signup');
});

Then("I type a first name",function (){
    RegisterHomePage.typeFirstName(this.newuser.firstname);
});

When("I type a last name",function (){
    RegisterHomePage.typeLastName(this.newuser.lastname);
});

When("I type a username",function (){
    RegisterHomePage.typeUsername(this.newuser.username);
});

When("I type a password",function (){
    RegisterHomePage.typePassword(this.newuser.password);
});

Then("I confirm a password",function (){
    RegisterHomePage.elements.signUpButton().should('not.be','enabled');
    RegisterHomePage.typeConfirmPassword(this.newuser.password);
});

When("I Click the SING UP button",function (){
    RegisterHomePage.elements.signUpButton().should('not.be','disabled');
    RegisterHomePage.clickSignUp();
});

Then("I access to my home page",function (){
    cy.url().should('contains','/signin');
    cy.login(this.newuser.username,this.newuser.password)
    .then(()=>{
        cy.url().should('contains','');
        //RegisterHomePage.elements.onBoarding().should('eq','Get Started with Real World App');
    });
});