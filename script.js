// 🔹 Agregar efecto de clic a los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        button.style.transform = "scale(0.95)";  // Efecto de clic
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 200);
    });
});

// 🔹 Reproducir música automáticamente en la página de Música y pausar la anterior
if (document.title === "Música") {
    document.addEventListener("DOMContentLoaded", function() {
        let audioTracks = document.querySelectorAll("audio");

        audioTracks.forEach(audio => {
            audio.addEventListener("play", function() {
                // Pausar otras canciones en reproducción
                audioTracks.forEach(track => {
                    if (track !== audio) {
                        track.pause();
                    }
                });
            });
        });

        // Autoplay primera canción
        if (audioTracks.length > 0) {
            audioTracks[0].play().catch(error => console.log("Autoplay bloqueado por el navegador", error));
        }
    });
}

// 🔹 Carrusel de Historias Estilo Instagram
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".story-track");
    const stories = document.querySelectorAll(".story");
    const prevButton = document.getElementById("prevStory");
    const nextButton = document.getElementById("nextStory");
    
    let currentIndex = 0;

    if (track && prevButton && nextButton) {
        nextButton.addEventListener("click", function() {
            if (currentIndex < stories.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia al inicio
            }
            updateCarousel();
        });

        prevButton.addEventListener("click", function() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = stories.length - 1; // Va a la última historia
            }
            updateCarousel();
        });

        function updateCarousel() {
            const newTransform = -currentIndex * 100 + "%";
            track.style.transform = "translateX(" + newTransform + ")";
        }
    }
});

// 🔹 Reproductor de video en la sección de Videos (si hay videos locales)
if (document.title === "Videos") {
    document.addEventListener("DOMContentLoaded", function() {
        let videos = document.querySelectorAll("video");

        videos.forEach(video => {
            video.addEventListener("play", function() {
                videos.forEach(otherVideo => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });
    });
}
document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById("popup-historia");
    let closePopup = document.getElementById("close-popup");

    // Verifica si el usuario ya vio el pop-up antes
    if (!localStorage.getItem("historiaVisto")) {
        popup.classList.add("show"); // Muestra el pop-up
    }

    // Cuando el usuario presiona el botón, oculta el pop-up y guarda en localStorage
    closePopup.addEventListener("click", function() {
        popup.classList.remove("show");
        localStorage.setItem("historiaVisto", "true");
    });
});