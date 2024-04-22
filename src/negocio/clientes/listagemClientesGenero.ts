import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesGenero extends Listagem {
  private clientes: Array<Cliente>;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(`\nListagem de clientes por gênero:`);

    const clientesPorGenero = new Map<string, Array<Cliente>>();

    this.clientes.forEach((cliente) => {
      const genero = cliente.getGenero.getValor;
      if (!clientesPorGenero.has(genero)) {
        clientesPorGenero.set(genero, []);
      }
      clientesPorGenero.get(genero)?.push(cliente);
    });

    clientesPorGenero.forEach((clientes, genero) => {
      console.log(`\n${genero}:`);
      clientes.forEach((cliente, index) => {
        console.log(`${index + 1}. ${cliente.nome}`);
      });
    });

    console.log(`\n`);
  }
}
