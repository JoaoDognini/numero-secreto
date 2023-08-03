function verificaValorValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        if (chute == 'game over') {
            document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
            document.body.style.backgroundColor = 'black';
        } else elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (maiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: valor deve estar entre ${valorMinimo} e ${valorMaximo}</div>`;
        return;
    } else {
        elementoChute.innerHTML += numero < numeroSecreto ? `<div>O número secreto é maior que ${numero} <i class="fa-solid fa-up-long"></i></div>` : `<div>O número secreto é menor ${numero} <i class="fa-solid fa-down-long"></i></div>`
    }

    if (numero === numeroSecreto) document.body.innerHTML = `
    <h1>Parabéns, você acertou!</h1>
    <h3>O número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function maiorOuMenor(numero) {
    return numero > valorMaximo || numero < valorMinimo
}

document.body.addEventListener('click', event => {
    if (event.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})