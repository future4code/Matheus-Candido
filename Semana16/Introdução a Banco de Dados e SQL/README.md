### Exercício 1
```
 a) Temos VARCHAR e DATE, sendo eles:
 VARCHAR: Uma variável de caractere ou seja, uma string.
 DATE: Uma data com o formato dias, mes, ano.
```
```
 b)  O 'SHOW DATABASES mostrou todos as minhas bases de dados.
     Já o 'SHOW TABLES' mostra todas as tabelas que eutenho na minha base de dados.
```
```
 c) 
```
### Exercício 2
```
 a) Criei.
 b) O erro descreve que eu tentei criar algo na tabela contendo uma chave primária já existente.
 c) Diz que não foi encontrado um dos valores. No caso os valores que estão faltando são 'birth_date' e 'gender'
 d) Diz que o valor 'name' não tem valor padrão. Retorna esse erro pois na chamada dos valores, o valor 'name' não está sendo chamado.
 e) Retorna um erro onde me fala que o formato de data está errado, está errado pois o formato correto para 'date' seria string.
 f) Feito.
```
 ### Exercício 3
 ```
  a) SELECT * from Actor WHERE gender = "famale".
  b) SELECT salary from Actor WHERE name = "Robert Downey Jr".
  c) SELECT * from Actor WHERE gender = "invalid".
  Retornou uma tabela vazia pois ele não encontrou um resultado que batesse com os valores do 'gender', e ultrapassou o número de caracteres definido.
  d) SELECT id, name, salary from Actor WHERE salary <= 4000000. Como retorno obtive 3 resultados como esperado.
  e) SELECT id, nome from Actor WHERE id = "002". Esse erro aconteceu pois o valor passado na chamada está como 'nome', mas ele foi definido na tabela como 'name'.
  Corrigindo o problema ele ficou assim: SELECT id, name from Actor WHERE id = "002". Me retornando um resultado também como esperado.
 ```
  ### Exercício 4
  ```
   a) SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000: 
   'SELECT * FROM Actor': Retorna todas as propriedades da tebela Actor. 
   'WHERE (name LIKE "A%" OR name LIKE "J%")': Buscando pelas strings correspondentes do valor name. Por estar em parênteses ele tem mais importância
   'AND salary > 300000': Retorna resultados com salarios acima de 300000.
   b) SELECT * from Actor WHERE (name NOT LIKE "S%") AND salary > 3000000.
   c) SELECT * from Actor WHERE (name LIKE "%S%" OR name LIKE "%s%").
   d) SELECT * from Actor WHERE (name LIKE "%S%" OR name LIKE "%s%" OR name LIKE "%W%" OR name LIKE "%w%") AND salary BETWEEN 4000000 AND 70959000
  ```
  ### Exercício 5
  ```
   a) 
   b) 
   c) 
   d) 
   e) 
  ```
  ### Exercício 6
  ```
   a) 
   b) 
   c) 
  ```
   ### Exercício 7
  ```
   a) 
   b) 
   * c) 
  ```
