class AccountPage {
  validateAccountCreated() {
    cy.contains('Welcome', { timeout: 10000 })                
  }
}

export default new AccountPage()