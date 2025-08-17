/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve fazer login com sucesso', () => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('douglas.teste1235@gmail.com')
cy.get('#password').type('Sertanejo@2')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, douglas.teste1235 (não é douglas.teste1235? Sair)')

})

})