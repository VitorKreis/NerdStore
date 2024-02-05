CREATE TABLE autores (
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  idade         INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO autores (nome, nacionalidade, idade, createdAt, updatedAt) 
VALUES  ("JRR Tolkien", "sul-africano", 81, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Ursula LeGuin", "estadunidense", 88, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Machado de Assis", "brasileira", 69, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


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



INSERT INTO livros(titulo, paginas, autor_id, sinopse)
VALUES ('Hobbit', 230, 1, 
'Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem à sua porta e levam-no para uma expedição'),
('Senhor do Aneis: A Socidade do Anel', 400, 1, 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.'),
('A mão esquerda da escuridão', 304, 2, 'Enviado em uma missão intergaláctica, Genly Ai, um humano, tem como missão persuadir os governantes do planeta Gethen a se unirem a uma comunidade universal. Entretanto, Genly, mesmo depois de anos de estudo, percebe-se despreparado para a situação que lhe aguardava. Ao entrar em contato com uma cultura complexa, rica, quase medieval e com outra abordagem na relação entre os gêneros, Genly perde o controle da situação.');



