import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../atualizar";

export default class AtualizarProduto extends Atualizar {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(`\nInício da atualização do produto`);
    const nomeAntigo = this.entrada.receberTexto(
      `Por favor informe o nome do produto a ser atualizado: `
    );
    const novoNome = this.entrada.receberTexto(
      `Por favor informe o novo nome do produto: `
    );
    const novoValor = this.entrada.receberNumero(
      `Por favor informe o novo valor do produto: `
    );

    const produtoIndex = this.produtos.findIndex(
      (produto) => produto.nome === nomeAntigo
    );

    if (produtoIndex !== -1) {
      this.produtos[produtoIndex].nome = novoNome;
      this.produtos[produtoIndex].valor = novoValor;
      console.log(`\nProduto atualizado com sucesso :)\n`);
    } else {
      console.log(`\nProduto não encontrado :(\n`);
    }
  }
}
