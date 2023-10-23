class RegisterHomePage{
    elements={
        firstName:()=>cy.get('#firstName'),
        lastName:()=>cy.get('#lastName'),
        username:()=>cy.get('#username'),
        password:()=>cy.get('#password'),
        confirmPassword:()=>cy.get('#confirmPassword'),
        signUpButton:()=>cy.get('[data-test="signup-submit"]'),
        onBoarding:()=>cy.get('[data-test="user-onboarding-dialog-title"] > .MuiTypography-root')
    }

    typeFirstName(firstName){
        this.elements.firstName().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastName().type(lastName);
    }

    typeUsername(username){
        this.elements.username().type(username);
    }

    typePassword(password){
        this.elements.password().type(password);
    }

    typeConfirmPassword(confirmPassword){
        this.elements.confirmPassword().type(confirmPassword);
    }

    clickSignUp(){
        this.elements.signUpButton().click();
    }

}

export default new RegisterHomePage();