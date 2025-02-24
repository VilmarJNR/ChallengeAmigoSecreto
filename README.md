# Lista de Amigos

Este projeto é uma aplicação web simples que permite criar uma lista de amigos, adicionar e remover nomes, e sortear um amigo aleatório da lista.

## Funcionalidades

* **Adicionar Amigo:** Permite adicionar nomes à lista, com validação para nomes duplicados e campos vazios.
* **Remover Amigo:** Permite remover amigos da lista.
* **Sortear Amigo:** Sorteia um amigo aleatório da lista.
* **Ordenação:** A lista de amigos é ordenada alfabeticamente.
* **Validações:** Impede a adição de nomes duplicados e campos vazios.

## Como Usar

1.  Abra o arquivo `index.html` em seu navegador.
2.  No campo de texto, digite o nome de um amigo e clique em "Adicionar".
3.  Para remover um amigo, clique no botão "Remover" ao lado do nome.
4.  Para sortear um amigo, clique no botão "Sortear".

## Estrutura do Código

O projeto é composto por um arquivo HTML (`index.html`) e um arquivo JavaScript (`script.js`).

* `index.html`: Contém a estrutura da página, incluindo campos de entrada, botões e a lista de amigos.
* `script.js`: Contém a lógica da aplicação, incluindo as funções para adicionar, remover e sortear amigos.

## Funções

* `adicionarAmigo()`: Adiciona um amigo à lista, validando nomes duplicados e campos vazios.
* `atualizarLista()`: Atualiza a exibição da lista de amigos na página.
* `removerAmigo(index)`: Remove um amigo da lista com base no índice.
* `sortearAmigo()`: Sorteia um amigo aleatório da lista.
* `atualizarBotaoSorteio()`: Atualiza o estado do botão de sorteio.

## Variáveis

* `amigos`: Um array que armazena os nomes dos amigos.
