/// <reference types="cypress" />
describe('Funcionalidade: Detalhes da conta', () => {
  beforeEach(() => {
    cy.criarContaTeste('detalhes')
    cy.contains('nav a', /^Detalhes da conta$/).click()
  })

  it('Deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Douglas', 'Antonio', 'Douglas.qa')
    cy.get('[role="alert"]').should('contain', 'Detalhes da conta modificados com sucesso.')
    cy.visit('/minha-conta/edit-account/')
    cy.get('#account_first_name').should('have.value', 'Douglas')
    cy.get('#account_last_name').should('have.value', 'Antonio')
    cy.get('#account_display_name').should('have.value', 'Douglas.qa')
  })
})
