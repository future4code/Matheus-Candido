### Exercício 1

```
a) 'ALTER TABLE Actor DROP COLUMN salary;'
Nesse comando ele está apagando a coluna 'salary' da tabela.

b) 'ALTER TABLE Actor CHANGE gender sex VARCHAR(6);'
Ele muda a definição do gender para 6 caracteres.

c) 'ALTER TABLE Actor CHANGE gender gender VARCHAR(255);'
a coluna 'gender' da tabela está sendo duplicado na linha no comando.

d) Alterado, 'ALter TABLE Actor
    MODIFY gender VARCHAR(100);'

```

### Exercício 2

```
a) 'UPDATE Actor
    SET name = "Marco Ruffalo", birth_date = 2020-02-06
    WHERE id = "003" ;'

b) 'UPDATE Actor
    SET name = "Marcos Ruffalo"
    WHERE id = "003" ;'
    'UPDATE Actor
    SET name = "Mark Ruffalo"
    WHERE id = "003" ;'

c) 'UPDATE Actor
    SET name = "Chris Evil",
    salary = 71933300,
    birth_date = "1981-06-12",
    gender = "famale"
    WHERE id = "005" ;'

d) 'UPDATE Actor
    SET gender = "male"
    WHERE name = "Chris Evans" ;'.
    Ele me retornou um resultado positivo que não deu erro, porém na mensagem ele diz que nenhuma linha foi alterada e ou encontrada

```

### Exercício 3

```
a) DELETE FROM Actor WHERE name = "Chris Evil".

b) DELETE FROM Actor WHERE gender = "male" AND salary > 3000000


```

### Exercício 4

```
a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "famale";

c) SELECT COUNT(*) FROM Actor WHERE gender = "famale";

d) SELECT SUM(salary) FROM Actor;

```

### Exercício 5

```
a) Da erro pois a posição da linha 'WHERE gender = 'female' ' esta errada, ela deveria estar logo abaixo do 'SELECt * FROM Actor' < sintaxe correta seria essa >
'SELECT * FROM Actor
    WHERE gender = 'female'
    ORDER BY name ASC
    LIMIT 4;'

b) SELECT id, name FROM Actor
    ORDER BY name DESC;

c) SELECT * FROM Actor
    WHERE gender = 'male'
    ORDER BY salary ASC
    LIMIT 4;

d) SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;

e) SELECT AVG(salary) FROM Actor
    WHERE gender = 'male';

```

### Exercício 6

```
a) ALter TABLE Filmes
    ADD playing_limit_date DATE;

b) ALter TABLE Filmes
    MODIFY evaluation FLOAT;

c) UPDATE Filmes
    SET playing_limit_date = "2020-12-03"
    WHERE id = "006" ;

d) UPDATE Filmes
   SET sinopse = "sla" WHERE id = "001" ;
   Ele não deu erro, porem me retornou uma mensagem onde diz que não alterou nada pois não encontrou a linha.

```

### Exercício 7

```
a) SELECT * FROM Filmes WHERE CURDATE() > release_date AND CURDATE() < playing_limit_date AND evaluation > 6.5;
(mudei o valor para 6.5 pois não iria retornar resultados para a busca realizada).

b) SELECT AVG(evaluation) FROM Filmes;

c) SELECT COUNT(*) FROM Filmes WHERE CURDATE() > release_date AND CURDATE() < playing_limit_date;

d) SELECT COUNT(*) FROM Filmes WHERE  CURDATE() < release_date;

e) SELECT MAX(evaluation) FROM Filmes LIMIT 1;

f) SELECT MIN(evaluation) FROM Filmes LIMIT 1;

```

### Exercício 8

```
a) SELECT * FROM Filmes
    ORDER BY name ASC;

b) SELECT * FROM Filmes
    ORDER BY name DESC
    LIMIT 3;

c) SELECT * FROM Filmes
WHERE CURDATE() > release_date AND CURDATE() < playing_limit_date
ORDER BY playing_limit_date DESC
LIMIT 3;

d) SELECT * FROM Filmes
    ORDER BY evaluation DESC
    LIMIT 3;

```
