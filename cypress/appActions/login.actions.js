export function login(usuario, senha) {
  cy.visit('/minha-conta')
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('[name="login"]').click()                  
}     