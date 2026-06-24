# Teste EBAC UI - Cypress com Relatórios

![Cypress](https://img.shields.io/badge/Cypress-UI%20testing-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-evidencias-C21325?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Faker](https://img.shields.io/badge/Faker-dados%20dinamicos-0A66C2?style=for-the-badge)

Projeto de testes de interface com Cypress para a EBAC Shop, com foco em execução automatizada, geração de evidências e integração com ferramentas de relatório.

## O que este projeto demonstra

| Competência | Evidência |
| --- | --- |
| UI testing | Validação de fluxos web na EBAC Shop |
| Cypress | Configuração com `baseUrl`, vídeo e execução em Chrome |
| Relatórios | Uso de `cypress-mochawesome-reporter` com screenshots embutidos |
| Dados dinâmicos | Dependência `@faker-js/faker` para massa de teste |
| CI/CD | Diretório `.github/workflows` para automação de execução |
| Cypress Cloud | `projectId` configurado no `cypress.config.js` |

## Como executar

```bash
git clone https://github.com/DouglasAntoni0/teste-ebac-ui.git
cd teste-ebac-ui
npm install
npm test
```

Executar com gravação no Cypress Cloud, quando as credenciais estiverem configuradas:

```bash
npm run cy.dash
```

Abrir o Cypress Runner:

```bash
npx cypress open
```

## Resultado técnico

Este repositório mostra uma camada de automação mais próxima de um fluxo profissional: execução em browser, relatório visual, evidências e possibilidade de integração contínua. A documentação deixa claro como rodar e como evoluir a suíte.
