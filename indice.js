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
  console.log("Produto encontrado!\n");
  console.log(`Nome: ${produto.nome}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Estoque: ${produto.estoque}`);
} else {
  console.log("Produto não encontrado.");
}