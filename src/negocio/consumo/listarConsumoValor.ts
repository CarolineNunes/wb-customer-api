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
      "\nListagem dos 5 clientes que mais consumiram produtos ou serviços em valor:"
    );

    const consumoClientes = this.clientes.map((cliente) => {
      const totalProdutos = cliente.getProdutosConsumidos.reduce(
        (acc, produto) => acc + produto.valor,
        0
      );
      const totalServicos = cliente.getServicosConsumidos.reduce(
        (acc, servico) => acc + servico.valor,
        0
      );
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
        } - Total Consumido: ${totalConsumido.toFixed(2)}`
      );
      count++;
      if (count >= 5) {
        break;
      }
    }
  }
}
