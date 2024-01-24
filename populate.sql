CREATE TABLE autores (
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  idade         INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO autores (nome, nacionalidade, idade) 
VALUES  ("JRR Tolkien", "sul-africano", 81),
        ("Ursula LeGuin", "estadunidense", 88),
        ("Machado de Assis", "brasileira", 69);
