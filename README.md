# full-app
Neste repositório foi construído uma api para praticar o método de CRUD.
A api foi feita utilizando EXPRESS no Node JS. Nela é possível cadastrar, remover, atualizar e ler produtos de usuários.
O banco e o mongoDB hospedado no atlas.

*Projeto totalmente didatico.*
*Uma copía da Api está hospedada no heroku link: https://first-api00.herokuapp.com/ *
*Este link aceita requisições de todos os IPS, use com sabedoria.*

## Rotas
Rotas de produtos:
get"/produtos",listar produtos.
post"/produtos", cadastrar produtos.
put"/produtos/:id", atualizar produto.
get"/produtos/:id", listar produtos por ID.
get"/produtos/categoria/:value", listar produtos por categoria.
delete"/produtos/:id", deletar produto.

Rotas Usuários:
get"/usuarios", listar usuários.
get"/usuarios/:id", listar usuários por ID.
post"/usuarios", criar usuários.
put"/usuarios/:id", atualizar usuários.
delete"/usuarios/:id", deletar usuários.

## Conectando seu BD
Tudo já esta pre configurado, só precisa criar um arquivo .env no diretório principal.
O conteúdo do diretório deve ser:

BD_CONFIG="mongodb+srv://<usuario-aqui&gt;:<senha-aqui&gt;@products.iejyytf.mongodb.net/<nome-da-collection>?retryWrites=true&w=majority"