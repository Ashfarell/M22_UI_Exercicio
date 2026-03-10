class AccountPage {
  validateAccountCreated() {
    //cy.contains('Welcome', { timeout: 10000 })        
            cy.url().should('include', 'account')
  }
}

export default new AccountPage()