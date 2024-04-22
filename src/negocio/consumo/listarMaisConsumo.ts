import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListarMaisConsumo extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(
      "\nListagem dos 10 clientes que mais consumiram produtos ou serviços:"
    );

    const consumoClientes = this.clientes.map((cliente) => {
      const totalProdutos = cliente.getProdutosConsumidos.length;
      const totalServicos = cliente.getServicosConsumidos.length;
      return { cliente, totalConsumido: totalProdutos + totalServicos };
    });

    const clientesOrdenados = consumoClientes.sort(
      (a, b) => b.totalConsumido - a.totalConsumido
    );

    let count = 0;
    for (const consumo of clientesOrdenados) {
      const cliente = consumo.cliente;
      const totalConsumido = consumo.totalConsumido;
      console.log(
        `${count + 1}. Cliente: ${
          cliente.nome
        } - Total Consumido: ${totalConsumido}`
      );
      count++;
      if (count >= 10) {
        break;
      }
    }
  }
}
