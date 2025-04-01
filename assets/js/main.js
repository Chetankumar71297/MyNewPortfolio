/*Email js*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_uk4x6je",
      "template_bgc611d",
      "#contact-form",
      "k7G3xLA-q0IcrfABE"
    )
    .then(
      () => {
        //show sent message
        contactMessage.textContent = "Message sent successfully!";

        //Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //Reset form
        contactForm.reset();
      },
      (err) => {
        contactMessage.textContent = `An error occurred: ${err.text}`;
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
/*Show scroll up*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*Scroll section active line*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionClass = document.querySelector(
      `.nav__list a[href*=${sectionId}]`
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*Scroll reveal animation*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  // reset: 400, //Animation repeat after 400ms
});

sr.reveal(".perfil, .contact__form");
sr.reveal(".info", { origin: "left", delay: 800 });
sr.reveal(".skills", { origin: "left", delay: 1000 });
sr.reveal(".about", { origin: "right", delay: 1200 });
sr.reveal(".projects__card, .services__card, .experience__card", {
  interval: 100,
});
