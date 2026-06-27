// ================================
// CONFESSION PAGE
// ================================

const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");
const letterContainer = document.getElementById("letterContainer");
const music = document.getElementById("bgMusic");

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open flap
    envelope.classList.add("open");

    // Start music (if available)
    if (music) {

        music.volume = 0;

        music.play().catch(() => {});

        let volume = 0;

        const fade = setInterval(() => {

            volume += 0.02;

            if (volume >= 0.35) {

                volume = 0.35;
                clearInterval(fade);

            }

            music.volume = volume;

        }, 100);

    }

    // Wait for flap animation
    setTimeout(() => {

        envelopeContainer.classList.add("hide-envelope");

        letterContainer.classList.add("show-letter");

    }, 900);

});