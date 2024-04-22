import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/clientes/atualizarCliente";
import CadastroCliente from "../negocio/clientes/cadastroCliente";
import DeletarCliente from "../negocio/clientes/deletarCliente";
import CadastrarTelefoneCliente from "../negocio/clientes/cadastrarTelefoneCliente";
import ListagemClientes from "../negocio/clientes/listagemClientes";
import RegistrarConsumo from "../negocio/consumo/cadastroConsumo";
import AtualizarProduto from "../negocio/produtos/atualizarProduto";
import CadastroProduto from "../negocio/produtos/cadastroProduto";
import DeletarProduto from "../negocio/produtos/deletarProduto";
import ListagemProdutos from "../negocio/produtos/listagemProdutos";
import AtualizarServico from "../negocio/servicos/atualizarServico";
import CadastroServico from "../negocio/servicos/cadastroServicos";
import DeletarServico from "../negocio/servicos/deletarServico";
import ListagemServicos from "../negocio/servicos/listagemServicos";
import ListagemClientesGenero from "../negocio/clientes/listagemClientesGenero";
import ListarMaisConsumo from "../negocio/consumo/listarMaisConsumo";
import ListarMenosConsumo from "../negocio/consumo/listarMenosConsumo";
import ListarConsumoValor from "../negocio/consumo/listarConsumoValor";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
  console.log(`Opções:`);
  console.log(`--------------------------------------`);
  console.log(`Clientes`);
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Listar todos os clientes`);
  console.log(`3 - Atualizar cliente`);
  console.log(`4 - Deletar cliente`);
  console.log(`5 - Cadastrar um telefone do cliente`);
  console.log(`--------------------------------------`);
  console.log(`Produtos`);
  console.log(`6 - Cadastrar produto`);
  console.log(`7 - Listar todos os produtos`);
  console.log(`8 - Atualizar produto`);
  console.log(`9 - Deletar produto`);
  console.log(`--------------------------------------`);
  console.log(`Serviços`);
  console.log(`10  - Cadastrar serviço`);
  console.log(`11 - Listar todos os serviços`);
  console.log(`12 - Atualizar serviço`);
  console.log(`13 - Deletar serviço`);
  console.log(`--------------------------------------`);
  console.log(`Registro`);
  console.log(`14 - registrar produto ou serviço a um cliente`);
  console.log(`--------------------------------------`);
  console.log(`Consumo`);
  console.log(`15  - Listar clientes por gênero`);
  console.log(`16  - Listar clientes que consumiram mais produtos ou serviços`);
  console.log(
    `17  - Listar clientes que consumiram menos produtos ou serviços`
  );
  console.log(
    `18  - Listar clientes que consumiram mais produtos ou serviços em valor`
  );

  console.log(`0 - Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      new CadastroCliente(empresa.getClientes).cadastrar();
      break;
    case 2:
      new ListagemClientes(empresa.getClientes).listar();
      break;
    case 3:
      new AtualizarCliente(empresa.getClientes).atualizar();
      break;
    case 4:
      new DeletarCliente(empresa.getClientes).deletar();
      break;
    case 5:
      new CadastrarTelefoneCliente(empresa.getClientes).atualizar();
      break;
    case 6:
      new CadastroProduto(empresa.getProdutos).cadastrar();
      break;
    case 7:
      new ListagemProdutos(empresa.getProdutos).listar();
      break;
    case 8:
      new AtualizarProduto(empresa.getProdutos).atualizar();
      break;
    case 9:
      new DeletarProduto(empresa.getProdutos).deletar();
      break;
    case 10:
      new CadastroServico(empresa.getServicos).cadastrar();
      break;
    case 11:
      new ListagemServicos(empresa.getServicos).listar();
      break;
    case 12:
      new AtualizarServico(empresa.getServicos).atualizar();
      break;
    case 13:
      new DeletarServico(empresa.getServicos).deletar();
      break;
    case 14:
      new RegistrarConsumo(
        empresa.getClientes,
        empresa.getProdutos,
        empresa.getServicos
      ).cadastrar();
      break;
    case 15:
      new ListagemClientesGenero(empresa.getClientes).listar();
      break;
    case 16:
      new ListarMaisConsumo(empresa.getClientes).listar();
      break;
    case 17:
      new ListarMenosConsumo(empresa.getClientes).listar();
      break;

    case 18:
      new ListarConsumoValor(empresa.getClientes).listar();
      break;

    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}
