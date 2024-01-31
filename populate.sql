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
  autor_id      INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (autor_id) REFERENCES autores (id)
);



INSERT INTO livros(titulo, paginas, autor_id)
VALUES ('Hobbit', 230, 1),
('Senhor do Aneis | A Socidade do Anel', 400, 1),
('Memórias Póstumas de Brás Cubas', 150, 3);

