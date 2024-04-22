import CPF from "./cpf";
import Genero from "./genero";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente {
  public nome: string;
  public nomeSocial: string;
  private cpf: CPF;
  private rg: RG;
  private genero: Genero;
  private dataCadastro: Date;
  private telefones: Array<Telefone>;
  private produtosConsumidos: Array<Produto>;
  private servicosConsumidos: Array<Servico>;
  constructor(
    nome: string,
    nomeSocial: string,
    cpf: CPF,
    rg: RG,
    genero: Genero,
    telefones: Telefone
  ) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.cpf = cpf;
    this.rg = rg;
    this.genero = genero;
    this.dataCadastro = new Date();
    this.telefones = [telefones];
    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
  }
  public get getCpf(): CPF {
    return this.cpf;
  }
  public get getRg(): RG {
    return this.rg;
  }
  public get getGenero(): Genero {
    return this.genero;
  }
  public set setGenero(genero: Genero) {
    this.genero = genero;
  }
  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }
  public get getTelefones(): Array<Telefone> {
    return this.telefones;
  }
  public adicionarTelefone(ddd: string, numero: string): void {
    const novoTelefone = new Telefone(ddd, numero);
    this.telefones.push(novoTelefone);
  }
  public get getProdutosConsumidos(): Array<Produto> {
    return this.produtosConsumidos;
  }
  public setProdutoConsumido(produto: Produto): void {
    this.produtosConsumidos.push(produto);
  }
  public get getServicosConsumidos(): Array<Servico> {
    return this.servicosConsumidos;
  }
  public setServicoConsumido(servico: Produto): void {
    this.servicosConsumidos.push(servico);
  }
}
