const menorValor = document.getElementById('menor-valor');
const maiorValor = document.getElementById('maior-valor');
const valorMinimo = 0;
const valorMaximo = 1000;

const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)
menorValor.innerHTML = valorMinimo;
maiorValor.innerHTML = valorMaximo;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * valorMaximo + 1)
}