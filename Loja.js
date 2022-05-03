const chaveProdutos = 'PRODUTOS'; // key para uso no localstorage

function cargaInicial() {
  var valores = [
    {
      url: 'https://img.lojadomecanico.com.br/IMAGENS/2/253/125952/1601552786851.jpg',
      titulo: 'Martelo com cabo de borracha',
      descricao: 'Martelo para pregos'
    },
    {
      url: 'https://img.lojadomecanico.com.br/IMAGENS/33/594/223773/1642107680805.jpg',
      titulo: 'Machado',
      descricao: 'Machado para cortar lenha'
    },
    {
      url: 'https://img.lojadomecanico.com.br/IMAGENS/59/333/112096/Facao-para-Mato-12-Pol-com-Cabo-de-Madei-vonder-31400120001.jpg',
      titulo: 'Facão',
      descricao: 'Facão para cortar capim'
    }
  ];

  valores = JSON.stringify(valores); // converte o array em string pra salvar no localstorage
  localStorage.setItem(chaveProdutos, valores); // salva o array como string no localstorage
}

function mostraValores() {
  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  valores.forEach((valor) => { // para cara registro no array executa o processo abaixo
    const divCard = document.createElement('div'); // cria uma div
    divCard.className = 'card col'; // insere a classe do bootstrap
    divCard.setAttribute('style', 'width: 18rem');

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const img = document.createElement('img');
    img.setAttribute('src', valor.url);
    img.setAttribute('style', 'max-height: 190px; width: fit-content; align-self: center;'); // seta alguns estilos direto na tag

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerHTML = valor.titulo; // adiciona o conteudo entre a abertura e fechamento da tag

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerHTML = valor.descricao;

    divCard.appendChild(img); // insere a img dentro da divCard
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);

    const grid = document.getElementById('grid');
    grid.appendChild(divCard); // adiciona a divCard dentro do grid
  });
}

function cadastrar() {
  var titulo = document.getElementById('titulo').value;
  var descricao = document.getElementById('descricao').value;
  var url = document.getElementById('url').value;

  const produto = {
    titulo,
    descricao,
    url,
  }

  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  if (!valores) {
    valores = [];
  }

  valores.push(produto);

  valores = JSON.stringify(valores);
 
  localStorage.setItem(chaveProdutos, valores);
  location.href="index.html"
}

// cargaInicial() // carrega valores iniciais no localstorage
// mostraValores() // renderiza os produtos no documento