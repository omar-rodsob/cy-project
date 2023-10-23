class HomePage{
    elements={
       userNameLabel:()=>cy.get('[data-test="sidenav-username"]'),
       userBalance:()=>cy.get('[data-test="sidenav-user-balance"]'),
       userTotalTransactions:()=>cy.get('[data-test^="transaction-amount-"]'),
       anchorEveryOne:()=>cy.get('[data-test="nav-public-tab"] > .MuiTab-wrapper'),
       anchorFriends:()=>cy.get('[data-test="nav-contacts-tab"] > .MuiTab-wrapper'),
       anchorMine:()=>cy.get('[data-test="nav-personal-tab"]'),
       subHeader:()=>cy.get('.MuiListSubheader-root'),
       rangeElement:()=>cy.get('[data-test="transaction-list-filter-amount-range-button"] > .MuiChip-label'),
       rangeContainer:()=>cy.get('#amount-range-popover > .MuiPaper-root'),
       leftRange:()=>cy.get('[style="left: 0%;"]'),
       rigthRange:()=>cy.get('[style="left: 100%;"]'),
       rowSlider:()=>cy.get('[data-test="transaction-list-filter-amount-range-slider"]'),
       dateButton:()=>cy.get('[data-test="transaction-list-filter-date-range-button"]'),
       firstDate:()=>cy.get('.Cal__Month__row > li').contains('9'),
       secondDate:()=>cy.get('.Cal__Month__row > li').contains('10'),
       noTransactionMessage:()=>cy.get('.MuiTypography-root')       
    }

    clickEveryOne(){
        this.elements.anchorEveryOne().click();
    }

    clickFriends(){
        this.elements.anchorFriends().click();
    }

    clickMine(){
        this.elements.anchorMine().click();
    }

    clickRange(){
        this.elements.rangeElement().click({force:true});
    }

    slideRight(){
        this.elements.rowSlider().type(
            "{leftarrow}"
          );
    }

    clickDateButton(){
        this.elements.dateButton().click({force:true});
    }

    clickFirstDate(){
        this.elements.firstDate().click({force:true});
    }

    clickSecondDate(){
        this.elements.secondDate().click({force:true});
    }



}

export default new HomePage();