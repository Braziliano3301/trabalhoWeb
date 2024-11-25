document.addEventListener("DOMContentLoaded", function() {
    let pontuacao = 0;

    const formJogador = document.getElementById("formJogador");
    const formPalpite = document.getElementById("formPalpite");
    const nomeJogadorInput = document.getElementById("nomeJogador");
    const tituloJogo = document.getElementById("tituloJogo");
    const palpiteInput = document.getElementById("palpite");
    const resultadoDiv = document.getElementById("resultado");
    const pontuacaoDiv = document.getElementById("pontuacao");
    const reiniciarJogoBtn = document.getElementById("reiniciarJogo");

    formJogador.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const nomeJogador = nomeJogadorInput.value;
        tituloJogo.textContent = `Jogo da Sorte - Boa sorte, ${nomeJogador}!`;
        formJogador.classList.add("d-none");
        formPalpite.classList.remove("d-none");
        pontuacaoDiv.textContent = `Pontuação: ${pontuacao}`;
    });

    formPalpite.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const palpiteJogador = parseInt(palpiteInput.value);
        const numeroSorteado = Math.floor(Math.random() * 10) + 1;

        resultadoDiv.classList.remove("d-none", "alert-success", "alert-danger");
        if (palpiteJogador === numeroSorteado) {
            resultadoDiv.classList.add("alert-success");
            resultadoDiv.textContent = `Parabéns! Você acertou! O número era ${numeroSorteado}.`;
            pontuacao++;
        } else {
            resultadoDiv.classList.add("alert-danger");
            resultadoDiv.textContent = `Que pena! Você errou. O número sorteado era ${numeroSorteado}. Tente novamente!`;
        }
        pontuacaoDiv.textContent = `Pontuação: ${pontuacao}`;
        reiniciarJogoBtn.classList.remove("d-none");
        formPalpite.querySelector("button[type='submit']").classList.add("d-none");
    });

    reiniciarJogoBtn.addEventListener("click", function() {
        resultadoDiv.classList.add("d-none");
        palpiteInput.value = '';
        formPalpite.querySelector("button[type='submit']").classList.remove("d-none");
        reiniciarJogoBtn.classList.add("d-none");
    });
});
