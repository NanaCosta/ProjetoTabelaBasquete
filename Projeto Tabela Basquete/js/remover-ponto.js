var ponto = document.querySelectorAll(".ponto");

var tabela = document.querySelector("#tabela-pontos");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
