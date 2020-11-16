# Criptografia e User Roles

## Exercícios

- ## Ex 1

  - a) round seria a quantidade de caracteres que o jwt irá gerar no seu token. e salt seria a nossa senha cnvertida em hash e que fica logo após o round.
    usei o valor 12 pois seria um númeor razoável de caracteres sendo assim uma senha boa, para a execução dos exercícios.
  - b) Instalado e Criado.
  - c) Criado.

  ```ts
  export const compare = async (
    plainText: string,
    cypherText: string
  ): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText);
  };
  ```

- ## Ex 2

  - a) Primeiro o endpoint de signup pois esse seria o fluxo normal de um usuário de uma aplicação, a senha criada pelo usuario precisa estar cirptografada para que no login ele possa fazer a comparação.
  - b) Modificado.
  - c) Modificado.

- ## Ex 3

  - a) Alterado.

  - b) Alterado.

  - c) Alterado.

  - d) Alterado.

- ## Ex 4

  - a) Alterado.

- ## Ex 5

  - ) Feito.

- ## Ex 6

  - ) Feito.
