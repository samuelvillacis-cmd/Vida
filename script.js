// DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const papers = document.querySelectorAll(".paper");

// Music Player Logic
const bgMusic = document.querySelector("#bg-music");
const musicBtn = document.querySelector("#music-btn");
let isMusicPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Reproducir Música";
    } else {
        bgMusic.play();
        musicBtn.textContent = "⏸️ Pausar Música";
    }
    isMusicPlaying = !isMusicPlaying;
});

// Book Business Logic
let currentLocation = 1;
let numOfPapers = papers.length;
let maxLocation = numOfPapers + 1;

// Initialize Z-indexes dynamically
papers.forEach((paper, index) => {
    paper.style.zIndex = numOfPapers - index;
});

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function openBook() {
    if (window.innerWidth <= 800) return;
    book.style.transform = "translateX(0%)";
}

function closeBook(isAtBeginning) {
    if (window.innerWidth <= 800) return;
    if(isAtBeginning) {
        book.style.transform = "translateX(-25%)";
    } else {
        book.style.transform = "translateX(25%)";
    }
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        if (currentLocation === 1) {
            openBook();
        }
        
        if (currentLocation === numOfPapers) {
            closeBook(false);
        }
        
        // Flip the current paper
        const paperToFlip = papers[currentLocation - 1];
        paperToFlip.classList.add("flipped");
        paperToFlip.style.zIndex = currentLocation;
        
        currentLocation++;
        updateButtons();
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        if (currentLocation === 2) {
            closeBook(true);
        }
        
        if (currentLocation === maxLocation) {
            openBook();
        }
        
        // Unflip the previous paper
        const paperToUnflip = papers[currentLocation - 2];
        paperToUnflip.classList.remove("flipped");
        paperToUnflip.style.zIndex = numOfPapers - (currentLocation - 2);
        
        currentLocation--;
        updateButtons();
    }
}

function updateButtons() {
    prevBtn.disabled = currentLocation === 1;
    nextBtn.disabled = currentLocation === maxLocation;
}

// Initial state
updateButtons();
closeBook(true);

