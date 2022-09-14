# full-app
Neste repositório foi construído uma api para praticar o método de CRUD.<br>
A api foi feita utilizando EXPRESS no Node JS. Nela é possível cadastrar, remover, atualizar e ler produtos de usuários.<br>
O banco e o mongoDB hospedado no atlas.<br>

*Projeto totalmente didatico.*<br>
*Uma copía da Api está hospedada no heroku link: https://first-api00.herokuapp.com/*<br>
*Este link aceita requisições de todos os IPS, use com sabedoria.*<br>

## Rotas
Rotas de produtos:<br>
get"/produtos",listar produtos.<br>
post"/produtos", cadastrar produtos.<br>
put"/produtos/:id", atualizar produto.<br>
get"/produtos/:id", listar produtos por ID.<br>
get"/produtos/categoria/:value", listar produtos por categoria.<br>
delete"/produtos/:id", deletar produto.<br>

Rotas Usuários:<br>
get"/usuarios", listar usuários.<br>
get"/usuarios/:id", listar usuários por ID.<br>
post"/usuarios", criar usuários.<br>
put"/usuarios/:id", atualizar usuários.<br>
delete"/usuarios/:id", deletar usuários.<br>

## Conectando seu BD
Tudo já esta pre configurado, só precisa criar um arquivo .env no diretório principal.<br>
O conteúdo do diretório deve ser:<br>
<br>
BD_CONFIG="mongodb+srv://<usuario-aqui&gt;:<senha-aqui&gt;@products.iejyytf.mongodb.net/<nome-da-collection>?retryWrites=true&w=majority"<br>
