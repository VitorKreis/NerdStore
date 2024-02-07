
# NerdStore

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto
Projeto de API REST de Livraria com sistema de cadastro e manejo de livros, mangas,autores, artistas e usuários.


## Stack utilizada

* `Node.js` v18.12.0
* `express` v4.18.1,
* `sequelize` v6.35.2
* `sqlite3` v5.1.7




## Instalação


```bash
  cd NerdStore
  npm install
  npm run dev
```
    
### Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/autores`
* `GET /autores`
* `GET /autores/:id`
* `GET /autores/:id/livros`
* `POST /autores`
* `PUT /autores/:id`
* `DELETE /autores/:id`

`/livros`
* `GET /livros`
* `GET /livros/:id`
* `POST /livros`
* `PUT /livros/:id`
* `DELETE /livros/:id`


`/artistas`
* `GET /artistas`
* `GET /artista/:id`
* `POST /artistas`
* `PUT /artistas/:id`
* `DELETE /artistas/:id`
