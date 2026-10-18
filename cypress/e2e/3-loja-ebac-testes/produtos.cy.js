/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";
describe('Funcionalidade: Produtos ', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()

    });

    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Augusta Pullover Jacket')
        cy.get('a[href="#tab-description"]').should('contain', "Descrição")

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('h1').should('contain', produto)

    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.visitarProduto('Arcadio Gym Short')
        produtosPage.addProdutoCarrinho('34', 'Blue', qtd)
        cy.get('[role="alert"]').should('contain', 'Arcadio Gym Short').and('contain', String(qtd))
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.visitarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('[role="alert"]').should('contain', dados[0].nomeProduto)
        })
    });
});