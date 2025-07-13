const containerTestimonials = document.querySelector(".container-testimonials");
const cardTestimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentIndex = 0;
const totalCardTestimonials = cardTestimonials.length;
let autoPlayInterval;

function updateCarousel() {
  const offset = currentIndex * containerTestimonials.clientWidth;
  containerTestimonials.scrollTo({
    left: offset,
    behavior: "smooth",
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCardTestimonials;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + totalCardTestimonials) % totalCardTestimonials;
  updateCarousel();
});

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCardTestimonials;
    updateCarousel();
  }, 5000);
};

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

startAutoPlay();
