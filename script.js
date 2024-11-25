$(document).ready(function() {
    let pontuacao = 0;

    $('#formJogador').on('submit', function(evento) {
        evento.preventDefault();
        let nomeJogador = $('#nomeJogador').val();
        $('#tituloJogo').text(`Jogo da Sorte - Boa sorte, ${nomeJogador}!`);
        $('#formJogador').addClass('d-none');
        $('#formPalpite').removeClass('d-none');
        $('#pontuacao').text(`Pontuação: ${pontuacao}`);
    });

    $('#formPalpite').on('submit', function(evento) {
        evento.preventDefault();
        let palpiteJogador = parseInt($('#palpite').val());
        let numeroSorteado = Math.floor(Math.random() * 10) + 1;

        $('#resultado').removeClass('d-none alert-success alert-danger');
        if (palpiteJogador === numeroSorteado) {
            $('#resultado').addClass('alert-success').text(`Parabéns! Você acertou! O número era ${numeroSorteado}.`);
            pontuacao++;
        } else {
            $('#resultado').addClass('alert-danger').text(`Que pena! Você errou. O número sorteado era ${numeroSorteado}. Tente novamente!`);
        }
        $('#pontuacao').text(`Pontuação: ${pontuacao}`);
        $('#reiniciarJogo').removeClass('d-none');
        $('#formPalpite button[type="submit"]').addClass('d-none');
    });

    $('#reiniciarJogo').on('click', function() {
        $('#resultado').addClass('d-none');
        $('#palpite').val('');
        $('#formPalpite button[type="submit"]').removeClass('d-none');
        $('#reiniciarJogo').addClass('d-none');
    });
});
