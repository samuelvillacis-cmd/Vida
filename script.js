document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letter-container');
    const surpriseBtn = document.getElementById('surprise-btn');
    const finalMessage = document.getElementById('final-message');
    const petalsContainer = document.getElementById('petals-container');

    // Función para crear pétalos cayendo
    function createPetals() {
        const petalCount = 30;
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            // Randomize position, size, and animation duration
            const startX = Math.random() * 100;
            const size = Math.random() * 15 + 10;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;

            petal.style.left = `${startX}vw`;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;

            petalsContainer.appendChild(petal);
        }
    }

    // Iniciar pétalos al cargar
    createPetals();

    // Evento para abrir el sobre
    envelopeWrapper.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            
            // Esperar a que la animación de la solapa termine para mostrar la carta
            setTimeout(() => {
                envelopeWrapper.style.display = 'none';
                letterContainer.classList.remove('hidden');
                letterContainer.classList.add('fade-in');
            }, 1000);
        }
    });

    // Evento del botón sorpresa
    surpriseBtn.addEventListener('click', () => {
        letterContainer.style.display = 'none';
        finalMessage.classList.remove('hidden');
        
        // Crear más flores intensas para el final
        const finalFlowersContainer = finalMessage.querySelector('.flowers-container');
        for (let i = 0; i < 50; i++) {
            const flower = document.createElement('div');
            flower.innerHTML = '💜';
            flower.style.position = 'absolute';
            flower.style.fontSize = `${Math.random() * 2 + 1}rem`;
            flower.style.left = `${Math.random() * 100}vw`;
            flower.style.top = `${Math.random() * 100}vh`;
            flower.style.opacity = '0';
            flower.style.animation = `scaleIn 0.5s ease forwards ${Math.random() * 2}s`;
            
            finalFlowersContainer.appendChild(flower);
        }
    });
});
