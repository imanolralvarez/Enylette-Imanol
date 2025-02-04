const mensajes = [
    "¿Estás segura?",
    "¿De verdad?",
    "¿En serio?",
    "Pamplinas",
    "¡Tal vez esto es una prueba de humildad!",
    "Como así perrito",
    "Sea seria sierva",
    "Si sabes que hay un botón que dice sí?",
    "Cada vez que tocas No una hada muere",
    "¡Bobolona!"
];

let indiceMensaje = 0;
let escalaSi = 1;

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heartsContainer.appendChild(heart);
    }
}

function handleNoClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    // Cambiar el texto del botón "No"
    noButton.textContent = mensajes[indiceMensaje];
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;
    
    // Aumentar el tamaño del botón "Sí"
    if (escalaSi < 8) {
        escalaSi *= 1.2;
        yesButton.style.transform = `scale(${escalaSi})`;
    }
    
    // Efecto de vibración
    noButton.classList.add('vibrate');
    setTimeout(() => noButton.classList.remove('vibrate'), 300);
    
    // Cambiar texto del botón "Sí" al máximo tamaño
    if (escalaSi >= 8) {
        yesButton.textContent = "Si?? :)";
        yesButton.style.fontSize = '2em';
    }
}

function handleYesClick() {
    const confetiEmojis = ['🎉', '💖', '🥰', '🎊', '✨', '💕'];
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.textContent = confetiEmojis[Math.floor(Math.random() * confetiEmojis.length)];
        confeti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 30 + 20}px;
            animation: confetiVuelo 1.5s ease-out both;
            z-index: 9999;
            pointer-events: none;
            transform: rotate(${Math.random() * 360}deg);
        `;
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 1500);
    }
    setTimeout(() => window.location.href = "yes_page.html", 1200);
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    document.querySelector('.no-button').style.visibility = 'visible';
});
