/// <reference types="cypress" />
const massa = require('../../fixtures/perfil.json')
let perfil
const verificarLogin = () => {
  cy.contains('nav a', /^Sair$/).should('be.visible')
  cy.contains('Olá, ' + perfil.usuario.split('@')[0]).should('be.visible')
}

describe('Funcionalidade: Login', () => {
  before(() => {
    cy.criarContaTeste('login').then(dados => {
      perfil = { ...massa, usuario: dados.email, senha: dados.senha }
    })
  })
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/minha-conta/')
  })
  afterEach(() => cy.screenshot())

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha, { log: false })
    cy.get('[name="login"][type="submit"]').click()
    verificarLogin()
  })

  it('Deve mostrar uma mensagem de erro ao inserir usuario invalido', () => {
    cy.login(`inexistente.${Date.now()}@example.com`, perfil.senha)
    cy.get('[role="alert"]').should('be.visible').and('not.be.empty')
    cy.get('#username').should('be.visible')
  })

  it('Deve apresentar uma mensagem de erro ao inserir senha invalida', () => {
    cy.login(perfil.usuario, 'SenhaIncorreta@2026!')
    cy.get('[role="alert"]').should('be.visible').and('not.be.empty')
    cy.get('#username').should('be.visible')
  })

  it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.login(perfil.usuario, massa.senha)
    verificarLogin()
  })

  it('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then(dados => cy.login(perfil.usuario, dados.senha))
    verificarLogin()
  })

  it('Deve fazer login com sucesso - usando comandos customizados', () => {
    cy.login(perfil.usuario, perfil.senha)
    verificarLogin()
  })
})
