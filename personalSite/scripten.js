const images = document.querySelectorAll('.carousel-images img');
const progressBar = document.querySelector('.progress span');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const buttons = document.querySelector('.carousel-buttons');

let currentIndex = 0;

const info = [
    { title: "PHP project", description: "A brief description will be provided here for my upcoming PHP project." },
    { title: "Vue.js project", description: "A brief description will be provided here for my upcoming Vue.js project." },
    { title: "Angular project", description: "A brief description will be provided here for my upcoming Angular project." },
    { title: "Node.js project", description: "A brief description will be provided here for my upcoming Node.js project." }
];

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('active', 'left', 'right');
        if (index === currentIndex) {
            img.classList.add('active');
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('left');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('right');
        }
    });

    title.textContent = info[currentIndex].title;
    description.textContent = info[currentIndex].description;
    buttons.style.display = 'block';
    progressBar.style.width = `${(currentIndex + 1) / images.length * 100}%`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

updateCarousel();

function openModal() {
    document.getElementById("contactModal").style.display = "block";
}


function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("contactModal")) {
        closeModal();
    }
}

document.querySelector('.hun_page').addEventListener('click', () => {
    window.location.href = "https://dominik-55.github.io/indexhu.html";
});

document.querySelector('.en_page').addEventListener('click', () => {
    window.location.href = "https://dominik-55.github.io/indexen.html";
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
