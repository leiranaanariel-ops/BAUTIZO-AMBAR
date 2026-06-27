// =====================================
// ELEMENTOS
// =====================================

const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const timer = document.getElementById("timer");

const calendarButton = document.getElementById("calendarButton");

const rsvpForm = document.getElementById("rsvpForm");

let musicPlaying = false;


// =====================================
// ABRIR SOBRE
// =====================================

if (envelope) {

    envelope.addEventListener("click", async () => {

        envelope.classList.add("open");

        setTimeout(() => {

            invitation.classList.remove("hidden");

            invitation.scrollIntoView({

                behavior: "smooth"

            });

        },900);

        if (!musicPlaying) {

            try {

                await music.play();

                musicPlaying = true;

                musicButton.textContent = "⏸ Pausar música";

            } catch (error) {

                console.log(error);

            }

        }

    });

}


// =====================================
// BOTÓN MÚSICA
// =====================================

music.volume = 0.35;

musicButton.addEventListener("click", async () => {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.textContent = "🎵 Música";

    } else {

        try {

            await music.play();

            musicPlaying = true;

            musicButton.textContent = "⏸ Pausar música";

        } catch (error) {

            console.log(error);

        }

    }

});


// =====================================
// CUENTA REGRESIVA
// =====================================

function updateCountdown() {

    const eventDate = new Date("2026-08-29T15:00:00");

    const now = new Date();

    const difference = eventDate - now;

    if (difference <= 0) {

        timer.textContent = "¡Hoy es el gran día!";

        return;

    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    const seconds = Math.floor((difference / 1000) % 60);

    timer.textContent =
        `${days} días · ${hours} horas · ${minutes} minutos · ${seconds} segundos`;

}

updateCountdown();

setInterval(updateCountdown,1000);
// =====================================
// GOOGLE CALENDAR
// =====================================

if (calendarButton) {

    calendarButton.addEventListener("click", function (e) {

        e.preventDefault();

        const inicio = "20260829T150000";
        const fin = "20260829T170000";

        const titulo = encodeURIComponent("Santo Bautizo de Ámbar Antonella Navarrete Orozco");
        const lugar = encodeURIComponent("Parroquia San Pablo");
        const detalles = encodeURIComponent("Te esperamos para celebrar este hermoso momento.");

        const url =
            `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${inicio}/${fin}&location=${lugar}&details=${detalles}`;

        window.open(url, "_blank");

    });

}


// =====================================
// WHATSAPP
// =====================================

if (rsvpForm) {

    rsvpForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const asistencia = document.getElementById("asistencia").value;
        const adultos = document.getElementById("adultos").value;
        const ninos = document.getElementById("ninos").value;
        const comentario = document.getElementById("comentario").value.trim();

        const telefono = "56954500229";

        const mensaje =
`🌸 Santo Bautizo de Ámbar Antonella 🌸

Nombre: ${nombre}

Asistencia: ${asistencia}

Adultos: ${adultos}

Niños: ${ninos}

Comentario:
${comentario}`;

        window.open(

            `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,

            "_blank"

        );

    });

}


// =====================================
// ANIMACIÓN AL HACER SCROLL
// =====================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("main section").forEach((section) => {

    observer.observe(section);

});


// =====================================
// MENSAJE DE CARGA
// =====================================

console.log("Invitación cargada correctamente.");