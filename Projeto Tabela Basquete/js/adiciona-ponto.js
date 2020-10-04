var temMinimo = 0;
var temMaximo = 0;
var quebraMin = 0;
var quebraMax = 0;

var botaoAdicionar = document.querySelector("#adicionar-placar");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var ponto = obtemPontoDoFormulario(form);

    var erros = validaPonto(ponto);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }


    adicionaPontosNaTabela(ponto);

    form.reset();
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    form.jogo.focus();
});

function obtemPontoDoFormulario(form) {

    var ponto= {
        jogo: form.jogo.value,
        placar: form.placar.value,
    }
    return ponto;
}

function montaTr(ponto) {
    var pontoTr = document.createElement("tr");
    pontoTr.classList.add("ponto");

    if (temMinimo == 0 && temMaximo == 0){
        temMinimo = ponto.placar;
        temMaximo = ponto.placar;
    }

    if (parseInt(ponto.placar) < parseInt(temMinimo)){
        temMinimo = ponto.placar;
        quebraMin++;
    } else if (parseInt(ponto.placar) > parseInt(temMaximo)){
        temMaximo = ponto.placar;
        quebraMax++;
    }

    pontoTr.appendChild(montaTd(ponto.jogo, "info-jogo"));
    pontoTr.appendChild(montaTd(ponto.placar, "info-placar"));
    pontoTr.appendChild(montaTd(temMinimo, "info-temMinimo"));
    pontoTr.appendChild(montaTd(temMaximo, "info-temMaximo"));
    pontoTr.appendChild(montaTd(quebraMin, "info-quebraMin"));
    pontoTr.appendChild(montaTd(quebraMax, "info-quebraMax"));

    return pontoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionaPontosNaTabela(ponto) {
    var pontoTr = montaTr(ponto);
    var tabela = document.querySelector("#tabela-pontos");
    tabela.appendChild(pontoTr);
}

function validaPonto(ponto) {
    var erros = [];
    if (ponto.jogo.length == 0 || ponto.placar.length == 0) {
        erros.push("O campo não pode ser em branco");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

