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


// função para atualizar a lista
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    //ordenar a lista de amigos
    amigos.sort();

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];

        //adicionar botão de remoção
        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.addEventListener('click', () => removerAmigo(i));
        li.appendChild(button);

        listaAmigos.appendChild(li);
    }

    //atualizar status do botão de sorteio
    atualizarBotaoSorteio();
}

//Função para remover o amigo 
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

//Função para selecionar o amigo 
function sortearAmigo() {
    //olhar se a lista não esta vazia
    if (amigos.length === 0) {
        alert("Não tem amigos disponiveis para o sorteio. Adicione um amigo!");
        return;
    }

    //Sortear um numero aleatorio
    const aleatorio = Math.floor(Math.random() * amigos.length);

    //ver o nome do sorteado
    const amigoSorteado = amigos[aleatorio];

    //Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong> ${amigoSorteado} </strong>`;
}

//função para atualizar o status do botão de sorteio
function atualizarBotaoSorteio() {
    const botaoSortear = document.getElementById('sortear');
    botaoSortear.disabled = amigos.length === 0;
}