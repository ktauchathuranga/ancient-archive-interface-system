document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('myCarousel');
  const slides = carousel.querySelectorAll('.carousel-item');
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds

  // Function to show a slide
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.opacity = i === index ? '1' : '0';
          slide.classList.toggle('active', i === index);
      });
  }

  // Initially show the first slide
  showSlide(currentSlide);

  // Set up the interval to automatically transition slides
  setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }, slideInterval);

  // Add event listeners for the navigation buttons
  document.getElementById('btn-custom-prev').addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  });

  document.getElementById('btn-custom-next').addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  });
});