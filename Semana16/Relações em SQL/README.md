### Exercício 1

 ```
 a) Uma chave estrangeira, é uma chave que vem de outra tabela para relacionar um atabela a outra.

 b) Tabela e avaliação criada.

 c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-matheus-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
    Diz que não é possível adicionar ou atualizar a linha filha, ele estaria falando em relação ao id do filmes que não foi encontrado, nesse caso a tabela de Rating seria o pai e a Movies a filha.

 d) Dropado.

 e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-matheus-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
    Diz que não foi possível deletar ou alterar a linha pois essa linha tem referências em outras tabelas.
 ```

### Exercício 2

 ```
 a) Seria uma tabela referêncial onde relaciona um ator a um filme.

 b) INSERT INTO MovieCast(movie_id, actor_id)
    VALUES(
	"006",
    "007"
    )
    Criado.

 c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-matheus-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    Diz que não foi possível atualizar ou adicionar a uma linha filha, diz que contêm uma falha na chave estrangeira.

 d) Não foi possível apagar pois o ator estava relacionado em uma outra tabela, para que pudesse ser apagado teria que remover a relação.
 ```

 ### Exercício 3

 ```
 a) O operador ON estaria dizendo que as informações que eu peguei da tabela Rating é para por junto as informações que eu peguei da tabela Movies. Onde o resultado do Rating ficará do lado direito e as do Movies, no esquerdo.

 b) SELECT Movies.id, Movies.name, Rating.rate FROM Movies
    INNER JOIN Rating ON Movies.id = Rating.movie_id;
 ```

 ### Exercício 4

 ```
 a) SELECT Movies.id, Movies.name, Rating.rate, Rating.comment FROM Movies
    LEFT JOIN Rating ON Movies.id = Rating.movie_id;

 b) SELECT Movies.id, Movies.name,Actor.id, Actor.name  FROM Movies
    RIGHT JOIN Actor ON Movies.id = Actor.id;

 c) SELECT AVG(Rating.rate), Movies.id, Movies.name FROM Movies
    LEFT JOIN Rating ON Movies.id = Rating.id
    GROUP BY (Movies.id);
 ```

 ### Exercício 5

 ```
 a) 

 b) SELECT Movies.id, Movies.name,Actor.id, Actor.name  FROM Movies
    JOIN Actor ON Movies.id = Actor.id;

 c) Error Code: 1054. Unknown column 'm' in 'field list'


 d) SELECT 
	m.id as movie_id, 
    m.name, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movies m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
 ```

 ### Exercício 6

 ```
 a) Relação de muitos para muitos.

 b) Criei duas tabelas. A do oscar que recebia um id e um name onde criava os oscars, e a dacerimonia que recebia o id do filme, id do oscar e o ano e fazia a ligação de referenciar.

 c) SELECT * FROM MovieCast;
    CREATE TABLE Oscar (
	id VARCHAR(255),
    name VARCHAR(255),
    PRIMARY KEY(id) 
    );

    CREATE TABLE Cerimonia (
	movie_id VARCHAR(255),
    oscar_id VARCHAR(255),
    year_oscar INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id),
    PRIMARY KEY (movie_id, year_oscar,  oscar_id)
    );

 d) SELECT * FROM Movies
    INNER JOIN Oscar ON  Movies.id = Oscar.id
 ```