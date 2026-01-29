import { faker } from '@faker-js/faker'

export function addProductToCartAndCheckout() {

  // =========================
  // 🛍️ PRODUTO
  // =========================

  // 1️⃣ Acessa a página de produtos
  cy.get('#primary-menu > .menu-item-629 > a').click()

  // 2️⃣ Seleciona o produto (clicando na imagem)
  cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover')
    .should('be.visible')
    .click()

  // 3️⃣ Seleciona SIZE
  cy.get('.button-variable-item-33').click()

  // 4️⃣ Seleciona COLOR
  cy.get('.button-variable-item-Brown').click()

  // 5️⃣ Adiciona ao carrinho
  cy.get('.single_add_to_cart_button').click()

  // =========================
  // 🛒 MINI CART
  // =========================

  // 6️⃣ Abre o carrinho
  cy.get('#cart > .dropdown-toggle').click()

  // 7️⃣ Checkout
  cy.get(
    '#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout'
  ).click()

  // =========================
  // 🧾 CHECKOUT (FAKER)
  // =========================

  // Garantia de página
  cy.url().should('include', '/checkout')

  // Nome
  cy.get('#billing_first_name')
    .clear()
    .type(faker.person.firstName())

  cy.get('#billing_last_name')
    .clear()
    .type(faker.person.lastName())

  // Empresa (opcional)
  cy.get('#billing_company')
    .clear()
    .type(faker.company.name())

  // País
cy.get('#select2-billing_country-container').click()
cy.get('.select2-search__field')
  .type('Brasil{enter}')


  // Endereço
  cy.get('#billing_address_1')
    .clear()
    .type(faker.location.streetAddress())

  cy.get('#billing_address_2')
    .clear()
    .type(faker.location.secondaryAddress())

  cy.get('#billing_city')
    .clear()
    .type(faker.location.city())

  // Estado
  cy.get('#select2-billing_state-container').click()
  cy.get('.select2-search__field')
    .type('São Paulo{enter}')

  // CEP (fixo para evitar erro)
  cy.get('#billing_postcode')
    .clear()
    .type('01001-000')

  // Telefone
 cy.get('#billing_phone')
  .clear()
  .type('11987654321')

  // Email
  cy.get('#billing_email')
    .clear()
    .type(faker.internet.email())

  // =========================
  // 💳 PAGAMENTO
  // =========================

  cy.get('#payment_method_bacs')
    .check({ force: true })

  // =========================
  // ✅ FINALIZA PEDIDO
  // =========================

  cy.get('[name="terms"]').click()

  cy.get('#place_order').click()

  // =========================
  // 🎯 VALIDAÇÃO FINAL
  // =========================

  cy.url().should('include', 'order-received')
  cy.contains('Obrigado').should('be.visible')
}