
# NerdStore

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto
Projeto de API REST de Livraria com sistema de cadastro e manejo de livros, mangas,autores, artistas e usuários.


## Stack utilizada

**Back-end:**
* `Node.js` v18.12.0
* `express` v4.18.1,
* `sequelize` v6.35.2
* `sqlite3` v5.1.7

**Testes:**
* `Jest` v29.9.0


## Instalação

Baixe o repositorio do projeto e navegue ate a pasta, instale as dependencias.

```bash
  npm clone https://github.com/VitorKreis/NerdStore.git
  cd NerdStore
  npm install
  npm run dev
```
    
## Banco de dados

Este projeto utiliza o SQLite como gerenciador de banco de dados SQL.

O projeto já conta com uma base de dados configurada com alguns dados iniciais, localizado na pasta `src/config/DB/database.sqlite`. Tenha certeaza que tenha os drives intalados


## Populate

Neste projeto exite um arquivo para criar e popular as tabelas do banco.

Acesse o SQLite3 com `sqlite3 src\config\DB/database.sqlite`, copia todo o arquivo populate, e cole no prompt do sqlite



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

`/mangas`
* `GET /mangas`
* `GET /mangas/:id`
* `GET /mangas/artista/:id`
* `GET /mangas/autor/:id`
* `POST /mangas`
* `PUT /mangas/:id`
* `DELETE /mangas/:id`



