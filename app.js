// Lista que ficara os nomes de amigos
let amigos = [];

//função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    //validar se o campo esta vazio ou tem apenas espaços em branco
    if (nomeAmigo === "") {
        alert("Por favor, coloque um Nome");
        return;
    }

    //validar se o nome ja esta na lista
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já está na lista, na posição ${amigos.indexOf(nomeAmigo) + 1}.`);
        return;
    }

    //Adicionar o amigo na lista
    amigos.push(nomeAmigo);

    //limpar o campo de adicionar o nome
    inputAmigo.value = "";

    //Atualizar a lista
    atualizarLista();

    //focar no campo de entrada
    inputAmigo.focus();
}