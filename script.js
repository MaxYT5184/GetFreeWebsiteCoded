const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1,
});

revealElements.forEach(el => observer.observe(el));

const discordBtn = document.querySelector('.discord-float');
discordBtn.addEventListener('click', () => {
  alert('You are about to join my Discord server!');
});
