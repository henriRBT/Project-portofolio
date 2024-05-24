const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToogle) {
  navToogle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu Mobile
const navLink = document.querySelectorAll(".nav_link");

const LinkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", LinkAction));

// Add Blur Header
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// Email JS
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm("service_bglsjei", "template_jbt2qs9", "#contact-form", "Ag34ZSdMX28PW3Wei").then(
    () => {
      contactMessage.textContent = "Message send successfully ✅";

      // remove message after 5 detik
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // clearn input fields
      contactForm.reset();
    },
    () => {
      contactMessage.textContent = "Mesage not send (services error)❌";
    }
  );
};

contactForm.addEventListener("submit", sendEmail);

// ========================= Show Scroll Up =====================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL Reveal Animation ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animation repeat
})

sr.reveal(`.home_data, .experience, .organization, .assistant, .skill, .contact_container` )
sr.reveal(`.home_img`, {delay: 600})
sr.reveal(`.home_scroll`, {delay: 800})
sr.reveal(`.work_card, .service_card`, {interval: 100})
sr.reveal(`.about_content`, {origin: 'right'})
sr.reveal(`.about_img`, {origin: 'left'})
