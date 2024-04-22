import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "../atualizar";

export default class AtualizarCliente extends Atualizar {
  private entrada: Entrada;
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.entrada = new Entrada();
    this.clientes = clientes;
  }

  public atualizar(): void {
    const nomeCliente = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );

    const cliente = this.clientes.find(
      (cliente) => cliente.nome === nomeCliente
    );

    if (cliente) {
      console.log(`\nAtualizando informações do cliente ${cliente.nome}`);

      const novoNome = this.entrada.receberTexto(
        `Informe o novo nome do cliente: (${cliente.nome})`
      );

      const novoNomeSocial = this.entrada.receberTexto(
        `Informe o novo nome social do cliente: (${cliente.nomeSocial})`
      );

      cliente.nome = novoNome;
      cliente.nomeSocial = novoNomeSocial;

      console.log(`\nAtualização concluída para o cliente ${cliente.nome}.\n`);
    } else {
      console.log(`\nCliente não encontrado\n`);
    }
  }
}
