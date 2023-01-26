Feature: Loja da Petz
    Scenario: Pesquisar produtos
        Given que entrei no aplicativo da Petz e estou na pagina de pesquisa
        When pesquiso o produto "premier filhotes pelos longos"
        And aciono a consulta
        And clico na imagem da racao
        Then visualizo a racao "Ração Premier Ambientes Internos Pelos Longos para Gatos GatosFilhotes Sabor Salmão"
        And visualizo o preco "R$ 28,90"