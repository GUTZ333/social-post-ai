-- criando um banco de dados chamado de "exercies_school" e usando ele
CREATE DATABASE IF NOT EXISTS exemplo_2b;
USE  exemplo_2b;

-- Criando uma entidade de autores dentro do banco já criado
CREATE TABLE IF NOT EXISTS autores ( 
aut_id INT AUTO_INCREMENT PRIMARY KEY,
aut_nome VARCHAR(100) NOT NULL,
aut_nacionalidade VARCHAR(50),
aut_data_nasc DATE,
aut_email VARCHAR(100) UNIQUE 
);

-- Criando uma entidade de livros que possui relação com a entidade com a entidade de autores dentro do banco de dados já criado
CREATE TABLE livros (
 liv_id INT AUTO_INCREMENT PRIMARY KEY,
 liv_titulo VARCHAR(200) NOT NULL,
 liv_aut_id INT,
 liv_genero VARCHAR(50),
 liv_preco DECIMAL(10,2),
 liv_data_publicacao DATE,
 liv_paginas INT,
 FOREIGN KEY (liv_aut_id) REFERENCES autores(aut_id)
);

-- Inserindo dados na entidade de autores do banco
INSERT INTO autores (aut_nome,  aut_nacionalidade,  aut_data_nasc,  aut_email) VALUES
('Machado de Assis', 'Brasileira', '1839-06-21', 'machado@classicos.br'),
('Clarice Lispector', 'Brasileira', '1920-12-10', 'clarice@literatura.br'),
('Jorge Luis Borges', 'Argentina', '1899-08-24', 'borges@literatura.ar'),
('Gabriel García Márquez', 'Colombiana', '1927-03-06', 'garcia@realismo.co'),
('Isabel Allende', 'Chilena', '1942-08-02', 'isabel@literatura.cl'); 

-- Inserindo dados na entidade de livros relacionado com informações da entidade de autores
INSERT INTO livros (liv_titulo,  liv_aut_id,  liv_genero,  liv_preco,  liv_data_publicacao,  liv_paginas) VALUES
('Dom Casmurro', 1, 'Romance', 25.90, '1899-12-01', 256),
('A Hora da Estrela', 2, 'Romance', 22.50, '1977-10-25', 144),
('O Aleph', 3, 'Ficção', 28.00, '1949-06-15', 180),
('Cem Anos de Solidão', 4, 'Realismo Mágico', 35.00, '1967-06-05', 432),
('A Casa dos Espíritos', 5, 'Realismo Mágico', 32.00, '1982-01-15', 368);

SELECT * FROM exercise_school.livros;
SELECT * FROM exercise_school.autores

-- EX 1: Listar todos os autores pelo nome
SELECT aut_nome FROM exercise_school.autores

-- EX 2: Mostrar os livros com preços superior a R$25,00
SELECT * FROM exercise_school.livros WHERE liv_preco > 25;

-- EX 3: Mostrar os livros ordenados de forma decrscente pelos preços
SELECT * FROM exercise_school.livros ORDER BY liv_preco DESC;

-- EX 4: Mostrar os livros com o nome dos autores
SELECT autores.aut_nome, livros.liv_id, livros.liv_titulo, livros.liv_genero FROM exercise_school.livros INNER JOIN exercise_school.autores ON livros.liv_aut_id = autores.aut_id;

-- EX 5: Mostrar a quantidade de livros por gênero
SELECT liv_genero, COUNT(*) AS quantidade_livros FROM exercise_school.livros GROUP BY livros.liv_genero;

-- EX 6: Mostar os preços médio dos livros
SELECT AVG(liv_preco) AS preco_medio FROM exercise_school.livros;

-- EX 7: Mostrar os autores brasileiros e seus livros
SELECT autores.aut_nome, autores.aut_nacionalidade, livros.liv_titulo, livros.liv_genero, livros.liv_paginas, livros.liv_preco, livros.liv_data_publicacao FROM exercise_school.autores INNER JOIN exercise_school.livros ON livros.liv_aut_id = autores.aut_id WHERE autores.aut_nacionalidade = "Brasileira";

-- EX 8: Mostrat os livros que contém a palavra "casa" no título
SELECT * FROM exercise_school.livros WHERE liv_titulo LIKE "%casa%";

-- EX 9: Mostrat os livros publicados entre 1960 e 1980
SELECT * FROM exercise_school.livros WHERE liv_data_publicacao BETWEEN "1960-01-01" AND "1980-12-31";

-- EX 10: Mostrar o livro mais caro
SELECT * FROM exercise_school.livros ORDER BY liv_preco DESC LIMIT 1;