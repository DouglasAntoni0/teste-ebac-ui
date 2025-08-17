/// <reference types="cypress"/>



describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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
})

