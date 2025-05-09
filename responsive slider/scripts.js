
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });



  const slides = document.querySelectorAll(".slide");
  let current = 0;
  let slideInterval;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }
  
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
  

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // every 5 seconds
  }
  
  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");
hamburger.addEventListener("click",()=>{
  navlinks.classList.toggle("active");
});
  
  showSlide(current);
  startAutoSlide();
  