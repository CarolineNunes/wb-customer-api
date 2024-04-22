import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../atualizar";

export default class AtualizarServico extends Atualizar {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(`\nInício da atualização do serviço`);
    const nomeAntigo = this.entrada.receberTexto(
      `Por favor informe o nome do serviço a ser atualizado: `
    );
    const novoNome = this.entrada.receberTexto(
      `Por favor informe o novo nome do serviço: `
    );
    const novoValor = this.entrada.receberNumero(
      `Por favor informe o novo valor do serviço: `
    );

    const servicoIndex = this.servicos.findIndex(
      (servico) => servico.nome === nomeAntigo
    );

    if (servicoIndex !== -1) {
      this.servicos[servicoIndex].nome = novoNome;
      this.servicos[servicoIndex].valor = novoValor;
      console.log(`\nServiço atualizado com sucesso :)\n`);
    } else {
      console.log(`\nServiço não encontrado :(\n`);
    }
  }
}
