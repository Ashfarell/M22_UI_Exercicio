class HomePage {
  visit() {
    cy.visit('/')               
  }

  goToRegister() {
    cy.get('.icon-user-unfollow').click()           
    }                                              
}

export default new HomePage()