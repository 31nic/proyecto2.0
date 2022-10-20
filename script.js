
function evaluar() {
    respuestas = new Array;
    for (i = 1; i < 39; i++) {
        respuestas[i] = document.querySelector('input[name="txtp' + i + '"]:checked').value;

    }

    suma = 0;
    respuestas.forEach(respuesta => {
        suma += parseInt(respuesta);
    });
    if (suma > 12 && suma < 24) {
        mandarMensaje(2);
    }
    if (suma >= 24) {
        mandarMensaje(3);
    }
    if (suma <= 12) {
        mandarMensaje(1);
    }
}

function mandarMensaje(numero) {
    switch (numero) {
        case 1:
            alert("Tienes una personalidad de tipo B: Eres bastante menos vulnerable a sufrir ansiedad que otras personas, no te muestras ambicioso ni dominante, dejas que las cosas sigan su cauce sin preocuparte en exceso. No quiere decir que nunca te muestres nervioso o angustiado si la situación te desborda, pero en general tienes un temperamento templado.")
            break;

        case 2:
            alert("Tienes una personalidad equilibrada: Te encuentras dentro de una puntuación normal, tu carácter es un equilibrio entre la personalidad A y la B. Dentro de estos parámetros es donde se encuentra la mayoría de personas. Te activas lo suficiente para ser productivo y eficiente en el trabajo o estudios, pero sabes mantener la calma en las situaciones que así lo requieren, aunque en ocasiones también te sientes nervioso.");
            break;

        case 3:
            alert("Tienes una personalidad de tipo A: Deberías relajarte y tomarte las cosas con más filosofía, pues tienes mayor peligro de padecer enfermedades coronarias, problemas psicosomáticos y estados de ansiedad.");
            break;

    }
}
