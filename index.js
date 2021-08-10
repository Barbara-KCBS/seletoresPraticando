const BotaoCadastrar = (evento) =>{

    evento.preventDefault();

    const corpoDaTabela = document.querySelector('[data-corpo-tabela]');

    const linhaDaTabela = document.createElement('tr');
    corpoDaTabela.appendChild(linhaDaTabela);

    const inputNome = document.querySelector('[data-nome]');
    const nomeAluno = inputNome.value;

    const inputEndereco = document.querySelector('[data-endereco]');
    const enderecoAluno = inputEndereco.value;

    const inputTelefone = document.querySelector('[data-telefone]');
    const telefoneAluno = inputTelefone.value;
   

    var dadosDoAluno = [nomeAluno, enderecoAluno, telefoneAluno];

    if(nomeAluno == '' || enderecoAluno == '' || telefoneAluno == ''){
        
        alert("Por favor, preencha os campos obrigatórios");
    }
    else{
        // Cria celulas na tabela e insere cada informação do aluno em cada uma das celulas
        for(var i = 0; i < dadosDoAluno.length; i++){

                const celulaDaTabela = document.createElement('td');
                celulaDaTabela.classList.add('linha-da-tabela');
                celulaDaTabela.innerHTML = dadosDoAluno[i];
                linhaDaTabela.appendChild(celulaDaTabela);
            
        } 

        //Limpa o campo de preenchimento do input após a finalização do cadastro
        var inputDosDados = [inputNome, inputEndereco, inputTelefone];

        for(var i = 0; i < inputDosDados.length; i++){
            inputDosDados[i].value = '';
        }
        criarBotaoExcluir(linhaDaTabela);
    }
}

const enviarCadastro = document.querySelector('[data-enviar-cadastro]');
enviarCadastro.addEventListener('click', BotaoCadastrar);

function criarBotaoExcluir(linha){
    var botaoExcluir = document.createElement('button');
    botaoExcluir.innerHTML = "Excluir";
    linha.appendChild(botaoExcluir);
    botaoExcluir.addEventListener("click", excluirCadastro);
    return botaoExcluir;
}
function excluirCadastro(){
    this.parentElement.remove();
}

