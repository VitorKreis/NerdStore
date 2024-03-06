CREATE TABLE autores (
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  idade         INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE livros(
  id            INTEGER NOT NULL PRIMARY KEY,
  titulo          TEXT    NOT NULL,
  paginas       INTEGER NOT NULL,
  sinopse          TEXT    NOT NULL,
  autor_id      INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (autor_id) REFERENCES autores (id)
);


CREATE TABLE artistas(
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  idade         INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE mangas(
  id            INTEGER NOT NULL PRIMARY KEY,
  titulo          TEXT    NOT NULL,
  capitulo       INTEGER NOT NULL,
  sinopse          TEXT    NOT NULL,
  autor_id      INTEGER NOT NULL,
  artista_id    INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (autor_id) REFERENCES autores (id),
  FOREIGN KEY (artista_id) REFERENCES artistas(id)
);


CREATE TABLE account(
    id INTEGER NOT NULL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO autores (nome, nacionalidade, idade) 
VALUES  ("JRR Tolkien", "sul-africano", 81),
        ("Ursula LeGuin", "estadunidense", 88),
        ("Machado de Assis", "brasileira", 69,);



INSERT INTO livros(titulo, paginas, autor_id, sinopse)
VALUES ('Hobbit', 230, 1, 
'Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem à sua porta e levam-no para uma expedição'),
('Senhor do Aneis: A Socidade do Anel', 400, 1, 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.'),
('A mão esquerda da escuridão', 304, 2, 'Enviado em uma missão intergaláctica, Genly Ai, um humano, tem como missão persuadir os governantes do planeta Gethen a se unirem a uma comunidade universal. Entretanto, Genly, mesmo depois de anos de estudo, percebe-se despreparado para a situação que lhe aguardava. Ao entrar em contato com uma cultura complexa, rica, quase medieval e com outra abordagem na relação entre os gêneros, Genly perde o controle da situação.');


INSERT INTO autores(nome, nacionalidade, idade)
VALUES ('Yuki Tabata', 'japones', 39),
        ('Eiichiro Oda', 'japones', 49),
        ('Yutaka Nanten', 'japones' , 40);


INSERT INTO mangas(titulo, capitulo, sinopse, autor_id, artista_id)
VALUES ('Black Clover', 4, 'A história acompanha os dois garotos que competem entre si para se tornar o Rei Mago, o cavaleiro mágico mais forte do reino de Clover. Mesmo sem magia, Asta tenta ser um cavaleiro mágico, assim sua jornada começa quando obtém o misterioso poder "antimagia", que pode anular qualquer magia na obra',
        4, 1),
        ('One Piece', 120, 'A trama segue Monkey D. Luffy, um jovem que tem a ambição de se tornar o Rei dos Piratas - aquele que consegue todas as coisas do mundo. Para isso, ele precisa encontrar o One Piece, o tesouro lendário deixado por Gol D. Roger, primeiro rei da pirataria',
        5, 2),
        ('Cowboy Bebop', 8, 'Em Cowboy Bebop, estamos no ano de 2071. A humanidade se espalhou pelos planetas do Sistema Solar graças aos “gates”, vias expressas espaciais que interligam o Sistema Solar. Abusando da tecnologia, os criminosos também ficaram bem mais perigosos',
        6, 3);


