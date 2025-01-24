document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1; // Current slide index
  const slides = document.querySelectorAll(".mySlides");
  const thumbnails = document.querySelectorAll(".demo");
  const captionText = document.getElementById("caption");

  /**
   * Updates the displayed slide and the active thumbnail.
   * @param {number} n - The slide number to display.
   */
  const showSlide = (n) => {
    // Loop back to the first or last slide if index is out of range
    slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

    // Update the visibility of slides
    slides.forEach((slide, index) => {
      slide.style.display = index + 1 === slideIndex ? "block" : "none";
    });

    // Update active state of thumbnails
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle("active", index + 1 === slideIndex);
    });

    // Update the caption
    captionText.textContent = thumbnails[slideIndex - 1]?.alt || "";
  };

  /**
   * Changes the current slide by the specified offset.
   * @param {number} n - The offset to change the slide index.
   */
  const changeSlide = (n) => showSlide(slideIndex + n);

  /**
   * Sets the current slide directly by its index.
   * @param {number} n - The index of the slide to display.
   */
  const setCurrentSlide = (n) => showSlide(n);

  // Add event listeners for navigation controls
  document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
  document.querySelector(".next").addEventListener("click", () => changeSlide(1));

  // Add event listeners for thumbnails
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => setCurrentSlide(index + 1));
  });

  // Initialize the gallery with the first slide
  showSlide(slideIndex);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
});
slides.forEach((slide, index) => {
    slide.classList.toggle("active", index + 1 === slideIndex);
});

});

