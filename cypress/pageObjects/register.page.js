class RegisterPage {
  fillEmail(email) {
    cy.get('#reg_email').type(email)
  }

  fillPassword(password) {
    cy.get('#reg_password').type(password)
  }

  submit() {
    cy.get('[name="register"]').click()               
  }
}

export default new RegisterPage()