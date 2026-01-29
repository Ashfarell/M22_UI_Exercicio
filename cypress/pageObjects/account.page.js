class AccountPage {
  validateAccountCreated() {
    cy.contains('Welcome').should('be.visible')                 
  }
}

export default new AccountPage()