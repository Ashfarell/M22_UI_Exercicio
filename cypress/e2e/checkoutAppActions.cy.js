import { login } from '../appActions/login.actions'
import { addProductToCartAndCheckout } from '../appActions/product.actions'
import { checkout } from '../appActions/checkout.actions'

describe('Checkout - AppActions', () => {
  it('Deve finalizar uma compra com sucesso', () => {
    cy.fixture('user').then(user => {
      login(user.usuario, user.senha)
    })

    addProductToCartAndCheckout()
    checkout()

    cy.contains('Pedido recebido').should('be.visible')
  })
})