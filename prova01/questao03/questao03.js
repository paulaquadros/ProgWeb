class Venda {
  constructor(idProduto, qtd, precoUnitario) {
    this.idProduto = idProduto;
    this.qtd = qtd;
    this.precoUnitario = precoUnitario;
  }

  getIdProduto() {
    return this.idProduto;
  }

  setIdProduto(idProduto) {
    this.idProduto = idProduto;
  }

  getQtd() {
    return this.qtd;
  }

  setQtd(qtd) {
    this.qtd = qtd;
  }

  getPrecoUnitario() {
    return this.precoUnitario;
  }

  setPrecoUnitario(precoUnitario) {
    this.precoUnitario = precoUnitario;
  }

  getValorTotal() {
    return this.qtd * this.precoUnitario;
  }
}
const venda01 = new Venda(1, 5, 37.8);
const venda02 = new Venda(2, 10, 42.7);

console.log(`R$${venda01.getValorTotal()} e R$${venda02.getValorTotal()}`);
