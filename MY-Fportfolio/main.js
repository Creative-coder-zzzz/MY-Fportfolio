//toggle
let butn = document.querySelector("#menu-icon");
let swt = "yes";
console.log(butn);
butn.onclick = () =>{
  butn.classList.toggle('bx-x');
}
butn.onclick =() =>{
  if(swt==="yes"){
    document.querySelector(".dropdown").style.display ="flex";
    butn.classList.remove('bx-menu');
    butn.classList.add('bx-x');

    swt = "no";
  }
  else{
    document.querySelector(".dropdown").style.display ="none";
    butn.classList.remove('bx-x');
    butn.classList.add('bx-menu');
    swt = "yes";
  }
};

//darkmode
let darkmode = document.querySelector('#darkMode-icon');
darkmode.onclick = () =>{
  darkmode.classList.toggle('bx-sun');
  document.body.classList.toggle('darkmode');
} 

//menu icon navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//scroll reveal
 ScrollReveal({
    reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
   });
   ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
   ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form ',{ origin: 'bottom' });
   ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
   ScrollReveal().reveal('.home-content h3, .home-content p, .about ', { origin: 'right' });