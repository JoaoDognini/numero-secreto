const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    exibeChute(chute);
    verificaValorValido(chute);

    console.log(event.results[0][0].transcript);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>    
    `
}

recognition.addEventListener('end', () => recognition.start())