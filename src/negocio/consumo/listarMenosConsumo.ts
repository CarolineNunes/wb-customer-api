import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemMenosConsumo extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(
      `\nListagem dos 10 clientes que menos consumiram produtos ou serviços:`
    );

    const clientesOrdenados = this.clientes
      .slice()
      .sort((a, b) => {
        const totalA =
          a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
        const totalB =
          b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
        return totalA - totalB;
      })
      .slice(0, 10);

    clientesOrdenados.forEach((cliente, index) => {
      console.log(`${index + 1}. ${cliente.nome}`);
    });

    console.log(`\n`);
  }
}
