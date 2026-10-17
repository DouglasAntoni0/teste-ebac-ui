Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('form.login #username').clear().type(usuario)
  cy.get('form.login #password').clear().type(senha, { log: false })
  cy.get('form.login [name="login"]').click()
})

Cypress.Commands.add('registrarConta', (email, senha) => {
  cy.get('form.register #reg_email').type(email)
  cy.get('form.register #reg_password').type(senha, { log: false })
  cy.get('form.register [name="register"]').click()
  cy.get('.woocommerce-MyAccount-navigation').contains('a', 'Sair').should('be.visible')
  cy.get('.woocommerce-MyAccount-content').should('contain', email.split('@')[0])
})

Cypress.Commands.add('criarContaTeste', (prefixo = 'conta') => {
  const dados = {
    email: `qa.${prefixo}.${Date.now()}.${Cypress._.random(1000000)}@example.com`,
    senha: 'CiRegression@2026!',
  }
  cy.visit('/minha-conta/')
  cy.registrarConta(dados.email, dados.senha)
  return cy.wrap(dados, { log: false })
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
  cy.registrarConta(email, senha)
  cy.get('.woocommerce-MyAccount-navigation-link--edit-account a').click()
  cy.detalhesConta(nome, sobrenome, email.split('@')[0])
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
  cy.get('#account_first_name').clear().type(nome)
  cy.get('#account_last_name').clear().type(sobrenome)
  cy.get('#account_display_name').clear().type(usuario)
  cy.get('form.edit-account [name="save_account_details"]').click()
})
