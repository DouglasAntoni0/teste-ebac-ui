# Testes de interface da EBAC Shop com Cypress

[![CI](https://github.com/DouglasAntoni0/teste-ebac-ui/actions/workflows/main.yml/badge.svg)](https://github.com/DouglasAntoni0/teste-ebac-ui/actions/workflows/main.yml)

Testes de cadastro, login, detalhes da conta e produtos da EBAC Shop, com Cypress, JavaScript, Faker e Mochawesome. O repositório também mantém os exemplos iniciais gerados pelo Cypress.

## Escopo e organização

| Caminho | Conteúdo |
| --- | --- |
| `cypress/e2e/3-loja-ebac-testes/` | Cenários da loja |
| `cypress/e2e/1-getting-started/` e `2-advanced-examples/` | Exemplos do Cypress |
| `cypress/fixtures/` | Dados dos testes |
| `cypress/support/` | Comandos, suporte do reporter e Page Object de produtos |
| `cypress.config.js` | URL da loja, vídeos e Mochawesome |

A aplicação alvo é `http://lojaebac.ebaconline.art.br/`. A suíte depende da disponibilidade desse ambiente. Cadastro, login e detalhes de conta usam contas fictícias novas por execução; o fixture `perfil.json` contém somente dados de teste. Os cenários de login limpam a sessão antes de cada teste, e os de cadastro abrem o formulário no `beforeEach`.

Os cenários da loja usam IDs, nomes de campos, alertas ARIA, grupos de opções e links identificados por texto ou destino. Não usam posição no DOM, `eq`, `first` ou classes visuais para localizar controles. A busca identifica o campo visível e único; produtos e paginação são encontrados por seu conteúdo e URL. Os cenários aguardam a seleção efetiva de tamanho/cor antes de adicionar ao carrinho. Todos são executados; não há `it.only` nos specs da loja. Os exemplos de configuração e de `.end()` foram adaptados à configuração deste projeto e aos elementos atualmente disponíveis no Kitchen Sink do Cypress.

## Executar localmente

Requisitos: Node.js 22, npm e Google Chrome para `npm test`.

```bash
git clone https://github.com/DouglasAntoni0/teste-ebac-ui.git
cd teste-ebac-ui
npm ci
npm test
```

Abrir o runner:

```bash
npx cypress open
```

Executar somente os cenários da EBAC Shop:

```bash
npx cypress run --spec "cypress/e2e/3-loja-ebac-testes/*.cy.js"
```

## Cypress Cloud

O `projectId` está configurado em `cypress.config.js`. Para gravar uma execução, forneça a chave pelo ambiente.

PowerShell:

```powershell
$env:CYPRESS_RECORD_KEY = "sua-chave"
npm run cy.dash
```

Bash:

```bash
export CYPRESS_RECORD_KEY="sua-chave"
npm run cy.dash
```

O script usa `cypress run --record`; não contém chave embutida. Credenciais devem ficar fora do Git. Uma chave anteriormente publicada precisa ser substituída no Cypress Cloud; apagar o valor do arquivo atual não o remove do histórico.

## Relatórios e CI

- HTML local: `cypress/reports/html/index.html`.
- Capturas de falha: `cypress/screenshots/`.
- Vídeos: `cypress/videos/`.
- [Relatório publicado no GitHub Pages](https://douglasantoni0.github.io/teste-ebac-ui/).

O workflow `main.yml` executa em push para `main` e manualmente. Ele instala dependências, roda Cypress, envia o artefato `relatorio-mochawesome-<tentativa>` com retenção de cinco dias e publica o HTML no Pages quando o artefato foi gerado. As execuções da mesma branch são enfileiradas.

A falha dos testes reprova o job; o upload é tentado mesmo em falha, e o relatório pode mostrar cenários reprovados. O deploy usa o artefato identificado pelo job de testes e um nome de Pages específico da tentativa, evitando duplicidade ao repetir uma execução. Consulte a execução correspondente antes de interpretar o resultado publicado.

## Evolução

- Separar explicitamente exemplos do framework e regressão da loja no CI.
- Melhorar preparação e limpeza dos dados.
- Ampliar cenários negativos e identificar cada regra na matriz de cobertura.

Projeto de estudos da formação EBAC, com exemplos do Cypress e automações da loja mantidos neste repositório.
