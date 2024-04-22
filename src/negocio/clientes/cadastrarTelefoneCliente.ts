import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class AtualizarCliente {
  private entrada: Entrada;
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
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
      const novoDdd = this.entrada.receberTexto(
        `Informe o novo DDD do telefone do cliente: `
      );

      const novoNumero = this.entrada.receberTexto(
        `Informe o novo número de telefone do cliente: `
      );

      cliente.adicionarTelefone(novoDdd, novoNumero);

      console.log(
        `\nNúmero de telefone adicionado com sucesso para o cliente ${cliente.nome}.\n`
      );
    } else {
      console.log(`\nCliente não encontrado.\n`);
    }
  }
}
