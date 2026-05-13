const revealElements = document.querySelectorAll(".about-preview, .services, .card, .contact-form");

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
