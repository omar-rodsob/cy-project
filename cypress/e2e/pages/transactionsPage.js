class Transactions{
    elements={
        userToPay:()=>cy.get('[data-test^="user-list-item-"]').first(),
        amountInput:()=>cy.get('#amount'),
        noteInput:()=>cy.get('#transaction-create-description-input'),
        requestButton:()=>cy.get('[data-test="transaction-create-submit-request"]'),
        payButton:()=>cy.get('[data-test="transaction-create-submit-payment"]'),
        paiMessage:()=>cy.get('.MuiTypography-gutterBottom'),
        selectContactSpan:()=>cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiTypography-root'),
        paymentSpan:()=>cy.get(':nth-child(3) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiTypography-root'),
        completSpan:()=>cy.get(':nth-child(5) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiTypography-root'),
        newTransAnchor:()=>cy.get('[data-test="nav-top-new-transaction"]')
    }

    clickNewTransaction(){
        this.elements.newTransAnchor().click();
    }

    clickUserToPay(){
        this.elements.userToPay().click();
    }

    typeAmount(intAmount){
        this.elements.amountInput().type(intAmount);
    }

    typeNote(strNote){
        this.elements.noteInput().type(strNote);
    }

    clickPayButton(){
        this.elements.payButton().click();
    }

    clickRequestButton(){
        this.elements.requestButton().click();
    }
}

export default new Transactions();