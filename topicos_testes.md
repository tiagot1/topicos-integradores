1. Por que devemos fazer testes automatizados nas aplicações que desenvolvemos?

A automação permite que o teste seja repetido várias vezes, sendo mais fácil encontrar novos erros através da repetição e da simulação de cenários específicos.
O objetivo final dos testes automatizados é minimizar os problemas da abordagem manual, o tempo despendido e, consequentemente, o custo final.

2. O que são testes unitários?

São testes que verificam se uma parte específica do código, costumeiramente a nível de função, está funcionando corretamente. Em um ambiente orientado a objetos é usualmente a nível de classes e a mínima unidade de testes inclui construtores e destrutores.

3. O que são testes automatizados?

Testes automatizados são programas que executam testes em softwares que estão em construção de uma forma padronizada, sem ser necessário a intervenção humana.

4. Escolha uma pirâmide de testes e descreva com suas palavras cada secção da pirâmide.

Base: teste de unidade - são geralmente testados em pequenas partes como se fossem funções/componentes independente da sua interação com outras partes do código, uma das grandes vantagens disso é que caso algum erro for encontrado e/ou houver alguma falha no teste é possível saber o local exato do erro e não precisar inspecionar o código todo.

Meio: Testes de Integração - servem para testar um conjunto de unidades, um bom exemplo são funções/componentes que precisam interagir uma com as outras, as unidades podem funcionar normalmente, mas quando interagirem uma com as outras pode acontecer do resultado não sair como o esperado, um bom exemplo disso é a comunicação da aplicação como o banco de dados e APIS que fazem comunicação externa com a aplicação.

Topo: Testes de Ponta a Ponta (E2E) - também conhecido como End to end, um teste de extrema importância porque simula o usuário testando o software em sua aplicação final, ou seja, o usuário pode usar de todas as funcionabilidades que ele pode utilizar nessa aplicação final, se cadastrar, testar funcionabilidades, ver se a Experiencia do usuário(UX) condiz com o esperado, se o design da aplicação é intuitivo e etc..
