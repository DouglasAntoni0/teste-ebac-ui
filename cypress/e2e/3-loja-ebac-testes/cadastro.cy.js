/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

const emailUnico = () => `qa.cadastro.${Date.now()}.${Cypress._.random(1000000)}@example.com`

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => cy.visit('/minha-conta/'))

  it('Deve completar o cadastro com sucesso', () => {
    cy.registrarConta(emailUnico(), 'CiRegression@2026!')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account a').click()
    cy.detalhesConta(faker.person.firstName(), faker.person.lastName(), 'Cliente QA')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })

  it('Deve completar o cadastro com sucesso - usando variaveis', () => {
    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const email = emailUnico()
    cy.registrarConta(email, 'CiRegression@2026!')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account a').click()
    cy.detalhesConta(nome, sobrenome, email.split('@')[0])
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })

  it('Deve completar o cadastro com sucesso usando comando customizado', () => {
    cy.preCadastro(emailUnico(), 'CiRegression@2026!', faker.person.firstName(), faker.person.lastName())
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })
})
