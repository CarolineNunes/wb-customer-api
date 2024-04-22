import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Genero from "../../modelo/genero";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  private converterData(data: string) {
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf() - 1;
    let dia = new Number(partesData[0].valueOf()).valueOf();
    return new Date(ano, mes, dia);
  }
  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );
    let nomeSocial = this.entrada.receberTexto(
      `Por favor informe o nome social do cliente: `
    );
    let valorCpf = this.entrada.receberTexto(
      `Por favor informe o número do cpf: `
    );
    let dataCpf = this.entrada.receberTexto(
      `Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `
    );
    let valorRg = this.entrada.receberTexto(
      `Por favor informe o número do rg: `
    );
    let dataRg = this.entrada.receberTexto(
      `Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `
    );
    let valorGenero = this.entrada.receberNumero(
      `\nDigite a opção que corresponde com o gênero do cliente:
        1 - Cisgênero
        2 - Transgênero
        3 - Não-Binário
        4 - Prefiro não informar
      `
    );

    let escolherGenero = "";

    switch (valorGenero) {
      case 1:
        escolherGenero = "Cisgênero";
        break;
      case 2:
        escolherGenero = "Transgênero";
        break;
      case 3:
        escolherGenero = "Não-Binário";
        break;
      case 4:
        escolherGenero = "Não-Informado";
        break;
      default:
        console.log(`Opção inválida.`);
        return;
    }
    const dddTelefone = this.entrada.receberTexto(
      `Por favor informe o número do DDD do telefone do cliente: `
    );
    const numeroTelefone = this.entrada.receberTexto(
      `Por favor informe o número de telefone do cliente: `
    );

    let cpf = new CPF(valorCpf, this.converterData(dataCpf));
    let rg = new RG(valorRg, this.converterData(dataRg));
    let genero = new Genero(escolherGenero);
    let cliente = new Cliente(
      nome,
      nomeSocial,
      cpf,
      rg,
      genero,
      new Telefone(dddTelefone, numeroTelefone)
    );
    this.clientes.push(cliente);
    console.log(`\nCadastro concluído :)\n`);
  }
}
