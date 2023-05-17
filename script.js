var slideIndex = 0;
var slides = document.querySelectorAll('.carousel-item');
var prevBtn = document.querySelector('.carousel-prev');
var nextBtn = document.querySelector('.carousel-next');
var interval;

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  var slideWidth = slides[0].clientWidth;
  var translateX = -slideWidth * slideIndex;

  document.querySelector('.carousel-inner').style.transform = `translateX(${translateX}px)`;

  updateIndicators();
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function updateIndicators() {
  var indicators = document.querySelectorAll('.carousel-indicators span');
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
  }
  indicators[slideIndex].classList.add('active');
}

function startAutoplay() {
  interval = setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
}

function stopAutoplay() {
  clearInterval(interval);
}

showSlide(slideIndex);
startAutoplay();
