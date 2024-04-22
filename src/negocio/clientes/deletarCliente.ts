import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DeletarCliente extends Deletar {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public deletar(): void {
    console.log(`\nInício da exclusão do cliente`);
    const nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente a ser excluído: `
    );

    const clienteIndex = this.clientes.findIndex(
      (cliente) => cliente.nome === nome
    );

    if (clienteIndex !== -1) {
      this.clientes.splice(clienteIndex, 1);
      console.log(`\nCliente excluído com sucesso :)\n`);
    } else {
      console.log(`\nCliente não encontrado :(\n`);
    }
  }
}
