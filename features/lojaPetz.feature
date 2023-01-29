Feature: Loja da Petz
    Scenario: Comprar duas unidades de determinado produto
        Given que entrei no aplicativo da Petz e estou na pagina de pesquisa
        When pesquiso o produto "premier filhotes pelos longos"
        And aciono a consulta
        Then visualizo a racao "Ração Premier Ambientes Internos Pelos Longos para Gatos Filhotes Sabor Salmão"

        When adiciono o produto ao carrinho
        Then mensagem "Produto adicionado com sucesso"
        
        When vou para o carrinho
        Then subtotal tem quantidade "(1 item)" e valor "28.90"
        
        When adiciono mais uma unidade do produto desejado
        Then subtotal tem quantidade "(2 itens)" e valor "57.80"