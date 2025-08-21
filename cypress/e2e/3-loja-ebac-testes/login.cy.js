/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
        
    });

it('Deve fazer login com sucesso', () => {

cy.get('#username').type('douglas.teste1235@gmail.com')
cy.get('#password').type('Sertanejo@2')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, douglas.teste1235 (não é douglas.teste1235? Sair)')

})

it('Deve mostrar uma mensagem de erro ao inserir usuario invalido', () => {

cy.get('#username').type('ivalido1235@gmail.com')
cy.get('#password').type('Sertanejo@2')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('exist')
    
});

it('Deve apresentar uma mensagem de erro ao inserir senha invalida', () => {
cy.get('#username').type('douglas.teste1235@gmail.com')
cy.get('#password').type('Sertanejo@2000')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('exist')    
});

it('Deve fazer login com sucesso - Usando massa de dados', () => {
cy.get('#username').type(perfil.usuario)
cy.get('#password').type(perfil.senha)
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, douglas.teste1235 (não é douglas.teste1235? Sair)')

});

it('Deve fazer login com sucesso - Usando fixture', () => {
cy.fixture('perfil').then( dados => {
cy.get('#username').type(dados.usuario)
cy.get('#password').type(dados.senha , {log: false} )
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, douglas.teste1235 (não é douglas.teste1235? Sair)')

})

 });

it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
    cy.login('douglas.teste1235@gmail.com' , 'Sertanejo@2')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, douglas.teste1235 (não é douglas.teste1235? Sair)')

    
});

});

