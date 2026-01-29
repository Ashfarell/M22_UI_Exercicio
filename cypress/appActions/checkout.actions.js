export function checkout() {

  cy.url().should('include', 'order-received')
  cy.contains('Detalhes do pedido').should('be.visible')
  cy.contains('Número do pedido').should('be.visible')
}