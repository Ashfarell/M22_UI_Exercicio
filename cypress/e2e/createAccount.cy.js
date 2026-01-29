import { faker } from '@faker-js/faker'
import HomePage from '../pageObjects/home.page'
import RegisterPage from '../pageObjects/register.page'
import AccountPage from '../pageObjects/account.page'

describe('Criação de Conta - Page Objects', () => {
  it('Deve criar uma nova conta com sucesso', () => {
    const email = faker.internet.email()
    const password = faker.internet.password(10)

    HomePage.visit()
    HomePage.goToRegister()

    RegisterPage.fillEmail(email)
    RegisterPage.fillPassword(password)
    RegisterPage.submit()

    AccountPage.validateAccountCreated()
  })
})