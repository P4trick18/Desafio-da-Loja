var Produtos = [
    {
        imagem: 'https://cdn.leroymerlin.com.br/products/martelo_de_unha_27mm_tramontina_90709234_0001_300x300.jpg',
        nome: 'Produto 1',
        texto: 'Produto apresenta uma ótima resistência, feito com ferro fundido e cabo de araucária'
},
{
    imagem: 'https://cdn.leroymerlin.com.br/products/martelo_de_unha_27mm_tramontina_90709234_0001_300x300.jpg',
        nome: 'Produto 1',
        texto: 'Produto apresenta uma ótima resistência, feito com ferro fundido e cabo de araucária'
},
{    
    imagem: 'https://cdn.leroymerlin.com.br/products/martelo_de_unha_27mm_tramontina_90709234_0001_300x300.jpg',
        nome: 'Produto 1',
        texto: 'Produto apresenta uma ótima resistência, feito com ferro fundido e cabo de araucária'
},
{   
    imagem: 'https://cdn.leroymerlin.com.br/products/martelo_de_unha_27mm_tramontina_90709234_0001_300x300.jpg',
        nome: 'Produto 1',
        texto: 'Produto apresenta uma ótima resistência, feito com ferro fundido e cabo de araucária'
},
{   
    imagem: 'https://cdn.leroymerlin.com.br/products/martelo_de_unha_27mm_tramontina_90709234_0001_300x300.jpg',
        nome: 'Produto 1',
        texto: 'Produto apresenta uma ótima resistência, feito com ferro fundido e cabo de araucária'
    },
]

Produtos.map((produto) => {
    document.getElementById('produtos').innerHTML += `
        <div class='produto>
            <img src="${produto.imagem}".
            <div>
                <h2>${produto.nome}</h2>
                <hr></hr>
                <p>${produto.texto}</p>
                <button>Comprar</button>
        </div>
    `
})
