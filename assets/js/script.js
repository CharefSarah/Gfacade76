document.getElementById('logo').onclick = () => {
  window.location.href = 'index.html'; // Redirige vers la page d'accueil
};

const slider = document.getElementById('slider');
const slides = slider.getElementsByClassName('slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  updateSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  updateSlide(currentIndex);
});


window.addEventListener('load', () => {

  document.body.style.overflow = 'hidden';


  setTimeout(() => {

    const loader = document.getElementById('loader');
    loader.classList.add('swipeUp');
  }, 4000);


  setTimeout(() => {

    document.body.style.overflow = 'auto';
  }, 5000);
});


