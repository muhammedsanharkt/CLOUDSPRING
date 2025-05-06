    const images = document.querySelectorAll('#slider img');
    let index = 0;
    let timer;
// Function to show the current slide
    function showSlide(i) {
      images.forEach(img => img.classList.remove('active'));
      images[i].classList.add('active');
      updateIndicators(i); // Update radio buttons
      
    }
// Function to show the next slide
    function nextSlide() {
      index = (index + 1) % images.length;
      showSlide(index);
    }
// Function to show the previous slide
    function prevSlide() {
      index = (index - 1 + images.length) % images.length;
      showSlide(index);
    }
// Function to start the automatic slide show
    function startAutoSlide() {
      timer = setInterval(nextSlide, 2000);
    }
// Function to stop the automatic slide show  
    function stopAutoSlide() {
      clearInterval(timer);
    }
// Event listeners for the next and previous buttons
    const slider = document.getElementById('slider');
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

// Update radio buttons when image changes
function updateIndicators(i) {
  const indicators = document.querySelectorAll('.indicator input');
  indicators.forEach((input, idx) => {
    input.checked = idx === i;
  });
}


    showSlide(index);
    startAutoSlide();