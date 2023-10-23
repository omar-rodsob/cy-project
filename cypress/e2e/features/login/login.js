import {Given,Then, When} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage";
import HomePage from "../../pages/homePage";

Given("A User accesing Real World",()=>{
    cy.visit("/");       
});

Then("I type a wrong username",()=>{
    LoginPage.typeUsername("xxxx");   
    LoginPage.elements.signInButton().should('be.disabled');
});

Then("I type a password",()=>{
    LoginPage.typePassword("xxxxx");
    LoginPage.elements.signInButton().should('be.enabled')
});

Then("Click the SIG IN button",()=>{
    LoginPage.clickSignIn();
});

Then("I recieve a error message",()=>{
    LoginPage.elements.errorMessage().contains("Username or password is invalid");
});

Then("I type a valid username",()=>{
    LoginPage.typeUsername("Katharina_Bernier");
});

Then("I type a valid password",()=>{
    LoginPage.typePassword("s3cret");
});

Then("click in remember me checkbox",()=>{
   LoginPage.checkRememberMe();
});

When("Click the SIG IN button Submit",()=>{
    LoginPage.clickSignIn();
});

Then("User will go to this homepage",()=>{
   cy.url().should('eq','http://localhost:3000/');

});
