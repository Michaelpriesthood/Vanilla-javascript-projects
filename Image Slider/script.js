// Selectors
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const slides = document.querySelectorAll('.slide');

const intlv = 5000;
const auto = false;
let slideInterval;

// Functions
function nextSlide() {
  const currentSlide = document.querySelector('.current');

  currentSlide.classList.remove('current');
  //   checking if the current image has a next sibling
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
}

function prevSlide() {
  const currentSlide = document.querySelector('.current');

  currentSlide.classList.remove('current');
  //   checking if the current image has a prev sibling
  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
}

// Events Listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  clearInterval();
  if (auto) {
    slideInterval = setInterval(nextSlide, intlv);
  }
});
prevBtn.addEventListener('click', () => {
  prevSlide();
});

// For automatic slide
if (auto) {
  slideInterval = setInterval(nextSlide, intlv);
}
