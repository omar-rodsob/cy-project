class LoginPage{
    elements={
        userName:()=>cy.get('#username'),
        password:()=>cy.get('#password'),
        rememberMeCheckBox:()=>cy.get('input[name="remember"]'),
        signInButton:()=>cy.get('button[type="submit"]'),
        errorMessage:()=>cy.get('.MuiAlert-message')
    }

    typeUsername(username){
        this.elements.userName().type(username);
    }

    typePassword(password){
        this.elements.password().type(password);
    }

    checkRememberMe(){
        this.elements.rememberMeCheckBox().check();
    }

    clickSignIn(){
        this.elements.signInButton().click();
    }

}

export default new LoginPage();