describe('Carrinho - Intercept API', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2')
    cy.visit('/')
  })

  it('Deve simular adição de item no carrinho', () => {
    cy.intercept('POST', '**/cart**', {
      statusCode: 200,
      body: {
        success: true,
        items: [
          {
            product: 'Produto Mockado',
            quantity: 1,
            price: 99.9
          }
        ]
      }
    }).as('addToCart')

    cy.window().then((win) => {
      win.fetch('/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: 123, quantity: 1 })
      })
    })

    cy.wait('@addToCart').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.items[0].quantity).to.eq(1)
      expect(response.body.items[0].product).to.eq('Produto Mockado')
    })
  })

  it('Deve simular atualização de item no carrinho', () => {
    cy.intercept('PUT', '**/cart**', {
      statusCode: 200,
      body: {
        success: true,
        items: [
          {
            product: 'Produto Mockado',
            quantity: 3, // quantidade atualizada
            price: 99.9
          }
        ]
      }
    }).as('updateCart')

    cy.window().then((win) => {
      win.fetch('/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: 123, quantity: 3 })
      })
    })

    cy.wait('@updateCart').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.items[0].quantity).to.eq(3)
      expect(response.body.items[0].product).to.eq('Produto Mockado')
    })
  })

  it('Deve simular remoção de item no carrinho', () => {
    cy.intercept('DELETE', '**/cart**', {
      statusCode: 200,
      body: {
        success: true,
        items: [] // carrinho vazio
      }
    }).as('removeFromCart')

    cy.window().then((win) => {
      win.fetch('/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: 123 })
      })
    })

    cy.wait('@removeFromCart').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.items).to.have.length(0)
    })
  })
})
