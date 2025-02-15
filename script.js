// script.js

// 🔹 Agregar efecto de clic a los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        button.style.transform = "scale(0.95)";  // Efecto de clic
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 200);
    });
});

// 🔹 Reproducir música automáticamente en la página de Música
if (document.title === "Música") {
    document.addEventListener("DOMContentLoaded", function() {
        let audio = document.querySelector("audio");
        if (audio) {
            audio.play().catch(error => console.log("Autoplay bloqueado por el navegador", error));
        }
    });

    // 🔹 Pausar la música anterior cuando se reproduce una nueva
    document.addEventListener("DOMContentLoaded", function() {
        const audios = document.querySelectorAll("audio");

        audios.forEach(audio => {
            audio.addEventListener("play", function() {
                // Pausar todos los audios excepto el que se está reproduciendo
                audios.forEach(otherAudio => {
                    if (otherAudio !== audio) {
                        otherAudio.pause();
                    }
                });
            });
        });
    });
}




