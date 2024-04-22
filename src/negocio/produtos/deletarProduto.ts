import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "../deletar";

export default class DeletarProduto extends Deletar {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public deletar(): void {
    console.log(`\nInício da exclusão do produto`);
    const nome = this.entrada.receberTexto(
      `Por favor informe o nome do produto a ser excluído: `
    );

    const produtoIndex = this.produtos.findIndex(
      (produto) => produto.nome === nome
    );

    if (produtoIndex !== -1) {
      this.produtos.splice(produtoIndex, 1);
      console.log(`\nProduto excluído com sucesso :)\n`);
    } else {
      console.log(`\nProduto não encontrado :(\n`);
    }
  }
}
