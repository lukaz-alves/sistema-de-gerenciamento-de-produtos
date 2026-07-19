const produtos = [
    {
        id: 1,
        nome: "Mouse",
        preco: 80,
        estoque: 10
    },
    {
        id: 2,
        nome: "Teclado",
        preco: 150,
        estoque: 5
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 900,
        estoque: 3
    },
    {
        id: 4,
        nome: "Notebook",
        preco: 3500,
        estoque: 2
    },
    {
        id: 5,
        nome: "MousePad",
        preco: 50,
        estoque: 15
    }
];

produtos.forEach(({id, nome, preco, estoque }) => {
    console.log(`ID: ${id}`);
    console.log(`Nome: ${nome}`);
    console.log(`Preço: R$${preco}`);
    console.log(`Estoque: ${estoque}\n`);
});

const produto = produtos.find(p => p.nome === "Monitor");

if (produto) {
    console.log("Produto encontrado!");
    console.log(`Nome: ${produto.nome}`);
    console.log(`Preço: ${produto.preco}`);
    console.log(`Estoque: ${produto.estoque}\n`);
} else {
    console.log("Produto não encontrado.");
}

const valorTotal = produtos.reduce((acumulador, {preco, estoque}) => 
        acumulador + (preco * estoque), 0);
    console.log("Valor total do estoque:")
    console.log(`R$ ${valorTotal}\n`);

const produtoCaro = produtos.reduce((maisCaro, produto) => {
    return produto.preco > maisCaro.preco ? produto : maisCaro;
});

console.log(produtoCaro.nome);
console.log(`R$ ${produtoCaro.preco}\n`);

const estoqueBaixo = produtos.filter(({estoque}) => estoque <= 5);
    estoqueBaixo.forEach(({nome, estoque}) => {
    console.log(`${nome} - Estoque: ${estoque}`);
});

console.log('');

const aumentoDePreco = produtos.map(produto => {
    if (produto.preco > 500) {
        produto.preco = produto.preco + (produto.preco * 10 / 100);
    }
    return produto;
});

aumentoDePreco.forEach(({ nome, preco }) => {
    console.log(`${nome} - Novo preço: R$ ${preco}`);
});