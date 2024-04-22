import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }
  public listar(): void {
    console.log(`\nLista de todos os clientes:`);
    this.clientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`Nome social: ` + cliente.nomeSocial);
      console.log(
        `CPF: ${
          cliente.getCpf.getValor
        } - Data de Emissão: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}`
      );
      console.log(
        `RG: ${
          cliente.getRg.getValor
        } - Data de Emissão: ${cliente.getRg.getDataEmissao.toLocaleDateString()}`
      );
      console.log(`Gênero: ${cliente.getGenero.getValor}`);
      console.log(`Telefones:`);
      cliente.getTelefones.forEach((telefone) => {
        console.log(`${telefone.getDdd} ${telefone.getNumero}`);
      });
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
