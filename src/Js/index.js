const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
};
function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
};

btnAvancar.addEventListener("click", function () {
    esconderCartaoSelecionado()

    if (cartaoAtual == 6) {
        cartaoAtual = -1
    };

    if (cartaoAtual === cartoes.length - 1) return;

    cartaoAtual++;

    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) {
        cartaoAtual = 7
    };

    esconderCartaoSelecionado()
    if (cartaoAtual === 0) return;

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});



