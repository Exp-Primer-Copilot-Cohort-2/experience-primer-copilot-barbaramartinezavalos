function countdown(seconds) {
    let timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            console.log("¡Tiempo terminado!");
        } else {
            console.log(seconds);
            seconds--;
        }
    }, 1000);
}

countdown(10); // Cambia el número para establecer el tiempo en segundos