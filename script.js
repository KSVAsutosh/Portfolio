const words = [
  "Software Developer",
  "Data Science Enthusiast",
  "Problem Solver",
  "Full Stack Developer",
  "Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

/* --------------------
   Typing Animation
-------------------- */

function typeEffect() {

  if (charIndex < words[wordIndex].length) {

    typingElement.textContent +=
      words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }
}

function eraseEffect() {

  if (charIndex > 0) {

    typingElement.textContent =
      words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

/* --------------------
   Scroll Animation
-------------------- */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(
  ".card,.project-card,.timeline-card,.cert-card,.skill-card"
)
.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});

/* --------------------
   Active Navbar
-------------------- */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop
      &&
      pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      ===
      "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

// Animated Counters

document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {

    const updateCounter = () => {

      const target =
        +counter.getAttribute("data-target");

      const count =
        +counter.innerText;

      const increment =
        Math.ceil(target / 100);

      if (count < target) {

        counter.innerText =
          Math.min(count + increment, target);

        setTimeout(updateCounter, 20);

      } else {

        counter.innerText = target;

      }

    };

    updateCounter();

  });

});

/* Particle Background */

tsParticles.load("tsparticles", {

  background: {
    color: {
      value: "#0f172a"
    }
  },

  particles: {

    number: {
      value: 40
    },

    color: {
      value: "#38bdf8"
    },

    links: {
      enable: true,
      color: "#38bdf8",
      distance: 150,
      opacity: 0.2
    },

    move: {
      enable: true,
      speed: 1
    },

    opacity: {
      value: 0.4
    },

    size: {
      value: {
        min: 1,
        max: 3
      }
    }

  }

});

/* --------------------
   Start Typing
-------------------- */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    typeEffect();

  }
);