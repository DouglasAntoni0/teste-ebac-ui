# Teste EBAC UI - Cypress com Relatórios

![Cypress](https://img.shields.io/badge/Cypress-UI%20testing-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-evidencias-C21325?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Faker](https://img.shields.io/badge/Faker-dados%20dinamicos-0A66C2?style=for-the-badge)

Projeto de testes de interface com Cypress para a EBAC Shop, com foco em execução automatizada, geração de evidências e integração com ferramentas de relatório.

Este repositório tem um diferencial importante: além de rodar testes de UI, ele já traz configuração para relatório, vídeo, Cypress Cloud e estrutura de workflow. Isso aproxima a automação de um fluxo mais profissional de QA, no qual execução precisa gerar evidência analisável.

## Objetivo do projeto

O objetivo é validar fluxos web da EBAC Shop com Cypress e registrar evidências de execução.

O projeto cobre:

- testes de interface no navegador;
- execução em Chrome;
- geração de relatório com Mochawesome;
- screenshots embutidos;
- gravação de vídeo;
- uso de dados dinâmicos com Faker;
- preparação para CI/CD com GitHub Actions;
- integração potencial com Cypress Cloud.

## Stack utilizada

| Tecnologia | Papel |
| --- | --- |
| Cypress | Automação de UI |
| JavaScript | Linguagem dos testes |
| Faker | Geração de massa dinâmica |
| Mochawesome | Relatório HTML |
| GitHub Actions | Execução automatizada em pipeline |
| Cypress Cloud | Registro e dashboard de execução |

## O que este projeto demonstra

| Competência | Evidência | Valor técnico |
| --- | --- | --- |
| UI testing | Validação de fluxos web na EBAC Shop | Protege jornadas de interface |
| Cypress | `baseUrl`, vídeo e execução em Chrome | Execução próxima de uso real |
| Relatórios | `cypress-mochawesome-reporter` | Evidência analisável |
| Dados dinâmicos | `@faker-js/faker` | Reduz colisão de massa |
| CI/CD | Diretório `.github/workflows` | Caminho para regressão automatizada |
| Cypress Cloud | `projectId` configurado | Rastreabilidade de execuções |

## Como executar

Clone o repositório:

```bash
git clone https://github.com/DouglasAntoni0/teste-ebac-ui.git
cd teste-ebac-ui
```

Instale dependências:

```bash
npm install
```

Execute em Chrome:

```bash
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

## Evidências de execução

A configuração do relatório inclui:

- gráficos;
- título customizado de relatório;
- screenshots embutidos;
- assets inline;
- vídeo habilitado no Cypress.

Esses recursos melhoram a análise de falha e tornam a comunicação mais clara para pessoas técnicas e não técnicas.

## Estratégia de qualidade

O foco do projeto é aproximar automação de UI de uma rotina profissional:

1. Executar cenários no navegador.
2. Gerar evidências visuais.
3. Permitir execução local e em pipeline.
4. Usar dados dinâmicos quando necessário.
5. Registrar resultados de forma auditável.

## Valor das evidências para QA

Um teste que falha sem evidência gera trabalho extra para todo o time. Por isso, este projeto ganha força ao combinar automação com relatório, screenshots e vídeo. Esses artefatos reduzem a distância entre a falha e o diagnóstico, porque mostram o que aconteceu, em qual etapa e com qual comportamento visual.

Essa preocupação é importante para ambientes profissionais: QA não entrega apenas scripts, entrega clareza para tomada de decisão. Quando a execução deixa rastros bem organizados, fica mais fácil conversar com desenvolvimento, produto e liderança sobre risco, prioridade e causa provável.

## Critérios de evolução da suíte

Para este repositório crescer com consistência, a evolução deve priorizar fluxos críticos de negócio, dados controlados e boa separação entre setup e validação. Também faz sentido publicar relatórios como artifacts no GitHub Actions, mantendo histórico de execução acessível para análise.

Outro caminho forte é combinar testes de UI com chamadas de API para preparar massa, reduzindo dependência de cadastros manuais e deixando a suíte mais rápida e confiável.

## Troubleshooting

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| Relatório não aparece | Reporter não executou ou pasta mudou | Conferir configuração do Mochawesome |
| Cypress Cloud não grava | Chave de gravação não configurada | Configurar secret/token corretamente |
| Teste falha no Chrome | Browser ausente ou ambiente inconsistente | Verificar instalação do Chrome |
| Elemento não encontrado | DOM ou seletor mudou | Inspecionar aplicação alvo |

## Resultado técnico

Este repositório mostra uma camada de automação mais próxima de um fluxo profissional: execução em browser, relatório visual, evidências e possibilidade de integração contínua. A documentação deixa claro como rodar e como evoluir a suíte.

## Competências evidenciadas

- Cypress UI testing.
- Relatórios com Mochawesome.
- Evidências com screenshots e vídeo.
- Dados dinâmicos com Faker.
- Execução em Chrome.
- Preparação para CI/CD.
- Cypress Cloud.

## Possíveis evoluções

- Publicar relatório como artifact do GitHub Actions.
- Separar specs por fluxo de negócio.
- Criar Page Objects ou App Actions.
- Adicionar testes de API para preparar massa.
- Definir tags por prioridade.
- Adicionar validação visual ou screenshots comparativos.

## Conclusão

Este projeto comunica maturidade porque não para no teste rodando. Ele considera evidência, relatório, execução em browser e integração contínua. Isso é essencial para uma automação que realmente apoia decisão de qualidade.
