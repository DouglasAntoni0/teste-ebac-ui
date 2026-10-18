Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#username').clear().type(usuario)
  cy.get('#password').clear().type(senha, { log: false })
  cy.get('[name="login"][type="submit"]').click()
})

Cypress.Commands.add('registrarConta', (email, senha) => {
  cy.get('#reg_email').type(email)
  cy.get('#reg_password').type(senha, { log: false })
  cy.get('[name="register"][type="submit"]').click()
  cy.contains('nav a', /^Sair$/).should('be.visible')
  cy.contains('Olá, ' + email.split('@')[0]).should('be.visible')
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
  cy.contains('nav a', /^Detalhes da conta$/).click()
  cy.detalhesConta(nome, sobrenome, email.split('@')[0])
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
  cy.get('#account_first_name').clear().type(nome)
  cy.get('#account_last_name').clear().type(sobrenome)
  cy.get('#account_display_name').clear().type(usuario)
  cy.get('[name="save_account_details"][type="submit"]').click()
})
