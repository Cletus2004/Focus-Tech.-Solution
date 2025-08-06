const skillSlides = document.querySelectorAll("#skills-slideshow .slide");
let skillIndex = 0;

function showNextSkill() {
  skillSlides[skillIndex].classList.remove("active");
  skillIndex = (skillIndex + 1) % skillSlides.length;
  skillSlides[skillIndex].classList.add("active");
}

setInterval(showNextSkill, 3000);

// About page slideshow
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#about-slideshow .about-slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);

  // Typewriter effect
  const text = "Delivering trusted IT solutions with precision and care...";
  const typewriter = document.getElementById('typewriter');
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
});


function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}setInterval(showNextSlide, 3000);

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.skills-slideshow img');
  const dotsContainer = document.querySelector('.dots-container');
  let index = 0;

  // Create dots dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('span');

  function showSlide(i) {
    slides.forEach((slide, idx) => slide.classList.toggle('active', idx === i));
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
    index = i;
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  const text = "Thank You For Connecting With Focus Tech!";
  const animatedIntro = document.getElementById('animated-intro');
  let i = 0;

  function type() {
    if (i < text.length) {
      animatedIntro.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.project-video');

  videos.forEach(video => {
    video.play(); // Autoplay muted
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => video.pause());
  });
});
