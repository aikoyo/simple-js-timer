    let intervalo;
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let millisegundos = 0;
    let estado = "parado";

    function controlarCronometro() {
        if (estado === 'parado') {
            StarBtn();
            document.getElementById('StartBtn').innerText = 'Stop';
        } else {
            StopBtn();
            document.getElementById('StartBtn').innerText = 'Continue';
        }
    }

    function StarBtn() {
        intervalo = setInterval(() => {
            millisegundos += 10;

            if (millisegundos === 1000) {
                millisegundos = 0;
                segundos++;
            }

            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }

            if (minutos === 60) {
                minutos = 0;
                horas++;
            }

            atualizarDisplay();
        }, 10);

        estado = 'iniciado';
    }

    function StopBtn() {
        clearInterval(intervalo);
        estado = 'parado';
    }

    function resetarCronometro() {
        clearInterval(intervalo);
        horas = 0;
        minutos = 0;
        segundos = 0;
        millisegundos = 0;
        estado = 'parado';
        document.getElementById('StartBtn').innerText = 'Start';
        atualizarDisplay();
    }

    function atualizarDisplay() {
        document.getElementById('horas').innerText = formatarNumero(horas);
        document.getElementById('minutos').innerText = formatarNumero(minutos);
        document.getElementById('segundos').innerText = formatarNumero(segundos);
        document.getElementById('millisegundos').innerText = formatarNumero(millisegundos);
    }

    function formatarNumero(numero) {
        return numero < 10 ? '0' + numero : numero;
    }