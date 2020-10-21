// a) Usaria o comando tsc para gerar um arquivo .js
// b) o processo seria diferente, pois para executar esse comando precisa estar na mesma pasta do arquivo, no rootDir.
// c) Sim, no momento que criar o tsconfig, acessando ele e alterando o caminho de pasta das propriedades "outDir" => "./build"
// e "rootDir" => "./src", quando der tsc no terminal ele irá gerar a pasta build, você terá que gerar a src e mover os arquivos ts lá dentro.
// d) A configuração "jsx" que tem relação com um código react ou react-native. A principio nada.