const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeLabel = document.getElementById("darkModeLabel");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    darkModeLabel.classList.remove("fa-moon");
    darkModeLabel.classList.add("fa-sun");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    darkModeLabel.classList.remove("fa-sun");
    darkModeLabel.classList.add("fa-moon");
};

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Verifica o estado do dark mode ao carregar a página
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
    darkModeToggle.checked = true;
} else {
    disableDarkMode();
    darkModeToggle.checked = false;
}
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

function myFunction() {
    alert("Mensagem enviada com sucesso!");
}

