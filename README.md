# Calculadora de Partidas Ranqueadas

Este é um projeto simples que implementa uma calculadora de nível de herói em JavaScript. A calculadora determina o nível do herói com base em seu saldo de vitórias e derrotas e imprime uma mensagem correspondente.

## Funcionamento

O projeto utiliza uma função `playerBalance(win, lose)` para calcular o saldo do jogador com base no número de vitórias e derrotas. Em seguida, uma série de condicionais (`if-else`) é utilizada para determinar o nível do herói com base no saldo calculado.

## Conteúdo do Repositório

O repositório contém os seguintes arquivos:

- `README.md`: Este arquivo README que fornece informações sobre o projeto.
- `calculadora_partidas_rankeadas.js`: Contém a implementação da calculadora de partidas ranqueadas.

## Como Utilizar

Para utilizar a calculadora de partidas ranqueadas, siga estas etapas:

1. Abra o arquivo `calculadora_partidas_rankeadas.js` em um editor de código.
2. Altere os valores de `win` (vitórias) e `lose` (derrotas) de acordo com o desempenho do herói.
3. Execute o arquivo JavaScript no seu ambiente de execução preferido (por exemplo, Node.js) para ver a classificação do herói.

## Exemplo de Uso

Suponha que um herói tenha 109 vitórias e 7 derrotas, resultando em um saldo de vitórias de 102. Ao executar o script, a calculadora determinará que o herói está no nível "Imortal" e exibirá a seguinte mensagem:

```O Herói tem um saldo de 102 e está no nível de Imortal```