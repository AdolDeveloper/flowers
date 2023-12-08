document.addEventListener("DOMContentLoaded", function () {
    const firefliesContainer = document.getElementById("fireflies-container");

    // Ajusta el número de luciérnagas según sea necesario
    const numberOfFireflies = 50;

    for (let i = 0; i < numberOfFireflies; i++) {
        createFirefly();
    }

    function createFirefly() {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.top = Math.random() * 100 + "%";
        firefly.style.left = Math.random() * 100 + "%";
        firefly.style.animationDuration = Math.random() * 6 + 1 + "s"; // Duración de la animación entre 1 y 4 segundos
        firefliesContainer.appendChild(firefly);
    }

    const magicTextLeft = document.getElementById("magic-text-left");
    const magicTextRight = document.getElementById("magic-text-right");

    magicTextLeft.classList.remove("hidden");
    magicTextRight.classList.remove("hidden");

    // Asegúrate de que el audio esté disponible antes de intentar reproducirlo
    const backgroundAudio = document.getElementById("background-audio");

    if (backgroundAudio) {
        // Verifica si la reproducción automática está permitida
        const isAutoplayAllowed = backgroundAudio.autoplay;

        if (!isAutoplayAllowed) {
            // Si la reproducción automática no está permitida, intenta reproducir manualmente
            backgroundAudio.play().catch(function(error) {
                console.error("Error al reproducir el audio:", error);
            });
        }
    }
});
