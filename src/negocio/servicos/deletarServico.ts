import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deletar from "../deletar";

export default class DeletarServico extends Deletar {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public deletar(): void {
    console.log(`\nInício da exclusão do serviço`);
    const nome = this.entrada.receberTexto(
      `Por favor informe o nome do serviço a ser excluído: `
    );

    const servicoIndex = this.servicos.findIndex(
      (servico) => servico.nome === nome
    );

    if (servicoIndex !== -1) {
      this.servicos.splice(servicoIndex, 1);
      console.log(`\nServiço excluído com sucesso :)\n`);
    } else {
      console.log(`\nServiço não encontrado :(\n`);
    }
  }
}
