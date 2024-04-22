import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroConsumo extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
  ) {
    super();
    this.produtos = produtos;
    this.servicos = servicos;
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nInício do registro de produto ou serviço\n`);

    const nomeCliente = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );

    const cliente = this.clientes.find(
      (cliente) => cliente.nome === nomeCliente
    );

    if (cliente) {
      const opcao = this.entrada.receberNumero(
        `Digite 1 para registrar um produto ou 2 para registrar um serviço: `
      );

      switch (opcao) {
        case 1:
          this.registrarProduto(cliente);
          break;
        case 2:
          this.registrarServico(cliente);
          break;
        default:
          console.log(`Opção inválida.`);
      }
    } else {
      console.log(`\nCliente não encontrado :(\n`);
    }
  }

  private registrarProduto(cliente: Cliente): void {
    const nomeProduto = this.entrada.receberTexto(
      `Por favor informe o nome do produto: `
    );

    const acharProduto = this.produtos.find(
      (produto) => produto.nome === nomeProduto
    );

    console.log("acharProduto", acharProduto);
    if (acharProduto) {
      cliente.setProdutoConsumido(acharProduto);

      console.log(
        `\nProduto registrado com sucesso para o cliente ${cliente.nome}.\n`
      );
    } else {
      console.log(`\nProduto não encontrado.\n`);
    }
  }

  public registrarServico(cliente: Cliente): void {
    const nomeServico = this.entrada.receberTexto(
      `Por favor informe o nome do serviço: `
    );

    const acharServico = this.servicos.find(
      (servico) => servico.nome === nomeServico
    );

    if (acharServico) {
      cliente.setServicoConsumido(acharServico);

      console.log(
        `\nServiço registrado com sucesso para o cliente ${cliente.nome}.\n`
      );
    } else {
      console.log(`\nServiço não encontrado.\n`);
    }
  }
}
